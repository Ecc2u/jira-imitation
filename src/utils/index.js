import { useEffect, useState } from "react";

//在一个函数里 删除属性值为空的属性
export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

//custom hook 挂载完成后使用useEffect 页面初始化操作
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

//custom hook 搜索请求防抖动
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    //每次在value变化后 设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    //在上一个useEffect执行完后运行 清除上一次的定时器
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
