import * as Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// register globally
window.$vueApp.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
