// pages/detial/ImageSwper/ImageSwiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bigImgList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPreviewImage(e) {
      const current = e.currentTarget.dataset.url; //取出传进来的url
      const urls =  this.data.bigImgList.map(v=>v.pics_big) //解构bigImgList并重组成新的url数组
      console.log(current);
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls:urls // 需要预览的图片http链接列表
      })
    }
  }
})
