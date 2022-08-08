/*
 * @Author: chengyu hengyu@iri.cn
 * @Date: 2022-08-08 09:08:18
 * @LastEditors: chengyu hengyu@iri.cn
 * @LastEditTime: 2022-08-08 09:16:25
 * @FilePath: \webpack5+react\src\pages\module\animal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export type Dog = { breeds: string[]; yearOfBirth: number };
export type Cat = { breed: string; yearOfBirth: number };
export const createCatName = () => "fluffy";