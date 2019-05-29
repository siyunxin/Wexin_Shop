<template>
    <div class="secondskill">
        <div class="box">
            <div class="kill_title">
                限时秒杀
            </div>
            <div class="kill_time">
                   <div class="time">
                       12点场
                   </div>
                   <div class="counttime">
                       1:39:41
                   </div>
            </div>
        </div>
        <div class="shopshow_img">
            <img src="../../static/images/shop/shop_img3.png" alt="">
        </div>  
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .secondskill{
        width: 100%;
        height: 300rpx;
    }
    .secondskill .box{
        margin-left:5%; 
        height: 88rpx;
        display: flex;
        align-items: center

    }
    .shopshow_img{
        width: 90%;
        height: 220rpx;
    }
    .shopshow_img > img{
        width: 100%;
        height: 100%;
    }
    .kill_title{
        font-size: 34rpx;
        font-weight: bold;
    }
    .kill_time{
        height: 40rpx;
        font-size: 28rpx;
        line-height: 40rpx;
        border: 1rpx solid #E83A3D;
        border-radius: 10rpx;
        display: flex;
       
    }
    .kill_time .time{
       
        height: 100%;
        display: inline-block;
        background: #E83A3D;
        color: #ffffff;
         padding:0 2rpx 0 4rpx;
    }

</style>
