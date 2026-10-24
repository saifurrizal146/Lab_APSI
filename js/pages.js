document.getElementById('year')?.replaceChildren(document.createTextNode(new Date().getFullYear()));
const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>{const on=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!on));nav?.classList.toggle('open',!on)});
const current=location.pathname.split('/').pop();document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('current')});
document.querySelector('#contact-form')?.addEventListener('submit',e=>{e.preventDefault();document.querySelector('#form-status').textContent='Form sudah terisi. Tambahkan alamat email penerima resmi pada proyek agar fitur pengiriman dapat diaktifkan.'});