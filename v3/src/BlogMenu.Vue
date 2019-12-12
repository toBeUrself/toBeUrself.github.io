<template>
    <div class="blog-menu" :style="{width: getMenuWidth + 'px'}">
        <div class="menu-body">
            <div class="blog-title">
                <h1>ToBeUrSelf 之点滴</h1>
                <p>作者：<a href="https://tobeurself.github.io/resume.html" target="_blank">刘泽运@前端</a></p>
            </div>
            <div class="blog-search">
                <input type="text" />
            </div>
            <div class="blog-menu-tree">
                <folder is-open :folder-options="folderOptions"></folder>
            </div>
        </div>
        <div class="menu-bar" @mousedown="menuBarDragStart"></div>
    </div>
</template>

<script>
    import { GetBlogsList } from './Constants'
    import Folder from './Folder.vue'

    export default {
        name: 'BlogMenu',
        data: () => {
            return {
                mouseMove: {
                    moveStart: 0,
                    moveEnd: 0,
                    distance: 0,
                },
                menuWidth: 300,
                folderOptions: {
                    name: 'blogs',
                    url: GetBlogsList,
                },
            }
        },
        components: {
            Folder,
        },
        computed: {
            getMenuWidth: function () {
                return this.mouseMove.distance ? this.menuWidth + this.mouseMove.distance : this.menuWidth
            },
        },
        methods: {
            menuBarDragStart: function (event) {
                const self = this
                this.mouseMove.moveStart = event.clientX
                document.onmousemove = function (evt) {
                    const width = self.mouseMove.distance ? self.menuWidth + self.mouseMove.distance : self.menuWidth
                    if (width >= 450 && evt.clientX > self.mouseMove.moveEnd) return
                    if (width <= 150 && evt.clientX < self.mouseMove.moveEnd) return
                    self.mouseMove.moveEnd = evt.clientX
                    self.mouseMove.distance = self.mouseMove.moveEnd - self.mouseMove.moveStart

                }
                document.onmouseup = function (evt) {
                    self.menuWidth += self.mouseMove.distance
                    self.mouseMove.distance = 0
                    document.onmousemove = null
                    document.onmouseup = null
                }
                return false
            },
        }
    }
</script>

<style>
    .blog-search input {
        max-width: 260px;
        outline: none;
        height: 20px;
        width: 100%;
    }
    .blog-title {
        white-space: nowrap;
        user-select: none;
        cursor: pointer;
    }
    .blog-title a:visited, .blog-title a:link {
        color: #4682BE;
        text-decoration: none;
    }
    .blog-menu {
        width: 300px;
        height: 100%;
        flex-shrink: 0;
        display: flex;
        box-shadow: 1px -50px 35px -12px;
    }
    .menu-bar {
        border: 0.5px solid grey;
        height: 100%;
        flex-shrink: 0;
        margin-left: 2px;
        cursor: col-resize;
    }
    .menu-body {
        overflow: scroll;
        width: 100%;
        height: calc(100% - 20px);
        padding: 0 10px 20px 10px;
    }
</style>