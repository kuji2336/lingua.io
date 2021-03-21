<template>
    <footer class="bg-light text-center text-lg-start">
      <!-- Copyright -->
      <div class="text-center main-ft-sec d-flex justify-content-center">
        <p> © 2021 Copyright:</p>
        <a class="text-dark" href="#">ilngua.io</a>
      </div>
      <!-- Copyright -->
    </footer>
</template>

<style lang="scss" scoped>
   footer{
       width: 100%;
       margin-top: 20%;
   }
   .main-ft-sec{
       padding: 40px;
       background-color: #f8f9fa;
       p{
           font-family: "secondaryfont";
           color: #000000 !important;
       }

       a{
           margin-left: 10px;
           font-size: 16px;
           font-family: "secondaryfont";
           color: #080808 !important;
       }
   }

   @media (max-width: 576px) {
    footer{
       margin-top: 40%;
   }
   }
</style>