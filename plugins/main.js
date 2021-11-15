import common from '~/assets/js/common'

import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$common =  common
})