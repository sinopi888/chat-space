$(function(){
  function buildHTML(user){
    if ( user.name ){
      var html =
        `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.name} data-user-name=${user.name}>追加</div>
      </div>`
      return html;
    };
  }

  $(".chat-group-form__input").on("keyup", function() {
    var input = $("#user-search-field").val();
    console.log(input)
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { text: input },
      dataType: 'json'
    })

      .done(function(users) {
          users.forEach(function(user) {
            var html = buildHTML(user);
            $('.chat-group-form__search clearfix').append(html);
          });
        })

      .fail(function(){
        alert('error');
      });
  });
})