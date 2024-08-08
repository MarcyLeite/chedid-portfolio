<script lang="tsx" setup>
type Props = {
	text: string
	required?: true
}

const { text, required } = defineProps<Props>()
</script>

<template>
	<div class="wrapper">
		<span class="title">{{ text }}&nbsp;</span>
		<span class="required" v-if="required">(required)</span>
	</div>
</template>

<style scoped lang="scss">
span {
	display: inline-block;
}
.wrapper {
	width: 100%;
}
.required {
	font-size: 0.7em;
}
</style>
