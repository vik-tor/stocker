import { authHeader } from "../utils/auth_header";
import server from "../utils/server";

const signIn = async (data, callback) => {
  await server
    .post("/users/signin", data)
    .then((res) => {
      return callback(null, res.data.data);
    })
    .catch((err) => {
      if (err.response) {
        return callback(err.response.data.error);
      }
      return callback(err);
    });
};

const signUp = async (data, callback) => {
  await server
    .post("/users/signup", data)
    .then((res) => {
      return callback(null, res.data.data);
    })
    .catch((err) => {
      if (err.response) {
        return callback(err.response.data.error);
      }
      return callback(err);
    });
};

const fetchProfile = async (callback) => {
  await server
    .get("/users/profile", {
      headers: authHeader(),
    })
    .then((res) => {
      return callback(null, res.data);
    })
    .catch((err) => {
      if (err.response) {
        return callback(err.response.data.error);
      }
      return callback(err);
    });
};

const refreshToken = async () => { };

const fetchSaved = async (callback) => {
  await server
    .get("/users/liked", {
      headers: authHeader(),
    })
    .then((res) => {
      return callback(null, res.data);
    })
    .catch((err) => {
      return callback(err);
    });
};

export { signIn, signUp, fetchSaved, fetchProfile, refreshToken };
