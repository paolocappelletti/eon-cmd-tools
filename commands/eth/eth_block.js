var netcalls = require('../../netcalls.js');
const web3utils = require("web3-utils");

module.exports = {
    match: [
        ["eth_block","best"],
        ["eth_block","tip"]
    ],
    helpGroup: function (){return 2},
    help: function(callback){
        callback("eth_block best|tip", "shows the most recent block by using standard eth rpc calls");
    },
    eval : function(){
        netcalls.eth_getBlockByNumber("latest").then(res => res.json()).then( 
            resJson => {
            console.log(resJson);
            }
        );
    }
}