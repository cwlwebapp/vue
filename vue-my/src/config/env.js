/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = '';
let routerMode = 'history';
let imgBaseUrl = '';
let rongyunKey = "";
if (process.env.NODE_ENV == 'development') {
  baseUrl = "http://dev.kemean.net/needle/api";
  rongyunKey = "8brlm7uf8zku3";
  routerMode = 'hash';
} else if (process.env.NODE_ENV == 'production') {
  // 测试
  baseUrl = "http://dev.kemean.net/needle/api";
  rongyunKey = "8brlm7uf8zku3";
  routerMode = 'hash';
  //上线版本
  // baseUrl = "https://www.zhenwang.so/needle/api";
  // rongyunKey = "8brlm7uf8zku3";
  // routerMode = 'hash';
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl,
  rongyunKey
}