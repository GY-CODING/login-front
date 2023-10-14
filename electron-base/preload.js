const { contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('databridge', {
    ping: ()=> ipcRenderer.invoke("ping")
})