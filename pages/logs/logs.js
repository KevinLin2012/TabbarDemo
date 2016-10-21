//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        /*
        //setData测试
        for(let i=0; i < 10; i++){
          console.log("i:"+i);
        }
        */
        return util.formatTime(new Date(log))
      })
    })
  }
})
