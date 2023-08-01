import app from './server';
import config from './config/config';
import mongoose from 'mongoose';


//Puerto
const PORT = config.app.PORT;



//Levantamiento de servidor

const bootstrap = async () => {
    await //Conexion con servidor de mongoose
    mongoose.connect("mongodb://localhost:27017/MovieHUB")

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })

}

bootstrap()
