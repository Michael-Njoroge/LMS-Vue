<template>
  <CFooter>
    <CContainer fluid>
      <CRow>
        <CCol sm="6">
          <div>
            <span class="mx-3">&copy; {{ new Date().getFullYear() }} &nbsp;&nbsp; All rights reserved by <a href="https://github.com/Michael-Njoroge" target="_blank"> <strong>Michael(Dev)</strong></a> </span>
          </div>
        </CCol>
        <CCol sm="6">
          <div class="d-flex gap-1">
            <p href="#" :style="{ borderRight: '1px solid #ccc' }"> <router-link to="terms-conditions" class="mx-3">Terms of service</router-link></p>
            <p href="#" :style="{ borderRight: '1px solid #ccc' }"><router-link to="privacy-policy" class="mx-3">Privacy Policy</router-link></p>
            <p href="#" :style="{ borderRight: '1px solid #ccc' }"><router-link to="#" class="mx-3">Subscription</router-link></p>
            <p><a href="#" class="mx-3">Login & Register</a></p>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </CFooter>
</template>

<script setup>
import { 
  CFooter,
  CCol,
  CRow,
  CContainer,
} from '@coreui/vue';
</script>

<style scoped>
.comp-name {
  background: -webkit-linear-gradient(90deg, #CFA2E8, #637FEA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

a {
  text-decoration: none;
  color: rgb(107, 115, 133);
  font-size: 14px;
  line-height: 25px;
}

p {
  color: rgb(107, 115, 133);
  font-size: 14px;
}

a:hover {
  text-decoration: underline;
}
</style>
