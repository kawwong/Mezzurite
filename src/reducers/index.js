import { combineReducers } from 'redux'

import captureCycle from './captureCycle'
import compatible from './compatible'

export default combineReducers({
  captureCycle,
  compatible
})
