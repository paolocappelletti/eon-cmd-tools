var netcalls = require('../../netcalls.js');
const web3utils = require("web3-utils");

module.exports = {
    match: [
        ["eth_chainId"],["eth_chainid"]
    ],
    helpGroup: function (){return 2},
    help: function(callback){
        callback("eth_chainId", "Perform an eth_chainId call and display result in decimal format");
    },
    eval : function(){
        netcalls.eth_chainId().then(res => res.json()).then( 
            resJson => {
            console.log(web3utils.hexToNumberString(resJson.result));
            }
        );
    }
}