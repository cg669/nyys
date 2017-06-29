import App from '../App'

const loading = r => require.ensure([], () => r(require('../page/loading/loading')), 'loading')
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const main = r => require.ensure([], () => r(require('../page/home/children/main')), 'main')
const choujiang = r => require.ensure([], () => r(require('../page/home/children/choujiang')), 'choujiang')
const darenxiu = r => require.ensure([], () => r(require('../page/home/children/darenxiu')), 'darenxiu')
const photo = r => require.ensure([], () => r(require('../page/home/children/photo')), 'photo')
const payful = r => require.ensure([], () => r(require('../page/home/children/payful')), 'payful')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/loading'
        },
        //加载页
        {
            path: '/loading',
            component: loading
        },
        //首页
        {
            path: '/home',
            component: home,
            //首页下的子路由
            children : [
		            {
		            	path: '',
		            	redirect: '/home/main',
		            },{
		            	path: '/home/main',
		            	component: main,
		            	meta : {
		            		id : 0
		            	}
		            },{
		            	path: '/home/choujiang',
		            	component: choujiang,
		            	meta : {
		            		id : 1
		            	}
		            },{
		            	path: '/home/darenxiu',
		            	component: darenxiu,
		            	meta : {
		            		id : 4
		            	}
		            },{
		            	path: '/home/photo',
		            	component: photo,
		            	meta : {
		            		id : 2
		            	}
		            },{
		            	path: '/home/payful',
		            	component: payful,
		            	meta : {
		            		id : 3
		            	}
		            }
            ]
        }
    ]    
}]