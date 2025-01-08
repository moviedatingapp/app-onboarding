export const passwordConfirmationMatch = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};
