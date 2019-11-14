$(document).ready(init);

function init() {
    var res = null;
    $.ajax({
        'type': 'GET',
        'url': 'https://api.myjson.com/bins/b6eod',
        'async': true,
        'success': function (res) {
            console.log(res.jobs);
            $('#myTable').DataTable({
                data: res.jobs,
                columns: [
                    {
                        data: "img",
                        "render": function (data, type, row) {
                            return '<img src="' + data + '" />';
                        }
                    },
                    { data: "company" },
                    { data: "loc" },
                    { data: "salary" },
                    { data: "title" },
                    { data: "type" },
                    { data: "posted" },
                ]
            });
        }
    });

}



