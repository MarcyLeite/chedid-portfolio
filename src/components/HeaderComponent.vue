<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SocialBar from '../components/SocialBar.vue'
const showMenu = ref(false)
const toggleMenu = () => {
	showMenu.value = !showMenu.value
}
const navLinkList = [
	{
		to: '/',
		display: 'Portfolio',
	},
	{
		to: '/projects',
		display: 'Projects',
	},
	{
		to: '/sketches',
		display: 'Sketches',
	},
	{
		to: '/about',
		display: 'About',
	},
]
</script>

<template>
	<header class="header">
		<div class="header-announcement-bar">
			<RouterLink class="title" to="/">Bianca Chedid</RouterLink>
			<div class="icon-wrapper">
				<Transition name="toggle-menu">
					<button class="menu-toggler" v-if="!showMenu" @click="toggleMenu()">
						<i class="fa-regular fa-bars"></i>
					</button>
					<button class="menu-toggler" v-else @click="toggleMenu()">
						<i class="fa-regular fa-close"></i>
					</button>
				</Transition>
			</div>
		</div>
		<Transition name="toggle-menu">
			<div v-if="showMenu" class="header-menu">
				<nav class="menu-navegation-wrapper">
					<div v-for="(navLink, i) in navLinkList" :key="i" @click="toggleMenu">
						<RouterLink :to="navLink.to">{{ navLink.display }}</RouterLink>
					</div>
				</nav>
				<SocialBar></SocialBar>
			</div>
		</Transition>
	</header>
</template>

<style lang="scss">
.title {
	font-size: 2rem;
	font-family: 'Sora', sans-serif;
	font-optical-sizing: auto;
	font-weight: 600;
	font-style: normal;
}
.header {
	position: sticky;
	z-index: 100;
	top: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	background: var(--c-background);
}
.menu-toggler {
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	aspect-ratio: 1;
	svg {
		display: block;
	}
}
.header-announcement-bar {
	z-index: 1;
	position: relative;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	align-items: center;
}
.header-menu {
	position: absolute;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	flex-grow: 1;

	background: inherit;
}
.menu-navegation-wrapper {
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	align-items: center;
}

.toggle-menu-enter-active,
.toggle-menu-leave-active {
	transition: opacity 0.5s ease;
	.menu-navegation-wrapper {
		transition: transform 1s ease;
	}
}

.toggle-menu-enter-from,
.toggle-menu-leave-to {
	opacity: 0;
	.menu-navegation-wrapper {
		transform: translate(0, 4rem);
	}
}
</style>
