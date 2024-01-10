var netcalls = require('../../netcalls.js');

module.exports = {
    match: [
        ["mc","genesis"]
    ],
    helpGroup: function (){return 3},
    help: function(callback){
        callback("mc genesis", "shows info about the mainchain block containing the transaction that created this sidechain");
    },
    eval : async function(){
        netcalls.mcGenesis().then(res => res.text()).then( text => console.log(text));
    }
}