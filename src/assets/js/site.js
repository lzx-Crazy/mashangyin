// 生成评论的星星
$(function () {
  var initStar = function(el){
    var num = $(el).data("star");
    $(el).html("");
    for (var k = 0; k < num; k++) {
      $(el).append("<i></i>")
    }
    for (var j = 0; j < 5 - num; j++) {
      $(el).append("<em></em>")
    }
  };
  var reBind = function(el){
    var kids = $(el).children();
    kids.each(function(n,ev){
      $(ev).on("click",function(){
        console.log(n)
        $(el).data("star",n+1);
        initStar(el);
        reBind(el);
      })
    })
  }
  $("[data-star]").each(function (i, el) {
    initStar(el);
    if($(el).data("canuse")){
      reBind(el);
    }
  })
})

var followFunc = {
  elem: '', //当前点击的元素的对象，可通过此对象获取ID，类型，等信息
  changeFollow: function (elem) {
    var that = this;
    that.elem = $(elem);
    if (that.elem.hasClass("followed")) {
      showConfirm('确定取消关注吗？', function () {
        that.unFollow();
      })
    } else {
      that.toFollow();
    }
  },
  toFollow: function () {
    var that = this;
    that.elem.addClass("followed").text("已关注");
    that.callback(true);
    showTips('关注成功');
  },
  unFollow: function () {
    var that = this;
    that.elem.removeClass("followed").text("关注");
    that.callback(false);
  },
  callback: function (status) {
    //  true为关注
    //  false为取消
    //  this.elem 为 当前点击的对象
    //  do something
  }
}

var collectFunc = {
  elem: '', //当前点击的元素的对象，可通过此对象获取ID，类型，等信息
  changeCollect: function (elem) {
    var that = this;
    that.elem = $(elem);
    if (that.elem.hasClass("collected")) {
      showConfirm('确定取消收藏吗？', function () {
        that.unCollect();
      })
    } else {
      that.toCollect();
    }
  },
  toCollect: function () {
    var that = this;
    that.elem.addClass("collected").children("span").text("已收藏");
    that.callback(true);
    showTips('已添加至收藏');
  },
  unCollect: function () {
    var that = this;
    that.elem.removeClass("collected").children("span").text("收藏");
    that.callback(false);
  },
  callback: function (status) {
    //  true为关注
    //  false为取消
    //  this.elem 为 当前点击的对象
    //  do something
  }
}

var likedFunc = {
  elem: '', //当前点击的元素的对象，可通过此对象获取ID，类型，等信息
  changeLiked: function (elem) {
    var that = this;
    that.elem = $(elem);
    if (that.elem.hasClass("liked")) {
      that.unLiked();
    } else {
      that.toLiked();
    }
  },
  toLiked: function () {
    var that = this;
    that.elem.addClass("liked")
    that.callback(true);
    showTips('+1');
  },
  unLiked: function () {
    var that = this;
    that.elem.removeClass("liked")
    that.callback(false);
  },
  callback: function (status) {
    //  true为关注
    //  false为取消
    //  this.elem 为 当前点击的对象
    //  do something
  }

}


var linkzan = {
  elem: '',//当前点击的元素的对象，可通过此对象获取ID，类型，等信息
  changeLiked: function (elem) {
    var that = this;
    that.elem = $(elem);
    if (that.elem.hasClass("collected")) {
      that.unLiked();
    } else {
      that.toLiked();
    }
  },
  toLiked: function () {
    var that = this;
    that.elem.addClass("collected")
    that.callback(true);
    showTips('+1');
  },
  unLiked: function () {
    var that = this;
    that.elem.removeClass("collected")
    that.callback(false);
  },
  callback: function (status) {
    //  true为关注
    //  false为取消
    //  this.elem 为 当前点击的对象
    //  do something
  }
}


var shoucFun = {
  elem: '',//当前点击的元素的对象，可通过此对象获取ID，类型，等信息
  changeCollect: function (elem) {
    var that = this;
    that.elem = $(elem);
    if (that.elem.hasClass("collected")) {
      showConfirm('确定取消点赞吗？', function () {
        that.unCollect();
      })
    } else {
      that.toCollect();
    }
  },
  toCollect: function () {
    var that = this;
    that.elem.addClass("collected")
    that.callback(true);
    showTips('点赞成功');
  },
  unCollect: function () {
    var that = this;
    that.elem.removeClass("collected");
    that.callback(false);
  },
  callback: function (status) {
    //  true为关注
    //  false为取消
    //  this.elem 为 当前点击的对象
    //  do something
  }
}


$(function () {
  if ($(".bg-opacity").length > 0) {
    $(window).scroll(function (e) {
      var _top = $(this).scrollTop()
      if (_top > 100) {
        $(".bg-opacity").addClass("in-scroll")
      }else{
        $(".bg-opacity").removeClass("in-scroll")
      }
    })
  }
})
// 升贴水小键盘事件
function stsThree(data){
  if(data > 0){
    $(".ks-title").addClass("ks-red")
    $(".ks-title").removeClass("ks-hui")
    $(".ks-title").removeClass("ks-lv")
    $(".kpInput").val("1")
    $(".ksk-name").text("升水")
  }else if(data == 0){
    $(".ks-title").addClass("ks-hui")
    $(".ks-title").removeClass("ks-red")
    $(".ks-title").removeClass("ks-lv")
    $(".kpInput").val("0")
    $(".ksk-name").text("平水")
  }else if(data < 0){
    $(".ks-title").addClass("ks-lv")
    $(".ks-title").removeClass("ks-hui")
    $(".ks-title").removeClass("ks-red")
    $(".kpInput").val("1")
    $(".ksk-name").text("贴水")
  }
}
// 数字
function stskp(e){  
  if($(".ks-title").hasClass("ks-hui")){
    return false;
  }else{
    var texts= $(".kpInput").val()
    $(".kpInput").val(texts+ $(e).text())
  }
  
}
// 删除
function kskDel(){
  var olddata = $(".kpInput").val()
  if(olddata.length <= 0){
    $(".kpInput").val(0)
  } else {
    olddata = olddata.substring(0,olddata.length-1)
    $(".kpInput").val(olddata)
  }
}
// 取消
function closeKp(){
  $(".keypad").removeClass("active")
}
function openKp(){
  $(".keypad").addClass("active")
}

// 小能客服
$(function(){
  $(".nav-yiwen").on("click",function(){
    console.log("客服")
  })
})