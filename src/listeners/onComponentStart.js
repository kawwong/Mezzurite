import store from '../store'
import { componentStart } from '../actions/components'

function onComponentStart (event) {
  store.dispatch(componentStart(event.detail))
}

export default onComponentStart
