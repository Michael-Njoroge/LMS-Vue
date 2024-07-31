<template>
  <CFooter>
    <CContainer flui3>
      <CRow>
        <CCol sm="3">
          <div class="footer-logo d-flex flex-column">
            <router-link to="/" class="d-flex gap-3 flex-row align-items-center justfy-contents-center mb-3">
              <CAvatar class="fs-3" text-color="white" size="xl" src="/images/l.jpg"></CAvatar>
              <h3 class="comp-name mb-0 ">LMS</h3>
            </router-link>
            <p :style="{ color: 'rgb(107, 115, 133)'}">We’re always in search for talented and motivated people. Don’t be shy introduce yourself!</p>
            <div class="social-icons d-flex gap-2">
              <a href="#">
                  <CAvatar size="lg" :src="''" :style="{backgroundColor:'#F6F6F6', color:'#424c5c', padding:'10px'}" >
                      <i class="fab fa-facebook-f fs-5"></i>
                  </CAvatar>
              </a>
              <a href="#">
                  <CAvatar size="lg" :src="''" :style="{backgroundColor:'#F6F6F6', color:'#424c5c', padding:'10px'}" >
                      <i class="fab fa-twitter fs-5"></i>
                  </CAvatar>
              </a>
              <a href="#">
                  <CAvatar size="lg" :src="''" :style="{backgroundColor:'#F6F6F6', color:'#424c5c', padding:'10px'}" >
                      <i class="fab fa-instagram fs-5"></i>
                  </CAvatar>
              </a>
              <a href="#">
                  <CAvatar size="lg" :src="''" :style="{backgroundColor:'#F6F6F6', color:'#424c5c', padding:'10px'}" >
                      <i class="fab fa-linkedin-in fs-5"></i>
                  </CAvatar>
              </a>
              <a href="#">
                  <CAvatar size="lg" :src="''" :style="{backgroundColor:'#F6F6F6', color:'#424c5c', marginBottom: '20px'}" >
                      <i class="fab fa-youtube fs-5"></i>
                  </CAvatar>
              </a>
            </div>
            <CustomButton color="primary" shape="rounded-pill" text="Contact Us" customClass="fit-content fw-bold" />
          </div>
        </CCol>
        <CCol sm="3">
          <h5 class="fw-bold">Useful Links</h5>
          <div class="useful-links d-flex flex-column">
            <router-link to="#">Marketplace</router-link>
            <router-link to="#">kindergarten</router-link>
            <router-link to="#">University</router-link>
            <router-link to="#">GYM Coaching</router-link>
            <router-link to="#">Faq</router-link>
            <router-link to="#">About Us</router-link>
            <router-link to="#">Privacy Policy</router-link>
          </div>
        </CCol>
        <CCol sm="3">
          <h5 class="fw-bold">Our Company</h5>
          <div class="useful-links d-flex flex-column">
            <router-link to="#">Contact Us</router-link>
            <router-link to="#">Become Teacher</router-link>
            <router-link to="#">Blog</router-link>
            <router-link to="#">Instructor</router-link>
            <router-link to="#">Events</router-link>
            <router-link to="#">Course</router-link>
            <router-link to="#">Contact</router-link>
          </div>
        </CCol>
        <CCol sm="3">
          <h5 class="fw-bold">Get Contact</h5>
          <div class="useful-links d-flex flex-column">
            <p c>Phone: <a href="tel:+254716002152">(+254) 71-600-2152</a> </p>
            <p>E-mail: <a href="mailto:mikethecoder12@gmail.com">mikethecoder12@gmail.com</a> </p>
            <p>Address: 15205 Nairobi Kenya Blvd.</p>
          </div>
          <div class="d-flex flex-column gap-2">
            <h6 class="fw-bolder mt-3">News Letter </h6>
            <CInputGroup class="">
              <CFormInput placeholder="Enter Your Email" aria-label="Email" aria-describedby="button-addon2"/>
              <CButton type="button" color="secondary"  id="button-addon2">Subscribe</CButton>
            </CInputGroup>
          </div>
        </CCol>
      </CRow>
</CContainer>
  </CFooter>
  <CFooter>
   <CContainer flui3>
      <CRow>
        <CCol sm="6">
            <div>
              <CLink>LMS</CLink>
              <span class="mx-3">&copy; 2024. &nbsp;&nbsp; All rights reserved by <a href="https://github.com/Michael-Njoroge" target="_blank"> <strong>Michael(Dev)</strong></a> </span>
            </div>
        </CCol>
         <CCol sm="6">
            <div class="d-flex gap-3">
              <p href="#" :style="{ borderRight: '1px solid #ccc' }"> <a href="#" class="mx-3">Terms of service</a></p>
              <p href="#" :style="{ borderRight: '1px solid #ccc' }"><a href="#" class="mx-3">Privacy Policy</a></p>
              <p href="#" :style="{ borderRight: '1px solid #ccc' }"><a href="#" class="mx-3">Subscription</a></p>
              <p><a href="#">Login & Register</a></p>
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
    CAvatar,
    CInputGroup,
    CFormInput,
    CButton
  } from '@coreui/vue';
  import CustomButton from '@/components/CustomButton.vue';

</script>
<style scoped>
  .comp-name{
     background: -webkit-linear-gradient(90deg, #CFA2E8, #637FEA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    a{
      text-decoration: none;
      color: rgb(107, 115, 133);
      margin-top: 10px;
      font-size: 16px;
      line-height: 25px;
    }

    a:hover {
      text-decoration: underline;
    }

</style>