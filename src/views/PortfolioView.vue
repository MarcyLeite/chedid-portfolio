<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import { getRandomInt } from '@/utils/math-utils'
import SocialBar from '@/components/SocialBar.vue'
import GalleryComponent from '@/components/GalleryComponent.vue'
import GallerySlide from '@/components/GallerySlide.vue'
import { ref } from 'vue'

import { useRoute } from 'vue-router'

const baseSeed = getRandomInt(10000000)
const seedList = Array.from(Array(10).keys()).map((i) => baseSeed + i)
const linkList = seedList.map((seed) => `https://picsum.photos/seed/${seed}/1920/1080`)

const isSlideShowing = ref(false)
const slideIndex = ref(0)

const route = useRoute()

const showSlide = (i: number) => {
	isSlideShowing.value = true
	slideIndex.value = i
}

if (route.params.id && typeof route.params.id === 'string') showSlide(Number(route.params.id))
</script>
<template>
	<div>
		<HeaderComponent></HeaderComponent>
		<Transition name="fade">
			<GallerySlide
				v-if="isSlideShowing"
				:key="slideIndex"
				:link-list="linkList"
				:start-index="slideIndex"
				@close="isSlideShowing = false"
				path=""
			>
			</GallerySlide>
		</Transition>
		<GalleryComponent
			:link-list="linkList"
			path=""
			@thumb-click="(i) => showSlide(i)"
		></GalleryComponent>
		<SocialBar></SocialBar>
	</div>
</template>

<style scoped lang="scss"></style>
