const electron 	= require('electron');
const {app}		= electron;
const win		= electron.BrowserWindow
const {dialog}	= electron;
const {Menu}	= electron;
const {Tray}	= electron;

let mainWin;

function createWindow() {

	mainWin = new win({
		width: 1920,
		height: 1080,
		center: true,
		title: 'Nyan Editor'
	});

	mainWin.loadURL(`file://${__dirname}/test-ui.html`);

	mainWin.on('closed', () => {
		mainWin = null;
	});

	mainWin.setProgressBar(0.5);

	/*dialog.showMessageBox({
		type: 'warning',
		title: 'Bienvenue !',
		message: "Il semblerait qu'il s'agit de votre première utilisation de \
		Nyan Maker. Vous acceptez les conditions d'utilisation du logiciel\
		par son utilisation ainsi que sa licence.",
		buttons: ['Refuser', 'Accepter']
	}, (response) => {
		if(response === 0) {
			app.quit();
		}
	});

	const templateMenu = [
		{
			label: 'File',
			submenu: [
				{ label: 'Open' },
				{ label: 'Save' }
			]
		}
	];
	const menu = Menu.buildFromTemplate(templateMenu);

	if(process.platform != 'darwin') {
		mainWin.setMenu(menu);
	} else {
		Menu.setApplicationMenu(menu);
	}*/

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWin === null) {
		createWindow();
	}
});
