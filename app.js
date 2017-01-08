// const path = require('path')

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		backgroundColor: '#100C0C',
		frame: true,
		icon: __dirname + './icons/app.ico'
    })
	
    mainWindow.loadURL(`file://${__dirname}/app.htm`)
	
    mainWindow.webContents.openDevTools()
	
    mainWindow.on('closed', function() {
        mainWindow = null
    })
	
    mainWindow.setMenu(null)
}

app.on('ready', function() {
    createWindow();
})

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow()
    }
})

app.on('close', function () {
    process.exit();
})
