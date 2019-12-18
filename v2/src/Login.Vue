<template>
    <div class="login">
        <button @click="login">GitHub第三方登录</button>
    </div>
</template>

<script>
    import { notify } from './Constants';

    export default {
        name: 'Login',
        methods: {
            login: function () {
                notify('⚠️警告', '没有服务器，臣妾做不到啊')
            }
        }
    }
</script>

<style>
    .login {
        width: 100%;
        height: 50px;
    }
</style>