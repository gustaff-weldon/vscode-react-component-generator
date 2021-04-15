# React Component Generator

Simple, template-based React component generator for VS Code.

Based on the generate-react-component extension by [@lukemorales](https://github.com/lukemorales/vscode-react-component-generator).
I have switched template files to TS, removed class component generation

## Build
To create addon from code run:
```
yarn package
```

## Installation
Navigate to the `zencargo-react-component-generator-X.Y.Z.vsix` extension file from Visual Studio Code. Right click, `Install Extension VSIX`.

## Usage
* Right click any directory in the explorer panel
* Select Component
* Input name and choose options
* Submit

## What's the deal with these files?

* With **Component** you can generate a stateless component by typing `n` when asked if you want to use Hooks/State. If you type `y`, it will generate a component **with Hooks setup**.
- You'll get main component file
- index that rexports the default from component
- spec and stories files
- types file

Obviosly not all components will have stories, so feel free to remove it.
Same goes for types file, if no types are exported from component, just remove the file and update index.ts

This package does not force these files though. You can easily customize the templates to match your own tech stack.

## Extension Settings

The component templates are completely customizable. You can add additional boolean options to the generator panel from the package's settings. One option is included by default: `Hooks/State` determines whether to insert Hooks/State declarations in your component.

This extension contributes the following settings:

* `zencargo-react-component-generator.conditionals`: Array of strings which will toggle certain portions of your templates.
* `zencargo-react-component-generator.componentTemplatePath`: Absolute path to custom **component** template directory. If left blank, defaults to built-in template.

### Syntax

Template syntax is very simple:

* Any occurrence of `__ComponentName__` in a filename or a file's content will be replaced with the user's text input.
* Any text surrounded by `/* IF condition */` and `/* ENDIF */`, where `condition` is the name of an option (defined in the package settings) will be removed unless `condition` is enabled (or invalid)
* Any text surrounded by `/* IF !condition */` and `/* ENDIF */` will be removed unless `condition` is disabled (or invalid)
* Any remaining `/* IF */` or `/* ENDIF */` comments will be removed, but the text between them will be untouched
