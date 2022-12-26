<template>
  <mescroll-body ref="mescrollRef"
                 @init="mescrollInit"
                 @down="downCallback"
                 @up="upCallback" :up="upOption" >
    <view class="list-one row-shadow" v-for="(item,index) in list" :key="index" @click="showDetail(index)">
      <view class="content">
        <text>{{item.date}}</text>
        <text class="text-sub">消费记录</text>
      </view>
      <view class="text-total arr-more"><text class="color-blue">{{item.total|formatTotal}}</text>元</view>
    </view>
  </mescroll-body>
</template>

<script>
import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
export default {
  mixins: [MescrollMixin], // 使用mixin
  data() {
    return {
      list: [], //列表
      upOption:{
        auto: false,
        page:{
          num : 0,
          size : 15,
          time : null
        },
        noMoreSize:4,
      },
    }
  },
  methods: {
    // 上拉回调
    upCallback(page){
      this.getList(page);
    },
    getList(page){
      let pageNum = page.num; // 页码, 默认从1开始
      let pageSize = page.size; // 页长, 默认每页10条
      let params = {
        uin: this.$common.getGlobalUserInfo().id,
        pageNum: pageNum,
        pageSize: pageSize
      }
      this.$request.setRequest('/consumelist', params)
          .then(res => {
            if (res.data.status == 1) { //<=0:人工返回的错误信息
              let result=res.data.data;
              let curPageData = result&&result.list?result.list:[];
              let curPageLen = curPageData.length;
              let totalPage = result&&result.list?result.pages:0;

              //设置列表数据
              if (page.num == 1) this.list = []; //如果是第一页需手动制空列表
              this.list = this.list.concat(curPageData); //追加新数据

              //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
              this.mescroll.endByPage(curPageLen,totalPage);

            } else if (res.data.status < 1) { //<=0:人工返回的错误信息
              this.$request.setErrorMessage(res.data.msg);
              this.mescroll.endErr()
            } else {
              this.$request.setErrorMessage();
              this.mescroll.endErr()
            }
          }, (err) => {
            this.mescroll.endErr()
          });
    },

  }
}
</script>
