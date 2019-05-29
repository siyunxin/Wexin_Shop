<template>
 <div class="father-div">
    <div class="m-myfather-div">
    <div class="m-header-div">
        <div class="g-txfather-div">
              <image class="g-tx" src="../../static/images/wode/touxiang.jpg"></image>
        </div>
        <div  class="m-ewmfather-div">
            <div class="g-ewmfather-div">
                <div class="g-nc-div" >nsdjfnlsdfonsfjn</div>
              <div class="g-ewm-div"> 
                  <image  class="g-ewm" src="../../static/images/wode/erweima.png"></image>
              </div>
            </div>
            <div class="g-sjhy-div">
              升级至正式会员
          </div>
        </div>       
    </div>
    </div>      
      <div class="m-ddfather-div">
      <div class="g-jrfather-div">
        <div class="g-wddd-div">我的订单</div>
        <div class="g-jr-div">
          <div class="g-ckqb-div">
           查看全部
          </div>
       <div>
            <image  class="g-jr" src="../../static/images/wode/jinru.png" />
       </div>
        </div>
      </div>
        <div style="height:1rpx; width: 92%;margin:0 auto;background:#eaeaea;"></div>
        <i-grid i-class="igrid ig" >
        <i-grid-item i-class="igrid-item" v-for="(item, index) in myddlist" :key="index"  @click="selectNavItem(index,item.pagePath)">
            <i-grid-icon i-class="igrid-icon">
                <image :src="item.icon" />
            </i-grid-icon>
            <i-grid-label i-class="igrid-font">{{item.text}}</i-grid-label>
        </i-grid-item>
  </i-grid>
    </div>
         
    <div class="g-yhj-class">
        <i-grid  i-class="igrid">
            <i-grid-item i-class="igrid-item" v-for="(item, index) in myyhjlist" :key="index"  @click="selectNavItem(index,item.pagePath)">
            <i-grid-icon i-class="igrid-yhj-icon">
              {{item.num}}
            </i-grid-icon>
            <i-grid-label i-class="igrid-font">{{item.text}}</i-grid-label>
        </i-grid-item>       
    </i-grid>
    </div>
    <div class="g-bbgj-div" >
     <div class="g-jrfather-div">
        <div class="g-wddd-div">必备工具</div>
      </div>
        <div style="height:1rpx; width: 92%;margin:0 auto;background:#eaeaea;"></div>
        <i-grid  i-class="igrid">
            <i-grid-item  i-class="igrid-item" v-for="(item, index) in bbgjlist" :key="index" @click="selectNavItem(index,item.pagePath)"  >
           
               <i-grid-icon  i-class="igrid-icon">
                <image v-if="item.icon" :src="item.icon" />
               <span class="igrid-yhj-icon">{{item.num}}</span>
            </i-grid-icon>
            <i-grid-label i-class="igrid-font">{{item.text}}</i-grid-label>
        </i-grid-item>
          </i-grid>
           <i-grid  i-class="igrid">
            <i-grid-item  i-class="igrid-item" v-for="(item, index) in bbgjlisttwo" :key="index" @click="selectNavItem(index,item.pagePath)"  >
               <i-grid-icon  i-class="igrid-icon">
                <image :src="item.icon" />             
            </i-grid-icon>
            <i-grid-label i-class="igrid-font">{{item.text}}</i-grid-label>
        </i-grid-item>
          </i-grid>
    </div>

 </div>
</template>

