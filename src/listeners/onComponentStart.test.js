import { componentStart } from '../actions/components'
import store from '../store'
import onComponentStart from './onComponentStart'

describe('onComponentStart.js', () => {
  it('should dispatch the component to the store', () => {
    store.dispatch = jest.fn()
    onComponentStart({
      detail: 'testComponent'
    })

    expect(store.dispatch).toHaveBeenCalledWith(componentStart('testComponent'))
  })
})
