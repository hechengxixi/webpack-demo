/*
 * @Author: 程羽 chengyu@iri.cn
 * @Date: 2022-07-28 15:45:04
 * @LastEditors: chengyu hengyu@iri.cn
 * @LastEditTime: 2022-08-05 11:22:59
 * @Description:
 */
declare module "*.module.css" {
    const classes: { readonly [key: string]: string };
    export default classes;
  }
  
  declare module "*.module.sass" {
    const classes: { readonly [key: string]: string };
    export default classes;
  }
  
  declare module "*.module.scss" {
    const classes: { readonly [key: string]: string };
    export default classes;
  }


