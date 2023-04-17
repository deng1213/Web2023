$(function(){
    
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th>");
    let topicCount = topic.length;

    let millisecsPerDay=24*60*60*1000;
    for(let x=0;x<topicCount;x++){
        $("#courseTable").append(
            "<tr>"+
            `<td>${x+1}</td>`+
            //`<td>${starDate.toLocaleDateString()+x*7}</td>`+
            `<td>${new Date(starDate.getTime()+x*millisecsPerDay*7).toLocaleDateString()}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>"
        );

    }
    console.log("hi");
    
});
    