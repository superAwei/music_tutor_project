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
      <!-- 進度條 -->
    <div class="container">
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
    <div class="container">
      <div class="row text-center border-top border-bottom border-5 py-2 w-75 mx-auto  mt-5">
        <h2 class="fs-1">四個步驟讓你成為老師</h2>
        <p>先設定必要資訊吧！</p>
      </div>
    </div>

    <div class="container mt-5">
      <!-- 課程名稱 -->
      <div class="row justify-content-center align-items-center mb-3">
        <div class="col-auto">
            <label class="form-label" for="courseName">課程名稱</label>
        </div>
        <div class="col-6">
          <input class="form-control" id="courseName" type="text">
        </div>
      </div>
      <!-- 課程費用 -->
      <div class="row justify-content-center align-items-center mb-3">
        <div class="col-auto">
            <label class="form-label" for="coursePrice">課程費用</label>
        </div>
        <div class="col-6">
          <input class="form-control" id="coursePrice" type="text">
        </div>
      </div>
      <!-- 教學項目 -->
      <div class="row justify-content-center align-items-center mb-3">
        <div class="col-auto">
            <label class="form-label" for="courseCategory">教學項目</label>
        </div>
        <div class="col-6">
          <select class="form-select" id="courseCategory">
            <option value="" selected>請選擇教學項目</option>
            <option value="短笛">短笛</option>
            <option value="長笛">長笛</option>
            <option value="單簧管">單簧管</option>
            <option value="雙簧管">雙簧管</option>
            <option value="英國管">英國管</option>
            <option value="巴松管">巴松管</option>
            <option value="薩克斯風">薩克斯風</option>
            <option value="管風琴">管風琴</option>
            <option value="小號">小號</option>
            <option value="短號">短號</option>
            <option value="長號">長號</option>
            <option value="法國號">法國號</option>
            <option value="低音號">低音號</option>
            <option value="巴里東">巴里東</option>
            <option value="上低音號">上低音號</option>
            <option value="小提琴">小提琴</option>
            <option value="中提琴">中提琴</option>
            <option value="大提琴">大提琴</option>
            <option value="低音提琴">低音提琴</option>
            <option value="豎琴">豎琴</option>
            <option value="斑鳩琴">斑鳩琴</option>
            <option value="曼陀林">曼陀林</option>
            <option value="大鍵琴">大鍵琴</option>
            <option value="魯特琴">魯特琴</option>
            <option value="爵士鼓">爵士鼓</option>
            <option value="木箱鼓">木箱鼓</option>
            <option value="木琴">木琴</option>
            <option value="馬林巴琴">馬林巴琴</option>
            <option value="鋼琴">鋼琴</option>
            <option value="數位鋼琴(電鋼琴)">數位鋼琴(電鋼琴)</option>
            <option value="傳統電子琴">傳統電子琴</option>
            <option value="電子琴">電子琴</option>
            <option value="電子合成器">電子合成器</option>
            <option value="揚琴">揚琴</option>
            <option value="中國笛">中國笛</option>
            <option value="笙">笙</option>
            <option value="嗩吶">嗩吶</option>
            <option value="蕭">蕭</option>
            <option value="胡琴">胡琴</option>
            <option value="古箏">古箏</option>
            <option value="柳琴">柳琴</option>
            <option value="琵琶">琵琶</option>
            <option value="阮">阮</option>
            <option value="其他中國樂器">其他中國樂器</option>
            <option value="木吉他">木吉他</option>
            <option value="古典吉他">古典吉他</option>
            <option value="電吉他">電吉他</option>
            <option value="烏克麗麗">烏克麗麗</option>
            <option value="電貝斯">電貝斯</option>
            <option value="口琴">口琴</option>
            <option value="手風琴">手風琴</option>
            <option value="手碟鼓">手碟鼓</option>
            <option value="其它樂器">其它樂器</option>
            <option value="編曲">編曲</option>
            <option value="作曲">作曲</option>
            <option value="詞曲創作">詞曲創作</option>
            <option value="配樂">配樂</option>
            <option value="錄音">錄音</option>
            <option value="音效">音效</option>
            <option value="成音工程">成音工程</option>
            <option value="混音">混音</option>
            <option value="樂理">樂理</option>
            <option value="聽寫">聽寫</option>
            <option value="音樂理論">音樂理論</option>
            <option value="流行歌唱">流行歌唱</option>
            <option value="聲樂">聲樂</option>
            <option value="音樂劇">音樂劇</option>
            <option value="和聲">和聲</option>
            <option value="視唱">視唱</option>
            <option value="B-BOX">B-BOX</option>
            <option value="Acappella">Acappella</option>
            <option value="指揮">指揮</option>
            <option value="音樂治療">音樂治療</option>
            <option value="DJ">DJ</option>
            <option value="合奏指導">合奏指導</option>
            <option value="音樂軟體">音樂軟體</option>
            <option value="樂器製作">樂器製作</option>
            <option value="其它非樂器類">其它非樂器類</option>
          </select>
          <div class="mt-1">
            熱門項目：
            <span class="badge rounded-pill text-bg-primary me-1">鋼琴</span>
            <span class="badge rounded-pill text-bg-primary me-1">木吉他</span>
            <span class="badge rounded-pill text-bg-primary me-1">流行歌唱</span>
          </div>
        </div>
      </div>

      <!-- 授課時間 -->
      <div class="row justify-content-center align-items-center mb-3">
        <div class="col-auto">
            <label class="form-label" for="courseTime">授課時間</label>
        </div>
        <div class="col-6">
          <input class="form-control" id="courseTime" type="text">
        </div>
      </div>

      <!-- 上課方式 -->
      <div class="row justify-content-center align-items-center mb-3">
        <div class="col-auto">
           <p>上課方式</p>
        </div>
        <div class="col-6">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="學生家" id="studentHome">
                <label class="form-check-label" for="studentHome">
                  學生家
                </label>
            </div>

            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="老師家" id="teacherHome">
                <label class="form-check-label" for="teacherHome">
                  老師家
                </label>
            </div>

            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="線上" id="online">
                <label class="form-check-label" for="online">
                  線上
                </label>
            </div>
        </div>
      </div>

      <!-- 上課地點 -->
      <div class="row justify-content-center align-items-center mb-3">
        <div class="col-auto">
            <label class="form-label" for="cityName">上課地點</label>
        </div>
        <div class="col-6">
          <select class="form-select" id="cityName">
                <option value="" selected>請選擇上課地點</option>
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

      <div class="container">
          <div class="row justify-content-center">
            <div class="col-8">
                <router-link class="btn btn-primary" to="BeATeacherStep2">下一步</router-link>
            </div>
          </div>
      </div>
    
    </div>
 
   
  </div>
</template>

<style lang="scss">
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
