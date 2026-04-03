const IS_PRODUCTION = false;

const API_URLS = {
  development: "http://192.168.56.1:3000",
  production: "https://kontrivibebackend.onrender.com",
};

const BASE_URL = IS_PRODUCTION ? API_URLS.production : API_URLS.development;

export default BASE_URL;