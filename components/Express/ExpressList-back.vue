<template>
<view>
  <view>
    <uni-row class="express-up">
      <uni-col>
        <uni-list-chat title="李晓玲的包裹" :avatar-list="avatarList" note="韵达 123123123123" time="2020-02-02 20:20"
                       badge-positon="left" badge-text="dot">
          <view class="chat-custom-right">
            <text class="chat-custom-text">配送中</text>
          </view>
        </uni-list-chat>
      </uni-col>
    </uni-row>
    <uni-row class="express-down">
      <uni-col :span="12" class="down-text">
        <text class="car-express-text">adv-gt-44(M01格)</text>
      </uni-col>
      <uni-col :span="12" class="down-text">
        <text class="time-estimate-text">预计16:46送达</text>
      </uni-col>
    </uni-row>
  </view>
</view>
</template>

<script>
import UniList from "../../uni_modules/uni-list/components/uni-list/uni-list.vue";
import UniCol from "../../uni_modules/uni-row/components/uni-col/uni-col.vue";

export default {
  name: "ExpressList",
  components: {UniCol, UniList},
  data() {
    return {
      avatarList: [{
        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
      }, {
        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
      }, {
        url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.down-text {
  background-color: #1cbbb4;
}

.chat-custom-right {
  flex: 1;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.chat-custom-text {
  font-size: 12px;
  color: #999;
  margin-top: 15px;
  margin-left: 5px;
}

.car-express-text {
  font-size: 11px;
  color: #999;
}

.time-estimate-text {
  font-size: 11px;
  color: #1677ff;
}

.express-up {
  background-color: #1cbbb4;
}
</style>
