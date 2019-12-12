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
    html, body, #app {
        height: 100%;
        width: 100%;
        font-size: 0.8rem;
        font-family: Verdana, Arial;
    }
    #app {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
    }
</style>