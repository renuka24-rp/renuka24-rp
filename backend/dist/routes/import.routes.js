"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (_req, res) => {
    res.json({
        success: true,
        message: "AI Import endpoint coming next."
    });
});
exports.default = router;
