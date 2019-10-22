import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import errorhandler from 'errorhandler';
import mongoose from 'mongoose';
import errorHandler from 'errorhandler';


// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;
const isProduction = process.env.NODE_ENV === 'production';

const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'LightBlog', cookie: {maxAge: 60000}, resave: false, saveUninitialized: false}));

if (!isProduction) {
    app.use(errorHandler());
}

// Mongodb
// mongoose.connect('mongodb://localhost/personalblog');
// mongoose.set('debug', true);

// Add models
require('./models/Article.ts');

// Add routes
app.use(require('./routes'));

app.use((req, res, next) => {
    const err = new Error('Not Found');
    // @ts-ignore
    err.status = 404;
    next(err);
});

if (!isProduction) {
    app.use((err, req, res) => {
        // @ts-ignore
        res.status(err.status || 500);

        // @ts-ignore
        res.json({
            errors: {
            // @ts-ignore
            message: err.message,
            error: err,
            },
        });
    });
}

app.use((err, req, res) => {
    // @ts-ignore
    res.status(err.status || 500);
    
    // @ts-ignore
    res.json({
      errors: {
        // @ts-ignore
        message: err.message,
        error: {},
      },
    });
});

// define a route handler for the default home page
// app.get('/', (req, res) => {
//     res.send("Hello world!");
// });

// start express server
const server = app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
})
