<script>
import YogaImage from '~/components/YogaImage.vue'
import YogaText from '~/components/YogaText.vue'

export default {
  components: {
    YogaImage,
    YogaText
  },

  async asyncData ({ $content }) {
    const page = await $content('index').fetch()
    return { page }
  }
}
</script>

<template>
  <div class="p-2 flex justify-between">
    <YogaImage />
    <YogaText :content="page.description" />
  </div>
</template>
