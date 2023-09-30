import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PagInicio from './components/inicioM/PagInicio'
//Archivos del diccionario Choco
import Card from './components/diccionarioChoco/Card/seccDiccChoco';
import CardIngles from './components/diccionarioChoco/CardIngles/CardsIngles';
import SeccDiccChocoIngles from './components/diccionarioChoco/CardIngles/seccDiccChocoIngles';
import FormAdmin from './components/diccionarioChoco/formularios/formAdminAdd';
import VerCuentas from './components/diccionarioChoco/admin/verCuentas';
import LoginAdmin from './components/diccionarioChoco/formularios/loginAdmin';
import FormPublic from './components/diccionarioChoco/formularios/formPublic';

//Archivos del memorama
import MainContainerTablero_2P from './components/memorama/MemoLogica/MainContainerTablero_2P.jsx';
import MainContainerTablero from './components/memorama/MemoLogica/MainContainerTablero.jsx';
import MemoSelectTema from './components/memorama/MemoLayouts/MemoSelectTema.jsx';
import MemoSelectNumCards from './components/memorama/MemoLayouts/MemoSelectNumCards.jsx';
import MemoMainMenu from './components/memorama/MemoLayouts/MemoMainMenu.jsx';

//Archivos de samaritano
import FormPublicSamaritano from './components/samaritano/formularios/formPublicSamaritano';
import LoginAdminSamaritano from './components/samaritano/formularios/loginAdminSamaritano';
import TablaSamaritano from './components/samaritano/admin/tablaSolicitudes';
import VerCuentasSamaritano from './components/samaritano/admin/verCuentas';
import CardSamaritano from './components/samaritano/Card/seccSamaritano';



function App() {
  return (

    <Routes>
      <Route path="/" element={<PagInicio />} />
      

      {/*Rutas para el diccionario del choco*/}
      <Route path='/diccionario-choco' element={<Card></Card>} />
      <Route path='/diccionario-choco/login' element={<LoginAdmin></LoginAdmin>} />
      <Route path='/diccionario-choco/admin' element={<FormAdmin></FormAdmin>} />
      <Route path='/diccionario-choco/vercuentas' element={<VerCuentas></VerCuentas>} />
      <Route path='/diccionario-choco/colaborar' element={<FormPublic></FormPublic>} />
      <Route path='/diccionario-choco-en' element={<SeccDiccChocoIngles></SeccDiccChocoIngles>} />

      {/*Rutas para el memorama */}
      <Route path='/memorama' element={<MemoMainMenu></MemoMainMenu>} />
      <Route path='/memorama/unjugador' element={<MainContainerTablero></MainContainerTablero>} />
      <Route path='/memorama/dosjugadores' element={<MainContainerTablero_2P></MainContainerTablero_2P>} />


      {/*Rutas para el samaritano*/}
      <Route path='/samaritano/colaborar' element={<FormPublicSamaritano></FormPublicSamaritano>} />
      <Route path='/samaritano/login' element={<LoginAdminSamaritano></LoginAdminSamaritano>} />
      <Route path='/samaritano/admin' element={<TablaSamaritano></TablaSamaritano>} />
      <Route path='/samaritano/vercuentas' element={<VerCuentasSamaritano></VerCuentasSamaritano>} />
      <Route path='/samaritano' element={<CardSamaritano></CardSamaritano>} />
     
    </Routes>



  )
}

export default App