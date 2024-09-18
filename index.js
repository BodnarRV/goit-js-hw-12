import{i as u,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(o){return o.map(({webformatURL:i,largeImageURL:s,tags:t,likes:e,views:r,comments:a,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${t}"
            />
          </a>
          <div class="info">
            <div class="info__item">
              <p class="title">Likes</p>
              <p class="value">${e}</p>
            </div>
            <div class="info__item">
              <p class="title">Views</p>
              <p class="value">${r}</p>
            </div>
            <div class="info__item">
              <p class="title">Comments</p>
              <p class="value">${a}</p>
            </div>
            <div class="info__item">
              <p class="title">Downloads</p>
              <p class="value">${p}</p>
            </div>
          </div>
        </li>
      `).join("")}function m(){document.querySelector(".loader__container").classList.add("active")}function y(){document.querySelector(".loader__container").classList.remove("active")}const h="46012526-8744745123a0ad884cf175c85",g="https://pixabay.com/api/";function v(o,i){const s=`${g}?key=${h}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;m(),fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0)u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again",position:"topRight"});else{const e=t.hits.slice(0,9);i(e)}}).catch(t=>{console.log(t)}).finally(()=>{y()})}const l=document.querySelector("input[type=search]"),_=document.querySelector("button[type=submit]"),c=document.querySelector(".gallery__list");let n;_.addEventListener("click",o=>{o.preventDefault();const i=l.value;if(i===""){u.error({title:"Error",message:"Fill search input!",position:"topRight"});return}c.innerHTML="",v(i,s=>{const t=f(s);c.innerHTML=t,n?n.refresh():n=new d(".gallery__list a",{captionsData:"alt",captionDelay:250}),l.value=""})});
//# sourceMappingURL=index.js.map
