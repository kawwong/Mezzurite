function getViewportDimensions () {
  let height = null
  let width = null

  if (document.documentElement != null) {
    if (document.documentElement.clientHeight != null) {
      height = document.documentElement.clientHeight
    }

    if (document.documentElement.clientWidth != null) {
      width = document.documentElement.clientWidth
    }
  }

  if (window.innerHeight != null) {
    if (height == null) {
      height = window.innerHeight
    } else {
      height = Math.max(height, window.innerHeight)
    }
  }

  if (window.innerWidth != null) {
    if (width == null) {
      width = window.innerWidth
    } else {
      width = Math.max(width, window.innerWidth)
    }
  }

  if (height == null || width == null) {
    return null
  } else {
    return {
      height,
      width
    }
  }
}

export default getViewportDimensions
