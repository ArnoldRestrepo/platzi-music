const blur = {}

// Set Blur for UI elements directive

function setBlur (el, binding) {
  if (!binding.value) {
    el.style.filter = 'blur(0.8px)'
    el.querySelectorAll('button').forEach(button => {
      button.setAttribute('disabled', true)
      button.setAttribute('title', 'La canción no puede ser reproducida por derechos de autor')
    })
  }
}

// Install blur directive

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
