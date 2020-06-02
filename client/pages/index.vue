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
  <div class="container">
    <div>
      <YogaImage />
      <YogaText />
    </div>
  </div>
</template>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
