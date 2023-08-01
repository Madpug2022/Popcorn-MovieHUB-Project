import app from './server';
import config from './config/config';



//Puerto
const PORT = config.app.PORT;



//Levantamiento de servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
