import performanceNowPolyfill from '../polyfills/performance-now'
import registerDispatchers from './dispatchers'
import registerListeners from './listeners'

export default function mezzurite () {
  performanceNowPolyfill()
  registerDispatchers()
  registerListeners()
}
