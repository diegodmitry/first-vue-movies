import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// state management library
app.use(createPinia())

// Make sure to _use_ the router
// listening to route changes and leveraging your src/router/index.js
// However, Vue Router has no way to display the mounted HomeView.vue component.
// To do this, I need to add the router-view component inside your App.vue file.
app.use(router)

app.mount('#app')
