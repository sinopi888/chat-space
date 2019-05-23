$(function(){
  function buildHTML(message){
    var Image = message.image.url ? `<img src=${message.image.url}>` : '';
      var html =
        `<div class="message" data-message-id=${message.id}>
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.date}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
        ${Image}
      </div>`
    return html;
  };

  $(".new_message").on('submit', function(e) {
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action');
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })

  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
    $('form')[0].reset();
  })
    .fail(function(){
      alert('error');
    });
    return false;
  });

    var reloadMessages = function(){
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    var last_message_id = $('.message:last').data('message-id')
    var group_id = $('.left-header__title').data('group-id')
    var url = `/groups/${group_id}/api/messages`

    $.ajax({
      //ルーティングで設定した通りのURLを指定
      url: url,
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'GET',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })

    .done(function(messages) {
        messages.forEach(function(message) {
          var html = buildHTML(message);
          $('.messages').append(html);
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
          });
        })

      .fail(function() {
        alert('error');
      });
  };
  
  $(function(){
    if (location.pathname.match(/messages/)){
      setInterval(reloadMessages, 5000);
    } else {
      clearInterval(reloadMessages)
    }
  })

});