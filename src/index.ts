import { findParentByChildren } from './utils/find-parent-by-children';
import { readFileSync } from 'fs';

function addStyles() {
  const styles = readFileSync(__dirname + '/styles/overrides.css', 'utf-8');
  const styleNode = document.createElement('style');

  document.head.appendChild(styleNode);
  styleNode.innerHTML = styles;
}

addStyles();

export function removeForums() {
  const forumsPanel = findParentByChildren('.right2Col', 'a[href="/forums"]');

  if (forumsPanel) {
    forumsPanel.remove();
  } else {
    console.error('Could not remove forums from sidepanel');
  }
}

removeForums();

function changeCaretToCog() {
  const caretElement = document.querySelector('.navdown > .fa-caret-down');

  if (caretElement) {
    caretElement.classList.remove('fa-caret-down');
    caretElement.classList.add('fa-cog');
  }
}

changeCaretToCog();
