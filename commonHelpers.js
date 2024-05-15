import{a as g,i as l,S as L}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const v=o=>o.reduce((t,{tags:r,webformatURL:a,largeImageURL:e,likes:s,views:n,comments:m,downloads:y})=>t+`<li class="photo-container zoom-on-hover">
    <a href=${e} class="card-link js-card-link">
        <img class="photo " src="${a}" alt="${r}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${s}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${n}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${m}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${y}</span>
        </div>
    </div>
</li>
    `,""),b="https://pixabay.com/api/",S="43705346-f08330685c72fc18a8a8b3aad",w=async(o,t)=>(await g(b,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data,h=document.querySelector(".gallery"),P=document.querySelector(".search-form"),i=document.querySelector(".loader"),u=document.querySelector(".photo-btn");let c=1,f="";function q(){u.classList.remove("is-hidden-btn")}function d(){u.classList.add("is-hidden-btn")}async function p(o,t){i.classList.remove("is-hidden");try{const r=await w(o,t);r.hits.length===0?(l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),d()):(h.innerHTML+=v(r.hits),new L(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),t*15>=r.totalHits?(d(),l.info({message:"We're sorry, but you've reached the end of search results."})):q())}catch(r){console.log(r)}finally{i.classList.add("is-hidden")}}async function E(){c++,await p(f,c),$()}u.addEventListener("click",E);async function M(o){o.preventDefault();const t=o.target.elements.searchKeyword.value.trim();if(h.innerHTML="",t==="")return d(),l.error({message:"Sorry, there are no images matching your search query. Please try again!"});f=t,i.classList.remove("is-hidden");try{c=1,await p(t,c)}catch(r){console.log(r)}finally{o.target.reset(),i.classList.add("is-hidden")}}P.addEventListener("submit",M);function $(){const{height:o}=document.querySelector(".photo-container").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
