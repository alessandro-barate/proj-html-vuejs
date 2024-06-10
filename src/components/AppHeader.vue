<script>
export default {
  name: "AppHeader"
}
</script>
<template>
  <ul>
    <li>
      <router-link :to="{ name: Homepage }" class="">
        Homepage
      </router-link>
      <router-link :to="{ name: AppAboutUs }" class="">
        About Us
      </router-link>
      <router-link :to="{ name: AppContactPage }" class="">
        Contacts
      </router-link>
    </li>
  </ul>
  Header
</template>
<style scoped lang="scss"></style>