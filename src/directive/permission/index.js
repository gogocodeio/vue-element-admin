import permission from './permission'

const install = function (Vue) {
  window.$vueApp.directive('permission', permission)
}

if (window.Vue) {
  window['permission'] = permission
  window.$vueApp.use(install) // eslint-disable-line
}

permission.install = install
export default permission
