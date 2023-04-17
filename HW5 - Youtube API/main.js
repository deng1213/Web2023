let player;
let currentplay = 0;

function onYouTubeIframeAPIReady(){
    console.log("hi, I'm ready.");
    player = new YT.Player("player",{
        height:"390",
        width:"640",
        videoId:playList[currentplay],
        playerVars:{
            autoplay:0,
            controls:0,
            start:playTime[currentplay][0],
            end:playTime[currentplay][1],
            iv_load_policy:3
        },
        events:{
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    });
}

function onPlayerReady(event){
    $("#playButton").on("click",function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

function onPlayerStateChange(event){
    if(Math.floor(player.getCurrentTime())==playTime[currentplay][1]){
        if(currentplay<playList.length-1){
            console.log("now play num:"+currentplay)
            currentplay++;
            player.loadVideoById({
                videoId:playList[currentplay],
                startSeconds:playTime[currentplay][0],
                endSeconds:playTime[currentplay][1],
                suggestedQuality:"large"
            });
        }else{
            currentplay = 0;
            player.cueVideoById({
                videoId:playList[currentplay],
                startSeconds:playTime[currentplay][0],
                endSeconds:playTime[currentplay][1],
                suggestedQuality:"large"
            });
            //$("h2").text();
        }
    }
    if(event.data == 1){
        $("h2").text(player.getVideoData().title);
         
    }


}
