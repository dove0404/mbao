// 在微信默认网络请求AIP上再封装一个request函数，后续二次封装使用request请求数据
export default function request(options) {
  return new Promise((resolve,reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}