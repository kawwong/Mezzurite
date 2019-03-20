import store from '../store'
import components from './components'
import { componentStart } from '../actions/components'

describe('components.js', () => {
  beforeEach(() => {
    jest.spyOn(window, 'dispatchEvent')
  })

  afterEach(() => {
    window.dispatchEvent.mockRestore()
  })

  it('should not call window.dispatchEvent when the state does not change', () => {
    components()
    store.dispatch({ type: 'INVALID_EVENT' })
    expect(window.dispatchEvent).not.toHaveBeenCalled()
  })

  // TODO: Figure out why the test environment can't reset from this test.
  it('should call window.dispatchEvent whenever the store updates', () => {
    components()
    store.dispatch(componentStart('test'))
    expect(window.dispatchEvent).toHaveBeenCalledWith(new CustomEvent('mezzurite/componentsChanged'))
  })
})
