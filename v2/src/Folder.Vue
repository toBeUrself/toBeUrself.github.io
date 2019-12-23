<template>
    <ul class="folder" :style="{maxHeight: getHeight+'px'}">
        <span @click="folderClick" class="folder-name" :class="getFolderClass">{{folderOptions.name}}</span>
        <file :file-options="file" v-for="file in getFileList"></file>
        <folder :folder-options="folder" v-for="folder in getFolderList"></folder>
    </ul>
</template>

<script>
    import File from './File.vue'
    export default {
        name: 'Folder',
        data () {
            return {
                menuList: [],
                maxHeight: 20,
                isOpen: this.open,
            }
        },
        components: {
            File,
        },
        props: {
            folderOptions: {
                type: Object,
                required: true,
                validator (value) {
                    return typeof value === 'object'
                },
            },
            open: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            getHeight: function () {
                return this.isOpen ? 2000 : 20
            },
            getFolderClass: function () {
                return {
                    'folder-open': this.isOpen,
                    'folder-close': !this.isOpen,
                }
            },
            getFolderList: function () {
                return this.menuList.filter(menu => menu.type === 'dir')
            },
            getFileList: function () {
                return this.menuList.filter(menu => menu.type === 'file')
            }
        },
        mounted() {
            this.getMenuList(this.folderOptions.url)  
        },
        methods: {
            folderClick: function () {
                this.isOpen = !this.isOpen
            },
            getMenuList: function (url) {
                fetch(url).then(res => {
                    return res.json()
                }).then(list => {
                    this.menuList = list || []
                })
            },
        }
    }
</script>

<style>
    .folder-close {
        background: url('../icons/folder.png');
    }
    .folder-open {
        background: url('../icons/folderOut.png');
    }
    .folder-name {
        background-repeat: no-repeat;
        background-position: initial;
        background-size: 1.2rem;
        padding-left: 1.2rem;
    }
    .folder {
        white-space: nowrap;
        user-select: none;
        cursor: pointer;
        padding-left: 0;
        font-size: 1.2rem;
        line-height: 20px;
        max-height: 20px;
        overflow: hidden;
        transition: max-height .25s ease-in-out;
    }
    .folder li, .folder ul {
        margin-left: 8px;
    }
</style>