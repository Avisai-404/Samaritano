import { useState, useEffect, useRef } from 'react';

import globalURL from '../../globalURL';

import MemoTablero from '../MemoTablero/MemoTablero';
import MemoHUB from '../MemoHUD/MemoHUD';
import MemoWin from '../MemoAlert/MemoWIn';
import MemoPause from '../MemoAlert/MemoPause';
import MemoMessage from '../MemoAlert/MemoMessage';
import MemoActionMessage from '../MemoAlert/MemoActionMessage';

import MemoSelectNumCards from '../MemoLayouts/MemoSelectNumCards';
import MemoSelectTema from '../MemoLayouts/MemoSelectTema';

import sonidoStartGame from '../../../assets/memorama/sounds/startGame.mp3';
import sonidoParEncontrado from '../../../assets/memorama/sounds/successAudio.mp3';
import sonidoGirarTarjeta from '../../../assets/memorama/sounds/flipCard.mp3';
import sonidoGanaste from '../../../assets/memorama/sounds/win.mp3';


let numeroDeCartasEstablecido = [];

//Musica
const startGameAudio = new Audio(sonidoStartGame);
const ganasteAudio = new Audio(sonidoGanaste);
//Sonidos
const successAudio = new Audio(sonidoParEncontrado);
const girarTarjetaAudio = new Audio(sonidoGirarTarjeta);

function MemoLogica() {

  const [idRuta, setIdRuta] = useState('');
  const [recibirDatos, setRecibirDatos] = useState([]);
  //Layouts Visbles
  const [layoutMemoSelectTema, setLayoutMemoSelectTema] = useState(true);
  const [layoutSelectNumCards, setLayoutSelectNumCards] = useState(true);
  const [selectedNumCards, setSelectedNumCards] = useState(72);

  //constante para almacenar el contenido del memorama mezclado
  const [barajearTarjetas, setBarajearTarjetas] = useState([]);
  //constante para almacenar la carta que el usuario dio click
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
  //constante para controlar la animación de ver las dos cartas que el usuario volteó
  const [animacion, setAnimacion] = useState(false);

  const [tarjetasEncontradas, setTarjetasEncontradas] = useState(0);

  //Audio
  const [volumeMusic, setVolumeMusic] = useState(true);
  const [volumeSound, setVolumeSound] = useState(true);

  //Sistema de puntos
  const [movimientos, setMovimientos] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const puntosActualizados = useRef(puntos);
  const [combo, setCombo] = useState(0);
  const [totalP, setTotalP] = useState(0);
  const [totalTiempo, setTotalTiempo] = useState(0);
  const [totalMovimiento, setTotalMovimiento] = useState(0);

  //Mensajes
  const [start, setStart] = useState(false);
  const [gano, setGano] = useState(false);
  const [pauseAlert, setPauseAlert] = useState(false);
  const [mostrarMensajes, setMostrarMensajes] = useState(false);
  const [mostrarMensajesAction, setMostrarMensajesAction] = useState(false);
  const [primerTexto, setPrimerTexto] = useState(false);
  const [sengundoTexto, setSegundoTexto] = useState(false);
  const [mostrarCombo, setMostrarCombo] = useState(false);

  //Sistama de timer
  const [tiempo, setTiempo] = useState(0);
  //const [pausado, setPausado] = useState(true);
  const intervalRef = useRef();

   //Modo de Juego
   const [modoJuego, setModoJuego] = useState(1);

  /*función que recibe un arreglo del contenido del memorama duplicado 
  y retorna el mismo arreglo con los elemento mezclados*/
  const mezclarArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.floor(Math.random() * (i + 1)));
      /*EJemplo de intercambio, lo que hay en la posición a[j] pasa a la posición a[i]
       y lo que hay en la posición a[i] pasa a la posición a[j]*/
      [a[i], a[j]] = [a[j], a[i]];

    }
    return a;
  }

  const establecerNumeroCartas = (numCards) => {
    const mezclarCartas = mezclarArray(recibirDatos);
    numeroDeCartasEstablecido = mezclarCartas.slice(0,numCards);
  }

  const obtenerDatos = (url) => {
    fetch(`${globalURL}${url}`)
      .then(res => res.json())
      .then((res) => {
        setRecibirDatos(res); // Aquí puedes ver los datos correctamente
      });
  }


  const iniciarCartasTablero = () => {
    //Se llama a la función mezclarArray, pasando un arreglo que concatena el contenido del memorama dos vez
    //el retorno se pasa al arreglo mezclarContenidoList
    const mezclarContenidoList = mezclarArray([...numeroDeCartasEstablecido, ...numeroDeCartasEstablecido]);
    //Se setea la constante barajearTarjetas con un arreglo de objetos, que contienen el indice, el continido, y el estado de que no esta girada
    setBarajearTarjetas(mezclarContenidoList.map((contenido, indice) => ({ index: indice, contenido, tarjetaGirada: false })));
  }

  //Al renderizar por primera vez el componente...
  const renderizarCartasYTablero = (numCards) => {
    establecerNumeroCartas(numCards);
    iniciarCartasTablero();
    startGame();

    const timeout = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 1);
      }, 1000);
    }, 15100);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalRef.current);
    };
  };

  //Sonido
  useEffect(() => {
    if (volumeSound) {
      successAudio.volume = 0.5;
      girarTarjetaAudio.volume = 0.6;
    } else {
      successAudio.volume = 0.0;
      girarTarjetaAudio.volume = 0.0;
    }
  }, [volumeSound]);

