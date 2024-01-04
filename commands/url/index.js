const settings = require("../../settings.js");
const LOCAL_URL = "http://127.0.0.1:9085";
const TESTNET_URL = "https://gobi-rpc.horizenlabs.io";
const MAINNET_URL = "https://eon-rpc.horizenlabs.io";

module.exports = {
    match: [
        ["url"]
    ],
    helpGroup: function (){return 1},
    help: function(callback){
        callback("url", "display current baseurl to the EON NODE (default: "+MAINNET_URL+")");
        callback("url set <url>", "set new baseurl (format is like:  http://<hostname>:<port>)");
        callback("", "(the setting will be persisted in the user profile)"); 
        callback("", "Following shortcuts can be used:"); 
        callback("", "  url set local -> shortcut to: url set "+LOCAL_URL); 
        callback("", "  url set testnet -> shortcut to: url set "+TESTNET_URL);    
        callback("", "  url set mainnet -> shortcut to: url set "+MAINNET_URL);   

    },
    eval : function(arguments){
        if (arguments.length == 1){
            var baseUrl = settings.settingsFromFile().baseUrl;
            console.log(baseUrl);        
        }else if (arguments.length == 3 && arguments[1] == "set"){
            var urlToSet = arguments[2];
            if (arguments[2] == "local"){
                urlToSet = LOCAL_URL;
            }else if (arguments[2] == "testnet"){
                urlToSet = TESTNET_URL;
            }else if (arguments[2] == "mainnet"){
                urlToSet = MAINNET_URL;
            }


            settings.settingsToFile(settings.createSettingsJson(urlToSet));
            console.log("New base url set to: "+urlToSet)
        }
    
    }
}
