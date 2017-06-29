<template>
	<div class="loadding">
		<div class="proBox" v-if="pro<100">
			<div class="progress" id="progress" :style="{width:pro*0.14+'rem'}"></div>
			<div class="outter">
				<span :style="{left:pro*0.14-1+'rem'}" class="num">
					{{pro+'%'}}
					<span class="line"></span>
				</span>
			</div>
			<input type="range" id="range" class="range hide" v-model="pro" />
		</div>
		<router-link to="/home">
			<div class="info" v-if="pro==100">
				are you ready?
			</div>
		</router-link>
	</div>
</template>

<script>
	import { Msg } from 'vux'
	export default {
		name: 'loading',
		data () {
			return {
				pro : 0,
				interval : '',
				
			}
		},
		mounted () {
			this.interval = setInterval(() => {
		      this.pro += 2; 
		      if(this.pro == 100){
		      	clearInterval(this.interval);
		      }
		    }, 200)
		},
		components : {
			Range,
			Msg
		},
		methods : {
			
		}
	}
</script>

<style lang="scss">
 @import '../../style/mixin';
 .loadding{
 	width: 100%;	
 	height: 100%;
 	@include bis("http://img5.duitang.com/uploads/item/201506/12/20150612213623_ReyGM.jpeg");
 	background-size : cover;
 	background-position : center;
 	.proBox{
	 	@include wh(15rem, 1.5rem);
	 	@include cl;
	 	top: 80%;
	 	border: 1px solid red;
	 	padding:.5rem;
	 	background-color:$fc;
	 	@include borderRadius(.5rem);
	 	@include box-shadow(1px 1px #000000);
	 	.progress,.outter{
			position: absolute;
		 	@include wh(14rem, 0.5rem);
		 	border: 1px solid red;
		 	@include borderRadius(.2rem)
		 	background-color: #cccccc;
		}
		.progress{
		 	z-index: 1;
		 	padding: 0;
		 	background-color: red;
		}
		.outter{
			.num{
				position: absolute;
				bottom: -3rem;
				@include wh(1.8rem, 1.2rem);
				background-color: $fc;
				color: red;
				border: 1px solid red;
			 	@include borderRadius(40%);
			 	@include font(12px, 1);
			 	@include fcenter(1.2rem);
			 	@include box-shadow(0 2px #000000);
			 	.line{
			 		@include cl;
			 		@include wh(.4rem, 1.8rem);
			 		background-color: #000000;
			 		top: -1.8rem;
			 	}
			}
		}
	}
	.info{
		position: absolute;
	 	top: 80%;
	 	width: 100%;
	 	color:lightcyan;
	 	@include font(2rem, 1);
	 	@include fcenter(1);
	 	@include animation(big 5s infinite)
	}
 }

@include keyframes(big){
	from{@include transform(scale(0.8));}
	to{@include transform(scale(1.4));}
}
</style>