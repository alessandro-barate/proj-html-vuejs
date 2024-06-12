<script>
export default {
  name: "AppFooter"
}
</script>
<template>

  <div class="container-fluid mt-5">
    <div class="container">
      <div class="row mx-auto">
        <div class="upper-part d-flex mb-4">
          <div class="col-6 footer-logo">
            <img src="../../public/img/footer/footer-logo.png" alt="" style="width: 127px;">
          </div>
          <div class="col-6 list">
            <ul class="list-group list-group-horizontal justify-content-end">
              <li class="list-group-item">
                <router-link :to="{ name: 'Home' }" class="">
                  About Us
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="{ name: 'AboutUs' }" class="">
                  Portfolio
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="{ name: 'Contact' }" class="">
                  Pricing
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="{ name: 'AboutUs' }" class="">
                  Career
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="{ name: 'Contact' }" class="">
                  Contact
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <hr>

        <div class="lower-part d-flex mt-4 mb-3">
          <div class="col-6">
            <p>Copyright © 2022 <a href="" class="external-site-link">Softivus.</a> All rights reserved.</p>
          </div>
          <div class="col-6 list">
            <ul class="list-group list-group-horizontal justify-content-end">
              <li class="list-group-item">
                <router-link :to="{ name: 'Home' }" class="">
                    Fontawesome Facebook
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="{ name: 'AboutUs' }" class="">
                  Fontawesome Twitter
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="{ name: 'Contact' }" class="">
                  Fontawesome Instagram
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<style scoped lang="scss">

ul {
  list-style: none;
}

ul li {
  border: none;

}

.lower-part p {
  font-size: 18px;
}

.external-site-link,
.list-group-item a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

hr {
  width: 98%;
}
</style>