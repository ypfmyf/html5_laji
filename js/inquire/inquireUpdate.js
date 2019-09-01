   var WeiXinAjaxFunction=function(){
        $.ajax({
            url: "/index.php/api/Test/testgo",
            contentType: 'application/x-www-form-urlencoded;charset=utf-8',
            type: 'GET',
            data:{
                fullUrl:location.href.split('#')[0],
            },
            dataType:'json',
            success: function(data){
            wx.config({
            // debug: true, // 
            appId: 'wxc66e198e800e067d', // 必填，公众号的唯一标识
            timestamp:data.config.timestamp , // 必填，生成签名的时间戳
            nonceStr:data.config.noncestr, // 必填，生成签名的随机串
            signature:data.config.jsapi_ticket,// 必填，签名
            jsApiList: ['updateAppMessageShareData','updateTimelineShareData','onMenuShareAppMessage', 'onMenuShareTimeline','onMenuShareWeibo'] // 必填，需要使用的JS接口列表
            });
            let title='垃圾分类查询工具';
            let desc='工具在手、分类无忧；投其所好、利在千秋！';

            wx.ready(function(){
            // 分享给好友
                wx.updateAppMessageShareData({
                    title:title,// 分享标题
                    desc:desc,// 分享描述
                    link:'/html5/inquire.html',// 分享链接
                    imgUrl:'/Data/UploadFiles/adv/20190621/1561105595793128.png',// 分享图标
                    success: function(){
                    //doShareDone()
                    }
                })
                // 分享到朋友圈
                wx.updateTimelineShareData({
                title:title,// 分享标题
                link:'/html5/inquire.html',// 分享链接
                imgUrl:'/Data/UploadFiles/adv/20190621/1561105595793128.png',// 分享图标
                success:function(){
                    //doShareDone()
                    },
            
                })
                //分享到腾讯微博
                wx.onMenuShareWeibo({
                    title:title,// 分享标题
                    desc:desc,// 分享描述
                    link:'/html5/inquire.html',// 分享链接
                    imgUrl:'/Data/UploadFiles/adv/20190621/1561105595793128.png',// 分享图标
                    success: function () {
                    // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                    // 用户取消分享后执行的回调函数
                    }
                })
             })

        
            },
            error:function(e){
            console.log(e);
                // layer.open({
                //         content: '网络加载有点慢，请稍后再试'
                //         ,btn: '我知道了',
                //         shadeClose: false,
                //         yes: function(index){
                //             layer.close(index);
                //         }
                //     });
            }
        });
    }