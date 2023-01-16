import * as vscode from 'vscode';
import { getWeather } from './utils/getWeather.js';

export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('weatherextension.getWeather', () => {

		navigator.geolocation.getCurrentPosition(positionSuccess, positionError)

		function positionSuccess({ coords }: GeolocationPosition) {
		   getWeather(coords.latitude, coords.longitude, Intl.DateTimeFormat().resolvedOptions().timeZone).then(renderWeather).catch(e => {
			   console.error(e)
			   vscode.window.showErrorMessage("Virhe haettassa säätietoja")
		  })
		}

    function positionError({ message }: GeolocationPositionError) {
			vscode.window.showErrorMessage(`Virheilmoitus: ${message}`)
		}

  })

  context.subscriptions.push(disposable)
}

function renderWeather({ current }: RenderWeatherProps) {
	renderCurrentWeather(current)
}

async function renderCurrentWeather(current: Current) {
  vscode.window.showInformationMessage(`Nykyinen lämpötila on ${current.currentTemp} °C.`)	
}

export function deactivate() {}