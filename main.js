function ajaxGet(url, type) {
    return new Promise(function (resolve) {
        var xmlhttp = null;
        if (window.XMLHttpRequest) {           // code for all new browsers
            xmlhttp = new XMLHttpRequest();
        } else if (window.ActiveXObject) {     // code for IE5 and IE6
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (xmlhttp != null) {
            xmlhttp.open('GET', url, true);
            xmlhttp.responseType = type || 'json';
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
                    resolve(xmlhttp.response);
                }
            };
            xmlhttp.send();
        }
    });
}

function toTop() {
    document.documentElement.scrollTop = 0;
}

function onscroll() {
    var progress = (document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight)) * 100 + '%';
    document.getElementById('progress').style.width = progress;
}
function onload() {
    var SHOWDOEN = new showdown.Converter();
    var REPO_URL = 'https://api.github.com/repos/toBeUrself/blogs/contents';

    ajaxGet(REPO_URL, 'json').then(function (res) {
        var blogs = res.filter(function (item) {
            return item.type === "file";
        });
        ajaxGet(blogs[0].download_url, 'text').then(function (res) {
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
            ajaxGet(blogUrl, 'text').then(function (res) {
                document.getElementById('main').innerHTML = SHOWDOEN.makeHtml(res);
            });
        }, false);
    });
}