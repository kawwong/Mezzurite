import components from './components'

describe('components.js', () => {
  it('should handle an action of type undefined', () => {
    expect(components({}, { type: undefined })).toMatchObject({})
  })

  it('should handle an action of type COMPONENT_START', () => {
    performance.now = jest.fn(() => 3)
    expect(components({}, { payload: 'test', type: 'COMPONENT_START' })).toMatchObject({
      test: {
        endTime: null,
        startTime: 3
      }
    })
  })

  it('should handle an action of type COMPONENT_END', () => {
    performance.now = jest.fn(() => 5)
    expect(components(
      {
        test: {
          endTime: null,
          startTime: 3
        }
      }, {
        payload: 'test',
        type: 'COMPONENT_END'
      }
    )).toMatchObject({
      test: {
        endTime: 5,
        startTime: 3
      }
    })
  })
})
