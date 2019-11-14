$(document).ready(init);

function init() {
    $.ajax({
        'type': 'GET',
        'url': 'https://api.myjson.com/bins/137x9p',
        'async': true,
        'success': function (res) {
            build(res, "board", 'user-template-1');
            build(res, "header", 'user-template-2');
            console.log(res);
        }
    });

    function build(res, id, idHandelbars) {
        var source = document.getElementById(idHandelbars).innerHTML;
        var template = Handlebars.compile(source);
        var html = template(res);
        document.getElementById(id).innerHTML = html;
    }

    $.ajax({
        'type': 'GET',
        'url': 'https://api.myjson.com/bins/1d62sd',
        'async': true,
        'success': function (res) {
            for (var i = 0; i < 5; i++) { 
            build(res.similar[i], "row-" + i, 'user-template-3');
            }
            console.log(res);
            console.log(res.similar[1]);
        }
    });
};