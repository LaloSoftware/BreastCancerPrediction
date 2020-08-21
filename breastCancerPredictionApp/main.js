const { app, BrowserWindow } = require('electron');
let win;
function createWindow(){
    win = new BrowserWindow({
        width: 768,
        height: 1024   
    })
    win.removeMenu();
    win.loadURL(`file://${__dirname}/dist/breastCancerPredictionApp/index.html`);
    win.webContents.openDevTools()
    win.on('closed', function () {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function (){
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', function (){
    if(win != null){
        createWindow();
    }
})