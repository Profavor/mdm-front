<template>
    <n-layout-header :inverted="inverted" bordered>
         <n-alert title="Default Text" type="default">
            <template #icon>
              <n-icon>
                <ios-airplane />
              </n-icon>
            </template>
            <n-switch v-model:value="inverted" /> inverted
            Gee it's good to be back home
          </n-alert>
      </n-layout-header>
</template>

<script>
export default {
    setup(){
        const inverted = useState('inverted')
        
        return {inverted}
    }
}
</script>
