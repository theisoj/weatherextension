import * as vscode from 'vscode';
import { getWeather } from './utils/getWeather.js';

export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('weatherextension.getWeather', () => {
		getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone).then(data => {
			console.log(data)
		})
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
