<template>
  <article-detail :is-edit="true" />
</template>

<script>
import * as Vue from 'vue'
import ArticleDetail from './components/ArticleDetail'

export default {
  name: 'EditForm',
  components: { ArticleDetail },
}
</script>
