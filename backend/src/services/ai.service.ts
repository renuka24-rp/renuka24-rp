import { model } from "../config/gemini";
import { buildExtractionPrompt } from "../prompts/extraction.prompt";
import { CRMRecord } from "../types/crm.types";

export async function processBatch(
  rows: Record<string, unknown>[]
): Promise<CRMRecord[]> {

  const prompt = buildExtractionPrompt(rows);

  const result = await model.generateContent(prompt);

  const response = result.response.text();

  return JSON.parse(response) as CRMRecord[];
}