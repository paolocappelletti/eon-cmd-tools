var netcalls = require('../../netcalls.js');

module.exports = {
    match: [
        ["transaction","find"]
    ],
    helpGroup: function (){return 2},
    help: function(callback){
        callback("transaction find <str>", "Find a transaction by hash");
    },
    eval : async function(arguments){
        var searchQuery = arguments[2];
        netcalls.transactionFindById(searchQuery).then(res => res.text()).then( text => console.log(text));
    }
}

