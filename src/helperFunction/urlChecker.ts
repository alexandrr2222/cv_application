export function urlChecker(url: string) {
  return url.startsWith("http") ? url : `https://${url}`;
}
