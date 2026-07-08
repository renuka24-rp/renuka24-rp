import Papa from "papaparse";

export interface CsvParseResult {
  preview: Record<string, string>[];
  totalRows: number;
  headers: string[];
}

export function parseCsv(buffer: Buffer): CsvParseResult {
  const csv = buffer.toString("utf8");

  const parsed = Papa.parse<Record<string, string>>(csv, {
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