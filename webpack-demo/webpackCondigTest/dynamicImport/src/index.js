  function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
      var element = document.createElement('div');
 
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
      return element;
 
    }).catch(error => 'An error occurred while loading the component');
  }

  getComponent().then(component => {
    document.body.appendChild(component);
  })
  
  function getMath(){
    return import('./math.js').then(({square}) => {
      var element = document.createElement('div');
       
      element.innerHTML = square(5);
       
      return element;
    } )
  }
  
  getMath().then(component => {
    document.body.appendChild(component);
  })