const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')
const url = require('url')
var win;

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 500,
    resizable:false,
    center:true,
    show: false,
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'main.html'),
    protocol: 'file:',
    slashes: true
  }))
  win.setMenu(null);
  win.setTitle('CALCULATOR');
  win.show();
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow);
