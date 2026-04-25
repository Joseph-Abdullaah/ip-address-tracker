import { useState } from "react";
import { fetchIpData } from "@/lib/ipifyClient";
import type { IpifyResponse } from "@/lib/ipifyTypes";

export function useIpLookup() {
  const [data, setData] = useState<IpifyResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (value: string) => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchIpData(value);

      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    search,
  };
}