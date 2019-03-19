const components = (state = {}, action) => {
  switch (action.type) {
    case 'COMPONENT_START': {
      return {
        ...state,
        [action.payload]: {
          endTime: null,
          startTime: performance.now()
        }
      }
    }

    case 'COMPONENT_END': {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          endTime: performance.now()
        }
      }
    }

    default: {
      return state
    }
  }
}

export default components
