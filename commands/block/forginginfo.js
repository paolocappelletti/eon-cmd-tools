var netcalls = require('../../netcalls.js');

module.exports = {
    match: [
        ["block","forginginfo"],
        ["block","forgingInfo"]
    ],
    helpGroup: function (){return 3},
    help: function(callback){
        callback("block forgingInfo", "display forging info and epoch number");
    },
    eval : function(){
        netcalls.blockForgingInfo().then(res => res.text()).then( text => console.log(text));
    }
}