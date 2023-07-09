import * as crypto from 'crypto';

export default class PasswordManager {
  public hashPassword(password: string): { salt: string; hash: string } {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
      .pbkdf2Sync(password, salt, 100000, 64, 'sha512')
      .toString('hex');

    return {
      salt,
      hash,
    };
  }

  public validatePassword(
    password: string,
    storedHash: string,
    storedSalt: string
  ): boolean {
    const hash = crypto
      .pbkdf2Sync(password, storedSalt, 100000, 64, 'sha512')
      .toString('hex');
    return hash === storedHash;
  }
}
