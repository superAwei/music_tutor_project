<template>
  <div>
    <section class="create_courses_bg">
      <div class="container py-5">
        <h2 class="fs-1 fw-bolder">INTRODUCE</h2>
        <h2 class="fs-1 fw-bolder mb-4">課程介紹</h2>
        <p class="fs-6">分享您的音樂願景，簡單介紹您的課程內容，為學生營造期待。</p>
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
        <!-- 課程介紹 -->
        <div class="row flex-column  align-items-center justify-content-center  mb-3">
          <div class="col-12 col-md-8 mb-2">
            <label class="form-label mb-0" for="courseIntro">課程介紹</label>
          </div>
          <div class="col-12 col-md-8">
            <textarea class="form-control" id="courseIntro" rows="6"></textarea>
          </div>
        </div>
        <!-- 上傳課程封面照 -->
        <div class="row justify-content-center align-items-center mb-3">
          <div class="col-6 col-md-3">
            <label class="form-label mb-0" for="coursePhoto">上傳一張課程封面照</label>
          </div>
          <div class="col-6 col-md-5">
            <input class="form-control" type="file" id="coursePhoto">
          </div>
        </div>
        <!-- 下一步 -->
        <div class="row justify-content-center text-center">
          <div class="col-6 col-md-4">
            <router-link to="BeATeacherStep1">
              <a href="javascript:;" role="button" class="w-100 btn btn-white rounded-pill fw-bolder shadow-lg lh-lg py-2 py-md-3">上一步</a>
            </router-link>
          </div>
          <div class="col-6 col-md-4">
            <router-link to="BeATeacherStep3">
              <a href="javascript:;" role="button" class="w-100 btn btn-white rounded-pill fw-bolder shadow-lg lh-lg py-2 py-md-3">下一步</a>
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

</style>
