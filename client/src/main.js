import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import VueApexCharts from "vue3-apexcharts";
import './index.css'

createApp(App).use(router).use(VueApexCharts).mount('#app')
