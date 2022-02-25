import * as Vue from 'vue'


import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-plus'
import './styles/element-variables.scss'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import '@/styles/index.scss' // global css

import SvgIcon from '@/components/SvgIcon' // svg component
import App from './App'
import store from './store'
import router from './router'

import installIcon from './icons' // icon
import './permission' // permission control
import installErrorLog from'./utils/error-log' // error log

import * as filters from './filters' // global filters

window.$vueApp = Vue.createApp(App)
installIcon(window.$vueApp)
installErrorLog(window.$vueApp)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

window.$vueApp.use(Element, {
  locale: zhCn, // 如果使用中文，无需设置，请删除
})

// register global utility filters
Object.keys(filters).forEach((key) => {
  (
    window.$vueApp.config.globalProperties.$filters ||
    (window.$vueApp.config.globalProperties.$filters = {})
  )[key] = filters[key]
})

window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
window.$vueApp.use(store)
window.$vueApp.use(router)
window.$vueApp.mount('#app')
