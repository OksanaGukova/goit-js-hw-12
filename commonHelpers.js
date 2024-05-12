import{a as g,i as l,S as h}from"./assets/vendor-eded45c0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p=r=>r.reduce((s,{tags:o,webformatURL:a,largeImageURL:e,likes:t,views:n,comments:m,downloads:y})=>s+`<li class="photo-container">
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
            <span class="info">${m}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${y}</span>
        </div>
    </div>
</li>
    `,""),L="https://pixabay.com/api/",v="43705346-f08330685c72fc18a8a8b3aad",u=async(r,s)=>(await g.get(L,{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}})).data,i=document.querySelector(".gallery"),f=document.querySelector(".search-form"),c=document.querySelector(".loader"),b=document.querySelector(".photo-btn");let d=1;function S(r){r.preventDefault();const s=r.target.elements.searchKeyword.value.trim();if(i.innerHTML="",s==="")return l.error({message:"Sorry, there are no images matching your search query. Please try again!"});i.innerHTML="",c.classList.remove("is-hidden"),u(s).then(o=>{o.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML=p(o.hits),new h(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}).catch(o=>console.log(o)).finally(()=>{r.target.reset(),c.classList.add("is-hidden")})}f.addEventListener("submit",S);function P(){c.classList.remove("is-hidden"),d++;const r=f.elements.searchKeyword.value.trim();u(r,d).then(s=>{s.hits.length===0?l.error({message:"Sorry, there are no more images to load."}):(i.innerHTML+=p(s.hits),new h(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh())}).catch(s=>console.log(s)).finally(()=>{c.classList.add("is-hidden")})}b.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
