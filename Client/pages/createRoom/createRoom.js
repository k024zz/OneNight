Page({
  data: {
    people: [5, 6, 7],
    index: 0,
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindSwitchNewbieChange: function(e) {
    if(e.detail.value) {
      this.setData({
        status_newbie: '开启'
      })
    } else {
      this.setData({
        status_newbie: '关闭'
      })
    }
  },
  navigateBack: function() {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad: function() {
    this.setData({
      status_newbie: '关闭'
    })
  }
})