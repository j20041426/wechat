<template>
  <div class="cover">
    <div class="login">
      <input type="text" v-model="username" placeholder="输入微信名"/>
      <div @click="login">登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: ''
      }
    },
    methods: {
      login: function(){
        if(this.username){
          this.$http.post('http://app-hqqsk5cknw2ke29.leanapp.cn/login',{username:this.username}).then(function(data){
            var res = data.data;
            if(res.type==1){
              sessionStorage.userId = res.data.userId;
              sessionStorage.info = JSON.stringify(res.data.info);
              this.$router.push('/');
            }else{
              alert(res.msg);
            }
          });
        }else{
          alert('请输入微信名');
        }
      }
    }
  }
</script>

<style scoped>
  .cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login {
    width: 400px;
    height: 300px;
    background-color: #fff;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .login input {
    outline: none;
    -webkit-appearance: none;
    font-size: 20px;
    border: 0;
    border-bottom: 2px solid #35c735;
  }
  .login div {
    margin-top: 30px;
    width: 80px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #35c735;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
  }
  .login div:hover {
    background-color: #3dce3d;
  }
</style>