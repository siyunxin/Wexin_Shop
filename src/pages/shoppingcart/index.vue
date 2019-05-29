<template>
  <div>
    <div class="body">
   
      <div class="m-shop" v-for="(item,index) in shoplist" :key="index">
              
           <div class="m-shop-header">
              <div >
                <i-panel>
          <i-checkbox-group :current="current" @change="shopChange" > 
              <i-checkbox    :key="item.id" :name="'name'+item.id" :value="item.id"  :color="color" i-class="check">
              </i-checkbox>
              </i-checkbox-group> 
            </i-panel >
              </div>
              <div class="m-h-logo">
                  <image class="g-logo" :src="item.logosrc"/>
                  <div style="padding-top:25rpx;margin-left:55rpx">
                    {{item.shopname}}
                  </div>
              </div>
              <div class=" m-h-yhj"><div v-if="item.elseshow">领优惠卷</div></div>
           </div>
           <div class="m-shop-body"  v-for="(items,indexx) in item.commoditylist"  :key="indexx+123">
              <div class="m-h-check">
                <i-panel >
          <i-checkbox-group :current="current"  @change="handleFruitChange">   
              <i-checkbox    key="0" :name="items.commodityid" :value="items.commodityid"  :color="color" i-class="g-check">
              </i-checkbox>
                  </i-checkbox-group>
      </i-panel>
              </div>
              <div class="g-img-div">
                   <div>
                      <image class="g-img" :src="items.imagesrc"/>
                   </div>
                      <div class="g-gmfu" v-if="items.ifshow">
                      购买服务
                    </div>
              </div>
              <div class="m-text">
                  <div class="g-name" >
                      <p>
                         {{items.commodityname}}
                      </p>
                  </div>
                   <div class="g-qiang"  v-if="items.ifshow">
                      抢
                  </div>
                  <div class="g-type">
                    {{items.commoditytype}}
                  </div>
                 <div class="g-price-num-div">
                    <div class="g-price">
                    <div>￥  {{items.prices}}</div>
                    </div>
                    <div class="g-num">
                      <div class="num1" :style="{color:items.number==1?'#c6c6c6':':#3e3e3e'}" @click="minus(items.commodityid)">
                          <!-- <image class="g-jhimg" src="../../static/images/gouwuche/jianhao.png"/> -->
                         －
                      </div>
                      <div class="num">{{items.number}}</div>
                      <div class="num1" style="color:#3e3e3e"  @click="plus(items.commodityid)">
                          <!-- <image class="g-jhimg" src="../../static/images/gouwuche/jiahao.png"/> -->
                          +
                      </div>
                    </div>
                 </div>
                    <div class="g-expenses" v-if="!items.ifshow">
                      税费: ￥ {{items.expenses}}
                    </div>
                  
              </div>

           </div>
        
      
      </div>
    </div>
    <div class="m-bottom">
    <div style="display:flex;justify-content: flex-start;height:100%;align-items:center;">
        <div class="g-b-check">
           <i-panel>
          <i-checkbox-group :current="current"  @change="handleChange"  > 
        <i-checkbox     :color="color" value="qx" >
              </i-checkbox>
               
          </i-checkbox-group> 
            </i-panel >
      </div>
      <div class="g-b-checktext">
        全选
      </div>
    </div>
     <div style="display:flex;  justify-content: flex-end;height:100%;align-items:center;">
        <div class="g-b-content">
        <p class="g-heji">合计：<span class="g-hj-price">￥ {{prices}}</span></p>
        <p class="yf">免运费</p>
      </div>
      <div class="g-b-button">去结算({{num}})</div>
    </div>
     </div>
  </div>
</template>

<script>



