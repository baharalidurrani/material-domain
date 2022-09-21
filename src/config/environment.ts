import { CONFIG, ENV } from '.';

export function initEnv() {
  // console.warn() and console.error() will work as usual
  // only console.log() will be disabled on Prod
  if (CONFIG.REACT_APP_ENV?.toLocaleUpperCase() === ENV.PROD) console.log = () => {};
}
