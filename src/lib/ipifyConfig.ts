export const IPIFY_CONFIG = {
  BASE_URL: "https://geo.ipify.org/api/v2/country,city",
  API_KEY: import.meta.env.VITE_GEO_API_KEY as string,
  PARAMS: {
    IP: "ipAddress",
    DOMAIN: "domain",
  },
};