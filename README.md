# vscosc README

With this extension you can control trigger vscode commands using OSC. This make it possible to create a touch bar like interface for vscode that can change based on the current language of the file.

## Features

- Send vscode Events to OSC software
- Trigger commands using OSC

## VSCode Events

- /vscode/window/languageId
- /vscode/window/fileName

## Trigger commands using OSC

Every command in vscode looks something like this using dot notation: `workbench.action.moveEditorToNextGroup`
You can translate that to a OSC message by prefixing the command with a `/` and replace every `.` with a `/`
So that would be `/workbench/action/moveEditorToNextGroup`

## Requirements

- OSC software like Open Stage Control or any other OSC software

## Extension Settings

This extension contributes the following settings:

- `vscosc.clientPort`: This is the port where VSCOSC will send events to.
- `vscosc.clientHost`: This is the host where VSCOSC will send events to.
- `vscosc.serverPort`: This is the port where your OSC software needs to send commands

## Release Notes

### 0.0.1 2024-04-26

- Send vscode Events to OSC software
  - /vscode/window/languageId
  - /vscode/window/fileName
- Trigger vscode commands using OSC

---
