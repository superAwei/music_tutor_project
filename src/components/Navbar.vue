<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid justify-content-between">
      <a class="navbar-brand" href="#">
        <img class="logo" src="../assets/images/LOGO.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <router-link to="BeATeacherStep1">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">我要開課</a>
            </li>
          </router-link>
          <li class="nav-item">
            <a class="nav-link" href="#" >所有課程</a>
          </li>
          <router-link to="loginsignup">
            <li class="nav-item">
              <a class="nav-link" href="#" ><i class="bi bi-person-circle"></i></a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
 .logo{
    width: 100px;
    height: 50px;
 }
</style>

<script setup>

</script>
