import onPing from './onPing'

describe('onPing.js', () => {
  it('should dispatch a mezzurite/alive custom event', () => {
    jest.spyOn(window, 'dispatchEvent')
    onPing()
    expect(window.dispatchEvent).toHaveBeenCalledWith(new CustomEvent('mezzurite/alive'))
  })
})
