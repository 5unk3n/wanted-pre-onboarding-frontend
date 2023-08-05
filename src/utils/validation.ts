export const isValidEmail = (email: string) => {
  if (email.includes('@')) return true;
  return false;
};

export const isValidPassword = (password: string) => {
  if (password.length >= 8) return true;
  return false;
};
