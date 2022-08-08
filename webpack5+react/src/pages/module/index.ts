/*
 * @Author: chengyu hengyu@iri.cn
 * @Date: 2022-08-08 09:16:50
 * @LastEditors: chengyu hengyu@iri.cn
 * @LastEditTime: 2022-08-08 09:18:00
 * @FilePath: \webpack5+react\src\pages\module\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Cat, Dog } from "./animal.js";
import type { createCatName } from "./animal.js";
// const name = createCatName(); // 'createCatName' cannot be used as a value because it was imported using 'import type'.
export type Animals = Cat | Dog;
 