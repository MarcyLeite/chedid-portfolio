<script lang="ts" setup>
import { getRandomInt } from '@/utils/math-utils'
import SocialBar from '@/components/SocialBar.vue'
import ProjectThumnail from '@/components/ProjectThumnail.vue'

const baseSeed = getRandomInt(10000000)
const seedList = Array.from(Array(10).keys()).map((i) => baseSeed + i)
const linkList = seedList.map((seed) => `https://picsum.photos/seed/${seed}/1920/1080`)
</script>
<template>
	<div>
		<div class="gallery-container">
			<ProjectThumnail
				v-for="(link, i) in linkList"
				:key="i"
				:link="link"
				:title="`Project ${i}`"
			></ProjectThumnail>
		</div>
		<SocialBar></SocialBar>
	</div>
</template>

<style scoped lang="scss">
.gallery-container {
	display: flex;
	flex-direction: column;
	padding: 0 0.5em;
	gap: 0.5em;
}
</style>
