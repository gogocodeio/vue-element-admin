<template>
  <el-dropdown :show-timeout="100" trigger="click">
    <el-button plain>
      {{ !comment_disabled ? 'Comment: opened' : 'Comment: closed' }}
      <el-icon class="el-icon--right"><el-icon-caret-bottom /></el-icon>
    </el-button>
    <template v-slot:dropdown>
      <el-dropdown-menu class="no-padding">
        <el-dropdown-item>
          <el-radio-group v-model="comment_disabled" style="padding: 10px">
            <el-radio :label="true"> Close comment </el-radio>
            <el-radio :label="false"> Open comment </el-radio>
          </el-radio-group>
        </el-dropdown-item>
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
      type: Boolean,
      default: false,
    },
  },
  computed: {
    comment_disabled: {
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
