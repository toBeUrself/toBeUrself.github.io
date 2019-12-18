<template>
    <div :contenteditable="isEdit.isEditable" id="marked-view" class="marked-down" v-html="getHtml"></div>
</template>

<script>
    import { marked, busSvc, EditableState } from './Constants'

    export default {
        name: 'MarkedDown',
        data: () => {
            return {
                rawHtml: '',
                options: '',
                isEdit: EditableState
            }
        },
        computed: {
            getHtml() {
                const source = this.rawHtml || this.defaultHtml
                if (!this.options) {
                    return this.codeFormat(source)
                }
                history.replaceState({}, null, `${location.origin}/${this.options.path}`)
                const segmemts = this.options.name.split('.')
                const fileType = segmemts[segmemts.length - 1]
                switch (fileType) {
                    case 'md':
                        return this.codeFormat(source)
                    case 'gif':
                    case 'png':
                    case 'jpg':
                    case 'jpeg':
                        return `<img src=${source} alt="图片" />`
                    default:
                        return this.codeFormat('```javescript\r\n' + source + '\r\n```')
                }
            }
        },
        props: {
            defaultHtml: String,
        },
        mounted() {
            const self = this
            busSvc.$on('file-click', fileOption => {
                if (fileOption.download_url === this.options.download_url) return
                self.options = fileOption
                self.getRawHtml(fileOption.download_url)
            })
        },
        methods: {
            getRawHtml: function (url) {
                const segmemts = this.options.name.split('.')
                const fileType = segmemts[segmemts.length - 1]
                if (['png', 'jpg', 'jpeg', 'gif'].indexOf(fileType) > -1) {
                    return this.rawHtml = url
                }
                fetch(url).then(res => {
                    return res.text()
                }).then(html => {
                    this.rawHtml = html
                })
            },
            codeFormat: function (source) {
                return marked.parse(source)
                source = marked.parse(source)
                source = source.replace(/\n/g, '\n</li><li>')
                return `<ul><li>${source}\n</li></ul>`
            }
        }
    }
</script>

<style>
    h1, h2, h3 {
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
        padding: 5px 20px;
        margin: 5px 0;
        color: #40906f;
        border-radius: 2px;
        border-left: 3px solid #40906f;
    }
    code {
        border-radius: 2px;
        display: inline-block;
        max-width: 100%;
        overflow: auto;
    }
    p code {
        color: navajowhite;
        padding: 0 3px;
        display: inline-block;
        background: #00000047;
    }
</style>
