export function emailIsValid(email: string) {
  return email.trim().includes("@");
}

export function passwordIsValid(password: string) {
  return password.trim().length > 6;
}

export function isEqual(oldValue: string, newValue: string) {
  return (
    oldValue.trim().length > 0 &&
    newValue.trim().length > 0 &&
    oldValue.trim() === newValue.trim()
  );
}
