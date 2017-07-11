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
		display: flex;
		align-items: center;
		cursor: default;
	}
	#list>ul{
		padding:0;
		margin:0;
		list-style: none;
	}
	.left{
		height: 34px;
	}
	.left>img{
		width: 34px;
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
		width: 190px;
		font-size: 10.5pt;
		margin-left: 10px;
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
  				<router-link tag="li" class="list-li" v-for="contact in contacts" :to="'/index/contact/'+contact.type+'/'+contact.userId" :key="contact.userId">
  					<div class="left"><img :src="contact.userIcon"></div>
  					<div class="right">{{contact.name}}</div>
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
    				contacts:[]
   			 }
 		 },
 		 methods: {
 		   getContacts () {
 		     this.$http.post('http://app-hqqsk5cknw2ke29.leanapp.cn/contact/getContacts',{userId:sessionStorage.userId}).then((result)=>{
 		       this.$data.contacts = result.body.data;
 		     });
 		   }
 		 },
 		 mounted () {
 		   this.getContacts();
 		 }
	}
</script>

