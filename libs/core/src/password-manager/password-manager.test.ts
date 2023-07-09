import * as crypto from 'crypto';
import PasswordManager from '.';

// Mocking crypto module
jest.mock('crypto', () => ({
  randomBytes: jest.fn(),
  pbkdf2Sync: jest.fn(),
}));

describe('PasswordManager', () => {
  let passwordManager: PasswordManager;

  beforeEach(() => {
    passwordManager = new PasswordManager();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('hashPassword', () => {
    it('should generate a hashed password and salt', () => {
      const password = 'myPassword';
      const salt = 'randomSalt';
      const hash = 'hashedPassword';

      (crypto.randomBytes as jest.Mock).mockReturnValueOnce(salt);
      (crypto.pbkdf2Sync as jest.Mock).mockReturnValueOnce(hash);

      const result = passwordManager.hashPassword(password);

      expect(crypto.randomBytes).toHaveBeenCalledWith(16);
      expect(crypto.pbkdf2Sync).toHaveBeenCalledWith(
        password,
        salt,
        100000,
        64,
        'sha512'
      );
      expect(result).toEqual({ salt, hash });
    });
  });

  describe('validatePassword', () => {
    it('should return true for a valid password', () => {
      const password = 'myPassword';
      const storedHash = 'hashedPassword';
      const storedSalt = 'randomSalt';

      (crypto.pbkdf2Sync as jest.Mock).mockReturnValueOnce(storedHash);

      const result = passwordManager.validatePassword(
        password,
        storedHash,
        storedSalt
      );

      expect(crypto.pbkdf2Sync).toHaveBeenCalledWith(
        password,
        storedSalt,
        100000,
        64,
        'sha512'
      );
      expect(result).toBe(true);
    });

    it('should return false for an invalid password', () => {
      const password = 'myPassword';
      const storedHash = 'hashedPassword';
      const storedSalt = 'randomSalt';

      (crypto.pbkdf2Sync as jest.Mock).mockReturnValueOnce('incorrectHash');

      const result = passwordManager.validatePassword(
        password,
        storedHash,
        storedSalt
      );

      expect(crypto.pbkdf2Sync).toHaveBeenCalledWith(
        password,
        storedSalt,
        100000,
        64,
        'sha512'
      );
      expect(result).toBe(false);
    });
  });
});