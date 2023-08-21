<template>
  <div>
    <section class="create_courses_bg">
      <div class="container py-5">
        <h2 class="fs-1 fw-bolder">COURSE INFORMATION</h2>
        <h2 class="fs-1 fw-bolder mb-4">四個步驟，讓你成為老師</h2>
        <p class="fs-6">首先我們先來為課程填寫一些必要資訊吧 !</p>
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
      <!-- 課程名稱 -->
      <div class="row justify-content-center align-items-center mb-3">
        <div class="col-auto">
          <label class="form-label mb-0" for="courseName">課程名稱</label>
        </div>
        <div class="col-8">
          <input class="form-control" type="text" id="courseName">
        </div>
      </div>
      <!-- 課程費用 -->
      <div class="row justify-content-center align-items-center mb-3">
        <div class="col-auto">
          <label class="form-label  mb-0" for="coursePrice">課程費用</label>
        </div>
        <div class="col-8">
          <input class="form-control" type="text" id="coursePrice">
        </div>
      </div>
      <!-- 教學項目 -->
      <div class="row justify-content-center mb-3">
        <div class="col-auto">
          <label class="form-label mb-0" for="courseCategory">教學項目</label>
        </div>
        <div class="col-8">
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="courseCategory">
            <option selected>請選擇教學項目</option>
            <option value="短笛">短笛</option>
            <option value="長笛">長笛</option>
            <option value="單簧管">單簧管</option>
            <option value="雙簧管">雙簧管</option>
            <option value="英國管">英國管</option>
          </select>
          <div>熱門項目：
            <span class="badge rounded-pill bg-primary me-2">鋼琴</span>
            <span class="badge rounded-pill bg-primary me-2">木吉他</span>
            <span class="badge rounded-pill bg-primary">流行歌唱</span>
          </div>
        </div>
      </div>
       <!-- 授課時間 -->
       <div class="row justify-content-center align-items-center mb-3">
        <div class="col-auto">
          <label class="form-label  mb-0" for="courseTime">授課時間</label>
        </div>
        <div class="col-8">
          <input class="form-control" type="number" id="courseTime">
        </div>
      </div>
      <!-- 上課方式 -->
      <div class="row justify-content-center align-items-center mb-3">
        <div class="col-auto">
          <label class="form-label  mb-0">上課方式</label>
        </div>
        <div class="col-8">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="studentHome" value="option1">
            <label class="form-check-label" for="studentHome">在學生家</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="teacherHome" value="option2">
            <label class="form-check-label" for="teacherHome">在老師家</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="online" value="option3">
            <label class="form-check-label" for="online">線上</label>
          </div>
        </div>
      </div>
      <!-- 上課地點 -->
        <div class="row justify-content-center align-items-center">
        <div class="col-auto">
          <label class="form-label mb-0" for="cityName">上課地點</label>
        </div>
        <div class="col-8">
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="cityName">
                <option selected>請選擇上課地點</option>
                <option value="台北市">台北市</option>
                <option value="基隆市">基隆市</option>
                <option value="新北市">新北市</option>
                <option value="宜蘭縣">宜蘭縣</option>
                <option value="桃園市">桃園市</option>
                <option value="新竹市">新竹市</option>
                <option value="新竹縣">新竹縣</option>
                <option value="苗栗縣">苗栗縣</option>
                <option value="台中市">台中市</option>
                <option value="彰化縣">彰化縣</option>
                <option value="南投縣">南投縣</option>
                <option value="嘉義市">嘉義市</option>
                <option value="嘉義縣">嘉義縣</option>
                <option value="雲林縣">雲林縣</option>
                <option value="台南市">台南市</option>
                <option value="高雄市">高雄市</option>
                <option value="澎湖縣">澎湖縣</option>
                <option value="金門縣">金門縣</option>
                <option value="屏東縣">屏東縣</option>
                <option value="台東縣">台東縣</option>
                <option value="花蓮縣">花蓮縣</option>
                <option value="連江縣">連江縣</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center text-center">
          <div class="col-6 col-md-4">
            <!-- <button type="submit" class="btn btn-primary">
              &emsp;&emsp;下一步&emsp;&emsp;
            </button> -->
            <router-link to="BeATeacherStep2">
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
