/*
 * @Author: 王鑫
 * @Description: 校验规则
 * @Date: 2022-12-21 09:08:05
 */
export function isEmail(value) {
  if (value.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
    return true;
  else
    return false
}