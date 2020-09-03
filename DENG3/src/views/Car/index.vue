<template>
  <div class="Car">
      <div class="car-top">  
        <div>图标</div>
        <div>登录</div>
        <div>注册</div>
      </div>
      <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
  </div>
</template>

<script>
import Vue from 'vue';
import { Form } from 'vant';

Vue.use(Form);
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
.car-top{
  width: 100%;
  height: 44px;
  display: flex;

  justify-content:space-between;
  margin-bottom: 30px;
}
.car-top div{
  height: 100%;
  height: 44px;
  background: yellow;
  margin-left:12px;
  line-height: 44px;
}
.el-drawer__container::v-deep .el-drawer{
    width: 70%;
}
</style>