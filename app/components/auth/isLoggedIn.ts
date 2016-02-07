export function isLoggedin() {
  return !!localStorage.getItem('x-token');
}

export function getToken() {
    return localStorage.getItem('x-token');
}
