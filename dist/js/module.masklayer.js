!function(a){"use strict";var e={__layerEl:null,create:function(e,l){var i=this,r=t[l||"promotion"];i.__layerEl=a(r).appendTo(e),a(e).css("position","relative"),i.__layerEl.css({left:0,top:0,width:a(e).width(),height:a(e).height()}),i.__layerEl.find(".jz-closebtn").click(function(){a(this).parent().remove()})},hideAll:function(){a(".jizhureader-mask-layer").remove()}},l='<div class="jizhureader-mask-layer">   <div class="jz-closebtn">×</div>   <div class="jz-layer-content">       <div class="jz-layer-content-wrap">        <h3 class="jz-layer-warn-title">危险!!!</h3>        <p class="jz-layer-warn-tip">此处是营销推广产品, 请不要访问</p>       </div>   </div></div>',i='<div class="jizhureader-mask-layer">   <div class="jz-closebtn">×</div>   <div class="jz-layer-content">       <div class="jz-layer-content-wrap">        <h3 class="jz-layer-warn-title">危险!!!</h3>        <p class="jz-layer-warn-tip">疑似莆田系医院, 请不要访问 <a href="https://github.com/open-power-workgroup/Hospital" target="_blank">名单来源</a></p>        <p class="jz-layer-warn-tip2">——珍惜生命, 远离莆田!!!</p>       </div>   </div></div>',t={putian:i,promotion:l};App.modules.maskLayer=e}(Zepto);