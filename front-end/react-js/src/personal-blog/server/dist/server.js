"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const errorhandler_1 = __importDefault(require("errorhandler"));
// initialize configuration
dotenv_1.default.config();
const port = process.env.SERVER_PORT;
const isProduction = process.env.NODE_ENV === 'production';
const app = express_1.default();
// support parsing of application/json type post data
app.use(body_parser_1.default.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_session_1.default({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
if (!isProduction) {
    app.use(errorhandler_1.default());
}
// Mongodb
// mongoose.connect('mongodb://localhost/personalblog');
// mongoose.set('debug', true);
// Add models
// app.use(require('./routes'));
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
});
//# sourceMappingURL=server.js.map