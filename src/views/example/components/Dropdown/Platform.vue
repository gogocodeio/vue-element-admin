<template>
  <el-dropdown :hide-on-click="false" :show-timeout="100" trigger="click">
    <el-button plain>
      Platfroms({{ platforms.length }})
      <el-icon class="el-icon--right"><el-icon-caret-bottom /></el-icon>
    </el-button>
    <template v-slot:dropdown>
      <el-dropdown-menu class="no-border">
        <el-checkbox-group v-model="platforms" style="padding: 5px 15px">
          <el-checkbox
            v-for="item in platformsOptions"
            :key="item.key"
            :label="item.key"
          >
            {{ item.name }}
          </el-checkbox>
        </el-checkbox-group>
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
      required: true,
      default: () => [],
      type: Array,
    },
  },
  data() {
    return {
      platformsOptions: [
        { key: 'a-platform', name: 'a-platform' },
        { key: 'b-platform', name: 'b-platform' },
        { key: 'c-platform', name: 'c-platform' },
      ],
    }
  },
  computed: {
    platforms: {
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
