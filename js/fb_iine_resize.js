$(function(){  $('body').prepend('<span id="like" style="display:none">いいね！</span>');
  // iframeの中と同じフォント設定
  $('#like').css('font-size','11px');
  $('#like').css('font-family','"lucida grande",tahoma,verdana,arial,"Hiragino Kaku Gothic Pro",Meiryo,"MS PGothic",sans-serif');
   // +26 で丁度いい
  var like_w = $('#like').width() + 26;
  /*@cc_on
    // IEはページの構成(標準準拠モードか否か?)でボタンの幅が変わる?
    // よく分からんけど適当に調整
    @if (@_jscript_version == 9) // IE9
  //  like_w += 3;
      like_w += 1;
    @elif (@_jscript_version == 5.8) // IE8
      like_w += 1;
    @elif (@_jscript_version == 5.7) // IE7
      like_w += 5;
    @end
  @*/

  // ボタンと同じフォントを指定した「いいね！」の文字から推測した幅を<style>で出力
  // 下の方の margin-left:-300px はクリック後のコメントフォームの位置修正なので、無くてもいいです
  $('#like').html(
    '<style type="text/css">' +
    '#facebook_like iframe{' +
    'width:' + like_w + 'px !important;}' +
    'span.fb_edge_comment_widget.fb_iframe_widget iframe{' +
    'width:401px !important;margin-left:-300px !important;}' +
    '</style>'
  );
});                                                                                                     
