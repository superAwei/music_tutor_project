<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4 d-none d-sm-block login-bg"></div>
            <div class="col-12 col-sm-8 d-flex justify-content-center align-items-center">
                <form class="login-from">
                    <h2 class="mb-5">會員註冊<i class="bi bi-facebook"></i></h2>
                      <a class="d-block p-2 text-center border border-1 rounded-1 mb-2" href="javascript:;">Google 登入</a>
                      <hr class="divider sign-in">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">請輸入電子信箱</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text text-danger">請輸入正確電子信箱</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">請輸入密碼</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                        <div id="emailHelp" class="form-text text-danger">密碼錯誤</div>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">記住帳號</label>
                    </div>
                    <button type="submit" class="col-12 col-sm-8 btn btn-primary">註冊</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
  .login-bg{
    height: 100vh;
    background-image: url('https://fakeimg.pl/1200x1200/');
    background-repeat: no-repeat;
    background-size: cover;
  }

  hr.divider {
    height: 1px;
    margin: 20px 0;
    padding: 0;
    overflow: visible;
    border: none;
    background-color: #232323;
    color: #6e6d7a;
    text-align: center;
}

hr.divider:after {
    content: '';
    display: inline-block;
    position: relative;
    top: -10px;
    padding: 0 16px;
    background: #fff;
    font: normal 14px/14px var(--font-face, "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif);
}

hr.divider.sign-in:after {
    content: "or sign in with email";
}

</style>
