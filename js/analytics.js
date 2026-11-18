// Medición del sitio: Google Analytics (G-9V876K19X1) directo + Google Tag Manager (GTM-NHQ2PXH4) para futuras etiquetas.
// Importante: no agregar otra etiqueta de Google Analytics dentro de Tag Manager, para no contar doble.
(function(){
  var GTM_ID='GTM-NHQ2PXH4';
  window.dataLayer=window.dataLayer||[];
  window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
  var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id='+GTM_ID;document.head.appendChild(s);
  var GA_ID='G-9V876K19X1';
  window.gtag=function(){window.dataLayer.push(arguments)};
  var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;document.head.appendChild(g);
  gtag('js',new Date());gtag('config',GA_ID);
  function ev(name,extra){var o={pagina:location.pathname};for(var k in extra)o[k]=extra[k];gtag('event',name,o)}
  document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a,button');if(!a)return;
    if(a.href&&a.href.indexOf('wa.me')>-1)ev('whatsapp_click');
    if(a.id==='verQ'||(a.id==='barB'&&/cotizaci/i.test(a.textContent)))ev('ver_cotizacion');
    if(a.id==='dlCarta')ev('descargar_carta');
    if(a.href&&/cotiza\.html/.test(a.href))ev('ir_a_cotizar');
    if(a.href&&/instagram\.com|tiktok\.com/.test(a.href))ev('redes_click',{red:/tiktok/.test(a.href)?'tiktok':'instagram'});
  });
})();
