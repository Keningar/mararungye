export function isDev(callback?: () => void) {
  const _isDev = process.env.NODE_ENV == "development";

  if (callback && _isDev) return callback();

  return _isDev;
}
