import '../main.html';
import './style.scss';
import * as $ from 'jquery';
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
    var progress = (document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight)) * 100 + '%';
    document.getElementById('progress').style.width = progress;
    if (document.documentElement.scrollTop > 0) {
        $('#top').css('display', 'block');
    } else {
        $('#top').css('display', 'none');
    }
}
window.onload = function () {
    $('#login').attr('href', UrlSet.GithubAuth);
    var SHOWDOEN = new showdown.Converter();
    if (sessionStorage.getItem('userName')) {
        $('#login').css('display', 'none');
        $('#header').append(`<span class="userInfo">欢迎&nbsp;&nbsp;<img style="width:20px;height: 20px;" src="${sessionStorage.getItem('userImg')}" /><span style='color: purple;'>${sessionStorage.getItem('userName')}</span></span>`);
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
                        sessionStorage.setItem('userName', res.name);
                        sessionStorage.setItem('userImg', res.avatar_url);
                        sessionStorage.setItem('userEmail', res.email);
                        $('#access_token').css('display', 'none');
                        $('#header').append(`<span class="userInfo">欢迎&nbsp;&nbsp;<img style="width:20px;height: 20px;" src="${res.avatar_url}" /><span style='color: purple;'>${res.name}</span></span>`);
                    });
                };
            });
        }
    }

    jqueryGet(UrlSet.BlogRepo, 'json').then(function (res) {
        var blogs = res.filter(function (item) {
            return item.type === "file";
        });
        jqueryGet(blogs[0].download_url, 'text').then(function (res) {
            document.getElementById('main').innerHTML = SHOWDOEN.makeHtml(res);
        });
        var list = document.getElementById('blogList');
        blogs.forEach(function (ele) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            li.appendChild(a);
            a.setAttribute('href', '#');
            a.setAttribute('data-url', ele.download_url);
            a.innerHTML = ele.name.split('.')[0];
            list.appendChild(li);
        });
        list.addEventListener('click', function (e) {
            var blogUrl = e.target.getAttribute('data-url');
            jqueryGet(blogUrl, 'text').then(function (res) {
                document.getElementById('main').innerHTML = SHOWDOEN.makeHtml(res);
            });
        }, false);
    });
}