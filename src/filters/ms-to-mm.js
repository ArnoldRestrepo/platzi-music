const msToMm = {}

function convertMsToMm (ms) {
  const minutes = ('0' + Math.floor(ms / 60000)).substr(-2)
  const seconds = ((ms % 60000 / 1000).toFixed(0).substr(0, 2))
  return `${minutes}: ${seconds} minutos`
}

msToMm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => {
    return convertMsToMm(val)
  })
}

export default msToMm
