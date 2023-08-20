import express from 'express';
import userRoutes from './routes/user.routes';
import brandRoutes from './routes/brand.routes';
import genreRoutes from './routes/genre.routes';
import movieRoutes from './routes/movie.routes';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload'

//Declaracion de express
const app = express();

//Midleware necesario para que express interprete contexto
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(morgan('dev'));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}));
app.use(cors())
app.use("/users", userRoutes);
app.use('/brands', brandRoutes);
app.use('/genres', genreRoutes);
app.use('/movies', movieRoutes);

export default app;
