import waves from './waves'

const install = function (Vue) {
  window.$vueApp.directive('waves', waves)
}

if (window.Vue) {
  window.waves = waves
  window.$vueApp.use(install) // eslint-disable-line
}

waves.install = install
export default waves
