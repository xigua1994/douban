import Vue from 'vue'
import Router from 'vue-router'
import ComingSoon from '@/components/ComingSoon'
import MovieDetail from '@/components/MovieDetail'
import CelebrityDetail from '@/components/CelebrityDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ComingSoon',
      component:ComingSoon
    },
    {
      path: '/search',
      name: 'ComingSoon',
      component:ComingSoon
    },
    {
    	path: '/in_theaters',
    	name: 'ComingSoon',
      component:ComingSoon
    },
	{
		path: '/coming_soon',
		name: 'ComingSoon',
		component:ComingSoon
	},
	{
		path: '/top250',
		name: 'ComingSoon',
    component:ComingSoon
	},
  {
    path : '/subject/:id',
    name:'MovieDetail',
    component:MovieDetail
  },
  {
    path:'/celebrity/:id',
    name:'CelebrityDetail',
    component:CelebrityDetail
  }
  ]
})
