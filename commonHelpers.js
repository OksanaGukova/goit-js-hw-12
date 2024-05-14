import{a as g,i as l,S as L}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const v=r=>r.reduce((t,{tags:s,webformatURL:a,largeImageURL:e,likes:o,views:n,comments:m,downloads:y})=>t+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${a}" alt="${s}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${o}</span>
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
    `,""),b="https://pixabay.com/api/",S="43705346-f08330685c72fc18a8a8b3aad",w=async(r,t)=>(await g(b,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data,h=document.querySelector(".gallery"),P=document.querySelector(".search-form"),i=document.querySelector(".loader"),d=document.querySelector(".photo-btn");let c=1,f="";function q(){d.classList.remove("is-hidden-btn")}function u(){d.classList.add("is-hidden-btn")}async function p(r,t){i.classList.remove("is-hidden");try{const s=await w(r,t);s.hits.length===0?(l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),u()):(h.innerHTML+=v(s.hits),new L(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),$(),t*s.hits.length>=s.totalHits?(u(),l.info({message:"We're sorry, but you've reached the end of search results."})):q())}catch(s){console.log(s)}finally{i.classList.add("is-hidden")}}async function E(){c++,await p(f,c)}d.addEventListener("click",E);async function M(r){r.preventDefault();const t=r.target.elements.searchKeyword.value.trim();if(h.innerHTML="",t==="")return l.error({message:"Sorry, there are no images matching your search query. Please try again!"});f=t,i.classList.remove("is-hidden");try{c=1,await p(t,c)}catch(s){console.log(s)}finally{r.target.reset(),i.classList.add("is-hidden")}}P.addEventListener("submit",M);function $(){const{height:r}=document.querySelector(".photo-container").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
