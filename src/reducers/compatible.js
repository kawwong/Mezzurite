const compatible = (state = null, action) => {
  switch (action.type) {
    case 'SET_COMPATIBLE': {
      return true
    }

    case 'SET_INCOMPATIBLE': {
      return false
    }

    default: {
      return state
    }
  }
}

export default compatible
