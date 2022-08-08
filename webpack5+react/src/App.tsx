/*
 * @Author: chengyu hengyu@iri.cn
 * @Date: 2022-08-03 14:44:01
 * @LastEditors: chengyu hengyu@iri.cn
 * @LastEditTime: 2022-08-08 09:27:33
 * @FilePath: \webpack5+react\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: 程羽 chengyu@iri.cn
 * @Date: 2022-07-18 15:54:22
 * @LastEditors: chengyu hengyu@iri.cn
 * @LastEditTime: 2022-08-05 11:12:03
 * @Description: 
 */
import React from 'react';
import Home from './pages/Home'
import './App.css';


function App() {
  return (
    <div className="App">
      react1
      {Home.name}
    </div>
  );
}

export default App;
