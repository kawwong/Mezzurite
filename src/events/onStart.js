import store from '../store'
import { setCompatible, setIncompatible } from '../actions/compatible'

function onStart () {
  if (window.performance == null) {
    store.dispatch(setIncompatible())
  } else {
    store.dispatch(setCompatible())
  }
}

export default onStart
