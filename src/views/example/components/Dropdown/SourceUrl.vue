<template>
  <el-dropdown :show-timeout="100" trigger="click">
    <el-button plain>
      Link
      <el-icon class="el-icon--right"><el-icon-caret-bottom /></el-icon>
    </el-button>
    <template v-slot:dropdown>
      <el-dropdown-menu class="no-padding no-border" style="width: 400px">
        <el-form-item
          label-width="0px"
          style="margin-bottom: 0px"
          prop="source_uri"
        >
          <el-input v-model="source_uri" placeholder="Please enter the content">
            <template v-slot:prepend> URL </template>
          </el-input>
        </el-form-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { CaretBottom as ElIconCaretBottom } from '@element-plus/icons'
import { $on, $off, $once, $emit } from '../../../../utils/gogocodeTransfer'
import * as Vue from 'vue'
export default {
  components: {
    ElIconCaretBottom,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    source_uri: {
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
