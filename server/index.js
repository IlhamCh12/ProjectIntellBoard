import express from 'express';
import session from 'express-session';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import utilisateursRoutes from './routes/Utilisateurs.js';
import cookieParser from 'cookie-parser';

const app= express();

app.use(cookieParser());
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true,
    cookie:{
   //     maxAge: 3600000,
        secure: false,
    }
}));

app.use(cors({
    origin: [
      'http://localhost:3000'
    ],
    credentials: true,
    exposedHeaders: ['set-cookie']
}));

 app.use(bodyParser.json({ limit:"30mb", extended: true}));
 app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));
 app.use(cors());

 app.use('/Utilisateurs', utilisateursRoutes);

 const CONNECTION_URL='mongodb://localhost/IntelLBoard';
 const PORT = process.env.PORT || 5000;
 
 mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
 .then(() =>app.listen(PORT, ()=>console.log("Server running on port ",PORT)))
 .catch((error) =>console.log(error.message));

mongoose.set('useFindAndModify', false);