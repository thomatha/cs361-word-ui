var L=Object.defineProperty,N=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var b=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,w=(t,e)=>{for(var o in e||(e={}))g.call(e,o)&&b(t,o,e[o]);if(p)for(var o of p(e))y.call(e,o)&&b(t,o,e[o]);return t},x=(t,e)=>N(t,$(e));var k=(t,e)=>{var o={};for(var r in t)g.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&p)for(var r of p(t))e.indexOf(r)<0&&y.call(t,r)&&(o[r]=t[r]);return o};import{j as s,r as l,a as h,M as B,b as O,c as R,B as j,R as C}from"./vendor.c94a33ce.js";const E=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};E();function M({className:t,letter:e}){let o;return e===void 0?o="rgb(255, 255, 240)":e.hint==="not-in"?o="grey":e.hint==="not-in-position"?o="rgb(220, 196, 99)":o="rgb(73, 130, 73)",s("input",{style:{backgroundColor:o,color:"white"},type:"text",maxLength:"1",id:"letterTile",defaultValue:e?e.letter:"",className:t})}function P({word:t={}}){const e=t.letters.every(n=>n&&n.hint==="in-position"),o=e?"animate__animated animate__bounce":void 0,r=!e&&t.letters.every(n=>!!n)?"animate__animated animate__flipInX":"";return s("div",{className:o,children:t.letters.map((n,i)=>s(M,{className:`${r} animate__delay-${i}s`,letter:n},i))})}function A({guesses:t=[]}){return s("div",{children:t.map((e,o)=>s(P,{word:e},o))})}function H(o){var r=o,{onSubmit:t}=r,e=k(r,["onSubmit"]);const[n,i]=l.exports.useState("");function a(d){d.key==="Enter"&&n.length===5&&(t(n),i(""))}return s("div",{children:s("input",x(w({},e),{autoFocus:!0,value:n,onChange:d=>i(d.target.value),type:"text",maxLength:"5",id:"userInput",onKeyPress:a}))})}function T({isOpen:t,toggle:e}){return h(B,{isOpen:t,toggle:e,children:[s(O,{toggle:e,children:"How to Play"}),s(R,{children:s("p",{children:"Guess the daily 5-letter word in 6 tries. Type your word and press ENTER to submit. Hints will be given after each guess. Your guess will be shown as colored letter tiles. Grey means the letter is not in the word at all. Yellow means the letter is in the wrong spot. Green means the letter is in the right spot."})})]})}function W(){const[t,e]=l.exports.useState([{letters:[void 0,void 0,void 0,void 0,void 0]},{letters:[void 0,void 0,void 0,void 0,void 0]},{letters:[void 0,void 0,void 0,void 0,void 0]},{letters:[void 0,void 0,void 0,void 0,void 0]},{letters:[void 0,void 0,void 0,void 0,void 0]},{letters:[void 0,void 0,void 0,void 0,void 0]}]),[o,r]=l.exports.useState(0),[n,i]=l.exports.useState(!1),[a,d]=l.exports.useState(),[S,f]=l.exports.useState(!1);async function _(u){const c=await(await fetch("https://word-guess-api.herokuapp.com/?guess="+u)).json();if(c.error)alert(c.error);else{r(o+1);const m=[...t];m[o]=c,e(m),c.letters.every(G=>G.hint==="in-position")&&(i(!0),I())}}async function I(){const v=await(await fetch("https://unsplash-amazable.herokuapp.com/search?q=confetti")).json();d(v.imageUrl)}return h("div",{children:[s("style",{children:`
      html, body{
        height: 100%;
      }
      body{
        background-image: url(${a});
        background-size: cover;
        background-position: center center;
      }
      `}),h("div",{className:"App",children:[s("h1",{children:"WORD GUESS"}),s("hr",{}),s(j,{id:"rules",onClick:()=>f(!0),children:"How to Play"}),s(T,{isOpen:S,toggle:()=>f(!1)}),s(A,{guesses:t}),s(H,{disabled:n||o===6,onSubmit:u=>_(u)}),n&&s("div",{id:"win",children:s("h3",{children:"Congratulations, well done!"})})]})]})}C.render(s(W,{}),document.getElementById("root"));
