import * as vscode from 'vscode';
import { Client, Bundle } from 'node-osc';

export const handleEvent = <T>(client: Client, event: vscode.Event<T | undefined>, callback: (e: T) => Bundle) => {
    event((e) => {
        if (e === undefined) {return;}
        const bundle = callback(e);
        client.send(bundle);
    });
};