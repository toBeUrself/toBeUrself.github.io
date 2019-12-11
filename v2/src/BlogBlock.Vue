<template>
    <div class="blog-block">
        <login></login>
    </div>
</template>

<script>
    import Login from './Login.vue'
    export default {
        name: 'BlogBlock',
        components: {
            Login,
        }
    }
</script>

<style>
    .blog-block {
        width: 300px;
        height: 100%;
        flex-shrink: 0;
        text-align: right;
        padding: 15px 10px 20px 30px;
    }
</style>