
const electron  = require('electron')
const debugMenu = require('debug-menu')
const Mousetrap = require('mousetrap')
const { app, BrowserWindow, Menu } = electron

app.on('ready', () => {

    let browser = new BrowserWindow({
            width: 1280,
            height: 720,
            backgroundColor: '#000000',
            frame: true,
            icon: __dirname + './icons/app.ico'
    })

    const menu = Menu.buildFromTemplate([
    {
        label: 'Menu',
        submenu: [
          {
            label: 'About',
            click () { require('electron').shell.openExternal('https://github.com/shanedroid32/droid-engine/blob/master/README.md') }
          }
        ]
    },
    {
        label: 'View',
        submenu: [
          {
            role: 'minimize'
          },
          {
            type: 'separator'
          },
          {
            role: 'togglefullscreen'
          }
        ]
    },
    {
        label: 'Debug',
        submenu: debugMenu.windowDebugMenu(browser)
    }])

    // browser.setMenu(null)

    // require('./menu/mainmenu')
	
	if (process.platform !== 'darwin') {
        browser.setMenu(menu);
    } else {
        electron.Menu.setApplicationMenu(menu);
    }

    browser.loadURL(`file://${__dirname}/index.html`)

    browser.on('closed', () => {
        browser = null
    })
	
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('close', () => {
    process.exit()
})
