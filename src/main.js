import '../main.html';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import * as $ from 'jquery';
import * as Popper from 'popper.js';
import { UrlSet } from './Url_Set';
import { debug } from 'util';

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

window.toTop = function () {
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    const progress = (document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight)) * 100 + '%';
    document.getElementById('progress').style.width = progress;
    if (document.documentElement.scrollTop > 0) {
        $('#top').css('display', 'block');
    } else {
        $('#top').css('display', 'none');
    }
}

window.onload = function () {
    $('#login').attr('href', UrlSet.GithubAuth);
    const SHOWDOEN = new showdown.Converter();
    if (localStorage.getItem('userName')) {
        $('#login').css('display', 'none');
        $('#header').append(`<span class="userInfo">欢迎&nbsp;&nbsp;<img style="width:20px;height: 20px;" src="${localStorage.getItem('userImg')}" /><span style='color: purple;'>${localStorage.getItem('userName')}</span></span>`);
    } else {
        let code = '';
        const href = window.location.href.split('?')[1];
        if (href) {
            code = href.split('=')[1]
        }
        if (code) {
            const accessUrl = UrlSet.GithubAccess + code;
            $('body').append(`<a id="access" href='${accessUrl}'><span id="getAccess"></span></a>`);
            $('#getAccess').click();
            $('body').remove('#access');
            $('#login').css('display', 'none');
            $('#header').append('<input class="userInfo" id="access_token" type="file" />');
            $('#access_token').on('change', function (e) {
                const fileReader = new FileReader();
                fileReader.readAsText(e.target.files[0], 'utf-8');
                fileReader.onload = function (token) {
                    jqueryGet(UrlSet.GithubUserInfo + token.target.result).then(function (res) {
                        localStorage.setItem('userName', res.name);
                        localStorage.setItem('userImg', res.avatar_url);
                        localStorage.setItem('userEmail', res.email);
                        $('#access_token').css('display', 'none');
                        $('#header').append(`<span class="userInfo">欢迎&nbsp;&nbsp;<img style="width:20px;height: 20px;" src="${res.avatar_url}" /><span style='color: purple;'>${res.name}</span></span>`);
                    });
                };
            });
        }
    }

    function createTreeBlogs(blogs, list) {
        blogs.forEach(blog => {
            if (blog.type === 'file') {
                list.append(`<li><a href='#' data-url='${blog.download_url}'>${blog.name}</a></li>`);
            } else {
                const ul = $('<ul class="nested"></ul>');
                const li = $(`<li><span class="caret">${blog.name}</span></li>`);
                li.append(ul);
                list.append(li);
                jqueryGet(blog.url + '&' + UrlSet.GithubInfo).then(res => {
                    createTreeBlogs(res, ul);
                });
            }
        });
    }

    jqueryGet(UrlSet.Default + '?' + UrlSet.GithubInfo, 'text').then(page => {
        document.getElementById('main').innerHTML = SHOWDOEN.makeHtml(page);
    });

    jqueryGet(UrlSet.BlogRepo + '?' + UrlSet.GithubInfo).then(blogs => {
        const list = $('#blogList');
        createTreeBlogs(blogs, list);
        list.on('click', e => {
            const blogUrl = e.target.getAttribute('data-url');
            if (!blogUrl) return;
            jqueryGet(blogUrl + '?' + UrlSet.GithubInfo, 'text').then(res => {
                document.getElementById('main').innerHTML = SHOWDOEN.makeHtml(res);
            });
        });
        $('.caret').on('click', e => {
            e.target.classList.toggle('caret-down');
            e.target.parentElement.lastChild.classList.toggle("active")
        });
    });
}