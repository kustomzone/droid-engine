const electron = require('electron')
const { app } = electron
const { BrowserWindow } = electron

app.on('ready', () => {
    let browser = new BrowserWindow({
        width: 1280,
        height: 720,
        backgroundColor: '#000000'
    })
    browser.setMenu(null)
    browser.loadURL(`file://${__dirname}/index.html`)

    browser.on('closed', () => {
        browser = null
    })
})