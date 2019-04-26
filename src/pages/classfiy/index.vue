<template>
  <div class="classfiywrap">
    <header class="classfiy_header">
      <div class="input_wrap">
        <input
          type="text"
          v-model="shopName"
          placeholder="请输入商品名称"
          class="classfiy_input"
          placeholder-class="placeholdercenter"
        >
      </div>
    </header>
    <div class="classfiy_body">
      <div class="body_left">
        <left-menu :scrollHeight="height"></left-menu>
      </div>
      <div class="body_right">
        <scroll-view
           :style="{'height':height}"
           :scroll-y="true"
            @scrolltolower="scrolltolower"
            @scroll="scroll">
        <div class="advert_wrap">
          <div class="advert_imgbox">广告占位</div>
        </div>
        <div class="shop_classfiy">
            <div class="shop_classfiy_item">
              <div class="shop_classfiy_title">
                <p>品牌手机</p>
              </div>
              <div class="shop_brand">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
            </div>
            <div class="shop_classfiy_item">
              <div class="shop_classfiy_title">
                <p>品牌手机</p>
              </div>
              <div class="shop_brand">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
            </div>
          </div>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from "@/utils/index";
import leftMenu from "@/components/classfiyMenu";

export default {
  components: {
    leftMenu
  },

  data() {
    return {
      shopName: "",
      screenH:'',
      topH:'' 
    };
  },
  onLoad(){
   
  },
  computed:{
    'height':function(){
        return (this.screenH - this.topH) + 'px'
    }
  },
  
  methods: {
     //获取小程序屏幕高度
        getHeight(){

          let that =  this
           wx.getSystemInfo({
          success: function(res) {
                that.screenH = res.windowHeight
              }
          });
          let query = wx.createSelectorQuery();
          query.select('.classfiy_header').boundingClientRect(function(rect){
            that.topH = rect.height;
          }).exec();
         
          },
        //获取滑动区域的高度
        getTopHeight(){
           
         
        },
        scrolltolower(){

        }
  },
  created() {
    
  },
  mounted() {
    this.getHeight()
  },
};
</script>

<style>
.classfiywrap {
  width: 100%;
  height: 100%;
}
.classfiy_header {
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  border-top: 1rpx solid #eeeeee;
  border-bottom: 1rpx solid #eeeeee;
}
.placeholdercenter {
  text-align: center;
  font-size: 26rpx;
}
.classfiy_input {
  border-radius: 25rpx;
  background: #f1f1f1;
}
.input_wrap {
  width: 90%;
  height: 60rpx;
  margin: 0 auto;
  border-radius: 25rpx;
}
.classfiy_body {
  width: 100%;
  display: flex;
}
.body_left {
  width: 160rpx;
  height: 100%;
 
}
.body_right {
  flex: 1;
  height: 100%;
}
.advert_wrap {
  width: 100%;
  height: 252rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.advert_imgbox {
  width: 542rpx;
  height: 198rpx;
  border: 1rpx solid yellow;
}
.shop_classfiy{
  width: 100%;
}
.shop_classfiy_item{
   width: 542rpx;
   margin: 0 auto;
}
.shop_classfiy_item>div{
  
}
.shop_brand{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.shop_brand > div{
  width: 146rpx;
  height: 146rpx;
  border: 1px solid #000;
  margin: 20rpx 0;
}

</style>
