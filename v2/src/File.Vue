<template>
    <li :title="fileOptions.name" class="file" @click="clickFile">{{getFileName}}</li>
</template>

<script>
    import { busSvc } from './Constants'
    export default {
        name: 'File',
        props: {
            fileOptions: Object,
        },
        computed: {
            getFileName: function () {
                return (this.fileOptions && this.fileOptions.name) 
                        ? this.fileOptions.name.split('.')[0] 
                        : '文件名为空'
            }
        },
        methods: {
            clickFile: function () {
                busSvc.$emit('file-click', this.fileOptions.download_url)
            }
        }
    }
</script>

<style>
    .file {
        background: url('../icons/file.png');
        background-repeat: no-repeat;
        background-position: left;
        background-size: 1rem;
        padding-left: 1rem;
        color: #4682BE;
        cursor: pointer;
        font-size: 1rem;
        list-style-type: none;
    }
</style>