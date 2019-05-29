<template>
    <div class="containerone">
        <div class="header">
            <p class="title">电脑办公</p>
            <p class="subtitle">轻薄优选</p>
        </div>
        <div class="shopimg">
            <img src="../../static/images/shop/shop_img2.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){

    },
    methods: {
        
    },
    mounted() {
        
    },
}
</script>

<style scoped>
.containerone{
    width: 100%;
    height: 300rpx;

}
.containerone .header{
    width: 90%;
    height: 100rpx;
    padding: 10rpx 0;
    margin: 0 auto;
    /* line-height: 88rpx; */
    font-size: 34rpx;
}
.containerone .title{
    font-weight: 600;

}
.containerone .subtitle{
    font-weight: 600;
    color: #dddddd;
}
.containerone .shopimg{
    width:90%;
    margin: 0 auto;
    height: 180rpx;
}
.shopimg img{
    width: 100%;
    height: 100%;
}

</style>
