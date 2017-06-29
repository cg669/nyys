<template>
	<div class="payful">
		<view-box ref="viewBox">
    	 <div style="margin: 10px;overflow: hidden;" v-for="item in dataList">
	      <masker style="border-radius: 2px;">
	        <div class="m-img" :style="{backgroundImage: 'url(' + item.goodsListImg + ')'}"></div>
	        <div slot="content" class="m-title">
	          {{item.goodsName}}
	          <br/>
	          <span class="m-time">2016-03-18</span>
	        </div>
	      </masker>
	    </div>
	   </view-box>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem , ViewBox , Masker} from 'vux'
	export default {
		data () {
			return {
				dataList : ''
			}
		},
		beforeMount () {
			// 显示
			this.$vux.loading.show({
			 text: 'Loading'
			})
			var oThat = this;
			//获取数据
			//异步请求数据
			this.$http({
				url:'http://datainfo.duapp.com/shopdata/getGoods.php?callback=',
				method : 'get',
			}).then(function(data){
				var oData = eval(data.data);
				oThat.dataList = oData;
			}).then(function(){
				oThat.$vux.loading.hide()
			})
		},
		mounted () {

		},
		components : {
			Tabbar,
    		TabbarItem,
    		ViewBox,
    		Masker
		},
		methods : {
			
		}
	}
</script>

<style lang="scss">
 @import '../../../style/mixin';
.payful{
	height:100%;
	.m-img {
	  padding-bottom: 33%;
	  display: block;
	  position: relative;
	  max-width: 100%;
	  background-size: cover;
	  background-position: center center;
	  cursor: pointer;
	  border-radius: 2px;
	}
	
	.m-title {
	  color: #fff;
	  text-align: center;
	  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
	  font-weight: 500;
	  font-size: 16px;
	  position: absolute;
	  left: 0;
	  right: 0;
	  width: 100%;
	  text-align: center;
	  top: 50%;
	  transform: translateY(-50%);
	}
	
	.m-time {
	  color: #FFFFFF;
	  font-size: 12px;
	  padding-top: 4px;
	  border-top: 1px solid #f0f0f0;
	  display: inline-block;
	  margin-top: 5px;
	}
}
</style>