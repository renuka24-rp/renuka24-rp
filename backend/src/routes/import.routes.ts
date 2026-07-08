import { Router } from "express";

const router = Router();

router.post("/", (_req, res) => {
    res.json({
        success: true,
        message: "AI Import endpoint coming next."
    });
});

export default router;