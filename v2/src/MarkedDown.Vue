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
    h1, h2, h3 {
        color: white;
        font-weight: normal;
    }
    ol li:only-child, ul li:only-child {
        color: white;
    }
    hr {
        border-color: grey;
    }
    a {
        color: antiquewhite;
    }
    table {
        width: 100%;
        max-width: 100%;
        border: 1px solid dimgrey;
        border-collapse: collapse;
    }
    table td, table th {
        padding: 5px;
        border: 1px solid dimgrey;
    }
    table td {
        text-align: left;
    }
    blockquote {
        border: 1px solid #406890;
        padding: 5px 20px;
        margin: 5px 0;
        color: #40906f;
        border-radius: 4px;
        border-left: 8px solid #406890;
    }
    code {
        border-radius: 2px;
    }
    p code {
        color: navajowhite;
        padding: 0 3px;
        display: inline-block;
        background: #00000047;
    }
</style>
