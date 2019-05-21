$(function(){

  function buildHTML_add(user){
    if ( user.name ){
      var html_add =
        `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</div>
        </div>`
      return html_add;
    };
  }

  function buildHTML_remove(user_name, user_id){
    var html_remove =
      `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
      <input name='group[user_ids][]' type='hidden' value=${user_id}>
      <p class='chat-group-user__name'>${user_name}</p>
      <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
      </div>`
    return html_remove
  };


  $(".chat-group-form__input").on("keyup", function() {
    var input = $("#user-search-field").val();
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { name: input },
        dataType: 'json'
      })

      .done(function(users) {
        users.forEach(function(user) {
          var html_add = buildHTML_add(user);
          $('#user-search-result').append(html_add);
          });
        })

      .fail(function(){
        alert('error');
    });
  });

  $(document).on('click', '.chat-group-user__btn--add', function(){
    user_name = $(this).data("user-name");
    user_id = $(this).data("user-id");
    $(this).parent().remove();
      var html_remove = buildHTML_remove(user_name,user_id);
      $('#chat-group-users').append(html_remove);
  });

  $(document).on('click','.chat-group-user__btn--remove', function(){
    $(this).parent().remove();
  });
})