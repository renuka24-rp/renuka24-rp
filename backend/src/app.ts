import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import uploadRoutes from "./routes/upload.routes";
import importRoutes from "./routes/import.routes";

const app = express();

// Security
app.use(helmet());

// Enable CORS
app.use(cors());

// Parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(morgan("dev"));

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
app.use("/api/upload", uploadRoutes);
app.use("/api/import", importRoutes);

export default app;