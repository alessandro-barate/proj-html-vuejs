<script>
export default {
  name: "AppFooter"
}
</script>
<template>
  <ul>
    <li>
      <router-link :to="{ name: 'Home' }" class="">
        Homepage
      </router-link>
      <router-link :to="{ name: 'AboutUs' }" class="">
        About Us
      </router-link>
      <router-link :to="{ name: 'Contact' }" class="">
        Contact
      </router-link>
    </li>
  </ul>
  Footer
</template>
<style scoped lang="scss"></style>