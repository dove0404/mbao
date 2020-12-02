//index.js
//获取应用实例
const app = getApp()
// 导入封装好的网络请求函数request
import { getHomeData} from '../../service/home.js'

Page({
  data: {
    navList:[
      {
        name:1,
        cid:1,
        tittle:'童鞋',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:2,
        cid:2,
        tittle:'品质童装',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:3,
        cid:3,
        tittle:'纸尿裤',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:4,
        cid:4,
        tittle:'哺乳喂养',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:5,
        cid:5,
        tittle:'婴儿车',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:6,
        cid:6,
        tittle:'奶粉',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:7,
        cid:7,
        tittle:'图书玩具',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
      {
        name:8,
        cid:8,
        tittle:'更多',
        imgurl: '../../../../assets/icons/tongxie.png'
      },
    ],
    goods:[],
    showBackTop:false
  },
    /**
   * 生命周期函数--监听页面加载，页面加载完成立刻发送数据请求
   */
  onLoad: function (options) {
    this._getHomeData()
  },
  // ----------------------------网络请求函数-----------------------------------
  _getHomeData() {
    getHomeData().then(res => {
      const reconmend = res.data.message.goods;
      this.setData({
        goods: reconmend
      })
    })
  },

  // ----------------------------事假监听函数-----------------------------------
  // 监听页面滚动函数(待优化)
  onPageScroll(options) {
    const scrollTop = options.scrollTop;
    this.setData({
      showBackTop: scrollTop >= 500
    })
  }
})

