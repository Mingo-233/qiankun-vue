import { createApp } from 'vue'
import App from './App.vue'
// import router  from './router/index'

// import VueRouter from 'vue-router'
import * as VueRouter from 'vue-router'
  const routes = [
  {
    path: '/vv',
    name: 'vv',
    component: () => import('./components/HelloWorld.vue')
  },
]
// const router = VueRouter.createRouter({
//   history:VueRouter.createWebHashHistory(),
//   routes
// })





let router = null;
let app = null;
  //下面的 /star  与主应用  registerMicroApps 中的  activeRule 字段对应
function render(props = {}) {
  const { container } = props;
   router = VueRouter.createRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/star' : '/',
    history:VueRouter.createWebHashHistory(),
    routes
  })
  app = createApp(App)
  app.use(router)
  app.mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
 //props 包含主应用传递的参数  也包括为子应用 创建的节点信息
  console.log(props)
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
