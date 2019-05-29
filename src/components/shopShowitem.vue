<template>
    <div class="shoplike_wrap">
        <div class="shoplike_item" v-for="(item,index) in shopList" :key="index"  @click="clickShopItem(item)" >
            <div class="shoplike_header">
                <img :src="item.icon" alt="">
            </div>
            <div class="shoplike_desc">
                <div class="shoplike_info">
                    <div class="shoplike_title">
                        <span class="shoplike_label">云溪超市</span><span>{{ item.wzName }}</span>
                    </div>
                </div>
            </div>
            <div class="shop_price">
                <div>
                    <div class="shop_price_yuanjia">
                        <span>￥</span><span>{{ item.platformMarketPrice }}</span><span class="iconfont icon-quan icon"></span>
                    </div>
                    <div class="shop_price_youhuijia">
                        <span>￥</span><span>{{ item.platformSalePrice }}</span><span class="iconfont icon-huiyuanvip icon"></span>
                    </div>
                </div>
                <div class="shop_more">
                    <span>...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props:{
      shopList:[]
  },  
  data() {
    return {
        shopimg: require('../../static/images/shop/shop_img.png')
    };
  },
  methods: {
      clickShopItem(obj){
          console.log("传",obj)
          this.$emit('clickShopItem',obj)
      }
  },
  mounted() {}
};
</script>

<style scoped>
    .shoplike_wrap{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .shoplike_item{
        width: 49%;
        height: 580rpx;
    }
   
    .shoplike_header{
        width: 340rpx;
        height: 340rpx;
        margin: 0 auto;
    }
    .shoplike_header>img{
        width: 100%;
        height: 100%;
    }
    .shoplike_desc{
        width: 90%;
        margin: 20rpx auto;
        font-size: 28rpx;
        overflow: hidden;
        text-overflow: ellipsis;         
        display: -webkit-box;
        -webkit-line-clamp: 2;        
        -webkit-box-orient: vertical;

    }
    .shoplike_label{
        width: 120rpx;
        height: 36rpx;
        line-height: 36rpx;
        text-align: center;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        padding: 6rpx 6rpx;
        background: #b90000;
        color: #ffffff;
        font-weight: 700;
        display: inline-block;
        border-radius: 5rpx;

    }
    .shop_price{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between

    }
    .shop_price > div{
        width: 50%

    }
    .shop_price_yuanjia{
        font-size:36rpx;
        color: #b90000;
    }
    .shop_price_youhuijia{
        font-size: 30rpx;
        color: #999999;
    }
    .shop_more{
        text-align: right;
    }
    .shop_more > span{
        width: 60rpx;
        height: 36rpx;
        display: inline-block;
        line-height: 36rpx;
        font-size: 40rpx;
        font-weight: 600;
        color: #bcbcbc;
    }
    .shop_price .icon{
        margin-left: 12rpx;
    }
</style>
