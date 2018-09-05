$(function () {
  FastClick.attach(document.body);
});

//获取离顶部高度
function getTop(e) {
  var offset                           = e.offsetTop;
  if  (e.offsetParent != null) offset += getTop(e.offsetParent);
  return offset;
}

/* 短信验证码 */
var getMsgCode = function (elem) {
  var el       = $(elem);
  var count    = 60;
  var msgTimed = setInterval(function () {
    el.prop("disabled", true);
    el.text(count + 's');
    count--;
    if (count <= 0) {
      el.prop("disabled", false);
      el.text("获取验证码");
      clearTimeout(msgTimed)
    }
  }, 1000)
}

/* tips消息 */
var showTips = function (msg, sec, callback) {
  var speed = sec != undefined ? sec : 2;
  var _html = "<div class='show-tips'></div>";
  var _el   = $(_html);
  $("body").append(_el);
  _el.html("<p>" + msg + "</p >");
  var tipsTimed = setTimeout(function () {
    _el.fadeOut(function () {
      _el.remove();
      if (callback != undefined) {
        callback();
      }
    })
    clearTimeout(tipsTimed)
  }, speed * 1000)
}

// 弹窗滚动优化
var alphaScroll = {
  flagTop: 0,
  addTo  : function () {
    this.flagTop = $(window).scrollTop();
    $("html").addClass("alpha");
  },
  removeTo: function () {
    var that = this;
    $("html").removeClass("alpha");
    $(window).scrollTop(that.flagTop);
  }
}

/* 显示loading提示 */
var showLoading = function () {
  var _html = "<div class='show-loading'></div>";
  var _el   = $(_html);
  $("body").append(_el);
  _el.html("<img src='front/images/icon/loading.png'><p></p>");
  window.addEventListener('click', function (ev) {
    if ($(".show-loading").length > 0) {
      ev.stopPropagation(); // 不再派发事件
      ev.preventDefault();  // 取消事件的默认动作
    }
  }, true);
}

/* 关闭loading提示 */
var hideLoading = function () {
  $(".show-loading").fadeOut(function () {
    $(".show-loading").remove()
  })
}


/* 显示上拉加载loading提示 */
var showReachLoading = function (elem) {
  $(".show-null-reach").slideUp(function () {
    $(".show-null-reach").remove()
  })
  var _html = "<div class='show-reach-loading'></div>";
  var _el   = $(_html);
  elem.append(_el);
  _el.html("<img src='front/images/icon/reach-loading.png'><span>正在加载...</span>");
  $("html,body").animate({
    scrollTop: $("html")[0].scrollHeight
  }, 0);
  window.addEventListener('click', function (ev) {
    if ($(".show-reach-loading").length > 0) {
      ev.stopPropagation();
      ev.preventDefault();
    }
  }, true);
}

/* 关闭上拉加载loading提示 */
var hideReachLoading = function () {
  $(".show-reach-loading").slideUp(function () {
    $(".show-reach-loading").remove()
  })
}

/* 显示nodata提示 */
var showNullReach = function (elem) {
  $(".show-null-reach").remove()
  var _html = "<div class='show-null-reach'></div>";
  var _el   = $(_html);
  elem.append(_el);
  _el.html("<span class='notstate'>- 暂无更多数据 -</span>");
}

/* 触底加载 */
var onReachBottom = {
  hasNextPage: true,
  currPage   : 1,
  option     : {
    now: 0,
    old: 0
  },
  init: function (elem, callback) {
    var that = this;
    $(document).scroll(function () {
      that.option.now = $(this).scrollTop();

      if (that.option.old < that.option.now) {
        //下滚
        var doc_hei = $(document).outerHeight(true);
        var sr_top  = $(window).scrollTop();
        var win_hei = $(window).outerHeight(true);
        if (win_hei + sr_top + 1 >= doc_hei) {
          if (!that.hasNextPage) {
            if (!$(".show-reach-loading").length > 0 && !$(".show-null-reach").length > 0) {
              showNullReach($(elem))
            }
            return false
          }
          that.hasNextPage = false;
          // showReachLoading($(elem));
          showLoading()
          callback()
        }
      } else {
        //上滚            

      }
      setTimeout(function () {
        that.option.old = that.option.now;
      }, 0)

    })
  }
}

