export function getToken(): string | null {
  return localStorage.getItem('TOKEN');
}

export function setToken(TOKEN: string) {
  localStorage.setItem('TOKEN', TOKEN);
}

export function clearToken() {
  localStorage.removeItem('TOKEN');
}
