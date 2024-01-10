var netcalls = require('../../netcalls.js');

module.exports = {
    match: [
        ["mc","best"]
    ],
    helpGroup: function (){return 3},
    help: function(callback){
        callback("mc best", "shows the most recent mainchain block reference included in the sidechain");
    },
    eval : async function(){
        netcalls.mcBest().then(res => res.text()).then( text => console.log(text));
    }
}