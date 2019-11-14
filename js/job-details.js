$(document).ready(init);

function init() {
    var res = null;
    $.ajax({
        'type': 'GET',
        'url': 'https://api.myjson.com/bins/1f6qj1',
        'async': true,
        'success': function (res) {
            build(res[0], "pic", 'user-template-2');
            console.log(res);
        }
    });

    $.ajax({
        'type': 'GET',
        'url': 'https://api.myjson.com/bins/1d62sd',
        'async': true,
        'success': function (res) {
            build(res, "part1", 'user-template');
            build(res, "part2", 'user-template-2');
            console.log(res);
        }
    });

    function build(res, id, idHandelbars) {
        var source = document.getElementById(idHandelbars).innerHTML;
        var template = Handlebars.compile(source);
        var html = template(res);
        document.getElementById(id).innerHTML = html;
    }
};

