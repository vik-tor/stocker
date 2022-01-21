import server from "../utils/server";
import { authHeader } from "../utils/authHeader";

const fetchUsers = async () => {
  let res = await server.get("/admin/users", {
    headers: authHeader(),
  });
  return res.data.data;
};

const fetchUserById = async (id, cb) => {
  await server
    .get("/admin/user/" + id, {
      headers: authHeader(),
    })
    .then((res) => {
      return cb(null, res.data);
    })
    .catch((err) => {
      return cb(err);
    });
};

const deleteUser = async (id, cb) => {
  await server
    .patch("/users/" + id + "/remove", null, {
      headers: authHeader(),
    })
    .catch((err) => {
      return cb(err);
    });
};

const uploadImage = async (file, cb) => {
  var header = {
    ...authHeader(),
    ...{ "content-type": "multipart/form-data" },
  };
  var form = new FormData();
  form.set("featured", file);

  await server
    .post("/admin/image", form, {
      headers: header,
    })
    .then((res) => {
      return cb(null, res.data);
    })
    .catch((err) => {
      if (err.response) {
        return cb(err.response.data.error);
      }
      return cb(err);
    });
};

export { fetchUsers, fetchUserById, deleteUser, uploadImage };
