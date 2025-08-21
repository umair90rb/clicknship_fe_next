export default function useTenant() {
  const splittedUrl =  window.location.hostname.split('.');

  if (
    (process.env.DEV && splittedUrl.length < 2) ||
    (process.env.PROD && splittedUrl.length < 3)
  ) {
    return null;
  }

  return splittedUrl[0];
}
