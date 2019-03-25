import { componentEnd } from '../actions/components'
import store from '../store'
import onComponentEnd from './onComponentEnd'
import * as getViewportDimensions from '../utilities/getViewportDimensions'

describe('onComponentEnd.js', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    store.dispatch = jest.fn()
  })

  it('should not dispatch when the event is null', () => {
    onComponentEnd(null)

    expect(store.dispatch).not.toHaveBeenCalled()
  })

  it('should not dispatch when the event detail is null', () => {
    onComponentEnd({
      detail: null
    })

    expect(store.dispatch).not.toHaveBeenCalled()
  })

  it('should dispatch the component data to the store', () => {
    getViewportDimensions.default = jest.fn(() => ({
      height: 1,
      width: 1
    }))
    performance.now = jest.fn(() => 5)
    Object.defineProperty(global, 'window', { value: { location: { pathname: '/route' } }, writable: true })
    onComponentEnd({
      detail: {
        endTime: 5,
        id: 'id',
        inViewport: true,
        route: '/route',
        viewportDimensions: {
          height: 1,
          width: 1
        }
      }
    })

    expect(store.dispatch).toHaveBeenCalledWith(componentEnd({
      endTime: 5,
      id: 'id',
      inViewport: true,
      route: '/route',
      viewportDimensions: {
        height: 1,
        width: 1
      }
    }))
  })
})
