// assets/script.js - navigation, mobile menu, lazy loading
(function(){
  function qs(s){return document.querySelector(s)}
  function qsa(s){return Array.from(document.querySelectorAll(s))}

  var btn = qs('.mobile-toggle');
  if(btn) btn.addEventListener('click', function(){
    var nav = qs('.nav');
    if(nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex';
  });

  qsa('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        var el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth'});
      }
    })
  });

  function lazyLoad(){
    qsa('img[data-src]').forEach(function(img){
      if(img.dataset.src && img.getBoundingClientRect().top < window.innerHeight + 200){
        img.src = img.dataset.src; img.removeAttribute('data-src');
      }
    })
  }
  lazyLoad();
  window.addEventListener('scroll', lazyLoad);
  window.addEventListener('resize', lazyLoad);
})();
