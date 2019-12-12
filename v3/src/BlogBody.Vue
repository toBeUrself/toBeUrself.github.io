<template>
    <div class="blog-body">
        <marked-down></marked-down>
    </div>
</template>

<script>
    import MarkedDown from './MarkedDown.vue'
    export default {
        name: 'BlogBody',
        components: {
            MarkedDown,
        }
    }
</script>

<style>
    .blog-body {
        width: 100%;
        height: 100%;
        padding-left: 20px;
        overflow: auto;
    }
    div::-webkit-scrollbar {
        width: 0;
    }
</style>