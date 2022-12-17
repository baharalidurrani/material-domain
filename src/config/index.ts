export enum ENV {
  LOCAL = 'LOCAL',
  DEV = 'DEV',
  STAGE = 'STAGE',
  PROD = 'PROD',
}

export const CONFIG: Record<string, string> = {
  REACT_APP_ENV: process.env.REACT_APP_ENV ?? ENV.LOCAL,

  REACT_APP_API_URL: process.env.REACT_APP_API_URL ?? 'http://127.0.0.1:2000',
};
