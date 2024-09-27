import{a as g,i,S as q}from"./assets/vendor-Dp7Ig4E2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function m(o){return o.map(({webformatURL:r,largeImageURL:a,tags:s,likes:e,views:t,comments:l,downloads:S})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${s}"
            />
          </a>
          <div class="info">
            <div class="info__item">
              <p class="title">Likes</p>
              <p class="value">${e}</p>
            </div>
            <div class="info__item">
              <p class="title">Views</p>
              <p class="value">${t}</p>
            </div>
            <div class="info__item">
              <p class="title">Comments</p>
              <p class="value">${l}</p>
            </div>
            <div class="info__item">
              <p class="title">Downloads</p>
              <p class="value">${S}</p>
            </div>
          </div>
        </li>
      `).join("")}function v(){document.querySelector(".loader__container").classList.add("active")}function L(){document.querySelector(".loader__container").classList.remove("active")}const _="46012526-8744745123a0ad884cf175c85";g.defaults.baseURL="https://pixabay.com/api/";async function w(o,r,a){const s=new URLSearchParams({key:_,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15});v();try{const t=(await g.get("",{params:s})).data;t.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}):a(t.hits,t.totalHits)}catch(e){console.error(e),i.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{L()}}async function R(o,r,a){const s=new URLSearchParams({key:_,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15});v();try{const t=(await g.get("",{params:s})).data;t.hits.length===0?(i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}),a([],t.totalHits)):a(t.hits,t.totalHits)}catch(e){console.error(e),i.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{L()}}const b=document.querySelector("#search-form"),y=b.querySelector("input[type=search]");document.querySelector("button[type=submit]");const d=document.querySelector(".gallery__list"),n=document.querySelector(".gallery button");let p,f=1,h=0,c=0,u="";b.addEventListener("submit",o=>{if(o.preventDefault(),u=y.value.trim(),u===""){i.error({title:"Error",message:"Fill search input!",position:"topRight"});return}d.innerHTML="",f=1,c=0,n.style.display="none",w(u,f,(r,a)=>{if(h=a,c+=r.length,r.length===0){i.info({title:"Info",message:"No images found.",position:"topRight"}),n.style.display="none";return}const s=m(r);d.innerHTML=s,p?p.refresh():p=new q(".gallery__list a",{captionsData:"alt",captionDelay:250}),y.value="",c<h?n.style.display="block":(n.style.display="none",i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))})});n.addEventListener("click",o=>{o.preventDefault(),f+=1,R(u,f,(r,a)=>{c+=r.length;const s=m(r);d.insertAdjacentHTML("beforeend",s),p.refresh(),P(),c>=h&&(n.style.display="none",i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))})});function P(){const{height:o}=d.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
