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
  <div>
    <h1>{{ page.description }}</h1>
    <YogaImage />
    <YogaText />
  </div>
</template>