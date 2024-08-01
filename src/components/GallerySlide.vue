<script lang="ts" setup>
import router from '@/router'
import { ref } from 'vue'

type Props = {
	linkList: string[]
	startIndex: number
	path: string
}

const gallerySlideContainer = ref<HTMLDivElement>()
const showImage = ref<HTMLImageElement>()
const { linkList, startIndex, path } = defineProps<Props>()
const index = ref(startIndex)

const slideImage = (event: MouseEvent) => {
	if (!event.target) return
	const target = event.target as HTMLElement
	if (target !== gallerySlideContainer.value && target !== showImage.value) return
	const gallerySlideContainerWidth = gallerySlideContainer.value?.clientWidth ?? 0
	const mouseX = event.clientX
	if (mouseX < gallerySlideContainerWidth / 2) {
		index.value--
		if (index.value < 0) index.value = linkList.length - 1
	} else {
		index.value++
		if (index.value === linkList.length) index.value = 0
	}
	router.push({ path: `${path}/${index.value}` })
}
</script>

<template>
	<div ref="gallerySlideContainer" class="gallery-slide-container" @click="slideImage($event)">
		<div class="icon-wrapper">
			<RouterLink :to="`${path}/`">
				<button class="menu-toggler" @click="$emit('close')">
					<i class="fa-regular fa-close"></i>
				</button>
			</RouterLink>
		</div>
		<Transition name="fade">
			<div :key="index" class="image-container">
				<img ref="showImage" :src="linkList[index]" />
			</div>
		</Transition>
	</div>
</template>

<style scoped lang="scss">
.icon-wrapper {
	position: absolute;
	top: 0;
	right: 0;
	margin-top: 1em;
	margin-right: 1em;
	button {
		color: var(--c-faded-text);
	}
}
.image-container {
	position: absolute;
	padding: 1rem;
}
.gallery-slide-container {
	position: fixed;
	top: 0;
	z-index: 100;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	background: var(--c-faded-background);
}
</style>
