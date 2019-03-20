import { componentEnd } from '../actions/components'
import store from '../store'
import onComponentEnd from './onComponentEnd'

describe('onComponentEnd.js', () => {
  it('should dispatch the component to the store', () => {
    store.dispatch = jest.fn()
    onComponentEnd('test')

    expect(store.dispatch).toHaveBeenCalledWith(componentEnd('test'))
  })
})
