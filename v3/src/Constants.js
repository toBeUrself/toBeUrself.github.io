import Vue from 'vue'
import * as markedjs from 'marked'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'

export const GetBlogsList = 'https://api.github.com/repos/toBeUrself/blogs/contents?ref=master'
export const GithubAuth = 'https://github.com/login/oauth/authorize?client_id=35f234d9b37bdaaa11dd'
export const GithubAccess = 'https://github.com/login/oauth/access_token?client_id=35f234d9b37bdaaa11dd&client_secret=af87943040e72403431ebca2a3335411d0fee9fa&code='
export const GithubUserInfo = 'https://api.github.com/user?'

const clientId = '174fe3c6c8b2ca9dce39'
const clientSecret = '759adf23b496b74d21f171c477c4c0c0b68e586a'

export const GetUserAuthorizeUrl = 'https://github.com/login/oauth/authorize?client_id=174fe3c6c8b2ca9dce39&redirect_uri=https://tobeurself.github.io/v2/'
export const GetAccessTokenUrl = 'https://github.com/login/oauth/access_token'
export const UserCredit = '&client_id=174fe3c6c8b2ca9dce39&client_secret=759adf23b496b74d21f171c477c4c0c0b68e586a'

hljs.registerLanguage('javascript', javascript);
markedjs.setOptions({
    renderer: new markedjs.Renderer(),
    highlight: function(code) {
        return hljs.highlightAuto(code).value;
    },
    gfm: true,
    xhtml: false,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    langPrefix: 'hljs language-',
});

export const marked = markedjs

export const busSvc = new Vue()