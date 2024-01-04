const fs = require("fs");
const path = require("path");

module.exports = {
    settingsFromFile:  function(){
        const homedir = require('os').homedir();      
        const folder =  path.join(homedir, '.eon-cmd-tools');
        const file =  path.join(homedir, '.eon-cmd-tools',"settings.conf");
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder); 
        }
        if (fs.existsSync(file)) {
            return JSON.parse(fs.readFileSync(file));
        }else{
            return this.createSettingsJson("https://eon-rpc.horizenlabs.io");
        }
    },
    settingsToFile:  function(jsonSettings){
        const homedir = require('os').homedir();      
        const folder =  path.join(homedir, '.eon-cmd-tools');
        const file =  path.join(homedir, '.eon-cmd-tools', "settings.conf");
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder); 
        }
        fs.writeFileSync(file, JSON.stringify(jsonSettings));
    },
    createSettingsJson: function(baseUrl) {
        return {
            baseUrl: baseUrl
        }
    }
    
}

