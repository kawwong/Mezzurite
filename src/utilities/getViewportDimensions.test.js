import getViewportDimensions from './getViewportDimensions'

describe('getViewportDimensions', () => {
  it('should set the viewport dimensions to null when both documentElement and innerHeight are undefined', () => {
    Object.defineProperty(global, 'document', { value: { documentElement: undefined }, writable: true })
    Object.defineProperty(global, 'window', { value: { innerHeight: undefined }, writable: true })

    expect(getViewportDimensions()).toBeNull()
  })

  it('should set the viewport dimensions to null when both documentElement and innerWidth are undefined', () => {
    Object.defineProperty(global, 'document', { value: { documentElement: undefined }, writable: true })
    Object.defineProperty(global, 'window', { value: { innerWidth: undefined }, writable: true })

    expect(getViewportDimensions()).toBeNull()
  })

  it('should set the viewport dimensions to null when both clientHeight and innerHeight are undefined', () => {
    Object.defineProperty(global, 'document', { value: { documentElement: { clientHeight: undefined, clientWidth: 1 } }, writable: true })
    Object.defineProperty(global, 'window', { value: { innerHeight: undefined, innerWidth: 1 }, writable: true })

    expect(getViewportDimensions()).toBeNull()
  })

  it('should use the clientHeight and innerWidth when both clientWidth and innerHeight are undefined', () => {
    Object.defineProperty(global, 'document', { value: { documentElement: { clientHeight: 1, clientWidth: undefined } }, writable: true })
    Object.defineProperty(global, 'window', { value: { innerHeight: undefined, innerWidth: 1 }, writable: true })

    expect(getViewportDimensions()).toMatchObject({
      height: 1,
      width: 1
    })
  })

  it('should use the clientWidth and innerHeight when both clientHeight and innerWidth are undefined', () => {
    Object.defineProperty(global, 'document', { value: { documentElement: { clientHeight: undefined, clientWidth: 1 } }, writable: true })
    Object.defineProperty(global, 'window', { value: { innerHeight: 1, innerWidth: undefined }, writable: true })

    expect(getViewportDimensions()).toMatchObject({
      height: 1,
      width: 1
    })
  })

  it('should set the viewport dimensions to null when both clientWidth and innerWidth are undefined', () => {
    Object.defineProperty(global, 'document', { value: { documentElement: { clientHeight: 1, clientWidth: undefined } }, writable: true })
    Object.defineProperty(global, 'window', { value: { innerHeight: 1, innerWidth: undefined }, writable: true })

    expect(getViewportDimensions()).toBeNull()
  })
})
