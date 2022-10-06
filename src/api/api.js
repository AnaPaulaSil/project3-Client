import axios from "axios";

const apiURLs = {
  development: "http://localhost:4000",
  production:
    "mongodb+srv://andreank:andreank@conectabancodedados.1ws7kgg.mongodb.net/?retryWrites=true&w=majority",
};

const api = axios.create({ baseURL: apiURLs[process.env.NODE_ENV] });

api.interceptors.request.use((config) => {
  const loggedInUserJSON = localStorage.getItem("loggedInUser");
  const parseLoggedInUser = JSON.parse(loggedInUserJSON || '""');

  if (parseLoggedInUser.token) {
    config.headers = { Authorization: `Bearer ${parseLoggedInUser.token}` };
  }

  return config;
});

export { api };
