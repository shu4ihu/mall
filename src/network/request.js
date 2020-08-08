import axios from "axios";
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/z8",
    timeout: 5000
  });
  // axios的拦截器
  // 拦截请求
  instance.interceptors.request.use(
    config => {
      // console.log(config);
      // 对config中的信息进行加工
      // 请求加载动画
      // 某些网络请求（登录的token），必须携带一些特殊的信息
      return config;
    },
    err => {
      console.log(err);
    }
  );
  // 拦截响应
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      return err;
    }
  );
  // instance的返回值就是一个Promise
  return instance(config);
}
