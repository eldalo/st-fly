import { customAlphabet } from 'nanoid';

export function generateNanoId(length: number) {
  const nanoId = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789', length);
  return nanoId();
}
