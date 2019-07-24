import { removeForums } from './modifications/remove-forums';
import { readFileSync } from 'fs';

function addStyles() {
  const styles = readFileSync(__dirname + '/styles/overrides.css', 'utf-8');
  const styleNode = document.createElement('style');

  document.head.appendChild(styleNode);
  styleNode.innerHTML = styles;
}

removeForums();
addStyles();
