import{_ as i,r as c,o,a as l,b as e,d as a,w as s,c as r,e as n}from"./index-35f80555.js";const d={},v={class:"navbar navbar-expand-lg navbar-light bg-light sticky-top"},_={class:"container-fluid justify-content-between"},p=e("a",{class:"navbar-brand",href:"#"},"LOGO",-1),b=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),h={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},u={class:"navbar-nav"},f=e("li",{class:"nav-item"},[e("a",{class:"nav-link active","aria-current":"page",href:"#"},"我要開課")],-1),m=e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#"},"所有課程")],-1),g=e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#"},[e("i",{class:"bi bi-box-arrow-in-left"}),n("登入")])],-1),x=r('<div class="container"><div class="row justify-content-center"><div class="col-9 col-md-9 timeline"></div></div><div class="row"><div class="col-3 col-md-3"><div class="timeline-pointer text-center step-1 active"><p>必要資訊</p></div></div><div class="col-3 col-md-3"><div class="timeline-pointer text-center step-2"><p>課程介紹</p></div></div><div class="col-3 col-md-3"><div class="timeline-pointer text-center step-3"><p>預覽頁面</p></div></div><div class="col-3 col-md-3"><div class="timeline-pointer text-center step-4"><p>開課完成</p></div></div></div></div><h2 class="text-center">課程介紹</h2>',2);function k(y,N){const t=c("router-link");return o(),l("div",null,[e("nav",v,[e("div",_,[p,b,e("div",h,[e("ul",u,[a(t,{to:"CreateCourses"},{default:s(()=>[f]),_:1}),m,a(t,{to:"loginsignup"},{default:s(()=>[g]),_:1})])])])]),x,a(t,{to:"BeATeacherStep4"},{default:s(()=>[n("前往步驟四")]),_:1})])}const B=i(d,[["render",k]]);export{B as default};