<template>
<div class="darenxiu">
  <video-player  ref="videoPlayer"
                 :options="playerOptions"
                 title="you can listen some event if you need"
                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)">
                 <!--@ended="onPlayerEnded($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)">-->
  </video-player>
</div>
</template>

<script>
  import { videoPlayer } from 'vue-video-player'
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // require('some-videojs-plugin')
  export default {
    data() {
      return {
        playerOptions: {

          // component options
          start: 0,
          playsinline: false,

          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "http://p5.image.hiapk.com/uploads/allimg/140710/7730-140G01II0.jpg",
        }
      }
    },
    components : {
    	videoPlayer
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
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      }
      // ...player event
    }
  }
</script>
<style lang="scss">
 @import '../../../style/mixin';
 .darenxiu{
 	width: 100%;	
 	height: 100%;
 	@include bis("http://mvimg1.meitudata.com/569c67680f3bb4331.jpg");
 }

</style>