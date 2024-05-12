import{a as g,i as l,S as v}from"./assets/vendor-eded45c0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const L=r=>r.reduce((s,{tags:o,webformatURL:a,largeImageURL:e,likes:t,views:n,comments:h,downloads:y})=>s+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${a}" alt="${o}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${t}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${n}</span>
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
    `,""),S="https://pixabay.com/api/",b="43705346-f08330685c72fc18a8a8b3aad",f=async(r,s)=>(await g.get(S,{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}})).data,m=document.querySelector(".gallery"),P=document.querySelector(".search-form"),d=document.querySelector(".loader"),c=document.querySelector(".photo-btn");let i=1;const p=15;async function q(r){r.preventDefault();const s=r.target.elements.searchKeyword.value.trim();m.innerHTML="";try{if(s==="")return l.error({message:"Sorry, there are no images matching your search query. Please try again!"});d.classList.remove("is-hidden");const o=await f(s,i,p);o.hits.length===0&&(c.style.display="none",l.error({message:"Sorry, there are no images matching your search query. Please try again!"})),u(o.hits),i+=1,i>1&&(c.textContent="get more photos"),new v(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),c.style.display="flex";const e=Math.ceil(100/p);c.addEventListener("click",async()=>{try{if(i>e)return l.error({position:"topRight",message:"We're sorry, there are no more photos to load"});const t=await f(s,i+1,p);u(t)}catch(t){console.log(t)}finally{d.classList.add("is-hidden")}})}catch(o){console.log(o)}finally{r.target.reset(),d.classList.add("is-hidden")}}function u(r){m.innerHTML=L(r)}P.addEventListener("submit",q);
//# sourceMappingURL=commonHelpers.js.map
