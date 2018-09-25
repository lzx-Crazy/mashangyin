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
  var lv=$(".hidNum").val()*1;
  $(".kpInput").val(Math.abs(lv))
  if($(".snsNum").hasClass("red")){
    $(".ksk-name").text("升水")
    $(".ks-title").addClass("ks-red")
    $(".ks-title").removeClass("ks-hui")
    $(".ks-title").removeClass("ks-lv")
  } else if($(".snsNum").hasClass("lv")){
    $(".ksk-name").text("贴水")
    $(".ks-title").removeClass("ks-red")
    $(".ks-title").removeClass("ks-hui")
    $(".ks-title").addClass("ks-lv")
  } else{
    $(".ksk-name").text("平水")
    $(".ks-title").removeClass("ks-red")
    $(".ks-title").addClass("ks-hui")
    $(".ks-title").removeClass("ks-lv")
  }
  $(".keypad").addClass("active") 
}

// 小能客服
$(function(){
  $(".nav-yiwen,.nav-kefu").on("click",function(){
    NTKF.im_openInPageChat('kf_10119_1519629930437');
  })
})

// 时间选择控件
function getSelectTimes(oldData, newData, className){
	var selectDateDom = $('.' + className);
	var showDateDom = $('.' + className);
	// 初始化时间
	var now = new Date();
	var nowYear = now.getFullYear();
	var nowMonth = now.getMonth() + 1;
	var nowDate = now.getDate();
	showDateDom.attr('data-year', nowYear);
	showDateDom.attr('data-month', nowMonth);
  showDateDom.attr('data-date', nowDate);
  
  var oldTime = oldData.split("-")
  var newTime = newData.split("-")

  var minYear = parseInt(oldTime[0])
  var maxYear = parseInt(newTime[0])

  var minMonth = parseInt(oldTime[1])
  var maxMonth = parseInt(newTime[1])

  var minDate = parseInt(oldTime[2])
  var maxDate = parseInt(newTime[2])


	// 数据初始化
	function formatYear (nowYear) {
		var arr = [];
		for (var i = minYear; i <= maxYear; i++) {
			arr.push({
				id: i + '',
				value: i 
			});
		}
		return arr;
	}
	function formatMonth (minM,maxM) {
    var arr = [];
		for (var i = minM; i <= maxM; i++) {
			arr.push({
				id: i + '',
				value: i
			});
		}
		return arr;
	}
	function formatDate (mincount,maxcount) {
		var arr = [];
		for (var i = mincount; i <= maxcount; i++) {
			arr.push({
				id: i + '',
				value: i
			});
		}
		return arr;
	}
	var yearData = function(callback) {
		// settimeout只是模拟异步请求，真实情况可以去掉
		// setTimeout(function() {
			callback(formatYear(nowYear))
		// }, 2000)
	}
	var monthData = function (year, callback) {
    console.log(year)
		// settimeout只是模拟异步请求，真实情况可以去掉
		// setTimeout(function() {      
      if(minYear == maxYear){
        callback(formatMonth(minMonth, maxMonth));
      }else {
        
        if(parseInt(year) == minYear){
          callback(formatMonth(minMonth, 12));
        } else if(parseInt(year) == maxYear){
          console.log(11111111111)
          console.log('maxYear',maxYear)
          console.log('year',parseInt(year) )
          
          callback(formatMonth(1, maxMonth));
        }else{
          console.log("2222")
          callback(formatMonth(1, 12));
        }
        
      }
		// }, 2000);
	};
	var dateData = function (year, month, callback) {
		// settimeout只是模拟异步请求，真实情况可以去掉
		// setTimeout(function() {
      if(minYear == maxYear){
        if(minMonth == maxMonth){
          callback(formatDate(minDate, maxDate));
        } else {
          if(month == minMonth){
            if (/^(1|3|5|7|8|10|12)$/.test(month)) {
              callback(formatDate(minDate, 31));
            }
            else if (/^(4|6|9|11)$/.test(month)) {
              callback(formatDate(minDate,30));
            }
            else if (/^2$/.test(month)) {
              if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
                callback(formatDate(minDate,29));
              }
              else {
                callback(formatDate(minDate,28));
              }
            }
            else {
              throw new Error('month is illegal');
            }
          } else if(month == maxMonth) {
            if (/^(1|3|5|7|8|10|12)$/.test(month)) {
              callback(formatDate(1, maxDate));
            }
            else if (/^(4|6|9|11)$/.test(month)) {
              callback(formatDate(1,maxDate));
            }
            else if (/^2$/.test(month)) {
              if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
                callback(formatDate(1,maxDate));
              }
              else {
                callback(formatDate(1,maxDate));
              }
            }
            else {
              throw new Error('month is illegal');
            }
          } else {
            if (/^(1|3|5|7|8|10|12)$/.test(month)) {
              callback(formatDate(1, 31));
            }
            else if (/^(4|6|9|11)$/.test(month)) {
              callback(formatDate(1,30));
            }
            else if (/^2$/.test(month)) {
              if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
                callback(formatDate(1,29));
              }
              else {
                callback(formatDate(1,28));
              }
            }
            else {
              throw new Error('month is illegal');
            }
          }
        }
      } else if(minYear == year){
        if(month == minMonth){
          if (/^(1|3|5|7|8|10|12)$/.test(month)) {
            callback(formatDate(minDate, 31));
          }
          else if (/^(4|6|9|11)$/.test(month)) {
            callback(formatDate(minDate,30));
          }
          else if (/^2$/.test(month)) {
            if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
              callback(formatDate(minDate,29));
            }
            else {
              callback(formatDate(minDate,28));
            }
          }
          else {
            throw new Error('month is illegal');
          }
        } else if(month == maxMonth) {
          if (/^(1|3|5|7|8|10|12)$/.test(month)) {
            callback(formatDate(1, maxDate));
          }
          else if (/^(4|6|9|11)$/.test(month)) {
            callback(formatDate(1,maxDate));
          }
          else if (/^2$/.test(month)) {
            if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
              callback(formatDate(1,maxDate));
            }
            else {
              callback(formatDate(1,maxDate));
            }
          }
          else {
            throw new Error('month is illegal');
          }
        } else {
          if (/^(1|3|5|7|8|10|12)$/.test(month)) {
            callback(formatDate(1, 31));
          }
          else if (/^(4|6|9|11)$/.test(month)) {
            callback(formatDate(1,30));
          }
          else if (/^2$/.test(month)) {
            if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
              callback(formatDate(1,29));
            }
            else {
              callback(formatDate(1,28));
            }
          }
          else {
            throw new Error('month is illegal');
          }
        } 
      } else  if(maxYear == year){
       if(month == maxMonth) {
         console.log("MaxYear", month)
          if (/^(1|3|5|7|8|10|12)$/.test(month)) {
            callback(formatDate(1, maxDate));
          }
          else if (/^(4|6|9|11)$/.test(month)) {
            callback(formatDate(1,maxDate));
          }
          else if (/^2$/.test(month)) {
            if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
              callback(formatDate(1,maxDate));
            }
            else {
              callback(formatDate(1,maxDate));
            }
          }
          else {
            throw new Error('month is illegal');
          }
        }  else {
          if (/^(1|3|5|7|8|10|12)$/.test(month)) {
            callback(formatDate(1, 31));
          }
          else if (/^(4|6|9|11)$/.test(month)) {
            callback(formatDate(1,30));
          }
          else if (/^2$/.test(month)) {
            if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
              callback(formatDate(1,29));
            }
            else {
              callback(formatDate(1,28));
            }
          }
        }
      } else {
        if (/^(1|3|5|7|8|10|12)$/.test(month)) {
          callback(formatDate(1, 31));
        }
        else if (/^(4|6|9|11)$/.test(month)) {
          callback(formatDate(1,30));
        }
        else if (/^2$/.test(month)) {
          if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
            callback(formatDate(1,29));
          }
          else {
            callback(formatDate(1,28));
          }
        }
        else {
          throw new Error('month is illegal');
        }
      }
			
		// }, 2000);
		// ajax请求可以这样写
		/*
		$.ajax({
			type: 'get',
			url: '/example',
			success: function(data) {
				callback(data);
			}
		});
		*/
	};
	selectDateDom.bind('click', function () {
		var oneLevelId = showDateDom.attr('data-year');
		var twoLevelId = showDateDom.attr('data-month');
		var threeLevelId = showDateDom.attr('data-date');
		var iosSelect = new IosSelect(3, 
			[yearData, monthData, dateData],
			{
				title: '日期选择',
				itemHeight: 35,
				oneLevelId: oneLevelId,
				twoLevelId: twoLevelId,
				threeLevelId: threeLevelId,
				showLoading: true,
				callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
					showDateDom.attr('data-year', selectOneObj.id);
					showDateDom.attr('data-month', selectTwoObj.id);
					showDateDom.attr('data-date', selectThreeObj.id);
					showDateDom.val(selectOneObj.value + '-' + selectTwoObj.value + '-' + selectThreeObj.value);
				}
			});
	});
}


