import"./assets/styles-Bmpgx006.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector("form"),l=document.querySelector('[type="number"]');document.querySelector('[type="submit"]');s.addEventListener("submit",c=>{c.preventDefault();const t=parseInt(l.value,10),r=document.querySelector('[name="state"]:checked');return s.reset(),new Promise((e,i)=>{setTimeout(()=>{r.value==="fulfilled"||!r?e(t):r.value==="rejected"&&i(t)},t)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,backgroundColor:"#4caf50",progressBarColor:"#388e3c",messageColor:"white"})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,backgroundColor:"#f44336",progressBarColor:"#d32f2f",position:"topRight",messageColor:"white"})})});
//# sourceMappingURL=2-snackbar.js.map
