import registerDispatchers from './dispatchers'
import registerListeners from './listeners'

const performanceNowPolyfill = require('../polyfills/performance-now')

performanceNowPolyfill()

registerDispatchers()
registerListeners()
