import axios from 'axios';
import AuthHelpers from './AuthHelpers';

const url = {
  staging: '',
  dev: 'http://localhost:4000',
  local: 'http://localhost:4000',
  production: ''
};

const env = {
  staging: 'staging',
  dev: 'dev',
  local: 'local',
  production: 'production'
};

export const buildEnv = env.local;
export const signalRUrl = url[buildEnv];
export const baseUrl = url[buildEnv] + '/api';

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: baseUrl
});

instance.interceptors.request.use(
  function (config) {
    const TOKEN = AuthHelpers.getAccessToken();
    if (TOKEN) {
      config.headers.Authorization = `Bearer ${TOKEN}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response?.data?.data;
  },
  function (error) {
    console.log(error.response);
    return Promise.reject(error?.response?.data);
  }
);

export default instance;
