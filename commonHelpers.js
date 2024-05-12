import{a as g,i as d,S as v}from"./assets/vendor-eded45c0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const L=r=>r.reduce((s,{tags:o,webformatURL:a,largeImageURL:e,likes:t,views:n,comments:h,downloads:y})=>s+`<li class="photo-container">
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
    `,""),P="https://pixabay.com/api/",S="43705346-f08330685c72fc18a8a8b3aad",p=async(r,s,o)=>{try{return(await g.get(P,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:o}})).data}catch(a){throw console.error("Error fetching images:",a),a}},m=document.querySelector(".gallery"),b=document.querySelector(".search-form"),u=document.querySelector(".loader"),c=document.querySelector(".photo-btn");let i=1;const l=15;async function w(r){r.preventDefault();const s=r.target.elements.searchKeyword.value.trim();m.innerHTML="";try{if(s==="")return d.error({message:"Sorry, there are no images matching your search query. Please try again!"});u.classList.remove("is-hidden");const o=await p(s,i,l);o.hits.length===0&&(c.style.display="none",d.error({message:"Sorry, there are no images matching your search query. Please try again!"})),f(o.hits),new v(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),c.style.display="flex";const e=Math.ceil(100/l);c.addEventListener("click",async()=>{try{if(i>e)return d.error({position:"topRight",message:"We're sorry, there are no more photos to load"});const t=await p(s,i+1,l);if(f(t),i+=1,i>1){c.textContent="No more photos";const n=await p(s,i,l);f(n.hits)}}catch(t){console.log(t)}finally{u.classList.add("is-hidden")}})}catch(o){console.log(o)}finally{r.target.reset(),u.classList.add("is-hidden")}}function f(r){m.innerHTML=L(r)}b.addEventListener("submit",w);
//# sourceMappingURL=commonHelpers.js.map
