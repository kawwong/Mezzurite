import 'intersection-observer'

import performanceNowPolyfill from '../polyfills/performance-now'
import registerDispatchers from './dispatchers'
import registerListeners from './listeners'

function initializeMezzurite () {
  const mezzuriteState = localStorage.getItem('mezzurite/state')

  if (mezzuriteState == null) {
    performanceNowPolyfill()
    registerDispatchers()
    registerListeners()

    localStorage.setItem('mezzurite/state', 'active')

    window.addEventListener('unload', () => {
      localStorage.removeItem('mezzurite/state')
    })
  }
}

export default initializeMezzurite
