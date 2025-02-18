export const AUTH_ACCESS_KEY = import.meta.env.VITE_HISNET_ACCESS_KEY ?? '';

export const HISNET_AUTH_URL = (returnUrl: string) =>
  `https://walab.info:8443/HisnetLogin/hisnet-login?accessKey=${AUTH_ACCESS_KEY}&returnUrl=${returnUrl}`;