<script>
export default {
  computed: {
    count () {

    }
  },
  data() {
    return {
      myddlist:[
        {
          icon:'../../static/images/wode/daizhifu.png',
          text:'待支付',
           pagePath: '../notice/main'
        },
        {
          icon:'../../static/images/wode/daishouhuo.png',
          text:'待收货',
           pagePath: '../notice/main'
        },
        {
          icon:'../../static/images/wode/daipingjia.png',
          text:'待评价',
           pagePath: '../notice/main'
        },
        {
          icon:'../../static/images/wode/tuihuanshouhou.png',
          text:'退换/售后',
           pagePath: '../notice/main'
        },
        {
          icon:'../../static/images/wode/changgouqingdan.png',
          text:'常购清单',
           pagePath: '../notice/main'
        }
      ],
       myyhjlist:[
        {
          num:0,
          text:'优惠卷',
           pagePath: '../notice/main'
        },
        {
          num:0,
          text:'领云钻',
           pagePath: '../notice/main'
        },
        {
          num:0,
          text:'任性付',
           pagePath: '../notice/main'
        },
        {
          num:'+0.00',
          text:'零钱宝',
           pagePath: '../notice/main'
        }
       
      ],
      bbgjlist:[
        {
          num:0,
          text:'商品关注',
           pagePath: '../notice/main'
        },
        {
          num:0,
          text:'店铺关注',
           pagePath: '../notice/main'
        },
        {
          icon:'../../static/images/wode/kehufuwu.png',
          text:'客户服务',
           pagePath: '../notice/main'
        },  
        {
              icon:'../../static/images/wode/yijianfankui.png',
              text:'意见反馈',
               pagePath: '../notice/main'
              }
      ],
        bbgjlisttwo:[
           {
              icon:'../../static/images/wode/lingjuan.png',
              text:'领卷',
               pagePath: '../notice/main'
            },
            {
              icon:'../../static/images/wode/qiehuan.png',
              text:'切换/升级',
               pagePath: '../notice/main'
            },{},{}      
      ],
 
    }
  },
  methods: {   
    selectNavItem(index,pagePath) {
      console.log(pagePath)
        const url = pagePath
       mpvue.navigateTo({ url})
    }
   
  },
  
  
}
</script>

<style>
page{
  background: #f2f2f2;
}
.father-div{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.m-myfather-div{
  position: relative;
   width: 100%;
  padding: 0;
  margin: 0;
  height:300rpx;
  background: #fe9900; 
}
.clear{ clear:both} 
.m-header-div{
display: flex;
justify-content: flex-start;
}
.g-txfather-div{
  margin-top: 5rpx;
  margin-left: 55rpx;
}
.m-ewmfather-div{
 margin-top: 35rpx;
margin-left: 25rpx;
}
.g-ewmfather-div{
   display: flex;
  justify-content: flex-start;
   height: 40rpx;
   line-height: 40rpx;
 
}

.g-tx{
  width: 140rpx;
  height: 140rpx;
  border-radius: 150rpx;
}
.g-ewm{
  width: 38rpx;
  height:38rpx;
}
.g-nc-div{
  font-size: 32rpx;
  color:#fff;
  width:180rpx;
  overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-weight:lighter;
}
.g-sjhy-div{
  width: 170rpx;
  height: 32rpx;
  text-align: center;
  background:#b26f01;
  font-size: 20rpx; 
  border-radius: 15rpx;
  margin-top: 15rpx;
  color: #fff;
  line-height: 32rpx;

}
.m-body-div{
  width: 100%;
  /* background: #f2f2f2; */
  /* height: 800rpx; */
  overflow: hidden;
}
.m-ddfather-div{
  position: absolute;
  top: 180rpx;
  width: 94%;
  left: 3%;
  height: 255rpx;
  border-radius: 30rpx;
  background: #fff;
}
.g-jrfather-div{
  width: 95%;
  height: 30rpx;
  margin: 25rpx auto; 
  margin-bottom: 32rpx;
  display: flex;
  justify-content: space-between;
}

  .g-wddd-div{
    font-size: 28rpx;
    letter-spacing:3rpx;
    line-height:  30rpx;
  }
  .g-jr-div{
  display: flex;
  justify-content: flex-end;
  }
  .g-jr{
  width:37rpx;
  height: 37rpx;
 margin-bottom:5rpx;
  }
  .g-ckqb-div{
  font-size: 25rpx;
  color: #9f9f9f;
  }
  .igrid{
  border: none!important;
  width: 92%;
  margin:  0 auto;
  padding-top: 25rpx;
 
}
.igrid-item{
    border: none!important;
     padding:8rpx 0rpx!important;
}
.igrid-icon{
  width: 50rpx !important;
  height: 50rpx !important; 
  }
.igrid-font{
  font-size: 25rpx!important;
  color: #919191!important;
}
.igrid-yhj-icon{
  font-size:30rpx;
  color: #fe883a;
  text-align: center;
}
.g-yhj-class{
  height: 190rpx;
  width: 94%;
  margin:  0 auto;
  border-radius: 30rpx;
  background: #fff;
  margin-top: 155rpx;
}
.g-bbgj-div{
   height: 390rpx;
  width: 94%;
  margin:  0 auto;
  border-radius: 30rpx;
  background: #fff;
  margin-top:15rpx;
  overflow: hidden;
}
.g-bbgj-text{
  width:95%;
height:30rpx;
margin:28rpx auto;
/* margin-bottom:32rpx; */
font-size:30rpx;
letter-spacing:3rpx;
/* line-height:30rpx; */

}
</style>
