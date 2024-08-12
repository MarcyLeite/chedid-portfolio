<script lang="ts" setup>
import { RouterLink } from 'vue-router'

type Props = {
	linkList: string[]
	path: string
}

const { linkList, path } = defineProps<Props>()

const itemList = linkList.map((v) => ({ link: v }))
</script>
<template>
	<div class="gallery-container">
		<masonry-wall
			class="image-wrapper"
			:items="itemList"
			:ssr-columns="1"
			:column-width="460"
			:gap="8"
		>
			<template #default="{ item, index }">
				<RouterLink :to="`/${path}${index}`">
					<img :src="item.link" />
				</RouterLink>
			</template>
		</masonry-wall>
	</div>
</template>
<style scoped lang="scss">
.gallery-container {
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 0 0.5rem;
	max-width: 1600px;
	margin: auto;
}
a {
	width: 100%;
	img {
		width: 100%;
	}
}
</style>
