import{a as g,i as a,S}from"./assets/vendor-Dp7Ig4E2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(o){return o.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:n,downloads:b})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
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
              <p class="value">${n}</p>
            </div>
            <div class="info__item">
              <p class="title">Downloads</p>
              <p class="value">${b}</p>
            </div>
          </div>
        </li>
      `).join("")}function v(){document.querySelector(".loader__container").classList.add("active")}function L(){document.querySelector(".loader__container").classList.remove("active")}const _="46012526-8744745123a0ad884cf175c85";g.defaults.baseURL="https://pixabay.com/api/";async function w(o,r,i){const s=new URLSearchParams({key:_,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15});v();try{const t=(await g.get("",{params:s})).data;t.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}):i(t.hits,t.totalHits)}catch(e){console.error(e),a.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{L()}}async function q(o,r,i){const s=new URLSearchParams({key:_,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15});v();try{const t=(await g.get("",{params:s})).data;t.hits.length===0?(a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}),i([],t.totalHits)):i(t.hits,t.totalHits)}catch(e){console.error(e),a.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{L()}}const y=document.querySelector("input[type=search]"),R=document.querySelector("button[type=submit]"),d=document.querySelector(".gallery__list"),l=document.querySelector(".gallery button");let p,f=1,h=0,c=0,u="";R.addEventListener("click",o=>{if(o.preventDefault(),u=y.value.trim(),u===""){a.error({title:"Error",message:"Fill search input!",position:"topRight"});return}d.innerHTML="",f=1,c=0,w(u,f,(r,i)=>{if(h=i,c+=r.length,r.length===0){a.info({title:"Info",message:"No images found.",position:"topRight"}),l.style.display="none";return}const s=m(r);d.innerHTML=s,p?p.refresh():p=new S(".gallery__list a",{captionsData:"alt",captionDelay:250}),y.value="",c<h?l.style.display="block":(l.style.display="none",a.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))})});l.addEventListener("click",o=>{o.preventDefault(),f+=1,q(u,f,(r,i)=>{c+=r.length;const s=m(r);d.insertAdjacentHTML("beforeend",s),p.refresh(),P(),c>=h&&(l.style.display="none",a.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))})});function P(){const{height:o}=d.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