// 时间戳格式化
var filter = {
  zero: function (num) {
    if (parseInt(num) < 10) {
      num = '0' + num
    }
    return num
  },
  setDate: function (date) {
    var that = this;
    var d    = new Date(parseInt(date));
    var r    = {
      year  : d.getFullYear(),
      month : that.zero(d.getMonth() + 1),
      day   : that.zero(d.getDate()),
      hour  : that.zero(d.getHours()),
      minute: that.zero(d.getMinutes()),
      second: that.zero(d.getSeconds()),
      apm   : d.getHours() < 12 ? '上午'   : '下午'
    }
    return r;
  },
  dateByApm: function (date) {
    var r = this.setDate(date);
    return r.year + '年' + r.month + '月' + r.day + '日 ' + r.apm + ' ' + r.hour + ':' + r.minute + ':' + r.second
  },
  dateByHms: function (date) {
    var r = this.setDate(date);
    return r.year + '-' + r.month + '-' + r.day + ' ' + r.hour + ':' + r.minute + ':' + r.second
  }
}

var dropFunc = {
  elem: '',
  show: function (el) {
    var _drop     = "<div class='bg-drop'></div>";
    var _dl       = $(_drop);
        this.elem = _dl;
    $(el).before(_dl);
    alphaScroll.addTo();
    $(".body-main").addClass("fix-main");
  },
  hide: function () {
    var _dl = this.elem;
    _dl.fadeOut(function () {
      _dl.remove();
    });
    $(".body-main").removeClass("fix-main");
    alphaScroll.removeTo();
  }
}

function showConfirm(str, cbAccept, cbCancel, btnOpt, title) {
  if (typeof cbCancel != 'function') {
    btnOpt = cbCancel
  }
  if (btnOpt == undefined) {
    btnOpt = {
      confirm: '确认',
      cancel : '取消'
    }
  }
  if (title == '' || title == null) {
    title = "温馨提示"
  }
  var _drop = "<div class='bg-drop'></div>";
  var _html = "<div class='show-confirm'></div>";
  var _el   = $(_html);
  var _dl   = $(_drop);
  $("body").append(_el);
  $("body").append(_dl);
  var h_wxts = "<div class='sc-title'>" + title + "</div>";
  var h_cont = "<div class='sc-cont'>" + str + "</div>";
  var h_btn  = "<div class='sc-btnbox'>" +
    "<button type='button' class='btn-accept'>" + btnOpt.confirm + "</button>" +
    (btnOpt.cancel != '' ? "<button type='button' class='btn-cancel'>" + btnOpt.cancel + "</button>" : "") +
    "</div>"
  _el.append(h_wxts); 
  _el.append(h_cont);
  _el.append(h_btn);
  $(".show-confirm .btn-accept").on("click", function () {
    if (cbAccept) {
      cbAccept();
    } else {
      $(".bg-drop").fadeOut();
      $(".show-confirm").fadeOut(
        function () {
          _dl.remove();
          _el.remove();
        }
      );
    }
  });
  $(".show-confirm .btn-cancel").on("click", function () {
    $(".bg-drop").fadeOut();
    $(".show-confirm").fadeOut(
      function () {
        _dl.remove();
        _el.remove();
        if (cbCancel) {
          cbCancel();
        }
      }
    );
  });
  _dl.on('click', function (ev) {
    ev.stopPropagation();
    ev.preventDefault();
  });
}

// 返回
$(function () {
  $(".back-to").on('click', function () {
    window.history.back(-1);
    return false;
  })
})

// 如果无底部，则将内容区的padding-bottom清空
$(function () {
  if ($(".fix-footer").length <= 0) {
    $(".page-main").css("paddingBottom", 0)
  }
})

// tab切换方法
function initTabSelect(elem, callback) {
  $(elem).each(function (i, el) {
    var taTto = $(el).find("[data-tabto]");
    taTto.each(function (k, sl) {
      if ($(sl).hasClass("active")) {
        // 回显
        var idx = $(this).data("tabto");
        $(this).addClass("active").siblings("[data-tabto]").removeClass("active");
        $(el).find("[data-tabbox=" + idx + "]").show().siblings("[data-tabbox]").hide();
        $(el).find("[data-tabbox=" + idx + "]").siblings("[data-tabbox]").removeClass("active");
      }
      $(sl).unbind("click").on("click", function () {
        // 绑定点击切换事件
        var idx = $(this).data("tabto");
        $(this).addClass("active").siblings("[data-tabto]").removeClass("active");
        $(el).find("[data-tabbox=" + idx + "]").show().siblings("[data-tabbox]").hide();
        $(el).find("[data-tabbox=" + idx + "]").siblings("[data-tabbox]").removeClass("active");
        if (callback) {
          // 向回调中传入被点击的对象和被显示的对象
          callback($(this), $(el).find("[data-tabbox=" + idx + "]"))
        }
      })
    })
  })
}

