export interface IpifyLocation {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
}

export interface IpifyResponse {
  ip: string;
  isp: string;
  location: IpifyLocation;
}

export interface IpifyError {
  code: number;
  messages: string;
}