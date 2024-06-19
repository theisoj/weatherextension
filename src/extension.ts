import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('saatiedot.searchByCityAndOrMunicipality', async () => {
		const text = await vscode.window.showInputBox({
			title: "Säätiedot: Hae säätiedot",
			placeHolder: "Kaupungin ja/tai kunnan nimi",
			prompt: "Tällä lisäosalla voit hakea päivän säätä Forecasta kirjoittamalla kenttään kaupungin ja/tai kunnan nimen. Kirjoita muodossa kaupunki tai kaupunki/kunta (esim. Kortesjärvi tai Kauhava/Kortesjärvi)."
		})

		if (!text) return vscode.window.showErrorMessage("Tätä kenttää ei voi jättää tyhjäksi. Kirjoita kaupungin ja/tai kunnan nimi sille varattuun kenttään.")

		const url = `https://www.foreca.fi/Finland/${capitalizeFirstLetter(text)}`

		const panel = vscode.window.createWebviewPanel(
			'saatiedot',
			`Säätiedot: ${capitalizeFirstLetter(text)}`,
			vscode.ViewColumn.One,
			{
				enableScripts: true,
				retainContextWhenHidden: true
			}
		)

		panel.webview.html = getWebviewContent(url)
	})

	context.subscriptions.push(disposable)
}

export function deactivate() { }

export function capitalizeFirstLetter(string: string) {
	return string
		.split("/")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join("/")
}

function getWebviewContent(url: string) {
	return `<!DOCTYPE html>
	<html lang="fi">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Säätiedot</title>
	</head>
	<body style="margin: 0; padding: 0; box-sizing: border-box;">
		<iframe src="${url}" style="margin: 0; padding: 0; width: 100%; height: 100vh; min-height: 100vh; border: none;"></iframe>
	</body>
	</html>`
}