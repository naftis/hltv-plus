import { findParent } from '../utils/find-parent';

export function removeForums() {
  const forumsPanel = findParent('.right2Col', 'a[href="/forums"]');

  if (forumsPanel) {
    forumsPanel.remove();
  } else {
    throw new Error('Could not remove forums from sidepanel');
  }
}
