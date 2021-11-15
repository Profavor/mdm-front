<template>
<div id="app">
    Page visits: {{ data }}
    <br/>
    <br/>
    <va-alert color="danger" border="top" border-color="danger" class="mb-4">
      Alert with colorful border.
    </va-alert>
    <va-date-picker v-model="value" />
</div>
</template>

<script setup>
const { data } = await useAsyncData('count', () => $fetch('/api/count'))
</script>

<script>
export default {
  layout: "custom",
  data(){
    return {
      value: new Date()
    }
  }
};
</script>

<style>

</style>