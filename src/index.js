import * as Blockly from 'blockly';
import { definitions } from './blocks/blocks';
import { pythonGenerator } from 'blockly/python';
import { forBlock } from './generators/python';
import { save, load } from './serialization';
import { toolbox } from './toolbox';
import './index.css';
import * as ru from 'blockly/msg/ru';
import * as en from 'blockly/msg/en';
import { ruTable } from './msg/ru';
import { enTable } from './msg/en';

Blockly.common.defineBlocks(definitions);
Object.assign(pythonGenerator.forBlock, forBlock);

let currentWorkspace = null;

function detectLanguage() {
  const lang = navigator.language || navigator.languages?.[0] || 'en';
  return lang.startsWith('ru') ? 'ru' : 'en';
}

let currentLang = detectLanguage();

function getMessages(lang) {
  if (lang === 'ru') {
    return { ...ru, ...ruTable };
  } else if (lang === 'en') {
    return { ...en, ...enTable };
  }
  return { ...en, ...enTable };
}

function initWorkspace(lang) {
  let savedState = null;
  if (currentWorkspace) {
    savedState = Blockly.serialization.workspaces.save(currentWorkspace);
    currentWorkspace.dispose();
    currentWorkspace = null;
  }

  Blockly.setLocale(getMessages(lang));

  const blocklyDiv = document.getElementById('blocklyDiv');

  while (blocklyDiv.firstChild) {
    blocklyDiv.removeChild(blocklyDiv.firstChild);
  }

  currentWorkspace = Blockly.inject(blocklyDiv, {
    toolbox: toolbox, 
    media: './static/media/',
  });

  if (savedState) {
    Blockly.serialization.workspaces.load(savedState, currentWorkspace);
  }

  load(currentWorkspace);

  runCode();

  currentWorkspace.addChangeListener((e) => {
    if (e.isUiEvent) return;
    save(currentWorkspace);
  });

  currentWorkspace.addChangeListener((e) => {
    if (
      e.isUiEvent ||
      e.type == Blockly.Events.FINISHED_LOADING ||
      currentWorkspace.isDragging()
    ) {
      return;
    }
    runCode();
  });
}

function switchLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  document.getElementById('langRu').classList.toggle('active', lang === 'ru');
  document.getElementById('langEn').classList.toggle('active', lang === 'en');

  initWorkspace(lang);
}

function runCode() {
  if (!currentWorkspace) return;
  const header = `from vex import *

brain = Brain()
brain_inertial = Inertial()
`;
  const code = header + pythonGenerator.workspaceToCode(currentWorkspace);
  const codeDiv = document.getElementById('generatedCode').firstChild;
  if (codeDiv) {
    codeDiv.innerText = code;
  }
}

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

document.addEventListener('DOMContentLoaded', () => {
  if (currentLang === 'ru') {
    document.getElementById('langRu').classList.add('active');
    document.getElementById('langEn').classList.remove('active');
  } else {
    document.getElementById('langEn').classList.add('active');
    document.getElementById('langRu').classList.remove('active');
  }

  initWorkspace(currentLang);

  document.getElementById('langRu').addEventListener('click', () => switchLanguage('ru'));
  document.getElementById('langEn').addEventListener('click', () => switchLanguage('en'));

  document.getElementById('copyCode').addEventListener('click', async (e) => {
    e.preventDefault();
    const success = await copyGeneratedCode('generatedCode');
    if (success) {
      alert(Blockly.Msg['CODE_COPIED']);
    } else {
      alert(Blockly.Msg['CODE_COPY_FAILED']);
    }
  });
});