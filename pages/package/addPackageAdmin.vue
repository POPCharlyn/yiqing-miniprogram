<template>
  <view>
    <uni-card>
      <uni-row>
        <uni-col :span="21">
          <view class="search-package">
            <uni-search-bar @confirm="search"
                            v-model="searchValue"
                            @input="input"
                            @cancel="cancel"
                            @clear="clear"
                            placeholder="查找包裹"
                            radius="18"
                            bg-color="#f9f9f9"
                            cancel-button="none"
            ></uni-search-bar>
          </view>
        </uni-col>
        <uni-col :span="3">
          <image class="icon-more" src='../../static/common/add.png' @click="addPackage"></image>
        </uni-col>
      </uni-row>


      <view class="uni-padding-wrap uni-common-mt">
        <uni-segmented-control :current="current" :values="items" :style-type="styleType"
                               :active-color="activeColor" @clickItem="onClickItem"/>
      </view>
    </uni-card>
    <uni-card>
      <view class="content">
        <view v-if="current === 0">
          <ExpressList/>
        </view>
        <view v-if="current === 1">
          <text class="content-text">待配送</text>
        </view>
        <view v-if="current === 2">
          <text class="content-text">配送中</text>
        </view>
        <view v-if="current === 3">
          <text class="content-text">已送达</text>
        </view>
      </view>
    </uni-card>

    <card class="cardComponent">

    </card>
  </view>
</template>

<script>
import UniCard from "../../uni_modules/uni-card/components/uni-card/uni-card.vue";
import UniSearchBar from "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue";
import UniRow from "../../uni_modules/uni-row/components/uni-row/uni-row.vue";
import UniCol from "../../uni_modules/uni-row/components/uni-col/uni-col.vue";
import ExpressList from '../../components/Express/ExpressList.vue'

export default {
  name: "index",
  components: {UniCol, UniRow, UniSearchBar, UniCard, ExpressList},
  data() {
    return {
      options: {
        styleIsolation: 'shared', // 解除样式隔离
      },
      gutter: 0,
      nvueWidth: 730,
      items: ['全部', '待配送', '配送中', '已送达'],
      styles: [{
        value: 'button',
        text: '按钮',
        checked: true
      },
        {
          value: 'text',
          text: '文字'
        }
      ],
      colors: ['#007aff', '#4cd964', '#dd524d'],
      current: 0,
      colorIndex: 0,
      activeColor: '#007aff',
      styleType: 'text',
      searchValue: '',
      keyword: '',
      searchStatus: false,
      goodsList: [],
      helpKeyword: [],
      historyKeyword: [],
      categoryFilter: false,
      currentSort: 'name',
      currentSortType: 'default',
      currentSortOrder: 'desc',
      filterCategory: [],
      defaultKeyword: {},
      hotKeyword: [],
      page: 1,
      size: 10,
      categoryId: 0,
      totalPages: 1
    }
  },
  methods: {
    addPackage(){
      this.$tab.navigateTo('/pages/package/addPackageUser')
    },
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex
      }
    },
    styleChange(e) {
      console.log('styleChange', e)
      if (this.styleType !== e.detail.value) {
        this.styleType = e.detail.value
      }
    },
    colorChange(e) {
      if (this.styleType !== e.detail.value) {
        console.log(e.detail.value);
        this.activeColor = e.detail.value
      }
    },
    search(res) {
      uni.showToast({
        title: '搜索：' + res.value,
        icon: 'none'
      })
    },
    input(res) {
      console.log('----input:', res)
    },
    clear(res) {
      uni.showToast({
        title: 'clear事件，清除值为：' + res.value,
        icon: 'none'
      })
    },
    cancel(res) {
      uni.showToast({
        title: '点击取消，输入值为：' + res.value,
        icon: 'none'
      })
    }
  },
  onBackPress() {
    // #ifdef APP-PLUS
    plus.key.hideSoftKeybord();
    // #endif
  },
  input(e) {
    console.log('输入内容：', e);
  },
  iconClick(type) {
    uni.showToast({
      title: `点击了${type === 'prefix' ? '左侧' : '右侧'}的图标`,
      icon: 'none'
    })
  }
}
</script>

<style lang="scss" scoped>
page {
  min-height: 100%;
  background-color: #f4f4f4;
}

.container {
  min-height: 100%;
  background-color: #f4f4f4;
}

.no-search {
  height: auto;
  overflow: hidden;
  margin-top: 91rpx;
}

.search-keywords {
  background: #fff;
  width: 750rpx;
  height: auto;
  overflow: hidden;
  margin-bottom: 20rpx;
}

.search-keywords .h {
  padding: 0 31.25rpx;
  height: 93rpx;
  line-height: 93rpx;
  width: 100%;
  color: #999;
  font-size: 29rpx;
}

.search-keywords .title {
  display: block;
  width: 120rpx;
  float: left;
}

.search-keywords .icon {
  margin-top: 19rpx;
  float: right;
  display: block;
  margin-left: 511rpx;
  height: 55rpx;
  width: 55rpx;
}

.search-keywords .b {
  width: 750rpx;
  height: auto;
  overflow: hidden;
  padding-left: 31.25rpx;
}

.search-keywords .item {
  display: inline-block;
  width: auto;
  height: 48rpx;
  line-height: 48rpx;
  padding: 0 15rpx;
  border: 1px solid #999;
  margin: 0 31.25rpx 31.25rpx 0;
  font-size: 24rpx;
  color: #333;
}

.search-keywords .item.active {
  color: #ec4223;
  border: 1px solid #ec4223;
}

