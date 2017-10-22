import Vue from 'vue';
import VueRouter from 'vue-router';
import Component from 'vue-class-component';
import './sass/main.scss';
import i18n from './locale';
import router from './router';
import store from './store';
import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { ListComponent } from './components/list';
import { NavbarComponent } from './components/navbar';
import { Constants } from './common';

// register the plugin


// @Component({
//   el:'#app-main',
//   router: router,
//   store: store,
//   template: require('./main.html')
// })
// export class RootApp extends Vue {

// }

new Vue({
  el: '#app-main',
  router: router,
  store,
  i18n,
  components: {
    'navbar': NavbarComponent
  }
}).$mount();



