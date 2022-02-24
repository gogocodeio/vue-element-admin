<template>
  <el-select
    v-bind="$attrs"
    ref="dragSelect"
    v-model="selectVal"
    class="drag-select"
    multiple
  >
    <slot />
  </el-select>
</template>

<script>
import { $on, $off, $once, $emit } from '../../utils/gogocodeTransfer'
import * as Vue from 'vue'
import Sortable from 'sortablejs'

export default {
  name: 'DragSelect',
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  computed: {
    selectVal: {
      get() {
        return [...this.value]
      },
      set(val) {
        $emit(this, 'update:value', [...val])
      },
    },
  },
  mounted() {
    this.setSort()
  },
  methods: {
    setSort() {
      const el = this.$refs.dragSelect.$el.querySelectorAll(
        '.el-select__tags > span'
      )[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
        setData: function (dataTransfer) {
          dataTransfer.setData('Text', '')
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
        },
        onEnd: (evt) => {
          const targetRow = this.value.splice(evt.oldIndex, 1)[0]
          this.value.splice(evt.newIndex, 0, targetRow)
        },
      })
    },
  },
  emits: ['update:value'],
}
</script>

<style lang="scss" scoped>
.drag-select {
  ::v-deep {
    .sortable-ghost {
      opacity: 0.8;
      color: #fff !important;
      background: #42b983 !important;
    }

    .el-tag {
      cursor: pointer;
    }
  }
}
</style>
