/* Discourage casual saving and copying of images and protected articles.
   This deters casual copying only; it cannot stop screenshots or determined users. */
(function(){
  function onImage(t){return t && t.closest && t.closest('img,.piece-thumb,.frame,.cover,.portrait,#lightbox');}
  document.addEventListener('contextmenu',function(e){
    if(onImage(e.target) || document.body.classList.contains('protected')) e.preventDefault();
  });
  document.addEventListener('dragstart',function(e){
    if(e.target && e.target.tagName==='IMG') e.preventDefault();
  });
  if(document.body.classList.contains('protected')){
    ['copy','cut','selectstart'].forEach(function(ev){
      document.addEventListener(ev,function(e){e.preventDefault();});
    });
  }
})();
