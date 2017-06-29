<template>
	<div class="wrapper" style=""></div>
</template>

<script>
	import { Msg } from 'vux'
	export default {
		name: 'wrapper',
		data () {
			return {
				bgUrl:"../../images/专题加载页.jpg"
			}
		},
		mounted () {
			
		},
		components : {
			
		},
		methods : {
			
		}
	}
</script>

<style lang="scss">
 @import '../../style/mixin';
 .wrapper{
 	width: 100%;	
 	height: 100%;
 	@include bis("../../images/专题加载页.jpg");
 	background-size : cover;
 	background-position : center;
 }

</style>