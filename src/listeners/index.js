import onAppStart from './onAppStart'
import onComponentEnd from './onComponentEnd'
import onComponentStart from './onComponentStart'

function addMezzuriteEventListeners () {
  window.addEventListener('mezzurite/AppStart', onAppStart)
  window.addEventListener('mezzurite/ComponentEnd', onComponentEnd)
  window.addEventListener('mezzurite/ComponentStart', onComponentStart)
}

export default addMezzuriteEventListeners
