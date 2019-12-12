<template>
    <div class="login">
        <button><a :href="authorUrl">GitHub第三方登录</a></button>
        <div v-if="userInfo">
            <p>Already get user info</p>
        </div>
    </div>
</template>

<script>
    import { GetUserAuthorizeUrl, GetAccessTokenUrl, UserCredit } from './Constants'
    export default {
        name: 'Login',
        data: () => {
            return {
                authorUrl: GetUserAuthorizeUrl,
                userInfo: null
            }
        },
        methods: {
            getUserInfo: function () {
                const url = `${GetAccessTokenUrl + location.search}&redirect_uri=${location.href + UserCredit}`
                fetch(url, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                    }
                }).then(response => response.json()).then(user => {
                    this.userInfo = user
                    console.log(user)
                })
            }
        },
        created() {
            if (location.search) {
                this.getUserInfo()
            }
        }
    }
</script>

<style>
    .login {
        width: 100%;
        height: 150px;
    }
</style>