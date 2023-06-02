let thisButton = document.getElementsByTagName("button")[0];
let showData = document.getElementById("showData");

thisButton.addEventListener("click",loadServerData);

function loadServerData(){
    console.log("Load Server Data!");
    let xmlHttpRequest;
    if(window.XMLHttpRequest){
        xmlHttpRequest = new XMLHttpRequest();
        console.log(`readystate init:"${xmlHttpRequest.readyState}`);
    }else{ 
        alert("No XMLHttpRequest!");
        return;
    }
    
    xmlHttpRequest.open("GET","DataFromServer.txt",true);
    console.log(`readystate send before:"${xmlHttpRequest.readyState}`);
    xmlHttpRequest.send();
    xmlHttpRequest.onreadystatechange = function(){
        console.log(`readystate after:"${xmlHttpRequest.readyState}`);
        console.log(`readystatus:"${xmlHttpRequest.status}`);

        //state==4:request&response     status==200:ok
        if( xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            showData.innerHTML = xmlHttpRequest.responseText;
            thisButton.style.visibility = "hidden";
        }
    }


}