import store from '../store'
import { componentEnd } from '../actions/captureCycle'

function onComponentEnd (component) {
  store.dispatch(componentEnd(component))
}

export default onComponentEnd
