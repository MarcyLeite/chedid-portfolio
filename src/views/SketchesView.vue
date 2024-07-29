<script lang="ts" setup>
import { getRandomInt } from '@/utils/math-utils'
import SocialBar from '@/components/SocialBar.vue'
import GalleryComponent from '@/components/GalleryComponent.vue'

const baseSeed = getRandomInt(10000000)
const seedList = Array.from(Array(10).keys()).map((i) => baseSeed + i)
const linkList = seedList.map((seed) => `https://picsum.photos/seed/${seed}/1920/1080`)
</script>
<template>
	<div>
		<GalleryComponent :link-list="linkList"></GalleryComponent>
		<SocialBar></SocialBar>
	</div>
</template>

<style lang="scss">
.portfolio-wrapper {
	display: flex;
	flex-direction: column;
	padding: 0 0.5em;
	gap: 0.5em;
}
</style>
