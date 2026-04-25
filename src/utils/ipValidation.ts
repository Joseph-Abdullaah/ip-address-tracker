export type InputType = "ip" | "domain" | "invalid";

export function detectInputType(value: string): InputType {
  const ipRegex =
    /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;

  const domainRegex =
    /^(?!-)[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;

  if (ipRegex.test(value)) return "ip";
  if (domainRegex.test(value)) return "domain";
  return "invalid";
}