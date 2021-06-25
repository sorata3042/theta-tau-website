/*! For license information please see component---src-pages-contact-js-2c9d1e7c050505eb3b39.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2mql":function(e,t,r){"use strict";var n=r("TOwV"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?i:c[e.$$typeof]||a}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var d=Object.defineProperty,l=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var a=f(r);a&&a!==h&&e(t,a,n)}var i=l(r);p&&(i=i.concat(p(r)));for(var c=s(t),m=s(r),y=0;y<i.length;++y){var b=i[y];if(!(o[b]||n&&n[b]||m&&m[b]||c&&c[b])){var v=u(r,b);try{d(t,b,v)}catch(g){}}}}return t}},"Cuy+":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("Bl7J"),i=r("vrFN");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,r;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(s(t)),t.handleErrored=t.handleErrored.bind(s(t)),t.handleChange=t.handleChange.bind(s(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(s(t)),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},o.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},o.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},o.executeAsync=function(){var e=this;return new Promise((function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()}))},o.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},o.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},o.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},o.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},o.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},o.componentDidMount=function(){this.explicitRender()},o.componentDidUpdate=function(){this.explicitRender()},o.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},o.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},o.handleRecaptchaRef=function(e){this.captcha=e},o.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return a.a.createElement("div",c({},t,{ref:this.handleRecaptchaRef}))},n}(a.a.Component);d.displayName="ReCAPTCHA",d.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var l=r("17x9"),p=r.n(l),u=r("2mql"),f=r.n(u);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m={},y=0;var b,v,g=(b=function(){return"https://"+(("undefined"!=typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload=onloadcallback&render=explicit"},v=(v={callbackName:"onloadcallback",globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,a;function o(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}a=t,(r=o).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var i=o.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+y++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"==typeof b?b():b,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=m[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[v.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=v,a=n.globalName,o=n.callbackName,i=n.scriptId;if(a&&void 0!==window[a]&&(m[t]={loaded:!0,observers:{}}),m[t]){var c=m[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},m[t]={loaded:!1,observers:s};var d=document.createElement("script");for(var l in d.src=t,d.async=!0,v.attributes)d.setAttribute(l,v.attributes[l]);i&&(d.id=i);var p=function(e){if(m[t]){var r=m[t].observers;for(var n in r)e(r[n])&&delete r[n]}};o&&"undefined"!=typeof window&&(window[o]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=m[t];e&&(e.loaded=!0,p((function(t){return!o&&(t(e),!0)})))},d.onerror=function(){var e=m[t];e&&(e.errored=!0,p((function(t){return t(e),!0})))},document.body.appendChild(d)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===v.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=m[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===v.removeOnUnmount&&delete m[e])},i.render=function(){var t=v.globalName,r=this.props,a=(r.asyncScriptOnLoad,r.forwardedRef),o=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(o[t]=void 0!==window[t]?window[t]:void 0),o.ref=a,Object(n.createElement)(e,o)},o}(n.Component),a=Object(n.forwardRef)((function(e,t){return Object(n.createElement)(r,h({},e,{forwardedRef:t}))}));return a.displayName="AsyncScriptLoader("+t+")",a.propTypes={asyncScriptOnLoad:p.a.func},f()(a,e)})(d);t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{title:"Contact"}),a.a.createElement("div",{className:"content"},a.a.createElement("h1",null,"Contact Me"),a.a.createElement("form",{name:"contact",method:"POST","data-netlify":"true","data-netlify-honeypot":"bot-field","data-netlify-recaptcha":"true",action:"/thank-you"},a.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),a.a.createElement("div",{class:"hidden",style:{display:"none"}},a.a.createElement("label",null,"Don’t fill this out if you’re human ",a.a.createElement("input",{type:"hidden",name:"bot-field"}))),a.a.createElement("div",null,a.a.createElement("label",{className:"label",htmlFor:"name"},"Name")),a.a.createElement("div",null,a.a.createElement("input",{type:"text",name:"name",id:"name",required:!0})),a.a.createElement("div",null,a.a.createElement("label",{className:"label",htmlFor:"email"},"Email")),a.a.createElement("div",null,a.a.createElement("input",{className:"input",type:"email",name:"email",id:"email",required:!0})),a.a.createElement("div",{className:"field"},a.a.createElement("label",{className:"label",htmlFor:"subject"},"Subject")),a.a.createElement("div",null,a.a.createElement("input",{className:"input",name:"subject",id:"subject",required:!1})),a.a.createElement("div",{className:"field"},a.a.createElement("label",{className:"label",htmlFor:"message"},"Message")),a.a.createElement("div",null,a.a.createElement("textarea",{className:"textarea",name:"message",id:"message",required:!0})),a.a.createElement(g,{sitekey:"YOUR_SITE_KEY"}),a.a.createElement("div",{className:"field"},a.a.createElement("button",{class:"button",type:"submit"},"Send")))))}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},qT12:function(e,t,r){"use strict";var n="function"==typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,d=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,E=n?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case p:case u:case i:case s:case c:case h:return e;default:switch(e=e&&e.$$typeof){case l:case f:case b:case y:case d:return e;default:return t}}case o:return t}}}function x(e){return S(e)===u}t.AsyncMode=p,t.ConcurrentMode=u,t.ContextConsumer=l,t.ContextProvider=d,t.Element=a,t.ForwardRef=f,t.Fragment=i,t.Lazy=b,t.Memo=y,t.Portal=o,t.Profiler=s,t.StrictMode=c,t.Suspense=h,t.isAsyncMode=function(e){return x(e)||S(e)===p},t.isConcurrentMode=x,t.isContextConsumer=function(e){return S(e)===l},t.isContextProvider=function(e){return S(e)===d},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return S(e)===f},t.isFragment=function(e){return S(e)===i},t.isLazy=function(e){return S(e)===b},t.isMemo=function(e){return S(e)===y},t.isPortal=function(e){return S(e)===o},t.isProfiler=function(e){return S(e)===s},t.isStrictMode=function(e){return S(e)===c},t.isSuspense=function(e){return S(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===s||e===c||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===y||e.$$typeof===d||e.$$typeof===l||e.$$typeof===f||e.$$typeof===g||e.$$typeof===w||e.$$typeof===E||e.$$typeof===v)},t.typeOf=S}}]);
//# sourceMappingURL=component---src-pages-contact-js-2c9d1e7c050505eb3b39.js.map