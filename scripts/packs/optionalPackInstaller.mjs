export function findPack() {
  return null;
}
export function isPackInstalled() {
  return false;
}
export function installPack() {
  return Promise.resolve(false);
}
export default { findPack, isPackInstalled, installPack };
