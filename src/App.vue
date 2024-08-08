<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
	<RouterView class="content-wrapper" />
</template>

<style scoped lang="scss">
.content-wrapper {
	overflow: scroll;
	height: 100vh;
}
</style>
