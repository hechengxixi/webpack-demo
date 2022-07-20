/*
 * @Author: 程羽 chengyu@iri.cn
 * @Date: 2022-07-20 14:41:56
 * @LastEditors: 程羽
 * @LastEditTime: 2022-07-20 14:42:21
 * @Description: 
 */
module.exports = function () {
    return {
      // This function transforms the Babel configuration on a per-file basis
      config(config, { source }) {
        console.log(JSON.stringify(config))
        return config.options;
      },
    };
  };