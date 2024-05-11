import{i as l,S as g}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h=s=>s.reduce((r,{tags:o,webformatURL:n,largeImageURL:e,likes:t,views:i,comments:m,downloads:y})=>r+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${n}" alt="${o}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${t}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${i}</span>
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
    `,""),c=document.querySelector(".gallery"),p=document.querySelector(".search-form"),d=document.querySelector(".loader"),u=document.querySelector(".photo-btn");let a=1,v=15;const f=Math.ceil(100/v);u.addEventListener("click",async()=>{try{if(a>f)return l.error({position:"topRight",message:"We're sorry, there are no more photos to load"});const s=p.elements.searchKeyword.value.trim(),r=await fetchPhotos(s,a);h(r),a+=1,a>f&&(u.textContent="No more photos")}catch(s){console.log(s)}});function L(s){s.preventDefault();const r=s.target.elements.searchKeyword.value.trim();if(c.innerHTML="",r==="")return l.error({message:"Sorry, there are no images matching your search query. Please try again!"});c.innerHTML="",d.classList.remove("is-hidden"),fetchPhotos(r).then(o=>{o.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=h(o.hits),new g(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}).catch(o=>console.log(o)).finally(()=>{s.target.reset(),d.classList.add("is-hidden")})}p.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
