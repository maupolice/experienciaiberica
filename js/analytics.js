// Medición del sitio con Google Tag Manager (contenedor GTM-NHQ2PXH4).
(function(){
  var GTM_ID='GTM-NHQ2PXH4';
  window.dataLayer=window.dataLayer||[];
  window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
  var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id='+GTM_ID;document.head.appendChild(s);
  function ev(name,extra){var o={event:name,pagina:location.pathname};for(var k in extra)o[k]=extra[k];window.dataLayer.push(o)}
  document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a,button');if(!a)return;
    if(a.href&&a.href.indexOf('wa.me')>-1)ev('whatsapp_click');
    if(a.id==='verQ'||(a.id==='barB'&&/cotizaci/i.test(a.textContent)))ev('ver_cotizacion');
    if(a.id==='dlCarta')ev('descargar_carta');
    if(a.href&&/cotiza\.html/.test(a.href))ev('ir_a_cotizar');
    if(a.href&&/instagram\.com|tiktok\.com/.test(a.href))ev('redes_click',{red:/tiktok/.test(a.href)?'tiktok':'instagram'});
  });
})();
