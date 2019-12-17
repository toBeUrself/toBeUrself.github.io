<template>
	<div id="app">
		<blog-menu></blog-menu>
        <blog-body></blog-body>
        <blog-block></blog-block>
	</div>
</template>

<script>
    import BlogMenu from './BlogMenu.vue'
    import BlogBody from './BlogBody.vue'
    import BlogBlock from './BlogBlock.vue'

    export default {
        name: 'App',
        components: {
            BlogMenu,
            BlogBody,
            BlogBlock,
        }
    }
</script>

<style>
    ::selection {
        color: gold;
        background-color: purple;
    }
    html, body, #app {
        height: 100%;
        width: 100%;
        background: #333;
        font-size: 0.8rem;
        font-family: Verdana, Arial;
        color: rgba(255, 255, 255, 0.7);
    }
    #app {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
    }
</style>