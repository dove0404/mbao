// pages/goodList/goodList.js
import{ getGoodListData } from '../../service/goodList'
Page({
  data: {
    goods:[]
  },
  // 请求数据接口需要的参数
  QueryParams:{
    cid:'',
    pagenum:1,
    pagesize: 10,
  },
  // 总条数
  total:'',
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.获取传入的cid
    this.QueryParams.cid = options.cid
    // 直接调用下面封装号的函数即可
    this._getGoodListData()
  },
  // ----------------------------网络请求函数----------------------------------
  // 将请求结果封装成_getGoodListData函数，上面直接调用即可
  _getGoodListData() {
    getGoodListData(this.QueryParams).then(res =>{
    console.log(res)
    const goodsList = res.data.message.goods;
    this.total = res.data.message.total;
    this.setData({
      // 对请求回来的数组进行拼接：第一页10条，第2页10条...
      goods: [ ...this.data.goods,...goodsList],
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
    // 判断还有没有下一页，如果有则加载下一页
    if(this.data.goods.length < this.total){
      console.log(this.data.goods.length)
      // 页码+1再请求页数
      this.QueryParams.pagenum++;
      this._getGoodListData()
    }else{
      console.log('没有下一页')
    }
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})