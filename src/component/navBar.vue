<template>
	<div id="navBar">
		<section class="user">
			<img :src="userPic">
		</section>
		<section>
			<ul class="list">
				<router-link tag="li" class="message" to="/index/message"></router-link>
				<router-link tag="li" class="contact" to="/index/contact"></router-link>
				<router-link tag="li" class="favorite" to="/index/favorite"></router-link>
			</ul>
		</section>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				userPic:'src/image/user.jpg',
      }
    },
    mounted: function(){
      this.userPic = JSON.parse(sessionStorage.info).headimg;
    }
	}
</script>

<style scoped>
	#navBar{
		float: left;
		height: 575px;
		width: 60px;
		background-color: rgb(40,41,42);
	}
	.user{
		text-align: center;
	}
	.user>img{
		width: 35px;
		vertical-align: middle;
		margin-top: 20px;
		cursor: pointer;
	}
	.list {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	}
	.list li{
		list-style: none;
		text-align: center;
		cursor: pointer;
		margin-top: 28px;
		width: 23px;
		height: 23px;
		background: url(../image/icons.png) no-repeat;
		overflow: hidden;
	}
	.message {
	  background-position: 0px 0px !important;
	}
	.contact {
    background-position: -23px 0px !important;
  }
  .favorite {
    background-position: -46px 0px !important;
  }
  .message.router-link-active {
    background-position: 0px -23px !important;
  }
  .contact.router-link-active {
    background-position: -23px -23px !important;
  }
  .favorite.router-link-active {
    background-position: -46px -23px !important;
  }
</style>