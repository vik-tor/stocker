import moment from "moment";
import { VueCookieNext } from "vue-cookie-next";

const mixin = {
  methods: {
    formatDate(date, format) {
      return moment(date).format(format);
    },

    formatTime(time, format) {
      return moment(time, "HH:mm:ss").format(format);
    },

    formatCurrency(float) {
      var numeric = parseFloat(float);
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "KES",
        currencyDisplay: "narrowSymbol",
        maximumFractionDigits: 0,
      }).format(numeric);
    },

    isLoggedIn() {
      if (VueCookieNext.isCookieAvailable("token")) {
        return true;
      } else {
        return false;
      }
    },
  },
};

export default mixin;
