import{a as v,i as l,S as L}from"./assets/vendor-eded45c0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=s=>s.reduce((r,{tags:o,webformatURL:a,largeImageURL:e,likes:t,views:n,comments:y,downloads:g})=>r+`<li class="photo-container">
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
            <span class="info">${y}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${g}</span>
        </div>
    </div>
</li>
    `,""),P=15,S="https://pixabay.com/api/",b="43705346-f08330685c72fc18a8a8b3aad",h=async(s,r)=>(await v.get(S,{params:{key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:P}})).data,c=document.querySelector(".gallery"),m=document.querySelector(".search-form"),p=document.querySelector(".loader"),d=document.querySelector(".photo-btn");let i=1,q=15;const u=Math.ceil(100/q);d.addEventListener("click",async()=>{try{if(i>u)return l.error({position:"topRight",message:"We're sorry, there are no more photos to load"});const s=m.elements.searchKeyword.value.trim(),r=await h(s,i);f(r),i+=1,i>u&&(d.textContent="No more photos")}catch(s){console.log(s)}});function w(s){s.preventDefault();const r=s.target.elements.searchKeyword.value.trim();if(c.innerHTML="",r==="")return l.error({message:"Sorry, there are no images matching your search query. Please try again!"});c.innerHTML="",p.classList.remove("is-hidden"),h(r).then(o=>{o.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=f(o.hits),new L(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}).catch(o=>console.log(o)).finally(()=>{s.target.reset(),p.classList.add("is-hidden")})}m.addEventListener("submit",w);
//# sourceMappingURL=commonHelpers.js.map
