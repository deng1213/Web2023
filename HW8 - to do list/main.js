$(function(){
    $("[type='checkbox']").on("change",updateProgress);
});


function updateProgress(){
    let hasChecked=0;
    for(let x=0;x<$("[type='checkbox']").length;x++){
        if($("[type='checkbox']")[x].checked){
            hasChecked+=1;
            
            let str = $("span")[x].innerText;
            str.strike();
            //$("span")[x].attr("css", { color: "gray" });
            //$("span").attr("value");
            $("span").attr("text",`<strike> ${$("span")[x].innerText}</strike>`);
            
        }
    }
    // $("meter").attr("min",0);
    $("meter").attr("max", $("[type='checkbox']").length);
    $("meter").attr("value", hasChecked);
}