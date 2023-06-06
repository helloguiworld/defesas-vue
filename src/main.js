import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import router from './router'

import FadeLoader from 'vue-spinner/src/FadeLoader.vue'

import CardBase from './components/CardBase.vue'
import PopupBase from './components/PopupBase.vue'
import AppButton from './components/AppButton.vue'
import AppTextInput from './components/AppTextInput.vue'
import AppRadioButton from './components/AppRadioButton.vue'

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import SearchAndFilters from './components/SearchAndFilters.vue'
import DefensesList from './components/DefensesList.vue'

Vue.config.productionTip = false

library.add(faXmark)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('fade-loader', FadeLoader)

Vue.component('card-base', CardBase)
Vue.component('popup-base', PopupBase)
Vue.component('app-button', AppButton)
Vue.component('app-text-input', AppTextInput)
Vue.component('app-radio-button', AppRadioButton)

Vue.component('app-header', AppHeader)
Vue.component('app-footer', AppFooter)

Vue.component('search-and-filters', SearchAndFilters)
Vue.component('defenses-list', DefensesList)

export const defenseSwitchesMixin = {
  methods: {
    switchCurso: function (curso) {
      switch (curso) {
        case "ME":
          return "Mestrado";
        case "DO":
          return "Doutorado";
        case "DD":
          return "Doutorado D.";
        case "Mestrado":
          return "ME";
        case "Doutorado":
          return "DO";
        case "Todos":
          return "Todos";
        default:
          return "Curso não identificado";
      }
    },
  },
}

Vue.mixin(defenseSwitchesMixin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
