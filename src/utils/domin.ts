export default function getSubdomain(hostname: string){
  const parts = hostname.split('.');
  if (parts.length >= 2 && parts[0] !== 'www' && parts[0] !== 'localhost') {
    return parts[0];
  }
  return null;
};