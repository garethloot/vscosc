import * as vscode from 'vscode';
import { Client } from 'node-osc';

import { registerEvents } from './regitsterEvents';

export function client() {
  const clientPort = vscode.workspace
    .getConfiguration('vscosc')
    .get('clientPort') as number;
  const clientHost = vscode.workspace
    .getConfiguration('vscosc')
    .get('clientHost') as string;

  const client = new Client(clientHost, clientPort);

  registerEvents(client);

  return {
    client,
  };
}
