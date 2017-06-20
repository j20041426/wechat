<style scoped>
*{
  margin: 0;padding: 0;
  font-family: '微软雅黑';
}
  
  .session {
    float: right;
    width: 550px;
    height: 575px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .session .header {
    width: 100%;
    height: 63px;
    border-bottom: 1px solid #e7e7e7;
    line-height: 70px;
    font-size: 20px;
    padding-left: 30px;
  }
  .pull-left {
    float: left;
  }
  .pull-right {
    float: right;
  }
  .msg {
    padding: 10px 30px;
    display: flex;
    align-items: top;
  }
  .msg.me {
    flex-direction: row-reverse;
  }
  .msg.notme {
    flex-direction: row;
  }
  .msg div {
    display: inline-block;
  }
  .msg .headimg {
    width: 34px;
    height: 34px;
  }
  .msg .headimg img {
    width: 100%;
    height: 100%;
  }
  .msg .content {
    max-width: 360px;
    padding: 10px;
    font-size: 10pt;
    border-radius: 3px;
    margin: 0px 5px;
  }
  .msg.me .content {
    background-color: #9eea6a;
  }
  .msg.notme .content {
    background-color: #fff;
  }
  .msg.notme .arraw {
    width:0;
    height:0;
    border-width:4px 4px 4px 0;
    border-style:solid;
    border-color:transparent #fff transparent transparent;/*透明 灰 透明 透明 */
    position:relative;
    top: 14px;
    left: 5px;
  }
  .msg.me .arraw {
    width:0;
    height:0;
    border-width:4px 0 4px 4px;
    border-style:solid;
    border-color:transparent transparent transparent #9eea6a;/*透明 灰 透明 透明 */
    /*margin:40px auto;*/
    position:relative;
    top: 14px;
    left: -5px;
  }
  .body {
    flex: 1;
  }
  .inputArea {
    width: 100%;
    height: 140px;
    border-top: 1px solid #ececec;
    padding-left: 30px;
    padding-top: 35px;
    box-sizing: border-box;
  }
  .inputArea textarea {
    width: 500px;
    height: 63px;
    border: 0;
    background-color: transparent;
    resize: none;
    outline: none;
  }
  .send {
    width: 66px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    font-size: 10pt;
    color: #333333;
    cursor: pointer;
    float: right;
    margin-right: 18px;
  }
  .send:hover {
    background-color: #3dce3d;
    color: #fff;
    border-color: #3dce3d;
  }
  .inputFocus {
    background-color: #fff;
  }
  .sysinfo {
    display: block;
    padding: 4px;
    background-color: #dadada;
    color: #fff;
    font-size: 10pt;
    border-radius: 2px;
    margin: auto;
  }
</style>

<template>
  <div class="session">
    <div class="header">{{currSession.title}}</div>
    <div class="body">
      <div :class="['msg',msg.from=='me'?'me':'notme']" v-for="msg in currSession.msgs">
        <template v-if="msg.type=='msg'">
          <div class="headimg"><img :src="msg.userIcon"></div>
          <div class="arraw"></div>
          <div class="content">{{msg.content}}</div>
        </template>
        <template v-if="msg.type=='sysinfo'">
          <div class="sysinfo">{{msg.content}}</div>
        </template>
      </div>
    </div>
    <div :class="['inputArea',{'inputFocus':inputFocus}]">
      <textarea @focusin="inputFocus=true" @focusout="inputFocus=false"></textarea>
      <div class="send">发送(S)</div>
    </div>
  </div>
</template>

<script type="text/javascript">
  
  export default {
      data () {
          return {
            currSession: {
              title: '汤启明',
              msgs: [
                {type:'sysinfo',content:'2017年6月19日 10:30',from:'sys',timer:'2017-06-19 10:30:00'},
                {type:'msg',userIcon:'src/image/user1.jpg',content:'呵呵呵',from:'tang',timer:'2017-06-19 10:30:00'},
                {type:'msg',userIcon:'src/image/user2.jpg',content:'嘿嘿嘿',from:'me',timer:'2017-06-19 10:35:00'},
              ]
            },
            inputFocus: false
         }
     },
     mounted: function(){
       console.log(this.$route.params);
     }
  }
</script>

