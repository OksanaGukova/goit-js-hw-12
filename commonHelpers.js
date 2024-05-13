import{a as y,i as l,S as g}from"./assets/vendor-eded45c0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const L=o=>o.reduce((s,{tags:r,webformatURL:a,largeImageURL:e,likes:t,views:n,comments:h,downloads:m})=>s+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${a}" alt="${r}" >
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
            <span class="info">${m}</span>
        </div>
    </div>
</li>
    `,""),v="https://pixabay.com/api/",S="43705346-f08330685c72fc18a8a8b3aad",b=async(o,s)=>(await y(v,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}})).data,d=document.querySelector(".gallery"),w=document.querySelector(".search-form"),i=document.querySelector(".loader"),u=document.querySelector(".photo-btn");let c=1,f="";function P(){u.classList.remove("is-hidden-btn")}async function p(o,s){i.classList.remove("is-hidden");try{const r=await b(o,s);r.hits.length===0?l.error({message:"Sorry, there are no more images to load."}):(d.innerHTML+=L(r.hits),new g(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh())}catch(r){console.log(r)}finally{i.classList.add("is-hidden")}}async function q(){c++,await p(f,c)}u.addEventListener("click",q);async function $(o){o.preventDefault();const s=o.target.elements.searchKeyword.value.trim();if(d.innerHTML="",s==="")return l.error({message:"Sorry, there are no images matching your search query. Please try again!"});f=s,i.classList.remove("is-hidden");try{c=1,await p(s,c),P()}catch(r){console.log(r)}finally{o.target.reset(),i.classList.add("is-hidden")}}w.addEventListener("submit",$);
//# sourceMappingURL=commonHelpers.js.map
