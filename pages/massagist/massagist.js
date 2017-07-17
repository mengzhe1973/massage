// pages/massagist/massagist.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    massagists:[
      {
        "avatar": app.globalData.urlBase + "massage/images/technician1.png",
        "name":"暖心",
        "type":"健康师",
        "introduce":"非常不错的技法",
        "distance":"0.18Km",
        "rate":"3"
      },
      {
        "avatar": app.globalData.urlBase + "massage/images/technician1.png",
        "name": "暖心2",
        "type": "健康师",
        "introduce": "服务态度好",
        "distance": "5.18Km",
        "rate": "3"
      },
      {
        "avatar": app.globalData.urlBase + "massage/images/technician1.png",
        "name": "暖心3",
        "type": "健康师",
        "introduce": "可以约啊",
        "distance": "10.16Km",
        "rate": "3"
      },
      {
        "avatar": app.globalData.urlBase + "massage/images/technician1.png",
        "name": "暖心4",
        "type": "健康师",
        "introduce": "可以约啊",
        "distance": "19.16Km",
        "rate": "3"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  onItemClick: function(){
    wx.navigateTo({
      url: '/pages/masterlist/masterlist',
    })
  }
})