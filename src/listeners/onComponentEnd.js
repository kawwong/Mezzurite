import { componentEnd } from '../actions/components'
import store from '../store'
import getViewportDimensions from '../utilities/getViewportDimensions'

function onComponentEnd (event) {
  if (event != null && event.detail != null) {
    const endTime = performance.now()
    store.dispatch(componentEnd({
      endTime,
      id: event.detail.id,
      inViewport: event.detail.inViewport,
      route: window.location.pathname,
      viewportDimensions: getViewportDimensions()
    }))
  }
}

export default onComponentEnd
