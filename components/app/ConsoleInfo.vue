<script lang="ts" setup>
onMounted(() => {
  const rc = useRuntimeConfig()
  const legal = `${rc ? rc.public?.DOMAIN : ''}`
  console.log(`Legal notices for app dependencies can be found at ${legal}/LICENSES.txt\n\n`)
  console.log('\n\n🪡 Page tailor made by https://pageTailoring.com 🪡\n\n\n')
})
</script>

<template>
  <div></div>
</template>
