#!/usr/bin/env node

var commands = [];
commands.push(require("./commands/url/index.js"));
commands.push(require("./commands/block/best.js"));
commands.push(require("./commands/block/find.js"));
commands.push(require("./commands/block/forginginfo.js"));
commands.push(require("./commands/node/info.js"));
commands.push(require("./commands/wallet/keys.js"));
commands.push(require("./commands/wallet/balance.js"));
commands.push(require("./commands/eth/eth_block.js"));
commands.push(require("./commands/eth/find.js"));
commands.push(require("./commands/eth/eth_blockNumber.js"));
commands.push(require("./commands/transaction/find.js"));
commands.push(require("./commands/eth/eth_gasPrice.js"));
commands.push(require("./commands/eth/eth_chainId.js"));
commands.push(require("./commands/mainchain/best.js"));
commands.push(require("./commands/mainchain/genesis.js"));

var arguments = (process.argv.length > 2) ? process.argv.slice(2) : [];

if (arguments.length == 0 || arguments.length == 1 && arguments[0] == 'help'){
    displayHelp(commands);
}else{
    var matched = false;
    for (var i = 0; i < commands.length; i++){
        var matches = commands[i].match;    
        var isMatching = false;
        for (var x = 0; x < matches.length; x++){        
            var m = matches[x];
            if (arguments.length>= m.length){
                var found = true;
                for (var j=0; j<m.length; j++){
                    if (arguments[j]!=m[j]){
                        found = false;
                        break;
                    }
                }
                if (found){
                    isMatching = true;
                    break;
                }
            }
        }
        if (isMatching){
            matched = true;
            commands[i].eval(arguments);
            break;
        }
    }
    if (!isMatching){
        console.log("Unknown command - type 'eon help' to see the available ones");
    }
}

function displayHelp(commands){
    console.log("EON shell tools:");
    console.log("Command line tools to interact in a smart way with an Horizen EON Node\n");
    console.log("usage: eon <command> <subcommand>\n");
    console.log("Available commands and subcommands:");
    displayHelpGroup(1);
    console.log("Following commands require the endpoint /ethv1 reachable:");
    displayHelpGroup(2);
    console.log("Following commands require other EON http endpoints reachable:");
    displayHelpGroup(3);

}

function displayHelpGroup(type){
    for (var i = 0; i < commands.length; i++){
        if (commands[i].helpGroup() == type){
            commands[i].help((cmdname, cmddescr) => {
                var isExplainLine = (cmdname=="");
                while (cmdname.length<30){
                    cmdname=cmdname+" ";
                }
                console.log("  "+cmdname + (isExplainLine ? "    ":" => ")+cmddescr)
            });    
        }
    }
}


