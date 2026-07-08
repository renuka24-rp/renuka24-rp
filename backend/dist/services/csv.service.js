"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCsv = parseCsv;
const papaparse_1 = __importDefault(require("papaparse"));
function parseCsv(buffer) {
    const csv = buffer.toString("utf8");
    const parsed = papaparse_1.default.parse(csv, {
        header: true,
        skipEmptyLines: true,
    });
    if (parsed.errors.length > 0) {
        throw new Error(parsed.errors[0].message);
    }
    return {
        preview: parsed.data.slice(0, 10),
        totalRows: parsed.data.length,
        headers: parsed.meta.fields ?? [],
    };
}
