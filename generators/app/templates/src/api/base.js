let baseUrl = 'https://www.sorealbox.com/game';

if (process.env.NODE_ENV === 'development') {
  require('@/mock/index'); // 拦截接口，模拟数据
  baseUrl = 'http://47.105.113.62:8080/game';
}

const url = baseUrl;

export default url;
