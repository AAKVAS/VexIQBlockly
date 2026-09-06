[Русский](README_ru.md)

# VexIQBlockly

Visual block-based programming tool for *VEX IQ 2 Generation* robots.

## About

**VexIQBlockly** is a tool that lets you program *VEX IQ 2 Gen* robots using visual blocks. You assemble your program in the browser, and VexIQBlockly automatically translates it into *Python* code. You can then copy the generated code, paste it into Visual Studio Code, and upload it to your robot.

<img width="986" height="625" alt="image" src="https://github.com/user-attachments/assets/06243f49-36e4-4681-ada0-874c6a1fd77f" />

The tool was created for teachers and students who are just starting their journey into robotics. Blocks help you understand the logic of robot behavior without getting distracted by programming language syntax.

The project is built on top of [Google Blockly](https://developers.google.com/blockly) and uses the standard Blockly Sample App template.

## Features
- Build programs using visual blocks in the browser.
- Automatically generate Python code from blocks.
- Work with all major VEX IQ 2 Gen components:
  - Screen (display text and images)
  - Sound (notes and alert signals)
  - Brain sensors (buttons, battery, gyroscope)
  - Controller (remote control)
  - Touch sensors (bumper, touch sensor)
  - Optical sensors
  - Movement (motors and drivetrain)
  - Pneumatics
- Save your projects in the browser (even after refreshing or closing the page).

## Try it Online
You can use VexIQBlockly directly in your browser without any installation:
**[https://aakvas.github.io/VexIQBlockly/](https://aakvas.github.io/VexIQBlockly/)**

## Quick Start

Everything you need to start working with VexIQBlockly:

1. Make sure you have **Node.js** installed (it's required to run the tool).
2. Download or clone this repository.
3. Open a terminal in the project folder and run:
```bash
npm install
```
4. Start the local development server:
```bash
npm run start
```
5. Wait for the server to start. A browser window will automatically open with the block builder at http://localhost:8081/.

## License
This project is distributed under the MIT License. See the LICENSE file for details.

