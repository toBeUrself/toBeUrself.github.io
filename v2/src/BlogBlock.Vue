<template>
    <div class="blog-block">
        <login></login>
        <page-edit></page-edit>
    </div>
</template>

<script>
    import Login from './Login.vue'
    import PageEdit from './PageEdit.vue'
    export default {
        name: 'BlogBlock',
        components: {
            Login,
            PageEdit,
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
