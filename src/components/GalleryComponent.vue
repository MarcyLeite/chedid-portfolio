<script lang="ts" setup>
import GallerySlide from '@/components/GallerySlide.vue'
import { ref } from 'vue'

type Props = {
	linkList: string[]
}

const { linkList } = defineProps<Props>()

const isSlideShowing = ref(false)
const slideIndex = ref(0)

const showSlide = (i: number) => {
	isSlideShowing.value = true
	slideIndex.value = i
}
</script>
<template>
	<div>
		<Transition name="fade">
			<GallerySlide
				v-if="isSlideShowing"
				:key="slideIndex"
				:link-list="linkList"
				:start-index="slideIndex"
				@close="isSlideShowing = false"
			>
			</GallerySlide>
		</Transition>
		<div class="gallery-container">
			<button
				v-for="(link, i) in linkList"
				:key="i"
				class="image-wrapper"
				@click="showSlide(i)"
			>
				<img :src="link" />
			</button>
		</div>
	</div>
</template>
<style scoped lang="scss">
.portfolio-wrapper {
	display: flex;
	flex-direction: column;
	padding: 0 0.5em;
	gap: 0.5em;
}
</style>
