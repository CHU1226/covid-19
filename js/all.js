$(function(){
    $('.ab-btn-group button:first').addClass('active-brown');
    $('.ab-btn-group button').click(function(){
        $(this).addClass('active-brown').siblings().removeClass()
    });
    $(document).on('click','.log-btn',function(){
      $('#log').fadeIn();
    });
    $('.log-close,.check').click(function(){
      $('#log').fadeOut();
      $('#log input').val("")
    });
    var msgRef = firebase.database().ref('/messages/')
    var msgReport = firebase.database().ref('/report/')

    $('#push').on('click',function(){
      var msg = $('#textInput').val();
      msgRef.push({
        message: msg
      });
      $('#textInput').val("")
    });
    msgRef.on('value',function(snapshot){
      var val = snapshot.val();    
      let list = '';
      $.each(val, function(i,item){
        list = `${list}<div class="user">
                  <div class="user-img">
                    <img src="img/user-demo.png" alt="">
                  </div>
                  <div class="user-text">
                    <p class="user-name"></p> 
                    <p class="user-comment">${item.message}</p>
                    <i class="fas fa-exclamation-circle remove" data-key="${i}"></i>
                  </div>
                </div>`
      });
      $('.comment').html(list);
      $('.remove').on('click',function(){
        var key = $(this).data('key');       
        msgReport.push({
          report: key
        });
       alert("我們已收到您的檢舉 請耐心等候");
      })
    });


    $.getJSON("../js/resultTime.json",function(data){
      var html = "";
      $.each(data,function(t,getTime){
        html = `${html}<div>
        <h3>${getTime.time}</h3>
        <hr>
        <p>${getTime.event}</p>
      </div>`
      });
      $('.timeline-block').append(html); 
    });

    $('.fa-angle-right').click(function(){
      $('.timeline-block').animate({
        scrollLeft: '-=100'
      },500);
    });
    $('.fa-angle-left').click(function(){
      $('.timeline-block').animate({
        scrollLeft: '+=100'
      });
    });


      $.getJSON("../js/result.json",function(people){
        var table = "";
        $.each(people,function(p,getPeople){
          table = `${table}<tr>
              <td>${getPeople.name}</td>
              <td>${getPeople.value}</td>
              <td>${getPeople.die}</td>
          </tr>`
        });
        $('tbody tr').remove();
        $('.infection-table').append(table)
        
      });

      $.getJSON("../js/resultNews.json",function(news){
        var group = "";
        var group2 = "";
        $.each(news,function(n,getNews){
          group = `${group}<div class="items">
          <div class="item-imgbx">
              <img src="${getNews.imgsrc}" alt="">
          </div>
          <div class="item-textbx">
              <h3>${getNews.title}</h3>
              <p>${getNews.totaltext}</p>
          </div>
        </div>`
      });
      $.each(news,function(n,getNews){
        group2 = `${group2}<div>
        <h2>${getNews.title}</h2>
          <img src="${getNews.imgsrc}" alt="">
          <p>${getNews.totaltext}</p>
        </div>
      </div>`
    });
        $('.news-bar').append(group);
        $('.news-main-img').append(group2)
        $('.news-main-img > div').eq(0).siblings().remove();
        $('.items').on('click',function(){
          var index = $(this).index();
          $('.news-main-img').append(group2)
          $('.news-main-img > div').eq(index).siblings().remove();
        })
      });
    
})