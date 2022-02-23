<template>
  <el-table :data="list" border fit highlight-current-row style="width: 100%">
    <el-table-column
      v-loading="loading"
      align="center"
      label="ID"
      width="65"
      element-loading-text="请给我点时间！"
    >
      <template v-slot="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="Date">
      <template v-slot="scope">
        <span>{{
          $filters.parseTime(scope.row.timestamp, '{y}-{m}-{d} {h}:{i}')
        }}</span>
      </template>
    </el-table-column>

    <el-table-column min-width="300px" label="Title">
      <template v-slot="{ row }">
        <span>{{ row.title }}</span>
        <el-tag>{{ row.type }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column width="110px" align="center" label="Author">
      <template v-slot="scope">
        <span>{{ scope.row.author }}</span>
      </template>
    </el-table-column>

    <el-table-column width="120px" label="Importance">
      <template v-slot="scope">
        <svg-icon
          v-for="n in +scope.row.importance"
          :key="n"
          icon-class="star"
        />
      </template>
    </el-table-column>

    <el-table-column align="center" label="Readings" width="95">
      <template v-slot="scope">
        <span>{{ scope.row.pageviews }}</span>
      </template>
    </el-table-column>

    <el-table-column class-name="status-col" label="Status" width="110">
      <template v-slot="{ row }">
        <el-tag :type="statusFilter_filter(row.status)">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import * as Vue from 'vue'
import { fetchList } from '@/api/article'

export default {
  props: {
    type: {
      type: String,
      default: 'CN',
    },
  },
  data() {
    return {
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id',
      },
      loading: false,
    }
  },
  created() {
    this.getList()
  },
  emits: ['create'],
  methods: {
    statusFilter_filter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger',
      }
      return statusMap[status]
    },
    getList() {
      this.loading = true
      $emit(this, 'create') // for test
      fetchList(this.listQuery).then((response) => {
        this.list = response.data.items
        this.loading = false
      })
    },
  },
}
</script>
