function calculateInViewport (element) {
  return new Promise((resolve, reject) => {
    if (element != null) {
      const intersectionObserver = new IntersectionObserver((entries, observer) => {
        if (entries != null && entries[0] != null) {
          resolve(entries[0].isIntersecting)
        } else {
          reject(new Error('Observer cannot resolve element entries.'))
        }

        observer.unobserve(element)
      })

      intersectionObserver.observe(element)
    } else {
      reject(new Error('Observer cannot observe undefined element.'))
    }
  })
}

export default calculateInViewport
