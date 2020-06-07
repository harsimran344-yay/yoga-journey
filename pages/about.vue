<script>
import { ContentMixin } from '~/mixins/content'

export default {
    mixins: [ContentMixin]
}
</script>

<template>
    <div>
        <h1>{{ content.description }}</h1>
    </div>
</template>
