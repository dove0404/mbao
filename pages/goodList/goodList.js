// pages/goodList/goodList.js
import{ getGoodListData } from '../../service/goodList'
Page({
  data: {
    goods:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // 直接调用下面封装号的函数即可
    this._getGoodListData()
  },
  // ----------------------------网络请求函数----------------------------------
  // 将请求结果封装成_getGoodListData函数，上面直接调用即可
  _getGoodListData() {
    getGoodListData().then(res =>{
    const goodsList = res.data.message.goods;
    this.setData({
      goods: goodsList
    })
    })
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