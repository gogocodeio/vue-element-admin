import adaptive from './adaptive'

const install = function (Vue) {
  window.$vueApp.directive('el-height-adaptive-table', adaptive)
}

if (window.Vue) {
  window['el-height-adaptive-table'] = adaptive
  window.$vueApp.use(install) // eslint-disable-line
}

adaptive.install = install
export default adaptive
