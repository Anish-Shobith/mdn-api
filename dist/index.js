"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const Source_1 = require("./Source");
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.get('/search', async (req, res) => {
    try {
        if (!req.query.q && !req.query.query) {
            return res.send({ error: 'You need to provied a query' });
        }
        const [query, array] = [req.query.q || req.query.query, req.query.array];
        const data = await Source_1.Source(query, array).catch(err => res.send({ error: err.message, success: false }));
        if (data) {
            res.send(data);
        }
        else {
            res.send({ error: 'Query not found', success: false });
        }
    }
    catch (err) {
        res.send(err.success = false);
    }
});
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found!` });
});
app.listen(3000, (() => console.log(`API is listining on port: ${3000}`)));
