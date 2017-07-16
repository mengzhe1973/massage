// pages/home/home.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      app.globalData.urlBase + 'massage/images/banner1.png',
      app.globalData.urlBase + 'massage/images/banner1.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    categorys:[
      {
        "icon": app.globalData.urlBase + "massage/images/icon_foot.png",
        "text":"足部"
      },
      {
        "icon": app.globalData.urlBase + "massage/images/icon_doctor.png",
        "text": "中医"
      },
      {
        "icon": app.globalData.urlBase + "massage/images/icon_spafull.png",
        "text": "全身"
      }, {
        "icon": app.globalData.urlBase + "massage/images/icon_spaset.png",
        "text": "足疗套餐"
      },
      {
        "icon": app.globalData.urlBase + "massage/images/icon_member.png",
        "text": "会员"
      },
      {
        "icon": app.globalData.urlBase + "massage/images/icon_whitecollar.png",
        "text": "白领专区"
      }, {
        "icon": app.globalData.urlBase + "massage/images/icon_enhance.png",
        "text": "局部加强"
      },
      {
        "icon": app.globalData.urlBase + "massage/images/icon_plustime.png",
        "text": "加钟项目"
      }
    ],
    recommends:[
      {
        "image": app.globalData.urlBase + "massage/images/spa_foot2.png",
        "title": "梵境足道",
        "descripture": "运用中医传统推拿理疗手法",
        "price": "169元"
      },
      {
        "image": app.globalData.urlBase + "massage/images/spa_foot7.png",
        "title": "皇帝套餐",
        "descripture": "运用中医传统推拿理疗手法",
        "price": "299元"
      },
      {
        "image": app.globalData.urlBase + "massage/images/spa_spine.png",
        "title": "颈椎理疗",
        "descripture": "运用中医传统推拿理疗手法",
        "price": "189元"
      },
      {
        "image": app.globalData.urlBase + "massage/images/spa_chinese.png",
        "title": "中式雅致",
        "descripture": "运用中医传统推拿理疗手法",
        "price": "139元"
      }
    ],
    guessLikes:[
      {
        "image": app.globalData.urlBase + "massage/images/spa_ai.png",
        "question": "人间有艾,天下无癌",
        "answer": "赶快行动起来吧~"
      },
      {
        "image": app.globalData.urlBase + "massage/images/breakfast.png",
        "question": "早餐应该吃什么?",
        "answer": "早餐吃得好,健康美容又醒脑~"
      },
      {
        "image": app.globalData.urlBase + "massage/images/warm_drink.png",
        "question": "冬季手脚冰凉怎么办?",
        "answer": "几个妙招帮你回暖~"
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
  
  }
})