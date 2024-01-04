var netcalls = require('../../netcalls.js');

module.exports = {
    match: [
        ["wallet","balance"],
    ],
    helpGroup: function (){return 3},
    eval : function(){
        netcalls.walletBalance().then(res => res.text()).then( text => console.log(text));
    },
    help: function(callback){
        callback("wallet balance", "list balance on the node wallet");
    }
}