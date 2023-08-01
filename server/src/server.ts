import express from 'express';
import userRoutes from './routes/user.routes';
import morgan from 'morgan';
import bodyParser from 'body-parser';

//Declaracion de express
const app = express();

//Midleware necesario para que express interprete contexto
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

app.use(morgan('dev'));

app.use("/", userRoutes);

export default app;
