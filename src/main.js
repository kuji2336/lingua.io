import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/store.js'
import router from '@/router/router.js'
import db from './db/firebase'
const app = createApp(App)
/* Global components */
import RegisterModal from '@/global/RegisterModal';
import LoginModal from '@/global/LoginModal';
app.component('register-modal', RegisterModal)
app.component('login-modal', LoginModal)
app.use(store)
app.use(router)
app.use(db)
app.mount('#app')