//Musica
  useEffect(() => {
    if (volumeMusic) {
      startGameAudio.volume = 0.8;
      ganasteAudio.volume = 0.8;
    } else {
      startGameAudio.volume = 0.0;
      ganasteAudio.volume = 0.0;
    }
  }, [volumeMusic]);

  //Sistema de puntos
  useEffect(() => {
    if (combo > 0) {
      const calPuntos = puntos + 50 * combo;
      setPuntos(calPuntos);
      puntosActualizados.current = calPuntos;
      if (combo > 1) {
        setMostrarMensajesAction(true);
        setMostrarCombo(true);
        const timeout = setTimeout(() => {
          setMostrarMensajesAction(false);
          setMostrarCombo(false);
        }, 1000);

        return () => {
          clearTimeout(timeout);
        };
      }
    }
  }, [combo]);

  useEffect(() => {
    if (tarjetasEncontradas === selectedNumCards) {
      ganasteAudio.play();
      pausarCronometro();
      calculatePuntos();
      setGano(true);
    }
  }, [tarjetasEncontradas]);

  const pausarCronometro = () => {
    clearInterval(intervalRef.current);
  };

  const obtenerFormatoTiempo = () => {
    const segundos = tiempo % 60;
    const minutos = Math.floor(tiempo / 60) % 60;
    //const horas = Math.floor(tiempo / 3600);

    const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos;
    const formatoMinutos = minutos < 10 ? `0${minutos}` : minutos;
    //const formatoHoras = horas < 10 ? `0${horas}` : horas;

    return `${formatoMinutos}:${formatoSegundos}`;
  };

  const pausarJuego = () => {
    setAnimacion(true);
    pausarCronometro();
    setPauseAlert(true);
  };

  const continuarJuego = () => {
    setAnimacion(false);
    setPauseAlert(false);
    intervalRef.current = setInterval(() => {
      setTiempo((prevTiempo) => prevTiempo + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  };
  const calculatePuntos = () => {
    const totalTiempoPre = Math.max(450 - (5 * Math.max(Math.floor(tiempo - 30), 0)), 0);
    const totalMovimientoPre = Math.max(270 - (6 * Math.floor(movimientos - selectedNumCards)), 0);
    setTotalTiempo(totalTiempoPre);
    setTotalMovimiento(totalMovimientoPre);
    setTotalP(puntosActualizados.current + totalTiempoPre + totalMovimientoPre);
  }

  const handleResetGameClick = () => {
    establecerNumeroCartas(selectedNumCards);
    setTarjetaSeleccionada(null);
    iniciarCartasTablero();
    setTarjetasEncontradas(0);
    setPuntos(0);
    setMovimientos(0);
    setCombo(0);
    setTiempo(0);
    setGano(false);
    setStart(false);
    setPauseAlert(false);
    ganasteAudio.pause();
    ganasteAudio.currentTime = 0;
    startGameAudio.play();
    startGame();

    const timeout = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 1);
      }, 1000);
    }, 15100);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalRef.current);
    };
  }

  const startGame = async () => {
    setMostrarMensajes(true);
    setPrimerTexto(true);
    setAnimacion(true);
    startGameAudio.play();
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    await delay(4000);
    setPrimerTexto(false);
    setSegundoTexto(true);

    await delay(2500);
    setSegundoTexto(false);
    setStart(true);

    await delay(8600);
    setAnimacion(false);
    setMostrarMensajes(false);

  }

  //función que se llama al hacer click en alguna tarjeta y recibe un objeto (con los datos de la tarjeta)
  const handleMemoClick = memoTarjeta => {
    //se crea objeto con los datos de la tarjeta y se modifica la propiedad tarjetaGirada a true
    const memoTarjetaGirada = { ...memoTarjeta, tarjetaGirada: true };
    //se crea una copia de todas las cartas del memorama 
    let barajearTarjetasCopia = [...barajearTarjetas];
    //se elimina y agrega el contenido de la tarjeta girada (actulización)
    barajearTarjetasCopia.splice(memoTarjeta.index, 1, memoTarjetaGirada);
    //se setea barajearTarjetas con el memorama modificado
    setBarajearTarjetas(barajearTarjetasCopia);


    girarTarjetaAudio.currentTime = 0;
    girarTarjetaAudio.play();

    //Se condiciona si no hay una tarjeta seleccionada, entonces se setea tarjetaSeleccionada
    if (tarjetaSeleccionada === null) {
      setTarjetaSeleccionada(memoTarjeta);
    }
    /*si ya hay una targeta seleccionacioda se compara la selección anterior con la nueva selección
    y si son iguales, las tarjetas quedan giradas y se setea tarjetaSeleccionada a null*/
    else if (tarjetaSeleccionada.contenido === memoTarjeta.contenido) {
      setTarjetaSeleccionada(null);
      setTarjetasEncontradas((tarjetasEncontradas) => tarjetasEncontradas + 1);
      successAudio.currentTime = 0;
      successAudio.play();
      setMovimientos((movimientos) => movimientos + 1);
      setCombo((combo) => combo + 1)
      //setPuntos((puntos) => puntos + 50);
    }
    /*si no son iguales, se setea animacion a true, se hace una pausa donde las
    tarjetas se muestran por un 1seg. además de que ambas tarjetas vuelven a su estado inicial,
    y se seta tarjetaSeleccionada a null y animación a false*/
    else {
      setAnimacion(true);
      setTimeout(() => {
        barajearTarjetasCopia.splice(memoTarjeta.index, 1, memoTarjeta);
        barajearTarjetasCopia.splice(tarjetaSeleccionada.index, 1, tarjetaSeleccionada);
        setBarajearTarjetas(barajearTarjetasCopia);
        setTarjetaSeleccionada(null);
        setAnimacion(false);
      }, 1000);
      setMovimientos((movimientos) => movimientos + 1);
      setMostrarMensajesAction(false);
      setMostrarCombo(false);
      setCombo(0);
    }

  };

  return (
    //Se pasan la props a tablero
    <div className='px-2'>
      {layoutMemoSelectTema ? <MemoSelectTema setIdRuta={setIdRuta} obtenerDatos={obtenerDatos} successAudio={successAudio} setLayoutMemoSelectTema={setLayoutMemoSelectTema}/> : null}
      {layoutSelectNumCards? <MemoSelectNumCards tamanoArreglo={recibirDatos.length} setLayoutMemoSelectTema={setLayoutMemoSelectTema} successAudio={successAudio} setLayoutSelectNumCards={setLayoutSelectNumCards} setSelectedNumCards={setSelectedNumCards} renderizarCartasYTablero={renderizarCartasYTablero}/> : null}
      {layoutMemoSelectTema || layoutSelectNumCards ? null : <div className='w-full min-h-screen flex items-center justify-center flex-col '>
        <MemoMessage mostrarMensajes={mostrarMensajes} primerTexto={primerTexto} sengundoTexto={sengundoTexto} />
      <MemoActionMessage mostrarMensajesAction={mostrarMensajesAction} mostrarCombo={mostrarCombo} combo={combo} />
      <MemoWin gano={gano} puntos={puntos} totalP={totalP} totalTiempo={totalTiempo} totalMovimiento={totalMovimiento} handleResetGameClick={handleResetGameClick} modoJuego={modoJuego}/>
      <MemoPause pauseAlert={pauseAlert} volumeSound={volumeSound} setVolumeSound={setVolumeSound} volumeMusic={volumeMusic} setVolumeMusic={setVolumeMusic} continuarJuego={continuarJuego} handleResetGameClick={handleResetGameClick} />
      <MemoHUB movimientos={movimientos} puntos={puntos} obtenerFormatoTiempo={obtenerFormatoTiempo()} pausarJuego={pausarJuego} />
      <MemoTablero idRuta={idRuta} start={start} contenidoBarajeado={barajearTarjetas} animacion={animacion} handleMemoClick={handleMemoClick} selectedNumCards={selectedNumCards}/>
        
        </div>}
    </div>

  );
}
export default MemoLogica