function getToken() {
  return sessionStorage.getItem("token");
}

function setToken(token) {
  sessionStorage.setItem("token", token);
}

function clearToken() {
  sessionStorage.removeItem("token");
}

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

function checkAuth(requiredRoles = []) {
  const token = getToken();
  if (!token) {
    window.location.href = "/signIn";
    return null;
  }

  const decoded = parseJwt(token);
  if (!decoded || decoded.exp * 1000 < Date.now()) {
    clearToken();
    window.location.href = "/signIn";
    return null;
  }

  if (requiredRoles.length > 0) {
    const hasRole = requiredRoles.some(role => decoded.roles.includes(role));
    if (!hasRole) {
      window.location.href = "/403";
      return null;
    }
  }

  return decoded;
}

function logout() {
  clearToken();
  window.location.href = "/signIn";
}
