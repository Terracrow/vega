import pkg from 'electron';

const { app, BrowserWindow } = pkg;

class Window {
    constructor() {
        const createWindow = () => {

            const win = new BrowserWindow({
                width: 800,
                height: 600,
                autoHideMenuBar: true
            });

            win.loadURL('http://localhost:8080/');
        }

        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') app.quit();
        });

        app.whenReady().then(() => {
            createWindow();
        });
    }
}

export default Window;
