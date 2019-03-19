import store from '../store'
import { componentStart } from '../actions/components'

function onComponentStart (component) {
  store.dispatch(componentStart(component))
}

export default onComponentStart
