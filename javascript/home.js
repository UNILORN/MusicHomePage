function onYouTubeIframeAPIReady() {
        ytPlayer = new YT.Player(
            'player', // 埋め込む場所の指定
            {
                videoId: 'NseG5Waxktw', // YouTubeのID
                playerVars: {
                    loop: 1,//0:ループしない 1:ループする 1の場合playlist設定必須
                    controls: 0,//コントローラー無し
                    autoplay: 1,//オートプレイ
                    showinfo: 0,//動画タイトルなど表示しない
                    start:40
                },
                events: {
                    'onReady': onPlayerReady
                }
            }
        );
    }
//プレイ準備完了後
      function onPlayerReady(event) {
        event.target.playVideo();
        event.target.mute();
      }


$(function() {
  $(window).scroll(function(){
    var y = $(this).scrollTop();
    $('.innerplayer').css('top', '0 ' + parseInt( -y / 40 ) + 'px');

  });
});