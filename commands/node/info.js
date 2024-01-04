var netcalls = require('../../netcalls.js');

module.exports = {
    match: [
        ["node","info"]
    ],
    helpGroup: function (){return 3},
    help: function(callback){
        callback("node info", "display node information");
    },
    eval : function(){
        netcalls.nodeInfo().then(res => res.text()).then( text => console.log(text));
    }
}