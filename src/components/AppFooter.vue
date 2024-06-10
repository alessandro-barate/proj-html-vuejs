<script>
export default {
  name: "AppFooter"
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
  Footer
</template>
<style scoped lang="scss"></style>