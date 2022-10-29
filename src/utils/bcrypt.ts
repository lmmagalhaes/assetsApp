import * as bcrypt from 'bcrypt';

export function encodePassword(rawpassword: string) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawpassword, salt);
}
