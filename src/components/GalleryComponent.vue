<script lang="ts" setup>
type Props = {
	linkList: string[]
	path: string
}

const { linkList, path } = defineProps<Props>()
</script>
<template>
	<div class="gallery-container">
		<button
			v-for="(link, i) in linkList"
			:key="i"
			class="image-wrapper"
			@click="$emit('thumb-click', i)"
		>
			<RouterLink :to="`${path}/${i}`">
				<img :src="link" />
			</RouterLink>
		</button>
	</div>
</template>
<style scoped lang="scss">
.gallery-container {
	display: flex;
	flex-direction: column;
	padding: 0 0.5rem;
	gap: 0.5rem;
}
</style>
