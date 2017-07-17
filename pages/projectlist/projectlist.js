//index.js 
//获取应用实例 
var app = getApp()
Page({
  data: {
    // 页面配置  
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
    //数据源
    massagists: [
      {
        "avatar": app.globalData.urlBase + "massage/images/technician1.png",
        "pro_name": "梵境足道",
        "sales_volume": "16666",
        "introduce": "[五星服务]",
        "pro": "[足疗项目]",
        "price": "169",
        "time": "60"
      },
      {
        "avatar": app.globalData.urlBase + "massage/images/technician1.png",
        "pro_name": "上品足浴",
        "sales_volume": "16666",
        "introduce": "[五星服务]",
        "pro": "[足疗项目]",
        "price": "159",
        "time": "60"
      },
      {
        "avatar": app.globalData.urlBase + "massage/images/technician1.png",
        "pro_name": "精英足浴",
        "sales_volume": "16666",
        "introduce": "[五星服务]",
        "pro": "[足疗项目]",
        "price": "166",
        "time": "60"
      },
      {
        "avatar": app.globalData.urlBase + "massage/images/technician1.png",
        "pro_name": "帮帮足浴",
        "sales_volume": "16666",
        "introduce": "[五星服务]",
        "pro": "[足疗项目]",
        "price": "168",
        "time": "60"
      },
      {
        "avatar": app.globalData.urlBase + "massage/images/technician1.png",
        "pro_name": "致品足浴",
        "sales_volume": "16666",
        "introduce": "[五星服务]",
        "pro": "[足疗项目]",
        "price": "299",
        "time": "60"
      },
      {
        "avatar": app.globalData.urlBase + "massage/images/technician1.png",
        "pro_name": "仙品足浴",
        "sales_volume": "16666",
        "introduce": "[五星服务]",
        "pro": "[足疗项目]",
        "price": "266",
        "time": "60"
      }
    ]
  },
  onLoad: function () {
    var that = this;
    // 获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
}) 