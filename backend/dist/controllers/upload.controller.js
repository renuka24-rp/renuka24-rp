"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadCsv = void 0;
const csv_service_1 = require("../services/csv.service");
const uploadCsv = (req, res) => {
    try {
        if (!req.file) {
            res.status(400).json({
                success: false,
                message: "CSV file is required.",
            });
            return;
        }
        const result = (0, csv_service_1.parseCsv)(req.file.buffer);
        res.status(200).json({
            success: true,
            fileName: req.file.originalname,
            totalColumns: result.headers.length,
            ...result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
exports.uploadCsv = uploadCsv;
