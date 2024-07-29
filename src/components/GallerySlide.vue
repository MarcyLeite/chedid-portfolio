<script lang="ts" setup>
import { ref } from 'vue'

type Props = {
	linkList: string[]
	startIndex: number
}

const gallerySlideContainer = ref<HTMLDivElement>()
const showImage = ref<HTMLImageElement>()
const { linkList, startIndex } = defineProps<Props>()
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
}
</script>

<template>
	<div ref="gallerySlideContainer" class="gallery-slide-container" @click="slideImage($event)">
		<div class="icon-wrapper">
			<button class="menu-toggler" @click="$emit('close')">
				<i class="fa-regular fa-close"></i>
			</button>
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
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	background-color: var(--c-faded-background);
}
</style>
