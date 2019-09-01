    
 

$(function(){
    var ajaxFunction=function(){
      var indexOpen=layer.open({
          type: 2
          ,content: '加载中，请稍后...'
      });
          $.ajax({
              url:"/index.php/api/Test/testgo",
              contentType: 'application/x-www-form-urlencoded;charset=utf-8',
              dataType:'json',
              success: function(data){
                  $('#body').show();
                  let total=data.total;
                  $('.totalSpan').text(total);
                  let info=data.info;
                  //console.log(info);
                  $.each(info,function(index,value){
                      let s='<div class="li"><span class="liBefore">'+index+'</span>'+
                      '<span class="liSpan01">'+value.name+'</span>'+
                      '<span class="liSpan02">'+value.type+'</span>'+
                      '<span class="liSpan03">'+value.count+'次'+'</span></div>';
                      $('.ul').append(s);
                  })
                  $('.li').each(function(index) {
                      if($(this).find('.liBefore').text()==0){
                          let item=$('.liBefore')[0];
                          $(this).find(item).text(1);
                          $(this).find(item).css('background','#FD8C84');
                      }
                      if($(this).find('.liBefore').text()==1){
                          let item=$('.liBefore')[1];
                          $(this).find(item).text(2);
                          $(this).find(item).css('background','#FFCC99');
                      }
                      if($(this).find('.liBefore').text()==2){
                          let item=$('.liBefore')[2];
                          $(this).find(item).text(3);
                      $(this).find(item).css('background','#7FD75A');
                      }
                      if($(this).find('.liBefore').text()==3){
                          let item=$('.liBefore')[3];
                          $(this).find(item).text(4);
                          // $(this).find(item).css('background','#CCCCFF');
                      }
                      if($(this).find('.liBefore').text()==4){
                          let item=$('.liBefore')[4];
                          $(this).find(item).text(5);
                          // $(this).find(item).css('background','#60C4FD');
                      }
                      if($(this).find('.liBefore').text()==5){
                          let item=$('.liBefore')[5];
                          $(this).find(item).text(6);
                      }
                      if($(this).find('.liBefore').text()==6){
                          let item=$('.liBefore')[6];
                          $(this).find(item).text(7);
                      }
                      if($(this).find('.liBefore').text()==7){
                          let item=$('.liBefore')[7];
                          $(this).find(item).text(8);
                      }
                      if($(this).find('.liBefore').text()==8){
                          let item=$('.liBefore')[8];
                          $(this).find(item).text(9);
                      }
                      if($(this).find('.liBefore').text()==9){
                          let item=$('.liBefore')[9];
                          $(this).find(item).text(10);
                      }
                      if($(this).find('.liSpan02').text()=='可回收'){
                          let li=$(this).find('.liSpan02');
                          $(this).find(li).css('color','#183A68');
                      }
                      if($(this).find('.liSpan02').text()=='有害垃圾'){
                          let li=$(this).find('.liSpan02');
                          $(this).find(li).css('color','#E54430');
                      }
                      if($(this).find('.liSpan02').text()=='湿垃圾'){
                          let li=$(this).find('.liSpan02');
                          $(this).find(li).css('color','#69473E');
                      }
                      if($(this).find('.liSpan02').text()=='干垃圾'){
                          let li=$(this).find('.liSpan02');
                          $(this).find(li).css('color','#2B2A28');
                      }
                    
                      
                      
                  
                  })
                  layer.close(indexOpen);
                  show_num();

              },
              error:function(e){
                 console.log(e);
                 layer.close(indexOpen);
                 layer.open({
                      content: '网络加载有点慢，请稍后再试'
                      ,btn: '我知道了',
                      shadeClose: false,
                      yes: function(index){
                          layer.close(index);
                      }
                  });
              }
      })
  }

     var browserFunction=function(){
     
     
      
      // $('.bottom_fiexd_imag').hide();
      ajaxFunction();
     
      // 查询
     
      //s$('.bottom_fiexd').css({'position':'absolute','bottom':'5px','left':'0px'});
      $("#inquireClick").on("click", function () {
          let evalue=$("#exampleInputName2 ").val();
          // console.log(evalue);
          if(evalue.length>0){
              var indexOpen=layer.open({
                  type:2
                  ,content: '加载中，请稍后...'
              });
              $.ajax({
              type: "post",
              url: "/index.php/api/Test/garbagego",
              contentType: 'application/x-www-form-urlencoded;charset=utf-8',
              data:{
                  name:evalue
              },
              dataType:'json',
              success: function(data){
                  $('.List').html('');
                  if(data.result.length>0){
                      $('.paihang').hide();
                          $('.swiper-container').show();
                          $('.listCXN').hide();
                          $('.codeImage').hide();
                          // $('.bottom_fiexd').css({'position':'relative','top':'15px','left':'0px'});
                      //console.log( data.result);
                      $.each(data.result,function(index,value){
                          let s='<div class="list_li">'+ '<span class="spanIndex">'+index +'</span>'+
                          '<span class="spanName">'+value.name+'</span>'+
                          '<span class="spanType">'+value.type+'</span></div>';
                          $('.List').append(s);
                          $("#exampleInputName2 ").val('');
                      })

                      $('.list_li').each(function(index) {
                          // if($(this).find('.spanIndex').text()=='有害垃圾'){
                              let li=$(this).find('.spanIndex');
                              $(this).find(li).html(index+1);
                          // }
                          if($(this).find('.spanType').text()=='可回收'){
                              let li=$(this).find('.spanType');
                              $(this).find(li).css('color','#183A68');
                          }
                          if($(this).find('.spanType').text()=='有害垃圾'){
                              let li=$(this).find('.spanType');
                              $(this).find(li).css('color','#E54430');
                          }
                          if($(this).find('.spanType').text()=='湿垃圾'){
                              let li=$(this).find('.spanType');
                              $(this).find(li).css('color','#69473E');
                          }
                          if($(this).find('.spanType').text()=='干垃圾'){
                              let li=$(this).find('.spanType');
                              $(this).find(li).css('color','#2B2A28');
                          }
                         
                      
                      })

                  }else{
                      $('.paihang').hide();
                      $('.codeImage').hide();
                      $('.swiper-container').hide();
                      $('.listCXN').show();
                      let sh='<div style="text-align: center;width:100%;height:50px;line-height:50px;font-size:16px;">呀！居然有我不知道的垃圾，我们会尽快收录！</div>';
                      $('.listCXN').html(sh);
                      $("#exampleInputName2 ").val('');
                  }
                  $('.bottom_fiexd').show();
                 // $('.bottom_fiexd_imag').show();
                  layer.close(indexOpen);
              

              },
              error:function(e){
                 console.log(e);
                 //信息框
                 layer.close(indexOpen);
                  layer.open({
                      content: '网络加载有点慢，请稍后再试'
                      ,btn: '我知道了',
                      shadeClose: false,
                      yes: function(index){
                          layer.close(index);
                      }
                  });
              }
            })
          }else{
              $('.bottom_fiexd').show();
              // $('.bottom_fiexd_imag').hide();
              $('.paihang').show();
              $('.codeImage').show();
              $('.swiper-container').hide();
              $('.listCXN').hide();
              $("#exampleInputName2 ").val('');
          }
      

      })
      $('#exampleInputName2').focus(function(){
          $('footer').hide();
      })
      $('#exampleInputName2').blur(function(){
          $('footer').show();
      })
      $('#clickImg').on("click",function(){
           // window.location.href="https://h5.youzan.com/v2/showcase/homepage?alias=1TnBSzwhrC";
      })
      let gundong=$('.guangao');
     
      function show_num(){ 
          gundong.css('right','-'+$(document.body).width()+'px');
          gundong.animate({
              right:'0px',
          },8000)
      }
      gundong.on("click",function(){
           window.location.href="https://mp.weixin.qq.com/s/M_7jJB-aFVL56Dhb6Kn-Bw";
      })
     

      
  }
  var browser = {
      versions: function () {
       var u = navigator.userAgent, app = navigator.appVersion;
       return {   //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
       };
      }(),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }
  if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
      var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
      if (ua.match(/MicroMessenger/i) == "micromessenger"||ua.match(/WeiBo/i) == "weibo"||ua.match(/QQ/i) == "qq") {
        //在微信中打开
        $('#body').hide();
        $('.swiper-container').hide();  
        WeiXinAjaxFunction();
        browserFunction();
      }
       if(ua.indexOf(' qq')>-1 && ua.indexOf('mqqbrowser') <0){
             //在微信中打开
            $('#body').hide();
            $('.swiper-container').hide();  
            WeiXinAjaxFunction();
            browserFunction();
        }
        if(ua.indexOf('mqqbrowser')> -1 && ua.indexOf(" qq")<0){
             //在微信中打开
            $('#body').hide();
            $('.swiper-container').hide();  
            WeiXinAjaxFunction();
            browserFunction();
        }
        if(browser.versions.ios||browser.versions.android){
            $('body').html('');
            layer.open({
                content: '暂不支持在当前浏览器打开,请在微信、QQ中打开！'
                ,btn: '我知道了',
                shadeClose: false,
                yes: function(index){
                    layer.close(index);
                }
            });
        }
    
    } else {
      //否则就是PC浏览器打开
      $('body').html('');
      layer.open({
          content: '暂不支持在当前浏览器打开,请在微信、QQ中打开！'
          ,btn: '我知道了',
          shadeClose: false,
          yes: function(index){
              layer.close(index);
          }
      });
    }
  



})