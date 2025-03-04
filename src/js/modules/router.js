export function loadRouteModule() {
  const route = window.location.pathname;

  switch (route) {
    case "/":
      return import("./home.js");
    default:
      return Promise.reject(new Error("No module for this route"));
  }
}
