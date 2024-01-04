var netcalls = require('../../netcalls.js');

module.exports = {
    match: [
        ["wallet","keys"],
        ["wallet","allPublicKeys"],  
    ],
    helpGroup: function (){return 3},
    eval : function(){
        netcalls.walletAllPublicKeys().then(res => res.text()).then( text => console.log(text));
    },
    help: function(callback){
        callback("wallet keys|allPublicKeys", "list all public keys of the node");
    }
}