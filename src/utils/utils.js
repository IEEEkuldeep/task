import sha256 from 'sha256';

export const generateHashedPassword = (password) => sha256(password);
