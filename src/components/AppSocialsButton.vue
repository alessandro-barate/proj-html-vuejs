<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name: "AppSocialsButton",
  data() {
    return {};
  },
}
</script>
<template>

    <ul class="list-group list-group-horizontal">
        <li class="list-group-item">
            <div class="social-container">
                <a href=""><i class="fab fa-facebook-f"></i></a>
            </div>
        </li>
        <li class="list-group-item">
            <div class="social-container">
                <a href=""><i class="fab fa-twitter"></i></a>
            </div>             
        </li>
        <li class="list-group-item">  
            <div class="social-container">
                <a href=""><i class="fab fa-instagram"></i></a>
            </div>
        </li>
    </ul>
  
</template>
<style scoped lang="scss">

ul li {
    background-color: transparent;
    border: none;
    margin-left: -20px;

    .social-container{
        width: 45px;
        height: 45px;
        border: 1px solid #B2AAFB;
        border-radius: 25px;
        text-align: center;
        line-height: 45px;
        transition: all 0.3s;

        &:hover {
            background-color: #ff7a1f;
        }
         
        &:hover i {
            color: white;
        }

        i {
            color: black;
        }
    }
}

</style>