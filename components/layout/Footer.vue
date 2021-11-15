<template>
    <n-layout-footer :inverted="inverted" bordered>
        Footer Footer Footer
    </n-layout-footer>
</template>


<script>
export default {
    setup(){
        const inverted = useState('inverted')
        
        return {inverted}
    }
}
</script>