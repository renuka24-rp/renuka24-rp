"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const upload_routes_1 = __importDefault(require("./routes/upload.routes"));
const import_routes_1 = __importDefault(require("./routes/import.routes"));
const app = (0, express_1.default)();
// Security
app.use((0, helmet_1.default)());
// Enable CORS
app.use((0, cors_1.default)());
// Parse JSON
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Logger
app.use((0, morgan_1.default)("dev"));
// Root Route
app.get("/", (_req, res) => {
    res.json({
        application: "AI CSV Importer",
        version: "1.0.0",
        status: "Running",
        docs: "/api/health",
    });
});
// Health Check
app.get("/api/health", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "AI CSV Importer Backend Running",
    });
});
// Routes
app.use("/api/upload", upload_routes_1.default);
app.use("/api/import", import_routes_1.default);
exports.default = app;
