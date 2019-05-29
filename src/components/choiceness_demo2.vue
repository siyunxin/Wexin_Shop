<template>
    <div class="containertwo">
        <div class="box">
            <p class="header">
                <span class="title">京东药房</span>
                <span class="subtitle">平价药房</span>
            </p>
        </div>
        <div class="shop_imgbox">
            <img src="../../static/images/shop/shop_img1.png" alt="">
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.containertwo{
    width: 100%;
    height: 270rpx;
    font-size: 34rpx;
   
}
.box, .shop_imgbox{
    width: 90%;
    margin: 0 auto;

}
.containertwo .header{

    width: 100%;
    height: 88rpx;
    line-height: 88rpx;

}
.containertwo .title{
    font-weight: bold
}
.containertwo .subtitle{
    color: #9B9B9B;
}
.containertwo .shop_imgbox{
    height: 180rpx;
    
}

.containertwo .shop_imgbox >img{
    width: 100%;
    height: 100%;
}



</style>