$(function () {
  initTabSelect(".page-tabbox");
})

function scaleImg(ev) {
  var winWid    = document.documentElement.clientWidth;
  var winHgt    = document.documentElement.clientHeight;
  var ntWid     = ev.naturalWidth;
  var ntHgt     = ev.naturalHeight;
  var _domDark  = "<div class='img-scale-dark'></div>";
  var _domWrap  = "<div class='img-scale-wrap'></div>";
  var _domImg   = "<img src='" + $(ev).attr("src") + "'/>";
  var _domDel   = "<button type='button'>点击此处关闭</button>";
  var _elemDark = $(_domDark);
  var _elemWrap = $(_domWrap);
  var _elemImg  = $(_domImg);
  var _elemDel  = $(_domDel);
  $("body").append(_elemDark);
  $("body").append(_elemWrap);
  $(_elemWrap).append(_elemImg);
  $(_elemWrap).append(_elemDel);
  _elemDark.css({
    "display"   : "none",
    "position"  : "fixed",
    "zIndex"    : "998",
    "left"      : "0",
    "top"       : "0",
    "width"     : "100%",
    "height"    : "100%",
    "background": "rgba(102,102,102,.7)"
  }).fadeIn(300);
  var boxWid, boxHgt, point = .8;
  if (ntWid <= (winWid * point) && ntHgt <= (winHgt * point)) {
    boxWid = ntWid;
    boxHgt = ntHgt;
    // console.log("小图")
  } else if (ntWid > (winWid * point) && ntHgt > (winHgt * point)) {
    if (ntHgt > ntWid) {
      boxHgt = (winHgt * point);
      boxWid = boxHgt * (ntWid / ntHgt);
    } else {
      boxWid = (winWid * point);
      boxHgt = boxWid * (ntHgt / ntWid);
    };
    // console.log("大图")
  } else if (ntWid >= (winWid * point) && ntHgt <= (winHgt * point)) {
    boxWid = (winWid * point);
    boxHgt = boxWid * (ntHgt / ntWid);
    // console.log("横图")
  } else if (ntWid < (winWid * point) && ntHgt > (winHgt * point)) {
    boxHgt = (winHgt * point);
    boxWid = boxHgt * (ntWid / ntHgt);
    // console.log("竖图")
  } else {
    boxWid = 300;
    boxHgt = 300
  };
  _elemWrap.css({
    "display" : "none",
    "position": "fixed",
    "zIndex"  : "999",
    "left"    : "0",
    "top"     : "0",
    "bottom"  : "0",
    "right"   : "0",
    "margin"  : "auto",
    "width"   : boxWid,
    "height"  : boxHgt
  }).fadeIn(500);
  _elemImg.css({
    "width" : "100%",
    "height": "auto"
  });
  _elemDel.css({
    "position"  : "absolute",
    "zIndex"    : "999",
    "left"      : "0",
    "bottom"    : "-30px",
    "width"     : boxWid,
    "height"    : "30px",
    "background": "rgba(255,119,46,.8)",
    "color"     : "#fff",
    "border"    : "0",
    "outline"   : "none"
  });
  _elemDel.on("click", function () {
    _elemDark.fadeOut(function () {
      _elemDark.remove();
    });
    _elemWrap.fadeOut(function () {
      _elemWrap.remove();
    });
  })
}

$(function () {
  $(".scale-img img").each(function (i, el) {
    $(el).on('click', function () {
      scaleImg(el)
    })
  })
})


