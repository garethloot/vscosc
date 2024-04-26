import * as vscode from 'vscode';
import { Client, Bundle } from 'node-osc';

import { handleEvent } from './handleEvent';

export function registerEvents(client: Client) {
	// Register the event handler for the onDidChangeActiveTextEditor event
    handleEvent(client, vscode.window.onDidChangeActiveTextEditor, (e) => {
        const { languageId, fileName } = e.document;
        return new Bundle(['/vscode/window/languageId', languageId], ['/vscode/window/fileName', fileName]);
    });
}