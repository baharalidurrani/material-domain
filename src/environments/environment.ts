export const ENV = {
  LOCAL: 'LOCAL',
  DEV: 'DEV',
  STAGE: 'STAGE',
  PROD: 'PROD',
};

export function setEnv() {
  if (process.env.REACT_APP_ENV?.toLocaleUpperCase() === ENV.PROD) console.log = () => {};
}
