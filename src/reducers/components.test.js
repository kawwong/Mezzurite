import * as getViewportDimensions from '../utilities/getViewportDimensions'
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
          name: 'test'
        },
        type: 'COMPONENT_START'
      })).toMatchObject({
      testId: {
        endTime: null,
        name: 'test',
        startTime: 3
      }
    })
  })

  it('should handle an action of type COMPONENT_END', () => {
    performance.now = jest.fn(() => 5)
    getViewportDimensions.default = jest.fn(() => ({
      height: 1,
      width: 1
    }))
    expect(components(
      {
        testId: {
          endTime: null,
          name: 'test',
          startTime: 3
        }
      }, {
        payload: {
          id: 'testId',
          inViewport: true
        },
        type: 'COMPONENT_END'
      }
    )).toMatchObject({
      testId: {
        endTime: 5,
        inViewport: true,
        name: 'test',
        startTime: 3,
        viewportDimensions: {
          height: 1,
          width: 1
        }
      }
    })
  })
})
