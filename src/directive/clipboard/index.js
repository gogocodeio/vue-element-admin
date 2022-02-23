import Clipboard from './clipboard'

const install = function (Vue) {
  window.$vueApp.directive('Clipboard', Clipboard)
}

if (window.Vue) {
  window.clipboard = Clipboard
  window.$vueApp.use(install) // eslint-disable-line
}

Clipboard.install = install
export default Clipboard
