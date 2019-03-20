import onComponentEnd from './onComponentEnd'
import onComponentStart from './onComponentStart'
import onPing from './onPing'

function addMezzuriteEventListeners () {
  window.addEventListener('mezzurite/componentEnd', onComponentEnd)
  window.addEventListener('mezzurite/componentStart', onComponentStart)
  window.addEventListener('mezzurite/ping', onPing)
}

export default addMezzuriteEventListeners
