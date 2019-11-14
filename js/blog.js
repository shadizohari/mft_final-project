$(document).ready(init);

var isInit = true;

function build(res, id) {
    var source = document.getElementById('user-template').innerHTML;
    var template = Handlebars.compile(source);
    var html = template(res);
    document.getElementById(id).innerHTML = html;
}

function navigateTop() {
    window.scrollTo(0, document.getElementById('blogs-container').offsetTop)
}

function requestInfo(start) {
    $.ajax({
        'type': 'GET',
        'url': 'https://api.myjson.com/bins/1f6qj1',
        'async': true,
        'success': function (res) {
            for (var i = start; i < start + Math.min(6, res.length - start); i++) {
                build(res[i], 'part-' + i);
            }
            console.log(res);
            if (!isInit) {
                navigateTop();
            }
            isInit = false;
        }
    });
}

function plusPage() {
    $('.part').empty();
    var p = Number($('.active-1').html());
    if (p < 4) {
        requestInfo(6 * p);
        $('.dot').removeClass("active-1");
        $('.dot')[p].classList.add("active-1");
        console.log(6 * p);
    } else {
        requestInfo(6 * (p - 1));
    }
}

function backPage() {
    $('.part').empty();
    var p = Number($('.active-1').html());
    if (p > 1) {
        requestInfo(6 * (p - 2));
        $('.dot').removeClass("active-1");
        $('.dot')[p - 2].classList.add("active-1");
        console.log(6 * p);
    } else {
        requestInfo(6 * (p - 1));
    }
}

function init() {
    requestInfo(0);
    $('.dot').click(function (event) {
        $('.part').empty();
        $('.dot').removeClass("active-1");
        event.target.classList.add("active-1");
        var p = Number(event.target.innerHTML);
        requestInfo(6 * (p - 1));
    });
};
