import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'portfolio',
			component: () => import('../views/PortfolioView.vue'),
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('../views/ProjectsView.vue'),
		},
		{
			path: '/sketches',
			name: 'sketches',
			component: () => import('../views/SketchesView.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
	],
})

export default router
