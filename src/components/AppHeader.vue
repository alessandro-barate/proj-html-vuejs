<script>
export default {
  name: "AppHeader",
};
</script>
<template>
  <header>
    <ul>
      <li>
        <router-link :to="{ name: 'Contact' }" class="classe_css">
          Contact
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Home' }" class="classe_css">
          home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'AboutUs' }" class="classe_css">
          About Us
        </router-link>
      </li>
    </ul>
  </header>
</template>
<style scoped lang="scss"></style>
