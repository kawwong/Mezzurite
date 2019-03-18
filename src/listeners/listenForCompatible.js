import store from '../store'

function listenForCompatible (callback) {
  store.subscribe(() => {
    callback(store.getState().compatible)
  })
}

export default listenForCompatible
