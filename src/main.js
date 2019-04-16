import '../main.html';
import './style.scss';
import { UrlSet } from './Url_Set';
import * as marked from 'marked';
import 'highlight.js/styles/github.css';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

function jqueryGet(url, type) {
    return new Promise(function (resolve) {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: type || 'json',
            success: function (res) {
                resolve(res);
            }
        })
    });
}

window.onscroll = function () {
    const progress = (document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight)) * 100 + '%';
    document.getElementById('progress').style.width = progress;
}


let word = 0;
function setDefault() {
    $('#header').text('Tim的三味屋');
    let girl = $('<img class="poem" src="img/girl.jpeg"></div>');
    $('#content').append(girl);
    $('#loading').css('display', 'none');
}

function registerSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/my-sw.js').then(function (reg) {
            console.log('Service Worker registered', reg);
        }).catch(function (error) {
            console.error('Error registering  Service  Worker', error);
        });
        navigator.serviceWorker.addEventListener('message', res => {
            if (window.Notification) {
                Notification.requestPermission();
                new Notification("Hi Dear", {
                    body: res.data,
                    icon: '/img/app.png'
                });
            }
        });
    }
}

window.onload = function () {
    registerSW();
    $('#loading').css('display', 'block');
    hljs.registerLanguage('javascript', javascript);
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
    });
    setDefault();

    $('#home').click((e) => {
        word = 0;
        if ($('#menuLink').css('display') === 'block') {
            toggleAll(e);
        }
        $('#content').children().remove();
        $('#loading').css('display', 'block');
        setDefault();
    });

    $('#info').on('click', () => {
        if (window.Notification) {
            Notification.requestPermission();
            new Notification("Hi Dear", {
                body: '欢迎来到Tim的三味屋',
                icon: '/img/app.png'
            });
        }
    });

    $('#snow').on('click', () => {
        const snow = $('.snow-container');
        const display = snow.css('display');
        snow.css('display', display === 'block' ? 'none' : 'block');
    });

    $('#forkMe').on('click', () => {
        window.open('https://github.com/toBeUrself/toBeUrself.github.io');
    });

    const layout = document.getElementById('layout');
    const menu = document.getElementById('menu');
    const menuLink = document.getElementById('menuLink');
    const content = document.getElementById('main');

    function toggleClass(element, className) {
        const classes = element.className.split(/\s+/);
        let length = classes.length;
        let i = 0;

        for (; i < length; i++) {
            if (classes[i] === className) {
                classes.splice(i, 1);
                break;
            }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e) {
        const active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

    menuLink.onclick = function (e) {
        toggleAll(e);
    };

    content.onclick = function (e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };

    function createTreeBlogs(blogs, list) {
        blogs.forEach(blog => {
            const name = blog.name.split('.')[0];
            if (blog.type === 'file') {
                list.append(`<li class="pure-menu-item"><a class="pure-menu-link" href='#' title="${name}" data-url='${blog.download_url}'>${name}</a></li>`);
            } else {
                const ul = $('<ul class="nested pure-menu-list"></ul>');
                const li = $(`<li class="pure-menu-item dir"><span class="span-dir caret" title="${blog.name}">${blog.name}</span></li>`);
                li.append(ul);
                list.prepend(li);
                jqueryGet(blog.url + '&' + UrlSet.GithubInfo + UrlSet.More).then(res => {
                    createTreeBlogs(res, ul);
                });
            }
        });
    }

    jqueryGet(UrlSet.BlogRepo + '?' + UrlSet.GithubInfo + UrlSet.More).then(blogs => {
        const list = $('#blogList');
        createTreeBlogs(blogs, list);
        list.on('click', e => {
            const blogUrl = e.target.getAttribute('data-url');
            if (!blogUrl) return;
            $('#loading').css('display', 'block');
            if ($('#menuLink').css('display') === 'block') {
                toggleAll(e);
            }
            jqueryGet(blogUrl + '?' + UrlSet.GithubInfo + UrlSet.More, 'text').then(res => {
                word = 999;
                document.getElementById('header').innerHTML = e.target.innerText;
                document.getElementById('content').innerHTML = marked.parse(res);
                $('#loading').css('display', 'none');
            });
        });
        $('.dir').on('click', e => {
            e.target.classList.toggle('caret-down');
            e.target.parentElement.lastChild.classList.toggle("active");
        });
    });
}
