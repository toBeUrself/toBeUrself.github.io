import '../main.html';
import './style.scss';
import { UrlSet } from './Url_Set';
import * as marked from 'marked';

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

// window.toTop = function () {
//     document.documentElement.scrollTop = 0;
// }

window.onscroll = function () {
    const progress = (document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight)) * 100 + '%';
    document.getElementById('progress').style.width = progress;
    // if (document.documentElement.scrollTop > 0) {
    //     $('#top').css('display', 'block');
    // } else {
    //     $('#top').css('display', 'none');
    // }
}


let word = 0;
function setDefault() {
    $('#header').text('把酒问月');
    const content = `
        青天有月来几时，我今停杯一问之
        人攀明月不可得，月行却与人相随
        皎如飞镜临丹阙，绿烟灭尽清辉发
        但见宵从海上来，宁知晓向云间没
        白兔捣药秋复春，嫦娥孤栖与谁邻
        今人不见古时月，今月曾经照古人
        古人今人若流水，共看明月皆如此
        唯愿当歌对酒时，月光长照金樽里
    `.replace(/[\r\n]/g, "").replace(/\ +/g, "").trim().split('');
    let div = $('<div class="poem"></div>');
    $('#content').append(div);
    const setWord = () => {
        setTimeout(() => {
            if (word >= content.length) {
                return;
            }
            div.text(div.text() + content[word]);
            word++;
            if (word != 0 && word % 15 === 0 && word !== content.length) {
                div = $('<div class="poem"></div>');
                $('#content').append(div);
            }
            setWord();
        }, 200);
    }
    setWord();
}
window.onload = function () {
    setDefault();

    $('#home').click(() => {
        word = 0;
        $('#content').children().remove();
        setDefault();
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
    // $('#login').attr('href', UrlSet.GithubAuth);
    // if (localStorage.getItem('userName')) {
    //     $('#login').css('display', 'none');
    //     $('#header').append(`<span class="userInfo">欢迎&nbsp;&nbsp;<img style="width:20px;height: 20px;" src="${localStorage.getItem('userImg')}" /><span style='color: purple;'>${localStorage.getItem('userName')}</span></span>`);
    // } else {
    //     let code = '';
    //     const href = window.location.href.split('?')[1];
    //     if (href) {
    //         code = href.split('=')[1]
    //     }
    //     if (code) {
    //         const accessUrl = UrlSet.GithubAccess + code;
    //         $('body').append(`<a id="access" href='${accessUrl}'><span id="getAccess"></span></a>`);
    //         $('#getAccess').click();
    //         $('body').remove('#access');
    //         $('#login').css('display', 'none');
    //         $('#header').append('<input class="userInfo" id="access_token" type="file" />');
    //         $('#access_token').on('change', function (e) {
    //             const fileReader = new FileReader();
    //             fileReader.readAsText(e.target.files[0], 'utf-8');
    //             fileReader.onload = function (token) {
    //                 jqueryGet(UrlSet.GithubUserInfo + token.target.result).then(function (res) {
    //                     localStorage.setItem('userName', res.name);
    //                     localStorage.setItem('userImg', res.avatar_url);
    //                     localStorage.setItem('userEmail', res.email);
    //                     $('#access_token').css('display', 'none');
    //                     $('#header').append(`<span class="userInfo">欢迎&nbsp;&nbsp;<img style="width:20px;height: 20px;" src="${res.avatar_url}" /><span style='color: purple;'>${res.name}</span></span>`);
    //                 });
    //             };
    //         });
    //     }
    // }

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
            if ($('#menuLink').css('display') === 'block') {
                toggleAll(e);
            }
            jqueryGet(blogUrl + '?' + UrlSet.GithubInfo + UrlSet.More, 'text').then(res => {
                word = 999;
                document.getElementById('header').innerHTML = e.target.innerText;
                document.getElementById('content').innerHTML = marked.parse(res);
            });
        });
        $('.dir').on('click', e => {
            e.target.classList.toggle('caret-down');
            e.target.parentElement.lastChild.classList.toggle("active");
        });
    });
}