const API_KEY = "AIzaSyBYipREG1fuGCLhVAoH3w1PuE4u19cUPcI";

export enum modeAuthEnum {
  SIGNUP = "signUp",
  SIGNIN = "signInWithPassword",
}

export async function authenticate(
  mode: modeAuthEnum,
  email: string,
  password: string
) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });

  if (response.status >= 300) {
    throw new Error(
      "Could not create user, Please check your credentials or try again later."
    );
  }

  const user = await response.json();

  return user.idToken as string;
}

export function createUser(email: string, password: string) {
  return authenticate(modeAuthEnum.SIGNUP, email, password);
}

export function logIn(email: string, password: string) {
  return authenticate(modeAuthEnum.SIGNIN, email, password);
}
