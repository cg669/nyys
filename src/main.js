// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import routes from './router/router'
import  { LoadingPlugin } from 'vux'
import { AjaxPlugin } from 'vux'
import VueVideoPlayer from 'vue-video-player'

require('es6-promise').polyfill()

Vue.use(VueRouter)
Vue.use(LoadingPlugin)
Vue.use(AjaxPlugin)
Vue.use(VueVideoPlayer)

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition ||0}
		}
	}
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app-box')
