import store from '../store'

function select (state) {
  return state.components
}

function components () {
  let currentState = {}

  function handleChange () {
    const nextState = select(store.getState())
    if (JSON.stringify(nextState) !== JSON.stringify(currentState)) {
      currentState = nextState
      window.dispatchEvent(new CustomEvent('mezzurite/componentsChanged'))
    }
  }

  const unsubscribe = store.subscribe(handleChange)
  return unsubscribe
}

export default components
