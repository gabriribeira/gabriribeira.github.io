function y(){}const A=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function P(){return Object.create(null)}function E(t){t.forEach(j)}function q(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function U(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function B(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const r of n)r(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function C(t,n,e){t.$$.on_destroy.push(O(n,e))}function D(t,n,e,r){if(t){const o=m(t,n,e,r);return t[0](o)}}function m(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],d=Math.max(n.dirty.length,o.length);for(let u=0;u<d;u+=1)a[u]=n.dirty[u]|o[u];return a}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,a){if(o){const d=m(n,e,r,a);t.p(d,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t){return t&&q(t.destroy)?t.destroy:y}function K(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let f;function _(t){f=t}function x(){if(!f)throw new Error("Function called outside component initialization");return f}function L(t){x().$$.on_mount.push(t)}function N(t){x().$$.after_update.push(t)}const i=[],g=[];let s=[];const b=[],k=Promise.resolve();let p=!1;function v(){p||(p=!0,k.then(F))}function Q(){return v(),k}function z(t){s.push(t)}const h=new Set;let c=0;function F(){if(c!==0)return;const t=f;do{try{for(;c<i.length;){const n=i[c];c++,_(n),M(n.$$)}}catch(n){throw i.length=0,c=0,n}for(_(null),i.length=0,c=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(i.length);for(;b.length;)b.pop()();p=!1,h.clear(),_(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function R(t){const n=[],e=[];s.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),s=n}export{v as A,N as a,g as b,D as c,G as d,C as e,K as f,I as g,U as h,J as i,q as j,z as k,A as l,P as m,y as n,L as o,F as p,B as q,E as r,S as s,Q as t,H as u,R as v,f as w,_ as x,j as y,i as z};