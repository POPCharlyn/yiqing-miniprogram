<template>
  <view class='container'>
    <!-- 用户信息 -->
    <view class='userinfo' @click="toMyAddress">
      <view class='userinfo-avatar'>
        <open-data type="userAvatarUrl"></open-data>
      </view>
      <view class='userinfo-name'>
        <open-data type="userNickName"></open-data>
      </view>
    </view>
    <!-- 用户信息 -->

    <!-- 配送流程  -->
    <view class="delivery-progress">
      <view class="notice">
        <uni-section title="配送详情" type="line" padding>
          <uni-steps :options="list" active-color="#007AFF" :active="active" direction="column"/>
        </uni-section>
        <button type="primary" size="mini" style="margin: 30px 10px; width: 120px;" @click="change" v-if="isVis">
          一键开门取件
        </button>
      </view>
    </view>
    <!-- 配送流程  -->
  </view>
</template>

<script>
import UniSteps from "@/uni_modules/uni-steps/components/uni-steps/uni-steps.vue";
import UniSection from "@/uni_modules/uni-section/components/uni-section/uni-section.vue";

export default {
  name: "user",
  components: {UniSection, UniSteps},
  data() {
    return {
      isVis: false,
      active: 4,
      list: [
        {
          title: '下单成功',
          desc: '2022-12-23 13:51:32'
        },
        {
          title: '订单准备中',
          desc: '2022-12-23 13:51:32'
        },
        {
          title: '车辆(DTV-0203)已出发，您的货物在A1格。',
          desc: '2022-12-23 13:51:32'
        },
        {
          title: '车辆(DTV-0203)即将到达站点，请准备取件。',
          desc: '2022-12-23 13:51:32'
        },
        {
          title: '车辆已到达，请等待车辆停稳后，再进行取件。车辆预计停留时间五分钟，请注意您的时间安排。',
          desc: '2022-12-23 13:51:32'
        }
      ]
    }
  },
  onReady() {
    if (this.active === this.list.length - 1) {
      this.isVis = true
    }
    else {
      console.log('货还没送到')
    }
  },
  methods: {
    toMyAddress() {
      this.$tab.navigateTo('/pages/user/address-user')
    },
    change() {
      //   TODO:open locker
      console.log('open locker.')
    },
  }
}
</script>

<style lang="scss" scoped>
.delivery-progress {
  background-color: #fff;
}

page {
  background-color: #f7f7f7;
  padding-bottom: 60rpx;
}

/* 用户信息 */

.userinfo {
  position: relative;
  width: 100%;
  background: #fff;
  text-align: center;
  padding: 30rpx 0;
}

.userinfo .userinfo-avatar {
  overflow: hidden;
  display: block;
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  box-shadow: 3rpx 3rpx 10rpx rgba(0, 0, 0, 0.2);
  margin: auto;
}

.userinfo .userinfo-name {
  font-size: 30rpx;
  font-weight: bold;
  margin-top: 20rpx;
}

.binding-phone {
  position: relative;
  background: #fff;
  height: 80rpx;
  line-height: 80rpx;
  padding: 0 30rpx;
  border-top: 2rpx solid #f7f7f7;
  border-bottom: 2rpx solid #f7f7f7;
}

.binding-phone .show-tip {
  font-size: 26rpx;
}

.binding-phone .gotobinding {
  border-radius: 8rpx;
  font-size: 28rpx;
  color: #e24b4b;
  font-weight: bold;
}

/*end 用户信息 */

.delivery-progress {
  width: 100%;
  background: #f7f7f7;
  margin-top: 20rpx;
}

.notice {
  background: #fff;
}


.status-btn {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 92rpx;
  margin: 30rpx;
  background-color: #007AFF;
}

.example-body {
  /* #ifndef APP-NVUE */
  display: block;
  /* #endif */
  padding: 15px;
  flex-direction: row;
}

/* 订单状态 */
.list-cont {
  width: 100%;
  background: #f7f7f7;
  margin-top: 20rpx;
}

.list-cont .total-order {
  background: #fff;
}

.list-cont .total-order .order-tit {
  display: flex;
  justify-content: space-between;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 30rpx;
  border-bottom: 1rpx solid #f7f7f7;
  padding: 0 30rpx;
}

.list-cont .total-order .order-tit .checkmore {
  font-size: 22rpx;
  color: #80848f;
  display: flex;
  align-items: center;
}

.list-cont .total-order .procedure {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 25rpx;
  height: 160rpx;
}

.list-cont .total-order .procedure .items {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-cont .total-order .procedure .items image {
  width: 64rpx;
  height: 64rpx;
  margin-bottom: 20rpx;
}

.list-cont .total-order .procedure .items .num-badge {
  position: absolute;
  top: -15rpx;
  right: -12rpx;
  //color: #eb2444;
  color: #FFFFFF;
  background-color: red;
  border: 3rpx solid red;
  border-radius: 50rpx;
  //background: #fff;
  min-width: 30rpx;
  height: 30rpx;
  line-height: 30rpx;
  text-align: center;
  padding: 2rpx;
  display: block;
}

/* end 订单状态 */

/* 列表项 */

.list-cont .my-menu {
  /* width: 100%; */
  background-color: #fff;
  margin-top: 20rpx;
}

.list-cont .my-menu .memu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100rpx;
  border-bottom: 2rpx solid #f7f7f7;
  padding: 0 30rpx;
}

.list-cont .my-menu .memu-item:nth-child(1) {
  border-top: 2rpx solid #f7f7f7;
}

.list-cont .my-menu .memu-item:last-child {
  border-bottom: none;
}

.list-cont .my-menu .memu-item text {
  font-size: 28rpx;
}

.list-cont .my-menu .memu-item image {
  width: 50rpx;
  height: 50rpx;
  margin-right: 20rpx;

}

.list-cont .my-menu .memu-item .i-name {
  display: flex;
  align-items: center;
}

/* end 列表项 */

/* 箭头 */

.arrowhead {
  width: 15rpx;
  height: 15rpx;
  border-top: 2rpx solid #999;
  border-right: 2rpx solid #999;
  transform: rotate(45deg);
  margin-left: 10rpx;
}


/* 商品收藏消息等 */
.prod-col {
  margin-top: 20rpx;
  background: #fff;
  display: flex;
  justify-content: space-around;
  padding: 30rpx 0 10rpx 0;
  font-size: 12rpx;
}

.prod-col .col-item {
  text-align: center;
}

.prod-col .col-item .num {
  font-size: 16rpx;
  font-weight: 700;
  color: #3a86b9;
}

.prod-col .col-item .tit {
  line-height: 34rpx;
}

</style>
