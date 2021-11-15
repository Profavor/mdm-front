<template>
  <n-space vertical>
    <n-layout>
      <LayoutHeader />
      <n-layout has-sider>
        <LayoutSidebar />
        <n-layout>
          <slot />
        </n-layout>
      </n-layout>
      <LayoutFooter />
    </n-layout>
  </n-space>
</template>

<script>
export default {
  created() {
     useState('inverted', ()=> false)
  }
}
</script>

<style>
html, body {
  height: 100vh;
}
</style>