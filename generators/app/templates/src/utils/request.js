import Axios from 'axios';

const service = Axios.create({
  timeout: 300000,
});

// 添加请求拦截
service.interceptors.request.use(
  (config) => {
    const copyConfig = config;
    const token = sessionStorage.getItem('token');
    if (token) {
      copyConfig.headers.Token = JSON.parse(token);
    }
    return copyConfig;
  },
  (error) => Promise.reject(error),
);

service.interceptors.response.use((response) => {
  const responseData = response.data;

  if (responseData === '') {
    sessionStorage.setItem('token', '');
  }

  // 统一处理错误信息
  if (responseData.state !== 'SUCCESS') {
    alert(responseData.value.message || '未知错误，请联系管理员！');
    return Promise.reject(responseData.value);
  }

  return response;
});

export default service;
