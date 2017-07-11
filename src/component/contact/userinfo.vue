<template>
  <div id="main">
    <div class="header">
      <div class="left">
        <div class="name">
          <div>{{name}}</div>
          <div :class="[gender=='1'?'f':'m']"></div>
        </div>
        <div class="msg">呵呵</div>
      </div>
      <div class="right">
        <img :src="headimg">
      </div>
    </div>
    <div class="body">
      <div>
        <div>备　注</div>
        <div>{{note}}</div>
      </div>
      <div>
        <div>地　区</div>
        <div>{{area.country + ' ' + area.province + ' ' + area.city}}</div>
      </div>
      <div>
        <div>微信号</div>
        <div>{{wechatId}}</div>
      </div>
      <div>
        <div>来　源</div>
        <div>{{source}}</div>
      </div>
    </div>
    <div class="footer">
      <div class="send" @click="sendMsg">发消息</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        headimg: '../../image/user.jpg',
        gender: 0,
        msg: '呵呵。。。',
        note: '点击添加备注',
        area: {
          country: '中国',
          province: '四川',
          city: '成都'
        },
        wechatId: '123456',
        source: '通过群聊添加'
      }
    },
    methods: {
      getContactInfo () {
        this.$http.post('http://localhost:3000/contact/getContactInfo',{userId:this.getUserId}).then((result)=>{
          this.name = result.body.data.name;
          this.headimg = result.body.data.headimg;
        });
      },
      sendMsg () {
        this.$http.post('http://localhost:3000/contact/sendMsg',{me:sessionStorage.userId,userId:this.getUserId}).then((result)=>{
          this.$router.push('/index/message/'+result.body.data);
        });
      }
    },
    mounted: function(){
      this.getContactInfo();
    },
    computed: {
      getUserId () {
        return this.$route.params.userId;
      }
    },
    watch: {
      getUserId () {
        this.getContactInfo();
      }
    }
  }
</script>

<style scoped>
  #main {
    float: right;
    width: 550px;
    height: 575px;
    background-color: #f5f5f5;
    padding: 90px;
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  .header {
    height: 60px;
    padding-bottom: 45px;
    border-bottom: 1px solid #e7e7e7;
  }
  .header .left {
    float: left;
  }
  .header .left .name div {
    display: inline-block;
  }
  .header .left .name div:first-child {
    font-size: 15pt;
    line-height: 30px;
  }
  .header .left .name div:last-child {
    width: 14px;
    height: 14px;
    background: url(../../image/gender.png) no-repeat;
  }
  .header .left .name div:last-child.f {
    background-position: -14px 0px;
  }
  .header .left .name div:last-child.m {
    background-position: 0px 0px;
  }
  .header .left .msg {
    color: #999999;
    font-size: 11pt;
    line-height: 30px;
  }
  .header .right {
    float: right;
  }
  .header .right img {
    width: 60px;
    height: 60px;
  }
  .body {
    padding: 35px 0px;
    font-size: 11pt;
    border-bottom: 1px solid #e7e7e7;
  }
  .body>div {
    line-height: 30px;
  }
  .body>div>div {
    display: inline-block;
  }
  .body>div>div:first-child {
    color: #999999;
    width: 80px;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer .send {
    width: 138px;
    height: 36px;
    background-color: #35c735;
    border-radius: 2px;
    text-align: center;
    color: #fff;
    line-height: 36px;
    cursor: pointer;
    margin-top: 52px;
  }
  .footer .send:hover {
    background-color: #3dce3d;
  }
</style>