import { componentStart } from '../actions/components'
import store from '../store'

function onComponentStart (event) {
  store.dispatch(componentStart(event.detail))
}

export default onComponentStart
