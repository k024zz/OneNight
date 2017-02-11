//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //navigate to create game
  navigateToCreateGame: function() {
    wx.navigateTo({
      url: '/pages/createRoom/createRoom',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
        console.log("失败啦")
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //web request test
    wx.request({
      url: 'https://onenight.duapp.com/',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      }
    })

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
