import express from 'express';
import userRoutes from './routes/user.routes';
import brandRoutes from './routes/brand.routes';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

//Declaracion de express
const app = express();

//Midleware necesario para que express interprete contexto
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

app.use("/", userRoutes);
app.use('/brands', brandRoutes);

export default app;
