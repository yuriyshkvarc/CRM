import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false

Vue.use(messagePlugin) 
Vue.use(titlePlugin) 
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)


firebase.initializeApp({
    apiKey: "AIzaSyDAHofAKmeYLmtbAZI6zbRwzmegQfFxA9E",
    authDomain: "vue-crm-s.firebaseapp.com",
    databaseURL: "https://vue-crm-s.firebaseio.com",
    projectId: "vue-crm-s",
    storageBucket: "",
    messagingSenderId: "1061534573374",
    appId: "1:1061534573374:web:c1ab9c93cf078a0378826f",
    measurementId: "G-JP5PNYGH8Z"
  })

  let app 

  firebase.auth().onAuthStateChanged(() => {
    if(!app) {
      app = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }
  });