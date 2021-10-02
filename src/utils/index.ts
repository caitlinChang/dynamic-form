// 提供异步获取的下拉列表
import { options } from "./constant";

export function getOptions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(options);
    }, 3000);
  });
}
