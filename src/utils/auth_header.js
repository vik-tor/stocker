import { VueCookieNext } from "vue-cookie-next";

export const authHeader = () => {
  let token = VueCookieNext.getCookie("token");

  if (token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
};