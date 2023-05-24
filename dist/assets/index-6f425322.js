(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ea(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const V={},kt=[],Se=()=>{},bs=()=>!1,ys=/^on[^a-z]/,Qn=e=>ys.test(e),ta=e=>e.startsWith("onUpdate:"),oe=Object.assign,na=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xs=Object.prototype.hasOwnProperty,$=(e,t)=>xs.call(e,t),L=Array.isArray,At=e=>cn(e)==="[object Map]",Zn=e=>cn(e)==="[object Set]",za=e=>cn(e)==="[object Date]",z=e=>typeof e=="function",ae=e=>typeof e=="string",Gt=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",Yi=e=>K(e)&&z(e.then)&&z(e.catch),Wi=Object.prototype.toString,cn=e=>Wi.call(e),ws=e=>cn(e).slice(8,-1),Ki=e=>cn(e)==="[object Object]",ra=e=>ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Nn=ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),er=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},_s=/-(\w)/g,St=er(e=>e.replace(_s,(t,n)=>n?n.toUpperCase():"")),ks=/\B([A-Z])/g,Ft=er(e=>e.replace(ks,"-$1").toLowerCase()),Vi=er(e=>e.charAt(0).toUpperCase()+e.slice(1)),vr=er(e=>e?`on${Vi(e)}`:""),Jt=(e,t)=>!Object.is(e,t),Fn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},qi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ja;const Cr=()=>ja||(ja=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function aa(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ae(r)?Cs(r):aa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ae(e))return e;if(K(e))return e}}const As=/;(?![^(]*\))/g,Os=/:([^]+)/,Es=/\/\*[^]*?\*\//g;function Cs(e){const t={};return e.replace(Es,"").split(As).forEach(n=>{if(n){const r=n.split(Os);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function tr(e){let t="";if(ae(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=tr(e[n]);r&&(t+=r+" ")}else if(K(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ps="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ss=ea(Ps);function Xi(e){return!!e||e===""}function Is(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=nr(e[r],t[r]);return n}function nr(e,t){if(e===t)return!0;let n=za(e),r=za(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Gt(e),r=Gt(t),n||r)return e===t;if(n=L(e),r=L(t),n||r)return n&&r?Is(e,t):!1;if(n=K(e),r=K(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!nr(e[o],t[o]))return!1}}return String(e)===String(t)}function Ts(e,t){return e.findIndex(n=>nr(n,t))}const Ms=e=>ae(e)?e:e==null?"":L(e)||K(e)&&(e.toString===Wi||!z(e.toString))?JSON.stringify(e,Gi,2):String(e),Gi=(e,t)=>t&&t.__v_isRef?Gi(e,t.value):At(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Zn(t)?{[`Set(${t.size})`]:[...t.values()]}:K(t)&&!L(t)&&!Ki(t)?String(t):t;let ke;class Ns{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ke,!t&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ke;try{return ke=this,t()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Fs(e,t=ke){t&&t.active&&t.effects.push(e)}function Rs(){return ke}const ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ji=e=>(e.w&Ze)>0,Qi=e=>(e.n&Ze)>0,Ls=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Ds=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ji(a)&&!Qi(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},Pr=new WeakMap;let Ut=0,Ze=1;const Sr=30;let Oe;const mt=Symbol(""),Ir=Symbol("");class oa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fs(this,r)}run(){if(!this.active)return this.fn();let t=Oe,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Oe,Oe=this,Je=!0,Ze=1<<++Ut,Ut<=Sr?Ls(this):$a(this),this.fn()}finally{Ut<=Sr&&Ds(this),Ze=1<<--Ut,Oe=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Oe===this?this.deferStop=!0:this.active&&($a(this),this.onStop&&this.onStop(),this.active=!1)}}function $a(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const Zi=[];function Rt(){Zi.push(Je),Je=!1}function Lt(){const e=Zi.pop();Je=e===void 0?!0:e}function he(e,t,n){if(Je&&Oe){let r=Pr.get(e);r||Pr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ia()),eo(a)}}function eo(e,t){let n=!1;Ut<=Sr?Qi(e)||(e.n|=Ze,n=!Ji(e)):n=!e.has(Oe),n&&(e.add(Oe),Oe.deps.push(e))}function Ue(e,t,n,r,a,i){const o=Pr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?ra(n)&&s.push(o.get("length")):(s.push(o.get(mt)),At(e)&&s.push(o.get(Ir)));break;case"delete":L(e)||(s.push(o.get(mt)),At(e)&&s.push(o.get(Ir)));break;case"set":At(e)&&s.push(o.get(mt));break}if(s.length===1)s[0]&&Tr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Tr(ia(l))}}function Tr(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&Ha(r);for(const r of n)r.computed||Ha(r)}function Ha(e,t){(e!==Oe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const zs=ea("__proto__,__v_isRef,__isVue"),to=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Gt)),js=sa(),$s=sa(!1,!0),Hs=sa(!0),Ua=Us();function Us(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Rt();const r=U(this)[t].apply(this,n);return Lt(),r}}),e}function Bs(e){const t=U(this);return he(t,"has",e),t.hasOwnProperty(e)}function sa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?il:oo:t?io:ao).get(r))return r;const o=L(r);if(!e){if(o&&$(Ua,a))return Reflect.get(Ua,a,i);if(a==="hasOwnProperty")return Bs}const s=Reflect.get(r,a,i);return(Gt(a)?to.has(a):zs(a))||(e||he(r,"get",a),t)?s:le(s)?o&&ra(a)?s:s.value:K(s)?e?so(s):ca(s):s}}const Ys=no(),Ws=no(!0);function no(e=!1){return function(n,r,a,i){let o=n[r];if(It(o)&&le(o)&&!le(a))return!1;if(!e&&(!Un(a)&&!It(a)&&(o=U(o),a=U(a)),!L(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=L(n)&&ra(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Jt(a,o)&&Ue(n,"set",r,a):Ue(n,"add",r,a)),l}}function Ks(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ue(e,"delete",t,void 0),r}function Vs(e,t){const n=Reflect.has(e,t);return(!Gt(t)||!to.has(t))&&he(e,"has",t),n}function qs(e){return he(e,"iterate",L(e)?"length":mt),Reflect.ownKeys(e)}const ro={get:js,set:Ys,deleteProperty:Ks,has:Vs,ownKeys:qs},Xs={get:Hs,set(e,t){return!0},deleteProperty(e,t){return!0}},Gs=oe({},ro,{get:$s,set:Ws}),la=e=>e,rr=e=>Reflect.getPrototypeOf(e);function bn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:o}=rr(a),s=r?la:n?da:Qt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function yn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function xn(e,t=!1){return e=e.__v_raw,!t&&he(U(e),"iterate",mt),Reflect.get(e,"size",e)}function Ba(e){e=U(e);const t=U(this);return rr(t).has.call(t,e)||(t.add(e),Ue(t,"add",e,e)),this}function Ya(e,t){t=U(t);const n=U(this),{has:r,get:a}=rr(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Jt(t,o)&&Ue(n,"set",e,t):Ue(n,"add",e,t),this}function Wa(e){const t=U(this),{has:n,get:r}=rr(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ue(t,"delete",e,void 0),i}function Ka(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Ue(e,"clear",void 0,void 0),n}function wn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?la:e?da:Qt;return!e&&he(s,"iterate",mt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function _n(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=At(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?la:t?da:Qt;return!t&&he(i,"iterate",l?Ir:mt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return e==="delete"?!1:this}}function Js(){const e={get(i){return bn(this,i)},get size(){return xn(this)},has:yn,add:Ba,set:Ya,delete:Wa,clear:Ka,forEach:wn(!1,!1)},t={get(i){return bn(this,i,!1,!0)},get size(){return xn(this)},has:yn,add:Ba,set:Ya,delete:Wa,clear:Ka,forEach:wn(!1,!0)},n={get(i){return bn(this,i,!0)},get size(){return xn(this,!0)},has(i){return yn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:wn(!0,!1)},r={get(i){return bn(this,i,!0,!0)},get size(){return xn(this,!0)},has(i){return yn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:wn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=_n(i,!1,!1),n[i]=_n(i,!0,!1),t[i]=_n(i,!1,!0),r[i]=_n(i,!0,!0)}),[e,n,t,r]}const[Qs,Zs,el,tl]=Js();function fa(e,t){const n=t?e?tl:el:e?Zs:Qs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const nl={get:fa(!1,!1)},rl={get:fa(!1,!0)},al={get:fa(!0,!1)},ao=new WeakMap,io=new WeakMap,oo=new WeakMap,il=new WeakMap;function ol(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sl(e){return e.__v_skip||!Object.isExtensible(e)?0:ol(ws(e))}function ca(e){return It(e)?e:ua(e,!1,ro,nl,ao)}function ll(e){return ua(e,!1,Gs,rl,io)}function so(e){return ua(e,!0,Xs,al,oo)}function ua(e,t,n,r,a){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=sl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ot(e){return It(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function It(e){return!!(e&&e.__v_isReadonly)}function Un(e){return!!(e&&e.__v_isShallow)}function lo(e){return Ot(e)||It(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function fo(e){return Hn(e,"__v_skip",!0),e}const Qt=e=>K(e)?ca(e):e,da=e=>K(e)?so(e):e;function co(e){Je&&Oe&&(e=U(e),eo(e.dep||(e.dep=ia())))}function uo(e,t){e=U(e);const n=e.dep;n&&Tr(n)}function le(e){return!!(e&&e.__v_isRef===!0)}function Bn(e){return fl(e,!1)}function fl(e,t){return le(e)?e:new cl(e,t)}class cl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Qt(t)}get value(){return co(this),this._value}set value(t){const n=this.__v_isShallow||Un(t)||It(t);t=n?t:U(t),Jt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Qt(t),uo(this))}}function Fe(e){return le(e)?e.value:e}const ul={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function mo(e){return Ot(e)?e:new Proxy(e,ul)}class dl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new oa(t,()=>{this._dirty||(this._dirty=!0,uo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return co(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ml(e,t,n=!1){let r,a;const i=z(e);return i?(r=e,a=Se):(r=e.get,a=e.set),new dl(r,a,i||!a,n)}function Qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){ar(i,t,n)}return a}function Ie(e,t,n,r){if(z(e)){const i=Qe(e,t,n,r);return i&&Yi(i)&&i.catch(o=>{ar(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ie(e[i],t,n,r));return a}function ar(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Qe(l,null,10,[e,o,s]);return}}pl(e,n,a,r)}function pl(e,t,n,r=!0){console.error(e)}let Zt=!1,Mr=!1;const fe=[];let Le=0;const Et=[];let $e=null,lt=0;const po=Promise.resolve();let ma=null;function hl(e){const t=ma||po;return e?t.then(this?e.bind(this):e):t}function gl(e){let t=Le+1,n=fe.length;for(;t<n;){const r=t+n>>>1;en(fe[r])<e?t=r+1:n=r}return t}function pa(e){(!fe.length||!fe.includes(e,Zt&&e.allowRecurse?Le+1:Le))&&(e.id==null?fe.push(e):fe.splice(gl(e.id),0,e),ho())}function ho(){!Zt&&!Mr&&(Mr=!0,ma=po.then(vo))}function vl(e){const t=fe.indexOf(e);t>Le&&fe.splice(t,1)}function bl(e){L(e)?Et.push(...e):(!$e||!$e.includes(e,e.allowRecurse?lt+1:lt))&&Et.push(e),ho()}function Va(e,t=Zt?Le+1:0){for(;t<fe.length;t++){const n=fe[t];n&&n.pre&&(fe.splice(t,1),t--,n())}}function go(e){if(Et.length){const t=[...new Set(Et)];if(Et.length=0,$e){$e.push(...t);return}for($e=t,$e.sort((n,r)=>en(n)-en(r)),lt=0;lt<$e.length;lt++)$e[lt]();$e=null,lt=0}}const en=e=>e.id==null?1/0:e.id,yl=(e,t)=>{const n=en(e)-en(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function vo(e){Mr=!1,Zt=!0,fe.sort(yl);const t=Se;try{for(Le=0;Le<fe.length;Le++){const n=fe[Le];n&&n.active!==!1&&Qe(n,null,14)}}finally{Le=0,fe.length=0,go(),Zt=!1,ma=null,(fe.length||Et.length)&&vo()}}function xl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||V;v&&(a=n.map(A=>ae(A)?A.trim():A)),m&&(a=n.map(qi))}let s,l=r[s=vr(t)]||r[s=vr(St(t))];!l&&i&&(l=r[s=vr(Ft(t))]),l&&Ie(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ie(c,e,6,a)}}function bo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!z(e)){const l=c=>{const d=bo(c,t,!0);d&&(s=!0,oe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(K(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):oe(o,i),K(e)&&r.set(e,o),o)}function ir(e,t){return!e||!Qn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Ft(t))||$(e,t))}let Ee=null,yo=null;function Yn(e){const t=Ee;return Ee=e,yo=e&&e.type.__scopeId||null,t}function wl(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ri(-1);const i=Yn(t);let o;try{o=e(...a)}finally{Yn(i),r._d&&ri(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function br(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:A,ctx:S,inheritAttrs:w}=e;let I,b;const O=Yn(e);try{if(n.shapeFlag&4){const P=a||r;I=Re(d.call(P,P,m,i,A,v,S)),b=l}else{const P=t;I=Re(P.length>1?P(i,{attrs:l,slots:s,emit:c}):P(i,null)),b=t.props?l:_l(l)}}catch(P){Vt.length=0,ar(P,e,1),I=ne(tn)}let N=I;if(b&&w!==!1){const P=Object.keys(b),{shapeFlag:H}=N;P.length&&H&7&&(o&&P.some(ta)&&(b=kl(b,o)),N=Tt(N,b))}return n.dirs&&(N=Tt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),I=N,Yn(O),I}const _l=e=>{let t;for(const n in e)(n==="class"||n==="style"||Qn(n))&&((t||(t={}))[n]=e[n]);return t},kl=(e,t)=>{const n={};for(const r in e)(!ta(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Al(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?qa(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!ir(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?qa(r,o,c):!0:!!o;return!1}function qa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ir(n,i))return!0}return!1}function Ol({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const El=e=>e.__isSuspense;function Cl(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):bl(e)}const kn={};function Ct(e,t,n){return xo(e,t,n)}function xo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){var s;const l=Rs()===((s=ce)==null?void 0:s.scope)?ce:null;let c,d=!1,m=!1;if(le(e)?(c=()=>e.value,d=Un(e)):Ot(e)?(c=()=>e,r=!0):L(e)?(m=!0,d=e.some(P=>Ot(P)||Un(P)),c=()=>e.map(P=>{if(le(P))return P.value;if(Ot(P))return ct(P);if(z(P))return Qe(P,l,2)})):z(e)?t?c=()=>Qe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Ie(e,l,3,[A])}:c=Se,t&&r){const P=c;c=()=>ct(P())}let v,A=P=>{v=O.onStop=()=>{Qe(P,l,4)}},S;if(rn)if(A=Se,t?n&&Ie(t,l,3,[c(),m?[]:void 0,A]):c(),a==="sync"){const P=Af();S=P.__watcherHandles||(P.__watcherHandles=[])}else return Se;let w=m?new Array(e.length).fill(kn):kn;const I=()=>{if(O.active)if(t){const P=O.run();(r||d||(m?P.some((H,te)=>Jt(H,w[te])):Jt(P,w)))&&(v&&v(),Ie(t,l,3,[P,w===kn?void 0:m&&w[0]===kn?[]:w,A]),w=P)}else O.run()};I.allowRecurse=!!t;let b;a==="sync"?b=I:a==="post"?b=()=>pe(I,l&&l.suspense):(I.pre=!0,l&&(I.id=l.uid),b=()=>pa(I));const O=new oa(c,b);t?n?I():w=O.run():a==="post"?pe(O.run.bind(O),l&&l.suspense):O.run();const N=()=>{O.stop(),l&&l.scope&&na(l.scope.effects,O)};return S&&S.push(N),N}function Pl(e,t,n){const r=this.proxy,a=ae(e)?e.includes(".")?wo(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const o=ce;Mt(this);const s=xo(a,i.bind(r),n);return o?Mt(o):pt(),s}function wo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ct(e,t){if(!K(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))ct(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)ct(e[n],t);else if(Zn(e)||At(e))e.forEach(n=>{ct(n,t)});else if(Ki(e))for(const n in e)ct(e[n],t);return e}function Nr(e,t){const n=Ee;if(n===null)return e;const r=fr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=V]=t[i];o&&(z(o)&&(o={mounted:o,updated:o}),o.deep&&ct(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function it(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Rt(),Ie(l,n,8,[e.el,s,e,t]),Lt())}}function Sl(e,t){return z(e)?(()=>oe({name:e.name},t,{setup:e}))():e}const Rn=e=>!!e.type.__asyncLoader,_o=e=>e.type.__isKeepAlive;function Il(e,t){ko(e,"a",t)}function Tl(e,t){ko(e,"da",t)}function ko(e,t,n=ce){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(or(t,r,n),n){let a=n.parent;for(;a&&a.parent;)_o(a.parent.vnode)&&Ml(r,t,n,a),a=a.parent}}function Ml(e,t,n,r){const a=or(t,e,r,!0);Ao(()=>{na(r[t],a)},n)}function or(e,t,n=ce,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Rt(),Mt(n);const s=Ie(t,n,e,o);return pt(),Lt(),s});return r?a.unshift(i):a.push(i),i}}const Ke=e=>(t,n=ce)=>(!rn||e==="sp")&&or(e,(...r)=>t(...r),n),Nl=Ke("bm"),Fl=Ke("m"),Rl=Ke("bu"),Ll=Ke("u"),Dl=Ke("bum"),Ao=Ke("um"),zl=Ke("sp"),jl=Ke("rtg"),$l=Ke("rtc");function Hl(e,t=ce){or("ec",e,t)}const Ul=Symbol.for("v-ndc");function Fr(e,t,n,r){let a;const i=n&&n[r];if(L(e)||ae(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(K(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Rr=e=>e?Ro(e)?fr(e)||e.proxy:Rr(e.parent):null,Kt=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Rr(e.parent),$root:e=>Rr(e.root),$emit:e=>e.emit,$options:e=>ha(e),$forceUpdate:e=>e.f||(e.f=()=>pa(e.update)),$nextTick:e=>e.n||(e.n=hl.bind(e.proxy)),$watch:e=>Pl.bind(e)}),yr=(e,t)=>e!==V&&!e.__isScriptSetup&&$(e,t),Bl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(yr(r,t))return o[t]=1,r[t];if(a!==V&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==V&&$(n,t))return o[t]=4,n[t];Lr&&(o[t]=0)}}const d=Kt[t];let m,v;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==V&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return yr(a,t)?(a[t]=n,!0):r!==V&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==V&&$(e,o)||yr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Kt,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xa(e){return L(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Lr=!0;function Yl(e){const t=ha(e),n=e.proxy,r=e.ctx;Lr=!1,t.beforeCreate&&Ga(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:A,updated:S,activated:w,deactivated:I,beforeDestroy:b,beforeUnmount:O,destroyed:N,unmounted:P,render:H,renderTracked:te,renderTriggered:G,errorCaptured:ye,serverPrefetch:xe,expose:ze,inheritAttrs:zt,components:pn,directives:hn,filters:pr}=t;if(c&&Wl(c,r,null),o)for(const J in o){const Y=o[J];z(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);K(J)&&(e.data=ca(J))}if(Lr=!0,i)for(const J in i){const Y=i[J],rt=z(Y)?Y.bind(n,n):z(Y.get)?Y.get.bind(n,n):Se,gn=!z(Y)&&z(Y.set)?Y.set.bind(n):Se,at=st({get:rt,set:gn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>at.value,set:Te=>at.value=Te})}if(s)for(const J in s)Oo(s[J],r,n,J);if(l){const J=z(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{Jl(Y,J[Y])})}d&&Ga(d,e,"c");function ue(J,Y){L(Y)?Y.forEach(rt=>J(rt.bind(n))):Y&&J(Y.bind(n))}if(ue(Nl,m),ue(Fl,v),ue(Rl,A),ue(Ll,S),ue(Il,w),ue(Tl,I),ue(Hl,ye),ue($l,te),ue(jl,G),ue(Dl,O),ue(Ao,P),ue(zl,xe),L(ze))if(ze.length){const J=e.exposed||(e.exposed={});ze.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:rt=>n[Y]=rt})})}else e.exposed||(e.exposed={});H&&e.render===Se&&(e.render=H),zt!=null&&(e.inheritAttrs=zt),pn&&(e.components=pn),hn&&(e.directives=hn)}function Wl(e,t,n=Se){L(e)&&(e=Dr(e));for(const r in e){const a=e[r];let i;K(a)?"default"in a?i=Ln(a.from||r,a.default,!0):i=Ln(a.from||r):i=Ln(a),le(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ga(e,t,n){Ie(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oo(e,t,n,r){const a=r.includes(".")?wo(n,r):()=>n[r];if(ae(e)){const i=t[e];z(i)&&Ct(a,i)}else if(z(e))Ct(a,e.bind(n));else if(K(e))if(L(e))e.forEach(i=>Oo(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&Ct(a,i,e)}}function ha(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Wn(l,c,o,!0)),Wn(l,t,o)),K(t)&&i.set(t,l),l}function Wn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Wn(e,i,n,!0),a&&a.forEach(o=>Wn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Kl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Kl={data:Ja,props:Qa,emits:Qa,methods:Bt,computed:Bt,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:Bt,directives:Bt,watch:ql,provide:Ja,inject:Vl};function Ja(e,t){return t?e?function(){return oe(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Vl(e,t){return Bt(Dr(e),Dr(t))}function Dr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function Bt(e,t){return e?oe(Object.create(null),e,t):t}function Qa(e,t){return e?L(e)&&L(t)?[...new Set([...e,...t])]:oe(Object.create(null),Xa(e),Xa(t??{})):t}function ql(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function Eo(){return{app:null,config:{isNativeTag:bs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xl=0;function Gl(e,t){return function(r,a=null){z(r)||(r=oe({},r)),a!=null&&!K(a)&&(a=null);const i=Eo(),o=new Set;let s=!1;const l=i.app={_uid:Xl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Of,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&z(c.install)?(o.add(c),c.install(l,...d)):z(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ne(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,fr(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Kn=l;try{return c()}finally{Kn=null}}};return l}}let Kn=null;function Jl(e,t){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[e]=t}}function Ln(e,t,n=!1){const r=ce||Ee;if(r||Kn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Kn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&z(t)?t.call(r&&r.proxy):t}}function Ql(e,t,n,r=!1){const a={},i={};Hn(i,lr,1),e.propsDefaults=Object.create(null),Co(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ll(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Zl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(ir(e.emitsOptions,v))continue;const A=t[v];if(l)if($(i,v))A!==i[v]&&(i[v]=A,c=!0);else{const S=St(v);a[S]=zr(l,s,S,A,e,!1)}else A!==i[v]&&(i[v]=A,c=!0)}}}else{Co(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=Ft(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=zr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&Ue(e,"set","$attrs")}function Co(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Nn(l))continue;const c=t[l];let d;a&&$(a,d=St(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:ir(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||V;for(let d=0;d<i.length;d++){const m=i[d];n[m]=zr(a,l,m,c[m],e,!$(c,m))}}return o}function zr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&z(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Mt(a),r=c[n]=l.call(null,t),pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ft(n))&&(r=!0))}return r}function Po(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!z(e)){const d=m=>{l=!0;const[v,A]=Po(m,t,!0);oe(o,v),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return K(e)&&r.set(e,kt),kt;if(L(i))for(let d=0;d<i.length;d++){const m=St(i[d]);Za(m)&&(o[m]=V)}else if(i)for(const d in i){const m=St(d);if(Za(m)){const v=i[d],A=o[m]=L(v)||z(v)?{type:v}:oe({},v);if(A){const S=ni(Boolean,A.type),w=ni(String,A.type);A[0]=S>-1,A[1]=w<0||S<w,(S>-1||$(A,"default"))&&s.push(m)}}}const c=[o,s];return K(e)&&r.set(e,c),c}function Za(e){return e[0]!=="$"}function ei(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ti(e,t){return ei(e)===ei(t)}function ni(e,t){return L(t)?t.findIndex(n=>ti(n,e)):z(t)&&ti(t,e)?0:-1}const So=e=>e[0]==="_"||e==="$stable",ga=e=>L(e)?e.map(Re):[Re(e)],ef=(e,t,n)=>{if(t._n)return t;const r=wl((...a)=>ga(t(...a)),n);return r._c=!1,r},Io=(e,t,n)=>{const r=e._ctx;for(const a in e){if(So(a))continue;const i=e[a];if(z(i))t[a]=ef(a,i,r);else if(i!=null){const o=ga(i);t[a]=()=>o}}},To=(e,t)=>{const n=ga(t);e.slots.default=()=>n},tf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Hn(t,"_",n)):Io(t,e.slots={})}else e.slots={},t&&To(e,t);Hn(e.slots,lr,1)},nf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(oe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Io(t,a)),o=t}else t&&(To(e,t),o={default:1});if(i)for(const s in a)!So(s)&&!(s in o)&&delete a[s]};function jr(e,t,n,r,a=!1){if(L(e)){e.forEach((v,A)=>jr(v,t&&(L(t)?t[A]:t),n,r,a));return}if(Rn(r)&&!a)return;const i=r.shapeFlag&4?fr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ae(c)?(d[c]=null,$(m,c)&&(m[c]=null)):le(c)&&(c.value=null)),z(l))Qe(l,s,12,[o,d]);else{const v=ae(l),A=le(l);if(v||A){const S=()=>{if(e.f){const w=v?$(m,l)?m[l]:d[l]:l.value;a?L(w)&&na(w,i):L(w)?w.includes(i)||w.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):A&&(l.value=o,e.k&&(d[e.k]=o))};o?(S.id=-1,pe(S,n)):S()}}}const pe=Cl;function rf(e){return af(e)}function af(e,t){const n=Cr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:A=Se,insertStaticContent:S}=e,w=(f,u,p,g=null,h=null,_=null,E=!1,x=null,k=!!u.dynamicChildren)=>{if(f===u)return;f&&!$t(f,u)&&(g=vn(f),Te(f,h,_,!0),f=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:y,ref:F,shapeFlag:T}=u;switch(y){case sr:I(f,u,p,g);break;case tn:b(f,u,p,g);break;case Dn:f==null&&O(u,p,g,E);break;case ve:pn(f,u,p,g,h,_,E,x,k);break;default:T&1?H(f,u,p,g,h,_,E,x,k):T&6?hn(f,u,p,g,h,_,E,x,k):(T&64||T&128)&&y.process(f,u,p,g,h,_,E,x,k,vt)}F!=null&&h&&jr(F,f&&f.ref,_,u||f,!u)},I=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},b=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},O=(f,u,p,g)=>{[f.el,f.anchor]=S(f.children,u,p,g,f.el,f.anchor)},N=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},P=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},H=(f,u,p,g,h,_,E,x,k)=>{E=E||u.type==="svg",f==null?te(u,p,g,h,_,E,x,k):xe(f,u,h,_,E,x,k)},te=(f,u,p,g,h,_,E,x)=>{let k,y;const{type:F,props:T,shapeFlag:R,transition:D,dirs:j}=f;if(k=f.el=o(f.type,_,T&&T.is,T),R&8?d(k,f.children):R&16&&ye(f.children,k,null,g,h,_&&F!=="foreignObject",E,x),j&&it(f,null,g,"created"),G(k,f,f.scopeId,E,g),T){for(const B in T)B!=="value"&&!Nn(B)&&i(k,B,null,T[B],_,f.children,g,h,je);"value"in T&&i(k,"value",null,T.value),(y=T.onVnodeBeforeMount)&&Ne(y,g,f)}j&&it(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&D&&!D.persisted;W&&D.beforeEnter(k),r(k,u,p),((y=T&&T.onVnodeMounted)||W||j)&&pe(()=>{y&&Ne(y,g,f),W&&D.enter(k),j&&it(f,null,g,"mounted")},h)},G=(f,u,p,g,h)=>{if(p&&A(f,p),g)for(let _=0;_<g.length;_++)A(f,g[_]);if(h){let _=h.subTree;if(u===_){const E=h.vnode;G(f,E,E.scopeId,E.slotScopeIds,h.parent)}}},ye=(f,u,p,g,h,_,E,x,k=0)=>{for(let y=k;y<f.length;y++){const F=f[y]=x?Ge(f[y]):Re(f[y]);w(null,F,u,p,g,h,_,E,x)}},xe=(f,u,p,g,h,_,E)=>{const x=u.el=f.el;let{patchFlag:k,dynamicChildren:y,dirs:F}=u;k|=f.patchFlag&16;const T=f.props||V,R=u.props||V;let D;p&&ot(p,!1),(D=R.onVnodeBeforeUpdate)&&Ne(D,p,u,f),F&&it(u,f,p,"beforeUpdate"),p&&ot(p,!0);const j=h&&u.type!=="foreignObject";if(y?ze(f.dynamicChildren,y,x,p,g,j,_):E||Y(f,u,x,null,p,g,j,_,!1),k>0){if(k&16)zt(x,u,T,R,p,g,h);else if(k&2&&T.class!==R.class&&i(x,"class",null,R.class,h),k&4&&i(x,"style",T.style,R.style,h),k&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const re=W[B],_e=T[re],bt=R[re];(bt!==_e||re==="value")&&i(x,re,_e,bt,h,f.children,p,g,je)}}k&1&&f.children!==u.children&&d(x,u.children)}else!E&&y==null&&zt(x,u,T,R,p,g,h);((D=R.onVnodeUpdated)||F)&&pe(()=>{D&&Ne(D,p,u,f),F&&it(u,f,p,"updated")},g)},ze=(f,u,p,g,h,_,E)=>{for(let x=0;x<u.length;x++){const k=f[x],y=u[x],F=k.el&&(k.type===ve||!$t(k,y)||k.shapeFlag&70)?m(k.el):p;w(k,y,F,null,g,h,_,E,!0)}},zt=(f,u,p,g,h,_,E)=>{if(p!==g){if(p!==V)for(const x in p)!Nn(x)&&!(x in g)&&i(f,x,p[x],null,E,u.children,h,_,je);for(const x in g){if(Nn(x))continue;const k=g[x],y=p[x];k!==y&&x!=="value"&&i(f,x,y,k,E,u.children,h,_,je)}"value"in g&&i(f,"value",p.value,g.value)}},pn=(f,u,p,g,h,_,E,x,k)=>{const y=u.el=f?f.el:s(""),F=u.anchor=f?f.anchor:s("");let{patchFlag:T,dynamicChildren:R,slotScopeIds:D}=u;D&&(x=x?x.concat(D):D),f==null?(r(y,p,g),r(F,p,g),ye(u.children,p,F,h,_,E,x,k)):T>0&&T&64&&R&&f.dynamicChildren?(ze(f.dynamicChildren,R,p,h,_,E,x),(u.key!=null||h&&u===h.subTree)&&Mo(f,u,!0)):Y(f,u,p,F,h,_,E,x,k)},hn=(f,u,p,g,h,_,E,x,k)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,E,k):pr(u,p,g,h,_,E,k):Ma(f,u,k)},pr=(f,u,p,g,h,_,E)=>{const x=f.component=gf(f,g,h);if(_o(f)&&(x.ctx.renderer=vt),vf(x),x.asyncDep){if(h&&h.registerDep(x,ue),!f.el){const k=x.subTree=ne(tn);b(null,k,u,p)}return}ue(x,f,u,p,h,_,E)},Ma=(f,u,p)=>{const g=u.component=f.component;if(Al(f,u,p))if(g.asyncDep&&!g.asyncResolved){J(g,u,p);return}else g.next=u,vl(g.update),g.update();else u.el=f.el,g.vnode=u},ue=(f,u,p,g,h,_,E)=>{const x=()=>{if(f.isMounted){let{next:F,bu:T,u:R,parent:D,vnode:j}=f,W=F,B;ot(f,!1),F?(F.el=j.el,J(f,F,E)):F=j,T&&Fn(T),(B=F.props&&F.props.onVnodeBeforeUpdate)&&Ne(B,D,F,j),ot(f,!0);const re=br(f),_e=f.subTree;f.subTree=re,w(_e,re,m(_e.el),vn(_e),f,h,_),F.el=re.el,W===null&&Ol(f,re.el),R&&pe(R,h),(B=F.props&&F.props.onVnodeUpdated)&&pe(()=>Ne(B,D,F,j),h)}else{let F;const{el:T,props:R}=u,{bm:D,m:j,parent:W}=f,B=Rn(u);if(ot(f,!1),D&&Fn(D),!B&&(F=R&&R.onVnodeBeforeMount)&&Ne(F,W,u),ot(f,!0),T&&gr){const re=()=>{f.subTree=br(f),gr(T,f.subTree,f,h,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&re()):re()}else{const re=f.subTree=br(f);w(null,re,p,g,f,h,_),u.el=re.el}if(j&&pe(j,h),!B&&(F=R&&R.onVnodeMounted)){const re=u;pe(()=>Ne(F,W,re),h)}(u.shapeFlag&256||W&&Rn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&pe(f.a,h),f.isMounted=!0,u=p=g=null}},k=f.effect=new oa(x,()=>pa(y),f.scope),y=f.update=()=>k.run();y.id=f.uid,ot(f,!0),y()},J=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Zl(f,u.props,g,p),nf(f,u.children,p),Rt(),Va(),Lt()},Y=(f,u,p,g,h,_,E,x,k=!1)=>{const y=f&&f.children,F=f?f.shapeFlag:0,T=u.children,{patchFlag:R,shapeFlag:D}=u;if(R>0){if(R&128){gn(y,T,p,g,h,_,E,x,k);return}else if(R&256){rt(y,T,p,g,h,_,E,x,k);return}}D&8?(F&16&&je(y,h,_),T!==y&&d(p,T)):F&16?D&16?gn(y,T,p,g,h,_,E,x,k):je(y,h,_,!0):(F&8&&d(p,""),D&16&&ye(T,p,g,h,_,E,x,k))},rt=(f,u,p,g,h,_,E,x,k)=>{f=f||kt,u=u||kt;const y=f.length,F=u.length,T=Math.min(y,F);let R;for(R=0;R<T;R++){const D=u[R]=k?Ge(u[R]):Re(u[R]);w(f[R],D,p,null,h,_,E,x,k)}y>F?je(f,h,_,!0,!1,T):ye(u,p,g,h,_,E,x,k,T)},gn=(f,u,p,g,h,_,E,x,k)=>{let y=0;const F=u.length;let T=f.length-1,R=F-1;for(;y<=T&&y<=R;){const D=f[y],j=u[y]=k?Ge(u[y]):Re(u[y]);if($t(D,j))w(D,j,p,null,h,_,E,x,k);else break;y++}for(;y<=T&&y<=R;){const D=f[T],j=u[R]=k?Ge(u[R]):Re(u[R]);if($t(D,j))w(D,j,p,null,h,_,E,x,k);else break;T--,R--}if(y>T){if(y<=R){const D=R+1,j=D<F?u[D].el:g;for(;y<=R;)w(null,u[y]=k?Ge(u[y]):Re(u[y]),p,j,h,_,E,x,k),y++}}else if(y>R)for(;y<=T;)Te(f[y],h,_,!0),y++;else{const D=y,j=y,W=new Map;for(y=j;y<=R;y++){const ge=u[y]=k?Ge(u[y]):Re(u[y]);ge.key!=null&&W.set(ge.key,y)}let B,re=0;const _e=R-j+1;let bt=!1,Ra=0;const jt=new Array(_e);for(y=0;y<_e;y++)jt[y]=0;for(y=D;y<=T;y++){const ge=f[y];if(re>=_e){Te(ge,h,_,!0);continue}let Me;if(ge.key!=null)Me=W.get(ge.key);else for(B=j;B<=R;B++)if(jt[B-j]===0&&$t(ge,u[B])){Me=B;break}Me===void 0?Te(ge,h,_,!0):(jt[Me-j]=y+1,Me>=Ra?Ra=Me:bt=!0,w(ge,u[Me],p,null,h,_,E,x,k),re++)}const La=bt?of(jt):kt;for(B=La.length-1,y=_e-1;y>=0;y--){const ge=j+y,Me=u[ge],Da=ge+1<F?u[ge+1].el:g;jt[y]===0?w(null,Me,p,Da,h,_,E,x,k):bt&&(B<0||y!==La[B]?at(Me,p,Da,2):B--)}}},at=(f,u,p,g,h=null)=>{const{el:_,type:E,transition:x,children:k,shapeFlag:y}=f;if(y&6){at(f.component.subTree,u,p,g);return}if(y&128){f.suspense.move(u,p,g);return}if(y&64){E.move(f,u,p,vt);return}if(E===ve){r(_,u,p);for(let T=0;T<k.length;T++)at(k[T],u,p,g);r(f.anchor,u,p);return}if(E===Dn){N(f,u,p);return}if(g!==2&&y&1&&x)if(g===0)x.beforeEnter(_),r(_,u,p),pe(()=>x.enter(_),h);else{const{leave:T,delayLeave:R,afterLeave:D}=x,j=()=>r(_,u,p),W=()=>{T(_,()=>{j(),D&&D()})};R?R(_,j,W):W()}else r(_,u,p)},Te=(f,u,p,g=!1,h=!1)=>{const{type:_,props:E,ref:x,children:k,dynamicChildren:y,shapeFlag:F,patchFlag:T,dirs:R}=f;if(x!=null&&jr(x,null,p,f,!0),F&256){u.ctx.deactivate(f);return}const D=F&1&&R,j=!Rn(f);let W;if(j&&(W=E&&E.onVnodeBeforeUnmount)&&Ne(W,u,f),F&6)vs(f.component,p,g);else{if(F&128){f.suspense.unmount(p,g);return}D&&it(f,null,u,"beforeUnmount"),F&64?f.type.remove(f,u,p,h,vt,g):y&&(_!==ve||T>0&&T&64)?je(y,u,p,!1,!0):(_===ve&&T&384||!h&&F&16)&&je(k,u,p),g&&Na(f)}(j&&(W=E&&E.onVnodeUnmounted)||D)&&pe(()=>{W&&Ne(W,u,f),D&&it(f,null,u,"unmounted")},p)},Na=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===ve){gs(p,g);return}if(u===Dn){P(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:E,delayLeave:x}=h,k=()=>E(p,_);x?x(f.el,_,k):k()}else _()},gs=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},vs=(f,u,p)=>{const{bum:g,scope:h,update:_,subTree:E,um:x}=f;g&&Fn(g),h.stop(),_&&(_.active=!1,Te(E,f,u,p)),x&&pe(x,u),pe(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},je=(f,u,p,g=!1,h=!1,_=0)=>{for(let E=_;E<f.length;E++)Te(f[E],u,p,g,h)},vn=f=>f.shapeFlag&6?vn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Fa=(f,u,p)=>{f==null?u._vnode&&Te(u._vnode,null,null,!0):w(u._vnode||null,f,u,null,null,null,p),Va(),go(),u._vnode=f},vt={p:w,um:Te,m:at,r:Na,mt:pr,mc:ye,pc:Y,pbc:ze,n:vn,o:e};let hr,gr;return t&&([hr,gr]=t(vt)),{render:Fa,hydrate:hr,createApp:Gl(Fa,hr)}}function ot({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Mo(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ge(a[i]),s.el=o.el),n||Mo(o,s)),s.type===sr&&(s.el=o.el)}}function of(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const sf=e=>e.__isTeleport,ve=Symbol.for("v-fgt"),sr=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Dn=Symbol.for("v-stc"),Vt=[];let Ce=null;function we(e=!1){Vt.push(Ce=e?null:[])}function lf(){Vt.pop(),Ce=Vt[Vt.length-1]||null}let nn=1;function ri(e){nn+=e}function No(e){return e.dynamicChildren=nn>0?Ce||kt:null,lf(),nn>0&&Ce&&Ce.push(e),e}function Ae(e,t,n,r,a,i){return No(se(e,t,n,r,a,i,!0))}function ff(e,t,n,r,a){return No(ne(e,t,n,r,a,!0))}function $r(e){return e?e.__v_isVNode===!0:!1}function $t(e,t){return e.type===t.type&&e.key===t.key}const lr="__vInternal",Fo=({key:e})=>e??null,zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ae(e)||le(e)||z(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function se(e,t=null,n=null,r=0,a=null,i=e===ve?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fo(t),ref:t&&zn(t),scopeId:yo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ee};return s?(va(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ae(n)?8:16),nn>0&&!o&&Ce&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ce.push(l),l}const ne=cf;function cf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ul)&&(e=tn),$r(e)){const s=Tt(e,t,!0);return n&&va(s,n),nn>0&&!i&&Ce&&(s.shapeFlag&6?Ce[Ce.indexOf(e)]=s:Ce.push(s)),s.patchFlag|=-2,s}if(wf(e)&&(e=e.__vccOpts),t){t=uf(t);let{class:s,style:l}=t;s&&!ae(s)&&(t.class=tr(s)),K(l)&&(lo(l)&&!L(l)&&(l=oe({},l)),t.style=aa(l))}const o=ae(e)?1:El(e)?128:sf(e)?64:K(e)?4:z(e)?2:0;return se(e,t,n,r,a,o,i,!0)}function uf(e){return e?lo(e)||lr in e?oe({},e):e:null}function Tt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?mf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Fo(s),ref:t&&t.ref?n&&a?L(a)?a.concat(zn(t)):[a,zn(t)]:zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function xt(e=" ",t=0){return ne(sr,null,e,t)}function df(e,t){const n=ne(Dn,null,e);return n.staticCount=t,n}function Re(e){return e==null||typeof e=="boolean"?ne(tn):L(e)?ne(ve,null,e.slice()):typeof e=="object"?Ge(e):ne(sr,null,String(e))}function Ge(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tt(e)}function va(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),va(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(lr in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[xt(t)]):n=8);e.children=t,e.shapeFlag|=n}function mf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=tr([t.class,r.class]));else if(a==="style")t.style=aa([t.style,r.style]);else if(Qn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ne(e,t,n,r=null){Ie(e,t,7,[n,r])}const pf=Eo();let hf=0;function gf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||pf,i={uid:hf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ns(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Po(r,a),emitsOptions:bo(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=xl.bind(null,i),e.ce&&e.ce(i),i}let ce=null,ba,yt,ai="__VUE_INSTANCE_SETTERS__";(yt=Cr()[ai])||(yt=Cr()[ai]=[]),yt.push(e=>ce=e),ba=e=>{yt.length>1?yt.forEach(t=>t(e)):yt[0](e)};const Mt=e=>{ba(e),e.scope.on()},pt=()=>{ce&&ce.scope.off(),ba(null)};function Ro(e){return e.vnode.shapeFlag&4}let rn=!1;function vf(e,t=!1){rn=t;const{props:n,children:r}=e.vnode,a=Ro(e);Ql(e,n,a,t),tf(e,r);const i=a?bf(e,t):void 0;return rn=!1,i}function bf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=fo(new Proxy(e.ctx,Bl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?xf(e):null;Mt(e),Rt();const i=Qe(r,e,0,[e.props,a]);if(Lt(),pt(),Yi(i)){if(i.then(pt,pt),t)return i.then(o=>{ii(e,o,t)}).catch(o=>{ar(o,e,0)});e.asyncDep=i}else ii(e,i,t)}else Lo(e,t)}function ii(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=mo(t)),Lo(e,n)}let oi;function Lo(e,t,n){const r=e.type;if(!e.render){if(!t&&oi&&!r.render){const a=r.template||ha(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=oe(oe({isCustomElement:i,delimiters:s},o),l);r.render=oi(a,c)}}e.render=r.render||Se}Mt(e),Rt(),Yl(e),Lt(),pt()}function yf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}}))}function xf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return yf(e)},slots:e.slots,emit:e.emit,expose:t}}function fr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(mo(fo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kt)return Kt[n](e)},has(t,n){return n in t||n in Kt}}))}function wf(e){return z(e)&&"__vccOpts"in e}const st=(e,t)=>ml(e,t,rn);function _f(e,t,n){const r=arguments.length;return r===2?K(t)&&!L(t)?$r(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$r(n)&&(n=[n]),ne(e,t,n))}const kf=Symbol.for("v-scx"),Af=()=>Ln(kf),Of="3.3.4",Ef="http://www.w3.org/2000/svg",ft=typeof document<"u"?document:null,si=ft&&ft.createElement("template"),Cf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ft.createElementNS(Ef,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{si.innerHTML=r?`<svg>${e}</svg>`:e;const s=si.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Pf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Sf(e,t,n){const r=e.style,a=ae(n);if(n&&!a){if(t&&!ae(t))for(const i in t)n[i]==null&&Hr(r,i,"");for(const i in n)Hr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const li=/\s*!important$/;function Hr(e,t,n){if(L(n))n.forEach(r=>Hr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=If(e,t);li.test(n)?e.setProperty(Ft(r),n.replace(li,""),"important"):e[r]=n}}const fi=["Webkit","Moz","ms"],xr={};function If(e,t){const n=xr[t];if(n)return n;let r=St(t);if(r!=="filter"&&r in e)return xr[t]=r;r=Vi(r);for(let a=0;a<fi.length;a++){const i=fi[a]+r;if(i in e)return xr[t]=i}return t}const ci="http://www.w3.org/1999/xlink";function Tf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ci,t.slice(6,t.length)):e.setAttributeNS(ci,t,n);else{const i=Ss(t);n==null||i&&!Xi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Mf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Xi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Do(e,t,n,r){e.addEventListener(t,n,r)}function Nf(e,t,n,r){e.removeEventListener(t,n,r)}function Ff(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Rf(t);if(r){const c=i[t]=zf(r,a);Do(e,s,c,l)}else o&&(Nf(e,s,o,l),i[t]=void 0)}}const ui=/(?:Once|Passive|Capture)$/;function Rf(e){let t;if(ui.test(e)){t={};let r;for(;r=e.match(ui);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ft(e.slice(2)),t]}let wr=0;const Lf=Promise.resolve(),Df=()=>wr||(Lf.then(()=>wr=0),wr=Date.now());function zf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ie(jf(r,n.value),t,5,[r])};return n.value=e,n.attached=Df(),n}function jf(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const di=/^on[a-z]/,$f=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Pf(e,r,a):t==="style"?Sf(e,n,r):Qn(t)?ta(t)||Ff(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hf(e,t,r,a))?Mf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Tf(e,t,r,a))};function Hf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&di.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||di.test(t)&&ae(n)?!1:t in e}const mi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return L(t)?n=>Fn(t,n):t},Uf={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=Zn(t);Do(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?qi(Vn(o)):Vn(o));e._assign(e.multiple?a?new Set(i):i:i[0])}),e._assign=mi(r)},mounted(e,{value:t}){pi(e,t)},beforeUpdate(e,t,n){e._assign=mi(n)},updated(e,{value:t}){pi(e,t)}};function pi(e,t){const n=e.multiple;if(!(n&&!L(t)&&!Zn(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=Vn(i);if(n)L(t)?i.selected=Ts(t,o)>-1:i.selected=t.has(o);else if(nr(Vn(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Vn(e){return"_value"in e?e._value:e.value}const hi={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Ht(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Ht(e,!0),r.enter(e)):r.leave(e,()=>{Ht(e,!1)}):Ht(e,t))},beforeUnmount(e,{value:t}){Ht(e,t)}};function Ht(e,t){e.style.display=t?e._vod:"none"}const Bf=oe({patchProp:$f},Cf);let gi;function Yf(){return gi||(gi=rf(Bf))}const Wf=(...e)=>{const t=Yf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Kf(r);if(!a)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Kf(e){return ae(e)?document.querySelector(e):e}const Vf=se("label",{for:"oscilators"},"Oscilators",-1),qf=se("br",null,null,-1),Xf=se("option",{disabled:"",value:""},"Select one",-1),Gf=["value"],Jf={__name:"Oscilators",props:{createMatrix:Function,cols:Number,rows:Number},emits:["structure"],setup(e,{emit:t}){const n=e,r={name:"Blinker"},a=(H,te)=>{te.forEach(G=>{H[G[0]][G[1]]=1})},i=n.createMatrix(n.cols,n.rows);i[24][49]=1,i[25][49]=1,i[23][49]=1,r.matrix=i;const o=n.createMatrix(n.cols,n.rows);o[24][49]=1,o[24][50]=1,o[24][51]=1,o[25][49]=1,o[25][48]=1,o[25][50]=1;const s={name:"Toad",matrix:o},l=n.createMatrix(n.cols,n.rows);l[24][49]=1,l[24][48]=1,l[23][49]=1,l[23][48]=1,l[25][50]=1,l[26][50]=1,l[25][51]=1,l[26][51]=1;const c={name:"Beacon",matrix:l},d=n.createMatrix(n.cols,n.rows);a(d,[[18,44],[18,45],[18,46],[18,50],[18,51],[18,52],[20,42],[20,47],[20,49],[20,54],[21,42],[21,47],[21,49],[21,54],[22,42],[22,47],[22,49],[22,54],[23,44],[23,45],[23,46],[23,50],[23,51],[23,52],[25,44],[25,45],[25,46],[25,50],[25,51],[25,52],[26,42],[26,47],[26,49],[26,54],[27,42],[27,47],[27,49],[27,54],[28,42],[28,47],[28,49],[28,54],[30,44],[30,45],[30,46],[30,50],[30,51],[30,52]]);const v={name:"Pulsar",matrix:d},A=n.createMatrix(n.cols,n.rows);a(A,[[18,46],[18,47],[18,48],[19,47],[20,47],[21,46],[21,47],[21,48],[23,46],[23,47],[23,48],[24,46],[24,47],[24,48],[26,46],[26,47],[26,48],[27,47],[28,47],[29,46],[29,47],[29,48]]);const w={name:"Penta Decathlon",matrix:A},I=n.createMatrix(n.cols,n.rows);a(I,[[21,38],[21,39],[21,41],[21,42],[21,43],[21,44],[21,45],[21,46],[22,38],[22,39],[22,41],[22,42],[22,43],[22,44],[22,45],[22,46],[23,38],[23,39],[24,38],[24,39],[24,45],[24,46],[25,38],[25,39],[25,45],[25,46],[26,38],[26,39],[26,45],[26,46],[27,45],[27,46],[28,38],[28,39],[28,40],[28,41],[28,42],[28,43],[28,45],[28,46],[29,38],[29,39],[29,40],[29,41],[29,42],[29,43],[29,45],[29,46]]);const N=[r,s,c,v,w,{name:"Kok's Galaxy",matrix:I}],P=Bn(0);return Ct(P,()=>{t("structure",P.value)}),(H,te)=>(we(),Ae("div",null,[Vf,qf,Nr(se("select",{"onUpdate:modelValue":te[0]||(te[0]=G=>P.value=G),id:"oscilators"},[Xf,(we(),Ae(ve,null,Fr(N,(G,ye)=>se("option",{value:G},Ms(G.name),9,Gf)),64))],512),[[Uf,P.value]])]))}};function vi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vi(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qn(e){"@babel/helpers - typeof";return qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qn(e)}function Qf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Zf(e,t,n){return t&&bi(e.prototype,t),n&&bi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ya(e,t){return tc(e)||rc(e,t)||zo(e,t)||ic()}function un(e){return ec(e)||nc(e)||zo(e)||ac()}function ec(e){if(Array.isArray(e))return Ur(e)}function tc(e){if(Array.isArray(e))return e}function nc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function zo(e,t){if(e){if(typeof e=="string")return Ur(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ur(e,t)}}function Ur(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ac(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ic(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yi=function(){},xa={},jo={},$o=null,Ho={mark:yi,measure:yi};try{typeof window<"u"&&(xa=window),typeof document<"u"&&(jo=document),typeof MutationObserver<"u"&&($o=MutationObserver),typeof performance<"u"&&(Ho=performance)}catch{}var oc=xa.navigator||{},xi=oc.userAgent,wi=xi===void 0?"":xi,et=xa,X=jo,_i=$o,An=Ho;et.document;var Ve=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Uo=~wi.indexOf("MSIE")||~wi.indexOf("Trident/"),On,En,Cn,Pn,Sn,Be="___FONT_AWESOME___",Br=16,Bo="fa",Yo="svg-inline--fa",ht="data-fa-i2svg",Yr="data-fa-pseudo-element",sc="data-fa-pseudo-element-pending",wa="data-prefix",_a="data-icon",ki="fontawesome-i2svg",lc="async",fc=["HTML","HEAD","STYLE","SCRIPT"],Wo=function(){try{return!0}catch{return!1}}(),q="classic",ee="sharp",ka=[q,ee];function dn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var an=dn((On={},ie(On,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ie(On,ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),On)),on=dn((En={},ie(En,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(En,ee,{solid:"fass",regular:"fasr",light:"fasl"}),En)),sn=dn((Cn={},ie(Cn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(Cn,ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Cn)),cc=dn((Pn={},ie(Pn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(Pn,ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Pn)),uc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ko="fa-layers-text",dc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,mc=dn((Sn={},ie(Sn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(Sn,ee,{900:"fass",400:"fasr",300:"fasl"}),Sn)),Vo=[1,2,3,4,5,6,7,8,9,10],pc=Vo.concat([11,12,13,14,15,16,17,18,19,20]),hc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ln=new Set;Object.keys(on[q]).map(ln.add.bind(ln));Object.keys(on[ee]).map(ln.add.bind(ln));var gc=[].concat(ka,un(ln),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY]).concat(Vo.map(function(e){return"".concat(e,"x")})).concat(pc.map(function(e){return"w-".concat(e)})),qt=et.FontAwesomeConfig||{};function vc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function bc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var yc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];yc.forEach(function(e){var t=ya(e,2),n=t[0],r=t[1],a=bc(vc(n));a!=null&&(qt[r]=a)})}var qo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Bo,replacementClass:Yo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qt.familyPrefix&&(qt.cssPrefix=qt.familyPrefix);var Nt=C(C({},qo),qt);Nt.autoReplaceSvg||(Nt.observeMutations=!1);var M={};Object.keys(qo).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Nt[e]=n,Xt.forEach(function(r){return r(M)})},get:function(){return Nt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Nt.cssPrefix=t,Xt.forEach(function(n){return n(M)})},get:function(){return Nt.cssPrefix}});et.FontAwesomeConfig=M;var Xt=[];function xc(e){return Xt.push(e),function(){Xt.splice(Xt.indexOf(e),1)}}var Xe=Br,De={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wc(e){if(!(!e||!Ve)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var _c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fn(){for(var e=12,t="";e-- >0;)t+=_c[Math.random()*62|0];return t}function Dt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Aa(e){return e.classList?Dt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Xo(e[n]),'" ')},"").trim()}function cr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Oa(e){return e.size!==De.size||e.x!==De.x||e.y!==De.y||e.rotate!==De.rotate||e.flipX||e.flipY}function Ac(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Oc(e){var t=e.transform,n=e.width,r=n===void 0?Br:n,a=e.height,i=a===void 0?Br:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Uo?l+="translate(".concat(t.x/Xe-r/2,"em, ").concat(t.y/Xe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Xe,"em), calc(-50% + ").concat(t.y/Xe,"em)) "):l+="translate(".concat(t.x/Xe,"em, ").concat(t.y/Xe,"em) "),l+="scale(".concat(t.size/Xe*(t.flipX?-1:1),", ").concat(t.size/Xe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ec=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Go(){var e=Bo,t=Yo,n=M.cssPrefix,r=M.replacementClass,a=Ec;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ai=!1;function _r(){M.autoAddCss&&!Ai&&(wc(Go()),Ai=!0)}var Cc={mixout:function(){return{dom:{css:Go,insertCss:_r}}},hooks:function(){return{beforeDOMElementCreation:function(){_r()},beforeI2svg:function(){_r()}}}},Ye=et||{};Ye[Be]||(Ye[Be]={});Ye[Be].styles||(Ye[Be].styles={});Ye[Be].hooks||(Ye[Be].hooks={});Ye[Be].shims||(Ye[Be].shims=[]);var Pe=Ye[Be],Jo=[],Pc=function e(){X.removeEventListener("DOMContentLoaded",e),Xn=1,Jo.map(function(t){return t()})},Xn=!1;Ve&&(Xn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Xn||X.addEventListener("DOMContentLoaded",Pc));function Sc(e){Ve&&(Xn?setTimeout(e,0):Jo.push(e))}function mn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Xo(e):"<".concat(t," ").concat(kc(r),">").concat(i.map(mn).join(""),"</").concat(t,">")}function Oi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ic=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},kr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ic(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Tc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Wr(e){var t=Tc(e);return t.length===1?t[0].toString(16):null}function Mc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ei(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Kr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ei(t);typeof Pe.hooks.addPack=="function"&&!a?Pe.hooks.addPack(e,Ei(t)):Pe.styles[e]=C(C({},Pe.styles[e]||{}),i),e==="fas"&&Kr("fa",t)}var In,Tn,Mn,wt=Pe.styles,Nc=Pe.shims,Fc=(In={},ie(In,q,Object.values(sn[q])),ie(In,ee,Object.values(sn[ee])),In),Ea=null,Qo={},Zo={},es={},ts={},ns={},Rc=(Tn={},ie(Tn,q,Object.keys(an[q])),ie(Tn,ee,Object.keys(an[ee])),Tn);function Lc(e){return~gc.indexOf(e)}function Dc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Lc(a)?a:null}var rs=function(){var t=function(i){return kr(wt,function(o,s,l){return o[l]=kr(s,i,{}),o},{})};Qo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Zo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ns=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in wt||M.autoFetchSvg,r=kr(Nc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});es=r.names,ts=r.unicodes,Ea=ur(M.styleDefault,{family:M.familyDefault})};xc(function(e){Ea=ur(e.styleDefault,{family:M.familyDefault})});rs();function Ca(e,t){return(Qo[e]||{})[t]}function zc(e,t){return(Zo[e]||{})[t]}function dt(e,t){return(ns[e]||{})[t]}function as(e){return es[e]||{prefix:null,iconName:null}}function jc(e){var t=ts[e],n=Ca("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tt(){return Ea}var Pa=function(){return{prefix:null,iconName:null,rest:[]}};function ur(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=an[r][e],i=on[r][e]||on[r][a],o=e in Pe.styles?e:null;return i||o||null}var Ci=(Mn={},ie(Mn,q,Object.keys(sn[q])),ie(Mn,ee,Object.keys(sn[ee])),Mn);function dr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ie(t,q,"".concat(M.cssPrefix,"-").concat(q)),ie(t,ee,"".concat(M.cssPrefix,"-").concat(ee)),t),o=null,s=q;(e.includes(i[q])||e.some(function(c){return Ci[q].includes(c)}))&&(s=q),(e.includes(i[ee])||e.some(function(c){return Ci[ee].includes(c)}))&&(s=ee);var l=e.reduce(function(c,d){var m=Dc(M.cssPrefix,d);if(wt[d]?(d=Fc[s].includes(d)?cc[s][d]:d,o=d,c.prefix=d):Rc[s].indexOf(d)>-1?(o=d,c.prefix=ur(d,{family:s})):m?c.iconName=m:d!==M.replacementClass&&d!==i[q]&&d!==i[ee]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?as(c.iconName):{},A=dt(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||A||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!wt.far&&wt.fas&&!M.autoFetchSvg&&(c.prefix="fas")}return c},Pa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ee&&(wt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=dt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=tt()||"fas"),l}var $c=function(){function e(){Qf(this,e),this.definitions={}}return Zf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Kr(s,o[s]);var l=sn[q][s];l&&Kr(l,o[s]),rs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Pi=[],_t={},Pt={},Hc=Object.keys(Pt);function Uc(e,t){var n=t.mixoutsTo;return Pi=e,_t={},Object.keys(Pt).forEach(function(r){Hc.indexOf(r)===-1&&delete Pt[r]}),Pi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),qn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){_t[o]||(_t[o]=[]),_t[o].push(i[o])})}r.provides&&r.provides(Pt)}),n}function Vr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=_t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function gt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=_t[e]||[];a.forEach(function(i){i.apply(null,n)})}function We(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Pt[e]?Pt[e].apply(null,t):void 0}function qr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||tt();if(t)return t=dt(n,t)||t,Oi(is.definitions,n,t)||Oi(Pe.styles,n,t)}var is=new $c,Bc=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,gt("noAuto")},Yc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ve?(gt("beforeI2svg",t),We("pseudoElements2svg",t),We("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Sc(function(){Kc({autoReplaceSvgRoot:n}),gt("watch",t)})}},Wc={icon:function(t){if(t===null)return null;if(qn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ur(t[0]);return{prefix:r,iconName:dt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(uc))){var a=dr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||tt(),iconName:dt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=tt();return{prefix:i,iconName:dt(i,t)||t}}}},be={noAuto:Bc,config:M,dom:Yc,parse:Wc,library:is,findIconDefinition:qr,toHtml:mn},Kc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Pe.styles).length>0||M.autoFetchSvg)&&Ve&&M.autoReplaceSvg&&be.dom.i2svg({node:r})};function mr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return mn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ve){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Vc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Oa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=cr(C(C({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function qc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function Sa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,A=v===void 0?!1:v,S=r.found?r:n,w=S.width,I=S.height,b=a==="fak",O=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(xe){return m.classes.indexOf(xe)===-1}).filter(function(xe){return xe!==""||!!xe}).concat(m.classes).join(" "),N={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(I)})},P=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(w/I*16*.0625,"em")}:{};A&&(N.attributes[ht]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||fn())},children:[l]}),delete N.attributes.title);var H=C(C({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:C(C({},P),m.styles)}),te=r.found&&n.found?We("generateAbstractMask",H)||{children:[],attributes:{}}:We("generateAbstractIcon",H)||{children:[],attributes:{}},G=te.children,ye=te.attributes;return H.children=G,H.attributes=ye,s?qc(H):Vc(H)}function Si(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ht]="");var d=C({},o.styles);Oa(a)&&(d.transform=Oc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=cr(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Xc(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=cr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ar=Pe.styles;function Xr(e){var t=e[0],n=e[1],r=e.slice(4),a=ya(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(ut.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(ut.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(ut.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Gc={found:!1,width:512,height:512};function Jc(e,t){!Wo&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Gr(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=tt()),new Promise(function(r,a){if(We("missingIconAbstract"),n==="fa"){var i=as(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ar[t]&&Ar[t][e]){var o=Ar[t][e];return r(Xr(o))}Jc(e,t),r(C(C({},Gc),{},{icon:M.showMissingIcons&&e?We("missingIconAbstract")||{}:{}}))})}var Ii=function(){},Jr=M.measurePerformance&&An&&An.mark&&An.measure?An:{mark:Ii,measure:Ii},Yt='FA "6.4.0"',Qc=function(t){return Jr.mark("".concat(Yt," ").concat(t," begins")),function(){return os(t)}},os=function(t){Jr.mark("".concat(Yt," ").concat(t," ends")),Jr.measure("".concat(Yt," ").concat(t),"".concat(Yt," ").concat(t," begins"),"".concat(Yt," ").concat(t," ends"))},Ia={begin:Qc,end:os},jn=function(){};function Ti(e){var t=e.getAttribute?e.getAttribute(ht):null;return typeof t=="string"}function Zc(e){var t=e.getAttribute?e.getAttribute(wa):null,n=e.getAttribute?e.getAttribute(_a):null;return t&&n}function eu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function tu(){if(M.autoReplaceSvg===!0)return $n.replace;var e=$n[M.autoReplaceSvg];return e||$n.replace}function nu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function ru(e){return X.createElement(e)}function ss(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?nu:ru:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ss(o,{ceFn:r}))}),a}function au(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var $n={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ss(a),n)}),n.getAttribute(ht)===null&&M.keepOriginalSource){var r=X.createComment(au(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Aa(n).indexOf(M.replacementClass))return $n.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return mn(s)}).join(`
`);n.setAttribute(ht,""),n.innerHTML=o}};function Mi(e){e()}function ls(e,t){var n=typeof t=="function"?t:jn;if(e.length===0)n();else{var r=Mi;M.mutateApproach===lc&&(r=et.requestAnimationFrame||Mi),r(function(){var a=tu(),i=Ia.begin("mutate");e.map(a),i(),n()})}}var Ta=!1;function fs(){Ta=!0}function Qr(){Ta=!1}var Gn=null;function Ni(e){if(_i&&M.observeMutations){var t=e.treeCallback,n=t===void 0?jn:t,r=e.nodeCallback,a=r===void 0?jn:r,i=e.pseudoElementsCallback,o=i===void 0?jn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Gn=new _i(function(c){if(!Ta){var d=tt();Dt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ti(m.addedNodes[0])&&(M.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&M.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ti(m.target)&&~hc.indexOf(m.attributeName))if(m.attributeName==="class"&&Zc(m.target)){var v=dr(Aa(m.target)),A=v.prefix,S=v.iconName;m.target.setAttribute(wa,A||d),S&&m.target.setAttribute(_a,S)}else eu(m.target)&&a(m.target)})}}),Ve&&Gn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function iu(){Gn&&Gn.disconnect()}function ou(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function su(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=dr(Aa(e));return a.prefix||(a.prefix=tt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=zc(a.prefix,e.innerText)||Ca(a.prefix,Wr(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function lu(e){var t=Dt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||fn()):(t["aria-hidden"]="true",t.focusable="false")),t}function fu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:De,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=su(e),r=n.iconName,a=n.prefix,i=n.rest,o=lu(e),s=Vr("parseNodeAttributes",{},e),l=t.styleParser?ou(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:De,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var cu=Pe.styles;function cs(e){var t=M.autoReplaceSvg==="nest"?Fi(e,{styleParser:!1}):Fi(e);return~t.extra.classes.indexOf(Ko)?We("generateLayersText",e,t):We("generateSvgReplacementMutation",e,t)}var nt=new Set;ka.map(function(e){nt.add("fa-".concat(e))});Object.keys(an[q]).map(nt.add.bind(nt));Object.keys(an[ee]).map(nt.add.bind(nt));nt=un(nt);function Ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ve)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(ki,"-").concat(m))},a=function(m){return n.remove("".concat(ki,"-").concat(m))},i=M.autoFetchSvg?nt:ka.map(function(d){return"fa-".concat(d)}).concat(Object.keys(cu));i.includes("fa")||i.push("fa");var o=[".".concat(Ko,":not([").concat(ht,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ht,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Dt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ia.begin("onTree"),c=s.reduce(function(d,m){try{var v=cs(m);v&&d.push(v)}catch(A){Wo||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){ls(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function uu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cs(e).then(function(n){n&&ls([n],t)})}function du(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:qr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:qr(a||{})),e(r,C(C({},n),{},{mask:a}))}}var mu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?De:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,A=n.titleId,S=A===void 0?null:A,w=n.classes,I=w===void 0?[]:w,b=n.attributes,O=b===void 0?{}:b,N=n.styles,P=N===void 0?{}:N;if(t){var H=t.prefix,te=t.iconName,G=t.icon;return mr(C({type:"icon"},t),function(){return gt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(v?O["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(S||fn()):(O["aria-hidden"]="true",O.focusable="false")),Sa({icons:{main:Xr(G),mask:l?Xr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:te,transform:C(C({},De),a),symbol:o,title:v,maskId:d,titleId:S,extra:{attributes:O,styles:P,classes:I}})})}},pu={mixout:function(){return{icon:du(mu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ri,n.nodeCallback=uu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Ri(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(A,S){Promise.all([Gr(a,s),d.iconName?Gr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var I=ya(w,2),b=I[0],O=I[1];A([n,Sa({icons:{main:b,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=cr(s);l.length>0&&(a.style=l);var c;return Oa(o)&&(c=We("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},hu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return mr({type:"layer"},function(){gt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(un(i)).join(" ")},children:o}]})}}}},gu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return mr({type:"counter",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),Xc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(un(s))}})})}}}},vu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?De:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,A=v===void 0?{}:v;return mr({type:"text",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),Si({content:n,transform:C(C({},De),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(M.cssPrefix,"-layers-text")].concat(un(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Uo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Si({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},bu=new RegExp('"',"ug"),Li=[1105920,1112319];function yu(e){var t=e.replace(bu,""),n=Mc(t,0),r=n>=Li[0]&&n<=Li[1],a=t.length===2?t[0]===t[1]:!1;return{value:Wr(a?t[0]:t),isSecondary:r||a}}function Di(e,t){var n="".concat(sc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Dt(e.children),o=i.filter(function(G){return G.getAttribute(Yr)===t})[0],s=et.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(dc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?ee:q,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?on[v][l[2].toLowerCase()]:mc[v][c],S=yu(m),w=S.value,I=S.isSecondary,b=l[0].startsWith("FontAwesome"),O=Ca(A,w),N=O;if(b){var P=jc(w);P.iconName&&P.prefix&&(O=P.iconName,A=P.prefix)}if(O&&!I&&(!o||o.getAttribute(wa)!==A||o.getAttribute(_a)!==N)){e.setAttribute(n,N),o&&e.removeChild(o);var H=fu(),te=H.extra;te.attributes[Yr]=t,Gr(O,A).then(function(G){var ye=Sa(C(C({},H),{},{icons:{main:G,mask:Pa()},prefix:A,iconName:N,extra:te,watchable:!0})),xe=X.createElement("svg");t==="::before"?e.insertBefore(xe,e.firstChild):e.appendChild(xe),xe.outerHTML=ye.map(function(ze){return mn(ze)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function xu(e){return Promise.all([Di(e,"::before"),Di(e,"::after")])}function wu(e){return e.parentNode!==document.head&&!~fc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Yr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function zi(e){if(Ve)return new Promise(function(t,n){var r=Dt(e.querySelectorAll("*")).filter(wu).map(xu),a=Ia.begin("searchPseudoElements");fs(),Promise.all(r).then(function(){a(),Qr(),t()}).catch(function(){a(),Qr(),n()})})}var _u={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;M.searchPseudoElements&&zi(a)}}},ji=!1,ku={mixout:function(){return{dom:{unwatch:function(){fs(),ji=!0}}}},hooks:function(){return{bootstrap:function(){Ni(Vr("mutationObserverCallbacks",{}))},noAuto:function(){iu()},watch:function(n){var r=n.observeMutationsRoot;ji?Qr():Ni(Vr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$i=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Au={mixout:function(){return{parse:{transform:function(n){return $i(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=$i(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:v};return{tag:"g",attributes:C({},A.outer),children:[{tag:"g",attributes:C({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),A.path)}]}]}}}},Or={x:0,y:0,width:"100%",height:"100%"};function Hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ou(e){return e.tag==="g"?e.children:[e]}var Eu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?dr(a.split(" ").map(function(o){return o.trim()})):Pa();return i.prefix||(i.prefix=tt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,A=Ac({transform:l,containerWidth:m,iconWidth:c}),S={tag:"rect",attributes:C(C({},Or),{},{fill:"white"})},w=d.children?{children:d.children.map(Hi)}:{},I={tag:"g",attributes:C({},A.inner),children:[Hi(C({tag:d.tag,attributes:C(C({},d.attributes),A.path)},w))]},b={tag:"g",attributes:C({},A.outer),children:[I]},O="mask-".concat(s||fn()),N="clip-".concat(s||fn()),P={tag:"mask",attributes:C(C({},Or),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,b]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Ou(v)},P]};return r.push(H,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(O,")")},Or)}),{children:r,attributes:a}}}},Cu={provides:function(t){var n=!1;et.matchMedia&&(n=et.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Pu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Su=[Cc,pu,hu,gu,vu,_u,ku,Au,Eu,Cu,Pu];Uc(Su,{mixoutsTo:be});be.noAuto;be.config;var us=be.library;be.dom;var Zr=be.parse;be.findIconDefinition;be.toHtml;var Iu=be.icon;be.layer;be.text;be.counter;function Ui(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ui(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ui(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jn(e){"@babel/helpers - typeof";return Jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jn(e)}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Mu(e,t){if(e==null)return{};var n=Tu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ds={exports:{}};(function(e){(function(t){var n=function(b,O,N){if(!c(O)||m(O)||v(O)||A(O)||l(O))return O;var P,H=0,te=0;if(d(O))for(P=[],te=O.length;H<te;H++)P.push(n(b,O[H],N));else{P={};for(var G in O)Object.prototype.hasOwnProperty.call(O,G)&&(P[b(G,N)]=n(b,O[G],N))}return P},r=function(b,O){O=O||{};var N=O.separator||"_",P=O.split||/(?=[A-Z])/;return b.split(P).join(N)},a=function(b){return S(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(O,N){return N?N.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var O=a(b);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(b,O){return r(b,O).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},d=function(b){return s.call(b)=="[object Array]"},m=function(b){return s.call(b)=="[object Date]"},v=function(b){return s.call(b)=="[object RegExp]"},A=function(b){return s.call(b)=="[object Boolean]"},S=function(b){return b=b-0,b===b},w=function(b,O){var N=O&&"process"in O?O.process:O;return typeof N!="function"?b:function(P,H){return N(P,b,H)}},I={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,O){return n(w(a,O),b)},decamelizeKeys:function(b,O){return n(w(o,O),b,O)},pascalizeKeys:function(b,O){return n(w(i,O),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=I:t.humps=I})(Nu)})(ds);var Fu=ds.exports,Ru=["class","style"];function Lu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Fu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Du(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ms(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ms(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Du(d);break;case"style":l.style=Lu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Mu(n,Ru);return _f(e.tag,He(He(He({},t),{},{class:a.class,style:He(He({},a.style),o)},a.attrs),s),r)}var ps=!1;try{ps=!0}catch{}function zu(){if(!ps&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Er(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?me({},e,t):{}}function ju(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},me(t,"fa-".concat(e.size),e.size!==null),me(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),me(t,"fa-pull-".concat(e.pull),e.pull!==null),me(t,"fa-swap-opacity",e.swapOpacity),me(t,"fa-bounce",e.bounce),me(t,"fa-shake",e.shake),me(t,"fa-beat",e.beat),me(t,"fa-fade",e.fade),me(t,"fa-beat-fade",e.beatFade),me(t,"fa-flash",e.flash),me(t,"fa-spin-pulse",e.spinPulse),me(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Bi(e){if(e&&Jn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Zr.icon)return Zr.icon(e);if(e===null)return null;if(Jn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Wt=Sl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=st(function(){return Bi(t.icon)}),i=st(function(){return Er("classes",ju(t))}),o=st(function(){return Er("transform",typeof t.transform=="string"?Zr.transform(t.transform):t.transform)}),s=st(function(){return Er("mask",Bi(t.mask))}),l=st(function(){return Iu(a.value,He(He(He(He({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ct(l,function(d){if(!d)return zu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=st(function(){return l.value?ms(l.value.abstract[0],{},r):null});return function(){return c.value}}}),$u={prefix:"fas",iconName:"shuffle",icon:[512,512,[128256,"random"],"f074","M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"]},Hu={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},Uu={prefix:"fas",iconName:"question",icon:[320,512,[10067,10068,61736],"3f","M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},Bu={prefix:"fas",iconName:"eraser",icon:[576,512,[],"f12d","M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"]},Yu={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Wu={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ku=Wu;const hs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Vu={},qu={class:"relative"},Xu=df('<div class="absolute bg-neutral-200 text-neutral-800 p-10 leading-8 w-1/3 z-10 text-lg"><h2 class="text-sm text-red-400 pb-4">Click anywhere else to close the rules</h2><h1 class="text-xl font-semibold">The Game:</h1><p><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway&#39;s Game of Life</a> is a <a href="https://en.wikipedia.org/wiki/Cellular_automaton">cellullar automaton</a> in which the cells, represented by the squares follow a specific set of rules:</p><ul class="list-decimal pl-8"><li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li><li>Any live cell with two or three live neighbours lives on to the next generation.</li><li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li><li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li></ul></div><div class="absolute bg-neutral-200 text-neutral-800 right-0 p-10 leading-8 w-1/3 z-10 text-lg"><h2 class="text-sm text-red-400 pb-4">Click anywhere else to close the rules</h2><h1 class="text-xl font-semibold">Instructions:</h1><ul class="list-decimal pl-8"><li>Each square represents a cell</li><li>White represents living cells</li><li>Black represents dead cells</li><li>Click or Click and drag the mouse to toggle the state of cells</li></ul><h1 class="text-xl font-semibold">Controllers:</h1><ul class="list-decimal pl-8"><li><strong>All controllers</strong> are located at the bottom of the board</li><li><strong>Start</strong> will start the simulation</li><li><strong>Randomize</strong> generates random living or dead cells around the board</li><li><strong>R-Pentomino</strong> generates a r-pentomino starter at the center of the board</li><li><strong>Oscilators</strong> is a select containing structures known as oscilators, upon selecting one it&#39;s structure will be rendered on the board</li><li><strong>Clear Grid</strong> Erases all living cells from the board</li></ul></div>',2),Gu=[Xu];function Ju(e,t,n,r,a,i){return we(),Ae("div",qu,Gu)}const Qu=hs(Vu,[["render",Ju]]),Zu={class:"flex justify-between items-center py-5 bg-neutral-800 px-2"},ed=se("h1",{class:"text-2xl"},"Conway's Game of Life",-1),td={__name:"Navbar",setup(e){us.add(Uu,Ku);const t=Bn(!1);return(n,r)=>(we(),Ae(ve,null,[se("nav",Zu,[ed,se("button",{onClick:r[0]||(r[0]=a=>t.value=!t.value)},[se("h2",null,[xt("Rules "),ne(Fe(Wt),{icon:["fas","question"]})])])]),Nr(ne(Qu,null,null,512),[[hi,t.value]]),Nr(se("div",{onClick:r[1]||(r[1]=a=>t.value=!1),class:"fixed w-full h-full opacity-80 bg-neutral-700 left-0 top-0"},null,512),[[hi,t.value]])],64))}},nd={class:"w-fit m-auto"},rd={class:"bg-neutral-900 rounded"},ad=["onClick","onMouseover"],id={id:"controls",class:"grid grid-flow-col gap-10 mt-4 grid-cols-6"},Q=50,Z=100,od={__name:"Game",setup(e){us.add(Yu,Hu,$u,Bu);const t=()=>{[[22,46],[22,47],[23,45],[23,46],[24,46]].forEach(w=>{l.value[w[0]][w[1]]=1})},n=(S,w)=>new Array(S).fill().map(()=>Array(w).fill(0)),r=(S,w,I)=>{(S.buttons==1||S.buttons==3)&&(l.value[w][I]^=1)},a=()=>{l.value=n(Q,Z),c.value=!1},i=(S,w,I)=>{let b=0;return b+=S[(w+Q)%Q][(I+1+Z)%Z],b+=S[(w+Q)%Q][(I-1+Z)%Z],b+=S[(w+1+Q)%Q][(I+1+Z)%Z],b+=S[(w+1+Q)%Q][(I-1+Z)%Z],b+=S[(w+1+Q)%Q][(I+Z)%Z],b+=S[(w-1+Q)%Q][(I+1+Z)%Z],b+=S[(w-1+Q)%Q][(I-1+Z)%Z],b+=S[(w-1+Q)%Q][(I+Z)%Z],b},o=()=>{let S=n(Q,Z);S=S.map(w=>(w=w.map(()=>Math.round(Math.random())),w)),l.value=S};let s=n(Q,Z),l=Bn(s);t();let c=Bn(!1);function d(S){return new Promise(w=>setTimeout(w,S))}const m=()=>{c.value=!c.value};Ct(c,async()=>{for(;c.value!=!1;)await d(2),l.value=A(l.value)});const A=S=>{let w=n(Q,Z);for(let I=0;I<Q;I++)for(let b=0;b<Z;b++){const O=i(S,I,b),N=S[I][b];N==0&&O==3?w[I][b]=1:N==1&&(O<2||O>3)?w[I][b]=0:w[I][b]=N}return w};return(S,w)=>(we(),Ae("section",nd,[ne(td),se("div",rd,[(we(!0),Ae(ve,null,Fr(Fe(l),(I,b)=>(we(),Ae("div",{key:b,class:"flex"},[(we(!0),Ae(ve,null,Fr(I,(O,N)=>(we(),Ae("div",{onClick:P=>Fe(l)[b][N]^=1,onMouseover:P=>r(P,b,N),key:N,class:tr(["cell border border-neutral-800",{"bg-neutral-200":Fe(l)[b][N]}])},null,42,ad))),128))]))),128))]),se("div",id,[Fe(c)?(we(),Ae("button",{key:1,onClick:m},[xt("Pause "),ne(Fe(Wt),{icon:["fas","pause"]})])):(we(),Ae("button",{key:0,onClick:m},[xt("Start "),ne(Fe(Wt),{icon:["fas","play"]})])),se("button",{onClick:o},[xt("Randomize "),ne(Fe(Wt),{icon:["fas","shuffle"]})]),se("button",{onClick:t},"R-Pentomino"),ne(Jf,{createMatrix:n,cols:Q,rows:Z,onStructure:w[0]||(w[0]=I=>le(l)?l.value=I.matrix:l=I.matrix)}),se("button",{onClick:a},[xt("Clear Grid "),ne(Fe(Wt),{icon:["fas","eraser"]})])])]))}};const sd=hs(od,[["__scopeId","data-v-eff895aa"]]),ld={__name:"App",setup(e){return(t,n)=>(we(),ff(sd))}};Wf(ld).mount("#app");
