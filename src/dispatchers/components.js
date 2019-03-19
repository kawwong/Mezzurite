import store from '../store'

function select (state) {
  return state.components
}

function components () {
  let currentState = null

  function handleChange () {
    const nextState = select(store.getState())
    if (nextState !== currentState) {
      currentState = nextState
      window.dispatchEvent(new CustomEvent('mezzurite/componentsChanged'))
    }
  }

  const unsubscribe = store.subscribe(handleChange)
  return unsubscribe
}

export default components
