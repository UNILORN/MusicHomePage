function onYouTubeIframeAPIReady() {
        ytPlayer = new YT.Player(
            'player', // 埋め込む場所の指定
            {
                videoId: 'NseG5Waxktw', // YouTubeのID
                playerVars: {
                    rel:0,
                    loop: 1,//0:ループしない 1:ループする 1の場合playlist設定必須
                    playlist:'NseG5Waxktw',
                    controls: 0,//コントローラー無し
                    autoplay: 1,//オートプレイ
                    showinfo: 0,//動画タイトルなど表示しない
                    start:40
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            }
        );
    }
//プレイ準備完了後
      function onPlayerReady(event) {
        event.target.playVideo();
        event.target.mute();
      }

      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
          $('.loading').fadeOut(500);
          setTimeout(showvideo, 500);
        }
      }

      function showvideo(){
        $('.innerplayer').fadeIn(3000);
      }





  $('.nav_about').click(function(){
    var i = $(".nav_about").index(this)
    var p = $(".cont-about").eq(i).offset().top;
    $('html,body').animate({ scrollTop: p }, 'slow');
        return false;
  });

  $('.nav_music').click(function(){
    var i = $(".nav_music").index(this);
    var p = $(".cont-music").eq(i).offset().top;
    $('html,body').animate({ scrollTop: p }, 'slow');
        return false;
  });
