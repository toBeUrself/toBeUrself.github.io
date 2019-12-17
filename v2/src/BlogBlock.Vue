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
        width: 100%;
        height: calc(100% - 35px);
        padding: 15px 10px 20px 30px;
    }
</style>
