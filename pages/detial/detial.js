import { getDetialData } from '../../service/detial';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetial:{},
    goods:[
      {
        tittle:'babycare儿童水杯三合一多用吸管杯',
        imgurl:'http://img30.360buyimg.com/popWareDetail/jfs/t1/120814/35/8235/101223/5f23b42fE1757e59d/dc4fc720faf68b0a.jpg',
        price:388,
        oldPrice:600
      },
      {
        tittle:'babycare儿童水杯三合一多用吸管杯',
        imgurl:'https://img13.360buyimg.com/imgzone/jfs/t1/124599/26/16300/101100/5f969c94E4cd12b15/ba4735a730c97491.jpg',
        price:166,
        oldPrice:530
      },
      {
        tittle:'babycare儿童水杯三合一多用吸管杯',
        imgurl:'http://img30.360buyimg.com/popWareDetail/jfs/t1/147496/5/10332/204135/5f815356Ee3bdb99e/544dca8fb323e415.jpg',
        price:88,
        oldPrice:360
      },
      {
        tittle:'babycare儿童水杯三合一多用吸管杯',
        imgurl:'http://img30.360buyimg.com/popWareDetail/jfs/t1/120814/35/8235/101223/5f23b42fE1757e59d/dc4fc720faf68b0a.jpg',
        price:388,
        oldPrice:600
      },
      {
        tittle:'babycare儿童水杯三合一多用吸管杯',
        imgurl:'https://img13.360buyimg.com/imgzone/jfs/t1/124599/26/16300/101100/5f969c94E4cd12b15/ba4735a730c97491.jpg',
        price:166,
        oldPrice:530
      },
      {
        tittle:'babycare儿童水杯三合一多用吸管杯',
        imgurl:'http://img30.360buyimg.com/popWareDetail/jfs/t1/147496/5/10332/204135/5f815356Ee3bdb99e/544dca8fb323e415.jpg',
        price:88,
        oldPrice:360
      }
    ]
  },
  goodsInfo:{}, //定义一个全局对象给下面加入购物车对比调用
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const goods_id = options;
    this._getDetialData(goods_id);
  },
  _getDetialData(goods_id) {
    getDetialData(goods_id).then(res =>{
      const goodsObj = res.data;
      this.goodsInfo = goodsObj
      this.setData({
        //1.优化前：将请求回来的全部数据都赋值到goodsDetial
        // goodsDetial:goodObj;

        // 2.优化后：只取我们需要的数据
        goodsDetial:{
          goods_price:goodsObj.message.goods_price,
          goods_name:goodsObj.message.goods_name,
          // （下面goods_introduce富文本里面可能会存在.webp格式的图片，IOS不支持，会导致无法渲染）
          // （解决：加上正则替换：replace(/\.webp/g,'.jpg')临时修改 1.webp => 1.jpg）
          goods_introduce:goodsObj.message.goods_introduce.replace(/\.webp/g,'.jpg'),
          pics:goodsObj.message.pics
        }
      })
    })
  },
  handleCartAdd() {
    // 1.获取缓存中购物车数据（数组）
    let cart = wx.getStorageSync('cart') || [];  //若缓存中cart是空的会返回null字符串，这时我们用空数组代替[]
    // 2.判断当前商品是否已存在于购物车
    let index = cart.findIndex(v=>v.goods_id === this.goodsInfo.message.goods_id);
      if(index === -1){
        // 2.2 不存在 直接给购物车数组添加新元素，并带上数量属性num 重新把购物车数组填回缓存
        this.goodsInfo.message.num = 1;
        cart.push(this.goodsInfo.message);
      }else{
        // 2.1 若存在 修改商品数据 执行购物车数量++ 重新把购物车数组填回缓存
        cart[index].num++;
      }
      // 3.把购物车重新添加回缓存中
      wx.setStorageSync('cart', cart);
    // 3.弹出“加入购物车成功”
    console.log(this.goodsInfo.message)
  }
})