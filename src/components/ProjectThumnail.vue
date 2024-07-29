<script lang="ts" setup>
import { ref } from 'vue'
type Props = {
	link: string
	title: string
}

const { link, title } = defineProps<Props>()
const isShowingTitle = ref(false)
const toggleShowTitle = (value: boolean) => {
	isShowingTitle.value = value
}
</script>
<template>
	<button
		class="image-wrapper"
		@mouseenter="toggleShowTitle(true)"
		@mouseleave="toggleShowTitle(false)"
		@touchstart="toggleShowTitle(true)"
		@touchend="toggleShowTitle(false)"
	>
		<img
			:class="{
				'hover-filter': isShowingTitle,
			}"
			:src="link"
		/>
		<div
			:class="{
				hide: !isShowingTitle,
			}"
			class="title-container"
		>
			<span>{{ title }}</span>
		</div>
	</button>
</template>

<style lang="scss" scoped>
.image-wrapper {
	position: relative;
	img {
		position: relative;
		filter: 0;
		transition: 0.25s ease-in-out;
	}
}
.hover-filter {
	filter: brightness(0.25) grayscale(0.8);
}
.hide {
	opacity: 0;
}
.title-container {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--c-background);

	transition: 0.25s ease-in-out;
	span {
		opacity: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		&::after {
			position: absolute;
			margin-top: 4rem;
			border-radius: 40px;
			content: '';
			width: 4rem;
			height: 0.5rem;
			background: var(--c-primary);
		}
	}
}
</style>
