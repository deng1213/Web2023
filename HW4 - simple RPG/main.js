function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
}

//   map    ,canvas, imagex&imagey
let mapArray,ctx,currentImgMain;

//all images
let imgMountain, imgMain, imgEnemy;
const gridLength =200;

//initial
$(function(){
    //0: available 1:Mountain 2:Fianl goal 3:Enemy
    mapArray=[
        [0,1,1],
        [0,0,0],
        [3,1,2]
    ];

    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src="images/spriteSheet.png";
    currentImgMain={
        "x":0,
        "y":0
    };
    imgMain.onload = function(){
        //ctx.drawImage(imgMain,360,0,80,130,200,0,gridLength,gridLength*3);
        ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
        
    };

    // imgMountain=new Image();
    // imgMountain.src="images/material.png";
    // imgEnemy=new Image();
    // imgEnemy.src="images/Enemy.png";

    // imgMountain.onload=function(){
    //     imgEnemy.onload=function(){
    //         for(var x in mapArray){
    //             for(var y in mapArray[x]){
    //                 if(mapArray[x][y]==1){
    //                     ctx.drawImage(imgMountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
    //                 }else if(mapArray[x][y]== 3){
    //                     ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
    //                 }
    //             }
    //         }
    //     }
    // }

    var sources = {
        mountain: "images/material.png",
        enemy:"images/Enemy.png"
    };

    loadImages(sources,function(images){
        for(var x in mapArray){
            for(var y in mapArray[x]){
                if(mapArray[x][y]==1){
                    ctx.drawImage(images.mountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                }else if(mapArray[x][y]== 3){
                    ctx.drawImage(images.enemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                }
            }
        }
    });

});


//Click Event
$(document).on("keydown", function(event){
    console.log(event.code);
    let targetImg, targetBlock, cutImagePositionX;
    targetImg = {
        x:-1,
        y:-1
    };
    targetBlock = {
        x:-1,
        y:-1
    };
    event.preventDefault();
    switch(event.code){
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }

    if(targetImg.x <= 400 && targetImg.x >=0 && targetImg.y <= 400 && targetImg.y >=0){
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x / gridLength;
    }else{
        targetBlock.x = -1;
        targetBlock.y = -1;
    }

    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);

    if(targetBlock.x != -1 && targetBlock.y != -1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0:
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1:
                $("#talkBox").text("小心，有山");
                break;
            case 2: // Final Stop
                $("#talkBox").text("抵達終點");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 3: //Enemy
                $("#talkBox").text("哈囉");
                break;
        }
    }else{
        $("#talkBox").text("是邊界啦，別出去了");
    }

    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);

});

