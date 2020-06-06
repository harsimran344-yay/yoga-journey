<script>
    import NavBar from '~/components/NavBar.vue'

    export default {
        components: {
            NavBar
        }
    }
</script>>

<template>
    <!-- TODO: setup a common content for header as well -->
    <div class="px-10 pb-2 border-b-2 border-red-dark flex justify-between">
        <img class="w-40 h-40" src="~/assets/images/yoga-logo.png" />
        <NavBar />
    </div>
</template>
