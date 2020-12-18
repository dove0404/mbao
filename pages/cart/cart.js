// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartGoods:[],
    allChecked:false,
    totalPrice:0,
    totalNum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 获取缓存数据
    const cart = wx.getStorageSync('cart')||[];
    // 计算全选
    // 1.every 数组方法：遍历数组，会接收一个回调函数，当每一个回调函数都返回true时，every则返回true；
    // 只要有一个返回false，则停止循环，直接返回fale
    // 2.空数组调用 every，返回值就是 true
    const allChecked = cart.length?cart.every(v=>v.ischecked):false;
    // 计算总价格和总数量
    let totalPrice = 0;
    let totalNum = 0;
    // 遍历cart，只要v.checked为true则执行价格计算
    cart.forEach(v=>{
      if(v.ischecked){
        totalPrice += v.num*v.goods_price;
        totalNum += v.num;
        console.log(totalNum)
      }
    })
    this.setData({
      cartGoods:cart,
      allChecked,
      totalPrice,
      totalNum
    })
  },
})