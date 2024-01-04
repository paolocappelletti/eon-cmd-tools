var netcalls = require('../../netcalls.js');

module.exports = {
    match: [
        ["block","best"],
        ["block","tip"]
    ],
    helpGroup: function (){return 3},
    help: function(callback){
        callback("block best|tip", "shows the most recent block by using the eon /block/best endpoint");
    },
    eval : async function(){
        netcalls.blockBest().then(res => res.text()).then( text => console.log(text));
    }
}