function nowDataTime(className){
  var selectDateDom = $('.' + className);
    var showDateDom = $('.' + className);
    // 初始化时间
    var now = new Date();
    var nowYear = now.getFullYear();
    var nowMonth = now.getMonth() + 1;
    var nowDate = now.getDate();
    showDateDom.attr('data-year', nowYear);
    showDateDom.attr('data-month', nowMonth);
    showDateDom.attr('data-date', nowDate);
    // 数据初始化
    function formatYear (nowYear) {
        var arr = [];
        for (var i = nowYear - 5; i <= nowYear + 5; i++) {
            arr.push({
                id: i + '',
                value: i
            });
        }
        return arr;
    }
    function formatMonth () {
        var arr = [];
        for (var i = 1; i <= 12; i++) {
            arr.push({
                id: i + '',
                value: i
            });
        }
        return arr;
    }
    function formatDate (count) {
        var arr = [];
        for (var i = 1; i <= count; i++) {
            arr.push({
                id: i + '',
                value: i
            });
        }
        return arr;
    }
    var yearData = function(callback) {
        // settimeout只是模拟异步请求，真实情况可以去掉
        // setTimeout(function() {
            callback(formatYear(nowYear))
        // }, 2000)
    }
    var monthData = function (year, callback) {
        // settimeout只是模拟异步请求，真实情况可以去掉
        // setTimeout(function() {
            callback(formatMonth());
        // }, 2000);
    };
    var dateData = function (year, month, callback) {
        // settimeout只是模拟异步请求，真实情况可以去掉
        // setTimeout(function() {
            if (/^(1|3|5|7|8|10|12)$/.test(month)) {
                callback(formatDate(31));
            }
            else if (/^(4|6|9|11)$/.test(month)) {
                callback(formatDate(30));
            }
            else if (/^2$/.test(month)) {
                if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
                    callback(formatDate(29));
                }
                else {
                    callback(formatDate(28));
                }
            }
            else {
                throw new Error('month is illegal');
            }
        // }, 2000);
        // ajax请求可以这样写
        /*
        $.ajax({
            type: 'get',
            url: '/example',
            success: function(data) {
                callback(data);
            }
        });
        */
    };
    selectDateDom.bind('click', function () {
        var oneLevelId = showDateDom.attr('data-year');
        var twoLevelId = showDateDom.attr('data-month');
        var threeLevelId = showDateDom.attr('data-date');
        var iosSelect = new IosSelect(3, 
            [yearData, monthData, dateData],
            {
                title: '地址选择',
                itemHeight: 35,
                oneLevelId: oneLevelId,
                twoLevelId: twoLevelId,
                threeLevelId: threeLevelId,
                showLoading: true,
                callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
                    showDateDom.attr('data-year', selectOneObj.id);
                    showDateDom.attr('data-month', selectTwoObj.id);
                    showDateDom.attr('data-date', selectThreeObj.id);
                    showDateDom.val(selectOneObj.value + '-' + selectTwoObj.value + '-' + selectThreeObj.value);
                }
        });
    });
}

// 底部切换
$(function(){
  $(".page-footer .f-item").each(function(i,e){
    $(e).on("click",function(){
      $(this).addClass("active").siblings().removeClass("active")
    })
  })
})