const captureCycle = (state = [], action) => {
  switch (action.type) {
    case 'COMPONENT_START': {
      return [
        ...state,
        {
          name: action.payload,
          startTime: performance.now(),
          endTime: null
        }
      ]
    }

    case 'COMPONENT_END': {
      return state.map(component => {
        if (component.name === action.payload) {
          return {
            ...component,
            endTime: performance.now()
          }
        } else {
          return component
        }
      })
    }

    default: {
      return state
    }
  }
}

export default captureCycle
