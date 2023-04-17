let imageURL_Array=[
    "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
    "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
    "https://pic03.eapple.com.tw/siangnong/xn_i_img02.png",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/372073/60ad2eda9638fa38.jpg",
    "https://cc.tvbs.com.tw/img/program/upload/2022/05/11/20220511154419-cddec899.jpg"

];

$(function(){
    let past=-1;
    //console.log("ini:"+past);
        $("input").on("click",function(){
        var numberOflistitem = $("li").length;
        
        // Math.random() : the number between 0~1
        // *3  -> the number between 0~3
        var randomChildnumber = Math.floor(Math.random()*numberOflistitem);
        
        if(past== -1)
            past =randomChildnumber;
        else{
            while(past==randomChildnumber){
                randomChildnumber = Math.floor(Math.random()*numberOflistitem);
            }
            past=randomChildnumber;
        }           
        //console.log(randomChildnumber);
        $("h1").text("來點"+$("li").eq(randomChildnumber).text()+"吧!");
        $("img").attr("src",imageURL_Array[randomChildnumber]);//change picture
        $("img").attr("width",200);
        $("img").attr("height",130);
    
    });


});