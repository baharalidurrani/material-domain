export const ENV = {
  LOCAL: 'LOCAL',
  DEV: 'DEV',
  STAGE: 'STAGE',
  PROD: 'PROD',
};

export function setEnv() {
  // console.warn() and console.error() will work as usual
  // only console.log() will be disabled on Prod
  if (process.env.REACT_APP_ENV?.toLocaleUpperCase() === ENV.PROD) console.log = () => {};
}
