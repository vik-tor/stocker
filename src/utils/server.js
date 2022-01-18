import axios from "axios";

var url;

if (process.env.NODE_ENV == "production") {
  url = "https://ccsk-events.herokuapp.com/api";
} else if (process.env.NODE_ENV == "development") {
  // url = 'http://192.168.100.25:3000/api'
  url = "http://localhost:3000/api";
}

const server = axios.create({
  baseURL: url,
});

export default server;