<template>
  <el-table :data="list" style="width: 100%; padding-top: 15px">
    <el-table-column label="Order_No" min-width="200">
      <template v-slot="scope">
        {{ orderNoFilter_filter(scope.row.order_no) }}
      </template>
    </el-table-column>
    <el-table-column label="Price" width="195" align="center">
      <template v-slot="scope">
        ¥{{ $filters.toThousandFilter(scope.row.price) }}
      </template>
    </el-table-column>
    <el-table-column label="Status" width="100" align="center">
      <template v-slot="{ row }">
        <el-tag :type="statusFilter_filter(row.status)">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import * as Vue from 'vue'
import { transactionList } from '@/api/remote-search'

export default {
  data() {
    return {
      list: null,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    orderNoFilter_filter(str) {
      return str.substring(0, 30)
    },
    statusFilter_filter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger',
      }
      return statusMap[status]
    },
    fetchData() {
      transactionList().then((response) => {
        this.list = response.data.items.slice(0, 8)
      })
    },
  },
}
</script>
