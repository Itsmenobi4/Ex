window.onload = function () {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
};
