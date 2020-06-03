<script>
export default {
    async asyncData ({ $content }) {
    const page = await $content('about/about').fetch()
    return { page }
  }
}
</script>

<template>
    <div>
        <h1>{{ page.description }}</h1>
    </div>
</template>
