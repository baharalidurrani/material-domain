export function initEnv() {
  // console.warn() and console.error() will work as usual
  // only console.log() will be disabled on Prod
  if (import.meta.env.PROD) console.log = () => {};
}
