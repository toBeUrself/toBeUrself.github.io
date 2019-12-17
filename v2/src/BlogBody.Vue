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
        font-size: 1.2rem;
        max-width: 780px;
        padding-right: 29px;
        border-right: 1px solid grey;
        height: 100%;
        flex-shrink: 0;
        padding-left: 20px;
        overflow: auto;
    }
    div::-webkit-scrollbar {
        width: 0;
    }
</style>