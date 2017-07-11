<style scoped>
  * {
    margin: 0;
    padding: 0;
    font-family: '微软雅黑';
  }
  
  .list-li:hover {
    background-color: rgb(222, 220, 219);
  }
  
  .list-li {
    padding: 12px 10px;
    overflow: hidden;
  }
  
  #list>ul {
    padding: 0;
    margin: 0;
    list-style: none;
    cursor: default;
  }
  
  .left {
    float: left;
    height: 40px;
  }
  
  .left>img {
    width: 40px;
    vertical-align: middle;
  }
  
  #contactList {
    float: left;
    width: 250px;
    height: 575px;
    background-color: rgb(233, 231, 230);
  }
  
  .search {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 15px;
  }
  
  .searchPart {
    background-color: rgb(229, 226, 226);
    border: 1px solid rgb(201, 199, 198);
    width: 220px;
    height: 20px;
    padding: 3px 5px;
  }
  
  .right {
    height: 40px;
    width: 190px;
    float: left;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
  }
  
  .right>p {
    padding-left: 10px;
    flex: 1;
    line-height: 20px;
  }
  
  .isName {
    font-size: 10.5pt;
    position: relative;
  }
  
  .isContent {
    font-size: 10px;
    color: rgb(153, 153, 153);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .isTime {
    position: absolute;
    right: 0;
    font-size: 8pt;
    color: rgb(153, 153, 153);
  }
</style>

<template>
  <div>
    <div id="contactList">
      <section class="search">
        <input type="text" class="searchPart" name="search" placeholder="搜索">
      </section>
      <section id="list">
        <ul>
          <li class="list-li" v-for="session in sessions" :key="session.sessionId" @click="openSession(session)">
            <div class="left"><img :src="session.userIcon"></div>
            <div class="right">
              <p class="isName">{{session.name}}<span class="isTime">{{formatDateTime(session.timer)}}</span></p>
              <p class="isContent">{{session.content}}</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <router-view :curr-name="currSeName"></router-view>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        currSeName: '',
        sessions: []
      }
    },
    methods: {
      openSession (session) {
        this.$data.currSeName = session.name;
        this.$router.push('/index/message/'+session.sessionId);
      },
      getSessions () {
        this.$http.post('http://localhost:3000/session/getSessions',{userId:sessionStorage.userId}).then((result)=>{
          this.$data.sessions = result.body.data;
        });
      },
      formatDateTime (timer) {
        if(timer){
          var date = new Date(timer);
          var now  = new Date();
          var dateday = (date.getTime()/(1000*60*60*24)).toFixed(0);
          var nowday  = (now.getTime()/(1000*60*60*24)).toFixed(0);
          if(dateday == nowday){
            return date.getHours()+':'+date.getMinutes()
          }else if(nowday - dateday == 1){
            return '昨天';
          }else{
            return String(date.getFullYear()).substr(2)+'/'+(date.getMonth()+1)+'/'+date.getDate();
          }
        }else{
          return '';
        }
      }
    },
    mounted () {
      this.getSessions();
    },
    updated () {
      var sessionId = this.$route.path.match(/\w{24}$/);
      if(sessionId && sessionId[0]){
        for(var l in this.sessions){
          if(this.sessions[l].sessionId == sessionId){
            this.currSeName = this.sessions[l].name;
          }
        }
      }
    }
  }
</script>