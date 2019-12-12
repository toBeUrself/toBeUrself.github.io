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
                    this.rawHtml = marked(html)
                })
            }
        }
    }
</script>

<style>
    .marked-down {
        max-width: 800px;
    }
    code {
        border-radius: 4px;
    }
</style>