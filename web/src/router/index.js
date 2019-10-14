import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:"/login"
    },
    {
      path: '/login',
      name: 'login',
      component:  resolve => require(['@/views/login/login'],resolve)
    },
    {
      path: '/register',
      name: 'register',
      component:  resolve => require(['@/views/register/register'],resolve)
    },
    {
      path: '/main',
      name: 'main',
      component:  resolve => require(['@/views/main/main'],resolve),
      children:[
        {
          path: '/main/xzbg',
          name: 'xzbg',
          component:  resolve => require(['@/views/N_xzbg/xzbg'],resolve),
          children:[
            {
              path: '/main/xzbg/dbrw',
              name: 'xzbg_dbrw',
              component:  resolve => require(['@/views/N_xzbg/dbrw'],resolve)
            },
            {
              path: '/main/xzbg/ybrw',
              name: 'xzbg_ybrw',
              component:  resolve => require(['@/views/N_xzbg/ybrw'],resolve)
            },
            {
              path: '/main/xzbg/sygg',
              name: 'xzbg_sygg',
              component:  resolve => require(['@/views/N_xzbg/sygg'],resolve)
            },
            {
              path: '/main/xzbg/xzgg',
              name: 'xzbg_xzgg',
              component:  resolve => require(['@/views/N_xzbg/xzgg'],resolve)
            },
            {
              path: '/main/xzbg/ygzp',
              name: 'xzbg_ygzp',
              component:  resolve => require(['@/views/N_xzbg/ygzp'],resolve)
            },
            {
              path: '/main/xzbg/tjbb',
              name: 'xzbg_tjbb',
              component:  resolve => require(['@/views/N_xzbg/tjbb'],resolve)
            }
          ]
        },
        {
          path: '/main/swgl',
          name: 'swgl',
          component:  resolve => require(['@/views/N_swgl/swgl'],resolve)
        },
        {
          path: '/main/grbg',
          name: 'grbg',
          component:  resolve => require(['@/views/N_grbg/grbg'],resolve)
        },
        {
          path: '/main/zyzx',
          name: 'zyzx',
          component:  resolve => require(['@/views/N_zyzx/zyzx'],resolve)
        },
        {
          path: '/main/xtgl',
          name: 'xtgl',
          component:  resolve => require(['@/views/N_xtgl/xtgl'],resolve)
        }
      ]
    }
  ]
})


//路由守卫
router.beforeEach(function(to,from,next){
  const next_route = ['/','/login']
  if(next_route.indexOf(to.path)<0){
    //检查token
    var token = localStorage.getItem("hzst_token");
    if(!token){
      router.push({path:"/login"})
    }
  }
  next();
})



export default router;

