import { h, resolveComponent  } from 'vue'
import { NIcon, useMessage } from 'naive-ui'

export default {
    messages: [],

    renderIcon (icon) {
        return () => h(NIcon, null, { default: () => h(icon) })
    },

    routeLink(name, path) {
        return () => h(resolveComponent('router-link'), {to: { path: path }}, { default: () => name })
    },

    async messageLoad() {
        await axios.get('/api/messages').then(res => {
            this.messages = res.data
        })
    },

    messageGetter(message) {
        const lang = 'ko'    
    
        if(typeof message != 'undefined' && message != null) {
            for(let index in message.messageLangs){
                if(message.messageLangs[index].lang == lang){
                    return message.messageLangs[index].message
                }
            }
        }

        return '';
    }
}
