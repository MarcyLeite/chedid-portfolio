<script setup lang="ts">
import GalleryComponent from '@/components/GalleryComponent.vue'
import GallerySlide from '@/components/GallerySlide.vue'
import SocialBar from '@/components/SocialBar.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import { getRandomInt } from '@/utils/math-utils'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()

const baseSeed = getRandomInt(10000000)
const seedList = Array.from(Array(10).keys()).map((i) => baseSeed + i)
const linkList = seedList.map((seed) => `https://picsum.photos/seed/${seed}/1920/1080`)

const projectId = route.params.projectId
const path = `/projects/${projectId}`

const isSlideShowing = ref(false)
const slideIndex = ref(0)

const showSlide = (i: number) => {
	isSlideShowing.value = true
	slideIndex.value = i
}

if (route.params.id && typeof route.params.id === 'string') showSlide(Number(route.params.id))
</script>
<template>
	<div class="wrapper">
		<HeaderComponent></HeaderComponent>
		<Transition name="fade">
			<GallerySlide
				v-if="isSlideShowing"
				:key="slideIndex"
				:link-list="linkList"
				:start-index="slideIndex"
				@close="isSlideShowing = false"
				:path="path"
			>
			</GallerySlide>
		</Transition>
		<div class="info-wrapper">
			<h2>Hello World!</h2>
			<p>
				My Graduation Project of two years, Abaddon! This initially began as one of
				Artcenter's first game capstone projects, directed by Clayton Bonura and me. These
				are a few (and the best) pages from the book, that I will be presenting at
				Artcenter's graduation show :)
			</p>
			<p>
				The story, game design, and IP is owned and copyrighted by Clayton Bonura. The art,
				art direction, and designs you see here are owned and copyrighted by me.
			</p>
		</div>
		<GalleryComponent
			:link-list="linkList"
			:path="path"
			@thumb-click="(i) => showSlide(i)"
		></GalleryComponent>
		<SocialBar></SocialBar>
	</div>
</template>

<style lang="scss">
.wrapper {
	position: relative;
	text-align: justify;
}
.info-wrapper {
	font-size: 0.7rem;
	padding: 1.5rem;
	h2 {
		font-size: 1.4rem;
		font-weight: bold;
		text-align: center;
		padding: 0.8rem;
	}
	p {
		margin-bottom: 1rem;
	}
}
@media only screen and (min-width: 760px) {
	.info-wrapper {
		max-width: 760px;
		margin: auto;
	}
}
</style>
