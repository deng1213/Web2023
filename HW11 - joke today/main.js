let datas=[
    "20230509",
    "20230510",
    "20230520",
    "20230529"
];

let thisButton = document.getElementsByTagName("button")[0];
let showData = document.getElementById("showData");

thisButton.addEventListener("click",loadServerData);

function loadServerData(){
    console.log("Load Server Data!");
    let xmlHttpRequest;
    let past=-1;

    var numberOflistitem = datas.length;
        
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

    if(window.XMLHttpRequest){
        xmlHttpRequest = new XMLHttpRequest();
        //console.log(`readystate init:"${xmlHttpRequest.readyState}`);
    }else{ 
        alert("No XMLHttpRequest!");
        return;
    }

    console.log("number:"+randomChildnumber);
    let name = datas[randomChildnumber];
    name += ".txt";

    console.log("name:"+name);

    xmlHttpRequest.open("GET",name,true);
    //console.log(`readystate send before:"${xmlHttpRequest.readyState}`);
    xmlHttpRequest.send();
    xmlHttpRequest.onreadystatechange = function(){
        //console.log(`readystate after:"${xmlHttpRequest.readyState}`);
        //console.log(`readystatus:"${xmlHttpRequest.status}`);

        //state==4:request&response     status==200:ok
        if( xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            showData.innerHTML = xmlHttpRequest.responseText;
            //thisButton.style.visibility = "hidden";
        }
    }


}