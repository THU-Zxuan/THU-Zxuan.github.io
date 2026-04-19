/* nav.js — 所有页面共享的导航交互逻辑 */
(function(){
  // scrolled shadow
  const nav = document.getElementById('nav');
  window.addEventListener('scroll',()=> nav.classList.toggle('scrolled',scrollY>20));

  // hamburger
  const hb = document.getElementById('hb');
  const mm = document.getElementById('mm');
  if(hb) hb.addEventListener('click',()=> mm.classList.toggle('open'));

  // close mobile menu on link click
  document.querySelectorAll('.mob-menu a').forEach(a=>{
    a.addEventListener('click',()=> mm.classList.remove('open'));
  });

  // active nav link by current filename
  const cur = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a,.mob-menu a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === cur || (cur==='' && href==='index.html')) a.classList.add('active');
  });

  // fade-in on scroll
  const faders = document.querySelectorAll('.fi');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);} });
  },{threshold:0.08});
  faders.forEach(el=>obs.observe(el));
})();
