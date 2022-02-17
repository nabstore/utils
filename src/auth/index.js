import jwt_decode from "jwt-decode";

export const TOKEN_KEY = "@nabstore-Token";

export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token === null) {
    return false;
  }

  const { exp } = jwt_decode(token);
  if (exp < (new Date().getTime() + 1) / 1000) {
    return false;
  }

  return true;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const saveTokenToLocalStorage = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const authFunctions = {
  getToken,
  isAuthenticated,
  saveTokenToLocalStorage,
  removeTokenFromLocalStorage,
};

export default authFunctions;
