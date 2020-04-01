// pages/sendout/sendout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  onShareAppMessage: function (ops) {
    console.log(ops)
    //转发事件来源。
    //button：页面内转发按钮；
    //menu：右上角转发菜单

    if (ops.from === 'button') {
      var title = ops.target.dataset.title;
    };
    return {
      title: "想要分享的文字改了", //转发的标题。当前小程序名称
      path: `pages/index/index`, //转发的路径
      imageUrl: '/assets/images/share.jpg',//自定义图片路径 支持PNG及JPG。显示图片长宽比是 5:4。
      success: function (res) {
          // 转发成功
          var shareTickets = res.shareTickets;
          wx.showToast('转发成功');
      },
      fail: function (res) {
          // 转发失败
          api.showToast("转发失败:" + JSON.stringify(res));
      }

      //由于版本更新，现在不能监听回调成功还是失败。
      //分享的内容是都会被成功发出
      //如果一定要回调的话可根据需求自定，目前小编还没有更好的办法。
    }
  }
})