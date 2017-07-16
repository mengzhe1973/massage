// pages/introduction/introduction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "pro_name": "梵境足道",
    "pro_price": "169",
    "time": "60",
    "sales_volume": "166666",
    "day_price": "159",
    "isFold1": true,
    "isFold2": true,
    "isFold3": true,
    "more_content": "运用中医传统推拿理疗手法对足部64个反射区进行针对性调理,协调脏腑,平衡阴阳."
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

  flodFn: function (e) {
    var id = e.target.dataset.id;
    switch (id) {
      case "1":
        this.setData({
          isFold1: !this.data.isFold1
        });
        break;
      case "2":
        this.setData({
          isFold2: !this.data.isFold2
        });
        break;
      case "3":
        this.setData({
          isFold3: !this.data.isFold3
        });
        break;
      default:
        break;
    }
  },
})