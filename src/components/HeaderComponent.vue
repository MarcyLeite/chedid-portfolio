<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import SocialBar from '../components/SocialBar.vue'
const isShowingMenu = ref(false)
const toggleMenu = () => {
	isShowingMenu.value = !isShowingMenu.value
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

let resizeTimer: number
const blockTransition = () => {
	document.body.classList.add('resize-animation-stopper')
	clearTimeout(resizeTimer)
	resizeTimer = setTimeout(() => {
		document.body.classList.remove('resize-animation-stopper')
	}, 400)
}

onMounted(() => {
	window.addEventListener('resize', blockTransition)
})
onUnmounted(() => {
	window.removeEventListener('resize', blockTransition)
})
</script>

<template>
	<header class="header">
		<div class="header-announcement-bar">
			<h1 class="title">
				<RouterLink to="/">Bianca Chedid</RouterLink>
			</h1>
			<div class="icon-wrapper">
				<button
					class="menu-toggler"
					:class="{ 'mobile-hide': isShowingMenu }"
					@click="toggleMenu()"
				>
					<i class="fa-regular fa-bars"></i>
				</button>
				<button
					class="menu-toggler"
					:class="{ 'mobile-hide': !isShowingMenu }"
					@click="toggleMenu()"
				>
					<i class="fa-regular fa-close"></i>
				</button>
			</div>
		</div>
		<div class="header-menu" :class="{ 'mobile-hide': !isShowingMenu }">
			<nav class="menu-navegation-wrapper" :class="{ 'mobile-hide': !isShowingMenu }">
				<div v-for="(navLink, i) in navLinkList" :key="i" @click="toggleMenu">
					<RouterLink :to="navLink.to">{{ navLink.display }}</RouterLink>
				</div>
			</nav>
			<div class="desktop-hide">
				<SocialBar></SocialBar>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
.title {
	justify-content: left;
	display: flex;
	a {
		font-size: 2rem;
		font-family: 'Sora', sans-serif;
		font-optical-sizing: auto;
		font-weight: 600;
		font-style: normal;
	}
}
.header {
	max-width: 1680px;
	margin: auto;
	position: sticky;
	z-index: 100;
	top: 0;
	display: flex;
	flex-direction: column;
	width: 100%;

	padding: 2rem;

	box-shadow: 10px black 10;

	background: var(--c-background);
}
.menu-toggler {
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 1;

	transition: all 0.5s ease;
}

.mobile-hide {
	opacity: 0;
	visibility: hidden;
}

.header-announcement-bar {
	z-index: 1;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.header-menu {
	position: absolute;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	top: 0;
	left: 0;
	flex-grow: 1;

	transition: all 0.5s ease;
	background: inherit;
}

.menu-navegation-wrapper {
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	transition: all 0.5s ease;
	&.mobile-hide {
		transform: translate(0, 10rem);
	}
}

@media only screen and (min-width: 760px) {
	.icon-wrapper,
	.menu-social-bar {
		display: none;
	}
	.desktop-hide {
		display: none;
		visibility: hidden;
	}
	.mobile-hide {
		opacity: 1;
		visibility: visible;
		transition: none;
	}
	.header-menu {
		position: relative;
		height: auto;
		width: auto;
	}
	.menu-navegation-wrapper,
	.header {
		flex-direction: row;
	}

	.header {
		padding: 2rem 4rem;
	}

	.menu-navegation-wrapper {
		justify-content: end;
		&.mobile-hide {
			transform: translate(0, 0);
		}
	}
}
</style>
