// 网络请求二次封装，后续所有有关列表页的数据都在这里请求
import request from './network.js';

const baseURl = 'https://api-hmugo-web.itheima.net/api';

export function getGoodListData(QueryParams) {
  return request({
    url: baseURl + '/public/v1/goods/search',
    data: {
      cid: QueryParams.cid,
      pagesize: QueryParams.pagesize,
      pagenum: QueryParams.pagenum
    }
  })
}
