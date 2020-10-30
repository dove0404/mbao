Component({
  methods: {
    // 回到顶部
    handBackTop() {
      wx.pageScrollTo({
        scrollTop: 0,
      })
    }
  }
})
