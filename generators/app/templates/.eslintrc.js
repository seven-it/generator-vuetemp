module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential","@vue/airbnb"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-alert":"off",
    "linebreak-style": [0 ,"error", "windows"],
    "global-require": 0 
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
