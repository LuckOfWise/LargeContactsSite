$(function() {
  $('#hatena').socialbutton('hatena', {
        button: 'simple'
    });

  $('#twitter').socialbutton('twitter', {
    button: 'none',
        text: 'Androidアプリ「大きな電話帳」',
        via: 'aotaijp'
  });
  
  $('#google_plusone').socialbutton('google_plusone', {
    lang: 'ja',
    size: 'medium',
    count: false
  });

  $('#fb_like').socialbutton('facebook_like', {
    button: 'button_count'
  });
});