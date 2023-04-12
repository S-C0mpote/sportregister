// Import everything
import * as components from 'vuetify/components'
import {createVuetify} from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components: components
    })
    nuxtApp.vueApp.use(vuetify)
})