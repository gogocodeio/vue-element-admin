<template>
  <div class="components-container">
    <aside>
      Markdown is based on
      <a href="https://github.com/nhnent/tui.editor" target="_blank"
        >tui.editor</a
      >
      ，simply wrapped with Vue.
      <a
        target="_blank"
        href="https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html"
      >
        Documentation
      </a>
    </aside>

    <div class="editor-container">
      <el-tag class="tag-title"> Basic: </el-tag>
      <markdown-editor v-model:value="content1" height="300px" />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title"> Markdown Mode: </el-tag>
      <markdown-editor
        ref="markdownEditor"
        v-model:value="content2"
        :options="{ hideModeSwitch: true, previewStyle: 'tab' }"
        height="200px"
      />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title"> Customize Toolbar: </el-tag>
      <markdown-editor
        v-model:value="content3"
        :options="{ toolbarItems: ['heading', 'bold', 'italic'] }"
      />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title"> I18n: </el-tag>
      <el-alert
        :closable="false"
        title="You can change the language of the admin system to see the effect"
        type="success"
      />
      <markdown-editor
        ref="markdownEditor"
        v-model:value="content4"
        :language="language"
        height="300px"
      />
    </div>

    <el-button
      style="margin-top: 80px"
      type="primary"
      :icon="ElIconDocument"
      @click="getHtml"
    >
      Get HTML
    </el-button>
    <div v-html="html" />
  </div>
</template>

<script>
import { Document as ElIconDocument } from '@element-plus/icons'
import * as Vue from 'vue'
import MarkdownEditor from '@/components/MarkdownEditor'

const content = `
**This is test**

* vue
* element
* webpack

`
export default {
  data() {
    return {
      content1: content,
      content2: content,
      content3: content,
      content4: content,
      html: '',
      languageTypeList: {
        en: 'en_US',
        zh: 'zh_CN',
        es: 'es_ES',
      },
      ElIconDocument,
    }
  },
  name: 'MarkdownDemo',
  components: { MarkdownEditor },
  computed: {
    language() {
      return this.languageTypeList['en']
    },
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml()
      console.log(this.html)
    },
  },
}
</script>

<style scoped>
.editor-container {
  margin-bottom: 30px;
}
.tag-title {
  margin-bottom: 5px;
}
</style>
