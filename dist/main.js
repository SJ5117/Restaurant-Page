(()=>{"use strict";console.log("Hello World!"),document.getElementById("header").style.textAlign="center",document.getElementById("home").addEventListener("click",(function(){const e=document.getElementById("content"),n=document.createElement("h1");n.innerHTML="Home";const t=document.createElement("h2");t.innerHTML="Location";const c=document.createElement("h2");for(c.innerHTML="Hours";e.firstChild;)e.removeChild(e.firstChild);e.style.textAlign="center",e.appendChild(n),e.appendChild(t),e.appendChild(c)})),document.getElementById("menu").addEventListener("click",(function(){const e=document.getElementById("content"),n=document.createElement("h1");n.innerHTML="Menu";const t=document.createElement("h2");t.innerHTML="Breakfast";const c=document.createElement("h5");c.innerHTML="Breakfast Item 1",c.style.color="blue";const l=document.createElement("h5");l.innerHTML="Breakfast Item 2",l.style.color="blue";const d=document.createElement("h2");d.innerHTML="Lunch";const o=document.createElement("h5");o.innerHTML="Lunch Item 1",o.style.color="blue";const r=document.createElement("h5");r.innerHTML="Lunch Item 2",r.style.color="blue";const i=document.createElement("h2");i.innerHTML="Dinner";const m=document.createElement("h5");m.innerHTML="Dinner Item 1",m.style.color="blue";const a=document.createElement("h5");for(a.innerHTML="Dinner Item 2",a.style.color="blue";e.firstChild;)e.removeChild(e.firstChild);e.style.textAlign="center",e.appendChild(n),e.appendChild(t),t.appendChild(c),t.appendChild(l),e.appendChild(d),d.appendChild(o),d.appendChild(r),e.appendChild(i),i.appendChild(m),i.appendChild(a)})),document.getElementById("contact").addEventListener("click",(function(){const e=document.getElementById("content"),n=document.createElement("h1");n.innerHTML="Contact";const t=document.createElement("h2");t.innerHTML="Phone";const c=document.createElement("h2");for(c.innerHTML="Email";e.firstChild;)e.removeChild(e.firstChild);e.appendChild(n),e.appendChild(t),e.appendChild(c)})),document.getElementById("tabs").style.backgroundColor="orange"})();