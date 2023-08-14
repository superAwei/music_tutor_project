<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid justify-content-between">
      <a class="navbar-brand" href="#">LOGO</a>
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
  </nav> -->
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
  <section class="container mb-5">
    <h2 class="text-center mb-5">精選課程</h2>
    <div class="row ">
      <div class="col-md-3">
        <div class="card">
          <img src="https://fakeimg.pl/100x100/" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><span class="badge rounded-pill bg-secondary me-2">鋼琴</span>零基礎開始學鋼琴</h5>
            <p class="card-text"><span class="me-2">by</span>AWEI</p>
            <div class="d-flex">
              <p  class="me-3"><i class="bi bi-clock me-2"></i>60分鐘</p>
              <p  class="me-3"><i class="bi bi-map me-2"></i>台北</p>
              <p><i class="bi bi-people me-2"></i>10</p>
            </div>
            <p>NT$ 1,200</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <img src="https://fakeimg.pl/100x100/" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><span class="badge rounded-pill bg-secondary me-2">鋼琴</span>零基礎開始學鋼琴</h5>
            <p class="card-text"><span class="me-2">by</span>AWEI</p>
            <div class="d-flex">
              <p  class="me-3"><i class="bi bi-clock me-2"></i>60分鐘</p>
              <p  class="me-3"><i class="bi bi-map me-2"></i>台北</p>
              <p><i class="bi bi-people me-2"></i>10</p>
            </div>
            <p>NT$ 1,200</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <img src="https://fakeimg.pl/100x100/" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><span class="badge rounded-pill bg-secondary me-2">鋼琴</span>零基礎開始學鋼琴</h5>
            <p class="card-text"><span class="me-2">by</span>AWEI</p>
            <div class="d-flex">
              <p  class="me-3"><i class="bi bi-clock me-2"></i>60分鐘</p>
              <p  class="me-3"><i class="bi bi-map me-2"></i>台北</p>
              <p><i class="bi bi-people me-2"></i>10</p>
            </div>
            <p>NT$ 1,200</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <img src="https://fakeimg.pl/100x100/" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><span class="badge rounded-pill bg-secondary me-2">鋼琴</span>零基礎開始學鋼琴</h5>
            <p class="card-text"><span class="me-2">by</span>AWEI</p>
            <div class="d-flex">
              <p  class="me-3"><i class="bi bi-clock me-2"></i>60分鐘</p>
              <p  class="me-3"><i class="bi bi-map me-2"></i>台北</p>
              <p><i class="bi bi-people me-2"></i>10</p>
            </div>
            <p>NT$ 1,200</p>
          </div>
        </div>
      </div>
      <button class="col-3  btn btn-primary mx-auto mt-5">更多課程</button>
    </div>
  </section>

  <!-- 加入我們 -->
  <section class="container  mb-5">
    <h2 class="text-center mb-5">加入我們</h2>
    <div class="row align-items-center">
       <div class="col-md-6">
           <img src="../assets/images/section3-1.png" alt="">
       </div>
       <div class="col-md-6">
         <div class="ms-5">
            <h3 class="mb-3">點燃才華，擁抱成功！</h3>
            <p class="mb-5">在我們的音樂家教媒合平台，任何擁有音樂才華的人都能藉此賺取額外收入。無論你是一名專業音樂家、學院派音樂學生，或是熱愛音樂並擁有一定水平的業餘愛好者，這裡都是你展現才華、實現夢想的舞台。</p>
            <button class="btn btn-outline-primary col-4">我要開課</button>
         </div>
       </div>
    </div>

    <div class="row align-items-center flex-lg-row-reverse">
       <div class="col-md-6">
           <img src="../assets/images/section3-1.png" alt="">
       </div>
       <div class="col-md-6">
         <div class="ms-5">
            <h3 class="mb-3">點燃才華，擁抱成功！</h3>
            <p class="mb-5">在我們的音樂家教媒合平台，任何擁有音樂才華的人都能藉此賺取額外收入。無論你是一名專業音樂家、學院派音樂學生，或是熱愛音樂並擁有一定水平的業餘愛好者，這裡都是你展現才華、實現夢想的舞台。</p>
            <button class="btn btn-outline-primary col-4">我要開課</button>
         </div>
       </div>
    </div>
  </section>

  <!-- 學員反饋 -->
  <section class="container">
    <h2 class="text-center mb-5">學員反饋</h2>
    <!-- 對話一 -->
    <div class="row justify-content-center  align-items-center mb-5">
        <div class="col-md-2">
          <img src="../assets/images/chat-1.png" alt="">
        </div>
        <div class="col-md-5">
          <h3>台北 陳先生</h3>
          <p>這個音樂家教媒合平台真是太棒了！我在這裡找到了一位出色的音樂老師，真的讓我進步神速。老師教學專業、耐心細心，每次上課都能讓我感受到自己的進步。平台提供的便利服務讓我輕鬆預約上課，無論時間和地點都沒有限制。感謝這個平台，我能夠實現音樂夢想！</p>
        </div>
    </div>
    <!-- 對話二 -->
    <div class="row justify-content-center  align-items-center mb-5">
        <div class="col-md-5">
          <h3>台北 陳先生</h3>
          <p>這個音樂家教媒合平台真是太棒了！我在這裡找到了一位出色的音樂老師，真的讓我進步神速。老師教學專業、耐心細心，每次上課都能讓我感受到自己的進步。平台提供的便利服務讓我輕鬆預約上課，無論時間和地點都沒有限制。感謝這個平台，我能夠實現音樂夢想！</p>
        </div>
        <div class="col-md-2">
          <img src="../assets/images/chat-1.png" alt="">
        </div>
    </div>

     <!-- 對話三 -->
     <div class="row justify-content-center  align-items-center mb-5">
        <div class="col-md-2">
          <img src="../assets/images/chat-1.png" alt="">
        </div>
        <div class="col-md-5">
          <h3>台北 陳先生</h3>
          <p>這個音樂家教媒合平台真是太棒了！我在這裡找到了一位出色的音樂老師，真的讓我進步神速。老師教學專業、耐心細心，每次上課都能讓我感受到自己的進步。平台提供的便利服務讓我輕鬆預約上課，無論時間和地點都沒有限制。感謝這個平台，我能夠實現音樂夢想！</p>
        </div>
    </div>

     <!-- 對話四 -->
     <div class="row justify-content-center  align-items-center mb-5">
         <div class="col-md-5">
          <h3>台北 陳先生</h3>
          <p>這個音樂家教媒合平台真是太棒了！我在這裡找到了一位出色的音樂老師，真的讓我進步神速。老師教學專業、耐心細心，每次上課都能讓我感受到自己的進步。平台提供的便利服務讓我輕鬆預約上課，無論時間和地點都沒有限制。感謝這個平台，我能夠實現音樂夢想！</p>
        </div>
        <div class="col-md-2">
          <img src="../assets/images/chat-1.png" alt="">
        </div>
    </div>
  </section>

  <!-- 合作夥伴 -->
  <section>
    <div class="mb-5">
      <h2>合作夥伴</h2>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-1.png" alt="商標圖1" class="mb-5">
        </div>
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-2.png" alt="商標圖2" class="mb-5">
        </div>
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-3.png" alt="商標圖3" class="mb-5">
        </div>
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-4.png" alt="商標圖4" class="mb-5">
        </div>
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-5.png" alt="商標圖5" class="mb-5">
        </div>
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-6.png" alt="商標圖6" class="mb-5">
        </div>
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-7.png" alt="商標圖7" class="mb-5">
        </div>
      </div>
    </div>
  </section>
  <!-- footer -->
  <footer class="bg-primary">
    <div class="container py-5">
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="text-white">LOGO</h2>
        <div class="text-white">
          <ul class="d-flex justify-content-between">
            <li class="me-3"><span class="bi bi-facebook me-2"></span>Facebook</li>
            <li class="me-3"><span class="bi bi-instagram me-2"></span>instagram</li>
            <li class="me-3"><span class="bi bi bi-twitter me-2"></span>Twitter</li>
          </ul>
          <p class="fs-6">Copyright © 2023 Taipei music design All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
  
<style>
  .banner{
    min-height: 100vh;
  }
</style>