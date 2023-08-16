import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
// 引入 bootstrap
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

// 這邊要引入 all.scss
import "./assets/scss/all.scss"

// 引用 swiper
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCuvmlRB6xUkhU4g09jcaouLGXR_VzyizE",
//   authDomain: "music-tutor-web.firebaseapp.com",
//   projectId: "music-tutor-web",
//   storageBucket: "music-tutor-web.appspot.com",
//   messagingSenderId: "460249885092",
//   appId: "1:460249885092:web:1497eef624c3d320d2f931",
//   measurementId: "G-52BMK9Z27W"
// };

// Initialize Firebase
// initializeApp(firebaseConfig);
// getAnalytics(app);




const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')