var mockSelect = function (callback) {
  var _btn = $(".slc-curr");

  /* 绑定点击事件 */
  _btn.each(function (i, el) {
    var initVal = $(el).data("source");
    if (initVal > -8) {
      $(el).siblings(".slc-list").children("li").each(function (k, ml) {
        if ($(ml).data("source") == initVal) {
          $(el).html($(ml).html())
        }
      })
    };
    $(el).unbind("click").on("click", function (m) {
      // console.log(_items.length)
      var _list  = $(el).siblings(".slc-list");
      var _items = _list.children("li");
      if (_list.is(":hidden")) {
        $(".slc-list").slideUp();
        $(el).parent(".slc-box").removeClass("active");
        $(el).parent(".slc-box").addClass("active");
        _list.stop(true, false).slideDown();
        // 调用绑定事件
        reBindDataChange($(el), _list, _items, callback)
      } else {
        $(el).parent(".slc-box").removeClass("active");
        _list.stop(true, false).slideUp()
      }
      $(document).unbind("click").on("click", function () {
        $(el).parent(".slc-box").removeClass("active");
        _list.stop(true, false).slideUp()
      });
      m.stopPropagation();
    });
  })
}

/* 绑定下拉菜单选项的点击事件 */
var reBindDataChange = function (_btn, _list, _items, callback) {
  _items.each(function (k, ml) {
    $(ml).unbind("click").on("click", function () {
      var t_data = $(ml).data("source");
      var t_text = $(ml).html();
      _btn.val(t_text);
      _btn.data("source", t_data);
      if (_btn.siblings(":hidden").length > 0) {
        _btn.siblings(":hidden").val(t_data)
      }
      _list.stop(true, false).slideUp();
      _btn.parent(".slc-box").removeClass("active");
      $(ml).addClass("active").siblings().removeClass("active");
      if (callback) {
        callback(_btn, t_data)
      }
    })
  })
  _list.unbind("click").on("click", function (m) {
    m.stopPropagation();
  });
}

// 默认添加下拉刷新html
var fullDownLoading = {
  $elem: '',
  $count:0,
  $inv:'',
  init : function (elem) {
    var _html = "<div class='show-pulldown-loading'></div>";
    var _el   = $(_html);
    $(elem).prepend(_el);
    _el.html("<img src='front/images/icon/reach-loading.png'><span>正在刷新数据中...</span>");
    this.$elem = _el;
  },
  show: function () {
    showLoading()
    var that = this;
    that.$elem.addClass("active");
    that.$inv = setInterval(function(){
      that.$count++
    },100)
  },
  hide: function () {
    hideLoading()
    var that = this;
    clearInterval(that.$inv)
    if(that.$count<=5){
      that.$inv = setTimeout(function(){
        that.$elem.removeClass("active");
        clearTimeout(that.$inv);
        that.$count = 0
      },100*(5-that.$count))
    }else{
      // console.log('height',that.$elem.height())
      // that.$elem.animate({marginTop:-(that.$elem.height())})
      // that.$elem.removeAttr("style")
      that.$elem.removeClass("active")
    }
  }
}
// 刷新
function onPullDownRefresh(elem, callback) {
  var $elem = $(elem);
  var $flag = true;
  var oldY, nowY;

  var scroll = document.querySelector(elem);

  // 添加加载提示dom
  fullDownLoading.init(elem);
  // 添加加载提示dom

  $elem.on("touchstart", function (e) {
    var touch     = e.originalEvent.targetTouches[0];
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    console.log(scrollTop)
    if (scrollTop > 0) {
      $flag = false;
    } else {
      $flag = true;
    }
    oldY = touch.pageY;
  })
  $elem.on("touchend", function (e) {
    // if (!$flag || $(".show-pulldown-loading.active").length>0) {
    if ($(".show-pulldown-loading.active").length>0) {
      return false 
    }
    var touch = e.originalEvent.changedTouches[0];
        nowY  = touch.pageY
    if (nowY - oldY >= 80) {
      fullDownLoading.show();
      callback()
    }
    // $loadingEl.animate({'margin-top': -loadingH}, 200, function() {
    //   isTouching = false;
    // });
  })
}

function initTimeOut(){
  $(".global-timeout").each(function(i,el){
    var _date = $(el).data("date");
    if($(el).text() == ''){
      $(el).text("--:--:--");
      var invStr = "inv" + _date;
      invStr = setInterval(function(){
        var _now = new Date();
        var _time = _now.getTime();
        var timeDif = Math.floor((_date - _time)/1000);
        if(timeDif <= 0){
          $(el).text("--:--:--");
          clearInterval(invStr);
          return false
        }
        var hour = Math.floor(timeDif/(60*60));
        var minute = Math.floor(timeDif%(60*60)/60);
        var second = Math.floor(timeDif%60);
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        $(el).text(hour + ":" + minute + ":" + second)
      },1000);
    }
  })
}
