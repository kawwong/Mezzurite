import 'intersection-observer'

import performanceNowPolyfill from '../polyfills/performance-now'
import registerDispatchers from './dispatchers'
import registerListeners from './listeners'

const mezzuriteState = sessionStorage.getItem('mezzurite/state')

if (mezzuriteState == null) {
  performanceNowPolyfill()
  registerDispatchers()
  registerListeners()

  sessionStorage.setItem('mezzurite/state', 'active')

  window.addEventListener('unload', () => {
    sessionStorage.removeItem('mezzurite/state')
  })
}
