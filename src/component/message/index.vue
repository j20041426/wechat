<style scoped>
*{
	margin: 0;padding: 0;
	font-family: '微软雅黑';
}
	.list-li:hover{
		background-color: rgb(222,220,219);
	}
	.list-li{
		padding: 12px 10px;
		overflow: hidden;
	}
	#list>ul{
		padding:0;
		margin:0;
		list-style: none;
		cursor: default;
	}
	.left{
		float: left;
		height: 40px;
	}
	.left>img{
		width: 40px;
		vertical-align: middle;
	}
	#contactList{
		float: left;
		width: 250px;
		height: 575px;
		background-color: rgb(233,231,230);
	}
	.search{
		text-align: center;
		padding-top: 20px;
		padding-bottom: 15px;
	}
	.searchPart{
		background-color: rgb(229,226,226);
		border: 1px solid rgb(201,199,198);
		width: 220px;
		height: 20px;
		padding: 3px 5px;
	}
	.right{
		height: 40px;
		width: 190px;
		float: left;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
	}
	.right>p{
		padding-left: 10px;		
		flex:1;
		line-height: 20px;
	}
	.isName{
		font-size: 10.5pt;
		position: relative;
	}
	.isContent{
		font-size: 10px;
		color: rgb(153,153,153);
	}
	.isTime{
		position: absolute;
		right: 0;
		font-size: 8pt;
		color: rgb(153,153,153);
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
  				<router-link tag="li" class="list-li" v-for="contact in contacts" to="/message/01" :key="contact">
  					<div class="left"><img :src="contact.userIcon"></div>
  					<div class="right">
  						<p class="isName">{{contact.name}}<span class="isTime">{{contact.timer}}</span></p>
  						<p class="isContent">{{contact.content}}</p>
  					</div>
  				</router-link>
  			</ul>
  		</section>
  	</div>
  	<router-view></router-view>
  </div>
</template>

<script type="text/javascript">
	export default {
  		data () {
    			return {
    				contacts:[
    					{userIcon:'src/image/user1.jpg',name:'张三',content:'今天天气如何？',timer:'10:30'},
    					{userIcon:'src/image/user2.jpg',name:'李四',content:'中午吃啥',timer:'15:30'},
    					{userIcon:'src/image/user3.jpg',name:'周吴',content:'哈哈哈哈哈哈',timer:'18:12'}
    				]
   			 }
 		 }
	}
</script>

