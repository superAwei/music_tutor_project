<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid justify-content-between">
      <a class="navbar-brand" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">我要開課</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" >所有課程</a>
          </li>
          <router-link to="/LoginSignUp">
            <li class="nav-item">
              <a class="nav-link" href="#" ><i class="bi bi-box-arrow-in-left"></i>登入</a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
  <!-- banner -->
  <section class="container banner d-flex justify-content-between align-items-center">
    <div>
      <h2>找尋像好友一樣的音樂導師</h2>
      <p>在這裡與熱愛音樂的導師相遇，將你的音樂激情傾注其中。</p>
      <input class="form-control w-100 p-3" type="text" placeholder="我要學習">
      <div class="pills mt-3">
            <span class="badge border border-primary rounded-pill text-primary fw-bold px-3 me-2">鋼琴</span>
            <span class="badge border border-primary rounded-pill text-primary fw-bold px-3 me-2">吉他</span>
            <span class="badge border border-primary rounded-pill text-primary fw-bold px-3 me-2">唱歌</span>
            <span class="badge border border-primary rounded-pill text-primary fw-bold px-3 me-2">大鼓</span>
      </div>
    </div>
    <img src="https://fakeimg.pl/600x400/" alt="">
  </section>

  <!-- 精選課程 -->
  <section class="container text-center">
    <h2>精選課程</h2>
    <div class="d-flex justify-content-between">
      <div class="card">
          <img src="https://fakeimg.pl/100x100/" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      <div class="card">
          <img src="https://fakeimg.pl/100x100/" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      <div class="card">
          <img src="https://fakeimg.pl/100x100/" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  </section>


</template>
  
<style>
  .banner{
    min-height: 100vh;
  }
</style>