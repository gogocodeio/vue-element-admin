import drag from './drag'

const install = function (Vue) {
  window.$vueApp.directive('el-drag-dialog', drag)
}

if (window.Vue) {
  window['el-drag-dialog'] = drag
  window.$vueApp.use(install) // eslint-disable-line
}

drag.install = install
export default drag
