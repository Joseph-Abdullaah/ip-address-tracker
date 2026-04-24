import { IPIFY_CONFIG } from "@/lib/ipifyConfig";
import type { IpifyResponse } from "@/lib/ipifyTypes";
import { detectInputType } from "@/utils/ipValidation";

export async function fetchIpData(value: string): Promise<IpifyResponse> {
  const type = detectInputType(value);

  if (type === "invalid") {
    throw new Error("Invalid IP address or domain");
  }

  const param =
    type === "ip"
      ? `${IPIFY_CONFIG.PARAMS.IP}=${value}`
      : `${IPIFY_CONFIG.PARAMS.DOMAIN}=${value}`;

  const url = `${IPIFY_CONFIG.BASE_URL}?apiKey=${IPIFY_CONFIG.API_KEY}&${param}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch IP data");
  }

  const data = await res.json();

  return data;
}