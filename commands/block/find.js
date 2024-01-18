var netcalls = require('../../netcalls.js');

module.exports = {
    match: [
        ["block","find"]
    ],
    helpGroup: function (){return 3},
    help: function(callback){
        callback("block find <str>", "Find a block by heigth or hash");
        callback("", "(if <str> is an integer, will search by height, otherwise by hash)"); 
    },
    eval : async function(arguments){
        var searchQuery = arguments[2];
        if (isInt(searchQuery)){
            var r = await netcalls.blockFindIdByHeight(searchQuery).then(res => res.json()).then(
                json => {
                    var bid = json.result.blockId;
                    netcalls.blockFindById(bid).then(res => res.text()).then( text => console.log(text));
                }   
            );  
        }else{
            netcalls.blockFindById(searchQuery).then(res => res.text()).then( text => console.log(text));
        }
    }
}

function isInt(value) {
    var x;
    return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
  }