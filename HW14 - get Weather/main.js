let cityData=[
    {name:"",lat:"",lon:""},
    {name:"台北",lat:25.0856513,lon:121.421409},
    {name:"台中",lat:24.1852333,lon:120.4946381},
    {name:"高雄",lat:22.7000444,lon:120.0508691},
    {name:"元智",lat:24.9703173,lon:121.2608673},
];

$(function(){
    console.log("dd");
    console.log("len:"+cityData.length);
    for(let x=0;x<cityData.length;x++){
        console.log("x:"+x);
        $("#citySelect").append(
            `<option value='${x}'>${cityData[x].name}</option>`
        );
    }
    $("#citySelect").on("change",loadServerData);
    console.log("out");
});

function loadServerData(){
    $("#result").empty();
    if(this.value == 0) return;
    
    let weatherAPI_URL="https://api.openweathermap.org/data/2.5/weather?";
    let weatherMapAPIKey="e6d2e3aeb8507676dcd4a1106a8d9cfa";
    $.getJSON(weatherAPI_URL,{
        lat:cityData[this.value].lat,
        lon:cityData[this.value].lon,
        appid:weatherMapAPIKey,
        units:'metric',lang:'zh_tw'
    })
    .done(function(data) {
        $("#result").append(
            `<p>氣溫: ${data.main.temp_min}~ ${data.main.temp_max}</p>`);
        $("#result").append(
            `<p><imgsrc='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>${data.weather[0].description}</p>`);
        })

    .fail(function(){
        console.log("Error");
    })
    
    .always(function(){
        console.log("Always");
    })
;}