// pages/home_video/index.js
import {getTopMVs} from '../../service/api_video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs:[],
    hasMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    // const res = await getTopMVs(0);
    // this.setData({ topMVs: res.data });
    this.getTopMVsData(0)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },
getTopMVsData: async function( offset){
  // 没有后续数据或者不是全部重载数据就直接禁止更新
  if(!this.data.hasMore && offset!==0)return 
  let newData = this.data.topMVs
  const res = await getTopMVs(offset)
  // 有偏移则追加请求数据,没有偏移就直接刷新重载数据
  if(offset === 0){
    newData = res.data
  }else{
    newData = newData.concat(res.data)
  }
  this.setData({ topMVs: newData})
  this.setData({ hasMore: res.hasMore})
},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function(){
    // if(!this.data.hasMore)return 
    // const res = await getTopMVs(this.data.topMVs.length)
    // this.setData({ topMVs:this.data.topMVs.concat(res.data)})
    // this.setData({ hasMore: res.hasMore})
    this.getTopMVsData(this.data.topMVs.length)
  },
  PullDownRefresh:async function(){
    // const res = await getTopMVs(this.res.data.length)
    // this.setData({ topMVs:this.data.topMVs.concat(res.data)})
    // this.setData({ hasMore: res.hasMore})
    this.getTopMVsData(0)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})