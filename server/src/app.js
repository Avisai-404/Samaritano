import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

//Rutas del diccionario del choco
import palabrasRoutes from './routes/diccChoco/palabras.routes.js';
import loginRoutes from './routes/diccChoco/login.routes.js';

//Rutas del memorama
import caricaturas_tab from './routes/memorama/caricaturas_tab.routes.js';
import centla from './routes/memorama/centla.routes.js';
import chontal_espanol from './routes/memorama/chontal_espanol.routes.js';
import comodines from './routes/memorama/comodines.routes.js';
import elementos_tab from './routes/memorama/elementos_tab.routes.js';
import frutas_tab from './routes/memorama/frutas_tab.routes.js';
import tapijulapa from './routes/memorama/tapijulapa.routes.js';
import teapa from './routes/memorama/teapa.routes.js';

const app = express();


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//middlewares
const corsOptions = {
    origin: '*', // Especifica el dominio permitido (o '*' para permitir cualquier dominio)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true, // Habilita el uso de credenciales (por ejemplo, cookies) en solicitudes
};

// Middleware para habilitar CORS con opciones personalizadas
app.use(cors(corsOptions))
app.use(express.json());

app.use(palabrasRoutes);
app.use(loginRoutes);

app.use(caricaturas_tab);
app.use(centla);
app.use(chontal_espanol);
app.use(comodines);
app.use(elementos_tab);
app.use(frutas_tab);
app.use(tapijulapa);
app.use(teapa);

export default app;