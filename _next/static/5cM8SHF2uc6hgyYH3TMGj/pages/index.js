(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{108:function(e,t,n){e.exports=n(107)},2:function(e,t,n){e.exports=n(207)},206:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(238),{page:e.exports.default}})},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.flush=function(){var e=o.cssRules();return o.flush(),e};var a,i=n(0),s=n(208);var o=new((a=s)&&a.__esModule?a:{default:a}).default,l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.prevProps={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.styleId!==e.styleId||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){o.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.styleId&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return o.computeId(t,n)}).join(" ")}}]),t}();t.default=l},208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(209)),i=s(n(210));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,a=t.optimizeForSpeed,s=void 0!==a&&a,o=t.isBrowser,l=void 0===o?"undefined"!=typeof window:o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return r(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,a=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=a.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join("\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),i=t+r;return e[i]||(e[i]="jsx-"+(0,a.default)(t+"-"+r)),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var a=n+r;return t[a]||(t[a]=r.replace(e,n)),t[a]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var n=this.computeId(e.styleId,e.dynamic);return{styleId:n,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(n,e)}):[this.computeSelector(n,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=o},209:function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},210:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var r=e.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,i=void 0===n?"stylesheet":n,o=t.optimizeForSpeed,l=void 0===o?r:o,c=t.isBrowser,u=void 0===c?"undefined"!=typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(a(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",s("boolean"==typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}return n(e,[{key:"setOptimizeForSpeed",value:function(e){s("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(a(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(a){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var a=this._tags[e];s(a,"old rule at index `"+e+"` not found"),a.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(a(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}]),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n(211))},211:function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l,c=[],u=!1,d=-1;function f(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&h())}function h(){if(!u){var e=o(f);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||u||o(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),o=(r=s)&&r.__esModule?r:{default:r};function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var c=function(e,t,n,r,a){var i=void 0;return r?(i="mailto:"+r,a&&(i+="?"+function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}(a))):e?i="tel:"+e:t?i="sms:"+t:n&&(i="facetime:"+n),i},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={humanInteraction:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),i(t,[{key:"render",value:function(){return!1===this.props.obfuscate?this.renderLink():this.renderObfuscatedLink()}},{key:"renderLink",value:function(){var e=this.props,t=e.tel,n=e.sms,r=e.facetime,i=e.email,s=(e.obfuscate,e.headers),u=e.children,d=l(e,["tel","sms","facetime","email","obfuscate","headers","children"]);return o.default.createElement("a",a({href:c(t,n,r,i,s)},d),u||t||n||r||i)}},{key:"reverse",value:function(e){return e.split("").reverse().join("")}},{key:"renderObfuscatedLink",value:function(){var e=this,t=this.props,n=t.tel,r=t.sms,i=t.facetime,s=t.email,c=(t.obfuscate,t.headers,t.children),u=t.style,d=t.linkText,f=l(t,["tel","sms","facetime","email","obfuscate","headers","children","style","linkText"]),h=!0===this.state.humanInteraction||c?a({},u||{},{unicodeBidi:"isolate-override",direction:"ltr"}):a({},u||{},{unicodeBidi:"isolate-override",direction:"rtl"});return o.default.createElement("a",a({onClick:this.handleClick.bind(this),onFocus:this.handleCopiability.bind(this),onMouseOver:this.handleCopiability.bind(this),onContextMenu:this.handleCopiability.bind(this),href:d||"obfuscated"},f,{style:h}),!0===e.state.humanInteraction?c||n||r||i||s:c||e.reverse(n||r||i||s).replace("(",")").replace(")","("))}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,n=t.tel,r=t.sms,a=t.facetime,i=t.email,s=t.headers;window.location.href=c(n,r,a,i,s)}},{key:"handleCopiability",value:function(){this.setState(function(e){return a({},e,{humanInteraction:!0})})}}]),t}();t.default=u},225:function(e,t,n){"use strict";var r=n(20),a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(226)),s=a(n(48)),o=a(n(8)),l=a(n(9)),c=a(n(17)),u=a(n(18)),d=a(n(19)),f=a(n(50)),h=a(n(14)),m=n(105),p=r(n(0)),y=(a(n(30)),r(n(47))),v=n(25);var g=function(e){function t(){var e,n,r,a,i,l;(0,o.default)(this,t);for(var d=arguments.length,p=new Array(d),g=0;g<d;g++)p[g]=arguments[g];return n=(0,c.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(p))),(0,h.default)((0,f.default)((0,f.default)(n)),"formatUrls",(r=function(e,t){return{href:e&&"object"===(0,s.default)(e)?(0,m.format)(e):e,as:t&&"object"===(0,s.default)(t)?(0,m.format)(t):t}},a=null,i=null,l=null,function(e,t){if(e===a&&t===i)return l;var n=r(e,t);return a=e,i=t,l=n,n})),(0,h.default)((0,f.default)((0,f.default)(n)),"linkClicked",function(e){var t=e.currentTarget,r=t.nodeName,a=t.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,o=i.as;if(function(e){var t=(0,m.parse)(e,!1,!0),n=(0,m.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var l=window.location.pathname;s=(0,m.resolve)(l,s),o=o?(0,m.resolve)(l,o):s,e.preventDefault();var c=n.props.scroll;null==c&&(c=o.indexOf("#")<0);var u=n.props.replace?"replace":"push";y.default[u](s,o,{shallow:n.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){n.props.onError&&n.props.onError(e)})}}}),n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,i.default)(this.props.href)!==(0,i.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,m.resolve)(e,t);y.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"==typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),s={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=a||r),s.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=(0,y._rewriteUrlForNextExport)(s.href)),p.default.cloneElement(i,s)}}]),t}(p.Component);t.default=g},226:function(e,t,n){e.exports=n(227)},227:function(e,t,n){var r=n(1),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},238:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(0),s=n.n(i),o=n(108),l=n.n(o),c=function(){return s.a.createElement("div",{className:"jsx-2668637848"},s.a.createElement(l.a,null,s.a.createElement("title",{className:"jsx-2668637848"},"Bruce Collie"),s.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",className:"jsx-2668637848"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Raleway|Roboto+Mono",rel:"stylesheet",className:"jsx-2668637848"})),s.a.createElement(a.a,{styleId:"2668637848",css:["body{color:#222;background-color:#FCFCFC;}","a{color:#666;-webkit-text-decoration:none;text-decoration:none;}","a:hover{color:#999;-webkit-text-decoration:underline;text-decoration:underline;}","@media(max-width:440px){body{margin:0;}}"]}))},u=function(e){var t=e.header,n=e.left,r=e.right,i=e.center;return s.a.createElement("div",{className:a.a.dynamic([["2003307685",[i?"center":"flex-start"]]])+" container"},s.a.createElement("div",{className:a.a.dynamic([["2003307685",[i?"center":"flex-start"]]])+" header"},t),s.a.createElement("div",{className:a.a.dynamic([["2003307685",[i?"center":"flex-start"]]])+" full-width"},s.a.createElement("div",{className:a.a.dynamic([["2003307685",[i?"center":"flex-start"]]])+" flex-grid"},s.a.createElement("div",{className:a.a.dynamic([["2003307685",[i?"center":"flex-start"]]])+" col"},n),s.a.createElement("div",{className:a.a.dynamic([["2003307685",[i?"center":"flex-start"]]])+" vr"}),s.a.createElement("div",{className:a.a.dynamic([["2003307685",[i?"center":"flex-start"]]])+" col"},r))),s.a.createElement(a.a,{styleId:"2003307685",css:[".vr.__jsx-style-dynamic-selector{background-color:#EEE;position:absolute;top:0;bottom:0;width:1px;}",".container.__jsx-style-dynamic-selector{max-width:1200px;margin:0 auto;font-family:Raleway,sans-serif;}",".flex-grid.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:".concat(i?"center":"flex-start",";-webkit-box-align:").concat(i?"center":"flex-start",";-ms-flex-align:").concat(i?"center":"flex-start",";align-items:").concat(i?"center":"flex-start",";-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}"),".col.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;margin:1em;}",".header.__jsx-style-dynamic-selector{width:100%;text-align:center;}",".full-width.__jsx-style-dynamic-selector{padding:1em;-webkit-filter:drop-shadow(0 0 0px #DDD);filter:drop-shadow(0 0 0px #DDD);margin-bottom:2em;}","@media(max-width:440px){.flex-grid.__jsx-style-dynamic-selector{display:block;}.full-width.__jsx-style-dynamic-selector{border-radius:0px;}.vr.__jsx-style-dynamic-selector{position:relative;width:100%;height:1px;}}"],dynamic:[i?"center":"flex-start"]}))},d=n(224),f=n.n(d),h=n(51),m=n.n(h);function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y=function(){return s.a.createElement("div",{className:"jsx-1556512897"},s.a.createElement("img",{src:"/static/me.jpg",className:"jsx-1556512897"}),s.a.createElement(a.a,{styleId:"1556512897",css:["img.jsx-1556512897{border-radius:30px;display:block;margin-left:auto;max-width:75%;-webkit-filter:drop-shadow(0 0 8px #BBB);filter:drop-shadow(0 0 8px #BBB);}","h1.jsx-1556512897{text-align:center;}","@media(max-width:440px){img.jsx-1556512897{max-width:100%;margin:0 auto;}}"]}))},v=function(){return s.a.createElement("div",{className:"jsx-4117862308"},s.a.createElement("h2",{className:"jsx-4117862308"},"about me"),s.a.createElement("p",{className:"jsx-4117862308"},"I am a first-year PhD student at the University of Edinburgh, supervised by ",s.a.createElement(m.a,{href:"http://www.dcs.ed.ac.uk/home/mob/"},s.a.createElement("a",{className:"jsx-4117862308"},"Professor Michael O'Boyle")),". My primary research goal is to improve the integration of heterogenous accelerators and user code, giving compilers new techniques for optimising performance-sensitive workloads. Currently, my focus is on two-phase type-directed program synthesis as a way of learning the behaviour of black-box interfaces."),s.a.createElement("p",{className:"jsx-4117862308"},"In my free time I play rugby at ",s.a.createElement(m.a,{href:"https://twitter.com/LismoreRFC"},s.a.createElement("a",{className:"jsx-4117862308"},"Lismore RFC")),", and enjoy good food, coffee and live music as much as I can."),s.a.createElement("h2",{className:"jsx-4117862308"},"contact"),s.a.createElement("p",{className:"jsx-4117862308"},"You can email me at ",s.a.createElement(f.a,{email:"bruce.collie@ed.ac.uk"}),", and all my code is on ",s.a.createElement(m.a,{href:"https://github.com/baltoli"},s.a.createElement("a",{className:"jsx-4117862308"},"Github")),"."),s.a.createElement(a.a,{styleId:"4117862308",css:[]}))},g=function(e){var t=e.name,n=e.place,r=e.date,i=e.description;return s.a.createElement("div",{className:"jsx-579762926"},s.a.createElement("li",{className:"jsx-579762926"},s.a.createElement("div",{className:"jsx-579762926 placeTime"},s.a.createElement("span",{className:"jsx-579762926 place"},n)," (",s.a.createElement("span",{className:"jsx-579762926 date"},r),")"),s.a.createElement("div",{className:"jsx-579762926 degree"},s.a.createElement("span",{className:"jsx-579762926 name"},t),": ",s.a.createElement("span",{className:"jsx-579762926 description"},i))),s.a.createElement(a.a,{styleId:"579762926",css:[".place.jsx-579762926{font-weight:bold;}","li.jsx-579762926{margin-top:1.2em;}"]}))},_=function(e){var t=e.name,n=e.link;return s.a.createElement("span",{className:"jsx-3940750827"},s.a.createElement(m.a,{href:n},s.a.createElement("a",{className:"jsx-3940750827"},t)),s.a.createElement(a.a,{styleId:"3940750827",css:["a.jsx-3940750827{text-transform:lowercase;}","span.jsx-3940750827{margin-left:0.75em;}"]}))},b=function(e){var t=e.name,n=e.description,r=p(e,["name","description"]);return s.a.createElement("div",{className:"jsx-109741588"},s.a.createElement("li",{className:"jsx-109741588"},s.a.createElement("div",{className:"jsx-109741588 info"},s.a.createElement("span",{className:"jsx-109741588 name"},t),r.children),s.a.createElement("div",{className:"jsx-109741588"},n)),s.a.createElement(a.a,{styleId:"109741588",css:["li.jsx-109741588{margin-top:1.2em;}",".name.jsx-109741588{font-weight:bold;}"]}))},w=function(e){var t=e.align,n=e.title,r=p(e,["align","title"]);return s.a.createElement("div",{className:a.a.dynamic([["3373959770",[t]]])},s.a.createElement("h2",{className:a.a.dynamic([["3373959770",[t]]])},n),s.a.createElement("ul",{className:a.a.dynamic([["3373959770",[t]]])},r.children),s.a.createElement(a.a,{styleId:"3373959770",css:["ul.__jsx-style-dynamic-selector{list-style-type:none;margin:0;padding:0;}","div.__jsx-style-dynamic-selector{text-align:".concat(t,";}"),"@media(max-width:440px){div.__jsx-style-dynamic-selector{text-align:left;}}"],dynamic:[t]}))},x=function(){return s.a.createElement(w,{align:"right",title:"education"},s.a.createElement(g,{name:"PhD Pervasive Parallelism",place:"University of Edinburgh",date:"2018–",description:"in progress"}),s.a.createElement(g,{name:"MScR Pervasive Parallelism",place:"University of Edinburgh",date:"2017–18",description:"Distinction"}),s.a.createElement(g,{name:"MEng Computer Science",place:"University of Cambridge",date:"2016–17",description:"Distinction"}),s.a.createElement(g,{name:"BA Computer Science",place:"University of Cambridge",date:"2013–16",description:s.a.createElement("span",null,"1",s.a.createElement("sup",null,"st")," Class")}))},E=function(){return s.a.createElement(w,{align:"left",title:"work and projects"},s.a.createElement(b,{name:"Program Synthesis",description:" The main focus of my MScR and PhD work so far is the development of program synthesis techniques that aim to learn the behaviour of black-box interfaces. My approach uses two-phase synthesis driven by type heuristics to synthesise complex control flow. "},s.a.createElement(_,{name:"Github",link:"https://github.com/baltoli/accsynt"}),s.a.createElement(_,{name:"Dissertation",link:"static/msc.pdf"})),s.a.createElement(b,{name:"TESLA",description:" During my MEng I contributed to TESLA, an existing project that allows for temporal assertions to be added to C programs and checked at runtime. I used model-checking to prove that individual assertions could be safely removed, improving the performance of programs using TESLA. "},s.a.createElement(_,{name:"Github",link:"https://github.com/cadets/tesla-static-analysis"}),s.a.createElement(_,{name:"Dissertation",link:"static/tesla.pdf"})),s.a.createElement(b,{name:"GoCardless",description:" At GoCardless I was a member of the Core Payments team, responsible for developing the infrastructure used by the company to process Direct Debit transactions. I investigated bugs, contributed to new features, and worked on upgrading legacy code. "},s.a.createElement(_,{name:"About",link:"https://www.gocardless.com"})),s.a.createElement(b,{name:"PCL",description:" My undergraduate final project was an implementation of the π-calculus, a minimal expression of concurrent message-passing semantics. I developed a compiler and virtual machine for this language, as well as a library of example programs demonstrating its usage. "},s.a.createElement(_,{name:"Github",link:"https://github.com/baltoli/pcl"}),s.a.createElement(_,{name:"Dissertation",link:"static/pcl.pdf"})),s.a.createElement(b,{name:"RealVNC",description:" At RealVNC I developed a prototype implementation of Apple's CarPlay software to run on the company's internal in-car entertainment platform. This involved writing kernel modules and patches for the Linux kernel's USB subsystem, as well as a driver for the CarPlay protocol. "},s.a.createElement(_,{name:"About",link:"https://www.realvnc.com"})),s.a.createElement(b,{name:"Other",description:" In 2015 I was responsible for managing the website, ticketing system and admissions for the Trinity Hall June Event, attended by roughly 2000 guests. I have also worked as a freelance iOS and backend developer on a number of projects. "}))};t.default=function(){return s.a.createElement("div",{className:"jsx-247033640"},s.a.createElement(c,null),s.a.createElement(u,{header:s.a.createElement("h1",{className:"jsx-247033640"},"bruce collie"),left:s.a.createElement(y,null),right:s.a.createElement(v,null),center:!0}),s.a.createElement(u,{header:s.a.createElement("h1",{className:"jsx-247033640"},"resume"),left:s.a.createElement(x,null),right:s.a.createElement(E,null)}),s.a.createElement(a.a,{styleId:"247033640",css:[]}))}},51:function(e,t,n){e.exports=n(225)}},[[206,1,0]]]);