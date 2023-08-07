import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
// 引入 bootstrap
import * as bootstrap from 'bootstrap'
// 這邊要引入 all.scss
import "./assets/scss/all.scss"
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
