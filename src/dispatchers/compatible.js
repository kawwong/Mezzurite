import store from '../store'

function select (state) {
  return state.compatible
}

function observeCompatible () {
  let currentState

  function handleChange () {
    let nextState = select(store.getState())
    if (nextState !== currentState) {
      currentState = nextState
      window.dispatchEvent(new CustomEvent('mezzurite/CompatibleChanged'))
    }
  }

  let unsubscribe = store.subscribe(handleChange)
  return unsubscribe
}

export default observeCompatible
