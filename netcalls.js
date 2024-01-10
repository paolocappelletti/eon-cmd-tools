const fetch = require("node-fetch");
const BASE_URL = require("./settings.js").settingsFromFile().baseUrl;

module.exports = {
    blockBest:  function(){
        return fetch(BASE_URL+'/block/best', {method: "POST"});
    },
    blockForgingInfo:  function(){
        return fetch(BASE_URL+'/block/forgingInfo', {method: "POST"});
    },
    walletAllPublicKeys:  function(){
        return fetch(BASE_URL+'/wallet/allPublicKeys', {method: "POST"});
    },  
    walletBalance:  function(){
        return fetch(BASE_URL+'/wallet/getAllBalances', {method: "POST"});
    },     
    nodeInfo:  function(){
        return fetch(BASE_URL+'/node/info', {method: "POST"});
    },
    blockFindById: function(id){
        var body = {blockId: id};
        return fetch(BASE_URL+'/block/findById', {method: "POST", body: JSON.stringify(body)});
    }, 
    blockFindById2: function(id){
        var body = {
            "jsonrpc":"2.0",
            "method":"eth_getBlockByHash",
            "params":["0x"+id,true],
            "id":1
        };
        return fetch(BASE_URL+'/ethv1', {method: "POST", body: JSON.stringify(body)});
    }, 
    transactionFindById: function(id){
        var body = {
            "jsonrpc":"2.0",
            "method":"eth_getTransactionByHash",
            "params":[id],
            "id":1
        };
        return fetch(BASE_URL+'/ethv1', {method: "POST", body: JSON.stringify(body)});
    },   
    blockFindIdByHeight: function(h){
        var body = {height: h};   
        return fetch(BASE_URL+'/block/findIdByHeight', {method: "POST", body: JSON.stringify(body)});   
    },
    eth_gasPrice: function(){
        var body = {
            "jsonrpc":"2.0",
            "method":"eth_gasPrice",
            "params":[],
            "id":1
        };   
        return fetch(BASE_URL+'/ethv1', {method: "POST", body: JSON.stringify(body)});   
    },
    eth_chainId: function(){
        var body = {
            "jsonrpc":"2.0",
            "method":"eth_chainId",
            "params":[],
            "id":1
        };   
        return fetch(BASE_URL+'/ethv1', {method: "POST", body: JSON.stringify(body)});   
    },
    eth_getBlockByNumber:  function(block){
        var body = {
            "jsonrpc":"2.0",
            "method":"eth_getBlockByNumber",
            "params":[block, false],
            "id":1
        };   
        return fetch(BASE_URL+'/ethv1', {method: "POST", body: JSON.stringify(body)});   
    },
    eth_blockNumber:  function(){
        var body = {
            "jsonrpc":"2.0",
            "method":"eth_blockNumber",
            "params":[],
            "id":1
        };   
        return fetch(BASE_URL+'/ethv1', {method: "POST", body: JSON.stringify(body)});   
    },
    mcBest:  function(){
        return fetch(BASE_URL+'/mainchain/bestBlockReferenceInfo', {method: "POST"});
    },
    mcGenesis:  function(){
        return fetch(BASE_URL+'/mainchain/genesisBlockReferenceInfo', {method: "POST"});
    },

}
