const components = (state = {}, action) => {
  switch (action.type) {
    case 'COMPONENT_START': {
      return {
        ...state,
        [action.payload.id]: {
          endTime: null,
          name: action.payload.name,
          startTime: performance.now()
        }
      }
    }

    case 'COMPONENT_END': {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          endTime: performance.now(),
          inViewport: action.payload.inViewport
        }
      }
    }

    default: {
      return state
    }
  }
}

export default components
