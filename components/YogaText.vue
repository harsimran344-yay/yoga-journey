<script>
export default {
  props: {
    content: {
        type: String,
        default: null
    }
  }
}
</script>


<template>
    <div class="w-6/12 flex items-center">
        {{ content }}
    </div>
</template>