export default {
  computed: {
  
  },
  data() {
    return {
      shoplist:[
        {
          id:"1",
          shopname:'苏宁国际官方直营',
          logosrc:'../../static/images/gouwuche/logo.png',
          // 店铺名称
          commoditylist:[
            {
              commodityname:'日本原装进口资生堂洗面奶洗颜专科珊珂绵润泡沫洁面乳120g*2男女',
              // 商品名称
              commoditytype:'护肤系列:红腰子50ml',
              // 商品类型
              prices:'799.00',
              // 价格
              expenses:'0.00',
              // 税费
              number:1,
              // 数量
              imagesrc:'../../static/images/gouwuche/hzp.jpg',              // 图片路径
               ifshow:false,
               commodityid:'1-1'
            },
            {
              commodityname:'资生堂Fino发膜洗发水护发素套装修护毛躁干枯受损发230g+550ml*2',
              commoditytype:'护肤系列:限定红腰子75ml',
              prices:'9494.00',
              expenses:'0.00',
              number:1,
              imagesrc:'../../static/images/gouwuche/hzp2.jpg',
               ifshow:true,  
                    commodityid:'1-2'
            },
            
          ],
      
        elseshow:true,
          },
           {
          id:"2",
          shopname:'苏宁自营',
          logosrc:'../../static/images/gouwuche/logo1.png',
          commoditylist:[
            {
              commodityname:'笔记本电脑游戏本2019全新款四核14英寸微窄边框轻薄便携学生商务办公手提电脑超薄本Jumper/中柏ezbooks4',
              commoditytype:'颜色:银色 版式:i5 8G 128G',
              prices:'5888.00',
              expenses:'0.00',
              number:1,
              imagesrc:'../../static/images/gouwuche/bjb.jpg',
                   ifshow:true,
                    commodityid:'2-1'
            },
        
          ],
         
        elseshow:false,
          } ,
            {
          id:"3",
          shopname:'苏宁自营',
          logosrc:'../../static/images/gouwuche/logo1.png',
          commoditylist:[
            {
              commodityname:'笔记本电脑游戏本2019全新款四核14英寸微窄边框轻薄便携学生商务办公手提电脑超薄本Jumper/中柏ezbooks4',
              commoditytype:'颜色:银色 版式:i5 8G 128G',
              prices:'5888.00',
              expenses:'0.00',
              number:1,
              imagesrc:'../../static/images/gouwuche/bjb.jpg',
                   ifshow:true,
                    commodityid:'3-1'
            },
        
          ],
         
        elseshow:false,
          }     
      ],
        current: ['1-1'],  
        current2:[],    
        color:'#fe6300',        
       checked: false,
       prices:0.00,
       num:0
    }
  },
  methods: {
    // 商品列表checkbox点击事件
    handleFruitChange ({mp: { detail = {} }}) {
        var arr = detail.value.split("-"); 
        // 将商品列表的commodityid通过符号"-"分割成数组
        var findex=arr[0];
        var cindex=arr[1];
        var qindex=this.current.indexOf('qx')
        this.shoplist[findex-1].elseshow=true;
        var flist=this.shoplist[findex-1].commoditylist;
        var cindexarr=[];
       for(var i=0;i<flist.length;i++){
         cindexarr.push(flist[i].commodityid)
        }
        this.shoplist[findex-1].commoditylist[cindex-1].ifshow=false
        // 获取当前商品的父元素的id
        var list=this.shoplist[findex-1].commoditylist;
        var commodityidlist=[];
        // 创建一个空数组保存当前父元素下的所有商品列表的commodityid
        for(var i=0;i<list.length;i++){
          commodityidlist.push(list[i].commodityid)
        }
       const index2 = this.current.indexOf(findex)
       const index = this.current.indexOf(detail.value)
       if(index===-1){
        //  当我选中当前商品时进行判断 所有选中的商品列表数组是否包含当前父元素下的所有商品列表的commodityid的数组  包含时选中当前商品列表父元素的CheckBox
         this.current.push(detail.value)
          if(this.isContained(this.current,commodityidlist)){
            this.current.push(findex)
         }
         
       }else{  
         if(qindex!==-1){
          if(index2!==-1){
            console.log(qindex)
            console.log(index2)
            console.log(index)
            console.log(this.current)
            this.current.splice(qindex,1)
             this.current.splice(index, 1)
            this.current.splice(index2, 1)
           
        this.shoplist[findex-1].commoditylist[cindex-1].ifshow=true
         }else{
        this.shoplist[findex-1].commoditylist[cindex-1].ifshow=true
           this.current.splice(index, 1)
         }
       }else{
          if(index2!==-1){
            this.current.splice(index2, 1)
            this.current.splice(index, 1)
        this.shoplist[findex-1].commoditylist[cindex-1].ifshow=true
         }else{
        this.shoplist[findex-1].commoditylist[cindex-1].ifshow=true
           this.current.splice(index, 1)
         }
       } 
         //当我取消选中时，取消当前商品父元素的CheckBox的选中  
        
       }       
       if(!this.current.find(item=>cindexarr.includes(item))){
         this.shoplist[findex-1].elseshow=false;
       }       
      // index === -1 ? this.current.push(detail.value) : this.current.splice(index, 1)&& this.current.splice(index2, 1)
      this.setData({
        current: this.current
      }) 
    },
    setData (data) {
      // 重新设置CheckBox选中数组
      Object.keys(data).forEach(key => {
        this[key] = data[key]
      })
      this.pricesfn()
    },
    shopChange({mp: { detail = {} }}) { 
          //每个商铺的CheckBox 点击事件  全选时选中其子元素的所有CheckBox 反之取消子元素的所有选中
      var index = this.current.indexOf(detail.value)
      var qindex=this.current.indexOf('qx')
      var value=Number(detail.value)-1;
        var list=this.shoplist;   
        var commlist=list[value].commoditylist
      if(index === -1 ){    
         this.shoplist[value].elseshow=true;   
        for(var n=0;n<commlist.length;n++){
         
          if(this.IsContain(this.current,commlist[n].commodityid)){
              this.current.push(commlist[n].commodityid) 
              this.shoplist[value].commoditylist[n].ifshow=false       
          }
        
        }     this.current.push(detail.value)      
      }else{
          this.shoplist[value].elseshow=false; 
          if(qindex!==-1){
            this.current.splice(qindex,1)
          }
         this.current.splice(index, 1)
        for(var n=0;n<commlist.length;n++){
          this.current.splice(this.current.indexOf(commlist[n].commodityid), 1)
            this.shoplist[value].commoditylist[n].ifshow=true 
        }     }
      this.setData({
        current: this.current
      })
    
        },
    handleChange({mp: { detail = {} }}) {
         //全选按钮点击事件  全选时选中其子元素的所有CheckBox 反之取消子元素的所有选中
      const index = this.current.indexOf(detail.value)
      console.log(detail.value)
      if( index === -1){
        var  arr=[];
      var list=this.shoplist;
        var  len=this.shoplist.length;
        for(var i=0; i<len;i++){
          arr.push(list[i].id)
          var  commlist=list[i].commoditylist
          for(var n=0;n<commlist.length;n++){
            arr.push(commlist[n].commodityid)
          }
        
        }
        arr.push(detail.value)
        this.current=arr;
        this.setData({
          current: this.current,
        })

      }else{
          this.current=[];
          this.setData({
          current: this.current
        })
      }
    },
    plus(id){ 
          //商品数量增加按钮事件   传过来的值是
      var arr = id.split("-");
      var findex=Number(arr[0])-1;
      var cindex=Number(arr[1])-1;
      this.shoplist[findex].commoditylist[cindex].number++;  
       this.pricesfn()
    },
    minus(id){
       //商品数量减少按钮事件   传过来的值是commodityid
      var arr = id.split("-");
      var findex=Number(arr[0])-1;
      var cindex=Number(arr[1])-1;
      var num=this.shoplist[findex].commoditylist[cindex].number;
      if(num>1){
          this.shoplist[findex].commoditylist[cindex].number--;
      }else{
        return;
      }
       this.pricesfn()
    },
    IsContain(arr,value){
      // 判断数组知否存在某值
      for(var i=0;i<arr.length;i++)
      {
        if(arr[i]==value)
          return false;
      }
      return true;
    },
    isContained(aa, bb) {
      // 判断某数组是否包含另一个数组
      if(!(aa instanceof Array) || !(bb instanceof Array) || ((aa.length < bb.length))) {
        return false;
      }
      //var aaStr = aa.toString();
        /*for(var i = 0; i < bb.length; i++) {
        if(aaStr.indexOf(bb[i]) < 0) return false;
      }*/
      for (var i = 0; i < bb.length; i++) {
        var flag = false;
        for(var j = 0; j < aa.length; j++){
          if(aa[j] == bb[i]){
            flag = true;
                    break;
          }
        }
        if(flag == false){
          return flag;
        }
      }
      return true;
    },
    pricesfn(){
      var currentlist=this.current;
      var len=currentlist.length;     
      var current=[];
      this.prices=0.00;
      for(var i=0; i<len;i++){
          if(currentlist[i].indexOf("-") != -1 ){
            current.push(currentlist[i]);
            this.pricecompute(currentlist[i])
          }
      }
       this.num=current.length;

      
    },
    pricecompute(id){
        var arr = id.split("-"); 
        // 将商品列表的commodityid通过符号"-"分割成数组
        var findex=Number(arr[0]-1);
        var cindex=Number(arr[1]-1);
        var obj=this.shoplist[findex].commoditylist[cindex];       
        var cprice=Number(obj.number)*Number(obj.prices);
       this.prices= parseFloat(this.prices)
           this.prices+=cprice;        
         this.funbul(this.prices)
    },
  funbul(num){ 
    num += '';
    num = num.replace(/[^0-9|\.]/g, ''); //清除字符串中的非数字非.字符
    if(/^0+/) //清除字符串开头的0
    num = num.replace(/^0+/, '');
    if(!/\./.test(num)) {//为整数字符串在末尾添加.00
    num += '.00';}
    if(/^\./.test(num)){ //字符以.开头时,在开头添加0
    num = '0' + num;}
    num += '00'; //在字符串末尾补零
    num = num.match(/\d+\.\d{2}/)[0];
    this.prices=num
    }
  },
  mounted() {
    this.pricesfn()
   console.log(this.prices)
  },
}
</script>

