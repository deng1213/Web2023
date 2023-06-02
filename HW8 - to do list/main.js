$(function(){
    $("[type='checkbox']").on("change",updateProgress);
});

/**/ 
function updateProgress(){
    let hasChecked=0;


    for(let x=0;x<$("[type='checkbox']").length;x++){
        console.log("X:"+x);

        let checkbox = $("[type='checkbox']")[x];
        console.log("check"+checkbox);        
        let $span = $(checkbox).siblings("span");
        console.log("spav"+$span);

        if($("[type='checkbox']")[x].checked){
            console.log("now checked x:"+x);
            hasChecked+=1;
            $span.addClass("completed");
            
        }
        else{
            console.log("no checked x:"+x);
            $span.removeClass("completed");

        }
    }

    $("meter").attr("max", $("[type='checkbox']").length);
    $("meter").attr("value", hasChecked);
}