import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import indexRouter from './routes';
import bp from 'body-parser';
import cors from 'cors';
import config from './config';
import './database/connection';

var app = express();

app.listen(config.port, () => {
  console.log(`Servidor ${config.port} andando`);
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//entryRutas
app.use('/', indexRouter);




export default app;
