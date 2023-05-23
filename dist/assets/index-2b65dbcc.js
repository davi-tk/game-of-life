(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Qr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const V={},wt=[],Ce=()=>{},ps=()=>!1,hs=/^on[^a-z]/,Xn=e=>hs.test(e),Zr=e=>e.startsWith("onUpdate:"),oe=Object.assign,ea=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gs=Object.prototype.hasOwnProperty,$=(e,t)=>gs.call(e,t),R=Array.isArray,kt=e=>ln(e)==="[object Map]",Gn=e=>ln(e)==="[object Set]",La=e=>ln(e)==="[object Date]",j=e=>typeof e=="function",re=e=>typeof e=="string",qt=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",Hi=e=>K(e)&&j(e.then)&&j(e.catch),Ui=Object.prototype.toString,ln=e=>Ui.call(e),vs=e=>ln(e).slice(8,-1),Bi=e=>ln(e)==="[object Object]",ta=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mn=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bs=/-(\w)/g,Ct=Jn(e=>e.replace(bs,(t,n)=>n?n.toUpperCase():"")),ys=/\B([A-Z])/g,Nt=Jn(e=>e.replace(ys,"-$1").toLowerCase()),Yi=Jn(e=>e.charAt(0).toUpperCase()+e.slice(1)),pr=Jn(e=>e?`on${Yi(e)}`:""),Xt=(e,t)=>!Object.is(e,t),Nn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},zn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Wi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Da;const Or=()=>Da||(Da=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function na(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?ks(r):na(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(re(e))return e;if(K(e))return e}}const xs=/;(?![^(]*\))/g,_s=/:([^]+)/,ws=/\/\*[^]*?\*\//g;function ks(e){const t={};return e.replace(ws,"").split(xs).forEach(n=>{if(n){const r=n.split(_s);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Qn(e){let t="";if(re(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Qn(e[n]);r&&(t+=r+" ")}else if(K(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const As="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Os=Qr(As);function Ki(e){return!!e||e===""}function Es(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Zn(e[r],t[r]);return n}function Zn(e,t){if(e===t)return!0;let n=La(e),r=La(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=qt(e),r=qt(t),n||r)return e===t;if(n=R(e),r=R(t),n||r)return n&&r?Es(e,t):!1;if(n=K(e),r=K(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Zn(e[o],t[o]))return!1}}return String(e)===String(t)}function Ps(e,t){return e.findIndex(n=>Zn(n,t))}const Cs=e=>re(e)?e:e==null?"":R(e)||K(e)&&(e.toString===Ui||!j(e.toString))?JSON.stringify(e,Vi,2):String(e),Vi=(e,t)=>t&&t.__v_isRef?Vi(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Gn(t)?{[`Set(${t.size})`]:[...t.values()]}:K(t)&&!R(t)&&!Bi(t)?String(t):t;let we;class Is{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ss(e,t=we){t&&t.active&&t.effects.push(e)}function Ts(){return we}const ra=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qi=e=>(e.w&Ze)>0,Xi=e=>(e.n&Ze)>0,Ms=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Ns=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];qi(a)&&!Xi(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},Er=new WeakMap;let $t=0,Ze=1;const Pr=30;let Ae;const mt=Symbol(""),Cr=Symbol("");class aa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ss(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,Je=!0,Ze=1<<++$t,$t<=Pr?Ms(this):ja(this),this.fn()}finally{$t<=Pr&&Ns(this),Ze=1<<--$t,Ae=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(ja(this),this.onStop&&this.onStop(),this.active=!1)}}function ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const Gi=[];function Ft(){Gi.push(Je),Je=!1}function Rt(){const e=Gi.pop();Je=e===void 0?!0:e}function pe(e,t,n){if(Je&&Ae){let r=Er.get(e);r||Er.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ra()),Ji(a)}}function Ji(e,t){let n=!1;$t<=Pr?Xi(e)||(e.n|=Ze,n=!qi(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function Ue(e,t,n,r,a,i){const o=Er.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?ta(n)&&s.push(o.get("length")):(s.push(o.get(mt)),kt(e)&&s.push(o.get(Cr)));break;case"delete":R(e)||(s.push(o.get(mt)),kt(e)&&s.push(o.get(Cr)));break;case"set":kt(e)&&s.push(o.get(mt));break}if(s.length===1)s[0]&&Ir(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Ir(ra(l))}}function Ir(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&za(r);for(const r of n)r.computed||za(r)}function za(e,t){(e!==Ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Fs=Qr("__proto__,__v_isRef,__isVue"),Qi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qt)),Rs=ia(),Ls=ia(!1,!0),Ds=ia(!0),$a=js();function js(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ft();const r=U(this)[t].apply(this,n);return Rt(),r}}),e}function zs(e){const t=U(this);return pe(t,"has",e),t.hasOwnProperty(e)}function ia(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?tl:ro:t?no:to).get(r))return r;const o=R(r);if(!e){if(o&&$($a,a))return Reflect.get($a,a,i);if(a==="hasOwnProperty")return zs}const s=Reflect.get(r,a,i);return(qt(a)?Qi.has(a):Fs(a))||(e||pe(r,"get",a),t)?s:se(s)?o&&ta(a)?s:s.value:K(s)?e?ao(s):la(s):s}}const $s=Zi(),Hs=Zi(!0);function Zi(e=!1){return function(n,r,a,i){let o=n[r];if(It(o)&&se(o)&&!se(a))return!1;if(!e&&(!$n(a)&&!It(a)&&(o=U(o),a=U(a)),!R(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=R(n)&&ta(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Xt(a,o)&&Ue(n,"set",r,a):Ue(n,"add",r,a)),l}}function Us(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ue(e,"delete",t,void 0),r}function Bs(e,t){const n=Reflect.has(e,t);return(!qt(t)||!Qi.has(t))&&pe(e,"has",t),n}function Ys(e){return pe(e,"iterate",R(e)?"length":mt),Reflect.ownKeys(e)}const eo={get:Rs,set:$s,deleteProperty:Us,has:Bs,ownKeys:Ys},Ws={get:Ds,set(e,t){return!0},deleteProperty(e,t){return!0}},Ks=oe({},eo,{get:Ls,set:Hs}),oa=e=>e,er=e=>Reflect.getPrototypeOf(e);function gn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&pe(a,"get",t),pe(a,"get",i));const{has:o}=er(a),s=r?oa:n?ca:Gt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function vn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function bn(e,t=!1){return e=e.__v_raw,!t&&pe(U(e),"iterate",mt),Reflect.get(e,"size",e)}function Ha(e){e=U(e);const t=U(this);return er(t).has.call(t,e)||(t.add(e),Ue(t,"add",e,e)),this}function Ua(e,t){t=U(t);const n=U(this),{has:r,get:a}=er(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Xt(t,o)&&Ue(n,"set",e,t):Ue(n,"add",e,t),this}function Ba(e){const t=U(this),{has:n,get:r}=er(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ue(t,"delete",e,void 0),i}function Ya(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Ue(e,"clear",void 0,void 0),n}function yn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?oa:e?ca:Gt;return!e&&pe(s,"iterate",mt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function xn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=kt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?oa:t?ca:Gt;return!t&&pe(i,"iterate",l?Cr:mt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return e==="delete"?!1:this}}function Vs(){const e={get(i){return gn(this,i)},get size(){return bn(this)},has:vn,add:Ha,set:Ua,delete:Ba,clear:Ya,forEach:yn(!1,!1)},t={get(i){return gn(this,i,!1,!0)},get size(){return bn(this)},has:vn,add:Ha,set:Ua,delete:Ba,clear:Ya,forEach:yn(!1,!0)},n={get(i){return gn(this,i,!0)},get size(){return bn(this,!0)},has(i){return vn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:yn(!0,!1)},r={get(i){return gn(this,i,!0,!0)},get size(){return bn(this,!0)},has(i){return vn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:yn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=xn(i,!1,!1),n[i]=xn(i,!0,!1),t[i]=xn(i,!1,!0),r[i]=xn(i,!0,!0)}),[e,n,t,r]}const[qs,Xs,Gs,Js]=Vs();function sa(e,t){const n=t?e?Js:Gs:e?Xs:qs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Qs={get:sa(!1,!1)},Zs={get:sa(!1,!0)},el={get:sa(!0,!1)},to=new WeakMap,no=new WeakMap,ro=new WeakMap,tl=new WeakMap;function nl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rl(e){return e.__v_skip||!Object.isExtensible(e)?0:nl(vs(e))}function la(e){return It(e)?e:fa(e,!1,eo,Qs,to)}function al(e){return fa(e,!1,Ks,Zs,no)}function ao(e){return fa(e,!0,Ws,el,ro)}function fa(e,t,n,r,a){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=rl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function At(e){return It(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function It(e){return!!(e&&e.__v_isReadonly)}function $n(e){return!!(e&&e.__v_isShallow)}function io(e){return At(e)||It(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function oo(e){return zn(e,"__v_skip",!0),e}const Gt=e=>K(e)?la(e):e,ca=e=>K(e)?ao(e):e;function so(e){Je&&Ae&&(e=U(e),Ji(e.dep||(e.dep=ra())))}function lo(e,t){e=U(e);const n=e.dep;n&&Ir(n)}function se(e){return!!(e&&e.__v_isRef===!0)}function Sr(e){return il(e,!1)}function il(e,t){return se(e)?e:new ol(e,t)}class ol{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Gt(t)}get value(){return so(this),this._value}set value(t){const n=this.__v_isShallow||$n(t)||It(t);t=n?t:U(t),Xt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Gt(t),lo(this))}}function ze(e){return se(e)?e.value:e}const sl={get:(e,t,n)=>ze(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function fo(e){return At(e)?e:new Proxy(e,sl)}class ll{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new aa(t,()=>{this._dirty||(this._dirty=!0,lo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return so(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function fl(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Ce):(r=e.get,a=e.set),new ll(r,a,i||!a,n)}function Qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){tr(i,t,n)}return a}function Ie(e,t,n,r){if(j(e)){const i=Qe(e,t,n,r);return i&&Hi(i)&&i.catch(o=>{tr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ie(e[i],t,n,r));return a}function tr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Qe(l,null,10,[e,o,s]);return}}cl(e,n,a,r)}function cl(e,t,n,r=!0){console.error(e)}let Jt=!1,Tr=!1;const le=[];let Re=0;const Ot=[];let $e=null,lt=0;const co=Promise.resolve();let ua=null;function ul(e){const t=ua||co;return e?t.then(this?e.bind(this):e):t}function dl(e){let t=Re+1,n=le.length;for(;t<n;){const r=t+n>>>1;Qt(le[r])<e?t=r+1:n=r}return t}function da(e){(!le.length||!le.includes(e,Jt&&e.allowRecurse?Re+1:Re))&&(e.id==null?le.push(e):le.splice(dl(e.id),0,e),uo())}function uo(){!Jt&&!Tr&&(Tr=!0,ua=co.then(po))}function ml(e){const t=le.indexOf(e);t>Re&&le.splice(t,1)}function pl(e){R(e)?Ot.push(...e):(!$e||!$e.includes(e,e.allowRecurse?lt+1:lt))&&Ot.push(e),uo()}function Wa(e,t=Jt?Re+1:0){for(;t<le.length;t++){const n=le[t];n&&n.pre&&(le.splice(t,1),t--,n())}}function mo(e){if(Ot.length){const t=[...new Set(Ot)];if(Ot.length=0,$e){$e.push(...t);return}for($e=t,$e.sort((n,r)=>Qt(n)-Qt(r)),lt=0;lt<$e.length;lt++)$e[lt]();$e=null,lt=0}}const Qt=e=>e.id==null?1/0:e.id,hl=(e,t)=>{const n=Qt(e)-Qt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function po(e){Tr=!1,Jt=!0,le.sort(hl);const t=Ce;try{for(Re=0;Re<le.length;Re++){const n=le[Re];n&&n.active!==!1&&Qe(n,null,14)}}finally{Re=0,le.length=0,mo(),Jt=!1,ua=null,(le.length||Ot.length)&&po()}}function gl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||V;v&&(a=n.map(b=>re(b)?b.trim():b)),m&&(a=n.map(Wi))}let s,l=r[s=pr(t)]||r[s=pr(Ct(t))];!l&&i&&(l=r[s=pr(Nt(t))]),l&&Ie(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ie(c,e,6,a)}}function ho(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const d=ho(c,t,!0);d&&(s=!0,oe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(K(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):oe(o,i),K(e)&&r.set(e,o),o)}function nr(e,t){return!e||!Xn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Nt(t))||$(e,t))}let Oe=null,go=null;function Hn(e){const t=Oe;return Oe=e,go=e&&e.type.__scopeId||null,t}function vl(e,t=Oe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ti(-1);const i=Hn(t);let o;try{o=e(...a)}finally{Hn(i),r._d&&ti(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function hr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:b,ctx:C,inheritAttrs:k}=e;let M,A;const w=Hn(e);try{if(n.shapeFlag&4){const I=a||r;M=Fe(d.call(I,I,m,i,b,v,C)),A=l}else{const I=t;M=Fe(I.length>1?I(i,{attrs:l,slots:s,emit:c}):I(i,null)),A=t.props?l:bl(l)}}catch(I){Wt.length=0,tr(I,e,1),M=ie(Zt)}let L=M;if(A&&k!==!1){const I=Object.keys(A),{shapeFlag:H}=L;I.length&&H&7&&(o&&I.some(Zr)&&(A=yl(A,o)),L=St(L,A))}return n.dirs&&(L=St(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),M=L,Hn(w),M}const bl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xn(n))&&((t||(t={}))[n]=e[n]);return t},yl=(e,t)=>{const n={};for(const r in e)(!Zr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function xl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ka(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!nr(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ka(r,o,c):!0:!!o;return!1}function Ka(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!nr(n,i))return!0}return!1}function _l({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const wl=e=>e.__isSuspense;function kl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):pl(e)}const _n={};function Et(e,t,n){return vo(e,t,n)}function vo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){var s;const l=Ts()===((s=fe)==null?void 0:s.scope)?fe:null;let c,d=!1,m=!1;if(se(e)?(c=()=>e.value,d=$n(e)):At(e)?(c=()=>e,r=!0):R(e)?(m=!0,d=e.some(I=>At(I)||$n(I)),c=()=>e.map(I=>{if(se(I))return I.value;if(At(I))return ct(I);if(j(I))return Qe(I,l,2)})):j(e)?t?c=()=>Qe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Ie(e,l,3,[b])}:c=Ce,t&&r){const I=c;c=()=>ct(I())}let v,b=I=>{v=w.onStop=()=>{Qe(I,l,4)}},C;if(tn)if(b=Ce,t?n&&Ie(t,l,3,[c(),m?[]:void 0,b]):c(),a==="sync"){const I=xf();C=I.__watcherHandles||(I.__watcherHandles=[])}else return Ce;let k=m?new Array(e.length).fill(_n):_n;const M=()=>{if(w.active)if(t){const I=w.run();(r||d||(m?I.some((H,te)=>Xt(H,k[te])):Xt(I,k)))&&(v&&v(),Ie(t,l,3,[I,k===_n?void 0:m&&k[0]===_n?[]:k,b]),k=I)}else w.run()};M.allowRecurse=!!t;let A;a==="sync"?A=M:a==="post"?A=()=>me(M,l&&l.suspense):(M.pre=!0,l&&(M.id=l.uid),A=()=>da(M));const w=new aa(c,A);t?n?M():k=w.run():a==="post"?me(w.run.bind(w),l&&l.suspense):w.run();const L=()=>{w.stop(),l&&l.scope&&ea(l.scope.effects,w)};return C&&C.push(L),L}function Al(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?bo(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=fe;Tt(this);const s=vo(a,i.bind(r),n);return o?Tt(o):pt(),s}function bo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ct(e,t){if(!K(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))ct(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)ct(e[n],t);else if(Gn(e)||kt(e))e.forEach(n=>{ct(n,t)});else if(Bi(e))for(const n in e)ct(e[n],t);return e}function Ol(e,t){const n=Oe;if(n===null)return e;const r=or(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=V]=t[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&ct(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function it(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ft(),Ie(l,n,8,[e.el,s,e,t]),Rt())}}function El(e,t){return j(e)?(()=>oe({name:e.name},t,{setup:e}))():e}const Fn=e=>!!e.type.__asyncLoader,yo=e=>e.type.__isKeepAlive;function Pl(e,t){xo(e,"a",t)}function Cl(e,t){xo(e,"da",t)}function xo(e,t,n=fe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(rr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)yo(a.parent.vnode)&&Il(r,t,n,a),a=a.parent}}function Il(e,t,n,r){const a=rr(t,e,r,!0);_o(()=>{ea(r[t],a)},n)}function rr(e,t,n=fe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ft(),Tt(n);const s=Ie(t,n,e,o);return pt(),Rt(),s});return r?a.unshift(i):a.push(i),i}}const Ke=e=>(t,n=fe)=>(!tn||e==="sp")&&rr(e,(...r)=>t(...r),n),Sl=Ke("bm"),Tl=Ke("m"),Ml=Ke("bu"),Nl=Ke("u"),Fl=Ke("bum"),_o=Ke("um"),Rl=Ke("sp"),Ll=Ke("rtg"),Dl=Ke("rtc");function jl(e,t=fe){rr("ec",e,t)}const zl=Symbol.for("v-ndc");function Mr(e,t,n,r){let a;const i=n&&n[r];if(R(e)||re(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(K(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Nr=e=>e?Mo(e)?or(e)||e.proxy:Nr(e.parent):null,Yt=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nr(e.parent),$root:e=>Nr(e.root),$emit:e=>e.emit,$options:e=>ma(e),$forceUpdate:e=>e.f||(e.f=()=>da(e.update)),$nextTick:e=>e.n||(e.n=ul.bind(e.proxy)),$watch:e=>Al.bind(e)}),gr=(e,t)=>e!==V&&!e.__isScriptSetup&&$(e,t),$l={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const b=o[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(gr(r,t))return o[t]=1,r[t];if(a!==V&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==V&&$(n,t))return o[t]=4,n[t];Fr&&(o[t]=0)}}const d=Yt[t];let m,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==V&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return gr(a,t)?(a[t]=n,!0):r!==V&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==V&&$(e,o)||gr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Yt,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Va(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Fr=!0;function Hl(e){const t=ma(e),n=e.proxy,r=e.ctx;Fr=!1,t.beforeCreate&&qa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:b,updated:C,activated:k,deactivated:M,beforeDestroy:A,beforeUnmount:w,destroyed:L,unmounted:I,render:H,renderTracked:te,renderTriggered:G,errorCaptured:ve,serverPrefetch:be,expose:De,inheritAttrs:Dt,components:dn,directives:mn,filters:ur}=t;if(c&&Ul(c,r,null),o)for(const J in o){const Y=o[J];j(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);K(J)&&(e.data=la(J))}if(Fr=!0,i)for(const J in i){const Y=i[J],rt=j(Y)?Y.bind(n,n):j(Y.get)?Y.get.bind(n,n):Ce,pn=!j(Y)&&j(Y.set)?Y.set.bind(n):Ce,at=st({get:rt,set:pn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>at.value,set:Se=>at.value=Se})}if(s)for(const J in s)wo(s[J],r,n,J);if(l){const J=j(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{ql(Y,J[Y])})}d&&qa(d,e,"c");function ce(J,Y){R(Y)?Y.forEach(rt=>J(rt.bind(n))):Y&&J(Y.bind(n))}if(ce(Sl,m),ce(Tl,v),ce(Ml,b),ce(Nl,C),ce(Pl,k),ce(Cl,M),ce(jl,ve),ce(Dl,te),ce(Ll,G),ce(Fl,w),ce(_o,I),ce(Rl,be),R(De))if(De.length){const J=e.exposed||(e.exposed={});De.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:rt=>n[Y]=rt})})}else e.exposed||(e.exposed={});H&&e.render===Ce&&(e.render=H),Dt!=null&&(e.inheritAttrs=Dt),dn&&(e.components=dn),mn&&(e.directives=mn)}function Ul(e,t,n=Ce){R(e)&&(e=Rr(e));for(const r in e){const a=e[r];let i;K(a)?"default"in a?i=Rn(a.from||r,a.default,!0):i=Rn(a.from||r):i=Rn(a),se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function qa(e,t,n){Ie(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function wo(e,t,n,r){const a=r.includes(".")?bo(n,r):()=>n[r];if(re(e)){const i=t[e];j(i)&&Et(a,i)}else if(j(e))Et(a,e.bind(n));else if(K(e))if(R(e))e.forEach(i=>wo(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Et(a,i,e)}}function ma(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Un(l,c,o,!0)),Un(l,t,o)),K(t)&&i.set(t,l),l}function Un(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Un(e,i,n,!0),a&&a.forEach(o=>Un(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Bl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Bl={data:Xa,props:Ga,emits:Ga,methods:Ht,computed:Ht,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:Ht,directives:Ht,watch:Wl,provide:Xa,inject:Yl};function Xa(e,t){return t?e?function(){return oe(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Yl(e,t){return Ht(Rr(e),Rr(t))}function Rr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function Ht(e,t){return e?oe(Object.create(null),e,t):t}function Ga(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:oe(Object.create(null),Va(e),Va(t??{})):t}function Wl(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=ue(e[r],t[r]);return n}function ko(){return{app:null,config:{isNativeTag:ps,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kl=0;function Vl(e,t){return function(r,a=null){j(r)||(r=oe({},r)),a!=null&&!K(a)&&(a=null);const i=ko(),o=new Set;let s=!1;const l=i.app={_uid:Kl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:_f,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ie(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,or(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Bn=l;try{return c()}finally{Bn=null}}};return l}}let Bn=null;function ql(e,t){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[e]=t}}function Rn(e,t,n=!1){const r=fe||Oe;if(r||Bn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Bn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function Xl(e,t,n,r=!1){const a={},i={};zn(i,ir,1),e.propsDefaults=Object.create(null),Ao(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:al(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Gl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(nr(e.emitsOptions,v))continue;const b=t[v];if(l)if($(i,v))b!==i[v]&&(i[v]=b,c=!0);else{const C=Ct(v);a[C]=Lr(l,s,C,b,e,!1)}else b!==i[v]&&(i[v]=b,c=!0)}}}else{Ao(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=Nt(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Lr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&Ue(e,"set","$attrs")}function Ao(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Mn(l))continue;const c=t[l];let d;a&&$(a,d=Ct(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:nr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||V;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Lr(a,l,m,c[m],e,!$(c,m))}}return o}function Lr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Tt(a),r=c[n]=l.call(null,t),pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Nt(n))&&(r=!0))}return r}function Oo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[v,b]=Oo(m,t,!0);oe(o,v),b&&s.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return K(e)&&r.set(e,wt),wt;if(R(i))for(let d=0;d<i.length;d++){const m=Ct(i[d]);Ja(m)&&(o[m]=V)}else if(i)for(const d in i){const m=Ct(d);if(Ja(m)){const v=i[d],b=o[m]=R(v)||j(v)?{type:v}:oe({},v);if(b){const C=ei(Boolean,b.type),k=ei(String,b.type);b[0]=C>-1,b[1]=k<0||C<k,(C>-1||$(b,"default"))&&s.push(m)}}}const c=[o,s];return K(e)&&r.set(e,c),c}function Ja(e){return e[0]!=="$"}function Qa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Za(e,t){return Qa(e)===Qa(t)}function ei(e,t){return R(t)?t.findIndex(n=>Za(n,e)):j(t)&&Za(t,e)?0:-1}const Eo=e=>e[0]==="_"||e==="$stable",pa=e=>R(e)?e.map(Fe):[Fe(e)],Jl=(e,t,n)=>{if(t._n)return t;const r=vl((...a)=>pa(t(...a)),n);return r._c=!1,r},Po=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Eo(a))continue;const i=e[a];if(j(i))t[a]=Jl(a,i,r);else if(i!=null){const o=pa(i);t[a]=()=>o}}},Co=(e,t)=>{const n=pa(t);e.slots.default=()=>n},Ql=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),zn(t,"_",n)):Po(t,e.slots={})}else e.slots={},t&&Co(e,t);zn(e.slots,ir,1)},Zl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(oe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Po(t,a)),o=t}else t&&(Co(e,t),o={default:1});if(i)for(const s in a)!Eo(s)&&!(s in o)&&delete a[s]};function Dr(e,t,n,r,a=!1){if(R(e)){e.forEach((v,b)=>Dr(v,t&&(R(t)?t[b]:t),n,r,a));return}if(Fn(r)&&!a)return;const i=r.shapeFlag&4?or(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(re(c)?(d[c]=null,$(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),j(l))Qe(l,s,12,[o,d]);else{const v=re(l),b=se(l);if(v||b){const C=()=>{if(e.f){const k=v?$(m,l)?m[l]:d[l]:l.value;a?R(k)&&ea(k,i):R(k)?k.includes(i)||k.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):b&&(l.value=o,e.k&&(d[e.k]=o))};o?(C.id=-1,me(C,n)):C()}}}const me=kl;function ef(e){return tf(e)}function tf(e,t){const n=Or();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:b=Ce,insertStaticContent:C}=e,k=(f,u,p,g=null,h=null,_=null,E=!1,x=null,O=!!u.dynamicChildren)=>{if(f===u)return;f&&!zt(f,u)&&(g=hn(f),Se(f,h,_,!0),f=null),u.patchFlag===-2&&(O=!1,u.dynamicChildren=null);const{type:y,ref:N,shapeFlag:S}=u;switch(y){case ar:M(f,u,p,g);break;case Zt:A(f,u,p,g);break;case vr:f==null&&w(u,p,g,E);break;case ye:dn(f,u,p,g,h,_,E,x,O);break;default:S&1?H(f,u,p,g,h,_,E,x,O):S&6?mn(f,u,p,g,h,_,E,x,O):(S&64||S&128)&&y.process(f,u,p,g,h,_,E,x,O,vt)}N!=null&&h&&Dr(N,f&&f.ref,_,u||f,!u)},M=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},A=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},w=(f,u,p,g)=>{[f.el,f.anchor]=C(f.children,u,p,g,f.el,f.anchor)},L=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},I=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},H=(f,u,p,g,h,_,E,x,O)=>{E=E||u.type==="svg",f==null?te(u,p,g,h,_,E,x,O):be(f,u,h,_,E,x,O)},te=(f,u,p,g,h,_,E,x)=>{let O,y;const{type:N,props:S,shapeFlag:F,transition:D,dirs:z}=f;if(O=f.el=o(f.type,_,S&&S.is,S),F&8?d(O,f.children):F&16&&ve(f.children,O,null,g,h,_&&N!=="foreignObject",E,x),z&&it(f,null,g,"created"),G(O,f,f.scopeId,E,g),S){for(const B in S)B!=="value"&&!Mn(B)&&i(O,B,null,S[B],_,f.children,g,h,je);"value"in S&&i(O,"value",null,S.value),(y=S.onVnodeBeforeMount)&&Me(y,g,f)}z&&it(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&D&&!D.persisted;W&&D.beforeEnter(O),r(O,u,p),((y=S&&S.onVnodeMounted)||W||z)&&me(()=>{y&&Me(y,g,f),W&&D.enter(O),z&&it(f,null,g,"mounted")},h)},G=(f,u,p,g,h)=>{if(p&&b(f,p),g)for(let _=0;_<g.length;_++)b(f,g[_]);if(h){let _=h.subTree;if(u===_){const E=h.vnode;G(f,E,E.scopeId,E.slotScopeIds,h.parent)}}},ve=(f,u,p,g,h,_,E,x,O=0)=>{for(let y=O;y<f.length;y++){const N=f[y]=x?Ge(f[y]):Fe(f[y]);k(null,N,u,p,g,h,_,E,x)}},be=(f,u,p,g,h,_,E)=>{const x=u.el=f.el;let{patchFlag:O,dynamicChildren:y,dirs:N}=u;O|=f.patchFlag&16;const S=f.props||V,F=u.props||V;let D;p&&ot(p,!1),(D=F.onVnodeBeforeUpdate)&&Me(D,p,u,f),N&&it(u,f,p,"beforeUpdate"),p&&ot(p,!0);const z=h&&u.type!=="foreignObject";if(y?De(f.dynamicChildren,y,x,p,g,z,_):E||Y(f,u,x,null,p,g,z,_,!1),O>0){if(O&16)Dt(x,u,S,F,p,g,h);else if(O&2&&S.class!==F.class&&i(x,"class",null,F.class,h),O&4&&i(x,"style",S.style,F.style,h),O&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const ne=W[B],_e=S[ne],bt=F[ne];(bt!==_e||ne==="value")&&i(x,ne,_e,bt,h,f.children,p,g,je)}}O&1&&f.children!==u.children&&d(x,u.children)}else!E&&y==null&&Dt(x,u,S,F,p,g,h);((D=F.onVnodeUpdated)||N)&&me(()=>{D&&Me(D,p,u,f),N&&it(u,f,p,"updated")},g)},De=(f,u,p,g,h,_,E)=>{for(let x=0;x<u.length;x++){const O=f[x],y=u[x],N=O.el&&(O.type===ye||!zt(O,y)||O.shapeFlag&70)?m(O.el):p;k(O,y,N,null,g,h,_,E,!0)}},Dt=(f,u,p,g,h,_,E)=>{if(p!==g){if(p!==V)for(const x in p)!Mn(x)&&!(x in g)&&i(f,x,p[x],null,E,u.children,h,_,je);for(const x in g){if(Mn(x))continue;const O=g[x],y=p[x];O!==y&&x!=="value"&&i(f,x,y,O,E,u.children,h,_,je)}"value"in g&&i(f,"value",p.value,g.value)}},dn=(f,u,p,g,h,_,E,x,O)=>{const y=u.el=f?f.el:s(""),N=u.anchor=f?f.anchor:s("");let{patchFlag:S,dynamicChildren:F,slotScopeIds:D}=u;D&&(x=x?x.concat(D):D),f==null?(r(y,p,g),r(N,p,g),ve(u.children,p,N,h,_,E,x,O)):S>0&&S&64&&F&&f.dynamicChildren?(De(f.dynamicChildren,F,p,h,_,E,x),(u.key!=null||h&&u===h.subTree)&&Io(f,u,!0)):Y(f,u,p,N,h,_,E,x,O)},mn=(f,u,p,g,h,_,E,x,O)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,E,O):ur(u,p,g,h,_,E,O):Sa(f,u,O)},ur=(f,u,p,g,h,_,E)=>{const x=f.component=df(f,g,h);if(yo(f)&&(x.ctx.renderer=vt),mf(x),x.asyncDep){if(h&&h.registerDep(x,ce),!f.el){const O=x.subTree=ie(Zt);A(null,O,u,p)}return}ce(x,f,u,p,h,_,E)},Sa=(f,u,p)=>{const g=u.component=f.component;if(xl(f,u,p))if(g.asyncDep&&!g.asyncResolved){J(g,u,p);return}else g.next=u,ml(g.update),g.update();else u.el=f.el,g.vnode=u},ce=(f,u,p,g,h,_,E)=>{const x=()=>{if(f.isMounted){let{next:N,bu:S,u:F,parent:D,vnode:z}=f,W=N,B;ot(f,!1),N?(N.el=z.el,J(f,N,E)):N=z,S&&Nn(S),(B=N.props&&N.props.onVnodeBeforeUpdate)&&Me(B,D,N,z),ot(f,!0);const ne=hr(f),_e=f.subTree;f.subTree=ne,k(_e,ne,m(_e.el),hn(_e),f,h,_),N.el=ne.el,W===null&&_l(f,ne.el),F&&me(F,h),(B=N.props&&N.props.onVnodeUpdated)&&me(()=>Me(B,D,N,z),h)}else{let N;const{el:S,props:F}=u,{bm:D,m:z,parent:W}=f,B=Fn(u);if(ot(f,!1),D&&Nn(D),!B&&(N=F&&F.onVnodeBeforeMount)&&Me(N,W,u),ot(f,!0),S&&mr){const ne=()=>{f.subTree=hr(f),mr(S,f.subTree,f,h,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=hr(f);k(null,ne,p,g,f,h,_),u.el=ne.el}if(z&&me(z,h),!B&&(N=F&&F.onVnodeMounted)){const ne=u;me(()=>Me(N,W,ne),h)}(u.shapeFlag&256||W&&Fn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&me(f.a,h),f.isMounted=!0,u=p=g=null}},O=f.effect=new aa(x,()=>da(y),f.scope),y=f.update=()=>O.run();y.id=f.uid,ot(f,!0),y()},J=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Gl(f,u.props,g,p),Zl(f,u.children,p),Ft(),Wa(),Rt()},Y=(f,u,p,g,h,_,E,x,O=!1)=>{const y=f&&f.children,N=f?f.shapeFlag:0,S=u.children,{patchFlag:F,shapeFlag:D}=u;if(F>0){if(F&128){pn(y,S,p,g,h,_,E,x,O);return}else if(F&256){rt(y,S,p,g,h,_,E,x,O);return}}D&8?(N&16&&je(y,h,_),S!==y&&d(p,S)):N&16?D&16?pn(y,S,p,g,h,_,E,x,O):je(y,h,_,!0):(N&8&&d(p,""),D&16&&ve(S,p,g,h,_,E,x,O))},rt=(f,u,p,g,h,_,E,x,O)=>{f=f||wt,u=u||wt;const y=f.length,N=u.length,S=Math.min(y,N);let F;for(F=0;F<S;F++){const D=u[F]=O?Ge(u[F]):Fe(u[F]);k(f[F],D,p,null,h,_,E,x,O)}y>N?je(f,h,_,!0,!1,S):ve(u,p,g,h,_,E,x,O,S)},pn=(f,u,p,g,h,_,E,x,O)=>{let y=0;const N=u.length;let S=f.length-1,F=N-1;for(;y<=S&&y<=F;){const D=f[y],z=u[y]=O?Ge(u[y]):Fe(u[y]);if(zt(D,z))k(D,z,p,null,h,_,E,x,O);else break;y++}for(;y<=S&&y<=F;){const D=f[S],z=u[F]=O?Ge(u[F]):Fe(u[F]);if(zt(D,z))k(D,z,p,null,h,_,E,x,O);else break;S--,F--}if(y>S){if(y<=F){const D=F+1,z=D<N?u[D].el:g;for(;y<=F;)k(null,u[y]=O?Ge(u[y]):Fe(u[y]),p,z,h,_,E,x,O),y++}}else if(y>F)for(;y<=S;)Se(f[y],h,_,!0),y++;else{const D=y,z=y,W=new Map;for(y=z;y<=F;y++){const he=u[y]=O?Ge(u[y]):Fe(u[y]);he.key!=null&&W.set(he.key,y)}let B,ne=0;const _e=F-z+1;let bt=!1,Na=0;const jt=new Array(_e);for(y=0;y<_e;y++)jt[y]=0;for(y=D;y<=S;y++){const he=f[y];if(ne>=_e){Se(he,h,_,!0);continue}let Te;if(he.key!=null)Te=W.get(he.key);else for(B=z;B<=F;B++)if(jt[B-z]===0&&zt(he,u[B])){Te=B;break}Te===void 0?Se(he,h,_,!0):(jt[Te-z]=y+1,Te>=Na?Na=Te:bt=!0,k(he,u[Te],p,null,h,_,E,x,O),ne++)}const Fa=bt?nf(jt):wt;for(B=Fa.length-1,y=_e-1;y>=0;y--){const he=z+y,Te=u[he],Ra=he+1<N?u[he+1].el:g;jt[y]===0?k(null,Te,p,Ra,h,_,E,x,O):bt&&(B<0||y!==Fa[B]?at(Te,p,Ra,2):B--)}}},at=(f,u,p,g,h=null)=>{const{el:_,type:E,transition:x,children:O,shapeFlag:y}=f;if(y&6){at(f.component.subTree,u,p,g);return}if(y&128){f.suspense.move(u,p,g);return}if(y&64){E.move(f,u,p,vt);return}if(E===ye){r(_,u,p);for(let S=0;S<O.length;S++)at(O[S],u,p,g);r(f.anchor,u,p);return}if(E===vr){L(f,u,p);return}if(g!==2&&y&1&&x)if(g===0)x.beforeEnter(_),r(_,u,p),me(()=>x.enter(_),h);else{const{leave:S,delayLeave:F,afterLeave:D}=x,z=()=>r(_,u,p),W=()=>{S(_,()=>{z(),D&&D()})};F?F(_,z,W):W()}else r(_,u,p)},Se=(f,u,p,g=!1,h=!1)=>{const{type:_,props:E,ref:x,children:O,dynamicChildren:y,shapeFlag:N,patchFlag:S,dirs:F}=f;if(x!=null&&Dr(x,null,p,f,!0),N&256){u.ctx.deactivate(f);return}const D=N&1&&F,z=!Fn(f);let W;if(z&&(W=E&&E.onVnodeBeforeUnmount)&&Me(W,u,f),N&6)ms(f.component,p,g);else{if(N&128){f.suspense.unmount(p,g);return}D&&it(f,null,u,"beforeUnmount"),N&64?f.type.remove(f,u,p,h,vt,g):y&&(_!==ye||S>0&&S&64)?je(y,u,p,!1,!0):(_===ye&&S&384||!h&&N&16)&&je(O,u,p),g&&Ta(f)}(z&&(W=E&&E.onVnodeUnmounted)||D)&&me(()=>{W&&Me(W,u,f),D&&it(f,null,u,"unmounted")},p)},Ta=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===ye){ds(p,g);return}if(u===vr){I(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:E,delayLeave:x}=h,O=()=>E(p,_);x?x(f.el,_,O):O()}else _()},ds=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},ms=(f,u,p)=>{const{bum:g,scope:h,update:_,subTree:E,um:x}=f;g&&Nn(g),h.stop(),_&&(_.active=!1,Se(E,f,u,p)),x&&me(x,u),me(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},je=(f,u,p,g=!1,h=!1,_=0)=>{for(let E=_;E<f.length;E++)Se(f[E],u,p,g,h)},hn=f=>f.shapeFlag&6?hn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ma=(f,u,p)=>{f==null?u._vnode&&Se(u._vnode,null,null,!0):k(u._vnode||null,f,u,null,null,null,p),Wa(),mo(),u._vnode=f},vt={p:k,um:Se,m:at,r:Ta,mt:ur,mc:ve,pc:Y,pbc:De,n:hn,o:e};let dr,mr;return t&&([dr,mr]=t(vt)),{render:Ma,hydrate:dr,createApp:Vl(Ma,dr)}}function ot({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Io(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ge(a[i]),s.el=o.el),n||Io(o,s)),s.type===ar&&(s.el=o.el)}}function nf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const rf=e=>e.__isTeleport,ye=Symbol.for("v-fgt"),ar=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),vr=Symbol.for("v-stc"),Wt=[];let Ee=null;function ke(e=!1){Wt.push(Ee=e?null:[])}function af(){Wt.pop(),Ee=Wt[Wt.length-1]||null}let en=1;function ti(e){en+=e}function So(e){return e.dynamicChildren=en>0?Ee||wt:null,af(),en>0&&Ee&&Ee.push(e),e}function Ne(e,t,n,r,a,i){return So(xe(e,t,n,r,a,i,!0))}function of(e,t,n,r,a){return So(ie(e,t,n,r,a,!0))}function jr(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const ir="__vInternal",To=({key:e})=>e??null,Ln=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||se(e)||j(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function xe(e,t=null,n=null,r=0,a=null,i=e===ye?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&To(t),ref:t&&Ln(t),scopeId:go,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Oe};return s?(ha(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),en>0&&!o&&Ee&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ee.push(l),l}const ie=sf;function sf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===zl)&&(e=Zt),jr(e)){const s=St(e,t,!0);return n&&ha(s,n),en>0&&!i&&Ee&&(s.shapeFlag&6?Ee[Ee.indexOf(e)]=s:Ee.push(s)),s.patchFlag|=-2,s}if(vf(e)&&(e=e.__vccOpts),t){t=lf(t);let{class:s,style:l}=t;s&&!re(s)&&(t.class=Qn(s)),K(l)&&(io(l)&&!R(l)&&(l=oe({},l)),t.style=na(l))}const o=re(e)?1:wl(e)?128:rf(e)?64:K(e)?4:j(e)?2:0;return xe(e,t,n,r,a,o,i,!0)}function lf(e){return e?io(e)||ir in e?oe({},e):e:null}function St(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?ff(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&To(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Ln(t)):[a,Ln(t)]:Ln(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ut(e=" ",t=0){return ie(ar,null,e,t)}function Fe(e){return e==null||typeof e=="boolean"?ie(Zt):R(e)?ie(ye,null,e.slice()):typeof e=="object"?Ge(e):ie(ar,null,String(e))}function Ge(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:St(e)}function ha(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ha(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ir in t)?t._ctx=Oe:a===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),r&64?(n=16,t=[Ut(t)]):n=8);e.children=t,e.shapeFlag|=n}function ff(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Qn([t.class,r.class]));else if(a==="style")t.style=na([t.style,r.style]);else if(Xn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Me(e,t,n,r=null){Ie(e,t,7,[n,r])}const cf=ko();let uf=0;function df(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||cf,i={uid:uf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Is(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oo(r,a),emitsOptions:ho(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=gl.bind(null,i),e.ce&&e.ce(i),i}let fe=null,ga,yt,ni="__VUE_INSTANCE_SETTERS__";(yt=Or()[ni])||(yt=Or()[ni]=[]),yt.push(e=>fe=e),ga=e=>{yt.length>1?yt.forEach(t=>t(e)):yt[0](e)};const Tt=e=>{ga(e),e.scope.on()},pt=()=>{fe&&fe.scope.off(),ga(null)};function Mo(e){return e.vnode.shapeFlag&4}let tn=!1;function mf(e,t=!1){tn=t;const{props:n,children:r}=e.vnode,a=Mo(e);Xl(e,n,a,t),Ql(e,r);const i=a?pf(e,t):void 0;return tn=!1,i}function pf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=oo(new Proxy(e.ctx,$l));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?gf(e):null;Tt(e),Ft();const i=Qe(r,e,0,[e.props,a]);if(Rt(),pt(),Hi(i)){if(i.then(pt,pt),t)return i.then(o=>{ri(e,o,t)}).catch(o=>{tr(o,e,0)});e.asyncDep=i}else ri(e,i,t)}else No(e,t)}function ri(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=fo(t)),No(e,n)}let ai;function No(e,t,n){const r=e.type;if(!e.render){if(!t&&ai&&!r.render){const a=r.template||ma(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=oe(oe({isCustomElement:i,delimiters:s},o),l);r.render=ai(a,c)}}e.render=r.render||Ce}Tt(e),Ft(),Hl(e),Rt(),pt()}function hf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}}))}function gf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return hf(e)},slots:e.slots,emit:e.emit,expose:t}}function or(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(fo(oo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Yt)return Yt[n](e)},has(t,n){return n in t||n in Yt}}))}function vf(e){return j(e)&&"__vccOpts"in e}const st=(e,t)=>fl(e,t,tn);function bf(e,t,n){const r=arguments.length;return r===2?K(t)&&!R(t)?jr(t)?ie(e,null,[t]):ie(e,t):ie(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jr(n)&&(n=[n]),ie(e,t,n))}const yf=Symbol.for("v-scx"),xf=()=>Rn(yf),_f="3.3.4",wf="http://www.w3.org/2000/svg",ft=typeof document<"u"?document:null,ii=ft&&ft.createElement("template"),kf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ft.createElementNS(wf,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ii.innerHTML=r?`<svg>${e}</svg>`:e;const s=ii.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Af(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Of(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&zr(r,i,"");for(const i in n)zr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const oi=/\s*!important$/;function zr(e,t,n){if(R(n))n.forEach(r=>zr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ef(e,t);oi.test(n)?e.setProperty(Nt(r),n.replace(oi,""),"important"):e[r]=n}}const si=["Webkit","Moz","ms"],br={};function Ef(e,t){const n=br[t];if(n)return n;let r=Ct(t);if(r!=="filter"&&r in e)return br[t]=r;r=Yi(r);for(let a=0;a<si.length;a++){const i=si[a]+r;if(i in e)return br[t]=i}return t}const li="http://www.w3.org/1999/xlink";function Pf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(li,t.slice(6,t.length)):e.setAttributeNS(li,t,n);else{const i=Os(t);n==null||i&&!Ki(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Cf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ki(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Fo(e,t,n,r){e.addEventListener(t,n,r)}function If(e,t,n,r){e.removeEventListener(t,n,r)}function Sf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Tf(t);if(r){const c=i[t]=Ff(r,a);Fo(e,s,c,l)}else o&&(If(e,s,o,l),i[t]=void 0)}}const fi=/(?:Once|Passive|Capture)$/;function Tf(e){let t;if(fi.test(e)){t={};let r;for(;r=e.match(fi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Nt(e.slice(2)),t]}let yr=0;const Mf=Promise.resolve(),Nf=()=>yr||(Mf.then(()=>yr=0),yr=Date.now());function Ff(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ie(Rf(r,n.value),t,5,[r])};return n.value=e,n.attached=Nf(),n}function Rf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ci=/^on[a-z]/,Lf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Af(e,r,a):t==="style"?Of(e,n,r):Xn(t)?Zr(t)||Sf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Df(e,t,r,a))?Cf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Pf(e,t,r,a))};function Df(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ci.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ci.test(t)&&re(n)?!1:t in e}const ui=e=>{const t=e.props["onUpdate:modelValue"]||!1;return R(t)?n=>Nn(t,n):t},jf={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=Gn(t);Fo(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Wi(Yn(o)):Yn(o));e._assign(e.multiple?a?new Set(i):i:i[0])}),e._assign=ui(r)},mounted(e,{value:t}){di(e,t)},beforeUpdate(e,t,n){e._assign=ui(n)},updated(e,{value:t}){di(e,t)}};function di(e,t){const n=e.multiple;if(!(n&&!R(t)&&!Gn(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=Yn(i);if(n)R(t)?i.selected=Ps(t,o)>-1:i.selected=t.has(o);else if(Zn(Yn(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Yn(e){return"_value"in e?e._value:e.value}const zf=oe({patchProp:Lf},kf);let mi;function $f(){return mi||(mi=ef(zf))}const Hf=(...e)=>{const t=$f().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Uf(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Uf(e){return re(e)?document.querySelector(e):e}const Bf=xe("label",{for:"oscilators"},"Oscilators",-1),Yf=xe("br",null,null,-1),Wf=xe("option",{disabled:"",value:""},"Select one",-1),Kf=["value"],Vf={__name:"Oscilators",props:{createMatrix:Function,cols:Number,rows:Number},emits:["structure"],setup(e,{emit:t}){const n=e,r={name:"Blinker"},a=(H,te)=>{te.forEach(G=>{H[G[0]][G[1]]=1})},i=n.createMatrix(n.cols,n.rows);i[24][49]=1,i[25][49]=1,i[23][49]=1,r.matrix=i;const o=n.createMatrix(n.cols,n.rows);o[24][49]=1,o[24][50]=1,o[24][51]=1,o[25][49]=1,o[25][48]=1,o[25][50]=1;const s={name:"Toad",matrix:o},l=n.createMatrix(n.cols,n.rows);l[24][49]=1,l[24][48]=1,l[23][49]=1,l[23][48]=1,l[25][50]=1,l[26][50]=1,l[25][51]=1,l[26][51]=1;const c={name:"Beacon",matrix:l},d=n.createMatrix(n.cols,n.rows);a(d,[[18,44],[18,45],[18,46],[18,50],[18,51],[18,52],[20,42],[20,47],[20,49],[20,54],[21,42],[21,47],[21,49],[21,54],[22,42],[22,47],[22,49],[22,54],[23,44],[23,45],[23,46],[23,50],[23,51],[23,52],[25,44],[25,45],[25,46],[25,50],[25,51],[25,52],[26,42],[26,47],[26,49],[26,54],[27,42],[27,47],[27,49],[27,54],[28,42],[28,47],[28,49],[28,54],[30,44],[30,45],[30,46],[30,50],[30,51],[30,52]]);const v={name:"Pulsar",matrix:d},b=n.createMatrix(n.cols,n.rows);a(b,[[18,46],[18,47],[18,48],[19,47],[20,47],[21,46],[21,47],[21,48],[23,46],[23,47],[23,48],[24,46],[24,47],[24,48],[26,46],[26,47],[26,48],[27,47],[28,47],[29,46],[29,47],[29,48]]);const k={name:"Penta Decathlon",matrix:b},M=n.createMatrix(n.cols,n.rows);a(M,[[21,38],[21,39],[21,41],[21,42],[21,43],[21,44],[21,45],[21,46],[22,38],[22,39],[22,41],[22,42],[22,43],[22,44],[22,45],[22,46],[23,38],[23,39],[24,38],[24,39],[24,45],[24,46],[25,38],[25,39],[25,45],[25,46],[26,38],[26,39],[26,45],[26,46],[27,45],[27,46],[28,38],[28,39],[28,40],[28,41],[28,42],[28,43],[28,45],[28,46],[29,38],[29,39],[29,40],[29,41],[29,42],[29,43],[29,45],[29,46]]);const L=[r,s,c,v,k,{name:"Kok's Galaxy",matrix:M}],I=Sr(0);return Et(I,()=>{t("structure",I.value)}),(H,te)=>(ke(),Ne("div",null,[Bf,Yf,Ol(xe("select",{"onUpdate:modelValue":te[0]||(te[0]=G=>I.value=G),id:"oscilators"},[Wf,(ke(),Ne(ye,null,Mr(L,(G,ve)=>xe("option",{value:G},Cs(G.name),9,Kf)),64))],512),[[jf,I.value]])]))}};function pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pi(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wn(e){"@babel/helpers - typeof";return Wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wn(e)}function qf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Xf(e,t,n){return t&&hi(e.prototype,t),n&&hi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function va(e,t){return Jf(e)||Zf(e,t)||Ro(e,t)||tc()}function fn(e){return Gf(e)||Qf(e)||Ro(e)||ec()}function Gf(e){if(Array.isArray(e))return $r(e)}function Jf(e){if(Array.isArray(e))return e}function Qf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ro(e,t){if(e){if(typeof e=="string")return $r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $r(e,t)}}function $r(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ec(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gi=function(){},ba={},Lo={},Do=null,jo={mark:gi,measure:gi};try{typeof window<"u"&&(ba=window),typeof document<"u"&&(Lo=document),typeof MutationObserver<"u"&&(Do=MutationObserver),typeof performance<"u"&&(jo=performance)}catch{}var nc=ba.navigator||{},vi=nc.userAgent,bi=vi===void 0?"":vi,et=ba,X=Lo,yi=Do,wn=jo;et.document;var Ve=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",zo=~bi.indexOf("MSIE")||~bi.indexOf("Trident/"),kn,An,On,En,Pn,Be="___FONT_AWESOME___",Hr=16,$o="fa",Ho="svg-inline--fa",ht="data-fa-i2svg",Ur="data-fa-pseudo-element",rc="data-fa-pseudo-element-pending",ya="data-prefix",xa="data-icon",xi="fontawesome-i2svg",ac="async",ic=["HTML","HEAD","STYLE","SCRIPT"],Uo=function(){try{return!0}catch{return!1}}(),q="classic",ee="sharp",_a=[q,ee];function cn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var nn=cn((kn={},ae(kn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ae(kn,ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),kn)),rn=cn((An={},ae(An,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(An,ee,{solid:"fass",regular:"fasr",light:"fasl"}),An)),an=cn((On={},ae(On,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(On,ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),On)),oc=cn((En={},ae(En,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(En,ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),En)),sc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Bo="fa-layers-text",lc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,fc=cn((Pn={},ae(Pn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(Pn,ee,{900:"fass",400:"fasr",300:"fasl"}),Pn)),Yo=[1,2,3,4,5,6,7,8,9,10],cc=Yo.concat([11,12,13,14,15,16,17,18,19,20]),uc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},on=new Set;Object.keys(rn[q]).map(on.add.bind(on));Object.keys(rn[ee]).map(on.add.bind(on));var dc=[].concat(_a,fn(on),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY]).concat(Yo.map(function(e){return"".concat(e,"x")})).concat(cc.map(function(e){return"w-".concat(e)})),Kt=et.FontAwesomeConfig||{};function mc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function pc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var hc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hc.forEach(function(e){var t=va(e,2),n=t[0],r=t[1],a=pc(mc(n));a!=null&&(Kt[r]=a)})}var Wo={styleDefault:"solid",familyDefault:"classic",cssPrefix:$o,replacementClass:Ho,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Kt.familyPrefix&&(Kt.cssPrefix=Kt.familyPrefix);var Mt=P(P({},Wo),Kt);Mt.autoReplaceSvg||(Mt.observeMutations=!1);var T={};Object.keys(Wo).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Mt[e]=n,Vt.forEach(function(r){return r(T)})},get:function(){return Mt[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Mt.cssPrefix=t,Vt.forEach(function(n){return n(T)})},get:function(){return Mt.cssPrefix}});et.FontAwesomeConfig=T;var Vt=[];function gc(e){return Vt.push(e),function(){Vt.splice(Vt.indexOf(e),1)}}var Xe=Hr,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vc(e){if(!(!e||!Ve)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var bc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sn(){for(var e=12,t="";e-- >0;)t+=bc[Math.random()*62|0];return t}function Lt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function wa(e){return e.classList?Lt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ko(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ko(e[n]),'" ')},"").trim()}function sr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ka(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function xc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function _c(e){var t=e.transform,n=e.width,r=n===void 0?Hr:n,a=e.height,i=a===void 0?Hr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&zo?l+="translate(".concat(t.x/Xe-r/2,"em, ").concat(t.y/Xe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Xe,"em), calc(-50% + ").concat(t.y/Xe,"em)) "):l+="translate(".concat(t.x/Xe,"em, ").concat(t.y/Xe,"em) "),l+="scale(".concat(t.size/Xe*(t.flipX?-1:1),", ").concat(t.size/Xe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var wc=`:root, :host {
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
}`;function Vo(){var e=$o,t=Ho,n=T.cssPrefix,r=T.replacementClass,a=wc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var _i=!1;function xr(){T.autoAddCss&&!_i&&(vc(Vo()),_i=!0)}var kc={mixout:function(){return{dom:{css:Vo,insertCss:xr}}},hooks:function(){return{beforeDOMElementCreation:function(){xr()},beforeI2svg:function(){xr()}}}},Ye=et||{};Ye[Be]||(Ye[Be]={});Ye[Be].styles||(Ye[Be].styles={});Ye[Be].hooks||(Ye[Be].hooks={});Ye[Be].shims||(Ye[Be].shims=[]);var Pe=Ye[Be],qo=[],Ac=function e(){X.removeEventListener("DOMContentLoaded",e),Kn=1,qo.map(function(t){return t()})},Kn=!1;Ve&&(Kn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Kn||X.addEventListener("DOMContentLoaded",Ac));function Oc(e){Ve&&(Kn?setTimeout(e,0):qo.push(e))}function un(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ko(e):"<".concat(t," ").concat(yc(r),">").concat(i.map(un).join(""),"</").concat(t,">")}function wi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ec=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},_r=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ec(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Pc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Br(e){var t=Pc(e);return t.length===1?t[0].toString(16):null}function Cc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ki(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Yr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ki(t);typeof Pe.hooks.addPack=="function"&&!a?Pe.hooks.addPack(e,ki(t)):Pe.styles[e]=P(P({},Pe.styles[e]||{}),i),e==="fas"&&Yr("fa",t)}var Cn,In,Sn,xt=Pe.styles,Ic=Pe.shims,Sc=(Cn={},ae(Cn,q,Object.values(an[q])),ae(Cn,ee,Object.values(an[ee])),Cn),Aa=null,Xo={},Go={},Jo={},Qo={},Zo={},Tc=(In={},ae(In,q,Object.keys(nn[q])),ae(In,ee,Object.keys(nn[ee])),In);function Mc(e){return~dc.indexOf(e)}function Nc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Mc(a)?a:null}var es=function(){var t=function(i){return _r(xt,function(o,s,l){return o[l]=_r(s,i,{}),o},{})};Xo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Go=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Zo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in xt||T.autoFetchSvg,r=_r(Ic,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Jo=r.names,Qo=r.unicodes,Aa=lr(T.styleDefault,{family:T.familyDefault})};gc(function(e){Aa=lr(e.styleDefault,{family:T.familyDefault})});es();function Oa(e,t){return(Xo[e]||{})[t]}function Fc(e,t){return(Go[e]||{})[t]}function dt(e,t){return(Zo[e]||{})[t]}function ts(e){return Jo[e]||{prefix:null,iconName:null}}function Rc(e){var t=Qo[e],n=Oa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tt(){return Aa}var Ea=function(){return{prefix:null,iconName:null,rest:[]}};function lr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=nn[r][e],i=rn[r][e]||rn[r][a],o=e in Pe.styles?e:null;return i||o||null}var Ai=(Sn={},ae(Sn,q,Object.keys(an[q])),ae(Sn,ee,Object.keys(an[ee])),Sn);function fr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ae(t,q,"".concat(T.cssPrefix,"-").concat(q)),ae(t,ee,"".concat(T.cssPrefix,"-").concat(ee)),t),o=null,s=q;(e.includes(i[q])||e.some(function(c){return Ai[q].includes(c)}))&&(s=q),(e.includes(i[ee])||e.some(function(c){return Ai[ee].includes(c)}))&&(s=ee);var l=e.reduce(function(c,d){var m=Nc(T.cssPrefix,d);if(xt[d]?(d=Sc[s].includes(d)?oc[s][d]:d,o=d,c.prefix=d):Tc[s].indexOf(d)>-1?(o=d,c.prefix=lr(d,{family:s})):m?c.iconName=m:d!==T.replacementClass&&d!==i[q]&&d!==i[ee]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?ts(c.iconName):{},b=dt(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||b||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!xt.far&&xt.fas&&!T.autoFetchSvg&&(c.prefix="fas")}return c},Ea());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ee&&(xt.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=dt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=tt()||"fas"),l}var Lc=function(){function e(){qf(this,e),this.definitions={}}return Xf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=P(P({},n.definitions[s]||{}),o[s]),Yr(s,o[s]);var l=an[q][s];l&&Yr(l,o[s]),es()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Oi=[],_t={},Pt={},Dc=Object.keys(Pt);function jc(e,t){var n=t.mixoutsTo;return Oi=e,_t={},Object.keys(Pt).forEach(function(r){Dc.indexOf(r)===-1&&delete Pt[r]}),Oi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Wn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){_t[o]||(_t[o]=[]),_t[o].push(i[o])})}r.provides&&r.provides(Pt)}),n}function Wr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=_t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function gt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=_t[e]||[];a.forEach(function(i){i.apply(null,n)})}function We(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Pt[e]?Pt[e].apply(null,t):void 0}function Kr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||tt();if(t)return t=dt(n,t)||t,wi(ns.definitions,n,t)||wi(Pe.styles,n,t)}var ns=new Lc,zc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,gt("noAuto")},$c={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ve?(gt("beforeI2svg",t),We("pseudoElements2svg",t),We("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Oc(function(){Uc({autoReplaceSvgRoot:n}),gt("watch",t)})}},Hc={icon:function(t){if(t===null)return null;if(Wn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=lr(t[0]);return{prefix:r,iconName:dt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(sc))){var a=fr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||tt(),iconName:dt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=tt();return{prefix:i,iconName:dt(i,t)||t}}}},ge={noAuto:zc,config:T,dom:$c,parse:Hc,library:ns,findIconDefinition:Kr,toHtml:un},Uc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Pe.styles).length>0||T.autoFetchSvg)&&Ve&&T.autoReplaceSvg&&ge.dom.i2svg({node:r})};function cr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return un(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ve){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Bc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ka(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=sr(P(P({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Yc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},a),{},{id:o}),children:r}]}]}function Pa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,b=v===void 0?!1:v,C=r.found?r:n,k=C.width,M=C.height,A=a==="fak",w=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(be){return m.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(m.classes).join(" "),L={children:[],attributes:P(P({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(M)})},I=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(k/M*16*.0625,"em")}:{};b&&(L.attributes[ht]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(d||sn())},children:[l]}),delete L.attributes.title);var H=P(P({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:P(P({},I),m.styles)}),te=r.found&&n.found?We("generateAbstractMask",H)||{children:[],attributes:{}}:We("generateAbstractIcon",H)||{children:[],attributes:{}},G=te.children,ve=te.attributes;return H.children=G,H.attributes=ve,s?Yc(H):Bc(H)}function Ei(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=P(P(P({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ht]="");var d=P({},o.styles);ka(a)&&(d.transform=_c({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=sr(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Wc(e){var t=e.content,n=e.title,r=e.extra,a=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=sr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var wr=Pe.styles;function Vr(e){var t=e[0],n=e[1],r=e.slice(4),a=va(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(ut.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ut.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ut.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Kc={found:!1,width:512,height:512};function Vc(e,t){!Uo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function qr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=tt()),new Promise(function(r,a){if(We("missingIconAbstract"),n==="fa"){var i=ts(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&wr[t]&&wr[t][e]){var o=wr[t][e];return r(Vr(o))}Vc(e,t),r(P(P({},Kc),{},{icon:T.showMissingIcons&&e?We("missingIconAbstract")||{}:{}}))})}var Pi=function(){},Xr=T.measurePerformance&&wn&&wn.mark&&wn.measure?wn:{mark:Pi,measure:Pi},Bt='FA "6.4.0"',qc=function(t){return Xr.mark("".concat(Bt," ").concat(t," begins")),function(){return rs(t)}},rs=function(t){Xr.mark("".concat(Bt," ").concat(t," ends")),Xr.measure("".concat(Bt," ").concat(t),"".concat(Bt," ").concat(t," begins"),"".concat(Bt," ").concat(t," ends"))},Ca={begin:qc,end:rs},Dn=function(){};function Ci(e){var t=e.getAttribute?e.getAttribute(ht):null;return typeof t=="string"}function Xc(e){var t=e.getAttribute?e.getAttribute(ya):null,n=e.getAttribute?e.getAttribute(xa):null;return t&&n}function Gc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Jc(){if(T.autoReplaceSvg===!0)return jn.replace;var e=jn[T.autoReplaceSvg];return e||jn.replace}function Qc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Zc(e){return X.createElement(e)}function as(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Qc:Zc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(as(o,{ceFn:r}))}),a}function eu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var jn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(as(a),n)}),n.getAttribute(ht)===null&&T.keepOriginalSource){var r=X.createComment(eu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~wa(n).indexOf(T.replacementClass))return jn.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return un(s)}).join(`
`);n.setAttribute(ht,""),n.innerHTML=o}};function Ii(e){e()}function is(e,t){var n=typeof t=="function"?t:Dn;if(e.length===0)n();else{var r=Ii;T.mutateApproach===ac&&(r=et.requestAnimationFrame||Ii),r(function(){var a=Jc(),i=Ca.begin("mutate");e.map(a),i(),n()})}}var Ia=!1;function os(){Ia=!0}function Gr(){Ia=!1}var Vn=null;function Si(e){if(yi&&T.observeMutations){var t=e.treeCallback,n=t===void 0?Dn:t,r=e.nodeCallback,a=r===void 0?Dn:r,i=e.pseudoElementsCallback,o=i===void 0?Dn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Vn=new yi(function(c){if(!Ia){var d=tt();Lt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ci(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ci(m.target)&&~uc.indexOf(m.attributeName))if(m.attributeName==="class"&&Xc(m.target)){var v=fr(wa(m.target)),b=v.prefix,C=v.iconName;m.target.setAttribute(ya,b||d),C&&m.target.setAttribute(xa,C)}else Gc(m.target)&&a(m.target)})}}),Ve&&Vn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function tu(){Vn&&Vn.disconnect()}function nu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ru(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=fr(wa(e));return a.prefix||(a.prefix=tt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Fc(a.prefix,e.innerText)||Oa(a.prefix,Br(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function au(e){var t=Lt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function iu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ru(e),r=n.iconName,a=n.prefix,i=n.rest,o=au(e),s=Wr("parseNodeAttributes",{},e),l=t.styleParser?nu(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ou=Pe.styles;function ss(e){var t=T.autoReplaceSvg==="nest"?Ti(e,{styleParser:!1}):Ti(e);return~t.extra.classes.indexOf(Bo)?We("generateLayersText",e,t):We("generateSvgReplacementMutation",e,t)}var nt=new Set;_a.map(function(e){nt.add("fa-".concat(e))});Object.keys(nn[q]).map(nt.add.bind(nt));Object.keys(nn[ee]).map(nt.add.bind(nt));nt=fn(nt);function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ve)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(xi,"-").concat(m))},a=function(m){return n.remove("".concat(xi,"-").concat(m))},i=T.autoFetchSvg?nt:_a.map(function(d){return"fa-".concat(d)}).concat(Object.keys(ou));i.includes("fa")||i.push("fa");var o=[".".concat(Bo,":not([").concat(ht,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ht,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Lt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ca.begin("onTree"),c=s.reduce(function(d,m){try{var v=ss(m);v&&d.push(v)}catch(b){Uo||b.name==="MissingIcon"&&console.error(b)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){is(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function su(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ss(e).then(function(n){n&&is([n],t)})}function lu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Kr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Kr(a||{})),e(r,P(P({},n),{},{mask:a}))}}var fu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Le:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,b=n.titleId,C=b===void 0?null:b,k=n.classes,M=k===void 0?[]:k,A=n.attributes,w=A===void 0?{}:A,L=n.styles,I=L===void 0?{}:L;if(t){var H=t.prefix,te=t.iconName,G=t.icon;return cr(P({type:"icon"},t),function(){return gt("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(v?w["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(C||sn()):(w["aria-hidden"]="true",w.focusable="false")),Pa({icons:{main:Vr(G),mask:l?Vr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:te,transform:P(P({},Le),a),symbol:o,title:v,maskId:d,titleId:C,extra:{attributes:w,styles:I,classes:M}})})}},cu={mixout:function(){return{icon:lu(fu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Mi,n.nodeCallback=su,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Mi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(b,C){Promise.all([qr(a,s),d.iconName?qr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var M=va(k,2),A=M[0],w=M[1];b([n,Pa({icons:{main:A,mask:w},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(C)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=sr(s);l.length>0&&(a.style=l);var c;return ka(o)&&(c=We("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},uu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return cr({type:"layer"},function(){gt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(fn(i)).join(" ")},children:o}]})}}}},du={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return cr({type:"counter",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),Wc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(fn(s))}})})}}}},mu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Le:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,b=v===void 0?{}:v;return cr({type:"text",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),Ei({content:n,transform:P(P({},Le),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(T.cssPrefix,"-layers-text")].concat(fn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(zo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ei({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},pu=new RegExp('"',"ug"),Ni=[1105920,1112319];function hu(e){var t=e.replace(pu,""),n=Cc(t,0),r=n>=Ni[0]&&n<=Ni[1],a=t.length===2?t[0]===t[1]:!1;return{value:Br(a?t[0]:t),isSecondary:r||a}}function Fi(e,t){var n="".concat(rc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Lt(e.children),o=i.filter(function(G){return G.getAttribute(Ur)===t})[0],s=et.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(lc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?ee:q,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?rn[v][l[2].toLowerCase()]:fc[v][c],C=hu(m),k=C.value,M=C.isSecondary,A=l[0].startsWith("FontAwesome"),w=Oa(b,k),L=w;if(A){var I=Rc(k);I.iconName&&I.prefix&&(w=I.iconName,b=I.prefix)}if(w&&!M&&(!o||o.getAttribute(ya)!==b||o.getAttribute(xa)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var H=iu(),te=H.extra;te.attributes[Ur]=t,qr(w,b).then(function(G){var ve=Pa(P(P({},H),{},{icons:{main:G,mask:Ea()},prefix:b,iconName:L,extra:te,watchable:!0})),be=X.createElement("svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=ve.map(function(De){return un(De)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function gu(e){return Promise.all([Fi(e,"::before"),Fi(e,"::after")])}function vu(e){return e.parentNode!==document.head&&!~ic.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ur)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ri(e){if(Ve)return new Promise(function(t,n){var r=Lt(e.querySelectorAll("*")).filter(vu).map(gu),a=Ca.begin("searchPseudoElements");os(),Promise.all(r).then(function(){a(),Gr(),t()}).catch(function(){a(),Gr(),n()})})}var bu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ri,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&Ri(a)}}},Li=!1,yu={mixout:function(){return{dom:{unwatch:function(){os(),Li=!0}}}},hooks:function(){return{bootstrap:function(){Si(Wr("mutationObserverCallbacks",{}))},noAuto:function(){tu()},watch:function(n){var r=n.observeMutationsRoot;Li?Gr():Si(Wr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Di=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},xu={mixout:function(){return{parse:{transform:function(n){return Di(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Di(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:v};return{tag:"g",attributes:P({},b.outer),children:[{tag:"g",attributes:P({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),b.path)}]}]}}}},kr={x:0,y:0,width:"100%",height:"100%"};function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function _u(e){return e.tag==="g"?e.children:[e]}var wu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?fr(a.split(" ").map(function(o){return o.trim()})):Ea();return i.prefix||(i.prefix=tt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,b=xc({transform:l,containerWidth:m,iconWidth:c}),C={tag:"rect",attributes:P(P({},kr),{},{fill:"white"})},k=d.children?{children:d.children.map(ji)}:{},M={tag:"g",attributes:P({},b.inner),children:[ji(P({tag:d.tag,attributes:P(P({},d.attributes),b.path)},k))]},A={tag:"g",attributes:P({},b.outer),children:[M]},w="mask-".concat(s||sn()),L="clip-".concat(s||sn()),I={tag:"mask",attributes:P(P({},kr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,A]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:_u(v)},I]};return r.push(H,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(w,")")},kr)}),{children:r,attributes:a}}}},ku={provides:function(t){var n=!1;et.matchMedia&&(n=et.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:P(P({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:P(P({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Au={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ou=[kc,cu,uu,du,mu,bu,yu,xu,wu,ku,Au];jc(Ou,{mixoutsTo:ge});ge.noAuto;ge.config;var ls=ge.library;ge.dom;var Jr=ge.parse;ge.findIconDefinition;ge.toHtml;var Eu=ge.icon;ge.layer;ge.text;ge.counter;function zi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zi(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qn(e){"@babel/helpers - typeof";return qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qn(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Cu(e,t){if(e==null)return{};var n=Pu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fs={exports:{}};(function(e){(function(t){var n=function(A,w,L){if(!c(w)||m(w)||v(w)||b(w)||l(w))return w;var I,H=0,te=0;if(d(w))for(I=[],te=w.length;H<te;H++)I.push(n(A,w[H],L));else{I={};for(var G in w)Object.prototype.hasOwnProperty.call(w,G)&&(I[A(G,L)]=n(A,w[G],L))}return I},r=function(A,w){w=w||{};var L=w.separator||"_",I=w.split||/(?=[A-Z])/;return A.split(I).join(L)},a=function(A){return C(A)?A:(A=A.replace(/[\-_\s]+(.)?/g,function(w,L){return L?L.toUpperCase():""}),A.substr(0,1).toLowerCase()+A.substr(1))},i=function(A){var w=a(A);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(A,w){return r(A,w).toLowerCase()},s=Object.prototype.toString,l=function(A){return typeof A=="function"},c=function(A){return A===Object(A)},d=function(A){return s.call(A)=="[object Array]"},m=function(A){return s.call(A)=="[object Date]"},v=function(A){return s.call(A)=="[object RegExp]"},b=function(A){return s.call(A)=="[object Boolean]"},C=function(A){return A=A-0,A===A},k=function(A,w){var L=w&&"process"in w?w.process:w;return typeof L!="function"?A:function(I,H){return L(I,A,H)}},M={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(A,w){return n(k(a,w),A)},decamelizeKeys:function(A,w){return n(k(o,w),A,w)},pascalizeKeys:function(A,w){return n(k(i,w),A)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(Iu)})(fs);var Su=fs.exports,Tu=["class","style"];function Mu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Su.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Nu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function cs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return cs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Nu(d);break;case"style":l.style=Mu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Cu(n,Tu);return bf(e.tag,He(He(He({},t),{},{class:a.class,style:He(He({},a.style),o)},a.attrs),s),r)}var us=!1;try{us=!0}catch{}function Fu(){if(!us&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ar(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}function Ru(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},de(t,"fa-".concat(e.size),e.size!==null),de(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),de(t,"fa-pull-".concat(e.pull),e.pull!==null),de(t,"fa-swap-opacity",e.swapOpacity),de(t,"fa-bounce",e.bounce),de(t,"fa-shake",e.shake),de(t,"fa-beat",e.beat),de(t,"fa-fade",e.fade),de(t,"fa-beat-fade",e.beatFade),de(t,"fa-flash",e.flash),de(t,"fa-spin-pulse",e.spinPulse),de(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function $i(e){if(e&&qn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Jr.icon)return Jr.icon(e);if(e===null)return null;if(qn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Tn=El({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=st(function(){return $i(t.icon)}),i=st(function(){return Ar("classes",Ru(t))}),o=st(function(){return Ar("transform",typeof t.transform=="string"?Jr.transform(t.transform):t.transform)}),s=st(function(){return Ar("mask",$i(t.mask))}),l=st(function(){return Eu(a.value,He(He(He(He({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Et(l,function(d){if(!d)return Fu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=st(function(){return l.value?cs(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Lu={prefix:"fas",iconName:"shuffle",icon:[512,512,[128256,"random"],"f074","M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"]},Du={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},ju={prefix:"fas",iconName:"question",icon:[320,512,[10067,10068,61736],"3f","M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},zu={prefix:"fas",iconName:"eraser",icon:[576,512,[],"f12d","M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"]},$u={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]};const Hu={class:"flex justify-between items-center py-5 bg-neutral-800 my-2 px-2"},Uu=xe("h1",{class:"text-2xl"},"Conway's Game of Life",-1),Bu=[Uu],Yu={__name:"Navbar",setup(e){return ls.add(ju),(t,n)=>(ke(),Ne("nav",Hu,Bu))}},Wu={class:"w-fit m-auto"},Ku={class:"bg-neutral-50 rounded"},Vu=["onClick","onMouseover"],qu={id:"controls",class:"grid grid-flow-col gap-10 mt-4 grid-cols-6"},Q=50,Z=100,Xu={__name:"Game",setup(e){ls.add($u,Du,Lu,zu);const t=(b,C)=>new Array(b).fill().map(()=>Array(C).fill(0)),n=(b,C,k)=>{(b.buttons==1||b.buttons==3)&&(s.value[C][k]^=1)},r=()=>{s.value=t(Q,Z),l.value=!1},a=(b,C,k)=>{let M=0;return M+=b[(C+Q)%Q][(k+1+Z)%Z],M+=b[(C+Q)%Q][(k-1+Z)%Z],M+=b[(C+1+Q)%Q][(k+1+Z)%Z],M+=b[(C+1+Q)%Q][(k-1+Z)%Z],M+=b[(C+1+Q)%Q][(k+Z)%Z],M+=b[(C-1+Q)%Q][(k+1+Z)%Z],M+=b[(C-1+Q)%Q][(k-1+Z)%Z],M+=b[(C-1+Q)%Q][(k+Z)%Z],M},i=()=>{let b=t(Q,Z);b=b.map(C=>(C=C.map(()=>Math.round(Math.random())),C)),s.value=b};let o=t(Q,Z),s=Sr(o),l=Sr(!1);function c(b){return new Promise(C=>setTimeout(C,b))}const d=()=>{l.value=!l.value};Et(l,async()=>{for(;l.value!=!1;)await c(2),s.value=v(s.value)});const v=b=>{let C=t(Q,Z);for(let k=0;k<Q;k++)for(let M=0;M<Z;M++){const A=a(b,k,M),w=b[k][M];w==0&&A==3?C[k][M]=1:w==1&&(A<2||A>3)?C[k][M]=0:C[k][M]=w}return C};return(b,C)=>(ke(),Ne("section",Wu,[ie(Yu),xe("div",Ku,[(ke(!0),Ne(ye,null,Mr(ze(s),(k,M)=>(ke(),Ne("div",{key:M,class:"flex"},[(ke(!0),Ne(ye,null,Mr(k,(A,w)=>(ke(),Ne("div",{onClick:L=>ze(s)[M][w]^=1,onMouseover:L=>n(L,M,w),key:w,class:Qn(["cell border border-neutral-200",{"bg-neutral-900":ze(s)[M][w]}])},null,42,Vu))),128))]))),128))]),xe("div",qu,[ze(l)?(ke(),Ne("button",{key:1,onClick:d},[Ut("Pause "),ie(ze(Tn),{icon:["fas","pause"]})])):(ke(),Ne("button",{key:0,onClick:d},[Ut("Start "),ie(ze(Tn),{icon:["fas","play"]})])),xe("button",{onClick:i},[Ut("Randomize "),ie(ze(Tn),{icon:["fas","shuffle"]})]),xe("button",{onClick:r},[Ut("Clear Grid "),ie(ze(Tn),{icon:["fas","eraser"]})]),ie(Vf,{createMatrix:t,cols:Q,rows:Z,onStructure:C[0]||(C[0]=k=>se(s)?s.value=k.matrix:s=k.matrix)})])]))}};const Gu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Ju=Gu(Xu,[["__scopeId","data-v-238a1e25"]]),Qu={__name:"App",setup(e){return(t,n)=>(ke(),of(Ju))}};Hf(Qu).mount("#app");
