const ACCESS_TOKEN = "ACCESS_TOKEN";
const REMEMBER_ME = "REMEMBER_ME";

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const setAccessToken = accessToken => localStorage.setItem(ACCESS_TOKEN, accessToken);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

export const getRememberMe = () => localStorage.getItem(REMEMBER_ME);
export const setRememberMe = isRemember => localStorage.setItem(REMEMBER_ME, isRemember);
export const removeRememberMe = () => localStorage.removeItem(REMEMBER_ME);
