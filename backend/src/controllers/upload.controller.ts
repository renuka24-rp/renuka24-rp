import { Request, Response } from "express";
import { parseCsv } from "../services/csv.service";

export const uploadCsv = (req: Request, res: Response): void => {
  try {
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: "CSV file is required.",
      });
      return;
    }

    const result = parseCsv(req.file.buffer);

    res.status(200).json({
      success: true,
      fileName: req.file.originalname,
      totalColumns: result.headers.length,
      ...result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};