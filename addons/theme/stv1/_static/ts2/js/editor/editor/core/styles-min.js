KISSY.Editor.add("styles",function(o){function Y(b){return!b.attr("_ke_bookmark")}function N(b,f){for(var a in b)if(b.hasOwnProperty(a))if(w.isString(b[a]))b[a]=b[a].replace(Z,function(d,c){return f[c]});else N(b[a],f)}function B(b,f){if(f){b=w.clone(b);N(b,f)}var a=this.element=this.element=(b.element||"*").toLowerCase();this.type=this.type=a=="#"||$[a]?s.STYLE_BLOCK:O[a]?s.STYLE_OBJECT:s.STYLE_INLINE;this._={definition:b}}function P(b,f){var a=f?this.removeFromRange:this.applyToRange;b.body.focus();
for(var d=new aa(b),c=d.getRanges(),g=0;g<c.length;g++)a.call(this,c[g]);d.selectRanges(c)}function I(b,f,a){var d=b.element;if(d=="*")d="span";f=new x(f.createElement(d));a&&a._4e_copyAttributes(f);return Q(f,b)}function Q(b,f){var a=f._.definition,d=a.attributes;a=B.getStyleText(a);if(d)for(var c in d)b.attr(c,d[c]);if(a)b[0].style.cssText=a;return b}function ba(b){var f=b.createBookmark(l),a=b.createIterator();a.enforceRealBlocks=l;a.enlargeBr=l;for(var d,c=b.document;d=a.getNextParagraph();){var g=
I(this,c,d);d=d;var e=g;g=e._4e_name=="pre";var h=d._4e_name=="pre",i=!g&&h;if(g&&!h){h=d;e=e;i=h.html();i=C(i,/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,"");i=i.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi,"$1");i=i.replace(/([ \t\n\r]+|&nbsp;)/g," ");i=i.replace(/<br\b[^>]*>/gi,"\n");if(J.ie){h=h[0].ownerDocument.createElement("div");h.appendChild(e[0]);e[0].outerHTML="<pre>"+i+"</pre>";e=new x(h.firstChild);e._4e_remove()}else e.html(i);e=e}else if(i)e=ca(da(d),e);else d._4e_moveChildren(e);d[0].parentNode.replaceChild(e[0],
d[0]);if(g){d=e;g=void 0;if((g=d._4e_previousSourceNode(l,y.NODE_ELEMENT))&&g._4e_name()=="pre"){e=C(g.html(),/\n$/,"")+"\n\n"+C(d.html(),/^\n/,"");if(J.ie)d[0].outerHTML="<pre>"+e+"</pre>";else d.html(e);g._4e_remove()}}}b.moveToBookmark(f)}function C(b,f,a){var d="",c="";b=b.replace(/(^<span[^>]+_ke_bookmark.*?\/span>)|(<span[^>]+_ke_bookmark.*?\/span>$)/gi,function(g,e,h){e&&(d=e);h&&(c=h);return""});return d+b.replace(f,a)+c}function da(b){var f=[];C(b._4e_outerHtml(),/(\S\s*)\n(?:\s|(<span[^>]+_ck_bookmark.*?\/span>))*\n(?!$)/gi,
function(a,d,c){return d+"</pre>"+c+"<pre>"}).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi,function(a,d){f.push(d)});return f}function ca(b,f){for(var a=f[0].ownerDocument.createDocumentFragment(),d=0;d<b.length;d++){var c=b[d];c=c.replace(/(\r\n|\r)/g,"\n");c=C(c,/^[ \t]*\n/,"");c=C(c,/\n$/,"");c=C(c,/^[ \t]+|[ \t]+$/g,function(e,h){return e.length==1?"&nbsp;":h?" "+Array(e.length).join("&nbsp;"):Array(e.length).join("&nbsp;")+" "});c=c.replace(/\n/g,"<br>");c=c.replace(/[ \t]{2,}/g,function(e){return Array(e.length).join("&nbsp;")+
" "});var g=f._4e_clone();g.html(c);a.appendChild(g[0])}return a}function ea(b){var f=b.document;if(b.collapsed){f=I(this,f,undefined);b.insertNode(f);b.moveToPosition(f,F.POSITION_BEFORE_END)}else{var a=this.element,d=this._.definition,c,g=o.XHTML_DTD[a]||(c=l,o.XHTML_DTD.span),e=b.createBookmark();b.enlarge(F.ENLARGE_ELEMENT);b.trim();var h=b.createBookmark(),i=h.startNode;h=h.endNode;for(var k=i,p;k&&k[0];){var j=v;if(D._4e_equals(k,h)){k=t;j=l}else{var m=k[0].nodeType,r=m==y.NODE_ELEMENT?k._4e_name():
t;if(r&&k.attr("_ke_bookmark")){k=k._4e_nextSourceNode(l);continue}if(!r||g[r]&&(k._4e_position(h)|n.POSITION_PRECEDING|n.POSITION_IDENTICAL|n.POSITION_IS_CONTAINED)==n.POSITION_PRECEDING+n.POSITION_IDENTICAL+n.POSITION_IS_CONTAINED&&(!d.childRule||d.childRule(k))){var z=k.parent();if(z&&z[0]&&((o.XHTML_DTD[z._4e_name()]||o.XHTML_DTD.span)[a]||c)&&(!d.parentRule||d.parentRule(z))){if(!p&&(!r||!o.XHTML_DTD.$removeEmpty[r]||(k._4e_position(h)|n.POSITION_PRECEDING|n.POSITION_IDENTICAL|n.POSITION_IS_CONTAINED)==
n.POSITION_PRECEDING+n.POSITION_IDENTICAL+n.POSITION_IS_CONTAINED)){p=new fa(f);p.setStartBefore(k)}if(m==y.NODE_TEXT||m==y.NODE_ELEMENT&&!k[0].childNodes.length){m=k;for(var u;(j=!m._4e_next(Y))&&(u=m.parent(),g[u._4e_name()])&&(u._4e_position(i)|n.POSITION_FOLLOWING|n.POSITION_IDENTICAL|n.POSITION_IS_CONTAINED)==n.POSITION_FOLLOWING+n.POSITION_IDENTICAL+n.POSITION_IS_CONTAINED&&(!d.childRule||d.childRule(u));)m=u;p.setEndAfter(m)}}else j=l}else j=l;k=k._4e_nextSourceNode()}if(j&&p&&!p.collapsed){j=
I(this,f,undefined);m=p.getCommonAncestor();r={styles:{},attrs:{},blockedStyles:{},blockedAttrs:{}};for(var q,E,H;j&&m&&j[0]&&m[0];){if(m._4e_name()==a){for(q in d.attributes)if(!(r.blockedAttrs[q]||!(H=m.attr(E))))if(j.attr(q)==H)j.removeAttr(q);else r.blockedAttrs[q]=1;for(E in d.styles)if(!(r.blockedStyles[E]||!(H=m._4e_style(E))))if(j._4e_style(E)==H)j._4e_style(E,"");else r.blockedStyles[E]=1;if(!j._4e_hasAttributes()){j=t;break}}m=m.parent()}if(j){j[0].appendChild(p.extractContents());R(this,
j);p.insertNode(j);j._4e_mergeSiblings();J.ie||j[0].normalize()}else{j=new x(f.createElement("span"));j[0].appendChild(p.extractContents());p.insertNode(j);R(this,j);j._4e_remove(true)}p=t}}i._4e_remove();h._4e_remove();b.moveToBookmark(e);b.shrink(F.SHRINK_TEXT)}}function ga(b){b.enlarge(F.ENLARGE_ELEMENT);var f=b.createBookmark(),a=f.startNode;if(b.collapsed){for(var d=new K(a.parent()),c,g=0,e;g<d.elements.length&&(e=d.elements[g]);g++){if(e==d.block||e==d.blockLimit)break;if(this.checkElementRemovable(e)){var h=
b.checkBoundaryOfElement(e,F.END),i=!h&&b.checkBoundaryOfElement(e,F.START);if(i||h){c=e;c.match=i?"start":"end"}else{e._4e_mergeSiblings();if(e._4e_name()!=this.element){h=G(this);L(e,h[e._4e_name()]||h["*"])}else M(this,e)}}}if(c&&c[0]){e=a;for(g=0;;g++){h=d.elements[g];if(D._4e_equals(h,c))break;else if(h.match)continue;else h=h._4e_clone();h[0].appendChild(e[0]);e=h}D[c.match=="start"?"insertBefore":"insertAfter"](e,c)}}else{var k=f.endNode,p=this;d=function(){for(var j=new K(a.parent()),m=new K(k.parent()),
r=t,z=t,u=0;u<j.elements.length;u++){var q=j.elements[u];if(q==j.block||q==j.blockLimit)break;if(p.checkElementRemovable(q))r=q}for(u=0;u<m.elements.length;u++){q=m.elements[u];if(q==m.block||q==m.blockLimit)break;if(p.checkElementRemovable(q))z=q}z&&k._4e_breakParent(z);r&&a._4e_breakParent(r)};d();for(c=new x(a[0].nextSibling);c[0]!==k[0];){g=c._4e_nextSourceNode();if(c[0]&&c[0].nodeType==y.NODE_ELEMENT&&this.checkElementRemovable(c)){if(c._4e_name()==this.element)M(this,c);else{e=G(this);L(c,e[c._4e_name()]||
e["*"])}if(g[0].nodeType==y.NODE_ELEMENT&&g.contains(a)){d();g=new x(a[0].nextSibling)}}c=g}}b.moveToBookmark(f)}function S(b){b=String(b);var f={};b.replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,d,c){f[d]=c});return f}function T(b,f){var a="";if(f!==v){a=document.createElement("span");a.style.cssText=b;a=a.style.cssText||""}else a=b;return a.replace(/\s*([;:])\s*/,"$1").replace(/([^\s;])$/,"$1;").replace(/,\s+/g,",").toLowerCase()}function G(b){if(b._.overrides)return b._.overrides;
var f=b._.overrides={},a=b._.definition.overrides;if(a){w.isArray(a)||(a=[a]);for(var d=0;d<a.length;d++){var c=a[d],g,e,h;if(typeof c=="string")g=c.toLowerCase();else{g=c.element?c.element.toLowerCase():b.element;e=c.attributes;h=c.styles}c=f[g]||(f[g]={});if(e){g=c.attributes=c.attributes||[];for(var i in e)e.hasOwnProperty(i)&&g.push([i.toLowerCase(),e[i]])}if(h){c=c.styles=c.styles||[];for(var k in h)h.hasOwnProperty(k)&&c.push([k.toLowerCase(),h[k]])}}}return f}function M(b,f){var a=b._.definition,
d=G(b),c=U.mix(a.attributes,(d[f._4e_name()]||d["*"]||{}).attributes);a=U.mix(a.styles,(d[f._4e_name()]||d["*"]||{}).styles);d=w.isEmptyObject(c)&&w.isEmptyObject(a);for(var g in c)if(c.hasOwnProperty(g))if(!((g=="class"||b._.definition.fullMatch)&&f.attr(g)!=V(g,c[g]))){d=d||!!f._4e_hasAttribute(g);f.removeAttr(g)}for(var e in a)if(a.hasOwnProperty(e))if(!(b._.definition.fullMatch&&f._4e_style(e)!=V(e,a[e],l))){d=d||!!f._4e_style(e);f._4e_style(e,"")}W(f)}function V(b,f,a){var d=new x("<span>");
d[a?"_4e_style":"attr"](b,f);return d[a?"_4e_style":"attr"](b)}function R(b,f){for(var a=G(b),d=f.all(b.element),c=d.length;--c>=0;)M(b,new x(d[c]));for(var g in a)if(g!=b.element){d=f.all(g);for(c=d.length-1;c>=0;c--){var e=new x(d[c]);L(e,a[g])}}}function L(b,f){var a,d=f&&f.attributes;if(d)for(a=0;a<d.length;a++){var c=d[a][0],g;if(g=b.attr(c)){var e=d[a][1];if(e===t||e.test&&e.test(g)||typeof e=="string"&&g==e)b[0].removeAttribute(c)}}if(d=f&&f.styles)for(a=0;a<d.length;a++){c=d[a][0];if(e=b.css(c)){var h=
d[a][1];if(h===t||h.test&&h.test(g)||typeof h=="string"&&e==h)b.css(c,"")}}W(b)}function W(b){if(!b._4e_hasAttributes()){var f=b[0].firstChild,a=b[0].lastChild;b._4e_remove(l);if(f){f.nodeType==y.NODE_ELEMENT&&D._4e_mergeSiblings(f);a&&f!=a&&a.nodeType==y.NODE_ELEMENT&&D._4e_mergeSiblings(a)}}}var l=true,v=false,t=null,w=KISSY,U=o.Utils,D=w.DOM,s={STYLE_BLOCK:1,STYLE_INLINE:2,STYLE_OBJECT:3},F=o.RANGE,aa=o.Selection,y=o.NODE,n=o.POSITION,fa=o.Range,x=w.Node,J=w.UA,K=o.ElementPath,$={address:1,div:1,
h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1},O={embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,dd:1,form:1},X=/\s*(?:;\s*|$)/g,Z=/#\((.+?)\)/g;o.STYLE=s;B.prototype={apply:function(b){P.call(this,b,v)},remove:function(b){P.call(this,b,l)},applyToRange:function(b){return(this.applyToRange=this.type==s.STYLE_INLINE?ea:this.type==s.STYLE_BLOCK?ba:this.type==s.STYLE_OBJECT?t:t).call(this,b)},removeFromRange:function(b){return(this.removeFromRange=this.type==s.STYLE_INLINE?ga:
t).call(this,b)},applyToObject:function(b){Q(b,this)},checkElementRemovable:function(b,f){if(!b)return v;var a=this._.definition,d;if(b._4e_name()==this.element){if(!f&&!b._4e_hasAttributes())return l;var c=a._AC;if(c)a=c;else{c={};var g=0,e=a.attributes;if(e)for(var h in e){g++;c[h]=e[h]}if(e=B.getStyleText(a)){c.style||g++;c.style=e}c._length=g;a=a._AC=c}if(a._length){for(var i in a)if(i!="_length"){g=b.attr(i)||"";if(i=="style")a:{c=a[i];g=T(g,v);typeof c=="string"&&(c=S(c));typeof g=="string"&&
(g=S(g));e=void 0;for(e in c)if(!(e in g&&(g[e]==c[e]||c[e]=="inherit"||g[e]=="inherit"))){c=v;break a}c=l}else c=a[i]==g;if(c){if(!f)return l}else if(f)return v}if(f)return l}else return l}i=G(this);if(i=i[b._4e_name()]||i["*"]){if(!(a=i.attributes)&&!(d=i.styles))return l;if(a)for(c=0;c<a.length;c++){i=a[c][0];if(i=b.attr(i)){g=a[c][1];if(g===t||typeof g=="string"&&i==g||g.test&&g.test(i))return l}}if(d)for(c=0;c<d.length;c++)if(i=b.css(d[c][0])){a=d[c][1];if(a===t||typeof a=="string"&&i==a||a.test&&
a.test(i))return l}}return v},checkActive:function(b){switch(this.type){case s.STYLE_BLOCK:return this.checkElementRemovable(b.block||b.blockLimit,l);case s.STYLE_OBJECT:case s.STYLE_INLINE:for(var f=b.elements,a=0,d;a<f.length;a++){d=f[a];if(!(this.type==s.STYLE_INLINE&&(D._4e_equals(d,b.block)||D._4e_equals(d,b.blockLimit))))if(!(this.type==s.STYLE_OBJECT&&!(d._4e_name()in O)))if(this.checkElementRemovable(d,l))return l}}return v}};B.getStyleText=function(b){var f=b._ST;if(f)return f;f=b.styles;
var a=b.attributes&&b.attributes.style||"",d="";if(a.length)a=a.replace(X,";");for(var c in f){var g=f[c],e=(c+":"+g).replace(X,";");if(g=="inherit")d+=e;else a+=e}if(a.length)a=T(a);a+=d;return b._ST=a};o.Style=B;o.Style=B;var A=B.prototype;o.Utils.extern(A,{apply:A.apply,remove:A.remove,applyToRange:A.applyToRange,removeFromRange:A.removeFromRange,applyToObject:A.applyToObject,checkElementRemovable:A.checkElementRemovable,checkActive:A.checkActive})});
