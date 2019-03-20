const components = (state = {}, action) => {
  switch (action.type) {
    case 'COMPONENT_START': {
      return {
        ...state,
        [action.payload.id]: {
          endTime: null,
          inViewport: action.payload.inViewport,
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
