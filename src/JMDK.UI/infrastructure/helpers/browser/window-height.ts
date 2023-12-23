const WINDOW_HEIGHT_CSS_VAR = '--window-height'

export function useWindowHeightCssVariable() {
  function setWindowHeightCssVariable() {
    document.documentElement.style.setProperty(
      WINDOW_HEIGHT_CSS_VAR,
      `${window.innerHeight / 100}px`,
    )
  }

  setWindowHeightCssVariable()
  window.addEventListener('resize', setWindowHeightCssVariable)
  window.addEventListener('orientationchange', setWindowHeightCssVariable)

  return function dispose() {
    window.removeEventListener('resize', setWindowHeightCssVariable)
    window.removeEventListener('orientationchange', setWindowHeightCssVariable)
  }
}
