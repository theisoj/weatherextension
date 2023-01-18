import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('weatherextension.getWeather', () => {

		const paneeli = vscode.window.createWebviewPanel("openWeather", "Säätiedot", vscode.ViewColumn.One, { enableScripts: true })

		paneeli.webview.asWebviewUri(vscode.Uri.parse("https://jesunmaailma.ml/saatiedot"))

	})

	context.subscriptions.push(disposable)
}

export function deactivate() { }