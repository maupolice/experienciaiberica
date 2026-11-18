// Medición del sitio. Para activarla, pega aquí tu ID de Google Analytics (empieza con G-).
(function(){
  var GA_ID='';
  if(!GA_ID)return;
  var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',GA_ID);
  document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a,button');if(!a)return;
    if(a.href&&a.href.indexOf('wa.me')>-1)gtag('event','whatsapp_click',{page:location.pathname});
    if(a.id==='verQ'||a.id==='barB')gtag('event','ver_cotizacion');
    if(a.id==='dlCarta')gtag('event','descargar_carta');
    if(a.href&&/cotiza\.html/.test(a.href))gtag('event','ir_a_cotizar');});
})();
