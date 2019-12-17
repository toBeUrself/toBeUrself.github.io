import Vue from 'vue'
import * as markedjs from 'marked'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'

export const DefaultPage = 'https://raw.githubusercontent.com/toBeUrself/blogs/master/README.md'
export const GetBlogsList = 'https://api.github.com/repos/toBeUrself/blogs/contents?ref=master'
export const GithubAuth = 'https://github.com/login/oauth/authorize?client_id=35f234d9b37bdaaa11dd'
export const GithubAccess = 'https://github.com/login/oauth/access_token?client_id=35f234d9b37bdaaa11dd&client_secret=af87943040e72403431ebca2a3335411d0fee9fa&code='
export const GithubUserInfo = 'https://api.github.com/user?'

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

export const notify = function(title, body) {
    const options = {}
    options.body = body
    options.icon = 'https://raw.githubusercontent.com/toBeUrself/toBeUrself.github.io/master/img/app-48.png'
    // 先检查浏览器是否支持
    if (!window.Notification) {
      console.log('浏览器不支持通知');
    } else {
      // 检查用户曾经是否同意接受通知
      if (Notification.permission === 'granted') {
        new Notification(title, options); // 显示通知
      } else if (Notification.permission === 'default') {
        // 用户还未选择，可以询问用户是否同意发送通知
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            console.log('用户同意授权');
            new Notification(title, options); // 显示通知
          } else if (permission === 'default') {
            console.warn('用户关闭授权 未刷新页面之前 可以再次请求授权');
          } else {
            // denied
            console.log('用户拒绝授权 不能显示通知');
          }
        });
      } else {
        // denied 用户拒绝
        console.log('用户曾经拒绝显示通知');
      }
    }
}
