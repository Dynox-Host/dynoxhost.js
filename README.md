<h1 align="center"> 
    <a href="https://files.blob-project.com"><img src="https://cdn.discordapp.com/attachments/811925478348029982/812451407562276874/image0.png" width="256px" alt="dynoxhost.js"></a><br>
    dynoxhost.js
    <img src="https://img.shields.io/npm/dw/dynoxhost.js?style=flat-square">
</h1>

---

## Installation
You can either install it via [npm](https://npmjs.com) and [yarn](https://yarnpkg.com/):
```bash
npm install --save dynoxhost.js
```
```bash
yarn add dynoxhost.js
```
or if you need to install it in [Dynox Hosting](https://dynox.us):

Add `"dynoxhost.js": "latest"` at the end of your dependencies in package.json file

## Requirements
[`API Key`](https://panel.dynox.us) - **User API Key of Dynox Host**


## How to get API-KEY
1. Visit the [panel](https://panel.dynox.us)
2. Login with your credentials
3. Click on the User-Icon in the upper right side of the panel
4. Choose the Tab API Credentials
5. Choose a Description
6. Leave the IP field blank if you dont know what this means
7. Click `Create`
8. Copy the API-Key. Dont share the API-Key with anyone. Dynox Host will never ask you about the Key
9. Use the key for controlling your server and to get data


## Example

**Synchronous**:
```js
const DynoxHost = require('dynoxhost.js');
const dh = new DynoxHost('USER_API_KEY');

dh.getUsage('SERVER_ID').then(console.log);
```

**Asynchronous**:
```js
const DynoxHost = require('dynoxhost.js');
const dh = new DynoxHost('USER_API_KEY');

let data = await dh.getUsage('SERVER_ID');
console.log(data);
```

You can find other examples [here](https://github.com/Dynox-Host/dynoxhost.js/tree/main/examples).

## Reference

> **`serverID`** = **Your Bot/Server ID**

> **`backupID`** = **Your Backup ID**

> **`state`** = **Power State (can be: start, stop, restart, kill)**
- `getDetails(serverID)` *Get all server informations. Ex: Name*
- `getUsage(serverID)` *Get the server usage. Ex: RAM*
- `setPowerState(serverID, state)` *Start/Stop/Kill/Restart the server remotely*
- `createBackup(serverID)` *Creates a new backup of your server*
- `getBackupDetails(serverID, backupID)` *Gives you details about a backup*

 
## Links
- [Main Website](https://dynox.us)
- [Panel](https://panel.dynox.us)

## License

© Copyright 2021, Dynox Hosting

[MIT License](https://opensource.org/licenses/MIT)
