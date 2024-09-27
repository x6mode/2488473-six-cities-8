import { createHmac } from 'node:crypto';

export function getHashPassword (unhashPassword: string, salt: string) {
  const preResult = createHmac('sha256', salt);
  return preResult.update(unhashPassword).digest('hex');
}
