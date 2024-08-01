<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import { getRandomInt } from '@/utils/math-utils'
import SocialBar from '@/components/SocialBar.vue'
import ProjectThumnail from '@/components/ProjectThumnail.vue'

const baseSeed = getRandomInt(10000000)
const seedList = Array.from(Array(10).keys()).map((i) => baseSeed + i)
const linkList = seedList.map((seed) => `https://picsum.photos/seed/${seed}/1920/1080`)
</script>
<template>
	<div>
		<HeaderComponent></HeaderComponent>
		<div class="gallery-container">
			<ProjectThumnail
				v-for="(link, i) in linkList"
				:key="i"
				:id="i"
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
	gap: 0.5em;
	padding: 0 0.5rem;
	overflow: scroll;
}
</style>
