<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
	<HeaderComponent></HeaderComponent>
	<RouterView class="content-wrapper" />
</template>

<style scoped>
.content-wrapper {
	position: relative;
	z-index: 10;
	flex-grow: 1;
	overflow: auto;
}
</style>
