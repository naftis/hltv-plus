export function findParent(parentSelector: string, childrenSelector: string) {
  const matches = document.querySelectorAll(childrenSelector);

  for (const match of matches) {
    const closest = match.closest(parentSelector);

    if (closest) {
      return closest;
    }
  }

  return null;
}
