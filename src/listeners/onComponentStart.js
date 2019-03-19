import store from '../store'
import { componentStart } from '../actions/captureCycle'

function onComponentStart (component) {
  store.dispatch(componentStart(component))
}

export default onComponentStart
