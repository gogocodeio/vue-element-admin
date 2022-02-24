<template>
  <el-upload
    :data="dataObj"
    :multiple="true"
    :before-upload="beforeUpload"
    action="https://upload.qbox.me"
    drag
  >
    <el-icon><el-icon-upload /></el-icon>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  </el-upload>
</template>

<script>
import { Upload as ElIconUpload } from '@element-plus/icons'
import * as Vue from 'vue'
import { getToken } from '@/api/qiniu'
export default {
  components: {
    ElIconUpload,
  },
  data() {
    return {
      dataObj: { token: '', key: '' },
      image_uri: [],
      fileList: [],
    }
  },
  methods: {
    beforeUpload() {
      const _self = this
      return new Promise((resolve, reject) => {
        getToken()
          .then((response) => {
            const key = response.data.qiniu_key
            const token = response.data.qiniu_token
            _self._data.dataObj.token = token
            _self._data.dataObj.key = key
            resolve(true)
          })
          .catch((err) => {
            console.log(err)
            reject(false)
          })
      })
    },
  },
}
</script>
