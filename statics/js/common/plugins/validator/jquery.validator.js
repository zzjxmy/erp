/*! nice Validator 0.8.0
 * (c) 2012-2014 Jony Zhang <zj86@live.cn>, MIT Licensed
 * http://niceue.com/validator/
 */
!function(e){"function"==typeof define?define([],function(){return e}):e(jQuery)}(function(e,t){"use strict";function i(n,s){var r=this;return!r instanceof i?new i(n,s):(r.$el=e(n),r.$el.length?r._init(r.$el[0],s):W(n)&&(G[n]=s),t)}function n(e,t){var i=t?t===!0?this:t:n.prototype;if(X(e))for(var s in e)g(s)&&(i[s]=r(e[s]))}function s(e,t){var i=t?t===!0?this:t:s.prototype;if(X(e))for(var n in e){if(!e[n])return;i[n]=e[n]}}function r(t){switch(e.type(t)){case"function":return t;case"array":return function(e){return t[0].test(e.value)||t[1]||!1};case"regexp":return function(e){return t.test(e.value)}}}function a(t){var i,n,s;if(t&&t.tagName){switch(t.tagName){case"INPUT":case"SELECT":case"TEXTAREA":case"BUTTON":case"FIELDSET":i=t.form||e(t).closest("."+w);break;case"FORM":i=t;break;default:i=e(t).closest("."+w)}for(n in G)if(e(i).is(n)){s=G[n];break}return e(i).data(v)||e(i)[v](s).data(v)}}function l(e,t){var i,n=t||e.currentTarget;n.form&&null===Q(n.form,A)&&(i=a(n),i?(i._parse(n),i._focusin(e),t&&i._focusout(e,t)):Q(n,x,null))}function u(e,i){var n=H(Q(e,x+"-"+i));if(n)return n=Function("return "+n)(),n?r(n):t}function o(e,t,i){var n=t.msg,s=t._r;return X(n)&&(n=n[s]),W(n)||(n=Q(e,C+"-"+s)||Q(e,C)||(i?W(i)?i:i[s]:"")),n}function c(e){var t;return e&&(t=D.exec(e)),t&&t[1]}function f(e){return"INPUT"===e.tagName&&"checkbox"===e.type||"radio"===e.type}function d(e){return Date.parse(e.replace(/\.|\-/g,"/"))}function g(e){return/^[\w\d]+$/.test(e)}function p(e){return"#"===e.charAt(0)?e:':input[name="'+e+'"]'}!function(e){var t,i,n=document.getElementsByTagName("script");if(e)i=n[0],t=e.match(/(.*)\/local\/(\w{2,5})\.js/);else for(var s=n.length,r=/(.*validator.js)\?.*local=(\w+)/;s--&&!t;)i=n[s],t=(i.hasAttribute?i.src:i.getAttribute("src",4)||"").match(r);if(t){var a=t[0].split("/").slice(0,-1).join("/").replace(/\/(local|src)$/,"")+"/",l=document.createElement("link");l.rel="stylesheet",l.href=a+"jquery.validator.css",i.parentNode.insertBefore(l,i),e||(l=document.createElement("script"),l.async=1,l.src=a+"local/"+t[2].replace("-","_")+".js",i.parentNode.insertBefore(l,i))}}(e._VALIDATOR_URI);var h,m,v="validator",_="."+v,y=".rule",b=".field",k=".form",w="nice-"+v,M="msg-box",$="aria-required",O="aria-invalid",x="data-rule",C="data-msg",F="data-tip",V="data-ok",T="data-timely",R="data-target",A="novalidate",j=":verifiable",N=/(!?)\s?(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?\s*(;|\||&)?/g,E=/(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?/,S=/(?:([^:;\(\[]*):)?(.*)/,q=/[^\x00-\xff]/g,D=/^.*(top|right|bottom|left).*$/,I=/(?:(post|get):)?(.+)/i,U=/<|>/g,B=e.noop,L=e.proxy,H=e.trim,P=e.isFunction,W=function(e){return"string"==typeof e},X=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},J=!window.XMLHttpRequest,Q=function(e,i,n){return n===t?e.getAttribute(i):(null===n?e.removeAttribute(i):e.setAttribute(i,""+n),t)},z=window.console||{log:B,info:B},G={},K={debug:0,timely:1,theme:"default",ignore:"",focusInvalid:!0,beforeSubmit:B,validClass:"n-valid",invalidClass:"n-invalid",msgWrapper:"span",msgMaker:function(e){var t;return t='<span class="msg-wrap n-'+e.type+'" role="alert">',t+=e.icon+'<span class="n-msg">'+e.msg+"</span>",t+="</span>"},msgIcon:'<span class="n-icon"></span>',msgClass:"",defaultMsg:"{0} is not valid.",loadingMsg:"Validating..."},Y={"default":{formClass:"n-default",msgClass:"n-right",showOk:""}};e.fn[v]=function(t){var n=this,s=arguments;return n.is(":input")?n:(!n.is("form")&&(n=this.find("form")),!n.length&&(n=this),n.each(function(){var n=e(this).data(v);if(n)if(W(t)){if("_"===t.charAt(0))return;n[t].apply(n,Array.prototype.slice.call(s,1))}else t&&(n._reset(!0),n._init(this,t));else new i(this,t)}),this)},e.fn.isValid=function(e,t){var i,n,s=a(this[0]),r=P(e);return s?(s.checkOnly=!!t,n=s.options,i=s._multiValidate(this.is(":input")?this:this.find(j),function(t){t||!n.focusInvalid||s.checkOnly||s.$el.find(":input["+O+"]:first").focus(),r&&e.call(null,t),s.checkOnly=!1}),r?this:i):!0},e.expr[":"].verifiable=function(e){var t=e.nodeName.toLowerCase();return("input"===t&&!{submit:1,button:1,reset:1,image:1}[e.type]||"select"===t||"textarea"===t)&&e.disabled===!1},e.expr[":"].filled=function(e){return!!H(e.value)},i.prototype={_init:function(t,i){var r,a,l,u=this;if(P(i)&&(i={valid:i}),i=i||{},l=Q(t,"data-"+v+"-option"),l=l&&"{"===l.charAt(0)?Function("return "+l)():{},a=Y[i.theme||l.theme||K.theme],r=u.options=e.extend({},K,a,l,u.options,i),u.rules=new n(r.rules,!0),u.messages=new s(r.messages,!0),u.elements=u.elements||{},u.deferred={},u.errors={},u.fields={},u._initFields(r.fields),u.msgOpt={type:"error",pos:c(r.msgClass),wrapper:r.msgWrapper,cls:r.msgClass,style:r.msgStyle,icon:r.msgIcon,show:r.msgShow,hide:r.msgHide},u.isAjaxSubmit=!1,r.valid||!H(Q(t,"action")))u.isAjaxSubmit=!0;else{var o=e[e._data?"_data":"data"](t,"events");o&&o.valid&&e.map(o.valid,function(e){return~e.namespace.indexOf("form")?1:null}).length&&(u.isAjaxSubmit=!0)}u.$el.data(v)||(u.$el.data(v,u).addClass(w+" "+r.formClass).on("submit"+_+" validate"+_,L(u,"_submit")).on("reset"+_,L(u,"_reset")).on("showtip"+_,L(u,"_showTip")).on("focusin"+_+" click"+_+" showtip"+_,j,L(u,"_focusin")).on("focusout"+_+" validate"+_,j,L(u,"_focusout")),0!==r.timely&&u.$el.on("keyup"+_+" paste"+_,j,L(u,"_focusout")).on("click"+_,":radio,:checkbox",L(u,"_focusout")).on("change"+_,'select,input[type="file"]',L(u,"_focusout")),u._novalidate=Q(t,A),Q(t,A,A))},_initFields:function(t){var i=this;X(t)&&e.each(t,function(e,t){if(null===t){var n=i.elements[e];n&&i._resetElement(n,!0),delete i.fields[e]}else i.fields[e]=W(t)?{rule:t}:t}),i.$el.find(j).each(function(){i._parse(this)})},_parse:function(e){var t,i=this,n=e.name,s=Q(e,x);s&&Q(e,x,null),(e.id&&"#"+e.id in i.fields||!e.name)&&(n="#"+e.id),n&&(t=i.fields[n]||{},t.key=n,t.old={},t.rule=t.rule||s||"",t.rule&&(/match\(|checked/.test(t.rule)&&(t.must=!0),~t.rule.indexOf("required")&&(t.required=!0,Q(e,$,!0)),"timely"in t&&Q(e,T,+t.timely),W(t.target)&&Q(e,R,t.target),W(t.tip)&&Q(e,F,t.tip),i.fields[n]=i._parseRule(t)))},_parseRule:function(e){var i=S.exec(e.rule),n=this.options;if(i)return e._i=0,i[1]&&(e.display=i[1]),!e.display&&n.display&&(e.display=n.display),i[2]&&(e.rules=[],i[2].replace(N,function(){var i=arguments;i[3]=i[3]||i[4],e.rules.push({not:"!"===i[1],method:i[2],params:i[3]?i[3].split(", "):t,or:"|"===i[5]})})),e},_multiValidate:function(i,n){var s=this,r=s.options;return s.verifying=!0,s.isValid=!0,r.ignore&&(i=i.not(r.ignore)),i.each(function(e,i){var n=s.getField(i);return n&&(s._validate(i,n),!s.isValid&&r.stopOnError)?!1:t}),e.when.apply(null,e.map(s.deferred,function(e){return e})).done(function(){n.call(s,s.isValid),s.verifying=!1}),e.isEmptyObject(s.deferred)?s.isValid:t},_submit:function(t){var i=this,n=i.options,s=t.target,r="submit"===t.type;t.preventDefault(),m&&~(m=!1)||i.submiting||"validate"===t.type&&i.$el[0]!==s||n.beforeSubmit.call(i,s)===!1||(n.debug&&z.log("\n"+t.type),i._reset(),i.submiting=!0,i._multiValidate(i.$el.find(j),function(t){var a,l=t||2===n.debug?"valid":"invalid";t||(n.focusInvalid&&i.$el.find(":input["+O+'="true"]:first').focus(),a=e.map(i.errors,function(e){return e})),i.submiting=!1,P(n[l])&&n[l].call(i,s,a),i.$el.trigger(l+k,[s,a]),t&&!i.isAjaxSubmit&&r&&(m=!0,h&&h.name&&i.$el.append('<input type="hidden" name="'+h.name+'" value="'+e(h).val()+'">'),s.submit())}))},_reset:function(e){var t=this;t.errors={},e&&t.$el.find(j).each(function(e,i){t._resetElement(i)})},_resetElement:function(t,i){var n=this.options;e(t).removeClass(n.validClass+" "+n.invalidClass),this.hideMsg(t),i&&Q(t,$,null)},_focusin:function(t){var i,n=this,s=n.options,r=t.target;n.verifying||("showtip"!==t.type&&s.focusCleanup&&"true"===Q(r,O)&&(e(r).removeClass(s.invalidClass),n.hideMsg(r)),i=Q(r,F),i&&n.showMsg(r,{type:"tip",msg:i}))},_focusout:function(i,n){var s,r,a,l=this,u=l.options,o=i.target,c=i.type,d=0;if(!n&&f(o)&&(n=l.$el.find('input[name="'+o.name+'"]').get(0)),a=Q(n||o,T),a=null!==a?+a:+u.timely,"validate"===c)r=!0;else{if(0===a)return;if("focusout"===c){if(2===a)return s=l.getField(o),s.old.ret&&l._validatedField(o,s,s.old.ret),t}else{if(2>a)return;if("keyup"===c){var g=i.keyCode,p={8:1,9:1,16:1,32:1,46:1};if(9===g&&!o.value)return;if(48>g&&!p[g])return;d=a>=100?a:500}}}u.ignore&&e(o).is(u.ignore)||(s=l.getField(o),s&&(d?(s._t&&clearTimeout(s._t),s._t=setTimeout(function(){l._validate(o,s,r)},d)):l._validate(o,s,r)))},_showTip:function(e){var t=this;t.$el[0]===e.target&&t.$el.find(j+"["+F+"]").each(function(){t.showMsg(this,{msg:Q(this,F),type:"tip"})})},_validatedField:function(t,i,n){var s=this,r=s.options,a=n.isValid=i.isValid=!!n.isValid,l=a?"valid":"invalid";n.key=i.key,n.rule=i._r,a?n.type="ok":(s.submiting&&(s.errors[i.key]=n.msg),s.isValid=!1),s.elements[i.key]=n.element=t,s.$el[0].isValid=a?s.isFormValid():a,i.old.value=t.value,i.old.id=t.id,i.old.ret=n,P(i[l])&&i[l].call(s,t,n),e(t).attr(O,a?null:!0).removeClass(a?r.invalidClass:r.validClass).addClass(n.skip?"":a?r.validClass:r.invalidClass).trigger(l+b,[n,s]),s.$el.triggerHandler("validation",[n,s]),s.checkOnly||(i.msgMaker||r.msgMaker)&&s[n.showOk||n.msg?"showMsg":"hideMsg"](t,n,i)},_validatedRule:function(i,n,s,r){n=n||c.getField(i),r=r||{};var a,l,u,c=this,f=c.options,d=n._r,g=!1;if(null===s)return c._validatedField(i,n,{isValid:!0,skip:!0}),t;if(s===t?u=!0:s===!0||""===s?g=!0:W(s)?a=s:X(s)&&(s.error?a=s.error:(a=s.ok,g=!0)),l=n.rules[n._i],l.not&&(a=t,g="required"===d||!g),l.or)if(g)for(;n._i<n.rules.length&&n.rules[n._i].or;)n._i++;else u=!0;u?g=!0:g?(f.showOk!==!1&&(a=Q(i,V)||(W(n.ok)?n.ok:a),!W(a)&&W(f.showOk)&&(a=f.showOk),W(a)&&(r.showOk=g,r.msg=a)),e(i).trigger("valid"+y,[d,a])):(r.msg=(o(i,n,a||c.messages[d])||K.defaultMsg).replace("{0}",c._getDisplay(i,n.display||"")),e(i).trigger("invalid"+y,[d,r.msg])),r.isValid=g,f.debug&&z.log("   "+n._i+": "+d+" => "+(g||r.msg)),g&&n._i<n.rules.length-1?(n._i++,c._checkRule(i,n)):(n._i=0,c._validatedField(i,n,r))},_checkRule:function(i,n){var s,r,a=this,l=n.key,o=n.rules[n._i],c=o.method,f=o.params;a.submiting&&a.deferred[l]||(r=n.old,n._r=c,s=!n.must&&r.ret!==t&&r.rule===o&&r.id===i.id&&i.value&&r.value===i.value?r.ret:(u(i,c)||a.rules[c]||B).call(a,i,f,n),X(s)&&P(s.then)?(a.deferred[l]=s,!a.checkOnly&&a.showMsg(i,{type:"loading",msg:a.options.loadingMsg},n),s.then(function(s,l,u){var c,f=u.responseText,d=n.dataFilter||a.options.dataFilter;"json"===this.dataType?f=s:"{"===H(f).charAt(0)&&(f=e.parseJSON(f)||{}),P(d)||(d=function(e){return W(e)||X(e)&&("error"in e||"ok"in e)?e:t}),c=d(f),c===t&&(c=d(f.data)),r.rule=o,r.ret=c,a._validatedRule(i,n,c)},function(e,t){a._validatedRule(i,n,a.messages[t]||t)}).always(function(){delete a.deferred[l]}),n.isValid=t):a._validatedRule(i,n,s))},_validate:function(e,i){if(!e.disabled&&null===Q(e,A)){var n=this;if(i.isValid=!0,i.rules||n._parse(e),i.rules)return n.options.debug&&z.info(i.key),i.required||i.must||e.value||f(e)?(n._checkRule(e,i),t):(n._validatedField(e,i,{isValid:!0}),t)}},test:function(e,i){var n,s,r,a=this,l=E.exec(i);return l&&(s=l[1],s in a.rules&&(r=l[2]||l[3],r=r?r.split(", "):t,n=a.rules[s].call(a,e,r))),n===!0||n===t||null===n},getRangeMsg:function(e,t,i,n){if(t){var s=this,r=s.messages[i]||"",a=t[0].split("~"),l=a[0],u=a[1],o="rg",c=[""],f=+e===+e;if(2===a.length){if(l&&u){if(f&&e>=+l&&+u>=e)return!0;c=c.concat(a)}else if(l&&!u){if(f&&e>=+l)return!0;c.push(l),o="gte"}else if(!l&&u){if(f&&+u>=e)return!0;c.push(u),o="lte"}}else{if(e===+l)return!0;c.push(l),o="eq"}return r&&(n&&r[o+n]&&(o+=n),c[0]=r[o]),s.renderMsg.apply(null,c)}},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},_getDisplay:function(e,t){return W(t)?t:P(t)?t.call(this,e):""},_getMsgOpt:function(t){return e.extend({},this.msgOpt,W(t)?{msg:t}:t)},_getMsgDOM:function(t,i){var n,s,r,a=e(t);if(a.is(":input")?(r=i.target||Q(t,R),r&&(r=P(r)?r.call(this,t):this.$el.find(r),r.length&&(r.is(":input")?t=r.get(0):n=r)),n||(s=!f(t)&&t.id?t.id:t.name,n=this.$el.find(i.wrapper+"."+M+'[for="'+s+'"]'))):n=a,!n.length)if(a=this.$el.find(r||t),n=e("<"+i.wrapper+">").attr({"class":M+(i.cls?" "+i.cls:""),style:i.style||"","for":s}),f(t)){var l=a.parent();n.appendTo(l.is("label")?l.parent():l)}else n[i.pos&&"right"!==i.pos?"insertBefore":"insertAfter"](a);return n},showMsg:function(i,n,s){if(i){var r,a=this,l=a.options;if("object"==typeof i&&!i.nodeName&&!n)return e.each(i,function(e,t){var i=a.elements[e]||a.$el.find(p(e))[0];a.showMsg(i,t)}),t;if(n=a._getMsgOpt(n),(n.msg||n.showOk)&&(i=e(i).get(0),e(i).is(j)&&(s=s||a.getField(i),s&&(n.style=s.msgStyle||n.style,n.cls=s.msgClass||n.cls,n.wrapper=s.msgWrapper||n.wrapper,n.target=s.target||l.target)),r=(s||{}).msgMaker||l.msgMaker)){var u=a._getMsgDOM(i,n),o=u[0].className;!D.test(o)&&u.addClass(n.cls),J&&"bottom"===n.pos&&(u[0].style.marginTop=e(i).outerHeight()+"px"),u.html(r.call(a,n))[0].style.display="",P(n.show)&&n.show.call(a,u,n.type)}}},hideMsg:function(t,i,n){var s=this,r=s.options;t=e(t).get(0),i=s._getMsgOpt(i),e(t).is(j)&&(Q(t,O,null),n=n||s.getField(t),n&&(i.wrapper=n.msgWrapper||i.wrapper,i.target=n.target||r.target));var a=s._getMsgDOM(t,i);a.length&&(P(i.hide)?i.hide.call(s,a,i.type):a[0].style.display="none")},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,Q(e,x)&&i._parse(e),i.fields[t]},setField:function(e,t){var i={};W(e)?i[e]=t:X(e)&&(i=e),this._initFields(i)},isFormValid:function(){var e=this.fields;for(var t in e)if(!e[t].isValid)return e[t].isValid;return!0},holdSubmit:function(e){this.submiting=e===t||e},cleanUp:function(){this._reset(1)},destroy:function(){this._reset(1),this.$el.off(_).removeData(v),Q(this.$el[0],A,this._novalidate)}},e(document).on("focusin",":input["+x+"]",function(e){l(e)}).on("click","input,button",function(e){var t=this,i=t.name;if(t.form)if("submit"===t.type){h=t;var n=t.getAttributeNode("formnovalidate");(n&&null!==n.nodeValue||null!==Q(t,A))&&(m=!0)}else if(null===Q(t.form,A))if(i&&f(t)){var s=t.form.elements[i];s.length&&(s=s[0]),Q(s,x)&&l(e,s)}else l(e)}).on("submit validate","form",function(t){if(null===Q(this,A)){var i,n=e(this);n.data(v)||(i=a(this),e.isEmptyObject(i.fields)?(Q(this,A,A),n.off(_).removeData(v)):i._submit(t))}}),new n({required:function(t,i,n){var s=this,r=H(t.value),a=!0;if(i)if(1===i.length){if(g(i[0])){if(s.rules[i[0]]){if(!r&&!s.test(t,i[0]))return Q(t,$,null),null;Q(t,$,!0)}}else if(!r&&!e(i[0],s.$el).length)return null}else if("not"===i[0])e.each(i.slice(1),function(){return a=r!==H(this)});else if("from"===i[0]){var l,u=s.$el.find(i[1]),c="validated_rule";return a=u.filter(function(){return!!H(this.value)}).length>=(i[2]||1),a?r||(l=null):l=o(u[0],n)||!1,e(t).data(c)||u.data(c,!0).each(function(){t!==this&&s._checkRule(this,s.getField(this))}).removeData(c),l}return a&&!!r},integer:function(e,t){var i,n="0|",s="[1-9]\\d*",r=t?t[0]:"*";switch(r){case"+":i=s;break;case"-":i="-"+s;break;case"+0":i=n+s;break;case"-0":i=n+"-"+s;break;default:i=n+"-?"+s}return i="^(?:"+i+")$",RegExp(i).test(e.value)||this.messages.integer[r]},match:function(t,i,n){if(i){var s,r,a,l,u,o,c,f=this,g="eq";if(1===i.length?a=i[0]:(g=i[0],a=i[1]),u=p(a),o=f.$el.find(u)[0]){if(c=f.getField(o),s=t.value,r=o.value,n._match||(f.$el.on("valid"+b+_,u,function(){e(t).trigger("validate")}),n._match=c._match=1),!n.required&&""===s&&""===r)return null;if(i[2]&&("date"===i[2]?(s=d(s),r=d(r)):"time"===i[2]&&(s=+s.replace(":",""),r=+r.replace(":",""))),"eq"!==g&&!isNaN(+s)&&isNaN(+r))return!0;switch(l=f.messages.match[g].replace("{1}",f._getDisplay(t,c.display||a)),g){case"lt":return+r>+s||l;case"lte":return+r>=+s||l;case"gte":return+s>=+r||l;case"gt":return+s>+r||l;case"neq":return s!==r||l;default:return s===r||l}}}},range:function(e,t){return this.getRangeMsg(+e.value,t,"range")},checked:function(t,i,n){if(f(t)){var s,r,a=this;return r=a.$el.find('input[name="'+t.name+'"]').filter(function(){var t=this;return!s&&f(t)&&(s=t),!t.disabled&&t.checked&&e(t).is(":visible")}).length,i?a.getRangeMsg(r,i,"checked"):!!r||o(s,n,"")||a.messages.required}},length:function(e,t){var i=e.value,n=(t[1]?i.replace(q,"xx"):i).length;return this.getRangeMsg(n,t,"length",t[1]?"_2":"")},remote:function(t,i){if(i){var n,s=this,r=I.exec(i[0]),a=r[2],l=(r[1]||"POST").toUpperCase(),u={};return u[t.name]=t.value,i[1]&&e.map(i.slice(1),function(e){var t,i=e.split(":");e=H(i[0]),t=H(i[1]||"")||e,u[e]=s.$el.find(p(t)).val()}),u=e.param(u),"POST"===l&&(n=a.indexOf("?"),~n&&(u+="&"+a.substring(n+1,a.length),a=a.substring(0,n))),e.ajax({url:a,type:l,data:u,cache:!1})}},filter:function(e,t){e.value=e.value.replace(t?RegExp("["+t[0]+"]","gm"):U,"")}}),i.config=function(t){e.each(t,function(e,t){"rules"===e?new n(t):"messages"===e?new s(t):K[e]=t})},i.setTheme=function(t,i){X(t)?e.each(t,function(e,t){Y[e]=t}):W(t)&&X(i)&&(Y[t]=i)},e[v]=i});
