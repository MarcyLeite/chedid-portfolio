import './assets/main.scss'
import MasonryWall from '@yeger/vue-masonry-wall'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(MasonryWall)

app.mount('#app')