.shelper-list {
  width: 750rpx;
  height: auto;
  overflow: hidden;
  background: #fff;
  padding: 0 31.25rpx;
}

.shelper-list .item {
  height: 93rpx;
  width: 687.5rpx;
  line-height: 93rpx;
  font-size: 24rpx;
  color: #333;
  border-bottom: 1px solid #f4f4f4;
}

.sort {
  position: fixed;
  top: 91rpx;
  background: #fff;
  width: 100%;
  height: 78rpx;
}

.sort-box {
  background: #fff;
  width: 100%;
  height: 78rpx;
  overflow: hidden;
  padding: 0 30rpx;
  display: flex;
  border-bottom: 1px solid #d9d9d9;
}

.sort-box .item {
  height: 78rpx;
  line-height: 78rpx;
  text-align: center;
  flex: 1;
  color: #333;
  font-size: 30rpx;
}

.sort-box .item .txt {
  display: block;
  width: 100%;
  height: 100%;
  color: #333;
}

.sort-box .item.active .txt {
  color: #ec4223;
}

.sort-box .item.by-price {
  background: url(//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/no-3127092a69.png) 155rpx center no-repeat;
  background-size: 15rpx 21rpx;
}

.sort-box .item.by-price.active.asc {
  background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/up-636b92c0a5.png) 155rpx center no-repeat;
  background-size: 15rpx 21rpx;
}

.sort-box .item.by-price.active.desc {
  background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/down-95e035f3e5.png) 155rpx center no-repeat;
  background-size: 15rpx 21rpx;
}

.sort-box-category {
  background: #fff;
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 40rpx 40rpx 0 0;
  border-bottom: 1px solid #d9d9d9;
}

.sort-box-category .item {
  height: 54rpx;
  line-height: 54rpx;
  text-align: center;
  float: left;
  padding: 0 16rpx;
  margin: 0 0 40rpx 40rpx;
  border: 1px solid #666;
  color: #333;
  font-size: 24rpx;
}

.sort-box-category .item.active {
  color: #ec4223;
  border: 1px solid #ec4223;
}

.cate-item {
  margin-top: 175rpx;
  height: auto;
  overflow: hidden;
}

.cate-item .h {
  height: 145rpx;
  width: 750rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cate-item .h .name {
  display: block;
  height: 35rpx;
  margin-bottom: 18rpx;
  font-size: 30rpx;
  color: #333;
}

.cate-item .h .desc {
  display: block;
  height: 24rpx;
  font-size: 24rpx;
  color: #999;
}

.cate-item .b {
  width: 750rpx;
  padding: 0 6.25rpx;
  height: auto;
  overflow: hidden;
}

.cate-item .list-filter {
  height: 80rpx;
  width: 100%;
  background: #fff;
  margin-bottom: 6.25rpx;
}

.cate-item .b .item {
  float: left;
  background: #fff;
  width: 365rpx;
  margin-bottom: 6.25rpx;
  padding-bottom: 33.333rpx;
  height: auto;
  overflow: hidden;
  text-align: center;
}

.cate-item .b .item-b {
  margin-left: 6.25rpx;
}

.cate-item .item .img {
  width: 302rpx;
  height: 302rpx;
}

.cate-item .item .name {
  display: block;
  width: 365.625rpx;
  height: 35rpx;
  margin: 11.5rpx 0 22rpx 0;
  text-align: center;
  overflow: hidden;
  padding: 0 20rpx;
  font-size: 30rpx;
  color: #333;
}

.cate-item .item .price {
  display: block;
  width: 365.625rpx;
  height: 30rpx;
  text-align: center;
  font-size: 30rpx;
  color: #ec4223;
}

.uni-mt-5 {
  margin-top: 5px;
}

.icon-more {
  width: 70rpx;
  height: 70rpx;
  margin-top: 16rpx;
  margin-left: 10rpx;
}

.uni-common-mt {
  margin-top: 0px;
  padding: 0px;
}

.uni-padding-wrap {
  //width: 750rpx;
  padding: 0px;
  margin: 0px;
}

.content {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  justify-content: center;
  align-items: center;
  height: 150px;
  text-align: center;
}

.content-text {
  font-size: 14px;
  color: #666;
}

.color-tag {
  width: 25px;
  height: 25px;
}

.uni-list {
  flex: 1;
}

.uni-list-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex: 1;
  flex-direction: row;
  background-color: #FFFFFF;
}


.uni-list-item__container {
  padding: 12px 15px;
  width: 100%;
  flex: 1;
  position: relative;
  /* #ifndef APP-NVUE */
  display: flex;
  box-sizing: border-box;
  /* #endif */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
}

.uni-list-item__content-title {
  font-size: 14px;
}

.demo-uni-row {
  margin-bottom: 10px;
  background-color: #1cbbb4;
  // 组件在小程序端display为inline
  // QQ、字节小程序文档写有 :host，但实测不生效
  // 百度小程序没有 :host
  /* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
  display: block;
  /* #endif */
}

// 支付宝小程序没有 demo-uni-row 层级
// 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级
/* #ifdef MP-ALIPAY || MP-WEIXIN */
::v-deep .uni-row {
  margin-bottom: 10px;
}

/* #endif */

.demo-uni-col {
  height: 36px;
  border-radius: 5px;
}

.dark_deep {
  background-color: #99a9bf;
}

.dark {
  background-color: #d3dce6;
}

.light {
  background-color: #e5e9f2;
}

.search-package {
  margin: 0;
  padding: 0;
}
</style>
