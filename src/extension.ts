import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('forecan-saa.searchByCityAndOrMunicipality', async () => {
		const text = await vscode.window.showInputBox({
			title: "Forecan säätiedot: Hae säätiedot",
			placeHolder: "Kaupungin ja/tai kunnan nimi",
			prompt: "Tällä lisäosalla voit hakea päivän säätä kirjoittamalla hakukenttään kaupungin ja/tai kunnan nimen. Kirjoita muodossa (kaupunki tai kaupunki/kunta)."
		})
		if (!text) return vscode.window.showErrorMessage("Tätä kenttää ei voi jättää tyhjäksi. Kirjoita kaupungin ja/tai kunnan nimi sille varattuun kenttään.")
		vscode.env.openExternal(vscode.Uri.parse(`https://www.foreca.fi/Finland/${text}`))
	})

	context.subscriptions.push(disposable)
}

export function deactivate() { }