import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = []

const files = require.context('@/app', true, /routes.js/)

files.keys().forEach((key) => {
  if (!files(key).default) {
    return
  }

  const routesFile = files(key).default
  const length = routesFile.length
  for (let i = 0; i < length; i++) {
    routes.push(routesFile[i])
  }
})

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: routes
})
