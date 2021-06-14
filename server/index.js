import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js';
import loginRoutes from './routes/login.js';
import cors from 'cors';


const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));
app.use('/users', userRoutes);
app.use('/login', loginRoutes);




//Connection string for monogoDB 
const CONNECTION_URL = 'mongodb+srv://atharvaagrawal:Atharva@12345@cluster0.ylfkz.mongodb.net/NemesisDB?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

mongoose.connect( process.env.MONGODB_URI || CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message))

//To avoid warnings in console
mongoose.set('useFindAndModify', false);