function onPing () {
  window.dispatchEvent(new CustomEvent('mezzurite/alive'))
}

export default onPing
