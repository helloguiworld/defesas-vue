import Vue from 'vue'
import App from './App.vue'

import CardBase from './components/CardBase.vue'
import AppButton from './components/AppButton.vue'
import AppTextInput from './components/AppTextInput.vue'
import AppRadioButton from './components/AppRadioButton.vue'

import AppHeader from './components/AppHeader.vue'
import SearchAndFilters from './components/SearchAndFilters.vue'
import DefensesList from './components/DefensesList.vue'

Vue.config.productionTip = false
Vue.component('card-base', CardBase)
Vue.component('app-button', AppButton)
Vue.component('app-text-input', AppTextInput)
Vue.component('app-radio-button', AppRadioButton)

Vue.component('app-header', AppHeader)
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
  // mixins: [switchesMixin],
  render: h => h(App),
}).$mount('#app')
