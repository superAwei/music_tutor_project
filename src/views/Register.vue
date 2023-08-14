<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4 d-none d-sm-block login-bg"></div>
            <div class="col-12 col-sm-8 d-flex justify-content-center align-items-center">
                <form class="login-from">
                    <h2 class="mb-5 text-center">會員註冊</h2>
                    <hr>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">姓名</label>
                        <input type="text" class="form-control" id="exampleInputName" aria-describedby="name">
                    </div>
                    <div class="mb-3">
                        <div class="d-flex justify-content-between">
                            <label for="exampleInputEmail" class="form-label">信箱</label>
                        </div>
                        <input type="email" class="form-control" id="exampleInputEmail">
                    </div>
                    <div class="mb-3">
                        <div class="d-flex justify-content-between">
                            <label for="exampleInputPassword" class="form-label">密碼</label>
                        </div>
                        <input type="password" class="form-control" id="exampleInputPassword">
                    </div>
                    <div class="mb-3">
                        <div class="d-flex justify-content-between">
                            <label for="exampleInputAgainPassword" class="form-label">再次輸入密碼</label>
                        </div>
                        <input type="password" class="form-control" id="exampleInputAgainPassword">
                    </div>
                    <button type="submit" class="col-12 col-sm-8 btn btn-primary w-100 mt-3">註冊</button>
                    <div class="w-100 text-center mt-3">
                        <router-link to="loginsignup">
                            <a class="mx-auto" href="javascript:;">已有帳號前往登入</a>
                        </router-link> 
                    </div>
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

.login-from{
    width: 300px;
}
</style>
