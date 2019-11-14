$(document).ready(init);

function init(){
    var res = null;
    $.ajax({
        'type': 'GET',
        'url': 'https://api.myjson.com/bins/et5gt',
        'async': true,
        'success': function(res){
            build(res[0], 'team1');
            build(res[1], 'team2');
            console.log(res[0]);
        }
    });

    function build(res, id) {
        var source = document.getElementById('user-template').innerHTML;
        var template = Handlebars.compile(source);
        var html = template(res);
        document.getElementById(id).innerHTML = html;
    }
};