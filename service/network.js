// A.同时发送数据请求的次数(场景：当某页面多次发送数据请求时，会出现多个“加载中”提示，解决方法：每次发送都做下计数，在最后请求完成时再关闭加载提示)
let ajaxTimes = 0;
// 在微信默认网络请求AIP上再封装一个request函数，后续二次封装使用request请求数据
export default function request(options) {
  // A1.每调用一次request进行数据请求就ajaxTimes+1
  ajaxTimes++;

  // B1.实现在发送数据请求前先弹窗提示“加载中...”,然后再在数据请求完成后关闭加载提示
  wx.showLoading({
    title: '加载中...',
  })
  return new Promise((resolve,reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
      // B2.无论加载成功或失败都会执行以下代码
      complete: () => {
        // A2.每请求完成一次数据就将ajaxTimes-1
        ajaxTimes--;
        // A3.判断ajaxTimes=0时证明最后一次数据请求完成，可以关闭加载提示
        if(ajaxTimes===0){
          //B3. 关闭“加载中”提示
          wx.hideLoading();
        }
      }
    })
  })
}