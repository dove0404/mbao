//index.js
//获取应用实例
const app = getApp()
// 导入封装好的网络请求函数request
import request from '../../service/network.js'

Page({
  data: {
    navList:[
      {
        name:1,
        tittle:'童鞋',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:2,
        tittle:'品质童装',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:3,
        tittle:'纸尿裤',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:4,
        tittle:'哺乳喂养',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:5,
        tittle:'婴儿车',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:6,
        tittle:'奶粉',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:7,
        tittle:'图书玩具',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:8,
        tittle:'更多',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
    ],
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
    ],
    showBackTop:false
  },
    /**
   * 生命周期函数--监听页面加载，页面加载完成立刻发送数据请求
   */
  onLoad: function (options) {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
  },
  // 监听页面滚动函数(待优化)
  onPageScroll(options) {
    const scrollTop = options.scrollTop;
    this.setData({
      showBackTop: scrollTop >= 500
    })
  }
})

