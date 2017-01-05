const electron = require('electron')
const { app, BrowserWindow, globalShortcut } = electron
const Mousetrap = require('../node_modules/mousetrap/mousetrap')

app.on('ready', () => {

    const exit = globalShortcut.register('CommandOrControl+Q', () => {
        app.quit()
    })

    let browser = new BrowserWindow({
        width: 1280,
        height: 720,
        backgroundColor: '#000000',
        frame: false
    })
    browser.setMenu(null)
    browser.loadURL(`file://${__dirname}/index.html`)

    browser.on('closed', () => {
        browser = null
    })


    const fullscreen = globalShortcut.register('CommandOrControl+F', () => {
        if (!browser.isFullScreen()) {
            browser.setFullScreen(true)
        } else {
            browser.setFullScreen(false)
        }
    })
})

app.on('will-quit', () => {
    globalShortcut.unregister('CommandOrControl+Q')
    globalShortcut.unregisterAll()
})