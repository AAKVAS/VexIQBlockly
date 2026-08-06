import * as Blockly from 'blockly';
import {definitions} from './blocks/blocks';
import {pythonGenerator} from 'blockly/python';
import {forBlock} from './generators/python'; 
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';
import * as ru from 'blockly/msg/ru';
import * as en from 'blockly/msg/en';
import { ruTable } from './msg/ru';
import { enTable } from './msg/en';

Blockly.common.defineBlocks(definitions);
Object.assign(pythonGenerator.forBlock, forBlock);
Blockly.setLocale(ru);
Blockly.setLocale(ruTable);

const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox, media: './static/media/'});

const runCode = () => {
  const header = `from vex import *

brain = Brain()

`;
  const code = header + pythonGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
};

load(ws);
runCode();

ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});


ws.addChangeListener((e) => {
  if (
    e.isUiEvent ||
    e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  runCode();
});

const copyGeneratedCode = async function (elementId = 'generatedCode') {
  const preElement = document.getElementById(elementId);
  if (!preElement) {
    console.warn(`Element #${elementId} not found.`);
    return false;
  }

  const codeElement = preElement.querySelector('code');
  if (!codeElement) {
    console.warn('Tag <code> not found.');
    return false;
  }

  const text = codeElement.innerText;

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    }
  } catch (err) {
    return false;
  }
};

document.getElementById('copyCode').addEventListener('click', async (e) => {
  e.preventDefault();
  const success = await copyGeneratedCode('generatedCode');
  if (success) {
    alert(Blockly.Msg['CODE_COPIED']);
  } else {
    alert(Blockly.Msg['CODE_COPY_FAILED']);
  }
});

