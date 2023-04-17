let topic =[
    
];

function updateTable(){
    $('#activity-input').val('');
        
    let topicCount = topic.length;
    let millisecsPerDay=24*60*60*1000;
  
    var table = document.getElementById('courseTable');
    table.innerHTML = '';
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th>");
  
    for(let x=0;x<topicCount;x++){
      $("#courseTable").append(
      "<tr>"+
      `<td>${x+1}</td>`+
      //`<td>${startDate.toLocaleDateString()+x*7}</td>`+
      `<td>${new Date(startDate.getTime()+x*millisecsPerDay*7).toLocaleDateString()}</td>`+
      `<td>${topic[x]}</td>`+
      "</tr>"
      );
  
  }
}

$(function(){

    $("#updateDate").click(function(){
    updateTable();
    });
    
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th>");
    
    $('#add-activity-btn').click(function() {
        // 取得使用者輸入的活動主題
        var activity = $('#activity-input').val();
        var minleng = 1;
        
        if(activity.length<minleng){
            alert("輸入不能為空喔")
            return;
        }else{
        
        // 新增活動項目到活動清單中
        topic.push(activity);
        
        updateTable();
        // // 清空輸入框
        // $('#activity-input').val('');
      
        // let topicCount = topic.length;
        // let millisecsPerDay=24*60*60*1000;

        // var table = document.getElementById('courseTable');
        // table.innerHTML = '';
        // $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th>");

        // for(let x=0;x<topicCount;x++){
        //     $("#courseTable").append(
        //     "<tr>"+
        //     `<td>${x+1}</td>`+
        //     //`<td>${startDate.toLocaleDateString()+x*7}</td>`+
        //     `<td>${new Date(startDate.getTime()+x*millisecsPerDay*7).toLocaleDateString()}</td>`+
        //     `<td>${topic[x]}</td>`+
        //     "</tr>"
        //     );

        // }
    }
        
    });

});
    