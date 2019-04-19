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


function IsPhone() {
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = false;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > -1) {
            flag = true;
            break;
        }
    }
    return flag;
}

function onAnimFrame(e) {
    menuElement.style.display = isOpen ? 'none' : 'block';
    let transformStyle = isOpen ? 'translateX(0px)' : 'translateX(220px)';
    mainElement.style.webkitTransform = transformStyle;
    mainElement.style.MozTransform = transformStyle;
    mainElement.style.msTransform = transformStyle;
    mainElement.style.transform = transformStyle;
    mainElement.style.transition = 'all 150ms ease-out';
    isOpen = !isOpen;
}

function getGesturePointFromEvent(evt) {
    let point = {};
    point.x = evt.targetTouches[0].clientX;
    point.y = evt.targetTouches[0].clientY;
    return point;
}

let touchCount = 0;
let isOpen = false;
let timeout;
let menuElement;
let mainElement;
function addTouch() {
    const handleGestureStart = function (evt) {
        if (evt.touches && evt.touches.length > 1) {
            return;
        }

        mainElement.style.transition = 'initial';
    }
    // Handle end gestures
    const handleGestureEnd = function (evt) {
        if (evt.touches && evt.touches.length > 0) {
            return;
        }
        touchCount++;
        if (timeout) {
            clearTimeout(timeout);
            timeout = 0;
        }
        timeout = setTimeout(() => {
            touchCount = 0;
        }, 300);
        if (touchCount > 1) {
            window.requestAnimationFrame(onAnimFrame);
        }
    }

    const handleGestureMove = function (evt) {
    }

    document.addEventListener('touchstart', handleGestureStart, true);
    document.addEventListener('touchmove', handleGestureMove, true);
    document.addEventListener('touchend', handleGestureEnd, true);
    document.addEventListener('touchcancel', handleGestureEnd, true);

}

function setDefault() {
    $('#header').text('Tim的三味屋');
    let girl = $('<img class="poem" src="/img/girl.jpeg"></div>');
    $('#content').append(girl);
    $('#loading').css('display', 'none');
}

function registerSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../my-sw.js').then(function (reg) {
            console.log('Service Worker registered', reg);
        }).catch(function (error) {
            console.error('Error registering  Service  Worker', error);
        });
        navigator.serviceWorker.addEventListener('message', res => {
            if (window.Notification) {
                Notification.requestPermission();
                new Notification("Hi Dear", {
                    body: res.data,
                    icon: '/img/app-192.png'
                });
            }
        });
    }
}

window.onload = function () {
    mainElement = document.getElementById('main');
    menuElement = document.getElementById('menu');
    registerSW();
    if (IsPhone()) {
        menuElement.style.display = 'none';
        addTouch();
    }
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

    $('#info').on('click', () => {
        if (window.Notification) {
            Notification.requestPermission();
            new Notification("Hi Dear", {
                body: '欢迎来到Tim的三味屋',
                icon: '/img/app-192.png'
            });
        }
    });

    $('#forkMe').on('click', () => {
        window.open('https://github.com/toBeUrself/toBeUrself.github.io');
    });

    function createTreeBlogs(blogs, list) {
        blogs.forEach(blog => {
            const name = blog.name.split('.')[0];
            if (blog.type === 'file') {
                list.append(`<li class="file-li"><a class="menu-link" href='#' title="${name}" data-url='${blog.download_url}'>${name}</a></li>`);
            } else {
                const ul = $('<ul class="nested menu-list"></ul>');
                const li = $(`<li class="menu-item dir"><span class="span-dir caret" title="${blog.name}">${blog.name}</span></li>`);
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
            touchCount = 0;
            $('#loading').css('display', 'block');
            $('#toTop')[0].click();
            if (IsPhone()) window.requestAnimationFrame(onAnimFrame);
            jqueryGet(blogUrl + '?' + UrlSet.GithubInfo + UrlSet.More, 'text').then(res => {
                document.getElementById('header').innerHTML = e.target.innerText;
                document.getElementById('content').innerHTML = marked.parse(res);
                $('#loading').css('display', 'none');
            });
        });
        $('.dir').on('click', e => {
            touchCount = 0;
            e.target.classList.toggle('caret-down');
            e.target.parentElement.lastChild.classList.toggle("active");
        });
    });
}
