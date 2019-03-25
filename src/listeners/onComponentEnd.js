import { componentEnd } from '../actions/components'
import store from '../store'
import getViewportDimensions from '../utilities/getViewportDimensions'
import calculateInViewport from '../utilities/calculateInViewport'

async function onComponentEnd (event) {
  if (event != null && event.detail != null) {
    const endTime = performance.now()
    const inViewport = await calculateInViewport(event.detail.element)
    const viewportDimensions = getViewportDimensions()

    store.dispatch(componentEnd({
      endTime,
      id: event.detail.id,
      inViewport,
      route: window.location.pathname,
      viewportDimensions
    }))
  }
}

export default onComponentEnd
