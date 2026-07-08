import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import importRoutes from "./routes/import.routes";

const app = express();

app.use(helmet());

app.use(cors({
  origin: "*",
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.json({
    application: "AI CSV Importer",
    version: "1.0.0",
    status: "Running",
    docs: "/api/health",
  });
});

app.use("/api/import", importRoutes);

export default app;