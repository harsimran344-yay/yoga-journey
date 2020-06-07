<script>
import { ContentMixin } from '~/mixins/content'

import YogaImage from '~/components/YogaImage.vue'
import YogaText from '~/components/YogaText.vue'

export default {
  mixins: [ContentMixin],
  components: {
    YogaImage,
    YogaText
  }
}
</script>

<template>
  <div class="p-2 flex justify-between">
    <YogaImage />
    <YogaText :content="content.description" />
  </div>
</template>
