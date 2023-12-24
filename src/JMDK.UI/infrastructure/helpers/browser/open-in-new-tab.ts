export function openInNewTab(url?: string): void {
  if (url) window.open(url, '_blank')
}
