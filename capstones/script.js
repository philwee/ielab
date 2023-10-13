

$(document).ready(function(){
    fetch('https://api.sheetson.com/v2/sheets/startups', {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer wkU1O06aFm4QkA8qmSHTaJHdN89it5j6oZwz5JGIqwfxO1VNj6oL7drUT-SnAg',
            'X-Sheetson-Spreadsheet-Id': '1cZqVL9C0Z1PvT7Gb-AX0pPoKmulnR6fUyJbdVyuy2Rw'
        }
    })
    .then(r => r.json())
    .then(data => {
        var template = Handlebars.compile($('#startup-template').html());
        $('#startups').html(template(data.results));
    })
    .catch(error => console.log(error));
});
