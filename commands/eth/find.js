var netcalls = require('../../netcalls.js');
const web3utils = require("web3-utils");

module.exports = {
    match: [
        ["eth_block","find"]
    ],
    helpGroup: function (){return 2},
    help: function(callback){
        callback("eth_block find <str>", "Find a block by heigth or hash using eth RPC call");
        callback("", "(if <str> represents an integer (decimal or hex (0x...)), will search by height, otherwise by hash)"); 
    },
    eval : async function(arguments){
        var searchQuery = arguments[2];
        if (searchQuery.length < 20 && searchQuery.length>2 && searchQuery.substring(0,2) == '0x'){
            //height in hex format
            netcalls.blockFindByHeightRPC(searchQuery).then(res => res.text()).then( text => console.log(text));
        }else if (searchQuery.length < 10 && isInt(searchQuery)){
            //height in decimal 
            netcalls.blockFindByHeightRPC( web3utils.numberToHex(searchQuery)).then(res => res.text()).then( text => console.log(text));
        }else{
            if (searchQuery.length>2 && searchQuery.substring(0,2) == '0x'){
                searchQuery = searchQuery.substring(2);
            }
            netcalls.blockFindByIdRPC(searchQuery).then(res => res.text()).then( text => console.log(text));
        }
    }
}

function isInt(value) {
    var x;
    return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
  }