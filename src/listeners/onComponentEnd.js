import { componentEnd } from '../actions/components'
import store from '../store'

function onComponentEnd (event) {
  store.dispatch(componentEnd(event.detail))
}

export default onComponentEnd
