"use strict";{var slide=document.getElementById("slide"),slides=new Array("./img/top-image1.jpg","./img/top-image2.jpg","./img/top-image3.jpg","./img/top-image4.jpg"),count=-1;function slideShow(){++count===slides.length&&(count=0),slide.src=slides[count],setTimeout((function(){slide.style.opacity=1}),300),setTimeout((function(){slide.style.opacity=0}),9200),setTimeout((function(){slideShow()}),1e4)}slide.style.opacity=0,slideShow();var body=document.getElementById("body"),open=document.getElementById("open"),close=document.getElementById("close"),overlay=document.createElement("div");open.addEventListener("click",(function(){body.classList.add("isVisible"),"false"==open.getAttribute("aria-expanded")?open.setAttribute("aria-expanded",!0):open.setAttribute("aria-expanded",!1),body.appendChild(overlay),overlay.classList.add("c-nav__overlay"),setTimeout((function(){overlay.classList.add("fadeIn")}),100)})),close.addEventListener("click",(function(){body.classList.remove("isVisible"),"false"==open.getAttribute("aria-expanded")?open.setAttribute("aria-expanded",!0):open.setAttribute("aria-expanded",!1),overlay.classList.remove("fadeIn"),setTimeout((function(){body.removeChild(overlay)}),1e3)}));var btnFontMedium=document.getElementById("btnFontMedium"),btnFontXLarge=document.getElementById("btnFontXLarge"),btnFontXXLarge=document.getElementById("btnFontXXLarge"),irEnglish=document.getElementById("p-ir__english");function XXLargeRemove(){irEnglish.classList.contains("XXLarge")&&irEnglish.classList.remove("XXLarge")}btnFontMedium.addEventListener("click",(function(){body.style.fontSize="16px",XXLargeRemove()})),btnFontXLarge.addEventListener("click",(function(){body.style.fontSize="24px",irEnglish.classList.add("XXLarge")})),btnFontXXLarge.addEventListener("click",(function(){body.style.fontSize="32px",irEnglish.classList.add("XXLarge")}));var pageTop=document.getElementById("js-returnNav__pageTop");pageTop.addEventListener("click",(function(e){e.preventDefault();var t=setInterval((function(){(window.scrollY<=0||window.pageYOffset<=0)&&clearInterval(t),window.scrollBy(0,-20)}),1)}));var topNewsDate=document.getElementById("topNewsDate"),date=new Date,year=date.getFullYear(),month=date.getMonth()+1,day=date.getDate();topNewsDate.setAttribute("datetime",year+"-"+month+"-"+day),topNewsDate.textContent=year+"."+month+"."+day}