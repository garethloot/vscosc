import * as vscode from 'vscode';
import { Server } from 'node-osc';

export function server() {
	const serverPort = vscode.workspace.getConfiguration('vscosc').get('serverPort') as number;

	const oscServer = new Server(serverPort, '0.0.0.0', () => {
		console.log('OSC Server is listening');
	});
	
	oscServer.on('message', function (msg) {
    const [address, ...oscMsg] = msg;

    switch (address) {
      case '/vscode/editor/insertSnippet':
        const [name] = oscMsg;
        console.log('Inserting snippet:', JSON.stringify(msg));
        vscode.commands.executeCommand('editor.action.insertSnippet', { name });
        break;
      default:
        const commandAddress = address.substring(1).split('/').join('.');
        vscode.commands.executeCommand(commandAddress, ...oscMsg);
        break;
    }
	}); 
}