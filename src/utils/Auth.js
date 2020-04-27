export default class Auth {
  static isAuthenticated() { /* Checks if user is authenticated. Returns true if authentication token is present */
    const token = localStorage.getItem("token");
    return token ? true : false;
  }

  static setToken(token) {
    localStorage.setItem("token", token);
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static removeToken() {
    localStorage.removeItem("token");
  }
}