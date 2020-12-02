// pages/goodList/components/navTop/navTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navTopList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cutrrentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handItemClick(event) {
      //1.取出index
      const index = event.currentTarget.dataset.index;
      //2.修改currentIndex
      this.setData({
        cutrrentIndex: index
      })
    }
  }
})
