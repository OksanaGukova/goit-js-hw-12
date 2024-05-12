import{a as g,i as d,S as v}from"./assets/vendor-eded45c0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const L=r=>r.reduce((s,{tags:a,webformatURL:i,largeImageURL:e,likes:t,views:o,comments:h,downloads:y})=>s+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${i}" alt="${a}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${t}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${o}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${h}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${y}</span>
        </div>
    </div>
</li>
    `,""),S="https://pixabay.com/api/",b="43705346-f08330685c72fc18a8a8b3aad",p=async(r,s)=>(await g.get(S,{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}})).data,m=document.querySelector(".gallery"),w=document.querySelector(".search-form"),u=document.querySelector(".loader"),c=document.querySelector(".photo-btn");let n=1;const l=15;async function P(r){r.preventDefault();const s=r.target.elements.searchKeyword.value.trim();m.innerHTML="";try{if(s==="")return d.error({message:"Sorry, there are no images matching your search query. Please try again!"});u.classList.remove("is-hidden");const a=await p(s,n,l);a.hits.length===0&&(c.style.display="none",d.error({message:"Sorry, there are no images matching your search query. Please try again!"})),f(a.hits),new v(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),c.style.display="flex";const e=Math.ceil(100/l);c.addEventListener("click",async()=>{try{if(n>e)return d.error({position:"topRight",message:"We're sorry, there are no more photos to load"});const t=await p(s,n+1,l);if(f(t),n+=1,n>1){c.textContent="get more photos";const o=await p(s,n,l);f(o.hits)}}catch(t){console.log(t)}finally{u.classList.add("is-hidden")}})}catch(a){console.log(a)}finally{r.target.reset(),u.classList.add("is-hidden")}}function f(r){m.innerHTML=L(r)}w.addEventListener("submit",P);
//# sourceMappingURL=commonHelpers.js.map
