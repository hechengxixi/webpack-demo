// var _ = require('loadash') ; // can't resolve 'loadash' 或者 can't resolve 'loadash/main'
require(["dijit/form/Form","dijit/form/ValidationTextBox"], function (Form,ValidationTextBox ) {
    var form = new Form({
        
    },"page");
    var w = new ValidationTextBox({
       required:true
    });
     w.startup();
     w.placeAt(form.domNode);
     
     w.defer(function(){
         w.validate();
     },2000)
     
      form.defer(function(){
         form.validate();
     },4000)
    
//                 var w = new dSwitch({},"page");
//                 w.startup();
    
 });
