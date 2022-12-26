<template>
  <view>
    <view class="example">
      <!-- 基础用法，不包含校验规则 -->
      <uni-forms ref="baseForm" :modelValue="baseFormData" label-width="200rpx">
        <uni-forms-item label="姓名" required>
          <uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名"/>
        </uni-forms-item>
        <uni-forms-item label="手机号" required>
          <uni-easyinput v-model="baseFormData.phoneNum" placeholder="请输入手机号"/>
        </uni-forms-item>
        <uni-forms-item label="收货站点">
          <uni-data-select
              v-model="value"
              :localdata="range"
              @change="change"
              :clear="false"
          ></uni-data-select>
        </uni-forms-item>
      </uni-forms>
    </view>
      <button class="save" @click="toMine">保存</button>
  </view>

</template>
<script>
export default {
  data() {
    return {
      value: 0,
      range: [
        {value: 0, text: "站点1号"},
        {value: 1, text: "站点2号"},
        {value: 2, text: "站点3号"},
      ],
      // 基础表单数据
      baseFormData: {
        name: '李晓玲',
        phoneNum: '13695243768',
        station:'',
        company:'圆通快递',
        expressNum:'9939',
        expressCompanyNum:'929158',
      },
      // 表单数据
      alignmentFormData: {
        name: '',
        phoneNum: '',
      },
      // 分段器数据
      current: 0,
      items: ['左对齐', '顶部对齐'],
      // 校验表单数据
      valiFormData: {
        name: '',
        phoneNum: '',
      },
      // 校验规则
      rules: {
        name: {
          rules: [{
            required: true,
            errorMessage: '姓名不能为空'
          }]
        },
        phoneNum: {
          rules: [{
            required: true,
            errorMessage: '手机号不能为空'
          }, {
            format: 'number',
            errorMessage: '手机号只能输入数字'
          }]
        }
      },
      // 自定义表单数据
      customFormData: {
        name: '',
        phoneNum: '',
      },
      // 自定义表单校验规则
      customRules: {
        name: {
          rules: [{
            required: true,
            errorMessage: '姓名不能为空'
          }]
        },
        phoneNum: {
          rules: [{
            required: true,
            errorMessage: '手机号不能为空'
          }]
        },
      },
      dynamicFormData: {
        email: '',
        domains: {}
      },
      dynamicLists: [],
      dynamicRules: {
        email: {
          rules: [{
            required: true,
            errorMessage: '域名不能为空'
          }, {
            format: 'email',
            errorMessage: '域名格式错误'
          }]
        }
      }
    }
  },
  computed: {
    // 处理表单排列切换
    alignment() {
      if (this.current === 0) return 'left'
      if (this.current === 1) return 'top'
      return 'left'
    }
  },
  onLoad() {
  },
  onReady() {
  },
  methods: {
    toMine(){
      this.$tab.switchTab('/pages/user/index')
    },
    change(e) {
      console.log("e:", e);
    },
    onClickItem(e) {
      console.log(e);
      this.current = e.currentIndex
    },
    add() {
      this.dynamicLists.push({
        label: '域名',
        rules: [{
          'required': true,
          errorMessage: '域名项必填'
        }],
        id: Date.now()
      })
    },
    del(id) {
      let index = this.dynamicLists.findIndex(v => v.id === id)
      this.dynamicLists.splice(index, 1)
    },
    submit(ref) {
      this.$refs[ref].validate().then(res => {
        console.log('success', res);
        uni.showToast({
          title: `校验通过`
        })
      }).catch(err => {
        console.log('err', err);
      })
    },
  }
}
</script>

<style lang="scss">
.save{
  background-color: #0081ff;
  color: #FFFFFF;
  width: 500rpx;
  font-size: 32rpx;
  margin-bottom: 0;
  z-index: 100;
  border-radius: 25px;
}

.text {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}

.uni-px-5 {
  padding-left: 10px;
  padding-right: 10px;
}

.uni-pb-5 {
  padding-bottom: 10px;
}

.example {
  padding: 15px;
  background-color: #fff;
}

.sms {
  height: 120px;
  border: 1px solid #3a3a3a;
}

.segmented-control {
  margin-bottom: 15px;
}


.form-item {
  display: flex;
  align-items: center;
}


.goodsInfo {
  height: 120px;
}

.login-btn {
  margin-top: 20px;
  height: 45px;
}
</style>

<style lang="scss">
.demo-uni-row {
  margin-bottom: 10px;

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

.example-body {
  /* #ifndef APP-NVUE */
  display: block;
  /* #endif */
  padding: 5rpx 10rpx 0;
  overflow: hidden;
}


</style>

