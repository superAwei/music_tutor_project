<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- banner -->
<section class="container-fluid banner d-flex justify-content-between align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-md-5 text-white search_area">
          <h2 class="h1">找尋像好友一樣的音樂導師</h2>
          <p class="mb-3">在這裡與熱愛音樂的導師相遇，將你的音樂激情傾注其中。</p>
          <input class="form-control p-3" type="text" placeholder="我要學習">
          <div class="pills mt-3">
              <span class="badge border border-white rounded-pill  fw-bold px-3 me-2">鋼琴</span>
              <span class="badge border border-white rounded-pill  fw-bold px-3 me-2">吉他</span>
              <span class="badge border border-white rounded-pill  fw-bold px-3 me-2">唱歌</span>
              <span class="badge border border-white rounded-pill  fw-bold px-3 me-2">大鼓</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 網站介紹 -->
  <section class="intro">
    <div class="container text-center py-6">
      <h2 class="fw-bold lh-base mb-4">和音樂共舞。<br>尋找心中的旋律。</h2>
      <h4 class="fw-bolder mb-6">Lele Music Tutor</h4>
      <p class="lh-lg  fw-lighter">歡迎來到樂樂音樂家教媒合平台！<br>
        我們深知音樂對於心靈的滋養和生活的豐富意義。<br>
        我們的使命是連結那些渴望學習音樂的您，與充滿熱情且專業的音樂家教師。<br>
        <br>
        <br>
        無論您是初學者抑或已有經驗，樂樂致力於為您找到最合適的音樂導師<br>
        讓學習音樂成為一段充滿樂趣與成長的旅程<br>
      </p>
    </div>
    <img class="intro-banner object-fit-cover" src="../assets/images/section-2.jpg" alt="">
  </section>
  <!-- 我們的服務 -->
  <section class="serve">
    <div class="container py-5 ">
      <h2 class="section-title h1 fw-bolder">SERVE</h2>
      <h4 class="letter-spacing-8 h6 mb-5">我們的服務</h4>
      <div class="row align-items-center">
        <div class="col-md-6 mb-3">
           <h3 class="lh-base mb-4">奏響夢想的旋律。<br>
            從這裡開始。</h3>
            <p class="fs-14 fw-light lh-lg">在尋找音樂之道的路上，樂樂音樂家教媒合平台將您與充滿熱情的音樂老師相結合。<br>無論您是剛起步或已有經驗，我們靈活的課程時間安排讓您自由展現對音樂的想像和熱愛。<br>一同探索音符的世界，實現心中的音樂夢想。<br>在這裡，旋律不僅被演奏，更被細心呵護成成長的足跡。</p>
        </div>
        <div class="col-md-6">
          <img class="img-fluid" src="../assets/images/serve1.jpg" alt="">
        </div>
      </div>

      <div class="row  py-5 flex-row-reverse align-items-center">
        <div class="col-md-6 mb-3">
           <h3 class="lh-base mb-4">將音符化為人生的篇章。</h3>
            <p class="fs-14 fw-light lh-lg">音樂家的才華在樂樂音樂家教媒合平台綻放，歡迎您將空閑時間轉化為珍貴的教學時光。<br>與學生分享您的音樂造詣，同時獲得寶貴的報酬。<br>這是您與學生共同書寫音符、創造人生旋律的地方。<br>在這裡，您不僅成為指導者，更是啟發夢想、播撒希望的音樂使者。</p>
        </div>
        <div class="col-md-6">
          <img class="img-fluid" src="../assets/images/serve1.jpg" alt="">
        </div>
      </div>
    </div>
    
  </section>

  <!-- 簡易的開課流程 -->
  <section class="process bg-grey">
    <div class="container py-6">
      <h2 class="section-title h1 fw-bolder">PROCESS</h2>
      <h4 class="letter-spacing-8 h6 mb-5">簡易的開課流程</h4>
      <p class="fs-14 fw-light lh-lg mb-7">輕鬆開始您的音樂教學之旅！我們的老師只需簡單的四步驟，即可開展線上課程。<br>將您的音樂才華轉化為寶貴的報酬，無壓力、無煩惱。讓音符為您譜寫充實人生的新篇章。</p>
      <div class="row">
        <div class="col-6 col-md-3 d-flex justify-content-center align-items-center mb-5 mb-md-0">
            <div class="step rounded-circle bg-light shadow position-relative d-flex flex-column  align-items-center justify-content-center">
              <span class="h3 position-absolute top-0 start-50 translate-middle">01</span>
              <span class="material-symbols-outlined fs-1 mb-3 text-primary">edit_document</span>
              <p class="fw-bolder">INFORMATION</p>
              <p class="text-secondary fw-light">填寫資訊</p>
            </div>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center align-items-center mb-5 mb-md-0">
            <div class="step rounded-circle bg-light shadow position-relative d-flex flex-column  align-items-center justify-content-center">
              <span class="h3 position-absolute top-0 start-50 translate-middle">02</span>
              <span class="material-symbols-outlined fs-1 mb-3 text-primary">contract_edit</span>
              <p class="fw-bolder">INTRODUCE</p>
              <p class="text-secondary fw-light">課程介紹</p>
            </div>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center align-items-center">
            <div class="step rounded-circle bg-light shadow position-relative d-flex flex-column  align-items-center justify-content-center">
              <span class="h3 position-absolute top-0 start-50 translate-middle">03</span>
              <span class="material-symbols-outlined fs-1 mb-3 text-primary">preview</span>
              <p class="fw-bolder">PREVIEW</p>
              <p class="text-secondary fw-light">預覽</p>
            </div>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center align-items-center">
            <div class="step rounded-circle bg-light shadow position-relative d-flex flex-column  align-items-center justify-content-center">
              <span class="h3 position-absolute top-0 start-50 translate-middle">04</span>
              <span class="material-symbols-outlined fs-1 mb-3 text-primary">task_alt</span>
              <p class="fw-bolder">COMPLETE</p>
              <p class="text-secondary fw-light">完成！</p>
            </div>
        </div>
        <a class="col-8 col-md-5 mx-auto mt-6 btn btn-white rounded-pill shadow fw-bolder fs-14 letter-spacing-8 lh-lg py-3">製作課程</a>
      </div>
    </div>
  </section>
  <!-- 精選課程 -->
  <section class="course">
    <div class="container py-6">
      <h2 class="section-title h1 fw-bolder">COURSE</h2>
      <h4 class="letter-spacing-8 h6 mb-5">精選課程</h4>
      <p class="fs-14 fw-light lh-lg mb-7">音樂是靈魂的共鳴，而我們的課程精選優美。踏上專業音樂之旅，探索熱門精選課程，逐步揭開音樂的神秘面紗。這裡，我們致力於將音樂<br>的藝術帶入您的生活，以專業指導和獨特教學方法，激發您的音樂熱情。</p>
      <div class="row">
        <div class="swiper">
            <div class="swiper-wrapper">
              <div class="col-md-3 ">
                <div class="card border-0 shadow swiper-slide">
                    <img src="../assets/images/serve1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h3 class="card-title fs-7">
                        <span class="badge rounded-pill bg-primary me-1">鋼琴</span>
                        <span>零基礎開始學鋼琴:開啟你的鋼琴天賦</span>
                      </h3>
                      <p class="card-text fw-light text-secondary mb-3">by AWEI</p>
                      <ul class="d-flex ps-0 text-secondary">
                        <li class="d-flex align-items-center me-3">
                          <span class="material-symbols-outlined fw-lighter fs-7 me-1">timer</span>
                          <p>120</p>
                        </li>
                        <li class="d-flex align-items-center me-3">
                          <span class="material-symbols-outlined fs-7 me-1">map</span>
                          <p>線上</p>
                        </li>
                        <li class="d-flex align-items-center me-3">
                          <span class="material-symbols-outlined fs-7 me-1">group</span>
                          <p>66</p>
                        </li>
                      </ul>
                      <h4 class="h4">NT$ 1,200</h4>
                    </div>
                </div>
              </div>
    
              <div class="col-md-3">
                <div class="card border-0 shadow swiper-slide">
                    <img src="../assets/images/serve1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h3 class="card-title fs-7">
                        <span class="badge rounded-pill bg-primary me-1">鋼琴</span>
                        <span>零基礎開始學鋼琴:開啟你的鋼琴天賦</span>
                      </h3>
                      <p class="card-text fw-light text-secondary mb-3">by AWEI</p>
                      <ul class="d-flex ps-0 text-secondary">
                        <li class="d-flex align-items-center me-3">
                          <span class="material-symbols-outlined fw-lighter fs-7 me-1">timer</span>
                          <p>120</p>
                        </li>
                        <li class="d-flex align-items-center me-3">
                          <span class="material-symbols-outlined fs-7 me-1">map</span>
                          <p>線上</p>
                        </li>
                        <li class="d-flex align-items-center me-3">
                          <span class="material-symbols-outlined fs-7 me-1">group</span>
                          <p>66</p>
                        </li>
                      </ul>
                      <h4 class="h4">NT$ 1,200</h4>
                    </div>
                </div>
              </div>
    
              <div class="col-md-3">
                <div class="card border-0 shadow swiper-slide">
                    <img src="../assets/images/serve1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h3 class="card-title fs-7">
                        <span class="badge rounded-pill bg-primary me-1">鋼琴</span>
                        <span>零基礎開始學鋼琴:開啟你的鋼琴天賦</span>
                      </h3>
                      <p class="card-text fw-light text-secondary mb-3">by AWEI</p>
                      <ul class="d-flex ps-0 text-secondary">
                        <li class="d-flex align-items-center me-3">
                          <span class="material-symbols-outlined fw-lighter fs-7 me-1">timer</span>
                          <p>120</p>
                        </li>
                        <li class="d-flex align-items-center me-3">
                          <span class="material-symbols-outlined fs-7 me-1">map</span>
                          <p>線上</p>
                        </li>
                        <li class="d-flex align-items-center me-3">
                          <span class="material-symbols-outlined fs-7 me-1">group</span>
                          <p>66</p>
                        </li>
                      </ul>
                      <h4 class="h4">NT$ 1,200</h4>
                    </div>
                </div>
              </div>
    
              <div class="col-md-3">
                <div class="card border-0 shadow  swiper-slide">
                    <img src="../assets/images/serve1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h3 class="card-title fs-7">
                        <span class="badge rounded-pill bg-primary me-1">鋼琴</span>
                        <span>零基礎開始學鋼琴</span>
                      </h3>
                      <p class="card-text fw-light text-secondary mb-3">by AWEI</p>
                      <ul class="d-flex ps-0 text-secondary">
                        <li class="d-flex align-items-center me-3">
                          <span class="material-symbols-outlined fw-lighter fs-7 me-1">timer</span>
                          <p>120</p>
                        </li>
                        <li class="d-flex align-items-center me-3">
                          <span class="material-symbols-outlined fs-7 me-1">map</span>
                          <p>台北市</p>
                        </li>
                        <li class="d-flex align-items-center me-3">
                          <span class="material-symbols-outlined fs-7 me-1">group</span>
                          <p>66</p>
                        </li>
                      </ul>
                      <h4 class="h4">NT$ 1,200</h4>
                    </div>
                </div>
              </div>     
    
            </div>

                <!-- 燈箱導航列 -->
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>

        </div>
        
          <a class="col-8 col-md-5 mx-auto mt-6 btn btn-white rounded-pill shadow fw-bolder fs-14 letter-spacing-8 lh-lg py-3">查看更多課程</a>
      </div>
    </div>
  </section>
  <!-- 常見問題 -->
  <section class="faq bg-grey">
    <div class="container py-6">
      <h2 class="section-title h1 fw-bolder">FAQ</h2>
      <h4 class="letter-spacing-8 h6 mb-5">常見問題</h4>
      <ul class="ps-0">
        <li class="border-bottom py-4">
          <h3 class="question fw-bolder fs-7 fs-md-5">Ｑ 我需要擁有昂貴的樂器嗎？</h3>
          <p class="fw-light pt-3 fs-5 fs-md-1">問題解答問題解答問題解答問題解答問題解答問題解答問題解答問題解答問題解答問題解答問題解答</p>
        </li>
        <li class="border-bottom py-4">
          <h3 class="question fw-bolder h5">Ｑ 我需要擁有昂貴的樂器嗎？</h3>
          <p class="h5 fw-light pt-3">問題解答問題解答問題解答問題解答問題解答問題解答問題解答問題解答問題解答問題解答問題解答</p>
        </li>
        <li class="border-bottom py-4">
          <h3 class="question fw-bolder h5">Ｑ 我需要擁有昂貴的樂器嗎？</h3>
          <p class="h5 fw-light pt-3">問題解答問題解答問題解答問題解答問題解答問題解答問題解答問題解答問題解答問題解答問題解答</p>
        </li>
      </ul>
    </div>
  </section>
  <!-- 合作夥伴 -->
  <section class="partner">
    <div class="container py-6">
      <h2 class="section-title h1 fw-bolder">PARTNER</h2>
      <h4 class="letter-spacing-8 h6 mb-5">我們的合作夥伴</h4>
      <p class="fs-14 fw-light lh-lg mb-7">與知名品牌攜手合作，為您提供更廣闊的音樂學習視野，豐富您的音樂旅程。</p>
      <div class="row">
        <div class="col-md-3 d-flex justify-content-center align-items-center mb-6">
          <img class="brand-img" src="../assets/images/serve1.jpg" alt="">
        </div>
        <div class="col-md-3 d-flex justify-content-center align-items-center mb-6">
          <img class="brand-img" src="../assets/images/serve1.jpg" alt="">
        </div>
        <div class="col-md-3 d-flex justify-content-center align-items-center mb-6">
          <img class="brand-img" src="../assets/images/serve1.jpg" alt="">
        </div>
        <div class="col-md-3 d-flex justify-content-center align-items-center mb-6">
          <img class="brand-img" src="../assets/images/serve1.jpg" alt="">
        </div>
        <div class="col-md-3 d-flex justify-content-center align-items-center mb-6">
          <img class="brand-img" src="../assets/images/serve1.jpg" alt="">
        </div>
        <div class="col-md-3 d-flex justify-content-center align-items-center mb-6">
          <img class="brand-img" src="../assets/images/serve1.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
  <!-- 底圖 -->
  <section>
    <img class="index-footer-img w-100 object-fit-cover" src="../assets/images/serve1.jpg" alt="">
  </section>
  <!-- footer -->
  <section class="footer text-center fw-lighter py-4 fs-14">
    ＠ lELEMUSICE TUTOR COPYRIGHT 2023 ING
  </section>

