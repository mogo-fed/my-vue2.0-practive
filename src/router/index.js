import Vue from 'vue'
import Router from 'vue-router'
import Record from '@/components/Record'

import Test from '@/components/Test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Record',
      component: Record
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
