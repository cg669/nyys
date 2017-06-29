<template>
	<div class="wrapper">
		<tabbar>
	      <tabbar-item link="/home/choujiang" badge="2" :selected="showId==1">
	        <span slot="label">抽奖</span>
	      </tabbar-item>
	      <tabbar-item link="/home/photo" badge="2" :selected="showId==2">
	        <span slot="label">传美照</span>
	      </tabbar-item>
	      <tabbar-item show-dot link="/home/payful" badge="2" :selected="showId==3">
	        <span slot="label">值得买</span>
	      </tabbar-item>
	      <tabbar-item badge="2" link="/home/darenxiu" :selected="showId==4">
	        <span slot="label">达人秀</span>
	      </tabbar-item>
	       <tabbar-item badge="1" link="/home/main" :selected="showId==0">
	        <span slot="label">主会场</span>
	      </tabbar-item>
    	</tabbar>
    	<transition name="router-fade" mode="out-in">
    		<router-view></router-view>
    	</transition>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
		data () {
			return {
				showId : 0
			}
		},
		mounted () {
			
		},
		components : {
			Tabbar,
    		TabbarItem
		},
		methods : {
			setShow () {
				this.showId = this.$route.meta.id;
				console.log(this.showId);
			}
		},
		computed : {
			
		},
		watch : {
			// 如果路由有变化，会再次执行该方法
    		'$route': 'setShow'
		}
	}
</script>

<style lang="scss">
 @import '../../style/mixin';
 .wrapper{
 	width: 100%;	
 	height: 100%;
 	.weui-tabbar__item{
 		background-color: lightcoral;
 		border:1px solid #ffffff;
 		span{
 			color: white;
 		}
 	}
 	.weui-bar__item_on{
 		background-color: darkred;
 	}
 }
 
 /*路由动画*/
.router-fade-enter-active, .router-fade-leave-active {
  	transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  	opacity: 0;
}
</style>