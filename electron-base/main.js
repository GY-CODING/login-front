const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1366,
    height: 768,
    icon: 'src/view/css/img/icono/gy-icon.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    resizable: false,
    // fullscreen: true,
    
    
    
  })

  win.setMenuBarVisibility(false)
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.handle('ping', ()=> 'pong');