"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source = void 0;
/* eslint-disable no-redeclare */
const node_fetch_1 = __importDefault(require("node-fetch"));
const string_similarity_1 = require("string-similarity");
async function Source(query, array) {
    query = query
        .replace(' ', '+')
        .replace(/#/g, '.prototype.');
    const res = node_fetch_1.default(`https://developer.mozilla.org/api/v1/search/en-US?q=${encodeURIComponent(query)}&highlight=false`)
        .then(res => res.json());
    const best = (await res).documents
        .map(doc => Object.assign(doc, {
        diff: string_similarity_1.compareTwoStrings(query.toLowerCase(), doc.title.toLowerCase())
    }))
        .sort((a, b) => b.diff - a.diff);
    return array ? best : best[0];
}
exports.Source = Source;
