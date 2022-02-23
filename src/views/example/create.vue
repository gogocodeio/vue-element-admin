<template>
  <article-detail :is-edit="false" />
</template>

<script>
import * as Vue from 'vue'
import ArticleDetail from './components/ArticleDetail'

export default {
  name: 'CreateArticle',
  components: { ArticleDetail },
}
</script>
