import store from '../store'
import { componentEnd } from '../actions/components'

function onComponentEnd (component) {
  store.dispatch(componentEnd(component))
}

export default onComponentEnd
