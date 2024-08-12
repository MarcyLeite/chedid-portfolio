<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import { getRandomInt } from '@/utils/math-utils'
import SocialBar from '@/components/SocialBar.vue'
import ProjectThumnail from '@/components/ProjectThumnail.vue'

const baseSeed = getRandomInt(10000000)
const seedList = Array.from(Array(10).keys()).map((i) => baseSeed + i)
const linkList = seedList.map((seed) => `https://picsum.photos/seed/${seed}/1920/1080`)

const itemList = linkList.map((v) => ({ link: v }))
</script>
<template>
	<div>
		<HeaderComponent></HeaderComponent>
		<div class="gallery-container">
			<masonry-wall
				class="image-wrapper"
				:items="itemList"
				:ssr-columns="1"
				:column-width="460"
				:gap="8"
			>
				<template #default="{ item, index }">
					<ProjectThumnail
						:id="index"
						:link="item.link"
						:title="`Project ${index}`"
					></ProjectThumnail>
				</template>
			</masonry-wall>
		</div>
		<SocialBar></SocialBar>
	</div>
</template>

<style scoped lang="scss">
.gallery-container {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	max-width: 1600px;
	padding: 0 0.5rem;
	overflow: scroll;
	margin: auto;
}
</style>
