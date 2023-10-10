$(document).ready(function(){
    fetch('https://api.sheetson.com/v2/sheets/startups', {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer wkU1O06aFm4QkA8qmSHTaJHdN89it5j6oZwz5JGIqwfxO1VNj6oL7drUT-SnAg',
            'X-Sheetson-Spreadsheet-Id': '1eQ3Xj9I_b4_xCNS-B9dA-QgdgiWp12x_wC1G1gdknG4'
        }
    })
    .then(r => r.json())
    .then(data => {
        var template = Handlebars.compile($('#startup-template').html());
        $('#startups').html(template(data.results));
    })
    .catch(error => console.log(error));
});
