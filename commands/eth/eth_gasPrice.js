var netcalls = require('../../netcalls.js');
const web3utils = require("web3-utils");

module.exports = {
    match: [
        ["eth_gasPrice"],["eth_gasprice"]
    ],
    helpGroup: function (){return 2},
    help: function(callback){
        callback("eth_gasPrice", "Perform an eth_gasPrice call and display the price in decimal format");
    },
    eval : function(){
        netcalls.eth_gasPrice().then(res => res.json()).then( 
            resJson => {
            console.log(web3utils.hexToNumberString(resJson.result));
            }
        );
    }
}