<template>
	<div class="wrapper">
    	哈哈哈
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
		data () {
			return {
				
				
			}
		},
		beforeMount () {
			// 显示
			this.$vux.loading.show({
			 text: 'Loading'
			})
			setTimeout(() =>{
				// 隐藏
				this.$vux.loading.hide()
			},500)		
		},
		mounted () {
			
		},
		components : {
			Tabbar,
    		TabbarItem
		},
		methods : {
			
		}
	}
</script>

<style lang="scss">
 @import '../../../style/mixin';
 /*.wrapper{
 	width: 100%;	
 	height: 100%;
 	@include bis("http://mvimg1.meitudata.com/569c67680f3bb4331.jpg");
 	background-size : cover;
 	background-position : center;
 	.weui-tabbar__item{
 		background-color: lightcoral;
 		border:1px solid #ffffff;
 		span{
 			color: white;
 		}
 	}
 }*/

</style>