!function(e){"use strict";var t={init:function(){var t=this,n=null;chrome.extension.onRequest.addListener(function(t,i,a){if(i&&i.id===chrome.i18n.getMessage("@@extension_id"))switch(t.name){case"settings":n=t.data,e.jps.publish("init-selectionphrase",{container:e(document.body),dictLookup:n.dictHostpage||"selection",from:"page"});break;case"lookupphrase-result":if("page"!==t.data.from)return;if(t.data.phrase!==document.getSelection().toString().trim())return;e.jps.publish("init-dict-layer",{dictData:t.data.dictData,position:t.data.position,hover:"hover"===n.dictHostpage})}}),chrome.extension.connect({name:"getsettings"}).postMessage(),e(document.body).keydown(function(e){(e.metaKey||e.ctrlKey)&&e.shiftKey&&88===e.keyCode&&chrome.extension.connect({name:"createreader"})}),t.addEvent(),t.fuckPutian()},addEvent:function(){e.jps.subscribe("create-mask-layer",function(e,t){App.modules.maskLayer.create(e,t)}),e.jps.subscribe("hide-all-mask-layers",function(e){App.modules.maskLayer.hideAll()})},fuckPutian:function(){for(var t=window.putianHospitalDataJiZhuReader.urls,n=window.location.hostname,i=0;i<t.length;i++)if(-1!==t[i].indexOf(n)||-1!==n.indexOf(t[i])){e(document.body).css("overflow","hidden"),e.jps.publish("create-mask-layer",document.body,"putian");break}}};e(function(){t.init()})}(Zepto);