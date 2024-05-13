import{a as L,i as l,S as u}from"./assets/vendor-eded45c0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h=r=>r.reduce((s,{tags:a,webformatURL:o,largeImageURL:e,likes:t,views:n,comments:y,downloads:g})=>s+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${o}" alt="${a}" >
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
            <span class="info">${y}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${g}</span>
        </div>
    </div>
</li>
    `,""),v="https://pixabay.com/api/",b="43705346-f08330685c72fc18a8a8b3aad",p=async(r,s)=>(await L(v,{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}})).data,i=document.querySelector(".gallery"),f=document.querySelector(".search-form"),c=document.querySelector(".loader"),m=document.querySelector(".photo-btn");let d=1;function S(){m.classList.remove("is-hidden-btn")}async function w(){c.classList.remove("is-hidden"),d++;const r=f.elements.searchKeyword.value.trim();try{const s=await p(r,d);s.hits.length===0?l.error({message:"Sorry, there are no more images to load."}):(i.innerHTML+=h(s.hits),new u(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh())}catch(s){console.log(s)}finally{c.classList.add("is-hidden")}}m.addEventListener("click",w);async function P(r){r.preventDefault();const s=r.target.elements.searchKeyword.value.trim();if(i.innerHTML="",s==="")return l.error({message:"Sorry, there are no images matching your search query. Please try again!"});i.innerHTML="",c.classList.remove("is-hidden");try{const a=await p(s);a.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(i.innerHTML=h(a.hits),S(),new u(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh())}catch(a){console.log(a)}finally{r.target.reset(),c.classList.add("is-hidden")}}f.addEventListener("submit",P);
//# sourceMappingURL=commonHelpers.js.map
