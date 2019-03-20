import store from '../store'
import { componentEnd } from '../actions/components'

function onComponentEnd (event) {
  store.dispatch(componentEnd(event.detail))
}

export default onComponentEnd
