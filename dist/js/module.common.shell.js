!function(i){"use strict";window.App={modules:{}},i.jps.subscribe("init-selectionphrase",function(i){App.modules.selectionPhrase.init({container:i.container,dictLookup:i.dictLookup||"selection",from:i.from})}),i.jps.subscribe("lookup-phrase",function(o){if(!o.isSamePhraseWithPrevious||!App.modules.dictLayer.isLayerShown()){i.jps.publish("hide-dict-layer");var e=chrome.extension.connect({name:"lookup-phrase"});e.postMessage({phrase:o.phrase,position:{top:o.position.top,right:o.position.right,bottom:o.position.bottom,left:o.position.left},from:o.from})}}),i.jps.subscribe("init-dict-layer",function(i){App.modules.dictLayer.init(i)}),i.jps.subscribe("hide-dict-layer",function(){App.modules.dictLayer.hideLayer()})}(Zepto);