import components from './components'

describe('components.js', () => {
  it('should handle an action of type undefined', () => {
    expect(components({}, { type: undefined })).toMatchObject({})
  })

  it('should handle an action of type COMPONENT_START', () => {
    performance.now = jest.fn(() => 3)
    expect(components({},
      {
        payload: {
          id: 'testId',
          inViewport: true,
          name: 'test'
        },
        type: 'COMPONENT_START'
      })).toMatchObject({
      testId: {
        endTime: null,
        inViewport: true,
        name: 'test',
        startTime: 3
      }
    })
  })

  it('should handle an action of type COMPONENT_END', () => {
    performance.now = jest.fn(() => 5)
    expect(components(
      {
        testId: {
          endTime: null,
          inViewport: false,
          name: 'test',
          startTime: 3
        }
      }, {
        payload: 'testId',
        type: 'COMPONENT_END'
      }
    )).toMatchObject({
      testId: {
        endTime: 5,
        inViewport: false,
        name: 'test',
        startTime: 3
      }
    })
  })
})
