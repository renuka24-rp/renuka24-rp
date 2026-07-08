import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    message: "Import API Ready",
  });
});

export default router;