<template>
 <scroll-view
           :style="{'height':height}"
           :scroll-y="true"
            @scrolltolower="scrolltolower"
            @scroll="scroll">
  <div class="index_container" @click="clickHandle">
     
      <header>
        <div class="swiper_wrap">
            <div class="search_wrap">
              <div class="search_left">
                <span>WX</span>
              </div>
              <div style="height:30rpx;with:2rpx;border-right:1rpx solid #999999"></div>
              <div class="search_right">
                <i-icon type="search" size="20" color="#999999" />
                <span class="seacrch_placeholder_text">HuaWei手机</span>
              </div>
            </div>
            <swiper  autoplay circular>
                <block  v-for="(item,index) in imgUrls" :key="index">
                    <swiper-item>
                        <image mode="aspectFill" :src="item" width="100%" height="auto" />
                    </swiper-item>
                </block>
            </swiper>
        </div>
      </header>  
      <div class="main_container" :style="mainHeight">
          <div class="main_shop_menu">
              <main-shopmenu></main-shopmenu>
          </div>
      </div>
      <div class="main_gg">
        <div style="width:100%;height:100%">
          <img style="width:100%;height:100%" src="../../../static/images/shop/shop_img5.png" alt="">
        </div>
      </div>
      <div class="shop_showarea">
          <div class="shop_banner">
            <p class="shop_bannerlike_p">购物精选</p>
          </div>
          <div class="shop_list">
            <table  class="shop_table">
              <tr class="choiceness_item">
                <td>
                  <seconds-kill></seconds-kill>
                </td>
                <td class="shop_right_td">
                  <div v-for="i in 2" :key="i">
                    <choiceness-demo-three></choiceness-demo-three>
                  </div>
                </td>
              </tr>
              <tr class="choiceness_item">
                <td v-for="i in 2" :key="i"> 
                  <choiceness-demo-two></choiceness-demo-two>
                </td>
              </tr>
              <tr class="choiceness_item">
                <td v-for="i in 4" :key="i">
                  <choiceness-demo-one></choiceness-demo-one>
                </td>
              </tr>
            </table>
          </div>
      </div>
      <div class="shop_showarea">
          <div class="shop_banner">
            <p class="shop_bannerlike_p">猜你喜欢</p>
          </div>
          <div class="shop_list">
            <shop-showitem :shopList="cnxhShopList" @clickShopItem="handleShop"></shop-showitem>
          </div>
      </div>
      
     
  </div>
   </scroll-view>
</template>

<script>
import card from '@/components/card'
import mainShopmenu from '@/components/mainShopmenu'
import shopShowitem from '@/components/shopShowitem'
import choicenessDemoOne from '@/components/choiceness_demo1'
import choicenessDemoTwo from '@/components/choiceness_demo2'
import secondsKill from '@/components/shopSecondsKill'
import choicenessDemoThree from '@/components/choiceness_demo3'
import createSign from '@/common/createSign.js'
export default {

  data () {
    return {
      height:'',
      windowHeight:'',
      mainHeight:'',
      swiperHeight:'',
      imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      cnxhShopList:[],//猜你喜欢商品
      currentPage:1,
      totalPages: 0,

    }
  },
  components: {
    card,
    mainShopmenu,
    shopShowitem,
    choicenessDemoOne,
    choicenessDemoTwo,
    secondsKill,
    choicenessDemoThree
  },
  computed: {
    mainHeight:function(){
      return (this.windowHeight - this.swiperHeight) + "px"
    }
  },

  methods: {
    bindViewTap () {
     
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    handleShop(obj){
      console.log("获取商品obj",obj)
    },
    scrolltolower(){
      this.getHotShopDataMore()
    },
    getHotShopDataMore(){
      if( this.currentPage < this.totalPages ){
        this.currentPage ++
        this.getHotShopData()

      }
    },
    getHotShopData(){
      // var that = this
      wx.showLoading({
       title: '加载中',
      })
      this.$http.request({
        method:'get',
        url:`http://172.20.188.191:8111/api/home/getHotGoodsAndNewProducts.shtml`,
        body:{
          'sortId':1,
          'currentPage':this.currentPage,
          'pageSize':6,
        },
        headers:createSign(),
        
      }).then((res)=>{
        this.currentPage = res.data.pageInfo.currentPage
        this.totalPages = res.data.pageInfo.totalPages
        let shopArr = res.data.list;
        shopArr.map((item)=>{
          item.icon = `http://img.hapem.cn/${item.icon}`
          this.cnxhShopList.push(item)
        })
        wx.hideLoading({
          title: '加载中',
        })
       
      })

    }
  },

  created () {
    // let app = getApp()
   this.getHotShopData()

  },
    
  mounted() {
    var that = this
    wx.getSystemInfo({
          success: function(res) {
                that.windowHeight = res.windowHeight
                that.height = res.windowHeight+'px';
              }
          });
  },
}
</script>

<style scoped>
 .index_container{
  width:100%;
  height: 100%;
  position: relative;
 }
 .swiper_wrap{
   width:100%;
   height: 300rpx;
  
 }
 .swiper_wrap image{
   width: 100%;
   height: 100%;
 }
 .swiper_wrap{
   position: relative;
 }

 .search_wrap{
   width: 94%;
   height:60rpx;
   margin:0 auto;
   display:flex;
   position: absolute;
   border-radius: 60rpx;
   flex-direction: row;
   align-items: center;
   background: #ffffff;
   opacity: 0.5;
   z-index: 100;
   top: 20rpx;
   left: 3%;

 }
 .search_wrap > div{
   height: 40rpx;
 }
 .search_left{
   width:18%;
   font-weight: 700;
   color: #d90000;
   text-align:center;
   font-size: 30rpx;
 }
 .search_right{
   flex: 1;
   padding-left: 10rpx;
   line-height: 40rpx;
 }
 .seacrch_placeholder_text{
   color: #999999;
   font-size: 30rpx;
 }
 .main_container{
   width: 100%;
   height: 340rpx;
   border-radius: 30rpx;

   background: #ffffff;
   position: relative;
 }
 .main_shop_menu{
   width: 100%;
   height: 350rpx;
   top: -18rpx;
   z-index: 500;
   position: absolute;
   background:#ffffff;
   border-radius: 5%;
 }
 .shop_banner{
   width: 100%;
   height: 70rpx;
   line-height: 70rpx;
   font-size: 36rpx;
   font-weight: 600;
   border-bottom: 1rpx solid #ebebeb;
 }
 .shop_bannerlike_p{
   width: 94%;
   margin: 0 auto;
 }
 .choiceness_item{
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap
 }
 .choiceness_item > td{
   flex:1;
 }
 .shop_table{
    border: 1rpx solid #F0F0F0;
    border-top: 0rpx;
     border-collapse: collapse;
 }
 .shop_table td{
    border: 1rpx solid #F0F0F0;
   
 }
 .shop_right_td{
   display: flex;

 }
 .shop_right_td div{
   flex: 1
 }

 .shop_right_td div:first-child{
   border-right: 1rpx solid #F0F0F0;
 }
 .main_gg{
   width: 100%;
   height: 200rpx;
 }
</style>
