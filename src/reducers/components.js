const components = (state = {}, action) => {
  switch (action.type) {
    case 'COMPONENT_START': {
      return {
        ...state,
        [action.payload.id]: {
          name: action.payload.name,
          route: action.payload.route,
          startTime: action.payload.startTime
        }
      }
    }

    case 'COMPONENT_END': {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          endTime: action.payload.endTime,
          inViewport: action.payload.inViewport,
          viewportDimensions: action.payload.viewportDimensions
        }
      }
    }

    default: {
      return state
    }
  }
}

export default components
