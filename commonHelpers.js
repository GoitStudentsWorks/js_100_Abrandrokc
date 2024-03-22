import{a,S as u,N as m,K as p,M as L,A as g}from"./assets/vendor-714753f3.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();a.defaults.baseURL="https://portfolio-js.b.goit.study/api";const h=document.querySelector(".reviews-wrapper");document.querySelector(".reviews-swiper");async function k(){try{return(await a.get("/reviews")).data}catch{return h.insertAdjacentHTML("afterbegin","<p class='review-error'>Not found</p>"),null}}async function I(){let e=await k();if(e){const n=e.map(({author:s,avatar_url:t,review:o})=>`<li class='swiper-slide  review-slide' style="box-sizing: border-box;">
            <img class="review-img" src="${t}" alt="${s}" />
            <h3 class="review-author">${s}</h3>
            <p class="review-text">${o}</p>
        </li>`).join("");h.insertAdjacentHTML("afterbegin",n);const c={modules:[m,p,L],initialSlide:0,slidesPerView:1,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",onlyInViewport:!0},scrollbar:{el:".swiper-scrollbar"},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},hashNavigation:{watchState:!0,onlyInViewport:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0,onlyInViewport:!0}};new u(".reviews-swiper",c)}}new u(".projects-swiper-container",{modules:[m,p],slidesPerView:1,spaceBetween:30,breakpoints:{320:{spaceBetween:80},375:{spaceBetween:100}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",onlyInViewport:!0},keyboard:{enabled:!0,onlyInViewport:!0}});function V(){document.querySelector(".button-up-down"),new g(".info-list",{duration:700,showMultiple:!0,openOnInit:[0],onOpen:e=>{e.querySelector(".ac-trigger").classList.add("button-roll")},onClose:e=>{e.querySelector(".ac-trigger").classList.remove("button-roll")}})}async function C(){new u(".skills-container",{modules:[m,p,L],navigation:{nextEl:".skills-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{invert:!0},loop:!0})}new g(".accordion-container",{showMultiple:!0});let v=!1;function M(e){const n=e.getBoundingClientRect();return n.bottom>0&&n.right>0&&n.left<(window.innerWidth||document.documentElement.clientWidth)&&n.top<(window.innerHeight||document.documentElement.clientHeight)}function B(){if(!v){const e=document.createElement("style");e.innerHTML=`
            @keyframes marqueeLine {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
            }
        `,document.head.appendChild(e),v=!0}}const l=document.getElementById("mail"),x=document.getElementById("comment"),i=document.querySelector(".backdrope");document.querySelector(".button-close");const A=document.querySelector("form"),r=document.getElementById("email-error");let S,E;function P(e){S=e.target.value,e.target.validity.valid?(r.classList.remove("error-input"),r.classList.add("success-input"),r.textContent="Succes!",r.style.display="block",c(l)):(r.classList.remove("success-input"),r.classList.add("error-input"),r.textContent="Invalid email, try again",r.style.display="block",s(l));function c(t){t.classList.remove("error"),t.classList.add("success")}function s(t){t.classList.remove("success"),t.classList.add("error")}}function O(e){E=e.target.value}function j(e){i.classList.remove("is-open")}async function $(e){e.preventDefault(),await N(),l.value="",x.value="",r.textContent="",r.style.display="none",l.classList.remove("success"),l.classList.remove("error")}async function N(){new FormData(A);const e={email:S,comment:E};try{const n=await a.post("https://portfolio-js.b.goit.study/api/requests",e,{headers:{"Content-Type":"application/json"}});console.log(n.data),i.classList.add("is-open")}catch(n){console.error("Error:",n),alert("Error! Try again")}}function T(e){e.target===i&&i.classList.remove("is-open")}function D(e){e.key==="Escape"&&i.classList.contains("is-open")&&i.classList.remove("is-open")}const f=document.querySelector(".menu-open"),y=document.querySelector(".menu-close"),q=document.querySelector(".mobile-menu");document.querySelector(".header-order");const H=document.querySelector(".nav-menu__btn"),b=document.querySelector(".header-list"),K=document.querySelector(".mobile-btn");function W(){f.classList.add("is-hidden"),y.classList.remove("is-hidden"),q.classList.add("is-open")}function w(){q.classList.remove("is-open"),f.classList.remove("is-hidden"),y.classList.add("is-hidden")}const F=document.querySelector(".covers");window.addEventListener("scroll",()=>{M(F)&&B()});V();a.defaults.baseURL="https://portfolio-js.b.goit.study/api";C();I();const R=document.getElementById("mail");R.addEventListener("input",P);const U=document.getElementById("comment");U.addEventListener("input",O);const X=document.querySelector(".button-close");X.addEventListener("click",j);const _=document.querySelector("form");_.addEventListener("submit",$);const z=document.querySelector(".backdrope");z.addEventListener("click",T);document.addEventListener("keydown",D);f.addEventListener("click",W);y.addEventListener("click",w);H.addEventListener("click",e=>{b.classList.toggle("is-hidden"),b.style.opacity=1});K.addEventListener("click",e=>{w()});document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(n){n.preventDefault(),w(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});
//# sourceMappingURL=commonHelpers.js.map