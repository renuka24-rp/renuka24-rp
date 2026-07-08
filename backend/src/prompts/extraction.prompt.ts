import { SYSTEM_PROMPT } from "./system.prompt";

export function buildExtractionPrompt(
  rows: Record<string, unknown>[]
) {
  return `
${SYSTEM_PROMPT}

Allowed crm_status values:

GOOD_LEAD_FOLLOW_UP
DID_NOT_CONNECT
BAD_LEAD
SALE_DONE

Allowed data_source values:

leads_on_demand
meridian_tower
eden_park
varah_swamy
sarjapur_plots

Input:

${JSON.stringify(rows)}
`;
}