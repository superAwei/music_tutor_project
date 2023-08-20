<template>
  <div>
    <!-- header -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="container-fluid justify-content-between">
        <a class="navbar-brand" href="#">LOGO</a>
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
        <h2 class="fs-1 fw-bolder">COMPLETE</h2>
        <h2 class="fs-1 fw-bolder mb-4">完成</h2>
        <p class="fs-6">準備好了!您的課程將準備好在平台上展示。</p>
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
    <section class="container">
        <!-- 完成 -->
        <div class="row text-center">
          <div class="col-12 text-primary py-5">
            <span class="material-symbols-outlined complete-icon">task_alt</span>
            <p class="fs-5">老師，開課準備就緒！你的課程將在所有課程頁面隆重登場！</p>
          </div>
        </div>
        <!-- 下一步 -->
        <div class="row justify-content-center text-center">
          <div class="col-6 col-md-4">
            <router-link to="BeATeacherStep3">
              <a href="javascript:;" role="button" class="w-100 btn btn-white rounded-pill fw-bolder shadow-lg lh-lg py-2 py-md-3">上一步</a>
            </router-link>
          </div>
          <div class="col-6 col-md-4">
            <router-link to="BeATeacherStep4">
              <a href="javascript:;" role="button" class="w-100 btn btn-white rounded-pill fw-bolder shadow-lg lh-lg py-2 py-md-3">完成！</a>
            </router-link>
          </div>
        </div>
      </section>
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

// 完成
.complete-icon{
  font-size: 200px;
  @media (min-width: 768px) {
    font-size: 300px;
  }
}
</style>
