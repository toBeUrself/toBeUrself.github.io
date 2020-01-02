<template>
    <div class="blog-body">
        <marked-down :default-html="rawHtml"></marked-down>
    </div>
</template>

<script>

    import { DefaultPage, fetchGet } from './Constants'
    import MarkedDown from './MarkedDown.vue'
    export default {
        name: 'BlogBody',
        data: () => {
            return {
                rawHtml: ''
            }
        },
        components: {
            MarkedDown,
        },
        mounted() {
            this.getRawHtml(DefaultPage)
        },
        methods: {
            getRawHtml: function (url) {
                fetchGet(url, 'text').then(html => {
                    this.rawHtml = html
                })
            }
        }
    }
</script>

<style>
    .blog-body {
        width: 100%;
        font-size: 1.2rem;
        max-width: 780px;
        padding-right: 29px;
        border-right: 1px solid black;
        height: 100%;
        flex-shrink: 0;
        padding-left: 20px;
        overflow: auto;
    }
    div::-webkit-scrollbar {
        width: 0;
    }
</style>