$(function(){
    $("#read").on("click",readHandler);
    $("#write").on("click",writeHandler);
    $("#update").on("click",updateHandler);
    $("#delete").on("click",deleteHandler);

});

function readHandler(){
    let url="http://localhost:3000/to-do";
    $.getJSON(url)
    .done(function(msg){
        console.log(msg);
    })
    
    .fail(function(msg){
        console.log("Fail!");
    });

}

function updateHandler(){
    let url="http://localhost:3000/to-do/1";
    
    $.ajax({
        url:url,
        type:'PUT',
        data:'task=buy bread',
        success:function(data){
            console.log(data);
        }
    });

}

function writeHandler(){
    let url="http://localhost:3000/to-do/";
    
    $.post(url,{task:"loundry"})
    
    .done(function(msg) {
        console.log(msg);
    })
    
    .fail(function(msg) {
        console.log("Fail!");
    });
    
}

function deleteHandler(){
    let url="http://localhost:3000/to-do/2";
    
    $.ajax({
        url: url,
        type: 'DELETE',
        success: function(data) {
            console.log(data);
        }
    });
    
}