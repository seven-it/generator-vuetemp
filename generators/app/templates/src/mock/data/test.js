// 拦截mockApi 接口，并返回mock数据
function test(options) {
  console.log(options);
  return {
    state: 'SUCCESS',
    data: 'hello world',
  };
}

export default test;
