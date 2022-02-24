<template>
  <div class="app-container">
    <aside>
      The guide page is useful for some people who entered the project for the
      first time. You can briefly introduce the features of the project. Demo is
      based on
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank"
        >driver.js.</a
      >
    </aside>
    <el-button
      :icon="ElIconQuestion"
      type="primary"
      @click.prevent.stop="guide"
    >
      Show Guide
    </el-button>
  </div>
</template>

<script>
import { Question as ElIconQuestion } from '@element-plus/icons'
import * as Vue from 'vue'
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

export default {
  data() {
    return {
      driver: null,
      ElIconQuestion,
    }
  },
  name: 'Guide',
  mounted() {
    this.driver = new Driver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    },
  },
}
</script>
