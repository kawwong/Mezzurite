import { componentStart } from '../actions/components'
import store from '../store'
import onComponentStart from './onComponentStart'

describe('onComponentStart.js', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    store.dispatch = jest.fn()
  })

  it('should not dispatch when the event is null', () => {
    onComponentStart(null)

    expect(store.dispatch).not.toHaveBeenCalled()
  })

  it('should not dispatch when the event detail is null', () => {
    onComponentStart({
      detail: null
    })

    expect(store.dispatch).not.toHaveBeenCalled()
  })

  it('should dispatch the component data to the store', () => {
    performance.now = jest.fn(() => 5)
    onComponentStart({
      detail: {
        id: 'id',
        name: 'name'
      }
    })

    expect(store.dispatch).toHaveBeenCalledWith(componentStart({
      id: 'id',
      name: 'name',
      startTime: 5
    }))
  })
})
