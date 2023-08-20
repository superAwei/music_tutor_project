<template>
  <div>
    <!-- header -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="container-fluid justify-content-between">
        <a class="navbar-brand" href="">LOGO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <router-link to="CreateCourses">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">我要開課</a>
              </li>
            </router-link>
            <li class="nav-item">
              <a class="nav-link" href="#" >所有課程</a>
            </li>
            <router-link to="loginsignup">
              <li class="nav-item">
                <a class="nav-link" href="#" ><i class="bi bi-box-arrow-in-left"></i>登入</a>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <section class="create_courses_bg">
      <div class="container py-5">
        <h2 class="fs-1 fw-bolder">PREVIEW</h2>
        <h2 class="fs-1 fw-bolder mb-4">預覽頁面</h2>
        <p class="fs-6">一探學習體驗，預覽您的課程頁面，確保呈現效果完美。</p>
      </div>
    </section>
      <!-- 進度條 -->
    <div class="container py-5">
      <div class="row justify-content-center">
          <div class="col-9 col-md-9 timeline"></div>
      </div>
      <div class="row">
          <div class="col-3 col-md-3">
            <div class="timeline-pointer text-center step-1 active">
              <p>必要資訊</p>
            </div>
          </div>
          <div class="col-3 col-md-3">
            <div class="timeline-pointer text-center step-2">
              <p>課程介紹</p>
            </div>
          </div>
          <div class="col-3 col-md-3">
            <div class="timeline-pointer text-center step-3">
              <p>預覽頁面</p>
            </div> 
          </div>
          <div class="col-3 col-md-3">
            <div class="timeline-pointer text-center step-4">
              <p>開課完成</p>
            </div> 
          </div>
      </div>
    </div>
    <!-- 填寫資料 -->
    <div class="container">
      <div class="row mb-7 align-items-center">
        <div class="col-12 col-md-7 mb-3 mb-md-0">
          <img class="w-100 h-75" src="../assets/images/banner.jpg" alt="">
        </div>
        <div class="col-12 col-md-5">
          <div class="d-flex flex-column">
            <h2>從頭開始學鋼琴</h2>
              <p class="mb-3 mb-md-5">我是文案介紹我是文案介紹我是文案介紹我是文案介紹我是文案介紹我是文案介紹我是文案介紹我是文案介紹我是文案介紹我是文案介紹我是文案介紹我是文案介紹我是文案介紹我是文案介紹我是文案介紹</p>
              <div class="d-flex justify-content-md-end">
                <a href="javascript:;" class="d-flex border border-primary rounded-pill p-2"><span class="material-symbols-outlined">bookmark</span>
                  <p>收藏課程</p>
                </a>
              </div>
          </div>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-12 col-md-7 mb-7 order-1 order-md-1">
          <h3 class="fs-5 mb-4">關於課程</h3>
          <div class="row">
            <div class="col-6 mb-4">
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined me-3 fs-1">timer</span>
                <div>
                  <h6 class="fs-6">上課時長</h6>
                  <p class="fs-6 fw-light">120 分鐘</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined w-40 me-3 fs-1">bookmark</span>
                <div>
                  <h6 class="fs-6">上課方式</h6>
                  <p class="fs-6 fw-light">學生家,線上
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined me-3 fs-1">group</span>
                <div>
                  <h6 class="fs-6">課程總人數</h6>
                  <p class="fs-6 fw-light">66 人</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined me-3 fs-1">map</span>
                <div>
                  <h6 class="fs-6">上課地點</h6>
                  <p class="fs-6 fw-light">台北市</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5 order-3 order-md-2">
          <div class="buy_course border p-3 rounded-3">
            <h2 class="fs-5 border-bottom pb-3">購買課程</h2>
            <h3 class="py-3">NT$ 1,200</h3>
            <div class="d-flex">
              <a href="javascript:;" class="btn btn-primary rounded-pill text-white w-100 me-3">立即購買</a>
              <a href="javascript:;" class="btn border border-primary rounded-circle text-primary ">
                <span class="material-symbols-outlined">bookmark</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-7 order-2 order-md-3 mb-5 mb-md-0">
          <h3 class="fs-5 mb-4">關於講師</h3>
          <div class="d-flex align-items-center mb-2">
            <img class="rounded-circle teacher_photo me-3" src="../assets/images/serve1.jpg" alt="">
            <p>AWEI</p>
          </div>
          <p>我是自我介紹文案我是自我介紹文案我是自我介紹文案我是自我介紹文案我是自我介紹文案我是自我介紹文案我是自我介紹文案我是自我介紹文案我是自我介紹文案我是自我介紹文案我是自我介紹文案我是自我介紹文案</p>
        </div>
      </div>
      <!-- 下一步 -->
      <div class="row justify-content-center text-center">
          <div class="col-6 col-md-4">
            <router-link to="BeATeacherStep2">
              <a href="javascript:;" role="button" class="w-100 btn btn-white rounded-pill fw-bolder shadow-lg lh-lg py-2 py-md-3">上一步</a>
            </router-link>
          </div>
          <div class="col-6 col-md-4">
            <router-link to="BeATeacherStep4">
              <a href="javascript:;" role="button" class="w-100 btn btn-white rounded-pill fw-bolder shadow-lg lh-lg py-2 py-md-3">下一步</a>
            </router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
// 開課 banner 圖片
.create_courses_bg{
  background-image: url('../assets/images/section-2.jpg');
}
/*進度條*/
.timeline {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 0;  
    right: 0;
    height: 2px;
    background-color: #C1C1C1;
  }
  &-pointer {
    position: relative;
    color: #C1C1C1;
    p {
      padding-top: 70px;
      margin-bottom: 0;
      line-height: 1.5;
    }
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 60px;
      border: 1px solid #C1C1C1;
      border-radius: 50%;
      background-color: #2D2D2D;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-family: var(--bs-font-monospace);
      z-index: 1;
    }
    &.step-1::before {
      content: '1';
    }
    &.step-2::before {
      content: '2';
    }
    &.step-3::before {
      content: '3';
    }
    &.step-4::before {
      content: '4';
    }
    &.active {
      color: #000000;
      &::before {
        color: #FFFFFF;  
        background-color: #000000;
      }
    }
  }
}

// 講師照片
.teacher_photo{
  width:50px;
  height: 50px;
  object-fit: cover;
}
</style>
