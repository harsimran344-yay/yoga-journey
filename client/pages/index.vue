<script>
import YogaImage from '~/components/YogaImage.vue'
import YogaText from '~/components/YogaText.vue'

export default {
  components: {
    YogaImage,
    YogaText
  }
}
</script>

<template>
  <div>
    <YogaImage />
    <YogaText />
  </div>
</template>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