<style scope>
page{
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
.check{
  padding: 0 !important;
}
  .body{
    width: 100%;
     height: 100%;
     padding-bottom:9%; 
    
     
  }
    .m-shop{  
    width: 95%;
      
    margin: 0 auto;
    border-radius: 20rpx;
      margin-top: 25rpx;
    background: #fff;
  } 
  .m-shop-header{
  display: flex;
  margin: 15rpx;
  justify-content:flex-end;
  }
  .m-h-logo{
   height: 65rpx;
    width: 60%;
    font-size: 28rpx;
    position: relative;
    text-align: left;
  }
  .g-logo{
    width:45rpx;
    height: 45rpx;
    position: absolute;
    top: 20rpx;
    left: 5rpx;
  }
  .m-h-yhj{
    padding: 28rpx 5rpx;
    font-size: 25rpx;
    color:#fe6600;
    text-align: right;
    flex: 1;
  }
  .m-shop-body{
    width: 100%;
    display: flex;
    margin: 15rpx;
        margin-bottom: 35rpx;
  }
  .g-img-div{
    flex: 0.32;     
  }
  .g-gmfu{
    margin-top: 15rpx;
    font-size: 26rpx;
    width: 140rpx;
    text-align: center;
    line-height: 38rpx;
    border: 1px solid #d8d8d8;
    border-radius: 30rpx;
    color: #989898;
    margin-bottom: 15rpx;

  }
  .g-img{
    width: 100%;
    height: 190rpx;
  }
  .m-text{
   flex: 0.62;
   margin-left: 25rpx;
  }
  .g-name{
    font-size:30rpx;
    height:90rpx;
    line-height: 45rpx;
    width:100%;
     overflow: hidden;
    text-overflow: ellipsis;
    overflow: hidden;    
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .g-type{
    font-size: 25rpx;
    height: 28rpx;
    line-height: 28rpx;
    width: 100%;
    margin: 10rpx 0;
    color: #d4d4d4;
  }
  .g-price{
    width: 100%;
    font-size: 30rpx;
    color: #fe6600;
  }
  .g-price-num-div{
    width: 100%;
    display: flex;

  }
  .g-jhimg{
    margin:  2rpx;
    width:48rpx;
    height: 48rpx;
  }
  .g-num{
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 49rpx;
    line-height: 45rpx;
    border-radius: 45rpx;
    border:1px solid #d4d4d4;
  }
  .g-expenses{
    font-size: 25rpx;
    margin-bottom: 25rpx;
  }
  .m-h-check{
    height: 200rpx;
      line-height: 100%;
      display:flex;
  align-items:center;
  }
.g-qiang{
      width: 45rpx;
      text-align: center;
    line-height:30rpx;
    font-size: 20rpx;   
    background: #fe6600;
    border-radius: 18rpx;
    color: #fff;
    
}
.check{
  /* width: 25rpx; */
  border-radius: 25rpx;
}
.num1{
  margin:  2rpx;
    width:45rpx;
    height: 45rpx;
    border-radius: 45rpx;
    text-align: center;
    line-height: 45rpx;
    font-size: 38rpx;
    background: #f2f2f2;
    /* color:#c6c6c6; */
}
.m-bottom{
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height:8%;
  background: #fff;
    align-items:center; 
    justify-content: space-between; 
  
}


.g-b-check{
  margin-left: 5rpx;


}
.g-b-checktext{
  margin-left: 3rpx;
  font-size: 25rpx;
  width: 60rpx;
}
.g-b-content{
  height: 100%;
  
  text-align: right;
}
.g-heji{
  font-size: 25rpx;
  width: 100%;
}
.g-hj-price{
  font-size: 30rpx;
  color: #fe6600;
}
.yf{
font-size: 25rpx;
}
.g-b-button{
  height: 100%;
  line-height: 85rpx;
  text-align: center;
padding: 8rpx 15rpx;
font-size: 30rpx;
background: #fe6600;
color: #fff;

}

</style>
<style>
label .i-checkbox-title{
  display: none !important;
    width:0!important; 
}
.checkbox-index--i-checkbox-cell, .i-cell, .i-cell-last{
  padding:10px .5px !important;
    transform:scale(0.9)!important;
  /* position:static !important;  */
  font-size: 0px!important;
}

</style>
