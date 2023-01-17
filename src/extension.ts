import * as vscode from 'vscode';
import { getWeather } from './utils/getWeather.js';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('weatherextension.getWeather', () => {

		const paneeli = vscode.window.createWebviewPanel("openWeather", "Säätiedot", vscode.ViewColumn.One, { enableScripts: true })

		paneeli.webview.asWebviewUri(vscode.Uri.parse(""))

	})

	context.subscriptions.push(disposable)
}

function renderWeather({ current }: RenderWeatherProps) {
	renderCurrentWeather(current)
}

async function renderCurrentWeather(current: Current) {
	vscode.window.showInformationMessage(`Nykyinen lämpötila on ${current.currentTemp} °C.`)
}

export function deactivate() { }