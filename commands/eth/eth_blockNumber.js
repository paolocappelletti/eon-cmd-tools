var netcalls = require('../../netcalls.js');
const web3utils = require("web3-utils");

module.exports = {
    match: [
        ["eth_blockNumber"]
    ],
    helpGroup: function (){return 2},
    help: function(callback){
        callback("eth_blockNumber", "shows the most recent block number");
    },
    eval : function(){
        netcalls.eth_blockNumber().then(res => res.json()).then( 
            resJson => {
                console.log(web3utils.hexToNumberString(resJson.result));
            }
        );
    }
}