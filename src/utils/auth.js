import { VueCookieNext } from "vue-cookie-next";

const isLoggedIn = () => {
  if (VueCookieNext.isCookieAvailable("token")) {
    return true;
  } else {
    return false;
  }
};

const isAdmin = () => {
  var role = VueCookieNext.getCookie("user").role;

  if (role) {
    if (role == "admin") {
      return true;
    } else {
      return false;
    }
  }
};

export { isLoggedIn, isAdmin };