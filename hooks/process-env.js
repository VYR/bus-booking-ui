const fs = require('fs');
const Crypto = require('./crypto');
function processConfig(env){
    console.log('Environment set to :', env);    
    console.log('Reading File '+env+'.json started');
     try {
        const rawdata = fs.readFileSync('./public/config/'+env+'.json', 'utf8');
        const jsonData = JSON.parse(rawdata);
        console.log('Reading File '+env+'.json completed successfully!');
        console.log('Encrypting '+env+'.json file content started');
        const encData = Crypto.encrypt(JSON.stringify(jsonData));        
        console.log('Encrypting '+env+'.json file content completed successfully!');
        console.log('Writing encrypted file content to config_encrypted/env.json file started');
        try {
            const jsonString=JSON.stringify({data:encData});
            fs.writeFileSync('./public/config_encrypted/env.json', jsonString);
            console.log('Writing encrypted file content to config_encrypted/env.json file completed successfully');
            processFiles('api-operations.json');
            console.log('Required configurations are ready');
            console.log('Now Angular can start running project');
        } catch (err) {
            console.error('Cannot write file: config_encrypted/env.json', err);
        }
        //const decData = Crypto.derypt(encData);
    } catch (err) {
        console.error('Cannot read file:'+env+'.json', err);
    }
}
function processFiles(fileName){   
    console.log('Reading File '+fileName+' started');
     try {
        const rawdata = fs.readFileSync('./public/config/'+fileName, 'utf8');
        const jsonData = JSON.parse(rawdata);
        console.log('Reading File '+fileName+' completed successfully!');
        console.log('Encrypting '+fileName+' file content started');
        const encData = Crypto.encrypt(JSON.stringify(jsonData));        
        console.log('Encrypting '+fileName+' file content completed successfully!');
        console.log('Writing encrypted file content to config_encrypted/'+fileName+' file started');
        try {
            const jsonString=JSON.stringify({data:encData});
            fs.writeFileSync('./public/config_encrypted/'+fileName, jsonString);
            console.log('Writing encrypted file content to config_encrypted/'+fileName+' file completed successfully');
        } catch (err) {
            console.error('Cannot write file: config_encrypted/'+fileName, err);
        }
    } catch (err) {
        console.error('Cannot read file: '+fileName, err);
    }
}

module.exports=processConfig;