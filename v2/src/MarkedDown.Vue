<template>
    <div id="marked-view" class="marked-down" v-html="rawHtml"></div>
</template>

<script>
    import { marked, busSvc } from './Constants'

    export default {
        name: 'MarkedDown',
        data: () => {
            return {
                rawHtml: '',
            }
        },
        mounted() {
            const self = this
            busSvc.$on('file-click', filePath => {
                self.getRawHtml(filePath)
            })
        },
        methods: {
            getRawHtml: function (url) {
                fetch(url).then(res => {
                    return res.text()
                }).then(html => {
                    this.rawHtml = marked.parse(html)
                })
            }
        }
    }
</script>

<style>
    .marked-down {
        width: 100%;
        max-width: 800px;
    }
</style>
