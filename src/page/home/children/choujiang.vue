<template>
	<div class="choujiang">
    	<h2 class="title">幸运抽奖啦</h2>
    	<div class="tips clear">
    		<p class="times left">您还有<span>{{times}}</span>次抽奖机会</p>
		    <marquee>
		      <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</marquee-item>
		    </marquee>
    	</div>
    	<div class="zhuanpan">
    		<img src="http://img3.imgtn.bdimg.com/it/u=3627531575,3752076803&fm=214&gp=0.jpg" width="260px"/>
    		<div class="zhizhen"  :style="{transform:'rotate('+deg+'deg)'}" @click='rotate'></div>
    		<div class="award">{{sAward}}</div>
    	</div>
    	 <div v-transfer-dom>
	      <popup v-model="showTip" position="top" :show-mask="false">
	        <div class="position-vertical-demo" style="text-align: center;color: red;">
	        	不要太贪心哦
	        </div>
	      </popup>
	    </div>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem , Marquee , MarqueeItem , Popup , TransferDom} from 'vux'
	export default {
		directives: {
		    TransferDom
		},
		data () {
			return {
				times : 3,
				asyncCount : [1,2,3,4,5],
				deg:0,
				bBtn : true,
				sAward : '',
				showTip : false
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
    		TabbarItem,
    		Marquee,
    		MarqueeItem,
    		Popup
		},
		methods : {
			rotate () {
				if(this.bBtn && this.times > 0){
					this.times --;
					this.deg = 0;
					this.bBtn = false;
					let oThat = this;
					roll(oThat);
				}else{
					this.showTip = true;
				}
			}
		},
		watch: {
		    showTip (val) {
		      if (val) {
		        setTimeout(() => {
		          this.showTip = false
		        }, 1000)
		      }
		    }
		}
	}
	//操作滚动
	function roll(oThat){
		let iTimer = '';
		let rollObj = getRollDeg();
		let speed = 5;
		iTimer = setInterval(()=>{
			oThat.deg += speed;
			if(oThat.deg >= rollObj.maxDeg - 90 && speed > 2){
					speed -= 0.5;
			}
			if(oThat.deg >= rollObj.maxDeg){
				clearInterval(iTimer);
				oThat.bBtn = true;
				switch (rollObj.sAward){
					case 3: oThat.sAward = '恭喜获得三等奖';
						break;
					case 2: oThat.sAward = '恭喜获得二等奖';
						break;
					case 1: oThat.sAward = '恭喜获得一等奖';
						break;
					case 0: oThat.sAward = '感谢您的参与';
						break;
					default:
						break;
				}
			}
		},10)
	}
	//获取滚动角度
	function getRollDeg(){
		let randNum = Math.random();
		let rootDeg = 360 / 6; 
		let maxDeg = 360 * Math.floor(Math.random() * 3 + 1); //转的角度(最少1圈)
		let sAward; //奖项
		let aCy = [1,3,5] //参与奖
		if(randNum > 0.5){
			var num = Math.floor(Math.random() * aCy.length);
			maxDeg += rootDeg * aCy[num];
			sAward = 0;
		}else if(randNum > 0.3){
			maxDeg += rootDeg * 4;
			sAward = 3;
		}else if(randNum > 0.1){
			maxDeg += rootDeg * 2;
			sAward = 2;
		}else{
			maxDeg += 0;
			sAward = 1;
		}
		return {
			maxDeg,
			sAward
		}
	}
</script>

<style lang="scss">
 @import '../../../style/mixin';
 .choujiang{
 	width:100%;height:100%;
 	@include bis("http://img5.duitang.com/uploads/item/201509/05/20150905212128_mJuZL.jpeg");
 	.title{
 		@include cl;
 		top:20%;
 		color : darkblue;
 	}
 	.tips{
 		@include cl;
 		top:30%;
 		width:100%;
 		font-size: 12px;
 		height:18px;
 		@include fj(center);
 		p{
 			background-color: #444;
 			line-height: 18px;
 			color:#ffffff;
 			opacity: .6;
 			span{
 				font-size: 18px;
 				color:orange;
 			}
 		}
 		.vux-marquee{
 			background-color: #666;
 			width: 30%;
 			text-align: center;
 			line-height:18px;
 			vertical-align: baseline;
 			li{
 				color: yellowgreen;
 			}
 		}
 	}
 	.zhuanpan{
 		@include cl;
 		top: 35%;
 		.zhizhen{
 			position: absolute;
 			left:50%;top: 50%;
 			@include wh(30px,30px);
 			margin: -15px 0 0 -15px;
 			background-color: #444444;
 		}
 		.zhizhen:after{
 			content: '';
 			position: absolute;
 			top: -50px;left:13px;
 			display: block;
 			@include wh(4px,50px);
 			background-color: #444444;
 			border-radius: 60px 60px 0 0;
 		}
 		.award{
 			text-align: center;
 			color: darkblue;
 			font-size: 24px;
 		}
 	}
 }
 


</style>