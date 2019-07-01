  //import _ from 'lodash'; 
  import * as _ from "lodash"; // 使用typescript时需要此写法
 
  function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());