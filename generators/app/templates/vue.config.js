const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const env = process.env.NODE_ENV;

let options = {
  publicPath: './',
  productionSourceMap: false,
};

if (env !== 'production') {
  options = {
    publicPath: './',
    css: {
      // 开发环境下开启sourceMap 方便调试
      loaderOptions: {
        css: {
          sourceMap: true,
        },
        sass: {
          sourceMap: true,
        },
      },
    },
  };
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'));
  },
  ...options,
};
