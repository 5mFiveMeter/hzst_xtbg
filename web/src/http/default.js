import Axios from 'axios';

Axios.defaults.timeout = 5000;
Axios.defaults.baseURL = 'http://127.0.0.1:3000'

//http request 拦截器
Axios.interceptors.request.use(config => {
    return config;
  }, error => {
    return error;
  }
);

//http response 拦截器
Axios.interceptors.response.use(response => {
    return response.data;
  }, error => {
    return error;
  }
)

export default Axios;



