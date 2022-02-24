<template>
  <div style="display: inline-block">
    <label class="radio-label" style="padding-left: 0">Filename: </label>
    <el-input
      v-model="filename"
      placeholder="Please enter the file name (default excel-list)"
      style="width: 345px"
      :prefix-icon="ElIconDocument"
    />
  </div>
</template>

<script>
import { Document as ElIconDocument } from '@element-plus/icons'
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import * as Vue from 'vue'
export default {
  data() {
    return {
      ElIconDocument,
    }
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    filename: {
      get() {
        return this.value
      },
      set(val) {
        $emit(this, 'update:value', val)
      },
    },
  },
  emits: ['update:value'],
}
</script>
