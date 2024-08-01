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
			path: '/sketches',
			component: () => import('../views/PortfolioView.vue'),
		},
		{
			path: '/:id',
			name: 'portfolioView',
			component: () => import('../views/PortfolioView.vue'),
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('../views/ProjectsListView.vue'),
		},
		{
			path: '/projects/:projectId',
			component: () => import('../views/ProjectView.vue'),
		},
		{
			path: '/projects/:projectId/:id',
			component: () => import('../views/ProjectView.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
	],
})

export default router
