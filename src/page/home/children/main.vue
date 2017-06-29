<template>
	<div class="main">
    	<div class="stoptime">
    		<span class="info">距离活动结束:</span>
    		<clocker time="2017-06-30" slot="value" style="padding-left: 4rem;">
	          <span class="day">%_D1</span>
	          <span class="day">%_D2</span>天
	          <span class="day">%_H1</span>
	          <span class="day">%_H2</span>时
	          <span class="day">%_M1</span>
	          <span class="day">%_M2</span>分
	          <span class="day" style="color: lightpink;">%_S1</span>
	          <span class="day" style="color: lightskyblue;">%_S2</span>秒
	        </clocker>
    	</div>
    	<nav class="navgatior">
    		<div class="flex-box">
		      <dl class="flex-pro flex-top" @click="gotoAddress('/home/choujiang')">
		      	<dd>参与</dd>
		      	<dt>抽奖</dt>
		      </dl>
		      <dl class="flex-pro flex-top" @click="gotoAddress('/home/darenxiu')">
		      	<dd>美装</dd>
		      	<dt>直播</dt>
		      </dl>
		    </div>
		    <div class="flex-box">
		      <dl class="flex-pro" @click="gotoAddress('/home/payful')">
		      	<dd class="left" style="margin-top: 10px;margin-left: 10px;width: 40px;">什么值得</dd>
		      	<dt class="left" style="margin-top: 10px;font-size: 30px;">买</dt>
		      </dl>
		      <dl class="flex-pro" @click="gotoAddress('/home/photo')">
		      	<dd style="text-align: center;margin: 4px;">晒照</dd>
		      	<dt style="text-align: center;">赢奖</dt>
		      </dl>
		    </div>
    	</nav>
	</div>
</template>

<script>
	import { Clocker } from 'vux'
	export default {
		data () {
			return {
				clickIndex : 0
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
			Clocker
		},
		methods : {
			gotoAddress(path){
        		this.$router.push(path)
        	}
		}
	}
</script>

<style lang="scss">
 @import '../../../style/mixin';
 .main{
 	width:100%;height:100%;
 	@include bis("http://mvimg1.meitudata.com/569c67680f3bb4331.jpg");
 	background-size : cover;
 	background-position : center;
 	.stoptime{
	 	background-color:#333333;
	 	.info{
	 		@include sc(1.5rem,red);
	 	}
	 	.vux-clocker-tpl{
	 		color:$fc;
	 		.day {
			  color:$fc;
			  text-align:center;
			  display:inline-block;
			  border-radius:3px;
			}
	 	}
	 }
	.navgatior{
		position: absolute; 	
		@include cl;
		bottom: 20%;
		width: 300px;
		.flex-box{
			position: relative;
			z-index: 2;
			@include fj(space-around)
			margin-top: 40px;
			.flex-pro{
				@include wh(120px,60px)
				position: relative;
				overflow: hidden;
				@include borderRadius(5px);
				background: hsla(0,0%,100%,.3);
				dd{
					color:lightgreen;
				}
				dt{
					color:lightblue;
				}
			}
			.flex-pro::before{
				z-index: -1;
				content: '';
				position: absolute;
				top: 0;left: 0;right: 0;bottom: 0;
				filter: blur(5px);
				margin: -30px;
				@include bis("http://mvimg1.meitudata.com/569c67680f3bb4331.jpg");
			}
			.flex-top{
				dd{
					position: absolute;
					left: 8px;top: 8px;
					width: 30%;
				}
				dt{
					position: absolute;
					right: 8px;bottom: 8px;
				}
			}
		}
	}
 }
</style>