<!-- 測試輪播效果 -->
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
</template>
  
<style lang="scss">
.search_area{
    padding: 10px 20px;
    background-color:rgba(225,225,225,10%);
    backdrop-filter: blur(20px);
}

/* 每個區塊的標題文字 */
  .section-title{
    letter-spacing: 12px;
    margin-bottom: 0px;
  }

  /* .section-title-intro{
    letter-spacing: 8px;
  } */
  .banner{
    min-height: 100vh;
    background-image: url('../assets/images/banner.jpg');
    background-size: cover;
  }

  .intro-banner{
    width: 100%;
    height: 300px;
  }

  .step{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    @media (min-width:768px) {
      width: 200px;
      height: 200px;
    }
    
  }


  .brand-img{
    width: 180px;
  }

  .index-footer-img{
    height: 387px;
    object-fit: cover;
  }


    .custom-shadow-reversed {
      box-shadow: 10px 10px 10px rgb(246, 246, 246); /* 這將在相反方向創建陰影 */
    }
</style>

<script>
// 引用 swiper
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

export default {
  data() {
    return {
      swiper: {},
    }
  },
  mounted() {
    this.swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: false,
    slidesPerView: 1,
    spaceBetween: 40,
    // 斷點設計
    breakpoints: { 
      320: {  //当屏幕宽度大于等于320
        slidesPerView: 1,
        spaceBetween: 10
      },
      768: {  //当屏幕宽度大于等于768 
        slidesPerView: 3,
        spaceBetween: 20
      },
      1280: {  //当屏幕宽度大于等于1280
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  }
}
</script>