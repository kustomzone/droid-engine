// const path = require('path')

const electron = require('electron')
const { app, BrowserWindow, globalShortcut } = electron
const Mousetrap = require('../node_modules/mousetrap/mousetrap')

let mainWindow

function createWindow() {
	
	const exit = globalShortcut.register('CommandOrControl+Q', () => {
        app.quit()
    })
	
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		backgroundColor: '#100C0C',
		frame: true,
		icon: __dirname + './icons/app.ico'
    })
	
    mainWindow.loadURL(`file://${__dirname}/app.htm`)
	
	// dev open
    mainWindow.webContents.openDevTools()
	
    mainWindow.on('closed', () => {
        mainWindow = null
    })
	
	// menu off
    mainWindow.setMenu(null)
	
	const fullscreen = globalShortcut.register('CommandOrControl+F', () => {
        if (!mainWindow.isFullScreen()) {
            mainWindow.setFullScreen(true)
        } else {
            mainWindow.setFullScreen(false)
        }
    })
}

app.on('ready', () => {
    createWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

app.on('close', () => {
    process.exit();
})

app.on('will-quit', () => {
    globalShortcut.unregister('CommandOrControl+Q')
    globalShortcut.unregisterAll()
})
