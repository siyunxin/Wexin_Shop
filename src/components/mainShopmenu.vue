<template>
    <div class="menu_container">
        <div class="menu_box" @click="clickShopMenu()">
            <div class="menu_icon">
                <i class="iconfont icon-youhuiquan"></i>
            </div>
            <div class="menu_icon_desc">
                <span>领优惠券</span>
            </div>
        </div>
        <div class="menu_box">
            <div class="menu_icon">
                <i class="iconfont icon-tiantianshangou"></i>
            </div>
            <div class="menu_icon_desc">
                <span>天天闪购</span>
            </div>
        </div>
        <div class="menu_box">
            <div class="menu_icon">
                <i class="iconfont icon-tushu"></i>
            </div>
            <div class="menu_icon_desc">
                <span>图书</span>
            </div>
        </div>
        <div class="menu_box">
            <div class="menu_icon">
                <i class="iconfont icon-icon-test"></i>
            </div>
            <div class="menu_icon_desc">
                <span>电脑</span>
            </div>
        </div>
        <div class="menu_box">
            <div class="menu_icon">
                <i class="iconfont icon-jifen"></i>
            </div>
            <div class="menu_icon_desc">
                <span>我的积分</span>
            </div>
        </div>
        <div class="menu_box">
            <div class="menu_icon">
                <i class="iconfont icon-fushi"></i>
            </div>
            <div class="menu_icon_desc">
                <span>服饰</span>
            </div>
        </div>
        <div class="menu_box">
            <div class="menu_icon">
                <i class="iconfont icon-wangluobanji"></i>
            </div>
            <div class="menu_icon_desc">
                <span>每日打卡</span>
            </div>
        </div>
        <div class="menu_box">
            <div class="menu_icon">
                <i class="iconfont icon-renyuanxiaozu"></i>
            </div>
            <div class="menu_icon_desc">
                <span>人员小组</span>
            </div>
        </div>
        <div class="menu_box">
            <div class="menu_icon">
                <i class="iconfont icon-shipin"></i>
            </div>
            <div class="menu_icon_desc">
                <span>食品</span>
            </div>
        </div>
        <div class="menu_box">
            <div class="menu_icon">
                <i class="iconfont icon-quanbuyingyong"></i>
            </div>
            <div class="menu_icon_desc">
                <span>全部</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        clickShopMenu(){
            
        }
    },
    mounted() {
        
    },
    

}
</script>

<style scoped>
    .menu_container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
        padding: 20px 0 5px 0;
        z-index: 500;
    }
    .menu_box{
        width: 130rpx;
        height: 130rpx;
        display: flex;
        flex-direction: column;
        text-align: center;
        flex-wrap: wrap;
    }
    .menu_icon{
        width: 80rpx;
        height: 80rpx;
        line-height: 80rpx;
        margin: 0 auto;
        border: 2rpx solid #e9e9e9;
        border-radius: 50%;
        text-align: center;
    }
    .menu_icon_desc{
        width: 100%;
        height: 40rpx;
        line-height: 40rpx;
        font-size: 26rpx;
    }

</style>
