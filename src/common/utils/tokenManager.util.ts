export function getToken(): string | null {
  return localStorage.getItem("TOKEN");
}

export function clearToken() {
  localStorage.removeItem("TOKEN");
}
