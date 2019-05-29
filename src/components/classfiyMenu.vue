<template>
    <div class="menuwrap">
        <scroll-view
            :style="{'height':scrollHeight}"
            :scroll-y="true"
            @scrolltolower="scrolltolower"
            @scroll="scroll"
        >
            <div
                class="menu_item"
                v-for="(item,i) in menuTitleArr"
                :key="i"
                :class="{activebg:selectIndex == i }"
                @click="handleMenuItem(i)"
            >
                <div class="menu_itembox">
                    <div class="menu_itemtext">{{item.title}}</div>
                </div>
            </div>
        </scroll-view>
    </div>
</template>    
<script>
export default {
  props: {
    scrollHeight: ""
  },
  data() {
    return {
      selectIndex: 0,
      menuTitleArr: [
        {
          index: 0,
          title: "热搜推荐"
        },
        {
          index: 1,
          title: "手机数码"
        },
        {
          index: 2,
          title: "女装内衣"
        },
        {
          index: 3,
          title: "男装内衣"
        },
        {
          index: 4,
          title: "家用电器"
        },
        {
          index: 5,
          title: "运动户外"
        },
        {
          index: 0,
          title: "电脑办公"
        },
        {
          index: 6,
          title: "美妆护肤"
        },
        {
          index: 7,
          title: "个护清理"
        },
        {
          index: 8,
          title: "个护清理"
        },
        {
          index: 9,
          title: "个护清理"
        },
        {
          index: 10,
          title: "个护清理"
        }
      ]
    };
  },
  computed: {},
  methods: {
    //菜单点击事件 index：循环时的索引值
    handleMenuItem(index) {
      console.log(index);
      this.selectIndex = index;
    },
    scrolltolower() {}
  },
  onLoad() {},
  mounted() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.scrollHeight = `${res.windowHeight - 100}rpx`;
      }
    });
  }
};
</script>
<style>
.menuwrap {
  width: 100%;
  height: 100%;
}
.menu_item {
  width: 100%;
  height: 100rpx;
  background: #F3F5F9;
}
.menu_itemtext {
  width: 100rpx;
  height: 40rpx;
  font-size: 24rpx;
}
.defaultbg {
  background: #f8f8f8;
}
.activebg {
  background: #fff;
  color: red;
}
.menu_itembox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
</style>