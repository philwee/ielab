$(document).ready(function(){
    fetch('https://api.sheetson.com/v2/sheets/startups', {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_SHEETSON_API_KEY}`,
            'X-Sheetson-Spreadsheet-Id': process.env.REACT_APP_SHEETSON_SPREADSHEET_ID }
    })
    .then(r => r.json())
    .then(data => {
        var template = Handlebars.compile($('#startup-template').html());
        $('#startups').html(template(data.results));
    })
    .catch(error => console.log(error));
});
