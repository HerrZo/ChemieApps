(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();var kl=Object.defineProperty,Hl=(r,e,t)=>e in r?kl(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ne=(r,e,t)=>Hl(r,typeof e!="symbol"?e+"":e,t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const at={H:{symbol:"H",name:"Wasserstoff",z:1,period:1,group:1,col:1,valence:1,en:2.2,mass:1.008,cat:"nonmetal"},He:{symbol:"He",name:"Helium",z:2,period:1,group:18,col:8,valence:2,en:null,mass:4.003,cat:"noble"},Li:{symbol:"Li",name:"Lithium",z:3,period:2,group:1,col:1,valence:1,en:.98,mass:6.94,cat:"metal"},Be:{symbol:"Be",name:"Beryllium",z:4,period:2,group:2,col:2,valence:2,en:1.57,mass:9.012,cat:"metal"},B:{symbol:"B",name:"Bor",z:5,period:2,group:13,col:3,valence:3,en:2.04,mass:10.81,cat:"semimetal"},C:{symbol:"C",name:"Kohlenstoff",z:6,period:2,group:14,col:4,valence:4,en:2.55,mass:12.011,cat:"nonmetal"},N:{symbol:"N",name:"Stickstoff",z:7,period:2,group:15,col:5,valence:5,en:3.04,mass:14.007,cat:"nonmetal"},O:{symbol:"O",name:"Sauerstoff",z:8,period:2,group:16,col:6,valence:6,en:3.44,mass:15.999,cat:"nonmetal"},F:{symbol:"F",name:"Fluor",z:9,period:2,group:17,col:7,valence:7,en:3.98,mass:18.998,cat:"nonmetal"},Ne:{symbol:"Ne",name:"Neon",z:10,period:2,group:18,col:8,valence:8,en:null,mass:20.18,cat:"noble"},Na:{symbol:"Na",name:"Natrium",z:11,period:3,group:1,col:1,valence:1,en:.93,mass:22.99,cat:"metal"},Mg:{symbol:"Mg",name:"Magnesium",z:12,period:3,group:2,col:2,valence:2,en:1.31,mass:24.305,cat:"metal"},Al:{symbol:"Al",name:"Aluminium",z:13,period:3,group:13,col:3,valence:3,en:1.61,mass:26.982,cat:"metal"},Si:{symbol:"Si",name:"Silicium",z:14,period:3,group:14,col:4,valence:4,en:1.9,mass:28.085,cat:"semimetal"},P:{symbol:"P",name:"Phosphor",z:15,period:3,group:15,col:5,valence:5,en:2.19,mass:30.974,cat:"nonmetal"},S:{symbol:"S",name:"Schwefel",z:16,period:3,group:16,col:6,valence:6,en:2.58,mass:32.06,cat:"nonmetal"},Cl:{symbol:"Cl",name:"Chlor",z:17,period:3,group:17,col:7,valence:7,en:3.16,mass:35.45,cat:"nonmetal"},Ar:{symbol:"Ar",name:"Argon",z:18,period:3,group:18,col:8,valence:8,en:null,mass:39.948,cat:"noble"},K:{symbol:"K",name:"Kalium",z:19,period:4,group:1,col:1,valence:1,en:.82,mass:39.098,cat:"metal"},Ca:{symbol:"Ca",name:"Calcium",z:20,period:4,group:2,col:2,valence:2,en:1,mass:40.078,cat:"metal"},Ga:{symbol:"Ga",name:"Gallium",z:31,period:4,group:13,col:3,valence:3,en:1.81,mass:69.723,cat:"metal"},Ge:{symbol:"Ge",name:"Germanium",z:32,period:4,group:14,col:4,valence:4,en:2.01,mass:72.63,cat:"semimetal"},As:{symbol:"As",name:"Arsen",z:33,period:4,group:15,col:5,valence:5,en:2.18,mass:74.922,cat:"semimetal"},Se:{symbol:"Se",name:"Selen",z:34,period:4,group:16,col:6,valence:6,en:2.55,mass:78.971,cat:"nonmetal"},Br:{symbol:"Br",name:"Brom",z:35,period:4,group:17,col:7,valence:7,en:2.96,mass:79.904,cat:"nonmetal"},Kr:{symbol:"Kr",name:"Krypton",z:36,period:4,group:18,col:8,valence:8,en:3,mass:83.798,cat:"noble"}},Gl=Object.values(at);function Vl(r){if(r==="H")return[1];if(r==="He")return[2];const e=at[r].valence;if(e<=4)return Array(e).fill(1);const t=e-4,i=8-e;return[...Array(t).fill(2),...Array(i).fill(1)]}function Ue(r=0,e=0,t=0){return{x:r,y:e,z:t}}function ls(){return{atoms:new Map,clouds:new Map}}function qo(r,e,t="a"){const i=`${t}_${Math.random().toString(36).substring(2,9)}`,n=at[r].period>=2,a={id:i,element:r,position:{...e},innerShell:n,isProton:!1},s=Vl(r).map((o,l)=>({id:`c_${i}_${l}`,owners:[i],electrons:o,proton:!1}));return{atom:a,clouds:s}}function Yt(r,e){const t=[];for(const i of r.clouds.values())i.owners.includes(e)&&t.push(i);return t}function Wl(r,e){const t=r.atoms.get(e);if(!t||t.isProton)return 0;const i=t.element==="H"||t.element==="He"?1:4,n=Yt(r,e);return Math.max(0,i-n.length)}function Xl(r){let e=0,t=0,i=0,n=0;for(const a of r.atoms.values())a.innerShell&&n++,e+=Wl(r,a.id);for(const a of r.clouds.values())a.electrons===1?t++:a.electrons===2&&i++;return{freeSlots:e,singleClouds:t,doubleClouds:i,innerShells:n}}function ql(r){let e=0;for(const t of r.atoms.values())e+=at[t.element].mass;return e}function jo(r){let e=0,t=0;for(const i of r.atoms.values())i.isProton?e+=1:e+=at[i.element].valence;for(const i of r.clouds.values())t+=i.electrons;return e-t}function Cn(r,e){var t;const i=r.atoms.get(e);if(!i)return 0;if(i.isProton)return 1;const n=((t=at[i.element])==null?void 0:t.valence)||0;let a=0,s=0;for(const o of r.clouds.values())o.owners.length===1&&o.owners[0]===e?a+=o.electrons:o.owners.length===2&&o.owners.includes(e)&&(s+=1);return n-a-s}function Yo(r){if(r.atoms.size===0)return"–";const e={};for(const o of r.atoms.values())e[o.element]=(e[o.element]||0)+1;const t={0:"₀",1:"₁",2:"₂",3:"₃",4:"₄",5:"₅",6:"₆",7:"₇",8:"₈",9:"₉"},i=o=>o<=1?"":o.toString().split("").map(l=>t[l]||l).join(""),n=Object.entries(e).sort(([o],[l])=>o.localeCompare(l)).map(([o,l])=>`${o}${l}`).join("");let a="";if(n==="H1O1")a="OH";else if(n==="H3N1")a="NH₃";else if(n==="H4N1")a="NH₄";else if(n==="H2O1")a="H₂O";else if(n==="H3O1")a="H₃O";else{const o=Object.keys(e);o.sort((l,c)=>l==="C"&&c!=="C"?-1:c==="C"&&l!=="C"?1:l==="H"&&c!=="H"&&o.includes("C")?-1:c==="H"&&l!=="H"&&o.includes("C")?1:l.localeCompare(c)),a=o.map(l=>`${l}${i(e[l])}`).join("")}const s=jo(r);return s>0?a+=s===1?"⁺":`${s}⁺`:s<0&&(a+=s===-1?"⁻":`${Math.abs(s)}⁻`),a}function gr(r){const e=new Map;for(const i of r.clouds.values())if(i.owners.length===2){const[n,a]=i.owners,s=n<a?`${n}_${a}`:`${a}_${n}`;e.has(s)||e.set(s,{atomA:n,atomB:a,clouds:[]}),e.get(s).clouds.push(i.id)}const t=[];for(const i of e.values())t.push({atomA:i.atomA,atomB:i.atomB,order:i.clouds.length,cloudIds:i.clouds});return t}const jl=[{a:"Li",b:"Li",kind:"noMolecule"},{a:"Be",b:"Be",kind:"noMolecule"},{a:"Na",b:"Na",kind:"noMolecule"},{a:"K",b:"K",kind:"noMolecule"},{a:"Mg",b:"Mg",kind:"metallic"},{a:"Al",b:"Al",kind:"metallic"},{a:"Ca",b:"Ca",kind:"metallic"},{a:"Li",b:"Be",kind:"alloy"},{a:"Li",b:"Na",kind:"alloy"},{a:"Li",b:"Mg",kind:"alloy"},{a:"Li",b:"K",kind:"alloy"},{a:"Li",b:"Ca",kind:"alloy"},{a:"Be",b:"Mg",kind:"alloy"},{a:"Be",b:"Al",kind:"alloy"},{a:"Be",b:"Si",kind:"alloy"},{a:"Be",b:"K",kind:"alloy"},{a:"Be",b:"Ca",kind:"alloy"},{a:"Be",b:"Ga",kind:"alloy"},{a:"Be",b:"Ge",kind:"alloy"},{a:"Be",b:"As",kind:"alloy"},{a:"B",b:"Ge",kind:"alloy"},{a:"Al",b:"Na",kind:"alloy"},{a:"Al",b:"Mg",kind:"alloy"},{a:"Al",b:"Si",kind:"alloy"},{a:"Al",b:"K",kind:"alloy"},{a:"Al",b:"Ga",kind:"alloy"},{a:"Al",b:"Ge",kind:"alloy"},{a:"Na",b:"K",kind:"alloy"},{a:"Na",b:"Ca",kind:"alloy"},{a:"Mg",b:"Ca",kind:"alloy"},{a:"Si",b:"P",kind:"alloy"},{a:"Si",b:"Ga",kind:"alloy"},{a:"K",b:"Ca",kind:"alloy"},{a:"Ga",b:"Ge",kind:"alloy"},{a:"Be",b:"Na",kind:"unknown"},{a:"Na",b:"Mg",kind:"unknown"},{a:"Mg",b:"K",kind:"unknown"},{a:"N",b:"As",kind:"unknown"},{a:"Be",b:"N",kind:"unknownDouble",minOrder:2},{a:"Be",b:"O",kind:"unknownDouble",minOrder:2},{a:"Be",b:"P",kind:"unknownDouble",minOrder:2},{a:"Be",b:"S",kind:"unknownDouble",minOrder:2},{a:"Be",b:"Se",kind:"unknownDouble",minOrder:2},{a:"Be",b:"C",kind:"specialDouble",minOrder:2},{a:"Be",b:"B",kind:"special"},{a:"Al",b:"B",kind:"special"},{a:"B",b:"Ga",kind:"special"},{a:"B",b:"As",kind:"special"},{a:"N",b:"Ga",kind:"special"},{a:"N",b:"Ge",kind:"special"},{a:"Na",b:"Ga",kind:"special"},{a:"Mg",b:"Ga",kind:"special"},{a:"Al",b:"Ca",kind:"special"},{a:"Al",b:"As",kind:"special"},{a:"Ga",b:"P",kind:"special"},{a:"Ge",b:"P",kind:"special"},{a:"P",b:"As",kind:"special"},{a:"K",b:"Ga",kind:"special"},{a:"Ca",b:"Ga",kind:"special"},{a:"Ga",b:"As",kind:"special"},{a:"Ge",b:"As",kind:"special"},{a:"B",b:"Na",kind:"complex"},{a:"B",b:"K",kind:"complex"}];function Yl(r){const e=at[r.a].name,t=at[r.b].name;switch(r.kind){case"noMolecule":return`${e} bildet unter Normalbedingungen keine Moleküle aus zwei Atomen, sondern ein Metallgitter.`;case"metallic":return`Zwischen ${e}-Atomen liegt eine Metallbindung vor, keine Elektronenpaarbindung.`;case"alloy":return`${e} und ${t} bilden miteinander nur Legierungen, keine Moleküle.`;case"unknown":return`Eine Verbindung aus ${e} und ${t} ist in dieser Form nicht bekannt.`;case"unknownDouble":return`Eine Doppelbindung zwischen ${e} und ${t} ist nicht bekannt.`;case"special":return`${e} und ${t} bilden besondere Strukturen, die sich mit dem Kugelwolkenmodell nicht darstellen lassen.`;case"specialDouble":return`Eine Doppelbindung zwischen ${e} und ${t} ist ein Sonderfall der Forschung und hier nicht darstellbar.`;case"complex":return`${e} und ${t} bilden Komplexverbindungen, die über das Kugelwolkenmodell hinausgehen.`}}function Kl(r,e,t){if(e===t)return{valid:!1,message:"Wähle zwei verschiedene Atome aus.",level:"info"};const i=r.atoms.get(e),n=r.atoms.get(t);if(!i||!n)return{valid:!1,message:"Atom nicht gefunden.",level:"blocked"};if(at[i.element].cat==="noble")return{valid:!1,message:`${at[i.element].name} ist ein Edelgas: Alle Kugelwolken sind voll besetzt, daher entstehen keine Bindungen.`,level:"blocked"};if(at[n.element].cat==="noble")return{valid:!1,message:`${at[n.element].name} ist ein Edelgas: Alle Kugelwolken sind voll besetzt, daher entstehen keine Bindungen.`,level:"blocked"};const a=gr(r).find(h=>h.atomA===e&&h.atomB===t||h.atomA===t&&h.atomB===e),s=(a?a.order:0)+1;if(s>3)return{valid:!1,message:"Zwischen zwei Atomen sind höchstens drei Bindungswolken möglich (Dreifachbindung).",level:"blocked"};const o=Yt(r,e).filter(h=>h.owners.length===1&&h.electrons===1),l=Yt(r,t).filter(h=>h.owners.length===1&&h.electrons===1);if(o.length===0)return{valid:!1,message:`${at[i.element].name} hat keine einfach besetzte Kugelwolke mehr frei.`,level:"blocked"};if(l.length===0)return{valid:!1,message:`${at[n.element].name} hat keine einfach besetzte Kugelwolke mehr frei.`,level:"blocked"};for(const h of jl)if(h.a===i.element&&h.b===n.element||h.a===n.element&&h.b===i.element){const p=h.minOrder??1;if(s>=p)return{valid:!1,message:Yl(h),level:"blocked"}}const c=at[i.element].en,u=at[n.element].en;if(c!==null&&u!==null){const h=Math.abs(c-u);if(h>1.7)return{valid:!0,message:`Hinweis: Die Elektronegativitätsdifferenz beträgt ΔEN = ${h.toLocaleString("de-DE",{maximumFractionDigits:2})}. Hier liegt vorwiegend ionischer Charakter vor.`,level:"warning"}}return{valid:!0}}class Zl{constructor(){ne(this,"undoStack",[]),ne(this,"redoStack",[]),ne(this,"maxStackSize",50)}execute(e,t){const i=e.execute(t);return i.success&&(this.undoStack.push(e),this.redoStack=[],this.undoStack.length>this.maxStackSize&&this.undoStack.shift()),i}undo(e){const t=this.undoStack.pop();return t?(t.undo(e),this.redoStack.push(t),{success:!0,message:`Rückgängig: ${t.description}`}):{success:!1,message:"Kein weiterer Schritt zum Rückgängigmachen."}}redo(e){const t=this.redoStack.pop();return t?(t.execute(e).success&&this.undoStack.push(t),{success:!0,message:`Wiederholt: ${t.description}`}):{success:!1,message:"Kein weiterer Schritt zum Wiederholen."}}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}clear(){this.undoStack=[],this.redoStack=[]}}class $l{constructor(e,t){ne(this,"description"),ne(this,"createdAtom"),ne(this,"createdClouds",[]),this.element=e,this.targetPos=t,this.description=`Atom ${e} hinzugefügt`}execute(e){if(e.atoms.size>=120)return{success:!1,message:"Die Szene ist auf 120 Atome begrenzt.",level:"blocked"};let t=this.targetPos?{...this.targetPos}:this.findFreePosition(e);const{atom:i,clouds:n}=qo(this.element,t);this.createdAtom=i,this.createdClouds=n,e.atoms.set(i.id,i);for(const a of n)e.clouds.set(a.id,a);return{success:!0,message:`${this.element} platziert.`,level:"info"}}undo(e){if(this.createdAtom){e.atoms.delete(this.createdAtom.id);for(const t of this.createdClouds)e.clouds.delete(t.id)}}findFreePosition(e){if(e.atoms.size===0)return Ue(0,0,0);let t=2.4;for(let i=0;i<Math.PI*6;i+=.8){const n=Math.cos(i)*t,a=Math.sin(i*2)*.4,s=Math.sin(i)*t;let o=!1;for(const l of e.atoms.values()){const c=l.position.x-n,u=l.position.y-a,h=l.position.z-s;if(Math.sqrt(c*c+u*u+h*h)<2){o=!0;break}}if(!o)return Ue(n,a,s);t+=.3}return Ue(e.atoms.size*2.2,0,0)}}class Jl{constructor(e,t){ne(this,"description","Kovalente Bindung geknüpft"),ne(this,"removedCloudA"),ne(this,"removedCloudB"),ne(this,"createdBondCloud"),ne(this,"warningMsg"),this.atomAId=e,this.atomBId=t}execute(e){const t=Kl(e,this.atomAId,this.atomBId);if(!t.valid)return{success:!1,message:t.message,level:t.level};this.warningMsg=t.message;const i=Yt(e,this.atomAId).filter(a=>a.owners.length===1&&a.electrons===1),n=Yt(e,this.atomBId).filter(a=>a.owners.length===1&&a.electrons===1);return i.length===0||n.length===0?{success:!1,message:"Keine einfach besetzten Kugelwolken frei.",level:"blocked"}:(this.removedCloudA=i[0],this.removedCloudB=n[0],e.clouds.delete(this.removedCloudA.id),e.clouds.delete(this.removedCloudB.id),this.createdBondCloud={id:`bond_${this.atomAId}_${this.atomBId}_${Math.random().toString(36).substring(2,7)}`,owners:[this.atomAId,this.atomBId],electrons:2,proton:!1},e.clouds.set(this.createdBondCloud.id,this.createdBondCloud),{success:!0,message:this.warningMsg||"Bindung erfolgreich geknüpft.",level:this.warningMsg?"warning":"info"})}undo(e){this.createdBondCloud&&e.clouds.delete(this.createdBondCloud.id),this.removedCloudA&&e.clouds.set(this.removedCloudA.id,this.removedCloudA),this.removedCloudB&&e.clouds.set(this.removedCloudB.id,this.removedCloudB)}}class Ls{constructor(e,t){ne(this,"description","Proton angelagert (Säure-Base)"),ne(this,"targetCloud"),ne(this,"createdProtonAtom"),this.atomId=e,this.cloudId=t}execute(e){const t=Yt(e,this.atomId).filter(a=>a.owners.length===1&&a.electrons===2&&!a.proton);if(t.length===0)return{success:!1,message:"Ein Proton kann nur an eine doppelt besetzte, freie Kugelwolke angelagert werden.",level:"blocked"};const i=this.cloudId&&e.clouds.get(this.cloudId)||t[0];this.targetCloud=i,i.proton=!0;const n=e.atoms.get(this.atomId);return this.createdProtonAtom={id:`p_${Math.random().toString(36).substring(2,8)}`,element:"H",position:{x:n.position.x+.8,y:n.position.y+.8,z:n.position.z},innerShell:!1,isProton:!0},e.atoms.set(this.createdProtonAtom.id,this.createdProtonAtom),{success:!0,message:"Proton (H⁺) erfolgreich an freies Elektronenpaar angelagert.",level:"info"}}undo(e){this.targetCloud&&(this.targetCloud.proton=!1),this.createdProtonAtom&&e.atoms.delete(this.createdProtonAtom.id)}}class Ql{constructor(e){ne(this,"description","H als Proton abgegeben"),ne(this,"removedBondCloud"),ne(this,"createdLonePair"),ne(this,"hAtom"),ne(this,"partnerAtomId"),this.hydrogenAtomId=e}execute(e){const t=e.atoms.get(this.hydrogenAtomId);if(!t||t.element!=="H")return{success:!1,message:"Nur Wasserstoff-Atome lassen sich als Proton herausziehen.",level:"info"};const i=Array.from(e.clouds.values()).filter(n=>n.owners.length===2&&n.owners.includes(this.hydrogenAtomId));return i.length===0?{success:!1,message:"Dieses Wasserstoff-Atom ist an kein anderes Atom gebunden.",level:"info"}:(this.removedBondCloud=i[0],this.partnerAtomId=this.removedBondCloud.owners.find(n=>n!==this.hydrogenAtomId),this.hAtom=t,e.clouds.delete(this.removedBondCloud.id),this.createdLonePair={id:`lp_${this.partnerAtomId}_${Math.random().toString(36).substring(2,7)}`,owners:[this.partnerAtomId],electrons:2,proton:!1},e.clouds.set(this.createdLonePair.id,this.createdLonePair),t.isProton=!0,{success:!0,message:"Wasserstoff als Proton (H⁺) abgespalten. Das Elektronenpaar verbleibt am Partneratom.",level:"info"})}undo(e){this.hAtom&&(this.hAtom.isProton=!1),this.createdLonePair&&e.clouds.delete(this.createdLonePair.id),this.removedBondCloud&&e.clouds.set(this.removedBondCloud.id,this.removedBondCloud)}}class ec{constructor(e){ne(this,"description","Atome gelöscht"),ne(this,"deletedAtoms",[]),ne(this,"deletedClouds",[]),ne(this,"restoredClouds",[]),this.atomIds=e}execute(e){const t=new Set(this.atomIds);for(const i of t){const n=e.atoms.get(i);n&&(this.deletedAtoms.push(n),e.atoms.delete(i))}for(const[i,n]of Array.from(e.clouds.entries())){const a=n.owners.filter(s=>t.has(s)).length;if(a===n.owners.length)this.deletedClouds.push(n),e.clouds.delete(i);else if(a>0&&n.owners.length===2){this.deletedClouds.push(n),e.clouds.delete(i);const s=n.owners.find(l=>!t.has(l)),o={id:`restored_${s}_${Math.random().toString(36).substring(2,7)}`,owners:[s],electrons:1,proton:!1};this.restoredClouds.push(o),e.clouds.set(o.id,o)}}return{success:!0,message:`${this.deletedAtoms.length} Atom(e) entfernt.`,level:"info"}}undo(e){for(const t of this.restoredClouds)e.clouds.delete(t.id);for(const t of this.deletedAtoms)e.atoms.set(t.id,t);for(const t of this.deletedClouds)e.clouds.set(t.id,t)}}function On(r,e){var t,i;if(r==="H"&&e==="H")return .95;if(r==="H"||e==="H")return 1.15;const n=((t=at[r])==null?void 0:t.period)||2,a=((i=at[e])==null?void 0:i.period)||2;return 1.45+(n-2)*.2+(a-2)*.2}function Er(r,e=80,t=.25){var i,n;const a=Array.from(r.atoms.values());if(a.length<=1)return;const s=gr(r),o=new Map;for(const l of a)o.set(l.id,[]);for(const l of s)(i=o.get(l.atomA))==null||i.push(l.atomB),(n=o.get(l.atomB))==null||n.push(l.atomA);for(let l=0;l<e;l++){const c=new Map;for(const h of a)c.set(h.id,Ue(0,0,0));for(const h of s){const p=r.atoms.get(h.atomA),m=r.atoms.get(h.atomB);if(!p||!m)continue;const g=m.position.x-p.position.x,_=m.position.y-p.position.y,f=m.position.z-p.position.z,d=Math.sqrt(g*g+_*_+f*f)||.001,S=On(p.element,m.element),E=d-S,M=.65,U=g/d*E*M,A=_/d*E*M,w=f/d*E*M,C=c.get(h.atomA);C.x+=U,C.y+=A,C.z+=w;const b=c.get(h.atomB);b.x-=U,b.y-=A,b.z-=w}for(const[h,p]of o.entries()){if(p.length<2)continue;const m=r.atoms.get(h);if(!m)continue;const g=m.element;let _=-1/3;g==="Be"&&p.length===2?_=-1:g==="B"&&p.length===3&&(_=-.5);for(let f=0;f<p.length;f++)for(let d=f+1;d<p.length;d++){const S=r.atoms.get(p[f]),E=r.atoms.get(p[d]),M=E.position.x-S.position.x,U=E.position.y-S.position.y,A=E.position.z-S.position.z,w=Math.sqrt(M*M+U*U+A*A)||.001,C=On(g,S.element),b=On(g,E.element),x=(Math.sqrt(Math.max(.1,C*C+b*b-2*C*b*_))-w)*.35,R=c.get(p[f]);R.x-=M/w*x,R.y-=U/w*x,R.z-=A/w*x;const F=c.get(p[d]);F.x+=M/w*x,F.y+=U/w*x,F.z+=A/w*x}}for(let h=0;h<a.length;h++)for(let p=h+1;p<a.length;p++){const m=a[h].id,g=a[p].id;if(s.some(M=>M.atomA===m&&M.atomB===g||M.atomA===g&&M.atomB===m))continue;const _=a[p].position.x-a[h].position.x,f=a[p].position.y-a[h].position.y,d=a[p].position.z-a[h].position.z,S=Math.sqrt(_*_+f*f+d*d)||.001,E=1.8;if(S<E){const M=(E-S)*.5,U=c.get(m);U.x-=_/S*M,U.y-=f/S*M,U.z-=d/S*M;const A=c.get(g);A.x+=_/S*M,A.y+=f/S*M,A.z+=d/S*M}}const u=t*Math.pow(.98,l);for(const h of a){const p=c.get(h.id);h.position.x+=p.x*u,h.position.y+=p.y*u,h.position.z+=p.z*u}}tc(r)}function tc(r){const e=Array.from(r.atoms.values());if(e.length===0)return;let t=0,i=0,n=0;for(const l of e)t+=l.position.x,i+=l.position.y,n+=l.position.z;const a=t/e.length,s=i/e.length,o=n/e.length;for(const l of e)l.position.x-=a,l.position.y-=s,l.position.z-=o}/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const cs="170",ic=0,Ds=1,rc=2,Ko=1,Zo=2,ii=3,Mi=0,Tt=1,ri=2,gi=0,sr=1,Is=2,Us=3,Ns=4,nc=5,Ui=100,ac=101,sc=102,oc=103,lc=104,cc=200,uc=201,hc=202,dc=203,va=204,xa=205,pc=206,fc=207,mc=208,gc=209,_c=210,vc=211,xc=212,Mc=213,yc=214,Ma=0,ya=1,ba=2,cr=3,Sa=4,Ea=5,Ta=6,wa=7,$o=0,bc=1,Sc=2,_i=0,Ec=1,Tc=2,wc=3,Ac=4,Rc=5,Cc=6,Pc=7,Jo=300,ur=301,hr=302,Aa=303,Ra=304,Pn=306,Ca=1e3,Oi=1001,Pa=1002,Vt=1003,Lc=1004,Vr=1005,Ht=1006,Fn=1007,Fi=1008,oi=1009,Qo=1010,el=1011,Nr=1012,us=1013,Bi=1014,ni=1015,Fr=1016,hs=1017,ds=1018,dr=1020,tl=35902,il=1021,rl=1022,Gt=1023,nl=1024,al=1025,or=1026,pr=1027,sl=1028,ps=1029,ol=1030,fs=1031,ms=1033,vn=33776,xn=33777,Mn=33778,yn=33779,La=35840,Da=35841,Ia=35842,Ua=35843,Na=36196,Oa=37492,Fa=37496,Ba=37808,za=37809,ka=37810,Ha=37811,Ga=37812,Va=37813,Wa=37814,Xa=37815,qa=37816,ja=37817,Ya=37818,Ka=37819,Za=37820,$a=37821,bn=36492,Ja=36494,Qa=36495,ll=36283,es=36284,ts=36285,is=36286,Dc=3200,Ic=3201,cl=0,Uc=1,mi="",Dt="srgb",_r="srgb-linear",Ln="linear",qe="srgb",Hi=7680,Os=519,Nc=512,Oc=513,Fc=514,ul=515,Bc=516,zc=517,kc=518,Hc=519,rs=35044,Fs="300 es",ai=2e3,En=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bn=Math.PI/180,ns=180/Math.PI;function vi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function Gc(r,e){return(r%e+e)%e}function zn(r,e,t){return(1-t)*r+t*e}function jt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ce{constructor(e,t,i,n,a,s,o,l,c){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c)}set(e,t,i,n,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],p=i[2],m=i[5],g=i[8],_=n[0],f=n[3],d=n[6],S=n[1],E=n[4],M=n[7],U=n[2],A=n[5],w=n[8];return a[0]=s*_+o*S+l*U,a[3]=s*f+o*E+l*A,a[6]=s*d+o*M+l*w,a[1]=c*_+u*S+h*U,a[4]=c*f+u*E+h*A,a[7]=c*d+u*M+h*w,a[2]=p*_+m*S+g*U,a[5]=p*f+m*E+g*A,a[8]=p*d+m*M+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*a*u+i*o*l+n*a*c-n*s*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,p=o*l-u*a,m=c*a-s*l,g=t*h+i*p+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(n*c-u*i)*_,e[2]=(o*i-n*s)*_,e[3]=p*_,e[4]=(u*t-n*l)*_,e[5]=(n*a-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kn.makeScale(e,t)),this}rotate(e){return this.premultiply(kn.makeRotation(-e)),this}translate(e,t){return this.premultiply(kn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kn=new Ce;function hl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Tn(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vc(){const r=Tn("canvas");return r.style.display="block",r}const Bs={};function Ir(r){r in Bs||(Bs[r]=!0,console.warn(r))}function Wc(r,e,t){return new Promise(function(i,n){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function Xc(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qc(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ve={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===qe&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===qe&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mi?Ln:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function si(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const zs=[.64,.33,.3,.6,.15,.06],ks=[.2126,.7152,.0722],Hs=[.3127,.329],Gs=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vs=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ve.define({[_r]:{primaries:zs,whitePoint:Hs,transfer:Ln,toXYZ:Gs,fromXYZ:Vs,luminanceCoefficients:ks,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:zs,whitePoint:Hs,transfer:qe,toXYZ:Gs,fromXYZ:Vs,luminanceCoefficients:ks,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}});let Gi;class jc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=Tn("canvas")),Gi.width=e.width,Gi.height=e.height;const i=Gi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=si(a[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yc=0;class dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(Hn(n[s].image)):a.push(Hn(n[s]))}else a=Hn(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function Hn(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kc=0;class bt extends vr{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=Oi,n=Oi,a=Ht,s=Fi,o=Gt,l=oi,c=bt.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=vi(),this.name="",this.source=new dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ca:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ca:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Jo;bt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,n=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const s=e.elements,o=s[0],l=s[4],c=s[8],u=s[1],h=s[5],p=s[9],m=s[2],g=s[6],_=s[10];if(Math.abs(l-u)<.01&&Math.abs(c-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+m)<.1&&Math.abs(p+g)<.1&&Math.abs(o+h+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const d=(o+1)/2,S=(h+1)/2,E=(_+1)/2,M=(l+u)/4,U=(c+m)/4,A=(p+g)/4;return d>S&&d>E?d<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(d),n=M/i,a=U/i):S>E?S<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(S),i=M/n,a=A/n):E<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(E),i=U/a,n=A/a),this.set(i,n,a,t),this}let f=Math.sqrt((g-p)*(g-p)+(c-m)*(c-m)+(u-l)*(u-l));return Math.abs(f)<.001&&(f=1),this.x=(g-p)/f,this.y=(c-m)/f,this.z=(u-l)/f,this.w=Math.acos((o+h+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zc extends vr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new bt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Zc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pl extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $c extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,s,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const p=a[s+0],m=a[s+1],g=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==p||c!==m||u!==g){let f=1-o;const d=l*p+c*m+u*g+h*_,S=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const U=Math.sqrt(E),A=Math.atan2(U,d*S);f=Math.sin(f*A)/U,o=Math.sin(o*A)/U}const M=o*S;if(l=l*f+p*M,c=c*f+m*M,u=u*f+g*M,h=h*f+_*M,f===1-o){const U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,a,s){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=a[s],p=a[s+1],m=a[s+2],g=a[s+3];return e[t]=o*g+u*h+l*m-c*p,e[t+1]=l*g+u*p+c*h-o*m,e[t+2]=c*g+u*m+o*p-l*h,e[t+3]=u*g-o*h-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(a/2),p=l(i/2),m=l(n/2),g=l(a/2);switch(s){case"XYZ":this._x=p*u*h+c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h-p*m*g;break;case"YXZ":this._x=p*u*h+c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h+p*m*g;break;case"ZXY":this._x=p*u*h-c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h-p*m*g;break;case"ZYX":this._x=p*u*h-c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h+p*m*g;break;case"YZX":this._x=p*u*h+c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h-p*m*g;break;case"XZY":this._x=p*u*h-c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=i+o+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(a-c)*m,this._z=(s-n)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(n+s)/m,this._z=(a+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(a-c)/m,this._x=(n+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(s-n)/m,this._x=(a+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+n*c-a*l,this._y=n*u+s*l+a*o-i*c,this._z=a*u+s*c+i*l-n*o,this._w=s*u-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=s*h+this._w*p,this._x=i*h+this._x*p,this._y=n*h+this._y*p,this._z=a*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ws.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ws.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*i),u=2*(o*t-a*n),h=2*(a*i-s*t);return this.x=t+l*c+s*h-o*u,this.y=i+l*u+o*c-a*h,this.z=n+l*h+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gn.copy(this).projectOnVector(e),this.sub(Gn)}reflect(e){return this.sub(Gn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gn=new D,Ws=new xr;class Br{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ft.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ft.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ft.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ft):Ft.fromBufferAttribute(a,s),Ft.applyMatrix4(e.matrixWorld),this.expandByPoint(Ft);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ft),Ft.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),Xr.subVectors(this.max,Tr),Vi.subVectors(e.a,Tr),Wi.subVectors(e.b,Tr),Xi.subVectors(e.c,Tr),ci.subVectors(Wi,Vi),ui.subVectors(Xi,Wi),wi.subVectors(Vi,Xi);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-wi.z,wi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,wi.z,0,-wi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-wi.y,wi.x,0];return!Vn(t,Vi,Wi,Xi,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Vn(t,Vi,Wi,Xi,Xr))?!1:(qr.crossVectors(ci,ui),t=[qr.x,qr.y,qr.z],Vn(t,Vi,Wi,Xi,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ft).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ft).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($t),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $t=[new D,new D,new D,new D,new D,new D,new D,new D],Ft=new D,Wr=new Br,Vi=new D,Wi=new D,Xi=new D,ci=new D,ui=new D,wi=new D,Tr=new D,Xr=new D,qr=new D,Ai=new D;function Vn(r,e,t,i,n){for(let a=0,s=r.length-3;a<=s;a+=3){Ai.fromArray(r,a);const o=n.x*Math.abs(Ai.x)+n.y*Math.abs(Ai.y)+n.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),u=i.dot(Ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Jc=new Br,wr=new D,Wn=new D;class Dn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jc.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);const t=wr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(wr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Wn)),this.expandByPoint(wr.copy(e.center).sub(Wn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new D,Xn=new D,jr=new D,hi=new D,qn=new D,Yr=new D,jn=new D;class gs{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.origin).addScaledVector(this.direction,t),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Xn.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Xn);const a=e.distanceTo(t)*.5,s=-this.direction.dot(jr),o=hi.dot(this.direction),l=-hi.dot(jr),c=hi.lengthSq(),u=Math.abs(1-s*s);let h,p,m,g;if(u>0)if(h=s*l-o,p=s*o-l,g=a*u,h>=0)if(p>=-g)if(p<=g){const _=1/u;h*=_,p*=_,m=h*(h+s*p+2*o)+p*(s*h+p+2*l)+c}else p=a,h=Math.max(0,-(s*p+o)),m=-h*h+p*(p+2*l)+c;else p=-a,h=Math.max(0,-(s*p+o)),m=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-s*a+o)),p=h>0?-a:Math.min(Math.max(-a,-l),a),m=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-a,-l),a),m=p*(p+2*l)+c):(h=Math.max(0,-(s*a+o)),p=h>0?a:Math.min(Math.max(-a,-l),a),m=-h*h+p*(p+2*l)+c);else p=s>0?-a:a,h=Math.max(0,-(s*p+o)),m=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Xn).addScaledVector(jr,p),m}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const i=Jt.dot(this.direction),n=Jt.dot(Jt)-i*i,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,n=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,n=(e.min.x-p.x)*c),u>=0?(a=(e.min.y-p.y)*u,s=(e.max.y-p.y)*u):(a=(e.max.y-p.y)*u,s=(e.min.y-p.y)*u),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),h>=0?(o=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,i,n,a){qn.subVectors(t,e),Yr.subVectors(i,e),jn.crossVectors(qn,Yr);let s=this.direction.dot(jn),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;hi.subVectors(this.origin,e);const l=o*this.direction.dot(Yr.crossVectors(hi,Yr));if(l<0)return null;const c=o*this.direction.dot(qn.cross(hi));if(c<0||l+c>s)return null;const u=-o*hi.dot(jn);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,i,n,a,s,o,l,c,u,h,p,m,g,_,f){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c,u,h,p,m,g,_,f)}set(e,t,i,n,a,s,o,l,c,u,h,p,m,g,_,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=n,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=p,d[3]=m,d[7]=g,d[11]=_,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/qi.setFromMatrixColumn(e,0).length(),a=1/qi.setFromMatrixColumn(e,1).length(),s=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const p=s*u,m=s*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const p=l*u,m=l*h,g=c*u,_=c*h;t[0]=p+_*o,t[4]=g*o-m,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=m*o-g,t[6]=_+p*o,t[10]=s*l}else if(e.order==="ZXY"){const p=l*u,m=l*h,g=c*u,_=c*h;t[0]=p-_*o,t[4]=-s*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*u,t[9]=_-p*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const p=s*u,m=s*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=p*c+_,t[1]=l*h,t[5]=_*c+p,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const p=s*l,m=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-p*h,t[8]=g*h+m,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=p-_*h}else if(e.order==="XZY"){const p=s*l,m=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+_,t[5]=s*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=_*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qc,e,eu)}lookAt(e,t,i){const n=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),di.crossVectors(i,Rt),di.lengthSq()===0&&(Math.abs(i.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),di.crossVectors(i,Rt)),di.normalize(),Kr.crossVectors(Rt,di),n[0]=di.x,n[4]=Kr.x,n[8]=Rt.x,n[1]=di.y,n[5]=Kr.y,n[9]=Rt.y,n[2]=di.z,n[6]=Kr.z,n[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],p=i[9],m=i[13],g=i[2],_=i[6],f=i[10],d=i[14],S=i[3],E=i[7],M=i[11],U=i[15],A=n[0],w=n[4],C=n[8],b=n[12],x=n[1],R=n[5],F=n[9],B=n[13],H=n[2],X=n[6],W=n[10],Y=n[14],G=n[3],ee=n[7],pe=n[11],we=n[15];return a[0]=s*A+o*x+l*H+c*G,a[4]=s*w+o*R+l*X+c*ee,a[8]=s*C+o*F+l*W+c*pe,a[12]=s*b+o*B+l*Y+c*we,a[1]=u*A+h*x+p*H+m*G,a[5]=u*w+h*R+p*X+m*ee,a[9]=u*C+h*F+p*W+m*pe,a[13]=u*b+h*B+p*Y+m*we,a[2]=g*A+_*x+f*H+d*G,a[6]=g*w+_*R+f*X+d*ee,a[10]=g*C+_*F+f*W+d*pe,a[14]=g*b+_*B+f*Y+d*we,a[3]=S*A+E*x+M*H+U*G,a[7]=S*w+E*R+M*X+U*ee,a[11]=S*C+E*F+M*W+U*pe,a[15]=S*b+E*B+M*Y+U*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],m=e[14],g=e[3],_=e[7],f=e[11],d=e[15];return g*(+a*l*h-n*c*h-a*o*p+i*c*p+n*o*m-i*l*m)+_*(+t*l*m-t*c*p+a*s*p-n*s*m+n*c*u-a*l*u)+f*(+t*c*h-t*o*m-a*s*h+i*s*m+a*o*u-i*c*u)+d*(-n*o*u-t*l*h+t*o*p+n*s*h-i*s*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],m=e[11],g=e[12],_=e[13],f=e[14],d=e[15],S=h*f*c-_*p*c+_*l*m-o*f*m-h*l*d+o*p*d,E=g*p*c-u*f*c-g*l*m+s*f*m+u*l*d-s*p*d,M=u*_*c-g*h*c+g*o*m-s*_*m-u*o*d+s*h*d,U=g*h*l-u*_*l-g*o*p+s*_*p+u*o*f-s*h*f,A=t*S+i*E+n*M+a*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=S*w,e[1]=(_*p*a-h*f*a-_*n*m+i*f*m+h*n*d-i*p*d)*w,e[2]=(o*f*a-_*l*a+_*n*c-i*f*c-o*n*d+i*l*d)*w,e[3]=(h*l*a-o*p*a-h*n*c+i*p*c+o*n*m-i*l*m)*w,e[4]=E*w,e[5]=(u*f*a-g*p*a+g*n*m-t*f*m-u*n*d+t*p*d)*w,e[6]=(g*l*a-s*f*a-g*n*c+t*f*c+s*n*d-t*l*d)*w,e[7]=(s*p*a-u*l*a+u*n*c-t*p*c-s*n*m+t*l*m)*w,e[8]=M*w,e[9]=(g*h*a-u*_*a-g*i*m+t*_*m+u*i*d-t*h*d)*w,e[10]=(s*_*a-g*o*a+g*i*c-t*_*c-s*i*d+t*o*d)*w,e[11]=(u*o*a-s*h*a-u*i*c+t*h*c+s*i*m-t*o*m)*w,e[12]=U*w,e[13]=(u*_*n-g*h*n+g*i*p-t*_*p-u*i*f+t*h*f)*w,e[14]=(g*o*n-s*_*n-g*i*l+t*_*l+s*i*f-t*o*f)*w,e[15]=(s*h*n-u*o*n+u*i*l-t*h*l-s*i*p+t*o*p)*w,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*s,0,c*l-n*o,u*l+n*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,h=o+o,p=a*c,m=a*u,g=a*h,_=s*u,f=s*h,d=o*h,S=l*c,E=l*u,M=l*h,U=i.x,A=i.y,w=i.z;return n[0]=(1-(_+d))*U,n[1]=(m+M)*U,n[2]=(g-E)*U,n[3]=0,n[4]=(m-M)*A,n[5]=(1-(p+d))*A,n[6]=(f+S)*A,n[7]=0,n[8]=(g+E)*w,n[9]=(f-S)*w,n[10]=(1-(p+_))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let a=qi.set(n[0],n[1],n[2]).length();const s=qi.set(n[4],n[5],n[6]).length(),o=qi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Bt.copy(this);const l=1/a,c=1/s,u=1/o;return Bt.elements[0]*=l,Bt.elements[1]*=l,Bt.elements[2]*=l,Bt.elements[4]*=c,Bt.elements[5]*=c,Bt.elements[6]*=c,Bt.elements[8]*=u,Bt.elements[9]*=u,Bt.elements[10]*=u,t.setFromRotationMatrix(Bt),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,n,a,s,o=ai){const l=this.elements,c=2*a/(t-e),u=2*a/(i-n),h=(t+e)/(t-e),p=(i+n)/(i-n);let m,g;if(o===ai)m=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===En)m=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,s,o=ai){const l=this.elements,c=1/(t-e),u=1/(i-n),h=1/(s-a),p=(t+e)*c,m=(i+n)*u;let g,_;if(o===ai)g=(s+a)*h,_=-2*h;else if(o===En)g=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new D,Bt=new Je,Qc=new D(0,0,0),eu=new D(1,1,1),di=new D,Kr=new D,Rt=new D,Xs=new Je,qs=new xr;class Kt{constructor(e=0,t=0,i=0,n=Kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],p=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xs,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qs.setFromEuler(this),this.setFromQuaternion(qs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kt.DEFAULT_ORDER="XYZ";class _s{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tu=0;const js=new D,ji=new xr,Qt=new Je,Zr=new D,Ar=new D,iu=new D,ru=new xr,Ys=new D(1,0,0),Ks=new D(0,1,0),Zs=new D(0,0,1),$s={type:"added"},nu={type:"removed"},Yi={type:"childadded",child:null},Yn={type:"childremoved",child:null};class ht extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new D,t=new Kt,i=new xr,n=new D(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ce}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(Ys,e)}rotateY(e){return this.rotateOnAxis(Ks,e)}rotateZ(e){return this.rotateOnAxis(Zs,e)}translateOnAxis(e,t){return js.copy(e).applyQuaternion(this.quaternion),this.position.add(js.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ys,e)}translateY(e){return this.translateOnAxis(Ks,e)}translateZ(e){return this.translateOnAxis(Zs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(Ar,Zr,this.up):Qt.lookAt(Zr,Ar,this.up),this.quaternion.setFromRotationMatrix(Qt),n&&(Qt.extractRotation(n.matrixWorld),ji.setFromRotationMatrix(Qt),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($s),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nu),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($s),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),p=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ht.DEFAULT_UP=new D(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new D,ei=new D,Kn=new D,ti=new D,Ki=new D,Zi=new D,Js=new D,Zn=new D,$n=new D,Jn=new D,Qn=new st,ea=new st,ta=new st;class Ut{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),zt.subVectors(e,t),n.cross(zt);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){zt.subVectors(n,t),ei.subVectors(i,t),Kn.subVectors(e,t);const s=zt.dot(zt),o=zt.dot(ei),l=zt.dot(Kn),c=ei.dot(ei),u=ei.dot(Kn),h=s*c-o*o;if(h===0)return a.set(0,0,0),null;const p=1/h,m=(c*l-o*u)*p,g=(s*u-o*l)*p;return a.set(1-m-g,g,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,n,a,s,o,l){return this.getBarycoord(e,t,i,n,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ti.x),l.addScaledVector(s,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,i,n,a,s){return Qn.setScalar(0),ea.setScalar(0),ta.setScalar(0),Qn.fromBufferAttribute(e,t),ea.fromBufferAttribute(e,i),ta.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Qn,a.x),s.addScaledVector(ea,a.y),s.addScaledVector(ta,a.z),s}static isFrontFacing(e,t,i,n){return zt.subVectors(i,t),ei.subVectors(e,t),zt.cross(ei).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),zt.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ut.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ut.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,a){return Ut.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return Ut.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ut.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let s,o;Ki.subVectors(n,i),Zi.subVectors(a,i),Zn.subVectors(e,i);const l=Ki.dot(Zn),c=Zi.dot(Zn);if(l<=0&&c<=0)return t.copy(i);$n.subVectors(e,n);const u=Ki.dot($n),h=Zi.dot($n);if(u>=0&&h<=u)return t.copy(n);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(Ki,s);Jn.subVectors(e,a);const m=Ki.dot(Jn),g=Zi.dot(Jn);if(g>=0&&m<=g)return t.copy(a);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Zi,o);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return Js.subVectors(a,n),o=(h-u)/(h-u+(m-g)),t.copy(n).addScaledVector(Js,o);const d=1/(f+_+p);return s=_*d,o=p*d,t.copy(i).addScaledVector(Ki,s).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function ia(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class De{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ve.workingColorSpace){if(e=Gc(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=ia(s,a,e+1/3),this.g=ia(s,a,e),this.b=ia(s,a,e-1/3)}return Ve.toWorkingColorSpace(this,n),this}setStyle(e,t=Dt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=fl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Ve.fromWorkingColorSpace(vt.copy(this),e),Math.round(yt(vt.r*255,0,255))*65536+Math.round(yt(vt.g*255,0,255))*256+Math.round(yt(vt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(vt.copy(this),t);const i=vt.r,n=vt.g,a=vt.b,s=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case i:l=(n-a)/h+(n<a?6:0);break;case n:l=(a-i)/h+2;break;case a:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Dt){Ve.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,i=vt.g,n=vt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL($r);const i=zn(pi.h,$r.h,t),n=zn(pi.s,$r.s,t),a=zn(pi.l,$r.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new De;De.NAMES=fl;let au=0;class bi extends vr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=vi(),this.name="",this.blending=sr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=xa,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Os,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==va&&(i.blendSrc=this.blendSrc),this.blendDst!==xa&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Os&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fr extends bi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new D,Jr=new Ie;class Wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rs,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array),a=je(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rs&&(e.usage=this.usage),e}}class ml extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gl extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lt extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let su=0;const Lt=new Je,ra=new ht,$i=new D,Ct=new Br,Rr=new Br,mt=new D;class wt extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hl(e)?gl:ml)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ce().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,i){return Lt.makeTranslation(e,t,i),this.applyMatrix4(Lt),this}scale(e,t,i){return Lt.makeScale(e,t,i),this.applyMatrix4(Lt),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new lt(i,3))}else{for(let i=0,n=t.count;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];Ct.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Ct.min,Rr.min),Ct.expandByPoint(mt),mt.addVectors(Ct.max,Rr.max),Ct.expandByPoint(mt)):(Ct.expandByPoint(Rr.min),Ct.expandByPoint(Rr.max))}Ct.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)mt.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(mt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mt.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(e,c),mt.add($i)),n=Math.max(n,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new D,l[C]=new D;const c=new D,u=new D,h=new D,p=new Ie,m=new Ie,g=new Ie,_=new D,f=new D;function d(C,b,x){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,x),p.fromBufferAttribute(a,C),m.fromBufferAttribute(a,b),g.fromBufferAttribute(a,x),u.sub(c),h.sub(c),m.sub(p),g.sub(p);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(R),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),o[C].add(_),o[b].add(_),o[x].add(_),l[C].add(f),l[b].add(f),l[x].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,b=S.length;C<b;++C){const x=S[C],R=x.start,F=x.count;for(let B=R,H=R+F;B<H;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new D,M=new D,U=new D,A=new D;function w(C){U.fromBufferAttribute(n,C),A.copy(U);const b=o[C];E.copy(b),E.sub(U.multiplyScalar(U.dot(b))).normalize(),M.crossVectors(A,b);const x=M.dot(l[C])<0?-1:1;s.setXYZW(C,E.x,E.y,E.z,x)}for(let C=0,b=S.length;C<b;++C){const x=S[C],R=x.start,F=x.count;for(let B=R,H=R+F;B<H;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const n=new D,a=new D,s=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),_=e.getX(p+1),f=e.getX(p+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,f),u.subVectors(s,a),h.subVectors(n,a),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,f),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)n.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),u.subVectors(s,a),h.subVectors(n,a),u.cross(h),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,p=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let d=0;d<u;d++)p[g++]=c[m++]}return new Wt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){const p=c[u],m=e(p,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(n[l]=u,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],h=a[c];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qs=new Je,Ri=new gs,Qr=new Dn,eo=new D,en=new D,tn=new D,rn=new D,na=new D,nn=new D,to=new D,an=new D;class dt extends ht{constructor(e=new wt,t=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){nn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],h=a[l];u!==0&&(na.fromBufferAttribute(h,e),s?nn.addScaledVector(na,u):nn.addScaledVector(na.sub(t),u))}t.add(nn)}return t}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(a),Ri.copy(e.ray).recast(e.near),!(Qr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Qr,eo)===null||Ri.origin.distanceToSquared(eo)>(e.far-e.near)**2))&&(Qs.copy(a).invert(),Ri.copy(e.ray).applyMatrix4(Qs),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,i){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,p=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=p.length;g<_;g++){const f=p[g],d=s[f.materialIndex],S=Math.max(f.start,m.start),E=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let M=S,U=E;M<U;M+=3){const A=o.getX(M),w=o.getX(M+1),C=o.getX(M+2);n=sn(this,d,e,i,c,u,h,A,w,C),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,d=_;f<d;f+=3){const S=o.getX(f),E=o.getX(f+1),M=o.getX(f+2);n=sn(this,s,e,i,c,u,h,S,E,M),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=p.length;g<_;g++){const f=p[g],d=s[f.materialIndex],S=Math.max(f.start,m.start),E=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let M=S,U=E;M<U;M+=3){const A=M,w=M+1,C=M+2;n=sn(this,d,e,i,c,u,h,A,w,C),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,d=_;f<d;f+=3){const S=f,E=f+1,M=f+2;n=sn(this,s,e,i,c,u,h,S,E,M),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}}function ou(r,e,t,i,n,a,s,o){let l;if(e.side===Tt?l=i.intersectTriangle(s,a,n,!0,o):l=i.intersectTriangle(n,a,s,e.side===Mi,o),l===null)return null;an.copy(o),an.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(an);return c<t.near||c>t.far?null:{distance:c,point:an.clone(),object:r}}function sn(r,e,t,i,n,a,s,o,l,c){r.getVertexPosition(o,en),r.getVertexPosition(l,tn),r.getVertexPosition(c,rn);const u=ou(r,e,t,i,en,tn,rn,to);if(u){const h=new D;Ut.getBarycoord(to,en,tn,rn,h),n&&(u.uv=Ut.getInterpolatedAttribute(n,o,l,c,h,new Ie)),a&&(u.uv1=Ut.getInterpolatedAttribute(a,o,l,c,h,new Ie)),s&&(u.normal=Ut.getInterpolatedAttribute(s,o,l,c,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new D,materialIndex:0};Ut.getNormal(en,tn,rn,p.normal),u.face=p,u.barycoord=h}return u}class zr extends wt{constructor(e=1,t=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],h=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,n,s,2),g("x","z","y",1,-1,e,i,-t,n,s,3),g("x","y","z",1,-1,e,t,i,n,a,4),g("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function g(_,f,d,S,E,M,U,A,w,C,b){const x=M/w,R=U/C,F=M/2,B=U/2,H=A/2,X=w+1,W=C+1;let Y=0,G=0;const ee=new D;for(let pe=0;pe<W;pe++){const we=pe*R-B;for(let Ne=0;Ne<X;Ne++){const Ye=Ne*x-F;ee[_]=Ye*S,ee[f]=we*E,ee[d]=H,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[f]=0,ee[d]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Ne/w),h.push(1-pe/C),Y+=1}}for(let pe=0;pe<C;pe++)for(let we=0;we<w;we++){const Ne=p+we+X*pe,Ye=p+we+X*(pe+1),q=p+(we+1)+X*(pe+1),te=p+(we+1)+X*pe;l.push(Ne,Ye,te),l.push(Ye,q,te),G+=6}o.addGroup(m,G,b),m+=G,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Mt(r){const e={};for(let t=0;t<r.length;t++){const i=mr(r[t]);for(const n in i)e[n]=i[n]}return e}function lu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _l(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const cu={clone:mr,merge:Mt};var uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends bi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uu,this.fragmentShader=hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=lu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vl extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new D,io=new Ie,ro=new Ie;class It extends vl{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Bn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,io,ro),t.subVectors(ro,io)}setViewOffset(e,t,i,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,t-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Qi=1;class du extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new It(Ji,Qi,e,t);n.layers=this.layers,this.add(n);const a=new It(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const s=new It(Ji,Qi,e,t);s.layers=this.layers,this.add(s);const o=new It(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const l=new It(Ji,Qi,e,t);l.layers=this.layers,this.add(l);const c=new It(Ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===En)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(h,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class xl extends bt{constructor(e,t,i,n,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ur,super(e,t,i,n,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pu extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new xl(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new zr(5,5,5),a=new yi({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tt,blending:gi});a.uniforms.tEquirect.value=t;const s=new dt(n,a),o=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Ht),new du(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(a)}}const aa=new D,fu=new D,mu=new Ce;class Di{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=aa.subVectors(i,t).cross(fu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(aa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||mu.getNormalMatrix(e),n=this.coplanarPoint(aa).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Dn,on=new D;class vs{constructor(e=new Di,t=new Di,i=new Di,n=new Di,a=new Di,s=new Di){this.planes=[e,t,i,n,a,s]}set(e,t,i,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai){const i=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],p=n[7],m=n[8],g=n[9],_=n[10],f=n[11],d=n[12],S=n[13],E=n[14],M=n[15];if(i[0].setComponents(l-a,p-c,f-m,M-d).normalize(),i[1].setComponents(l+a,p+c,f+m,M+d).normalize(),i[2].setComponents(l+s,p+u,f+g,M+S).normalize(),i[3].setComponents(l-s,p-u,f-g,M-S).normalize(),i[4].setComponents(l-o,p-h,f-_,M-E).normalize(),t===ai)i[5].setComponents(l+o,p+h,f+_,M+E).normalize();else if(t===En)i[5].setComponents(o,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(on.x=n.normal.x>0?e.max.x:e.min.x,on.y=n.normal.y>0?e.max.y:e.min.y,on.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(on)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ml(){let r=null,e=!1,t=null,i=null;function n(a,s){t(a,s),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function gu(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,p=r.createBuffer();r.bindBuffer(l,p),r.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<h.length;m++){const g=h[p],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,h[p]=_)}h.length=p+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:s}}class kr extends wt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=e/o,p=t/l,m=[],g=[],_=[],f=[];for(let d=0;d<u;d++){const S=d*p-s;for(let E=0;E<c;E++){const M=E*h-a;g.push(M,-S,0),_.push(0,0,1),f.push(E/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const E=S+c*d,M=S+c*(d+1),U=S+1+c*(d+1),A=S+1+c*d;m.push(E,M,A),m.push(M,U,A)}this.setIndex(m),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.widthSegments,e.heightSegments)}}var _u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Su=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Au=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$u=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ih=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ah=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ch=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ph=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_h=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Th=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ah=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ch=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ph=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ih=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Oh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$h=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,td=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ad=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ud=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_d=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ed=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Td=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ad=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Id=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:_u,alphahash_pars_fragment:vu,alphamap_fragment:xu,alphamap_pars_fragment:Mu,alphatest_fragment:yu,alphatest_pars_fragment:bu,aomap_fragment:Su,aomap_pars_fragment:Eu,batching_pars_vertex:Tu,batching_vertex:wu,begin_vertex:Au,beginnormal_vertex:Ru,bsdfs:Cu,iridescence_fragment:Pu,bumpmap_pars_fragment:Lu,clipping_planes_fragment:Du,clipping_planes_pars_fragment:Iu,clipping_planes_pars_vertex:Uu,clipping_planes_vertex:Nu,color_fragment:Ou,color_pars_fragment:Fu,color_pars_vertex:Bu,color_vertex:zu,common:ku,cube_uv_reflection_fragment:Hu,defaultnormal_vertex:Gu,displacementmap_pars_vertex:Vu,displacementmap_vertex:Wu,emissivemap_fragment:Xu,emissivemap_pars_fragment:qu,colorspace_fragment:ju,colorspace_pars_fragment:Yu,envmap_fragment:Ku,envmap_common_pars_fragment:Zu,envmap_pars_fragment:$u,envmap_pars_vertex:Ju,envmap_physical_pars_fragment:ch,envmap_vertex:Qu,fog_vertex:eh,fog_pars_vertex:th,fog_fragment:ih,fog_pars_fragment:rh,gradientmap_pars_fragment:nh,lightmap_pars_fragment:ah,lights_lambert_fragment:sh,lights_lambert_pars_fragment:oh,lights_pars_begin:lh,lights_toon_fragment:uh,lights_toon_pars_fragment:hh,lights_phong_fragment:dh,lights_phong_pars_fragment:ph,lights_physical_fragment:fh,lights_physical_pars_fragment:mh,lights_fragment_begin:gh,lights_fragment_maps:_h,lights_fragment_end:vh,logdepthbuf_fragment:xh,logdepthbuf_pars_fragment:Mh,logdepthbuf_pars_vertex:yh,logdepthbuf_vertex:bh,map_fragment:Sh,map_pars_fragment:Eh,map_particle_fragment:Th,map_particle_pars_fragment:wh,metalnessmap_fragment:Ah,metalnessmap_pars_fragment:Rh,morphinstance_vertex:Ch,morphcolor_vertex:Ph,morphnormal_vertex:Lh,morphtarget_pars_vertex:Dh,morphtarget_vertex:Ih,normal_fragment_begin:Uh,normal_fragment_maps:Nh,normal_pars_fragment:Oh,normal_pars_vertex:Fh,normal_vertex:Bh,normalmap_pars_fragment:zh,clearcoat_normal_fragment_begin:kh,clearcoat_normal_fragment_maps:Hh,clearcoat_pars_fragment:Gh,iridescence_pars_fragment:Vh,opaque_fragment:Wh,packing:Xh,premultiplied_alpha_fragment:qh,project_vertex:jh,dithering_fragment:Yh,dithering_pars_fragment:Kh,roughnessmap_fragment:Zh,roughnessmap_pars_fragment:$h,shadowmap_pars_fragment:Jh,shadowmap_pars_vertex:Qh,shadowmap_vertex:ed,shadowmask_pars_fragment:td,skinbase_vertex:id,skinning_pars_vertex:rd,skinning_vertex:nd,skinnormal_vertex:ad,specularmap_fragment:sd,specularmap_pars_fragment:od,tonemapping_fragment:ld,tonemapping_pars_fragment:cd,transmission_fragment:ud,transmission_pars_fragment:hd,uv_pars_fragment:dd,uv_pars_vertex:pd,uv_vertex:fd,worldpos_vertex:md,background_vert:gd,background_frag:_d,backgroundCube_vert:vd,backgroundCube_frag:xd,cube_vert:Md,cube_frag:yd,depth_vert:bd,depth_frag:Sd,distanceRGBA_vert:Ed,distanceRGBA_frag:Td,equirect_vert:wd,equirect_frag:Ad,linedashed_vert:Rd,linedashed_frag:Cd,meshbasic_vert:Pd,meshbasic_frag:Ld,meshlambert_vert:Dd,meshlambert_frag:Id,meshmatcap_vert:Ud,meshmatcap_frag:Nd,meshnormal_vert:Od,meshnormal_frag:Fd,meshphong_vert:Bd,meshphong_frag:zd,meshphysical_vert:kd,meshphysical_frag:Hd,meshtoon_vert:Gd,meshtoon_frag:Vd,points_vert:Wd,points_frag:Xd,shadow_vert:qd,shadow_frag:jd,sprite_vert:Yd,sprite_frag:Kd},re={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},qt={basic:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new De(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new De(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Mt([re.points,re.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Mt([re.common,re.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Mt([re.sprite,re.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Mt([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Mt([re.lights,re.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};qt.physical={uniforms:Mt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const ln={r:0,b:0,g:0},Pi=new Kt,Zd=new Je;function $d(r,e,t,i,n,a,s){const o=new De(0);let l=a===!0?0:1,c,u,h=null,p=0,m=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function _(S){let E=!1;const M=g(S);M===null?d(o,l):M&&M.isColor&&(d(M,1),E=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(S,E){const M=g(E);M&&(M.isCubeTexture||M.mapping===Pn)?(u===void 0&&(u=new dt(new zr(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:mr(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Pi.copy(E.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(Pi)),u.material.toneMapped=Ve.getTransfer(M.colorSpace)!==qe,(h!==M||p!==M.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=M,p=M.version,m=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new dt(new kr(2,2),new yi({name:"BackgroundMaterial",uniforms:mr(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(M.colorSpace)!==qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,m=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,E){S.getRGB(ln,_l(r)),i.buffers.color.setClear(ln.r,ln.g,ln.b,E,s)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(o,l)},render:_,addToRenderList:f}}function Jd(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=p(null);let a=n,s=!1;function o(x,R,F,B,H){let X=!1;const W=h(B,F,R);a!==W&&(a=W,c(a.object)),X=m(x,B,F,H),X&&g(x,B,F,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,M(x,R,F,B),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,R,F){const B=F.wireframe===!0;let H=i[x.id];H===void 0&&(H={},i[x.id]=H);let X=H[R.id];X===void 0&&(X={},H[R.id]=X);let W=X[B];return W===void 0&&(W=p(l()),X[B]=W),W}function p(x){const R=[],F=[],B=[];for(let H=0;H<t;H++)R[H]=0,F[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:B,object:x,attributes:{},index:null}}function m(x,R,F,B){const H=a.attributes,X=R.attributes;let W=0;const Y=F.getAttributes();for(const G in Y)if(Y[G].location>=0){const ee=H[G];let pe=X[G];if(pe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),ee===void 0||ee.attribute!==pe||pe&&ee.data!==pe.data)return!0;W++}return a.attributesNum!==W||a.index!==B}function g(x,R,F,B){const H={},X=R.attributes;let W=0;const Y=F.getAttributes();for(const G in Y)if(Y[G].location>=0){let ee=X[G];ee===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor));const pe={};pe.attribute=ee,ee&&ee.data&&(pe.data=ee.data),H[G]=pe,W++}a.attributes=H,a.attributesNum=W,a.index=B}function _(){const x=a.newAttributes;for(let R=0,F=x.length;R<F;R++)x[R]=0}function f(x){d(x,0)}function d(x,R){const F=a.newAttributes,B=a.enabledAttributes,H=a.attributeDivisors;F[x]=1,B[x]===0&&(r.enableVertexAttribArray(x),B[x]=1),H[x]!==R&&(r.vertexAttribDivisor(x,R),H[x]=R)}function S(){const x=a.newAttributes,R=a.enabledAttributes;for(let F=0,B=R.length;F<B;F++)R[F]!==x[F]&&(r.disableVertexAttribArray(F),R[F]=0)}function E(x,R,F,B,H,X,W){W===!0?r.vertexAttribIPointer(x,R,F,H,X):r.vertexAttribPointer(x,R,F,B,H,X)}function M(x,R,F,B){_();const H=B.attributes,X=F.getAttributes(),W=R.defaultAttributeValues;for(const Y in X){const G=X[Y];if(G.location>=0){let ee=H[Y];if(ee===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),ee!==void 0){const pe=ee.normalized,we=ee.itemSize,Ne=e.get(ee);if(Ne===void 0)continue;const Ye=Ne.buffer,q=Ne.type,te=Ne.bytesPerElement,me=q===r.INT||q===r.UNSIGNED_INT||ee.gpuType===us;if(ee.isInterleavedBufferAttribute){const se=ee.data,Se=se.stride,Ae=ee.offset;if(se.isInstancedInterleavedBuffer){for(let Oe=0;Oe<G.locationSize;Oe++)d(G.location+Oe,se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Oe=0;Oe<G.locationSize;Oe++)f(G.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let Oe=0;Oe<G.locationSize;Oe++)E(G.location+Oe,we/G.locationSize,q,pe,Se*te,(Ae+we/G.locationSize*Oe)*te,me)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)d(G.location+se,ee.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<G.locationSize;se++)f(G.location+se);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let se=0;se<G.locationSize;se++)E(G.location+se,we/G.locationSize,q,pe,we*te,we/G.locationSize*se*te,me)}}else if(W!==void 0){const pe=W[Y];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(G.location,pe);break;case 3:r.vertexAttrib3fv(G.location,pe);break;case 4:r.vertexAttrib4fv(G.location,pe);break;default:r.vertexAttrib1fv(G.location,pe)}}}}S()}function U(){C();for(const x in i){const R=i[x];for(const F in R){const B=R[F];for(const H in B)u(B[H].object),delete B[H];delete R[F]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const R=i[x.id];for(const F in R){const B=R[F];for(const H in B)u(B[H].object),delete B[H];delete R[F]}delete i[x.id]}function w(x){for(const R in i){const F=i[R];if(F[x.id]===void 0)continue;const B=F[x.id];for(const H in B)u(B[H].object),delete B[H];delete F[x.id]}}function C(){b(),s=!0,a!==n&&(a=n,c(a.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:f,disableUnusedAttributes:S}}function Qd(r,e,t){let i;function n(c){i=c}function a(c,u){r.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,h){h!==0&&(r.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];t.update(p,i,1)}function l(c,u,h,p){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)s(c[g],u[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*p[_];t.update(g,i,1)}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ep(r,e,t,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){return!(w!==Gt&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==oi&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ni&&!C)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:U,maxSamples:A}}function tp(r){const e=this;let t=null,i=0,n=!1,a=!1;const s=new Di,o=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||i!==0||n;return n=p,i=h.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,m){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,d=r.get(h);if(!n||g===null||g.length===0||a&&!f)a?u(null):c();else{const S=a?0:i,E=S*4;let M=d.clippingState||null;l.value=M,M=u(g,p,E,m);for(let U=0;U!==E;++U)M[U]=t[U];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,p,m,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const d=m+_*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<d)&&(f=new Float32Array(d));for(let E=0,M=m;E!==_;++E,M+=4)s.copy(h[E]).applyMatrix4(S,o),s.normal.toArray(f,M),f[M+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function ip(r){let e=new WeakMap;function t(s,o){return o===Aa?s.mapping=ur:o===Ra&&(s.mapping=hr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Aa||o===Ra)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new pu(l.height);return c.fromEquirectangularTexture(r,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class yl extends vl{constructor(e=-1,t=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ar=4,no=[.125,.215,.35,.446,.526,.582],Ni=20,sa=new yl,ao=new De;let oa=null,la=0,ca=0,ua=!1;const Ii=(1+Math.sqrt(5))/2,er=1/Ii,so=[new D(-Ii,er,0),new D(Ii,er,0),new D(-er,0,Ii),new D(er,0,Ii),new D(0,Ii,-er),new D(0,Ii,er),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class oo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=co(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,la,ca),this._renderer.xr.enabled=ua,e.scissorTest=!1,cn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Fr,format:Gt,colorSpace:_r,depthBuffer:!1},n=lo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lo(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rp(a)),this._blurMaterial=np(a,e,t)}return n}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,i,n){const a=new It(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(ao),l.toneMapping=_i,l.autoClear=!1;const h=new fr({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),p=new dt(new zr,h);let m=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,m=!0):(h.color.copy(ao),m=!0);for(let _=0;_<6;_++){const f=_%3;f===0?(a.up.set(0,s[_],0),a.lookAt(o[_],0,0)):f===1?(a.up.set(0,0,s[_]),a.lookAt(0,o[_],0)):(a.up.set(0,s[_],0),a.lookAt(0,0,o[_]));const d=this._cubeSize;cn(n,f*d,_>2?d:0,d,d),l.setRenderTarget(n),m&&l.render(p,a),l.render(e,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===ur||e.mapping===hr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=co());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new dt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;cn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=so[(n-a-1)%so.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new dt(this._lodPlanes[n],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Ni-1),_=a/g,f=isFinite(a)?1+Math.floor(u*_):Ni;f>Ni&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ni}`);const d=[];let S=0;for(let w=0;w<Ni;++w){const C=w/_,b=Math.exp(-C*C/2);d.push(b),w===0?S+=b:w<f&&(S+=2*b)}for(let w=0;w<d.length;w++)d[w]=d[w]/S;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:E}=this;p.dTheta.value=g,p.mipInt.value=E-i;const M=this._sizeLods[n],U=3*M*(n>E-ar?n-E+ar:0),A=4*(this._cubeSize-M);cn(t,U,A,3*M,2*M),l.setRenderTarget(t),l.render(h,sa)}}function rp(r){const e=[],t=[],i=[];let n=r;const a=r-ar+1+no.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>r-ar?l=no[s-r+ar-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,f=2,d=1,S=new Float32Array(_*g*m),E=new Float32Array(f*g*m),M=new Float32Array(d*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,C=A>2?0:-1,b=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];S.set(b,_*g*A),E.set(p,f*g*A);const x=[A,A,A,A,A,A];M.set(x,d*g*A)}const U=new wt;U.setAttribute("position",new Wt(S,_)),U.setAttribute("uv",new Wt(E,f)),U.setAttribute("faceIndex",new Wt(M,d)),e.push(U),n>ar&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lo(r,e,t){const i=new zi(r,e,t);return i.texture.mapping=Pn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cn(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function np(r,e,t){const i=new Float32Array(Ni),n=new D(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function co(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function uo(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function xs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ap(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Aa||l===Ra,u=l===ur||l===hr;if(c||u){let h=e.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new oo(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&n(m)?(t===null&&(t=new oo(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function sp(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Ir("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function op(r,e,t,i){const n={},a=new WeakMap;function s(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let f=0,d=_.length;f<d;f++)e.remove(_[f])}p.removeEventListener("dispose",s),delete n[p.id];const m=a.get(p);m&&(e.remove(m),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return n[p.id]===!0||(p.addEventListener("dispose",s),n[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const g in p)e.update(p[g],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let f=0,d=_.length;f<d;f++)e.update(_[f],r.ARRAY_BUFFER)}}function c(h){const p=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let E=0,M=S.length;E<M;E+=3){const U=S[E+0],A=S[E+1],w=S[E+2];p.push(U,A,A,w,w,U)}}else if(g!==void 0){const S=g.array;_=g.version;for(let E=0,M=S.length/3-1;E<M;E+=3){const U=E+0,A=E+1,w=E+2;p.push(U,A,A,w,w,U)}}else return;const f=new(hl(p)?gl:ml)(p,1);f.version=_;const d=a.get(h);d&&e.remove(d),a.set(h,f)}function u(h){const p=a.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function lp(r,e,t){let i;function n(p){i=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function l(p,m){r.drawElements(i,m,a,p*s),t.update(m,i,1)}function c(p,m,g){g!==0&&(r.drawElementsInstanced(i,m,a,p*s,g),t.update(m,i,g))}function u(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,p,0,g);let _=0;for(let f=0;f<g;f++)_+=m[f];t.update(_,i,1)}function h(p,m,g,_){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<p.length;d++)c(p[d]/s,m[d],_[d]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,a,p,0,_,0,g);let d=0;for(let S=0;S<g;S++)d+=m[S]*_[S];t.update(d,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function up(r,e,t){const i=new WeakMap,n=new st;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let p=i.get(o);if(p===void 0||p.count!==h){let m=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",m)};p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),f===!0&&(M=3);let U=o.attributes.position.count*M,A=1;U>e.maxTextureSize&&(A=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const w=new Float32Array(U*A*4*h),C=new pl(w,U,A,h);C.type=ni,C.needsUpdate=!0;const b=M*4;for(let x=0;x<h;x++){const R=d[x],F=S[x],B=E[x],H=U*A*4*x;for(let X=0;X<R.count;X++){const W=X*b;g===!0&&(n.fromBufferAttribute(R,X),w[H+W+0]=n.x,w[H+W+1]=n.y,w[H+W+2]=n.z,w[H+W+3]=0),_===!0&&(n.fromBufferAttribute(F,X),w[H+W+4]=n.x,w[H+W+5]=n.y,w[H+W+6]=n.z,w[H+W+7]=0),f===!0&&(n.fromBufferAttribute(B,X),w[H+W+8]=n.x,w[H+W+9]=n.y,w[H+W+10]=n.z,w[H+W+11]=B.itemSize===4?n.w:1)}}p={count:h,texture:C,size:new Ie(U,A)},i.set(o,p),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:a}}function hp(r,e,t,i){let n=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return h}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class bl extends bt{constructor(e,t,i,n,a,s,o,l,c,u=or){if(u!==or&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===or&&(i=Bi),i===void 0&&u===pr&&(i=dr),super(null,n,a,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sl=new bt,ho=new bl(1,1),El=new pl,Tl=new $c,wl=new xl,po=[],fo=[],mo=new Float32Array(16),go=new Float32Array(9),_o=new Float32Array(4);function Mr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let a=po[n];if(a===void 0&&(a=new Float32Array(n),po[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function pt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ft(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function In(r,e){let t=fo[e];t===void 0&&(t=new Int32Array(e),fo[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function dp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2fv(this.addr,e),ft(t,e)}}function fp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;r.uniform3fv(this.addr,e),ft(t,e)}}function mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4fv(this.addr,e),ft(t,e)}}function gp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(pt(t,i))return;_o.set(i),r.uniformMatrix2fv(this.addr,!1,_o),ft(t,i)}}function _p(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(pt(t,i))return;go.set(i),r.uniformMatrix3fv(this.addr,!1,go),ft(t,i)}}function vp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(pt(t,i))return;mo.set(i),r.uniformMatrix4fv(this.addr,!1,mo),ft(t,i)}}function xp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2iv(this.addr,e),ft(t,e)}}function yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3iv(this.addr,e),ft(t,e)}}function bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4iv(this.addr,e),ft(t,e)}}function Sp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ep(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2uiv(this.addr,e),ft(t,e)}}function Tp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3uiv(this.addr,e),ft(t,e)}}function wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4uiv(this.addr,e),ft(t,e)}}function Ap(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let a;this.type===r.SAMPLER_2D_SHADOW?(ho.compareFunction=ul,a=ho):a=Sl,t.setTexture2D(e||a,n)}function Rp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Tl,n)}function Cp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||wl,n)}function Pp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||El,n)}function Lp(r){switch(r){case 5126:return dp;case 35664:return pp;case 35665:return fp;case 35666:return mp;case 35674:return gp;case 35675:return _p;case 35676:return vp;case 5124:case 35670:return xp;case 35667:case 35671:return Mp;case 35668:case 35672:return yp;case 35669:case 35673:return bp;case 5125:return Sp;case 36294:return Ep;case 36295:return Tp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Dp(r,e){r.uniform1fv(this.addr,e)}function Ip(r,e){const t=Mr(e,this.size,2);r.uniform2fv(this.addr,t)}function Up(r,e){const t=Mr(e,this.size,3);r.uniform3fv(this.addr,t)}function Np(r,e){const t=Mr(e,this.size,4);r.uniform4fv(this.addr,t)}function Op(r,e){const t=Mr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Fp(r,e){const t=Mr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Bp(r,e){const t=Mr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function zp(r,e){r.uniform1iv(this.addr,e)}function kp(r,e){r.uniform2iv(this.addr,e)}function Hp(r,e){r.uniform3iv(this.addr,e)}function Gp(r,e){r.uniform4iv(this.addr,e)}function Vp(r,e){r.uniform1uiv(this.addr,e)}function Wp(r,e){r.uniform2uiv(this.addr,e)}function Xp(r,e){r.uniform3uiv(this.addr,e)}function qp(r,e){r.uniform4uiv(this.addr,e)}function jp(r,e,t){const i=this.cache,n=e.length,a=In(t,n);pt(i,a)||(r.uniform1iv(this.addr,a),ft(i,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Sl,a[s])}function Yp(r,e,t){const i=this.cache,n=e.length,a=In(t,n);pt(i,a)||(r.uniform1iv(this.addr,a),ft(i,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Tl,a[s])}function Kp(r,e,t){const i=this.cache,n=e.length,a=In(t,n);pt(i,a)||(r.uniform1iv(this.addr,a),ft(i,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||wl,a[s])}function Zp(r,e,t){const i=this.cache,n=e.length,a=In(t,n);pt(i,a)||(r.uniform1iv(this.addr,a),ft(i,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||El,a[s])}function $p(r){switch(r){case 5126:return Dp;case 35664:return Ip;case 35665:return Up;case 35666:return Np;case 35674:return Op;case 35675:return Fp;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return kp;case 35668:case 35672:return Hp;case 35669:case 35673:return Gp;case 5125:return Vp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}class Jp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lp(t.type)}}class Qp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$p(t.type)}}class ef{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],i)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function vo(r,e){r.seq.push(e),r.map[e.id]=e}function tf(r,e,t){const i=r.name,n=i.length;for(ha.lastIndex=0;;){const a=ha.exec(i),s=ha.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){vo(t,c===void 0?new Jp(o,r,e):new Qp(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new ef(o),vo(t,u)),t=u}}}class Sn{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);tf(a,s,this)}}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function xo(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const rf=37297;let nf=0;function af(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Mo=new Ce;function sf(r){Ve._getMatrix(Mo,Ve.workingColorSpace,r);const e=`mat3( ${Mo.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(r)){case Ln:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function yo(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+af(r.getShaderSource(e),s)}else return n}function of(r,e){const t=sf(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lf(r,e){let t;switch(e){case Ec:t="Linear";break;case Tc:t="Reinhard";break;case wc:t="Cineon";break;case Ac:t="ACESFilmic";break;case Cc:t="AgX";break;case Pc:t="Neutral";break;case Rc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const un=new D;function cf(){Ve.getLuminanceCoefficients(un);const r=un.x.toFixed(4),e=un.y.toFixed(4),t=un.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function hf(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function df(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=r.getActiveAttrib(e,n),s=a.name;let o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function Ur(r){return r!==""}function bo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function So(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pf=/^[ \t]*#include +<([\w\d./]+)>/gm;function as(r){return r.replace(pf,mf)}const ff=new Map;function mf(r,e){let t=Le[e];if(t===void 0){const i=ff.get(e);if(i!==void 0)t=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return as(t)}const gf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eo(r){return r.replace(gf,_f)}function _f(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function To(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ko?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Zo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function xf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ur:case hr:e="ENVMAP_TYPE_CUBE";break;case Pn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function yf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $o:e="ENVMAP_BLENDING_MULTIPLY";break;case bc:e="ENVMAP_BLENDING_MIX";break;case Sc:e="ENVMAP_BLENDING_ADD";break}return e}function bf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Sf(r,e,t,i){const n=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=vf(t),c=xf(t),u=Mf(t),h=yf(t),p=bf(t),m=uf(t),g=hf(a),_=n.createProgram();let f,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),d.length>0&&(d+=`
`)):(f=[To(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),d=[To(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Le.tonemapping_pars_fragment:"",t.toneMapping!==_i?lf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,of("linearToOutputTexel",t.outputColorSpace),cf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),s=as(s),s=bo(s,t),s=So(s,t),o=as(o),o=bo(o,t),o=So(o,t),s=Eo(s),o=Eo(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",t.glslVersion===Fs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=S+f+s,M=S+d+o,U=xo(n,n.VERTEX_SHADER,E),A=xo(n,n.FRAGMENT_SHADER,M);n.attachShader(_,U),n.attachShader(_,A),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function w(R){if(r.debug.checkShaderErrors){const F=n.getProgramInfoLog(_).trim(),B=n.getShaderInfoLog(U).trim(),H=n.getShaderInfoLog(A).trim();let X=!0,W=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,U,A);else{const Y=yo(n,U,"vertex"),G=yo(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+Y+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||H==="")&&(W=!1);W&&(R.diagnostics={runnable:X,programLog:F,vertexShader:{log:B,prefix:f},fragmentShader:{log:H,prefix:d}})}n.deleteShader(U),n.deleteShader(A),C=new Sn(n,_),b=df(n,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=n.getProgramParameter(_,rf)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=A,this}let Ef=0;class Tf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wf(e),t.set(e,i)),i}}class wf{constructor(e){this.id=Ef++,this.code=e,this.usedTimes=0}}function Af(r,e,t,i,n,a,s){const o=new _s,l=new Tf,c=new Set,u=[],h=n.logarithmicDepthBuffer,p=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function f(b,x,R,F,B){const H=F.fog,X=B.geometry,W=b.isMeshStandardMaterial?F.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),G=Y&&Y.mapping===Pn?Y.image.height:null,ee=g[b.type];b.precision!==null&&(m=n.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,we=pe!==void 0?pe.length:0;let Ne=0;X.morphAttributes.position!==void 0&&(Ne=1),X.morphAttributes.normal!==void 0&&(Ne=2),X.morphAttributes.color!==void 0&&(Ne=3);let Ye,q,te,me;if(ee){const Xe=qt[ee];Ye=Xe.vertexShader,q=Xe.fragmentShader}else Ye=b.vertexShader,q=b.fragmentShader,l.update(b),te=l.getVertexShaderID(b),me=l.getFragmentShaderID(b);const se=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),Ae=B.isInstancedMesh===!0,Oe=B.isBatchedMesh===!0,it=!!b.map,He=!!b.matcap,ot=!!Y,N=!!b.aoMap,Pt=!!b.lightMap,Fe=!!b.bumpMap,Be=!!b.normalMap,ye=!!b.displacementMap,Ze=!!b.emissiveMap,xe=!!b.metalnessMap,T=!!b.roughnessMap,v=b.anisotropy>0,O=b.clearcoat>0,K=b.dispersion>0,$=b.iridescence>0,j=b.sheen>0,ge=b.transmission>0,oe=v&&!!b.anisotropyMap,de=O&&!!b.clearcoatMap,Ge=O&&!!b.clearcoatNormalMap,Q=O&&!!b.clearcoatRoughnessMap,ue=$&&!!b.iridescenceMap,be=$&&!!b.iridescenceThicknessMap,Ee=j&&!!b.sheenColorMap,he=j&&!!b.sheenRoughnessMap,ze=!!b.specularMap,Pe=!!b.specularColorMap,Ke=!!b.specularIntensityMap,L=ge&&!!b.transmissionMap,ae=ge&&!!b.thicknessMap,V=!!b.gradientMap,Z=!!b.alphaMap,le=b.alphaTest>0,ie=!!b.alphaHash,ke=!!b.extensions;let nt=_i;b.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(nt=r.toneMapping);const gt={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:Ye,fragmentShader:q,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Oe,batchingColor:Oe&&B._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&B.instanceColor!==null,instancingMorph:Ae&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:_r,alphaToCoverage:!!b.alphaToCoverage,map:it,matcap:He,envMap:ot,envMapMode:ot&&Y.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Pt,bumpMap:Fe,normalMap:Be,displacementMap:p&&ye,emissiveMap:Ze,normalMapObjectSpace:Be&&b.normalMapType===Uc,normalMapTangentSpace:Be&&b.normalMapType===cl,metalnessMap:xe,roughnessMap:T,anisotropy:v,anisotropyMap:oe,clearcoat:O,clearcoatMap:de,clearcoatNormalMap:Ge,clearcoatRoughnessMap:Q,dispersion:K,iridescence:$,iridescenceMap:ue,iridescenceThicknessMap:be,sheen:j,sheenColorMap:Ee,sheenRoughnessMap:he,specularMap:ze,specularColorMap:Pe,specularIntensityMap:Ke,transmission:ge,transmissionMap:L,thicknessMap:ae,gradientMap:V,opaque:b.transparent===!1&&b.blending===sr&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:ie,combine:b.combine,mapUv:it&&_(b.map.channel),aoMapUv:N&&_(b.aoMap.channel),lightMapUv:Pt&&_(b.lightMap.channel),bumpMapUv:Fe&&_(b.bumpMap.channel),normalMapUv:Be&&_(b.normalMap.channel),displacementMapUv:ye&&_(b.displacementMap.channel),emissiveMapUv:Ze&&_(b.emissiveMap.channel),metalnessMapUv:xe&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:oe&&_(b.anisotropyMap.channel),clearcoatMapUv:de&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:he&&_(b.sheenRoughnessMap.channel),specularMapUv:ze&&_(b.specularMap.channel),specularColorMapUv:Pe&&_(b.specularColorMap.channel),specularIntensityMapUv:Ke&&_(b.specularIntensityMap.channel),transmissionMapUv:L&&_(b.transmissionMap.channel),thicknessMapUv:ae&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Be||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(it||Z),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:it&&b.map.isVideoTexture===!0&&Ve.getTransfer(b.map.colorSpace)===qe,decodeVideoTextureEmissive:Ze&&b.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(b.emissiveMap.colorSpace)===qe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ri,flipSided:b.side===Tt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function d(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)x.push(R),x.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(S(x,b),E(x,b),x.push(r.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function S(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function E(b,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){const x=g[b.type];let R;if(x){const F=qt[x];R=cu.clone(F.uniforms)}else R=b.uniforms;return R}function U(b,x){let R;for(let F=0,B=u.length;F<B;F++){const H=u[F];if(H.cacheKey===x){R=H,++R.usedTimes;break}}return R===void 0&&(R=new Sf(r,x,b,a),u.push(R)),R}function A(b){if(--b.usedTimes===0){const x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function C(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:M,acquireProgram:U,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:C}}function Rf(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function i(s){r.delete(s)}function n(s,o,l){r.get(s)[o]=l}function a(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:a}}function Cf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function wo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ao(){const r=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function s(h,p,m,g,_,f){let d=r[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},r[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=f),e++,d}function o(h,p,m,g,_,f){const d=s(h,p,m,g,_,f);m.transmission>0?i.push(d):m.transparent===!0?n.push(d):t.push(d)}function l(h,p,m,g,_,f){const d=s(h,p,m,g,_,f);m.transmission>0?i.unshift(d):m.transparent===!0?n.unshift(d):t.unshift(d)}function c(h,p){t.length>1&&t.sort(h||Cf),i.length>1&&i.sort(p||wo),n.length>1&&n.sort(p||wo)}function u(){for(let h=e,p=r.length;h<p;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:u,sort:c}}function Pf(){let r=new WeakMap;function e(i,n){const a=r.get(i);let s;return a===void 0?(s=new Ao,r.set(i,[s])):n>=a.length?(s=new Ao,a.push(s)):s=a[n],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Lf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new De};break;case"SpotLight":t={position:new D,direction:new D,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function Df(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let If=0;function Uf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Nf(r){const e=new Lf,t=Df(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,a=new Je,s=new Je;function o(c){let u=0,h=0,p=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,g=0,_=0,f=0,d=0,S=0,E=0,M=0,U=0,A=0,w=0;c.sort(Uf);for(let b=0,x=c.length;b<x;b++){const R=c[b],F=R.color,B=R.intensity,H=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*B,h+=F.g*B,p+=F.b*B;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],B);w++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,G=t.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=R.shadow.matrix,S++}i.directional[m]=W,m++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(F).multiplyScalar(B),W.distance=H,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[_]=W;const Y=R.shadow;if(R.map&&(i.spotLightMap[U]=R.map,U++,Y.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[_]=Y.matrix,R.castShadow){const G=t.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=X,M++}_++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(F).multiplyScalar(B),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[f]=W,f++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const Y=R.shadow,G=t.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=R.shadow.matrix,E++}i.point[g]=W,g++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(B),W.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[d]=W,d++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=p;const C=i.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==f||C.hemiLength!==d||C.numDirectionalShadows!==S||C.numPointShadows!==E||C.numSpotShadows!==M||C.numSpotMaps!==U||C.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=f,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+U-A,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,C.directionalLength=m,C.pointLength=g,C.spotLength=_,C.rectAreaLength=f,C.hemiLength=d,C.numDirectionalShadows=S,C.numPointShadows=E,C.numSpotShadows=M,C.numSpotMaps=U,C.numLightProbes=w,i.version=If++)}function l(c,u){let h=0,p=0,m=0,g=0,_=0;const f=u.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const E=c[d];if(E.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(f),h++}else if(E.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(f),m++}else if(E.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),s.identity(),a.copy(E.matrixWorld),a.premultiply(f),s.extractRotation(a),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),g++}else if(E.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:i}}function Ro(r){const e=new Nf(r),t=[],i=[];function n(u){c.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function Of(r){let e=new WeakMap;function t(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new Ro(r),e.set(n,[o])):a>=s.length?(o=new Ro(r),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Ff extends bi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Dc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bf extends bi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hf(r,e,t){let i=new vs;const n=new Ie,a=new Ie,s=new st,o=new Ff({depthPacking:Ic}),l=new Bf,c={},u=t.maxTextureSize,h={[Mi]:Tt,[Tt]:Mi,[ri]:ri},p=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:zf,fragmentShader:kf}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let d=this.type;this.render=function(A,w,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const b=r.getRenderTarget(),x=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),F=r.state;F.setBlending(gi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=d!==ii&&this.type===ii,H=d===ii&&this.type!==ii;for(let X=0,W=A.length;X<W;X++){const Y=A[X],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const ee=G.getFrameExtents();if(n.multiply(ee),a.copy(G.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/ee.x),n.x=a.x*ee.x,G.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/ee.y),n.y=a.y*ee.y,G.mapSize.y=a.y)),G.map===null||B===!0||H===!0){const we=this.type!==ii?{minFilter:Vt,magFilter:Vt}:{};G.map!==null&&G.map.dispose(),G.map=new zi(n.x,n.y,we),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const pe=G.getViewportCount();for(let we=0;we<pe;we++){const Ne=G.getViewport(we);s.set(a.x*Ne.x,a.y*Ne.y,a.x*Ne.z,a.y*Ne.w),F.viewport(s),G.updateMatrices(Y,we),i=G.getFrustum(),M(w,C,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===ii&&S(G,C),G.needsUpdate=!1}d=this.type,f.needsUpdate=!1,r.setRenderTarget(b,x,R)};function S(A,w){const C=e.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zi(n.x,n.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,C,p,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,C,m,_,null)}function E(A,w,C,b){let x=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)x=R;else if(x=C.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=x.uuid,B=w.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let X=H[B];X===void 0&&(X=x.clone(),H[B]=X,w.addEventListener("dispose",U)),x=X}if(x.visible=w.visible,x.wireframe=w.wireframe,b===ii?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=r.properties.get(x);F.light=C}return x}function M(A,w,C,b,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const F=e.update(A),B=A.material;if(Array.isArray(B)){const H=F.groups;for(let X=0,W=H.length;X<W;X++){const Y=H[X],G=B[Y.materialIndex];if(G&&G.visible){const ee=E(A,G,b,x);A.onBeforeShadow(r,A,w,C,F,ee,Y),r.renderBufferDirect(C,null,F,ee,A,Y),A.onAfterShadow(r,A,w,C,F,ee,Y)}}}else if(B.visible){const H=E(A,B,b,x);A.onBeforeShadow(r,A,w,C,F,H,null),r.renderBufferDirect(C,null,F,H,A,null),A.onAfterShadow(r,A,w,C,F,H,null)}}const R=A.children;for(let F=0,B=R.length;F<B;F++)M(R[F],w,C,b,x)}function U(A){A.target.removeEventListener("dispose",U);for(const w in c){const C=c[w],b=A.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const Gf={[Ma]:ya,[ba]:Ta,[Sa]:wa,[cr]:Ea,[ya]:Ma,[Ta]:ba,[wa]:Sa,[Ea]:cr};function Vf(r,e){function t(){let L=!1;const ae=new st;let V=null;const Z=new st(0,0,0,0);return{setMask:function(le){V!==le&&!L&&(r.colorMask(le,le,le,le),V=le)},setLocked:function(le){L=le},setClear:function(le,ie,ke,nt,gt){gt===!0&&(le*=nt,ie*=nt,ke*=nt),ae.set(le,ie,ke,nt),Z.equals(ae)===!1&&(r.clearColor(le,ie,ke,nt),Z.copy(ae))},reset:function(){L=!1,V=null,Z.set(-1,0,0,0)}}}function i(){let L=!1,ae=!1,V=null,Z=null,le=null;return{setReversed:function(ie){if(ae!==ie){const ke=e.get("EXT_clip_control");ae?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const nt=le;le=null,this.setClear(nt)}ae=ie},getReversed:function(){return ae},setTest:function(ie){ie?se(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(ie){V!==ie&&!L&&(r.depthMask(ie),V=ie)},setFunc:function(ie){if(ae&&(ie=Gf[ie]),Z!==ie){switch(ie){case Ma:r.depthFunc(r.NEVER);break;case ya:r.depthFunc(r.ALWAYS);break;case ba:r.depthFunc(r.LESS);break;case cr:r.depthFunc(r.LEQUAL);break;case Sa:r.depthFunc(r.EQUAL);break;case Ea:r.depthFunc(r.GEQUAL);break;case Ta:r.depthFunc(r.GREATER);break;case wa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=ie}},setLocked:function(ie){L=ie},setClear:function(ie){le!==ie&&(ae&&(ie=1-ie),r.clearDepth(ie),le=ie)},reset:function(){L=!1,V=null,Z=null,le=null,ae=!1}}}function n(){let L=!1,ae=null,V=null,Z=null,le=null,ie=null,ke=null,nt=null,gt=null;return{setTest:function(Xe){L||(Xe?se(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Xe){ae!==Xe&&!L&&(r.stencilMask(Xe),ae=Xe)},setFunc:function(Xe,Nt,Zt){(V!==Xe||Z!==Nt||le!==Zt)&&(r.stencilFunc(Xe,Nt,Zt),V=Xe,Z=Nt,le=Zt)},setOp:function(Xe,Nt,Zt){(ie!==Xe||ke!==Nt||nt!==Zt)&&(r.stencilOp(Xe,Nt,Zt),ie=Xe,ke=Nt,nt=Zt)},setLocked:function(Xe){L=Xe},setClear:function(Xe){gt!==Xe&&(r.clearStencil(Xe),gt=Xe)},reset:function(){L=!1,ae=null,V=null,Z=null,le=null,ie=null,ke=null,nt=null,gt=null}}}const a=new t,s=new i,o=new n,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,m=[],g=null,_=!1,f=null,d=null,S=null,E=null,M=null,U=null,A=null,w=new De(0,0,0),C=0,b=!1,x=null,R=null,F=null,B=null,H=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=Y>=2);let ee=null,pe={};const we=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),Ye=new st().fromArray(we),q=new st().fromArray(Ne);function te(L,ae,V,Z){const le=new Uint8Array(4),ie=r.createTexture();r.bindTexture(L,ie),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<V;ke++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ae+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return ie}const me={};me[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(r.DEPTH_TEST),s.setFunc(cr),Fe(!1),Be(Ds),se(r.CULL_FACE),N(gi);function se(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Se(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Ae(L,ae){return h[L]!==ae?(r.bindFramebuffer(L,ae),h[L]=ae,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ae),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Oe(L,ae){let V=m,Z=!1;if(L){V=p.get(ae),V===void 0&&(V=[],p.set(ae,V));const le=L.textures;if(V.length!==le.length||V[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,ke=le.length;ie<ke;ie++)V[ie]=r.COLOR_ATTACHMENT0+ie;V.length=le.length,Z=!0}}else V[0]!==r.BACK&&(V[0]=r.BACK,Z=!0);Z&&r.drawBuffers(V)}function it(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const He={[Ui]:r.FUNC_ADD,[ac]:r.FUNC_SUBTRACT,[sc]:r.FUNC_REVERSE_SUBTRACT};He[oc]=r.MIN,He[lc]=r.MAX;const ot={[cc]:r.ZERO,[uc]:r.ONE,[hc]:r.SRC_COLOR,[va]:r.SRC_ALPHA,[_c]:r.SRC_ALPHA_SATURATE,[mc]:r.DST_COLOR,[pc]:r.DST_ALPHA,[dc]:r.ONE_MINUS_SRC_COLOR,[xa]:r.ONE_MINUS_SRC_ALPHA,[gc]:r.ONE_MINUS_DST_COLOR,[fc]:r.ONE_MINUS_DST_ALPHA,[vc]:r.CONSTANT_COLOR,[xc]:r.ONE_MINUS_CONSTANT_COLOR,[Mc]:r.CONSTANT_ALPHA,[yc]:r.ONE_MINUS_CONSTANT_ALPHA};function N(L,ae,V,Z,le,ie,ke,nt,gt,Xe){if(L===gi){_===!0&&(Se(r.BLEND),_=!1);return}if(_===!1&&(se(r.BLEND),_=!0),L!==nc){if(L!==f||Xe!==b){if((d!==Ui||M!==Ui)&&(r.blendEquation(r.FUNC_ADD),d=Ui,M=Ui),Xe)switch(L){case sr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Is:r.blendFunc(r.ONE,r.ONE);break;case Us:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ns:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case sr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Is:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Us:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ns:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,E=null,U=null,A=null,w.set(0,0,0),C=0,f=L,b=Xe}return}le=le||ae,ie=ie||V,ke=ke||Z,(ae!==d||le!==M)&&(r.blendEquationSeparate(He[ae],He[le]),d=ae,M=le),(V!==S||Z!==E||ie!==U||ke!==A)&&(r.blendFuncSeparate(ot[V],ot[Z],ot[ie],ot[ke]),S=V,E=Z,U=ie,A=ke),(nt.equals(w)===!1||gt!==C)&&(r.blendColor(nt.r,nt.g,nt.b,gt),w.copy(nt),C=gt),f=L,b=!1}function Pt(L,ae){L.side===ri?Se(r.CULL_FACE):se(r.CULL_FACE);let V=L.side===Tt;ae&&(V=!V),Fe(V),L.blending===sr&&L.transparent===!1?N(gi):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),a.setMask(L.colorWrite);const Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ze(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){x!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),x=L)}function Be(L){L!==ic?(se(r.CULL_FACE),L!==R&&(L===Ds?r.cullFace(r.BACK):L===rc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),R=L}function ye(L){L!==F&&(W&&r.lineWidth(L),F=L)}function Ze(L,ae,V){L?(se(r.POLYGON_OFFSET_FILL),(B!==ae||H!==V)&&(r.polygonOffset(ae,V),B=ae,H=V)):Se(r.POLYGON_OFFSET_FILL)}function xe(L){L?se(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function T(L){L===void 0&&(L=r.TEXTURE0+X-1),ee!==L&&(r.activeTexture(L),ee=L)}function v(L,ae,V){V===void 0&&(ee===null?V=r.TEXTURE0+X-1:V=ee);let Z=pe[V];Z===void 0&&(Z={type:void 0,texture:void 0},pe[V]=Z),(Z.type!==L||Z.texture!==ae)&&(ee!==V&&(r.activeTexture(V),ee=V),r.bindTexture(L,ae||me[L]),Z.type=L,Z.texture=ae)}function O(){const L=pe[ee];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(L){Ye.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ye.copy(L))}function he(L){q.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function ze(L,ae){let V=c.get(ae);V===void 0&&(V=new WeakMap,c.set(ae,V));let Z=V.get(L);Z===void 0&&(Z=r.getUniformBlockIndex(ae,L.name),V.set(L,Z))}function Pe(L,ae){const V=c.get(ae).get(L);l.get(ae)!==V&&(r.uniformBlockBinding(ae,V,L.__bindingPointIndex),l.set(ae,V))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),s.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,pe={},h={},p=new WeakMap,m=[],g=null,_=!1,f=null,d=null,S=null,E=null,M=null,U=null,A=null,w=new De(0,0,0),C=0,b=!1,x=null,R=null,F=null,B=null,H=null,Ye.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:se,disable:Se,bindFramebuffer:Ae,drawBuffers:Oe,useProgram:it,setBlending:N,setMaterial:Pt,setFlipSided:Fe,setCullFace:Be,setLineWidth:ye,setPolygonOffset:Ze,setScissorTest:xe,activeTexture:T,bindTexture:v,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:ue,texImage3D:be,updateUBOMapping:ze,uniformBlockBinding:Pe,texStorage2D:Ge,texStorage3D:Q,texSubImage2D:j,texSubImage3D:ge,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Ee,viewport:he,reset:Ke}}function Co(r,e,t,i){const n=Wf(i);switch(t){case il:return r*e;case nl:return r*e;case al:return r*e*2;case sl:return r*e/n.components*n.byteLength;case ps:return r*e/n.components*n.byteLength;case ol:return r*e*2/n.components*n.byteLength;case fs:return r*e*2/n.components*n.byteLength;case rl:return r*e*3/n.components*n.byteLength;case Gt:return r*e*4/n.components*n.byteLength;case ms:return r*e*4/n.components*n.byteLength;case vn:case xn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mn:case yn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Da:case Ua:return Math.max(r,16)*Math.max(e,8)/4;case La:case Ia:return Math.max(r,8)*Math.max(e,8)/2;case Na:case Oa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Va:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case qa:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Za:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case $a:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bn:case Ja:case Qa:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ll:case es:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ts:case is:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wf(r){switch(r){case oi:case Qo:return{byteLength:1,components:1};case Nr:case el:case Fr:return{byteLength:2,components:1};case hs:case ds:return{byteLength:2,components:4};case Bi:case us:case ni:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Xf(r,e,t,i,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,u=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return m?new OffscreenCanvas(T,v):Tn("canvas")}function _(T,v,O){let K=1;const $=xe(T);if(($.width>O||$.height>O)&&(K=O/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(K*$.width),ge=Math.floor(K*$.height);h===void 0&&(h=g(j,ge));const oe=v?g(j,ge):h;return oe.width=j,oe.height=ge,oe.getContext("2d").drawImage(T,0,0,j,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+ge+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function f(T){return T.generateMipmaps}function d(T){r.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(T,v,O,K,$=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=v;if(v===r.RED&&(O===r.FLOAT&&(j=r.R32F),O===r.HALF_FLOAT&&(j=r.R16F),O===r.UNSIGNED_BYTE&&(j=r.R8)),v===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.R8UI),O===r.UNSIGNED_SHORT&&(j=r.R16UI),O===r.UNSIGNED_INT&&(j=r.R32UI),O===r.BYTE&&(j=r.R8I),O===r.SHORT&&(j=r.R16I),O===r.INT&&(j=r.R32I)),v===r.RG&&(O===r.FLOAT&&(j=r.RG32F),O===r.HALF_FLOAT&&(j=r.RG16F),O===r.UNSIGNED_BYTE&&(j=r.RG8)),v===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RG8UI),O===r.UNSIGNED_SHORT&&(j=r.RG16UI),O===r.UNSIGNED_INT&&(j=r.RG32UI),O===r.BYTE&&(j=r.RG8I),O===r.SHORT&&(j=r.RG16I),O===r.INT&&(j=r.RG32I)),v===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RGB8UI),O===r.UNSIGNED_SHORT&&(j=r.RGB16UI),O===r.UNSIGNED_INT&&(j=r.RGB32UI),O===r.BYTE&&(j=r.RGB8I),O===r.SHORT&&(j=r.RGB16I),O===r.INT&&(j=r.RGB32I)),v===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),O===r.UNSIGNED_INT&&(j=r.RGBA32UI),O===r.BYTE&&(j=r.RGBA8I),O===r.SHORT&&(j=r.RGBA16I),O===r.INT&&(j=r.RGBA32I)),v===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),v===r.RGBA){const ge=$?Ln:Ve.getTransfer(K);O===r.FLOAT&&(j=r.RGBA32F),O===r.HALF_FLOAT&&(j=r.RGBA16F),O===r.UNSIGNED_BYTE&&(j=ge===qe?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(T,v){let O;return T?v===null||v===Bi||v===dr?O=r.DEPTH24_STENCIL8:v===ni?O=r.DEPTH32F_STENCIL8:v===Nr&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Bi||v===dr?O=r.DEPTH_COMPONENT24:v===ni?O=r.DEPTH_COMPONENT32F:v===Nr&&(O=r.DEPTH_COMPONENT16),O}function U(T,v){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Vt&&T.minFilter!==Ht?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),C(v),v.isVideoTexture&&u.delete(v)}function w(T){const v=T.target;v.removeEventListener("dispose",w),x(v)}function C(T){const v=i.get(T);if(v.__webglInit===void 0)return;const O=T.source,K=p.get(O);if(K){const $=K[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(T),Object.keys(K).length===0&&p.delete(O)}i.remove(T)}function b(T){const v=i.get(T);r.deleteTexture(v.__webglTexture);const O=T.source,K=p.get(O);delete K[v.__cacheKey],s.memory.textures--}function x(T){const v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let $=0;$<v.__webglFramebuffer[K].length;$++)r.deleteFramebuffer(v.__webglFramebuffer[K][$]);else r.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)r.deleteFramebuffer(v.__webglFramebuffer[K]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=T.textures;for(let K=0,$=O.length;K<$;K++){const j=i.get(O[K]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),s.memory.textures--),i.remove(O[K])}i.remove(T)}let R=0;function F(){R=0}function B(){const T=R;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),R+=1,T}function H(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function X(T,v){const O=i.get(T);if(T.isVideoTexture&&ye(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,T,v);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+v)}function W(T,v){const O=i.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+v)}function Y(T,v){const O=i.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,v);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+v)}function G(T,v){const O=i.get(T);if(T.version>0&&O.__version!==T.version){te(O,T,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+v)}const ee={[Ca]:r.REPEAT,[Oi]:r.CLAMP_TO_EDGE,[Pa]:r.MIRRORED_REPEAT},pe={[Vt]:r.NEAREST,[Lc]:r.NEAREST_MIPMAP_NEAREST,[Vr]:r.NEAREST_MIPMAP_LINEAR,[Ht]:r.LINEAR,[Fn]:r.LINEAR_MIPMAP_NEAREST,[Fi]:r.LINEAR_MIPMAP_LINEAR},we={[Nc]:r.NEVER,[Hc]:r.ALWAYS,[Oc]:r.LESS,[ul]:r.LEQUAL,[Fc]:r.EQUAL,[kc]:r.GEQUAL,[Bc]:r.GREATER,[zc]:r.NOTEQUAL};function Ne(T,v){if(v.type===ni&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ht||v.magFilter===Fn||v.magFilter===Vr||v.magFilter===Fi||v.minFilter===Ht||v.minFilter===Fn||v.minFilter===Vr||v.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,ee[v.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,ee[v.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,ee[v.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,pe[v.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,we[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Vt||v.minFilter!==Vr&&v.minFilter!==Fi||v.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ye(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const K=v.source;let $=p.get(K);$===void 0&&($={},p.set(K,$));const j=H(v);if(j!==T.__cacheKey){$[j]===void 0&&($[j]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,O=!0),$[j].usedTimes++;const ge=$[T.__cacheKey];ge!==void 0&&($[T.__cacheKey].usedTimes--,ge.usedTimes===0&&b(v)),T.__cacheKey=j,T.__webglTexture=$[j].texture}return O}function q(T,v,O){let K=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=r.TEXTURE_3D);const $=Ye(T,v),j=v.source;t.bindTexture(K,T.__webglTexture,r.TEXTURE0+O);const ge=i.get(j);if(j.version!==ge.__version||$===!0){t.activeTexture(r.TEXTURE0+O);const oe=Ve.getPrimaries(Ve.workingColorSpace),de=v.colorSpace===mi?null:Ve.getPrimaries(v.colorSpace),Ge=v.colorSpace===mi||oe===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let Q=_(v.image,!1,n.maxTextureSize);Q=Ze(v,Q);const ue=a.convert(v.format,v.colorSpace),be=a.convert(v.type);let Ee=E(v.internalFormat,ue,be,v.colorSpace,v.isVideoTexture);Ne(K,v);let he;const ze=v.mipmaps,Pe=v.isVideoTexture!==!0,Ke=ge.__version===void 0||$===!0,L=j.dataReady,ae=U(v,Q);if(v.isDepthTexture)Ee=M(v.format===pr,v.type),Ke&&(Pe?t.texStorage2D(r.TEXTURE_2D,1,Ee,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,Ee,Q.width,Q.height,0,ue,be,null));else if(v.isDataTexture)if(ze.length>0){Pe&&Ke&&t.texStorage2D(r.TEXTURE_2D,ae,Ee,ze[0].width,ze[0].height);for(let V=0,Z=ze.length;V<Z;V++)he=ze[V],Pe?L&&t.texSubImage2D(r.TEXTURE_2D,V,0,0,he.width,he.height,ue,be,he.data):t.texImage2D(r.TEXTURE_2D,V,Ee,he.width,he.height,0,ue,be,he.data);v.generateMipmaps=!1}else Pe?(Ke&&t.texStorage2D(r.TEXTURE_2D,ae,Ee,Q.width,Q.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,ue,be,Q.data)):t.texImage2D(r.TEXTURE_2D,0,Ee,Q.width,Q.height,0,ue,be,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Ee,ze[0].width,ze[0].height,Q.depth);for(let V=0,Z=ze.length;V<Z;V++)if(he=ze[V],v.format!==Gt)if(ue!==null)if(Pe){if(L)if(v.layerUpdates.size>0){const le=Co(he.width,he.height,v.format,v.type);for(const ie of v.layerUpdates){const ke=he.data.subarray(ie*le/he.data.BYTES_PER_ELEMENT,(ie+1)*le/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,ie,he.width,he.height,1,ue,ke)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,he.width,he.height,Q.depth,ue,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,V,Ee,he.width,he.height,Q.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,he.width,he.height,Q.depth,ue,be,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,V,Ee,he.width,he.height,Q.depth,0,ue,be,he.data)}else{Pe&&Ke&&t.texStorage2D(r.TEXTURE_2D,ae,Ee,ze[0].width,ze[0].height);for(let V=0,Z=ze.length;V<Z;V++)he=ze[V],v.format!==Gt?ue!==null?Pe?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,V,0,0,he.width,he.height,ue,he.data):t.compressedTexImage2D(r.TEXTURE_2D,V,Ee,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?L&&t.texSubImage2D(r.TEXTURE_2D,V,0,0,he.width,he.height,ue,be,he.data):t.texImage2D(r.TEXTURE_2D,V,Ee,he.width,he.height,0,ue,be,he.data)}else if(v.isDataArrayTexture)if(Pe){if(Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Ee,Q.width,Q.height,Q.depth),L)if(v.layerUpdates.size>0){const V=Co(Q.width,Q.height,v.format,v.type);for(const Z of v.layerUpdates){const le=Q.data.subarray(Z*V/Q.data.BYTES_PER_ELEMENT,(Z+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ue,be,le)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,be,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,ue,be,Q.data);else if(v.isData3DTexture)Pe?(Ke&&t.texStorage3D(r.TEXTURE_3D,ae,Ee,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,be,Q.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,ue,be,Q.data);else if(v.isFramebufferTexture){if(Ke)if(Pe)t.texStorage2D(r.TEXTURE_2D,ae,Ee,Q.width,Q.height);else{let V=Q.width,Z=Q.height;for(let le=0;le<ae;le++)t.texImage2D(r.TEXTURE_2D,le,Ee,V,Z,0,ue,be,null),V>>=1,Z>>=1}}else if(ze.length>0){if(Pe&&Ke){const V=xe(ze[0]);t.texStorage2D(r.TEXTURE_2D,ae,Ee,V.width,V.height)}for(let V=0,Z=ze.length;V<Z;V++)he=ze[V],Pe?L&&t.texSubImage2D(r.TEXTURE_2D,V,0,0,ue,be,he):t.texImage2D(r.TEXTURE_2D,V,Ee,ue,be,he);v.generateMipmaps=!1}else if(Pe){if(Ke){const V=xe(Q);t.texStorage2D(r.TEXTURE_2D,ae,Ee,V.width,V.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,be,Q)}else t.texImage2D(r.TEXTURE_2D,0,Ee,ue,be,Q);f(v)&&d(K),ge.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function te(T,v,O){if(v.image.length!==6)return;const K=Ye(T,v),$=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+O);const j=i.get($);if($.version!==j.__version||K===!0){t.activeTexture(r.TEXTURE0+O);const ge=Ve.getPrimaries(Ve.workingColorSpace),oe=v.colorSpace===mi?null:Ve.getPrimaries(v.colorSpace),de=v.colorSpace===mi||ge===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ge=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!Ge&&!Q?ue[Z]=_(v.image[Z],!0,n.maxCubemapSize):ue[Z]=Q?v.image[Z].image:v.image[Z],ue[Z]=Ze(v,ue[Z]);const be=ue[0],Ee=a.convert(v.format,v.colorSpace),he=a.convert(v.type),ze=E(v.internalFormat,Ee,he,v.colorSpace),Pe=v.isVideoTexture!==!0,Ke=j.__version===void 0||K===!0,L=$.dataReady;let ae=U(v,be);Ne(r.TEXTURE_CUBE_MAP,v);let V;if(Ge){Pe&&Ke&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,ze,be.width,be.height);for(let Z=0;Z<6;Z++){V=ue[Z].mipmaps;for(let le=0;le<V.length;le++){const ie=V[le];v.format!==Gt?Ee!==null?Pe?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,ie.width,ie.height,Ee,ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,ze,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,ie.width,ie.height,Ee,he,ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,ze,ie.width,ie.height,0,Ee,he,ie.data)}}}else{if(V=v.mipmaps,Pe&&Ke){V.length>0&&ae++;const Z=xe(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Pe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ue[Z].width,ue[Z].height,Ee,he,ue[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,ue[Z].width,ue[Z].height,0,Ee,he,ue[Z].data);for(let le=0;le<V.length;le++){const ie=V[le].image[Z].image;Pe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,ie.width,ie.height,Ee,he,ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,ze,ie.width,ie.height,0,Ee,he,ie.data)}}else{Pe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,he,ue[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,Ee,he,ue[Z]);for(let le=0;le<V.length;le++){const ie=V[le];Pe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Ee,he,ie.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,ze,Ee,he,ie.image[Z])}}}f(v)&&d(r.TEXTURE_CUBE_MAP),j.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function me(T,v,O,K,$,j){const ge=a.convert(O.format,O.colorSpace),oe=a.convert(O.type),de=E(O.internalFormat,ge,oe,O.colorSpace),Ge=i.get(v),Q=i.get(O);if(Q.__renderTarget=v,!Ge.__hasExternalTextures){const ue=Math.max(1,v.width>>j),be=Math.max(1,v.height>>j);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,j,de,ue,be,v.depth,0,ge,oe,null):t.texImage2D($,j,de,ue,be,0,ge,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),Be(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,$,Q.__webglTexture,0,Fe(v)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,$,Q.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(T,v,O){if(r.bindRenderbuffer(r.RENDERBUFFER,T),v.depthBuffer){const K=v.depthTexture,$=K&&K.isDepthTexture?K.type:null,j=M(v.stencilBuffer,$),ge=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=Fe(v);Be(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,j,v.width,v.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,j,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,j,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,T)}else{const K=v.textures;for(let $=0;$<K.length;$++){const j=K[$],ge=a.convert(j.format,j.colorSpace),oe=a.convert(j.type),de=E(j.internalFormat,ge,oe,j.colorSpace),Ge=Fe(v);O&&Be(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,de,v.width,v.height):Be(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,de,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,de,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(v.depthTexture);O.__renderTarget=v,(!O.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const K=O.__webglTexture,$=Fe(v);if(v.depthTexture.format===or)Be(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(v.depthTexture.format===pr)Be(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ae(T){const v=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=K}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Se(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=r.createRenderbuffer(),se(v.__webglDepthbuffer[K],T,!1);else{const $=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),se(v.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,$)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(T,v,O){const K=i.get(T);v!==void 0&&me(K.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Ae(T)}function it(T){const v=T.texture,O=i.get(T),K=i.get(v);T.addEventListener("dispose",w);const $=T.textures,j=T.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=v.version,s.memory.textures++),j){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let de=0;de<v.mipmaps.length;de++)O.__webglFramebuffer[oe][de]=r.createFramebuffer()}else O.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)O.__webglFramebuffer[oe]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(ge)for(let oe=0,de=$.length;oe<de;oe++){const Ge=i.get($[oe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),s.memory.textures++)}if(T.samples>0&&Be(T)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const de=$[oe];O.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);const Ge=a.convert(de.format,de.colorSpace),Q=a.convert(de.type),ue=E(de.internalFormat,Ge,Q,de.colorSpace,T.isXRRenderTarget===!0),be=Fe(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ue,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),se(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)me(O.__webglFramebuffer[oe][de],T,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else me(O.__webglFramebuffer[oe],T,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);f(v)&&d(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let oe=0,de=$.length;oe<de;oe++){const Ge=$[oe],Q=i.get(Ge);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Ne(r.TEXTURE_2D,Ge),me(O.__webglFramebuffer,T,Ge,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),f(Ge)&&d(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),Ne(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)me(O.__webglFramebuffer[de],T,v,r.COLOR_ATTACHMENT0,oe,de);else me(O.__webglFramebuffer,T,v,r.COLOR_ATTACHMENT0,oe,0);f(v)&&d(oe),t.unbindTexture()}T.depthBuffer&&Ae(T)}function He(T){const v=T.textures;for(let O=0,K=v.length;O<K;O++){const $=v[O];if(f($)){const j=S(T),ge=i.get($).__webglTexture;t.bindTexture(j,ge),d(j),t.unbindTexture()}}}const ot=[],N=[];function Pt(T){if(T.samples>0){if(Be(T)===!1){const v=T.textures,O=T.width,K=T.height;let $=r.COLOR_BUFFER_BIT;const j=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=i.get(T),oe=v.length>1;if(oe)for(let de=0;de<v.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let de=0;de<v.length;de++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const Ge=i.get(v[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,O,K,0,0,O,K,$,r.NEAREST),l===!0&&(ot.length=0,N.length=0,ot.push(r.COLOR_ATTACHMENT0+de),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ot.push(j),N.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<v.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const Ge=i.get(v[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Fe(T){return Math.min(n.maxSamples,T.samples)}function Be(T){const v=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ye(T){const v=s.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function Ze(T,v){const O=T.colorSpace,K=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==_r&&O!==mi&&(Ve.getTransfer(O)===qe?(K!==Gt||$!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function xe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=Oe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Be}function qf(r,e){function t(i,n=mi){let a;const s=Ve.getTransfer(n);if(i===oi)return r.UNSIGNED_BYTE;if(i===hs)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ds)return r.UNSIGNED_SHORT_5_5_5_1;if(i===tl)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Qo)return r.BYTE;if(i===el)return r.SHORT;if(i===Nr)return r.UNSIGNED_SHORT;if(i===us)return r.INT;if(i===Bi)return r.UNSIGNED_INT;if(i===ni)return r.FLOAT;if(i===Fr)return r.HALF_FLOAT;if(i===il)return r.ALPHA;if(i===rl)return r.RGB;if(i===Gt)return r.RGBA;if(i===nl)return r.LUMINANCE;if(i===al)return r.LUMINANCE_ALPHA;if(i===or)return r.DEPTH_COMPONENT;if(i===pr)return r.DEPTH_STENCIL;if(i===sl)return r.RED;if(i===ps)return r.RED_INTEGER;if(i===ol)return r.RG;if(i===fs)return r.RG_INTEGER;if(i===ms)return r.RGBA_INTEGER;if(i===vn||i===xn||i===Mn||i===yn)if(s===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===vn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===vn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===La||i===Da||i===Ia||i===Ua)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===La)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Da)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ia)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ua)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Na||i===Oa||i===Fa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Na||i===Oa)return s===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Fa)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ba||i===za||i===ka||i===Ha||i===Ga||i===Va||i===Wa||i===Xa||i===qa||i===ja||i===Ya||i===Ka||i===Za||i===$a)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ba)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===za)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ka)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ha)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ga)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Va)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wa)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xa)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qa)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ja)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ya)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ka)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Za)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$a)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bn||i===Ja||i===Qa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===bn)return s===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ja)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ll||i===es||i===ts||i===is)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===bn)return a.COMPRESSED_RED_RGTC1_EXT;if(i===es)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ts)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===is)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class jf extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Et extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yf={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,i),d=this._getHandJoint(c,_);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Kf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $f{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new bt,a=e.properties.get(n);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yi({vertexShader:Kf,fragmentShader:Zf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new kr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jf extends vr{constructor(e,t){super();const i=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,p=null,m=null,g=null;const _=new $f,f=t.getContextAttributes();let d=null,S=null;const E=[],M=[],U=new Ie;let A=null;const w=new It;w.viewport=new st;const C=new It;C.viewport=new st;const b=[w,C],x=new jf;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=E[q];return te===void 0&&(te=new da,E[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=E[q];return te===void 0&&(te=new da,E[q]=te),te.getGripSpace()},this.getHand=function(q){let te=E[q];return te===void 0&&(te=new da,E[q]=te),te.getHandSpace()};function B(q){const te=M.indexOf(q.inputSource);if(te===-1)return;const me=E[te];me!==void 0&&(me.update(q.inputSource,q.frame,c||s),me.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",X);for(let q=0;q<E.length;q++){const te=M[q];te!==null&&(M[q]=null,E[q].disconnect(te))}R=null,F=null,_.reset(),e.setRenderTarget(d),m=null,p=null,h=null,n=null,S=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(d=e.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",H),n.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(U),n.renderState.layers===void 0){const te={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,te),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new zi(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let te=null,me=null,se=null;f.depth&&(se=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=f.stencil?pr:or,me=f.stencil?dr:Bi);const Se={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:a};h=new XRWebGLBinding(n,t),p=h.createProjectionLayer(Se),n.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new zi(p.textureWidth,p.textureHeight,{format:Gt,type:oi,depthTexture:new bl(p.textureWidth,p.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),Ye.setContext(n),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let te=0;te<q.removed.length;te++){const me=q.removed[te],se=M.indexOf(me);se>=0&&(M[se]=null,E[se].disconnect(me))}for(let te=0;te<q.added.length;te++){const me=q.added[te];let se=M.indexOf(me);if(se===-1){for(let Ae=0;Ae<E.length;Ae++)if(Ae>=M.length){M.push(me),se=Ae;break}else if(M[Ae]===null){M[Ae]=me,se=Ae;break}if(se===-1)break}const Se=E[se];Se&&Se.connect(me)}}const W=new D,Y=new D;function G(q,te,me){W.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(me.matrixWorld);const se=W.distanceTo(Y),Se=te.projectionMatrix.elements,Ae=me.projectionMatrix.elements,Oe=Se[14]/(Se[10]-1),it=Se[14]/(Se[10]+1),He=(Se[9]+1)/Se[5],ot=(Se[9]-1)/Se[5],N=(Se[8]-1)/Se[0],Pt=(Ae[8]+1)/Ae[0],Fe=Oe*N,Be=Oe*Pt,ye=se/(-N+Pt),Ze=ye*-N;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ze),q.translateZ(ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const xe=Oe+ye,T=it+ye,v=Fe-Ze,O=Be+(se-Ze),K=He*it/T*xe,$=ot*it/T*xe;q.projectionMatrix.makePerspective(v,O,K,$,xe,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ee(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let te=q.near,me=q.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(me=_.depthFar)),x.near=C.near=w.near=te,x.far=C.far=w.far=me,(R!==x.near||F!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,F=x.far),w.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,x.layers.mask=w.layers.mask|C.layers.mask;const se=q.parent,Se=x.cameras;ee(x,se);for(let Ae=0;Ae<Se.length;Ae++)ee(Se[Ae],se);Se.length===2?G(x,w,C):x.projectionMatrix.copy(w.projectionMatrix),pe(q,x,se)};function pe(q,te,me){me===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(me.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ns*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let we=null;function Ne(q,te){if(u=te.getViewerPose(c||s),g=te,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let se=!1;me.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let Ae=0;Ae<me.length;Ae++){const Oe=me[Ae];let it=null;if(m!==null)it=m.getViewport(Oe);else{const ot=h.getViewSubImage(p,Oe);it=ot.viewport,Ae===0&&(e.setRenderTargetTextures(S,ot.colorTexture,p.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(S))}let He=b[Ae];He===void 0&&(He=new It,He.layers.enable(Ae),He.viewport=new st,b[Ae]=He),He.matrix.fromArray(Oe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Oe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(it.x,it.y,it.width,it.height),Ae===0&&(x.matrix.copy(He.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(He)}const Se=n.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const Ae=h.getDepthInformation(me[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,n.renderState)}}for(let me=0;me<E.length;me++){const se=M[me],Se=E[me];se!==null&&Se!==void 0&&Se.update(se,te,c||s)}we&&we(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ye=new Ml;Ye.setAnimationLoop(Ne),this.setAnimationLoop=function(q){we=q},this.dispose=function(){}}}const Li=new Kt,Qf=new Je;function em(r,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function i(f,d){d.color.getRGB(f.fogColor.value,_l(r)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function n(f,d,S,E,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(f,d):d.isMeshToonMaterial?(a(f,d),h(f,d)):d.isMeshPhongMaterial?(a(f,d),u(f,d)):d.isMeshStandardMaterial?(a(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,M)):d.isMeshMatcapMaterial?(a(f,d),g(f,d)):d.isMeshDepthMaterial?a(f,d):d.isMeshDistanceMaterial?(a(f,d),_(f,d)):d.isMeshNormalMaterial?a(f,d):d.isLineBasicMaterial?(s(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,S,E):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Tt&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Tt&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const S=e.get(d),E=S.envMap,M=S.envMapRotation;E&&(f.envMap.value=E,Li.copy(M),Li.x*=-1,Li.y*=-1,Li.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),f.envMapRotation.value.setFromMatrix4(Qf.makeRotationFromEuler(Li)),f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function s(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,S,E){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*S,f.scale.value=E*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function h(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,S){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tt&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function _(f,d){const S=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function tm(r,e,t,i){let n={},a={},s=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const M=E.program;i.uniformBlockBinding(S,M)}function c(S,E){let M=n[S.id];M===void 0&&(g(S),M=u(S),n[S.id]=M,S.addEventListener("dispose",f));const U=E.program;i.updateUBOMapping(S,U);const A=e.render.frame;a[S.id]!==A&&(p(S),a[S.id]=A)}function u(S){const E=h();S.__bindingPointIndex=E;const M=r.createBuffer(),U=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,U,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,M),M}function h(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const E=n[S.id],M=S.uniforms,U=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let A=0,w=M.length;A<w;A++){const C=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,x=C.length;b<x;b++){const R=C[b];if(m(R,A,b,U)===!0){const F=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let X=0;X<B.length;X++){const W=B[X],Y=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,F+H,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(S,E,M,U){const A=S.value,w=E+"_"+M;if(U[w]===void 0)return typeof A=="number"||typeof A=="boolean"?U[w]=A:U[w]=A.clone(),!0;{const C=U[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return U[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(S){const E=S.uniforms;let M=0;const U=16;for(let w=0,C=E.length;w<C;w++){const b=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,R=b.length;x<R;x++){const F=b[x],B=Array.isArray(F.value)?F.value:[F.value];for(let H=0,X=B.length;H<X;H++){const W=B[H],Y=_(W),G=M%U,ee=G%Y.boundary,pe=G+ee;M+=ee,pe!==0&&U-pe<Y.storage&&(M+=U-pe),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=Y.storage}}}const A=M%U;return A>0&&(M+=U-A),S.__size=M,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function f(S){const E=S.target;E.removeEventListener("dispose",f);const M=s.indexOf(E.__bindingPointIndex);s.splice(M,1),r.deleteBuffer(n[E.id]),delete n[E.id],delete a[E.id]}function d(){for(const S in n)r.deleteBuffer(n[S]);s=[],n={},a={}}return{bind:l,update:c,dispose:d}}class im{constructor(e={}){const{canvas:t=Vc(),context:i=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const g=new Uint32Array(4),_=new Int32Array(4);let f=null,d=null;const S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this.toneMapping=_i,this.toneMappingExposure=1;const M=this;let U=!1,A=0,w=0,C=null,b=-1,x=null;const R=new st,F=new st;let B=null;const H=new De(0);let X=0,W=t.width,Y=t.height,G=1,ee=null,pe=null;const we=new st(0,0,W,Y),Ne=new st(0,0,W,Y);let Ye=!1;const q=new vs;let te=!1,me=!1;const se=new Je,Se=new Je,Ae=new D,Oe=new st,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function ot(){return C===null?G:1}let N=i;function Pt(y,I){return t.getContext(y,I)}try{const y={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cs}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ie,!1),N===null){const I="webgl2";if(N=Pt(I,y),N===null)throw Pt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Fe,Be,ye,Ze,xe,T,v,O,K,$,j,ge,oe,de,Ge,Q,ue,be,Ee,he,ze,Pe,Ke,L;function ae(){Fe=new sp(N),Fe.init(),Pe=new qf(N,Fe),Be=new ep(N,Fe,e,Pe),ye=new Vf(N,Fe),Be.reverseDepthBuffer&&p&&ye.buffers.depth.setReversed(!0),Ze=new cp(N),xe=new Rf,T=new Xf(N,Fe,ye,xe,Be,Pe,Ze),v=new ip(M),O=new ap(M),K=new gu(N),Ke=new Jd(N,K),$=new op(N,K,Ze,Ke),j=new hp(N,$,K,Ze),Ee=new up(N,Be,T),Q=new tp(xe),ge=new Af(M,v,O,Fe,Be,Ke,Q),oe=new em(M,xe),de=new Pf,Ge=new Of(Fe),be=new $d(M,v,O,ye,j,m,l),ue=new Hf(M,j,Be),L=new tm(N,Ze,Be,ye),he=new Qd(N,Fe,Ze),ze=new lp(N,Fe,Ze),Ze.programs=ge.programs,M.capabilities=Be,M.extensions=Fe,M.properties=xe,M.renderLists=de,M.shadowMap=ue,M.state=ye,M.info=Ze}ae();const V=new Jf(M,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Fe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Fe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(W,Y,!1))},this.getSize=function(y){return y.set(W,Y)},this.setSize=function(y,I,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,Y=I,t.width=Math.floor(y*G),t.height=Math.floor(I*G),z===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(W*G,Y*G).floor()},this.setDrawingBufferSize=function(y,I,z){W=y,Y=I,G=z,t.width=Math.floor(y*z),t.height=Math.floor(I*z),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(we)},this.setViewport=function(y,I,z,k){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,I,z,k),ye.viewport(R.copy(we).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Ne)},this.setScissor=function(y,I,z,k){y.isVector4?Ne.set(y.x,y.y,y.z,y.w):Ne.set(y,I,z,k),ye.scissor(F.copy(Ne).multiplyScalar(G).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(y){ye.setScissorTest(Ye=y)},this.setOpaqueSort=function(y){ee=y},this.setTransparentSort=function(y){pe=y},this.getClearColor=function(y){return y.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(y=!0,I=!0,z=!0){let k=0;if(y){let P=!1;if(C!==null){const J=C.texture.format;P=J===ms||J===fs||J===ps}if(P){const J=C.texture.type,ce=J===oi||J===Bi||J===Nr||J===dr||J===hs||J===ds,fe=be.getClearColor(),_e=be.getClearAlpha(),Te=fe.r,Re=fe.g,Me=fe.b;ce?(g[0]=Te,g[1]=Re,g[2]=Me,g[3]=_e,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Te,_[1]=Re,_[2]=Me,_[3]=_e,N.clearBufferiv(N.COLOR,0,_))}else k|=N.COLOR_BUFFER_BIT}I&&(k|=N.DEPTH_BUFFER_BIT),z&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),de.dispose(),Ge.dispose(),xe.dispose(),v.dispose(),O.dispose(),j.dispose(),Ke.dispose(),L.dispose(),ge.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ss),V.removeEventListener("sessionend",Es),Si.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const y=Ze.autoReset,I=ue.enabled,z=ue.autoUpdate,k=ue.needsUpdate,P=ue.type;ae(),Ze.autoReset=y,ue.enabled=I,ue.autoUpdate=z,ue.needsUpdate=k,ue.type=P}function ie(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ke(y){const I=y.target;I.removeEventListener("dispose",ke),nt(I)}function nt(y){gt(y),xe.remove(y)}function gt(y){const I=xe.get(y).programs;I!==void 0&&(I.forEach(function(z){ge.releaseProgram(z)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,z,k,P,J){I===null&&(I=it);const ce=P.isMesh&&P.matrixWorld.determinant()<0,fe=Fl(y,I,z,k,P);ye.setMaterial(k,ce);let _e=z.index,Te=1;if(k.wireframe===!0){if(_e=$.getWireframeAttribute(z),_e===void 0)return;Te=2}const Re=z.drawRange,Me=z.attributes.position;let We=Re.start*Te,Qe=(Re.start+Re.count)*Te;J!==null&&(We=Math.max(We,J.start*Te),Qe=Math.min(Qe,(J.start+J.count)*Te)),_e!==null?(We=Math.max(We,0),Qe=Math.min(Qe,_e.count)):Me!=null&&(We=Math.max(We,0),Qe=Math.min(Qe,Me.count));const et=Qe-We;if(et<0||et===1/0)return;Ke.setup(P,k,fe,z,_e);let ct,tt=he;if(_e!==null&&(ct=K.get(_e),tt=ze,tt.setIndex(ct)),P.isMesh)k.wireframe===!0?(ye.setLineWidth(k.wireframeLinewidth*ot()),tt.setMode(N.LINES)):tt.setMode(N.TRIANGLES);else if(P.isLine){let ve=k.linewidth;ve===void 0&&(ve=1),ye.setLineWidth(ve*ot()),P.isLineSegments?tt.setMode(N.LINES):P.isLineLoop?tt.setMode(N.LINE_LOOP):tt.setMode(N.LINE_STRIP)}else P.isPoints?tt.setMode(N.POINTS):P.isSprite&&tt.setMode(N.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)tt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))tt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const ve=P._multiDrawStarts,Ei=P._multiDrawCounts,Ti=P._multiDrawCount,Ot=_e?K.get(_e).bytesPerElement:1,ki=xe.get(k).currentProgram.getUniforms();for(let At=0;At<Ti;At++)ki.setValue(N,"_gl_DrawID",At),tt.render(ve[At]/Ot,Ei[At])}else if(P.isInstancedMesh)tt.renderInstances(We,et,P.count);else if(z.isInstancedBufferGeometry){const ve=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ei=Math.min(z.instanceCount,ve);tt.renderInstances(We,et,Ei)}else tt.render(We,et)};function Xe(y,I,z){y.transparent===!0&&y.side===ri&&y.forceSinglePass===!1?(y.side=Tt,y.needsUpdate=!0,Gr(y,I,z),y.side=Mi,y.needsUpdate=!0,Gr(y,I,z),y.side=ri):Gr(y,I,z)}this.compile=function(y,I,z=null){z===null&&(z=y),d=Ge.get(z),d.init(I),E.push(d),z.traverseVisible(function(P){P.isLight&&P.layers.test(I.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),y!==z&&y.traverseVisible(function(P){P.isLight&&P.layers.test(I.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),d.setupLights();const k=new Set;return y.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const J=P.material;if(J)if(Array.isArray(J))for(let ce=0;ce<J.length;ce++){const fe=J[ce];Xe(fe,z,P),k.add(fe)}else Xe(J,z,P),k.add(J)}),E.pop(),d=null,k},this.compileAsync=function(y,I,z=null){const k=this.compile(y,I,z);return new Promise(P=>{function J(){if(k.forEach(function(ce){xe.get(ce).currentProgram.isReady()&&k.delete(ce)}),k.size===0){P(y);return}setTimeout(J,10)}Fe.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Nt=null;function Zt(y){Nt&&Nt(y)}function Ss(){Si.stop()}function Es(){Si.start()}const Si=new Ml;Si.setAnimationLoop(Zt),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(y){Nt=y,V.setAnimationLoop(y),y===null?Si.stop():Si.start()},V.addEventListener("sessionstart",Ss),V.addEventListener("sessionend",Es),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,I,C),d=Ge.get(y,E.length),d.init(I),E.push(d),Se.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(Se),me=this.localClippingEnabled,te=Q.init(this.clippingPlanes,me),f=de.get(y,S.length),f.init(),S.push(f),V.enabled===!0&&V.isPresenting===!0){const J=M.xr.getDepthSensingMesh();J!==null&&Nn(J,I,-1/0,M.sortObjects)}Nn(y,I,0,M.sortObjects),f.finish(),M.sortObjects===!0&&f.sort(ee,pe),He=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,He&&be.addToRenderList(f,y),this.info.render.frame++,te===!0&&Q.beginShadows();const z=d.state.shadowsArray;ue.render(z,y,I),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=f.opaque,P=f.transmissive;if(d.setupLights(),I.isArrayCamera){const J=I.cameras;if(P.length>0)for(let ce=0,fe=J.length;ce<fe;ce++){const _e=J[ce];ws(k,P,y,_e)}He&&be.render(y);for(let ce=0,fe=J.length;ce<fe;ce++){const _e=J[ce];Ts(f,y,_e,_e.viewport)}}else P.length>0&&ws(k,P,y,I),He&&be.render(y),Ts(f,y,I);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(M,y,I),Ke.resetDefaultState(),b=-1,x=null,E.pop(),E.length>0?(d=E[E.length-1],te===!0&&Q.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?f=S[S.length-1]:f=null};function Nn(y,I,z,k){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){k&&Oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Se);const J=j.update(y),ce=y.material;ce.visible&&f.push(y,J,ce,z,Oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const J=j.update(y),ce=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Oe.copy(y.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),Oe.copy(J.boundingSphere.center)),Oe.applyMatrix4(y.matrixWorld).applyMatrix4(Se)),Array.isArray(ce)){const fe=J.groups;for(let _e=0,Te=fe.length;_e<Te;_e++){const Re=fe[_e],Me=ce[Re.materialIndex];Me&&Me.visible&&f.push(y,J,Me,z,Oe.z,Re)}}else ce.visible&&f.push(y,J,ce,z,Oe.z,null)}}const P=y.children;for(let J=0,ce=P.length;J<ce;J++)Nn(P[J],I,z,k)}function Ts(y,I,z,k){const P=y.opaque,J=y.transmissive,ce=y.transparent;d.setupLightsView(z),te===!0&&Q.setGlobalState(M.clippingPlanes,z),k&&ye.viewport(R.copy(k)),P.length>0&&Hr(P,I,z),J.length>0&&Hr(J,I,z),ce.length>0&&Hr(ce,I,z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ws(y,I,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new zi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Fr:oi,minFilter:Fi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const P=d.state.transmissionRenderTarget[k.id],J=k.viewport||R;P.setSize(J.z,J.w);const ce=M.getRenderTarget();M.setRenderTarget(P),M.getClearColor(H),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),He&&be.render(z);const fe=M.toneMapping;M.toneMapping=_i;const _e=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),te===!0&&Q.setGlobalState(M.clippingPlanes,k),Hr(y,z,k),T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Re=0,Me=I.length;Re<Me;Re++){const We=I[Re],Qe=We.object,et=We.geometry,ct=We.material,tt=We.group;if(ct.side===ri&&Qe.layers.test(k.layers)){const ve=ct.side;ct.side=Tt,ct.needsUpdate=!0,As(Qe,z,k,et,ct,tt),ct.side=ve,ct.needsUpdate=!0,Te=!0}}Te===!0&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P))}M.setRenderTarget(ce),M.setClearColor(H,X),_e!==void 0&&(k.viewport=_e),M.toneMapping=fe}function Hr(y,I,z){const k=I.isScene===!0?I.overrideMaterial:null;for(let P=0,J=y.length;P<J;P++){const ce=y[P],fe=ce.object,_e=ce.geometry,Te=k===null?ce.material:k,Re=ce.group;fe.layers.test(z.layers)&&As(fe,I,z,_e,Te,Re)}}function As(y,I,z,k,P,J){y.onBeforeRender(M,I,z,k,P,J),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),P.onBeforeRender(M,I,z,k,y,J),P.transparent===!0&&P.side===ri&&P.forceSinglePass===!1?(P.side=Tt,P.needsUpdate=!0,M.renderBufferDirect(z,I,k,P,y,J),P.side=Mi,P.needsUpdate=!0,M.renderBufferDirect(z,I,k,P,y,J),P.side=ri):M.renderBufferDirect(z,I,k,P,y,J),y.onAfterRender(M,I,z,k,P,J)}function Gr(y,I,z){I.isScene!==!0&&(I=it);const k=xe.get(y),P=d.state.lights,J=d.state.shadowsArray,ce=P.state.version,fe=ge.getParameters(y,P.state,J,I,z),_e=ge.getProgramCacheKey(fe);let Te=k.programs;k.environment=y.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(y.isMeshStandardMaterial?O:v).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",ke),Te=new Map,k.programs=Te);let Re=Te.get(_e);if(Re!==void 0){if(k.currentProgram===Re&&k.lightsStateVersion===ce)return Cs(y,fe),Re}else fe.uniforms=ge.getUniforms(y),y.onBeforeCompile(fe,M),Re=ge.acquireProgram(fe,_e),Te.set(_e,Re),k.uniforms=fe.uniforms;const Me=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Me.clippingPlanes=Q.uniform),Cs(y,fe),k.needsLights=zl(y),k.lightsStateVersion=ce,k.needsLights&&(Me.ambientLightColor.value=P.state.ambient,Me.lightProbe.value=P.state.probe,Me.directionalLights.value=P.state.directional,Me.directionalLightShadows.value=P.state.directionalShadow,Me.spotLights.value=P.state.spot,Me.spotLightShadows.value=P.state.spotShadow,Me.rectAreaLights.value=P.state.rectArea,Me.ltc_1.value=P.state.rectAreaLTC1,Me.ltc_2.value=P.state.rectAreaLTC2,Me.pointLights.value=P.state.point,Me.pointLightShadows.value=P.state.pointShadow,Me.hemisphereLights.value=P.state.hemi,Me.directionalShadowMap.value=P.state.directionalShadowMap,Me.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Me.spotShadowMap.value=P.state.spotShadowMap,Me.spotLightMatrix.value=P.state.spotLightMatrix,Me.spotLightMap.value=P.state.spotLightMap,Me.pointShadowMap.value=P.state.pointShadowMap,Me.pointShadowMatrix.value=P.state.pointShadowMatrix),k.currentProgram=Re,k.uniformsList=null,Re}function Rs(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Sn.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Cs(y,I){const z=xe.get(y);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Fl(y,I,z,k,P){I.isScene!==!0&&(I=it),T.resetTextureUnits();const J=I.fog,ce=k.isMeshStandardMaterial?I.environment:null,fe=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_r,_e=(k.isMeshStandardMaterial?O:v).get(k.envMap||ce),Te=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Re=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Me=!!z.morphAttributes.position,We=!!z.morphAttributes.normal,Qe=!!z.morphAttributes.color;let et=_i;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(et=M.toneMapping);const ct=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=ct!==void 0?ct.length:0,ve=xe.get(k),Ei=d.state.lights;if(te===!0&&(me===!0||y!==x)){const St=y===x&&k.id===b;Q.setState(k,y,St)}let Ti=!1;k.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Ei.state.version||ve.outputColorSpace!==fe||P.isBatchedMesh&&ve.batching===!1||!P.isBatchedMesh&&ve.batching===!0||P.isBatchedMesh&&ve.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&ve.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&ve.instancing===!1||!P.isInstancedMesh&&ve.instancing===!0||P.isSkinnedMesh&&ve.skinning===!1||!P.isSkinnedMesh&&ve.skinning===!0||P.isInstancedMesh&&ve.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&ve.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&ve.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&ve.instancingMorph===!1&&P.morphTexture!==null||ve.envMap!==_e||k.fog===!0&&ve.fog!==J||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Q.numPlanes||ve.numIntersection!==Q.numIntersection)||ve.vertexAlphas!==Te||ve.vertexTangents!==Re||ve.morphTargets!==Me||ve.morphNormals!==We||ve.morphColors!==Qe||ve.toneMapping!==et||ve.morphTargetsCount!==tt)&&(Ti=!0):(Ti=!0,ve.__version=k.version);let Ot=ve.currentProgram;Ti===!0&&(Ot=Gr(k,I,P));let ki=!1,At=!1,yr=!1;const $e=Ot.getUniforms(),Xt=ve.uniforms;if(ye.useProgram(Ot.program)&&(ki=!0,At=!0,yr=!0),k.id!==b&&(b=k.id,At=!0),ki||x!==y){ye.buffers.depth.getReversed()?(se.copy(y.projectionMatrix),Xc(se),qc(se),$e.setValue(N,"projectionMatrix",se)):$e.setValue(N,"projectionMatrix",y.projectionMatrix),$e.setValue(N,"viewMatrix",y.matrixWorldInverse);const St=$e.map.cameraPosition;St!==void 0&&St.setValue(N,Ae.setFromMatrixPosition(y.matrixWorld)),Be.logarithmicDepthBuffer&&$e.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&$e.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,At=!0,yr=!0)}if(P.isSkinnedMesh){$e.setOptional(N,P,"bindMatrix"),$e.setOptional(N,P,"bindMatrixInverse");const St=P.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),$e.setValue(N,"boneTexture",St.boneTexture,T))}P.isBatchedMesh&&($e.setOptional(N,P,"batchingTexture"),$e.setValue(N,"batchingTexture",P._matricesTexture,T),$e.setOptional(N,P,"batchingIdTexture"),$e.setValue(N,"batchingIdTexture",P._indirectTexture,T),$e.setOptional(N,P,"batchingColorTexture"),P._colorsTexture!==null&&$e.setValue(N,"batchingColorTexture",P._colorsTexture,T));const br=z.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0)&&Ee.update(P,z,Ot),(At||ve.receiveShadow!==P.receiveShadow)&&(ve.receiveShadow=P.receiveShadow,$e.setValue(N,"receiveShadow",P.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Xt.envMap.value=_e,Xt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Xt.envMapIntensity.value=I.environmentIntensity),At&&($e.setValue(N,"toneMappingExposure",M.toneMappingExposure),ve.needsLights&&Bl(Xt,yr),J&&k.fog===!0&&oe.refreshFogUniforms(Xt,J),oe.refreshMaterialUniforms(Xt,k,G,Y,d.state.transmissionRenderTarget[y.id]),Sn.upload(N,Rs(ve),Xt,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Sn.upload(N,Rs(ve),Xt,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&$e.setValue(N,"center",P.center),$e.setValue(N,"modelViewMatrix",P.modelViewMatrix),$e.setValue(N,"normalMatrix",P.normalMatrix),$e.setValue(N,"modelMatrix",P.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const St=k.uniformsGroups;for(let Sr=0,li=St.length;Sr<li;Sr++){const Ps=St[Sr];L.update(Ps,Ot),L.bind(Ps,Ot)}}return Ot}function Bl(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function zl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,I,z){xe.get(y.texture).__webglTexture=I,xe.get(y.depthTexture).__webglTexture=z;const k=xe.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const z=xe.get(y);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,z=0){C=y,A=I,w=z;let k=!0,P=null,J=!1,ce=!1;if(y){const fe=xe.get(y);if(fe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(fe.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(fe.__hasExternalTextures)T.rebindTextures(y,xe.get(y.texture).__webglTexture,xe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Re=y.depthTexture;if(fe.__boundDepthTexture!==Re){if(Re!==null&&xe.has(Re)&&(y.width!==Re.image.width||y.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const _e=y.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ce=!0);const Te=xe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[I])?P=Te[I][z]:P=Te[I],J=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?P=xe.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?P=Te[z]:P=Te,R.copy(y.viewport),F.copy(y.scissor),B=y.scissorTest}else R.copy(we).multiplyScalar(G).floor(),F.copy(Ne).multiplyScalar(G).floor(),B=Ye;if(ye.bindFramebuffer(N.FRAMEBUFFER,P)&&k&&ye.drawBuffers(y,P),ye.viewport(R),ye.scissor(F),ye.setScissorTest(B),J){const fe=xe.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,fe.__webglTexture,z)}else if(ce){const fe=xe.get(y.texture),_e=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,fe.__webglTexture,z||0,_e)}b=-1},this.readRenderTargetPixels=function(y,I,z,k,P,J,ce){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){ye.bindFramebuffer(N.FRAMEBUFFER,fe);try{const _e=y.texture,Te=_e.format,Re=_e.type;if(!Be.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-k&&z>=0&&z<=y.height-P&&N.readPixels(I,z,k,P,Pe.convert(Te),Pe.convert(Re),J)}finally{const _e=C!==null?xe.get(C).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(y,I,z,k,P,J,ce){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){const _e=y.texture,Te=_e.format,Re=_e.type;if(!Be.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-k&&z>=0&&z<=y.height-P){ye.bindFramebuffer(N.FRAMEBUFFER,fe);const Me=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Me),N.bufferData(N.PIXEL_PACK_BUFFER,J.byteLength,N.STREAM_READ),N.readPixels(I,z,k,P,Pe.convert(Te),Pe.convert(Re),0);const We=C!==null?xe.get(C).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,We);const Qe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Wc(N,Qe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Me),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,J),N.deleteBuffer(Me),N.deleteSync(Qe),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,z=0){y.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-z),P=Math.floor(y.image.width*k),J=Math.floor(y.image.height*k),ce=I!==null?I.x:0,fe=I!==null?I.y:0;T.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,ce,fe,P,J),ye.unbindTexture()},this.copyTextureToTexture=function(y,I,z=null,k=null,P=0){y.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],I=arguments[2],P=arguments[3]||0,z=null);let J,ce,fe,_e,Te,Re,Me,We,Qe;const et=y.isCompressedTexture?y.mipmaps[P]:y.image;z!==null?(J=z.max.x-z.min.x,ce=z.max.y-z.min.y,fe=z.isBox3?z.max.z-z.min.z:1,_e=z.min.x,Te=z.min.y,Re=z.isBox3?z.min.z:0):(J=et.width,ce=et.height,fe=et.depth||1,_e=0,Te=0,Re=0),k!==null?(Me=k.x,We=k.y,Qe=k.z):(Me=0,We=0,Qe=0);const ct=Pe.convert(I.format),tt=Pe.convert(I.type);let ve;I.isData3DTexture?(T.setTexture3D(I,0),ve=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),ve=N.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),ve=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const Ei=N.getParameter(N.UNPACK_ROW_LENGTH),Ti=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ot=N.getParameter(N.UNPACK_SKIP_PIXELS),ki=N.getParameter(N.UNPACK_SKIP_ROWS),At=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,et.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_e),N.pixelStorei(N.UNPACK_SKIP_ROWS,Te),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Re);const yr=y.isDataArrayTexture||y.isData3DTexture,$e=I.isDataArrayTexture||I.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Xt=xe.get(y),br=xe.get(I),St=xe.get(Xt.__renderTarget),Sr=xe.get(br.__renderTarget);ye.bindFramebuffer(N.READ_FRAMEBUFFER,St.__webglFramebuffer),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let li=0;li<fe;li++)yr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.get(y).__webglTexture,P,Re+li),y.isDepthTexture?($e&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.get(I).__webglTexture,P,Qe+li),N.blitFramebuffer(_e,Te,J,ce,Me,We,J,ce,N.DEPTH_BUFFER_BIT,N.NEAREST)):$e?N.copyTexSubImage3D(ve,P,Me,We,Qe+li,_e,Te,J,ce):N.copyTexSubImage2D(ve,P,Me,We,Qe+li,_e,Te,J,ce);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else $e?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(ve,P,Me,We,Qe,J,ce,fe,ct,tt,et.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(ve,P,Me,We,Qe,J,ce,fe,ct,et.data):N.texSubImage3D(ve,P,Me,We,Qe,J,ce,fe,ct,tt,et):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,P,Me,We,J,ce,ct,tt,et.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,P,Me,We,et.width,et.height,ct,et.data):N.texSubImage2D(N.TEXTURE_2D,P,Me,We,J,ce,ct,tt,et);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ei),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ti),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),N.pixelStorei(N.UNPACK_SKIP_ROWS,ki),N.pixelStorei(N.UNPACK_SKIP_IMAGES,At),P===0&&I.generateMipmaps&&N.generateMipmap(ve),ye.unbindTexture()},this.copyTextureToTexture3D=function(y,I,z=null,k=null,P=0){return y.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,y=arguments[2],I=arguments[3],P=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,z,k,P)},this.initRenderTarget=function(y){xe.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),ye.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,ye.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}class rm extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rs,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,a=this.stride;n<a;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xt=new D;class wn{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=jt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jt(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),n=je(n,this.array),a=je(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ms extends bi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let tr;const Cr=new D,ir=new D,rr=new D,nr=new Ie,Pr=new Ie,Al=new Je,hn=new D,Lr=new D,dn=new D,Po=new Ie,pa=new Ie,Lo=new Ie;class Rl extends ht{constructor(e=new Ms){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new nm(t,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new wn(i,3,0,!1)),tr.setAttribute("uv",new wn(i,2,3,!1))}this.geometry=tr,this.material=e,this.center=new Ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),Al.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-rr.z);const i=this.material.rotation;let n,a;i!==0&&(a=Math.cos(i),n=Math.sin(i));const s=this.center;pn(hn.set(-.5,-.5,0),rr,s,ir,n,a),pn(Lr.set(.5,-.5,0),rr,s,ir,n,a),pn(dn.set(.5,.5,0),rr,s,ir,n,a),Po.set(0,0),pa.set(1,0),Lo.set(1,1);let o=e.ray.intersectTriangle(hn,Lr,dn,!1,Cr);if(o===null&&(pn(Lr.set(-.5,.5,0),rr,s,ir,n,a),pa.set(0,1),o=e.ray.intersectTriangle(hn,dn,Lr,!1,Cr),o===null))return;const l=e.ray.origin.distanceTo(Cr);l<e.near||l>e.far||t.push({distance:l,point:Cr.clone(),uv:Ut.getInterpolation(Cr,hn,Lr,dn,Po,pa,Lo,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pn(r,e,t,i,n,a){nr.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(Pr.x=a*nr.x-n*nr.y,Pr.y=n*nr.x+a*nr.y):Pr.copy(nr),r.copy(e),r.x+=Pr.x,r.y+=Pr.y,r.applyMatrix4(Al)}class ys extends bi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const An=new D,Rn=new D,Do=new Je,Dr=new gs,fn=new Dn,fa=new D,Io=new D;class Cl extends ht{constructor(e=new wt,t=new ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,a=t.count;n<a;n++)An.fromBufferAttribute(t,n-1),Rn.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=An.distanceTo(Rn);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fn.copy(i.boundingSphere),fn.applyMatrix4(n),fn.radius+=a,e.ray.intersectsSphere(fn)===!1)return;Do.copy(n).invert(),Dr.copy(e.ray).applyMatrix4(Do);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let g=p,_=m-1;g<_;g+=c){const f=u.getX(g),d=u.getX(g+1),S=mn(this,e,Dr,l,f,d);S&&t.push(S)}if(this.isLineLoop){const g=u.getX(m-1),_=u.getX(p),f=mn(this,e,Dr,l,g,_);f&&t.push(f)}}else{const p=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let g=p,_=m-1;g<_;g+=c){const f=mn(this,e,Dr,l,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=mn(this,e,Dr,l,m-1,p);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function mn(r,e,t,i,n,a){const s=r.geometry.attributes.position;if(An.fromBufferAttribute(s,n),Rn.fromBufferAttribute(s,a),t.distanceSqToSegment(An,Rn,fa,Io)>i)return;fa.applyMatrix4(r.matrixWorld);const o=e.ray.origin.distanceTo(fa);if(!(o<e.near||o>e.far))return{distance:o,point:Io.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}const Uo=new D,No=new D;class am extends Cl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,a=t.count;n<a;n+=2)Uo.fromBufferAttribute(t,n),No.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Uo.distanceTo(No);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pl extends bt{constructor(e,t,i,n,a,s,o,l,c){super(e,t,i,n,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un extends wt{constructor(e=1,t=1,i=1,n=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const u=[],h=[],p=[],m=[];let g=0;const _=[],f=i/2;let d=0;S(),s===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(p,3)),this.setAttribute("uv",new lt(m,2));function S(){const M=new D,U=new D;let A=0;const w=(t-e)/i;for(let C=0;C<=a;C++){const b=[],x=C/a,R=x*(t-e)+e;for(let F=0;F<=n;F++){const B=F/n,H=B*l+o,X=Math.sin(H),W=Math.cos(H);U.x=R*X,U.y=-x*i+f,U.z=R*W,h.push(U.x,U.y,U.z),M.set(X,w,W).normalize(),p.push(M.x,M.y,M.z),m.push(B,1-x),b.push(g++)}_.push(b)}for(let C=0;C<n;C++)for(let b=0;b<a;b++){const x=_[b][C],R=_[b+1][C],F=_[b+1][C+1],B=_[b][C+1];(e>0||b!==0)&&(u.push(x,R,B),A+=3),(t>0||b!==a-1)&&(u.push(R,F,B),A+=3)}c.addGroup(d,A,0),d+=A}function E(M){const U=g,A=new Ie,w=new D;let C=0;const b=M===!0?e:t,x=M===!0?1:-1;for(let F=1;F<=n;F++)h.push(0,f*x,0),p.push(0,x,0),m.push(.5,.5),g++;const R=g;for(let F=0;F<=n;F++){const B=F/n*l+o,H=Math.cos(B),X=Math.sin(B);w.x=b*X,w.y=f*x,w.z=b*H,h.push(w.x,w.y,w.z),p.push(0,x,0),A.x=H*.5+.5,A.y=X*.5*x+.5,m.push(A.x,A.y),g++}for(let F=0;F<n;F++){const B=U+F,H=R+F;M===!0?u.push(H,H+1,B):u.push(H+1,H,B),C+=3}c.addGroup(d,C,M===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xi extends wt{constructor(e=1,t=32,i=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const u=[],h=new D,p=new D,m=[],g=[],_=[],f=[];for(let d=0;d<=i;d++){const S=[],E=d/i;let M=0;d===0&&s===0?M=.5/t:d===i&&l===Math.PI&&(M=-.5/t);for(let U=0;U<=t;U++){const A=U/t;h.x=-e*Math.cos(n+A*a)*Math.sin(s+E*o),h.y=e*Math.cos(s+E*o),h.z=e*Math.sin(n+A*a)*Math.sin(s+E*o),g.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),f.push(A+M,1-E),S.push(c++)}u.push(S)}for(let d=0;d<i;d++)for(let S=0;S<t;S++){const E=u[d][S+1],M=u[d][S],U=u[d+1][S],A=u[d+1][S+1];(d!==0||s>0)&&m.push(E,M,A),(d!==i-1||l<Math.PI)&&m.push(M,U,A)}this.setIndex(m),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bs extends wt{constructor(e=1,t=.4,i=12,n=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:a},i=Math.floor(i),n=Math.floor(n);const s=[],o=[],l=[],c=[],u=new D,h=new D,p=new D;for(let m=0;m<=i;m++)for(let g=0;g<=n;g++){const _=g/n*a,f=m/i*Math.PI*2;h.x=(e+t*Math.cos(f))*Math.cos(_),h.y=(e+t*Math.cos(f))*Math.sin(_),h.z=t*Math.sin(f),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/n),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=n;g++){const _=(n+1)*m+g-1,f=(n+1)*(m-1)+g-1,d=(n+1)*(m-1)+g,S=(n+1)*m+g;s.push(_,f,S),s.push(f,d,S)}this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class sm extends bi{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new De(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ss extends bi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gn extends ss{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ll extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class om extends Ll{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ma=new Je,Oo=new D,Fo=new D;class lm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Oo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oo),Fo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fo),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cm extends lm{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bo extends Ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new cm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zo=new Je;class um{constructor(e,t,i=0,n=1/0){this.ray=new gs(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new _s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zo),this}intersectObject(e,t=!0,i=[]){return os(e,this,i,t),i.sort(ko),i}intersectObjects(e,t=!0,i=[]){for(let n=0,a=e.length;n<a;n++)os(e[n],this,i,t);return i.sort(ko),i}}function ko(r,e){return r.distance-e.distance}function os(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const a=r.children;for(let s=0,o=a.length;s<o;s++)os(a[s],e,t,!0)}}class hm extends am{constructor(e=10,t=10,i=4473924,n=8947848){i=new De(i),n=new De(n);const a=t/2,s=e/t,o=e/2,l=[],c=[];for(let p=0,m=0,g=-o;p<=t;p++,g+=s){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=p===a?i:n;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const u=new wt;u.setAttribute("position",new lt(l,3)),u.setAttribute("color",new lt(c,3));const h=new ys({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ho=new D;let _n,ga;class dm extends ht{constructor(e=new D(0,0,1),t=new D(0,0,0),i=1,n=16776960,a=i*.2,s=a*.2){super(),this.type="ArrowHelper",_n===void 0&&(_n=new wt,_n.setAttribute("position",new lt([0,0,0,0,1,0],3)),ga=new Un(0,.5,1,5,1),ga.translate(0,-.5,0)),this.position.copy(t),this.line=new Cl(_n,new ys({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new dt(ga,new fr({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ho.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ho,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cs);class pm{constructor(e="modern",t=!1){ne(this,"style","modern"),ne(this,"singleCloud"),ne(this,"doubleCloud"),ne(this,"innerShell"),ne(this,"core"),ne(this,"proton"),ne(this,"selectionGlow"),ne(this,"dipoleArrow"),ne(this,"lewisLine"),this.update(e,t)}update(e,t){this.style=e;const i=e==="modern"?{single:6000601,double:13123915,inner:11023421,core:2829617,proton:14254635,lewis:t?16119287:1907999,dipole:t?4033535:681688}:{single:7251688,double:14684176,inner:14684176,core:4868690,proton:14684176,lewis:0,dipole:3046735};this.singleCloud=new gn({color:i.single,roughness:.35,metalness:.05,clearcoat:.4,clearcoatRoughness:.2,transmission:.15,opacity:.92,transparent:!0}),this.doubleCloud=new gn({color:i.double,roughness:.35,metalness:.05,clearcoat:.4,clearcoatRoughness:.2,transmission:.15,opacity:.92,transparent:!0}),this.innerShell=new gn({color:i.inner,roughness:.45,metalness:.1,clearcoat:.3,opacity:.95,transparent:!0}),this.core=new ss({color:i.core,roughness:.5,metalness:.2}),this.proton=new gn({color:i.proton,roughness:.3,emissive:i.proton,emissiveIntensity:.2}),this.selectionGlow=new fr({color:681688,wireframe:!0,transparent:!0,opacity:.7}),this.dipoleArrow=new ss({color:i.dipole,roughness:.3}),this.lewisLine=new fr({color:i.lewis})}}function Go(r=36,e=36,t=!1){const i=new Et,n=t?3355448:14211294,a=new hm(r,e,n,n);a.position.y=-2.2;const s=a.material;s.transparent=!0,s.opacity=t?.35:.65,i.add(a);const o=new kr(r,r),l=new sm({opacity:t?.4:.15}),c=new dt(o,l);return c.rotation.x=-Math.PI/2,c.position.y=-2.21,c.receiveShadow=!0,i.add(c),i}function Or(r,e=32,t="#ffffff",i){const n=document.createElement("canvas");n.width=128,n.height=128;const a=n.getContext("2d");a.clearRect(0,0,128,128),a.fillStyle=t,a.font=`600 ${e}px -apple-system, Inter, "SF Pro Text", sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(r,64,64);const s=new Pl(n);s.minFilter=Ht;const o=new Ms({map:s,transparent:!0,depthTest:!1}),l=new Rl(o);return l.scale.set(.35,.35,1),l}function fm(r){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");t.clearRect(0,0,128,128),t.fillStyle="#f2b544",t.font='bold 42px -apple-system, Inter, "SF Pro Display", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(r,64,64);const i=new Pl(e),n=new Ms({map:i,transparent:!0,depthTest:!1}),a=new Rl(n);return a.scale.set(.32,.32,1),a}function mm(r,e){const t=new Et;if(t.position.set(r.position.x,r.position.y,r.position.z),t.userData={type:"atom",atomId:r.id},r.isProton){const o=new xi(.16,24,24),l=new dt(o,e.proton);l.castShadow=!0,l.userData={type:"atom",atomId:r.id},t.add(l);const c=Or("H⁺",26,"#ffffff");return c.position.set(0,.28,0),t.add(c),t}const i=.14,n=new xi(i,24,24),a=new dt(n,e.core);a.castShadow=!0,a.userData={type:"atom",atomId:r.id},t.add(a);const s=Or(r.element,32,"#ffffff");if(s.position.set(0,0,.02),t.add(s),r.innerShell){const o=at[r.element],l=.42+Math.max(0,o.period-2)*.08,c=new xi(l,32,32),u=new dt(c,e.innerShell);u.castShadow=!0,u.userData={type:"atom",atomId:r.id},t.add(u)}return t}function gm(r,e,t,i){const n=r.owners[0],a=e.atoms.get(n);if(!a)return new Et;const s=new Et;s.userData={type:"cloud",cloudId:r.id,atomId:n};const o=a.element==="H"?.42:.4,l=a.element==="H"?0:a.innerShell?.62:.4,c=new xi(o,32,32),u=r.electrons===2?i.doubleCloud:i.singleCloud,h=new dt(c,u);if(h.position.set(t.x*l,t.y*l,t.z*l),h.castShadow=!0,h.userData={type:"cloud",cloudId:r.id,atomId:n},s.add(h),r.proton){const p=new xi(.14,20,20),m=new dt(p,i.proton);m.position.copy(h.position),s.add(m)}return s.position.set(a.position.x,a.position.y,a.position.z),s}function _m(r,e,t,i,n,a=0,s){const[o,l]=r.owners;if(!o||!l)return new Et;const c=e.atoms.get(o),u=e.atoms.get(l);if(!c||!u)return new Et;const h=new Et;h.userData={type:"cloud",cloudId:r.id,bond:!0,atomAId:o,atomBId:l};const p=c.position,m=u.position,g=m.x-p.x,_=m.y-p.y,f=m.z-p.z,d=Math.sqrt(g*g+_*_+f*f)||.001,S=(p.x+m.x)/2,E=(p.y+m.y)/2,M=(p.z+m.z)/2,U=Math.max(.55,d/2+.18),A=.4,w=new xi(1,32,24),C=w.attributes.position,b=s===o;if(a>.1){for(let X=0;X<C.count;X++){let W=C.getX(X),Y=C.getY(X),G=C.getZ(X);const ee=1+(b?-G:G)*a*.42;W*=ee,Y*=ee,C.setXYZ(X,W,Y,G)}w.computeVertexNormals()}const x=r.electrons===2?n.doubleCloud:n.singleCloud,R=new dt(w,x);R.scale.set(A,A,U),R.castShadow=!0,R.userData={type:"cloud",cloudId:r.id,bond:!0,atomAId:o,atomBId:l};const F=new D(g,_,f).normalize(),B=new D(0,0,1),H=new xr().setFromUnitVectors(B,F);if(h.quaternion.copy(H),i>1){const X=t/i*Math.PI*2,W=.22,Y=Math.cos(X)*W,G=Math.sin(X)*W;R.position.set(Y,G,0)}return h.position.set(S,E,M),h.add(R),h}function vm(r){const e=new Map;for(const[n,a]of r.atoms.entries())e.set(n,{symbol:a.element,position:{...a.position}});const t=[],i=gr(r);for(const n of i){const a=r.atoms.get(n.atomA).position,s=r.atoms.get(n.atomB).position,o=s.x-a.x,l=s.y-a.y,c=s.z-a.z,u=Math.sqrt(o*o+l*l+c*c);if(u<.001)continue;const h={x:o/u,y:l/u,z:c/u},p=Math.min(.35,u*.25),m={x:a.x+h.x*p,y:a.y+h.y*p,z:a.z+h.z*p},g={x:s.x-h.x*p,y:s.y-h.y*p,z:s.z-h.z*p};let _={x:-h.y,y:h.x,z:0};const f=Math.sqrt(_.x*_.x+_.y*_.y);f<.001?_={x:0,y:-h.z,z:h.y}:(_.x/=f,_.y/=f);const d=.12;n.order===1?t.push({start:m,end:g,type:"bond"}):n.order===2?(t.push({start:{x:m.x+_.x*d,y:m.y+_.y*d,z:m.z+_.z*d},end:{x:g.x+_.x*d,y:g.y+_.y*d,z:g.z+_.z*d},type:"bond"}),t.push({start:{x:m.x-_.x*d,y:m.y-_.y*d,z:m.z-_.z*d},end:{x:g.x-_.x*d,y:g.y-_.y*d,z:g.z-_.z*d},type:"bond"})):n.order===3&&(t.push({start:m,end:g,type:"bond"}),t.push({start:{x:m.x+_.x*d*1.4,y:m.y+_.y*d*1.4,z:m.z+_.z*d*1.4},end:{x:g.x+_.x*d*1.4,y:g.y+_.y*d*1.4,z:g.z+_.z*d*1.4},type:"bond"}),t.push({start:{x:m.x-_.x*d*1.4,y:m.y-_.y*d*1.4,z:m.z-_.z*d*1.4},end:{x:g.x-_.x*d*1.4,y:g.y-_.y*d*1.4,z:g.z-_.z*d*1.4},type:"bond"}))}for(const[n,a]of r.atoms.entries()){const s=Yt(r,n).filter(c=>c.owners.length===1&&c.electrons===2);if(s.length===0)continue;const o=i.filter(c=>c.atomA===n||c.atomB===n);let l=Ue(0,1,0);if(o.length>0){let c=Ue(0,0,0);for(const h of o){const p=h.atomA===n?h.atomB:h.atomA,m=r.atoms.get(p).position;c.x+=m.x-a.position.x,c.y+=m.y-a.position.y,c.z+=m.z-a.position.z}const u=Math.sqrt(c.x*c.x+c.y*c.y+c.z*c.z);u>.001&&(l={x:-c.x/u,y:-c.y/u,z:-c.z/u})}s.forEach((c,u)=>{const h=(u-(s.length-1)/2)*.7,p=Math.cos(h),m=Math.sin(h),g=l.x*p-l.y*m,_=l.x*m+l.y*p,f=.5,d=.16,S=a.position.x+g*f,E=a.position.y+_*f,M=a.position.z,U=-_*d,A=g*d;t.push({start:{x:S-U,y:E-A,z:M},end:{x:S+U,y:E+A,z:M},type:"lonePair"})})}return{atomPositions:e,lines:t}}function Dl(r,e=280,t=180){if(r.atoms.size===0)return`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}" viewBox="0 0 ${e} ${t}"><text x="${e/2}" y="${t/2}" text-anchor="middle" fill="#A1A1A6" font-family="sans-serif" font-size="13">Kein Molekül vorhanden</text></svg>`;const i=Array.from(r.atoms.values());let n=1/0,a=-1/0,s=1/0,o=-1/0;for(const S of i)n=Math.min(n,S.position.x),a=Math.max(a,S.position.x),s=Math.min(s,S.position.y),o=Math.max(o,S.position.y);const l=Math.max(1.5,a-n),c=Math.max(1.5,o-s),u=40,h=Math.min((e-u*2)/l,(t-u*2)/c),p=(n+a)/2,m=(s+o)/2,g=S=>({x:e/2+(S.x-p)*h,y:t/2-(S.y-m)*h}),_=gr(r);let f="";for(const S of _){const E=g(r.atoms.get(S.atomA).position),M=g(r.atoms.get(S.atomB).position),U=M.x-E.x,A=M.y-E.y,w=Math.sqrt(U*U+A*A);if(w<1)continue;const C=U/w,b=A/w,x=-b,R=C,F=14,B=E.x+C*F,H=E.y+b*F,X=M.x-C*F,W=M.y-b*F,Y=4;S.order===1?f+=`<line x1="${B.toFixed(1)}" y1="${H.toFixed(1)}" x2="${X.toFixed(1)}" y2="${W.toFixed(1)}" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`:S.order===2?(f+=`<line x1="${(B+x*Y).toFixed(1)}" y1="${(H+R*Y).toFixed(1)}" x2="${(X+x*Y).toFixed(1)}" y2="${(W+R*Y).toFixed(1)}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>`,f+=`<line x1="${(B-x*Y).toFixed(1)}" y1="${(H-R*Y).toFixed(1)}" x2="${(X-x*Y).toFixed(1)}" y2="${(W-R*Y).toFixed(1)}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>`):S.order===3&&(f+=`<line x1="${B.toFixed(1)}" y1="${H.toFixed(1)}" x2="${X.toFixed(1)}" y2="${W.toFixed(1)}" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,f+=`<line x1="${(B+x*Y*1.5).toFixed(1)}" y1="${(H+R*Y*1.5).toFixed(1)}" x2="${(X+x*Y*1.5).toFixed(1)}" y2="${(W+R*Y*1.5).toFixed(1)}" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,f+=`<line x1="${(B-x*Y*1.5).toFixed(1)}" y1="${(H-R*Y*1.5).toFixed(1)}" x2="${(X-x*Y*1.5).toFixed(1)}" y2="${(W-R*Y*1.5).toFixed(1)}" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`)}let d="";for(const S of i){const E=g(S.position),M=Cn(r,S.id);if(d+=`<text x="${E.x.toFixed(1)}" y="${(E.y+5).toFixed(1)}" text-anchor="middle" font-family="-apple-system, Inter, sans-serif" font-size="15" font-weight="600" fill="currentColor">${S.element}</text>`,M!==0){const U=M>0?M===1?"⁺":`${M}⁺`:M===-1?"⁻":`${Math.abs(M)}⁻`,A=M>0?"#0a66d8":"#e03131";d+=`<text x="${(E.x+11).toFixed(1)}" y="${(E.y-4).toFixed(1)}" text-anchor="start" font-family="-apple-system, Inter, sans-serif" font-size="13" font-weight="700" fill="${A}">${U}</text>`}}return`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}" viewBox="0 0 ${e} ${t}" style="color: inherit;">
    ${f}
    ${d}
  </svg>`}function xm(r,e){const t=new Et,i=vm(r);for(const[n,a]of i.atomPositions.entries()){const s=Or(a.symbol,34,e.style==="modern"?"#1d1d1f":"#000000");s.position.set(a.position.x,a.position.y,a.position.z),s.scale.set(.48,.48,1),t.add(s);const o=Cn(r,n);if(o!==0){const l=o>0?o===1?"⁺":`${o}⁺`:o===-1?"⁻":`${Math.abs(o)}⁻`,c=o>0?"#0a66d8":"#e03131",u=Or(l,32,c);u.position.set(a.position.x+.28,a.position.y+.24,a.position.z+.02),u.scale.set(.4,.4,1),t.add(u)}}for(const n of i.lines){const a=new D(n.start.x,n.start.y,n.start.z),s=new D(n.end.x,n.end.y,n.end.z),o=a.distanceTo(s);if(o<.01)continue;const l=a.clone().add(s).multiplyScalar(.5),c=s.clone().sub(a).normalize(),u=n.type==="bond"?.038:.032,h=new Un(u,u,o,12),p=new dt(h,e.lewisLine);p.position.copy(l),p.quaternion.setFromUnitVectors(new D(0,1,0),c),t.add(p)}return t}function Il(r){const e=gr(r),t=[],i=new Map;let n=0,a=0,s=0;for(const u of e){const h=r.atoms.get(u.atomA),p=r.atoms.get(u.atomB);if(!h||!p)continue;const m=at[h.element].en,g=at[p.element].en;if(m===null||g===null){t.push({atomAId:u.atomA,atomBId:u.atomB,deltaEN:0,isPolar:!1,asymmetryFactor:0});continue}const _=Math.abs(m-g),f=_>=.4,d=Math.min(1,_/2);let S,E;if(m>g?(S=u.atomA,E=u.atomB):g>m&&(S=u.atomB,E=u.atomA),f&&S&&E){i.set(S,(i.get(S)||0)-1),i.set(E,(i.get(E)||0)+1);const M=r.atoms.get(E).position,U=r.atoms.get(S).position,A=U.x-M.x,w=U.y-M.y,C=U.z-M.z,b=Math.sqrt(A*A+w*w+C*C);b>1e-4&&(n+=A/b*_,a+=w/b*_,s+=C/b*_)}t.push({atomAId:u.atomA,atomBId:u.atomB,deltaEN:_,isPolar:f,moreElectronegativeId:S,lessElectronegativeId:E,asymmetryFactor:d})}const o=new Map;for(const[u,h]of i.entries())h<0?o.set(u,"δ⁻"):h>0&&o.set(u,"δ⁺");const l=Math.sqrt(n*n+a*a+s*s),c=l>.15;return{bonds:t,atomLabels:o,dipoleVector:Ue(n,a,s),dipoleMagnitude:l,isMoleculePolar:c}}function kt(r){const e=Math.hypot(r.x,r.y,r.z)||1e-4;return Ue(r.x/e,r.y/e,r.z/e)}function _a(r){const e=Math.abs(r.z)<.8?Ue(0,0,1):Ue(1,0,0),t=r.y*e.z-r.z*e.y,i=r.z*e.x-r.x*e.z,n=r.x*e.y-r.y*e.x,a=kt(Ue(t,i,n)),s=r.y*a.z-r.z*a.y,o=r.z*a.x-r.x*a.z,l=r.x*a.y-r.y*a.x,c=kt(Ue(s,o,l));return[a,c]}function Mm(r){if(r<=1)return[Ue(0,1,0)];if(r===2)return[Ue(1,0,0),Ue(-1,0,0)];if(r===3){const t=Ue(0,1,0),i=Math.cos(Math.PI/6),n=Math.sin(Math.PI/6),a=Ue(-i,-n,0),s=Ue(i,-n,0);return[t,a,s]}const e=1/Math.sqrt(3);return[Ue(e,e,e),Ue(e,-e,-e),Ue(-e,e,-e),Ue(-e,-e,e)]}function ym(r,e,t=20){const i=e.map(n=>({...n}));for(let n=0;n<t;n++)for(let a=0;a<i.length;a++){let s=0,o=0,l=0;const c=i[a];for(const g of r){const _=c.x-g.x,f=c.y-g.y,d=c.z-g.z,S=Math.hypot(_,f,d)||.01,E=1/(S*S*S);s+=_*E,o+=f*E,l+=d*E}for(let g=0;g<i.length;g++){if(a===g)continue;const _=i[g],f=c.x-_.x,d=c.y-_.y,S=c.z-_.z,E=Math.hypot(f,d,S)||.01,M=1/(E*E*E);s+=f*M,o+=d*M,l+=S*M}const u=s*c.x+o*c.y+l*c.z,h=s-u*c.x,p=o-u*c.y,m=l-u*c.z;i[a]=kt(Ue(c.x+h*.15,c.y+p*.15,c.z+m*.15))}return i}function bm(r,e){const t=new Map,i=e.atoms.get(r);if(!i)return t;const n=[],a=[];for(const u of e.clouds.values())if(u.owners.length===1&&u.owners[0]===r)n.push(u);else if(u.owners.length===2&&u.owners.includes(r)){const h=u.owners.find(m=>m!==r),p=e.atoms.get(h);if(p){const m=p.position.x-i.position.x,g=p.position.y-i.position.y,_=p.position.z-i.position.z,f=Math.hypot(m,g,_)||.001;a.push(Ue(m/f,g/f,_/f))}}if(n.length===0)return t;let s=4;i.element==="H"||i.element==="He"||i.element==="Li"?s=1:i.element==="Be"?s=2:i.element==="B"&&a.length<4&&(s=3);const o=n.length,l=a.length;let c=[];if(l===0){const u=Mm(s);for(let h=0;h<o;h++)c.push(u[h%u.length])}else if(l===1){const u=a[0],[h,p]=_a(u);if(s===4){const m=-.3333333333333333,g=Math.sqrt(8/9);for(let _=0;_<o;_++){const f=_*2*Math.PI/3,d=Math.cos(f)*h.x+Math.sin(f)*p.x,S=Math.cos(f)*h.y+Math.sin(f)*p.y,E=Math.cos(f)*h.z+Math.sin(f)*p.z,M=u.x*m+d*g,U=u.y*m+S*g,A=u.z*m+E*g;c.push(kt(Ue(M,U,A)))}}else if(s===3){const m=Math.sqrt(.75);for(let g=0;g<o;g++){const _=g===0?1:-1;c.push(kt(Ue(u.x*-.5+h.x*m*_,u.y*-.5+h.y*m*_,u.z*-.5+h.z*m*_)))}}else c.push(Ue(-u.x,-u.y,-u.z))}else if(l===2){const u=a[0],h=a[1],p=u.x+h.x,m=u.y+h.y,g=u.z+h.z,_=kt(Ue(p,m,g)),f=Ue(u.y*h.z-u.z*h.y,u.z*h.x-u.x*h.z,u.x*h.y-u.y*h.x);let d=kt(f);if(Math.hypot(d.x,d.y,d.z)<.1){const[S]=_a(u);d=S}if(o===1)c.push(Ue(-_.x,-_.y,-_.z));else{const S=1/Math.sqrt(3),E=Math.sqrt(2/3);c.push(kt(Ue(-_.x*S+d.x*E,-_.y*S+d.y*E,-_.z*S+d.z*E))),c.push(kt(Ue(-_.x*S-d.x*E,-_.y*S-d.y*E,-_.z*S-d.z*E)))}}else{let u=0,h=0,p=0;for(const f of a)u+=f.x,h+=f.y,p+=f.z;const m=kt(Ue(-u,-h,-p)),[g,_]=_a(m);for(let f=0;f<o;f++)if(f===0)c.push(m);else{const d=f*2*Math.PI/o;c.push(kt(Ue(m.x*.5+Math.cos(d)*g.x*.866+Math.sin(d)*_.x*.866,m.y*.5+Math.cos(d)*g.y*.866+Math.sin(d)*_.y*.866,m.z*.5+Math.cos(d)*g.z*.866+Math.sin(d)*_.z*.866)))}}a.length>0&&c.length>0&&(c=ym(a,c,20));for(let u=0;u<n.length;u++)t.set(n[u].id,c[u]||Ue(0,1,0));return t}class Sm{constructor(e,t=!1){ne(this,"renderer"),ne(this,"scene"),ne(this,"camera"),ne(this,"gridGroup"),ne(this,"moleculeGroup"),ne(this,"overlayGroup"),ne(this,"palette"),ne(this,"mode","kwm"),ne(this,"showPolarity",!1),ne(this,"autoRotate",!1),ne(this,"isCameraLocked",!1),ne(this,"activeTool","select"),ne(this,"selectedAtomId",null),ne(this,"selectedCloudId",null),ne(this,"cameraDistance",8.5),ne(this,"cameraPhi",Math.PI/3),ne(this,"cameraTheta",Math.PI/4),ne(this,"cameraTarget",new D(0,0,0)),ne(this,"isPointerDown",!1),ne(this,"pointerButton",0),ne(this,"pointerDownX",0),ne(this,"pointerDownY",0),ne(this,"lastPointerX",0),ne(this,"lastPointerY",0),ne(this,"hasDragged",!1),ne(this,"isDraggingAtom",!1),ne(this,"draggedAtomId",null),ne(this,"touchDistance",0),ne(this,"raycaster",new um),ne(this,"pointerPos",new Ie),ne(this,"onPick"),ne(this,"onAtomMoved"),ne(this,"onAtomMoveEnd"),ne(this,"animate",()=>{requestAnimationFrame(this.animate),this.autoRotate&&!this.isPointerDown&&(this.cameraTheta+=.005,this.updateCameraTransform()),this.renderer.render(this.scene,this.camera)}),this.canvas=e,this.palette=new pm("modern",t),this.renderer=new im({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zo,this.scene=new rm,this.camera=new It(45,1,.1,100),this.updateCameraTransform();const i=new om(16777215,13684952,.85);this.scene.add(i);const n=new Bo(16777215,1.1);n.position.set(6,12,8),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=.5,n.shadow.camera.far=30,n.shadow.bias=-5e-4,this.scene.add(n);const a=new Bo(16777215,.45);a.position.set(-8,-4,-6),this.scene.add(a),this.gridGroup=Go(36,36,t),this.scene.add(this.gridGroup),this.moleculeGroup=new Et,this.scene.add(this.moleculeGroup),this.overlayGroup=new Et,this.scene.add(this.overlayGroup),this.bindEvents(),this.resize(),this.animate()}setTheme(e,t="modern"){this.palette.update(t,e),this.scene.remove(this.gridGroup),this.gridGroup=Go(36,36,e),this.scene.add(this.gridGroup)}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)}updateMolecule(e){for(var t;this.moleculeGroup.children.length>0;)this.moleculeGroup.remove(this.moleculeGroup.children[0]);for(;this.overlayGroup.children.length>0;)this.overlayGroup.remove(this.overlayGroup.children[0]);if(e.atoms.size!==0){if(this.mode==="lewis"){const i=xm(e,this.palette);this.moleculeGroup.add(i)}else{for(const l of e.atoms.values()){const c=mm(l,this.palette);this.moleculeGroup.add(c)}const i=this.showPolarity?Il(e):null,n=new Map;if(i)for(const l of i.bonds){const c=`${l.atomAId}_${l.atomBId}`,u=`${l.atomBId}_${l.atomAId}`;n.set(c,{factor:l.asymmetryFactor,moreId:l.moreElectronegativeId}),n.set(u,{factor:l.asymmetryFactor,moreId:l.moreElectronegativeId})}const a=new Map;for(const l of e.atoms.values()){const c=bm(l.id,e);for(const[u,h]of c.entries())a.set(u,h)}const s=gr(e),o=new Map;for(const l of e.clouds.values())if(l.owners.length===1){const c=a.get(l.id)||Ue(0,1,0),u=gm(l,e,c,this.palette);this.moleculeGroup.add(u)}else{const[c,u]=l.owners,h=c<u?`${c}_${u}`:`${u}_${c}`,p=o.get(h)||0;o.set(h,p+1);const m=((t=s.find(f=>f.atomA===c&&f.atomB===u||f.atomA===u&&f.atomB===c))==null?void 0:t.order)||1,g=n.get(`${c}_${u}`),_=_m(l,e,p,m,this.palette,(g==null?void 0:g.factor)||0,g==null?void 0:g.moreId);this.moleculeGroup.add(_)}if(i&&this.showPolarity){for(const[l,c]of i.atomLabels.entries()){const u=e.atoms.get(l);if(!u)continue;const h=fm(c);h.position.set(u.position.x,u.position.y+.55,u.position.z),this.overlayGroup.add(h)}if(i.isMoleculePolar&&i.dipoleMagnitude>.2){const l=new D(i.dipoleVector.x,i.dipoleVector.y,i.dipoleVector.z).normalize(),c=Math.min(2.8,Math.max(1.4,i.dipoleMagnitude*.8)),u=new D(0,1.8,0),h=new dm(l,u,c,681688,.45,.3);this.overlayGroup.add(h)}}for(const l of e.atoms.values()){const c=Cn(e,l.id);if(c!==0&&!l.isProton){const u=c>0?c===1?"⁺":`${c}⁺`:c===-1?"⁻":`${Math.abs(c)}⁻`,h=c>0?"#0a66d8":"#e03131",p=Or(u,32,h);p.position.set(l.position.x+.32,l.position.y+.38,l.position.z),p.scale.set(.42,.42,1),this.overlayGroup.add(p)}}}if(this.selectedAtomId){const i=e.atoms.get(this.selectedAtomId);if(i){const n=new bs(.56,.025,16,48),a=new fr({color:681688}),s=new dt(n,a);s.position.set(i.position.x,i.position.y,i.position.z),s.lookAt(this.camera.position),this.overlayGroup.add(s)}}}}updateCameraTransform(){this.cameraPhi=Math.max(.05,Math.min(Math.PI-.05,this.cameraPhi)),this.cameraDistance=Math.max(2.5,Math.min(30,this.cameraDistance));const e=this.cameraDistance*Math.sin(this.cameraPhi)*Math.sin(this.cameraTheta),t=this.cameraDistance*Math.cos(this.cameraPhi),i=this.cameraDistance*Math.sin(this.cameraPhi)*Math.cos(this.cameraTheta);this.camera.position.set(this.cameraTarget.x+e,this.cameraTarget.y+t,this.cameraTarget.z+i),this.camera.lookAt(this.cameraTarget)}rotateCamera(e,t){this.cameraTheta+=e,this.cameraPhi+=t,this.updateCameraTransform()}zoomCamera(e){this.cameraDistance*=e,this.updateCameraTransform()}resetCamera(){this.cameraDistance=8.5,this.cameraPhi=Math.PI/3,this.cameraTheta=Math.PI/4,this.cameraTarget.set(0,0,0),this.updateCameraTransform()}alignTo2D(){this.cameraPhi=Math.PI/2,this.cameraTheta=0,this.cameraTarget.set(0,0,0),this.updateCameraTransform()}bindEvents(){const e=this.canvas;e.addEventListener("pointerdown",t=>{this.isPointerDown=!0,this.hasDragged=!1,this.pointerButton=t.button,this.pointerDownX=t.clientX,this.pointerDownY=t.clientY,this.lastPointerX=t.clientX,this.lastPointerY=t.clientY,this.updatePointerCoords(t);const i=this.raycastHit();if(this.activeTool==="select"&&t.button===0&&i){const n=i.object.userData;(n==null?void 0:n.type)==="atom"?this.draggedAtomId=n.atomId:(n==null?void 0:n.type)==="cloud"&&!n.bond&&n.atomId?this.draggedAtomId=n.atomId:this.draggedAtomId=null}else this.draggedAtomId=null;this.isDraggingAtom=!1}),window.addEventListener("pointermove",t=>{if(!this.isPointerDown||Math.hypot(t.clientX-this.pointerDownX,t.clientY-this.pointerDownY)<5&&!this.hasDragged)return;this.hasDragged=!0;const i=t.clientX-this.lastPointerX,n=t.clientY-this.lastPointerY;if(this.lastPointerX=t.clientX,this.lastPointerY=t.clientY,this.draggedAtomId&&this.activeTool==="select"&&this.onAtomMoved){this.isDraggingAtom=!0;const a=this.cameraDistance*.0018,s=new D,o=new D;this.camera.matrixWorld.extractBasis(s,o,new D);const l=s.clone().multiplyScalar(i*a).add(o.clone().multiplyScalar(-n*a)),c=this.moleculeGroup.children.find(u=>{var h;return((h=u.userData)==null?void 0:h.atomId)===this.draggedAtomId});if(c){const u={x:c.position.x+l.x,y:c.position.y+l.y,z:c.position.z+l.z};this.onAtomMoved(this.draggedAtomId,u)}}else if(this.pointerButton===0)this.isCameraLocked||this.rotateCamera(-i*.008,-n*.008);else{const a=this.cameraDistance*.0012,s=new D,o=new D;this.camera.matrixWorld.extractBasis(s,o,new D),this.cameraTarget.add(s.multiplyScalar(-i*a)),this.cameraTarget.add(o.multiplyScalar(n*a)),this.updateCameraTransform()}}),window.addEventListener("pointerup",t=>{if(this.isPointerDown){if(this.hasDragged)this.isDraggingAtom&&this.draggedAtomId&&this.onAtomMoveEnd&&this.onAtomMoveEnd(this.draggedAtomId);else{this.updatePointerCoords(t);const i=this.raycastHit();if(i&&this.onPick){const n=i.object.userData;if((n==null?void 0:n.type)==="atom")this.onPick({type:"atom",atomId:n.atomId,worldPosition:i.point});else if((n==null?void 0:n.type)==="cloud"){let a=n.atomId;if(n.bond&&n.atomAId&&n.atomBId){const s=this.moleculeGroup.children.find(l=>{var c;return((c=l.userData)==null?void 0:c.atomId)===n.atomAId}),o=this.moleculeGroup.children.find(l=>{var c;return((c=l.userData)==null?void 0:c.atomId)===n.atomBId});if(s&&o){const l=i.point.distanceTo(s.position),c=i.point.distanceTo(o.position);a=l<c?n.atomAId:n.atomBId}else a=n.atomAId}this.onPick({type:"cloud",cloudId:n.cloudId,atomId:a,worldPosition:i.point})}}else this.onPick&&this.onPick({type:"none"})}this.isPointerDown=!1,this.hasDragged=!1,this.isDraggingAtom=!1,this.draggedAtomId=null}}),e.addEventListener("wheel",t=>{t.preventDefault();const i=t.deltaY>0?1.08:.92;this.zoomCamera(i)},{passive:!1}),e.addEventListener("touchstart",t=>{if(t.touches.length===2){const i=t.touches[0].clientX-t.touches[1].clientX,n=t.touches[0].clientY-t.touches[1].clientY;this.touchDistance=Math.sqrt(i*i+n*n)}}),e.addEventListener("touchmove",t=>{if(t.touches.length===2){t.preventDefault();const i=t.touches[0].clientX-t.touches[1].clientX,n=t.touches[0].clientY-t.touches[1].clientY,a=Math.sqrt(i*i+n*n);if(this.touchDistance>0){const s=this.touchDistance/a;this.zoomCamera(Math.max(.85,Math.min(1.15,s)))}this.touchDistance=a}},{passive:!1})}updatePointerCoords(e){const t=this.canvas.getBoundingClientRect();this.pointerPos.x=(e.clientX-t.left)/t.width*2-1,this.pointerPos.y=-((e.clientY-t.top)/t.height)*2+1}raycastHit(){var e,t;this.raycaster.setFromCamera(this.pointerPos,this.camera);const i=this.raycaster.intersectObjects(this.moleculeGroup.children,!0);if(i.length>0){let n=i[0].object;for(;n&&!((e=n.userData)!=null&&e.type)&&n.parent&&n.parent!==this.moleculeGroup;)n=n.parent;if(n&&(t=n.userData)!=null&&t.type)return{object:n,point:i[0].point}}return null}captureScreenshotPNG(){return this.renderer.render(this.scene,this.camera),this.canvas.toDataURL("image/png")}}function Em(r,e){r.innerHTML=`
    <div class="header-brand">
      <a href="../index.html" class="icon-btn" title="Zurück zur App-Übersicht" style="margin-right: 2px; text-decoration: none; color: inherit; display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      </a>
      <img src="./icon.svg" alt="Logo" class="brand-icon" />
      <span class="brand-title">Das Kugelwolkenmodell</span>
    </div>

    <div class="header-center">
      <div class="segmented-control">
        <button id="btn-mode-kwm" class="segmented-btn is-active" title="Kugelwolkenmodell (Taste L)">Kugelwolken</button>
        <button id="btn-mode-lewis" class="segmented-btn" title="Lewis-Formel 3D (Taste L)">Lewis</button>
      </div>

      <button id="btn-toggle-polarity" class="pill-toggle-btn" title="Polarität und Dipolmoment einblenden (Shift+P)">
        <span class="pill-indicator"></span>
        <span>Polarität</span>
      </button>
    </div>

    <div class="header-actions">
      <button id="btn-undo" class="icon-btn" title="Rückgängig (Strg+Z)" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"/></svg>
      </button>
      <button id="btn-redo" class="icon-btn" title="Wiederholen (Strg+Y)" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7"/></svg>
      </button>

      <button id="btn-open-lib" class="btn-secondary" title="Molekülbibliothek öffnen">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
        <span>Bibliothek</span>
      </button>

      <button id="btn-export" class="icon-btn" title="Exportieren (PNG, SVG, JSON)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      </button>

      <button id="btn-theme" class="icon-btn" title="Design wechseln (Hell / Dunkel / Beamer)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      </button>

      <button id="btn-about" class="icon-btn" title="Über das Kugelwolkenmodell & Credits">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      </button>
    </div>
  `;const t=r.querySelector("#btn-mode-kwm"),i=r.querySelector("#btn-mode-lewis"),n=r.querySelector("#btn-toggle-polarity");t.addEventListener("click",()=>{t.classList.add("is-active"),i.classList.remove("is-active"),e.onModeChange("kwm")}),i.addEventListener("click",()=>{i.classList.add("is-active"),t.classList.remove("is-active"),e.onModeChange("lewis")});let a=!1;n.addEventListener("click",()=>{a=!a,n.classList.toggle("is-active",a),e.onPolarityToggle(a)}),r.querySelector("#btn-undo").addEventListener("click",()=>e.onUndo()),r.querySelector("#btn-redo").addEventListener("click",()=>e.onRedo()),r.querySelector("#btn-open-lib").addEventListener("click",()=>e.onOpenLibrary()),r.querySelector("#btn-export").addEventListener("click",()=>e.onExport()),r.querySelector("#btn-theme").addEventListener("click",()=>e.onToggleTheme()),r.querySelector("#btn-about").addEventListener("click",()=>e.onAbout())}function Tm(r,e){const t=document.getElementById("btn-undo"),i=document.getElementById("btn-redo");t&&(t.disabled=!r),i&&(i.disabled=!e)}function wm(r,e){r.innerHTML=`
    <div class="sidebar-section">
      <div class="section-label">Werkzeuge</div>
      <div class="tool-group">
        <button id="tool-select" class="tool-btn is-active" data-tool="select">
          <div class="tool-btn-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3l7 18 3-7 7-3L3 3z"/></svg>
            <span>Auswählen</span>
          </div>
          <span class="shortcut-badge">V</span>
        </button>

        <button id="tool-connect" class="tool-btn" data-tool="connect">
          <div class="tool-btn-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
            <span>Verbinden</span>
          </div>
          <span class="shortcut-badge">B</span>
        </button>

        <button id="tool-proton" class="tool-btn" data-tool="proton">
          <div class="tool-btn-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            <span>Proton</span>
          </div>
          <span class="shortcut-badge">P</span>
        </button>

        <button id="tool-delete" class="tool-btn" data-tool="delete">
          <div class="tool-btn-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
            <span>Löschen</span>
          </div>
          <span class="shortcut-badge">X</span>
        </button>

        <button id="btn-align" class="tool-btn" title="Geometrie entspannen und ausrichten">
          <div class="tool-btn-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 00-9-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 009 9 9.75 9.75 0 006.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
            <span>Ausrichten</span>
          </div>
          <span class="shortcut-badge">R</span>
        </button>

        <button id="btn-clear" class="tool-btn" title="Szene leeren">
          <div class="tool-btn-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
            <span>Neu anfangen</span>
          </div>
        </button>
      </div>
    </div>
  `;const t=r.querySelectorAll(".tool-btn[data-tool]"),i=n=>{t.forEach(a=>{a.classList.toggle("is-active",a.getAttribute("data-tool")===n)}),e.onToolChange(n)};return t.forEach(n=>{n.addEventListener("click",()=>{const a=n.getAttribute("data-tool");i(a)})}),r.querySelector("#btn-align").addEventListener("click",()=>e.onAutoAlign()),r.querySelector("#btn-clear").addEventListener("click",()=>e.onClear()),{setActiveTool:i}}function Am(r,e){const t=document.createElement("div");t.className="sidebar-section",t.innerHTML=`
    <div class="section-label">Element wählen (Hauptgruppen)</div>
    <div class="pse-grid" id="pse-container"></div>
  `;const i=t.querySelector("#pse-container");for(let n=1;n<=4;n++)for(let a=1;a<=8;a++){const s=Gl.find(l=>l.period===n&&l.col===a);if(!s){const l=document.createElement("div");l.className="pse-cell-empty",i.appendChild(l);continue}const o=document.createElement("div");o.className="pse-cell",o.setAttribute("data-cat",s.cat),o.title=`${s.name} (${s.symbol})
Ordnungszahl: ${s.z}
Valenzelektronen: ${s.valence}
EN: ${s.en??"–"}`,o.innerHTML=`
        <span class="pse-number">${s.z}</span>
        <span class="pse-symbol">${s.symbol}</span>
        <span class="pse-cat-bar"></span>
      `,o.addEventListener("click",()=>{e.onSelectElement(s.symbol)}),i.appendChild(o)}r.appendChild(t)}function Rm(r,e,t=null,i){var n,a;const s=Yo(e),o=ql(e),l=jo(e),c=Xl(e),u=Il(e),h=o>0?o.toLocaleString("de-DE",{maximumFractionDigits:2})+" u":"–",p=l===0?"neutral":l>0?`+${l}`:`${l}`,m=t?e.atoms.get(t):null,g=m?at[m.element]:null,_=m?Cn(e,m.id):0;r.innerHTML=`
    <div class="inspector-header">
      <div class="inspector-title-row">
        <span class="molecule-formula">${s}</span>
        <span class="badge-charge">${p}</span>
      </div>
      <div class="molecule-sub">Molmasse: ${h}</div>
    </div>

    ${m&&g?`
      <!-- Ausgewähltes Atom -->
      <div class="inspector-section" style="border: 1px solid var(--accent); border-radius: var(--radius-md); padding: 10px; background: var(--bg-surface-2);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 600; font-size: 13px; color: var(--accent);">Ausgewähltes Atom</div>
          <button id="btn-deselect-atom" class="icon-btn" title="Auswahl aufheben" style="width: 22px; height: 22px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 6px;">
          <span style="font-size: 20px; font-weight: 700; color: var(--text-1);">${m.element}</span>
          <span style="font-size: 13px; color: var(--text-2);">${g.name} (Z = ${g.z})</span>
        </div>
        <div style="font-size: 12px; color: var(--text-2); line-height: 1.5; margin-bottom: 10px;">
          Valenzelektronen: ${g.valence} · EN: ${g.en||"–"}
          ${_!==0?`<br/><strong style="color: ${_>0?"var(--accent)":"var(--danger)"};">Formalladung: ${_>0?`+${_}`:_}</strong>`:""}
          ${m.isProton?'<br/><span style="color: var(--danger);">Freies Proton (H⁺)</span>':""}
        </div>
        <button id="btn-delete-selected" class="btn" style="width: 100%; height: 28px; font-size: 12px; background: rgba(224, 49, 49, 0.1); color: var(--danger); border: 1px solid rgba(224, 49, 49, 0.3);">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
          Atom löschen (Entf)
        </button>
      </div>
    `:""}

    <!-- 1. Kugelwolken-Statistik (die 4 Original-Zähler) -->
    <div class="inspector-section">
      <div class="section-label">Kugelwolken-Analyse</div>
      <table class="stats-table">
        <tbody>
          <tr>
            <td>Freie Speicherplätze</td>
            <td class="stat-val">${c.freeSlots}</td>
          </tr>
          <tr>
            <td>Einfach besetzt (1 e⁻)</td>
            <td class="stat-val" style="color: var(--cat-nonmetal);">${c.singleClouds}</td>
          </tr>
          <tr>
            <td>Doppelt besetzt (2 e⁻)</td>
            <td class="stat-val" style="color: var(--danger);">${c.doubleClouds}</td>
          </tr>
          <tr>
            <td>Vollbesetzte innere Schalen</td>
            <td class="stat-val">${c.innerShells}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 2. Lewis-Formel (2D Vektor) -->
    <div class="inspector-section">
      <div class="section-label">Lewis-Projektion</div>
      <div class="lewis-preview-card" id="lewis-preview-container">
        ${Dl(e,260,150)}
      </div>
    </div>

    <!-- 3. Polaritäts-Details -->
    <div class="inspector-section">
      <div class="section-label">Polarität & Bindungen</div>
      <table class="stats-table">
        <tbody>
          <tr>
            <td>Gesamtdipol</td>
            <td class="stat-val">${u.isMoleculePolar?"Polar (|μ| > 0,15)":"Unpolar"}</td>
          </tr>
          ${u.bonds.map(f=>{var d,S;const E=((d=e.atoms.get(f.atomAId))==null?void 0:d.element)||"",M=((S=e.atoms.get(f.atomBId))==null?void 0:S.element)||"",U=f.deltaEN.toLocaleString("de-DE",{maximumFractionDigits:2});return`
              <tr>
                <td>${E}–${M} (ΔEN)</td>
                <td class="stat-val">${U} ${f.isPolar?"⚡":""}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    </div>
  `,m&&i&&((n=r.querySelector("#btn-delete-selected"))==null||n.addEventListener("click",()=>{var f;(f=i.onDeleteAtom)==null||f.call(i,m.id)}),(a=r.querySelector("#btn-deselect-atom"))==null||a.addEventListener("click",()=>{var f;(f=i.onDeselectAtom)==null||f.call(i)}))}function Cm(r,e){r.innerHTML=`
    <button id="cam-zoom-in" class="icon-btn" title="Vergrößern (+)">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    </button>
    <button id="cam-zoom-out" class="icon-btn" title="Verkleinern (−)">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
    </button>
    <button id="cam-lock" class="icon-btn" title="Ansicht drehen gesperrt / entsperrt">
      <svg id="cam-lock-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
      </svg>
    </button>
    <button id="cam-rotate" class="icon-btn" title="Auto-Rotation an/aus (Leertaste)">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
    </button>
    <button id="cam-reset" class="icon-btn" title="Ansicht zurücksetzen (0)">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
    </button>
    <button id="cam-fullscreen" class="icon-btn" title="Vollbildmodus (F)">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
    </button>
  `;const t=r.querySelector("#cam-lock"),i=r.querySelector("#cam-lock-icon"),n=a=>{t.classList.toggle("is-active",a),a?(t.title="Ansicht fixiert (Klick zum Entsperren des Drehens)",i.innerHTML=`
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      `):(t.title="Ansicht fixieren (Verhindert Drehen beim Klicken)",i.innerHTML=`
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
      `)};return r.querySelector("#cam-zoom-in").addEventListener("click",()=>e.onZoomIn()),r.querySelector("#cam-zoom-out").addEventListener("click",()=>e.onZoomOut()),t.addEventListener("click",()=>e.onToggleLockCamera()),r.querySelector("#cam-rotate").addEventListener("click",()=>e.onToggleAutoRotate()),r.querySelector("#cam-reset").addEventListener("click",()=>e.onReset()),r.querySelector("#cam-fullscreen").addEventListener("click",()=>e.onFullscreen()),{setCameraLocked:n}}const Ul=[{id:"h2",name:"Wasserstoff",group:"Anorganisch",atoms:["H","H"],bonds:[[0,1,1]]},{id:"f2",name:"Fluor",group:"Anorganisch",atoms:["F","F"],bonds:[[0,1,1]]},{id:"cl2",name:"Chlor",group:"Anorganisch",atoms:["Cl","Cl"],bonds:[[0,1,1]]},{id:"o2",name:"Sauerstoff",group:"Anorganisch",atoms:["O","O"],bonds:[[0,1,2]]},{id:"n2",name:"Stickstoff",group:"Anorganisch",atoms:["N","N"],bonds:[[0,1,3]]},{id:"hf",name:"Fluorwasserstoff",group:"Anorganisch",atoms:["H","F"],bonds:[[0,1,1]]},{id:"hcl",name:"Chlorwasserstoff",group:"Anorganisch",atoms:["H","Cl"],bonds:[[0,1,1]]},{id:"h2o",name:"Wasser",group:"Anorganisch",atoms:["O","H","H"],bonds:[[0,1,1],[0,2,1]]},{id:"h2s",name:"Schwefelwasserstoff",group:"Anorganisch",atoms:["S","H","H"],bonds:[[0,1,1],[0,2,1]]},{id:"nh3",name:"Ammoniak",group:"Anorganisch",atoms:["N","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1]]},{id:"ph3",name:"Phosphan",group:"Anorganisch",atoms:["P","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1]]},{id:"co2",name:"Kohlenstoffdioxid",group:"Anorganisch",atoms:["C","O","O"],bonds:[[0,1,2],[0,2,2]]},{id:"hcn",name:"Blausäure",group:"Anorganisch",atoms:["H","C","N"],bonds:[[0,1,1],[1,2,3]]},{id:"beh2",name:"Berylliumhydrid",group:"Anorganisch",atoms:["Be","H","H"],bonds:[[0,1,1],[0,2,1]]},{id:"bh3",name:"Boran",group:"Anorganisch",atoms:["B","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1]]},{id:"sih4",name:"Silan",group:"Anorganisch",atoms:["Si","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},{id:"h3o",name:"Oxonium-Ion",group:"Ionen",atoms:["O","H","H"],bonds:[[0,1,1],[0,2,1]],ops:[{op:"protonate",atom:0}]},{id:"oh",name:"Hydroxid-Ion",group:"Ionen",atoms:["O","H","H"],bonds:[[0,1,1],[0,2,1]],ops:[{op:"deprotonate",atom:2}]},{id:"nh4",name:"Ammonium-Ion",group:"Ionen",atoms:["N","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1]],ops:[{op:"protonate",atom:0}]},{id:"ch4",name:"Methan",group:"Organisch",atoms:["C","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},{id:"c2h6",name:"Ethan",group:"Organisch",atoms:["C","C","H","H","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1],[1,7,1]]},{id:"c3h8",name:"Propan",group:"Organisch",atoms:["C","C","C","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1],[2,9,1],[2,10,1]]},{id:"c4h10",name:"Butan",group:"Organisch",atoms:["C","C","C","C","H","H","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[2,3,1],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1],[2,9,1],[2,10,1],[3,11,1],[3,12,1],[3,13,1]]},{id:"c2h4",name:"Ethen",group:"Organisch",atoms:["C","C","H","H","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1],[1,4,1],[1,5,1]]},{id:"c2h2",name:"Ethin",group:"Organisch",atoms:["C","C","H","H"],bonds:[[0,1,3],[0,2,1],[1,3,1]]},{id:"ch3oh",name:"Methanol",group:"Organisch",atoms:["C","O","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1]]},{id:"c2h5oh",name:"Ethanol",group:"Organisch",atoms:["C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1]]},{id:"hcho",name:"Methanal",group:"Organisch",atoms:["C","O","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1]]},{id:"hcooh",name:"Methansäure",group:"Organisch",atoms:["C","O","O","H","H"],bonds:[[0,1,2],[0,2,1],[2,3,1],[0,4,1]]},{id:"ch3cooh",name:"Ethansäure",group:"Organisch",atoms:["C","C","O","O","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[1,3,1],[3,4,1],[0,5,1],[0,6,1],[0,7,1]]},{id:"ch3cl",name:"Chlormethan",group:"Organisch",atoms:["C","Cl","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},{id:"c3h6",name:"Cyclopropan",group:"Organisch",atoms:["C","C","C","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[2,0,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1],[2,7,1],[2,8,1]]},{id:"c6h12",name:"Cyclohexan",group:"Organisch",atoms:["C","C","C","C","C","C","H","H","H","H","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[2,3,1],[3,4,1],[4,5,1],[5,0,1],[0,6,1],[0,7,1],[1,8,1],[1,9,1],[2,10,1],[2,11,1],[3,12,1],[3,13,1],[4,14,1],[4,15,1],[5,16,1],[5,17,1]]}];function Vo(r){const e=ls(),t=[];r.atoms.forEach((i,n)=>{const a=n/r.atoms.length*Math.PI*2,s=Ue(Math.cos(a)*1.5,Math.sin(a)*1.5,n%2*.4),{atom:o,clouds:l}=qo(i,s,`rec_${n}`);t.push(o.id),e.atoms.set(o.id,o);for(const c of l)e.clouds.set(c.id,c)});for(const[i,n,a]of r.bonds){const s=t[i],o=t[n];for(let l=0;l<a;l++){const c=Yt(e,s).filter(h=>h.owners.length===1&&h.electrons===1),u=Yt(e,o).filter(h=>h.owners.length===1&&h.electrons===1);if(c.length>0&&u.length>0){e.clouds.delete(c[0].id),e.clouds.delete(u[0].id);const h={id:`bond_${s}_${o}_${l}_${Math.random().toString(36).substring(2,6)}`,owners:[s,o],electrons:2,proton:!1};e.clouds.set(h.id,h)}}}if(r.ops){for(const i of r.ops)if(i.op==="protonate"){const n=t[i.atom],a=Yt(e,n).filter(s=>s.owners.length===1&&s.electrons===2&&!s.proton);if(a.length>0){a[0].proton=!0;const s={id:`p_rec_${Math.random().toString(36).substring(2,7)}`,element:"H",position:Ue(0,0,1),innerShell:!1,isProton:!0};e.atoms.set(s.id,s)}}else if(i.op==="deprotonate"){const n=t[i.atom],a=Array.from(e.clouds.values()).filter(s=>s.owners.length===2&&s.owners.includes(n));if(a.length>0){const s=a[0],o=s.owners.find(c=>c!==n);e.clouds.delete(s.id);const l={id:`lp_rec_${o}_${Math.random().toString(36).substring(2,6)}`,owners:[o],electrons:2,proton:!1};e.clouds.set(l.id,l),e.atoms.delete(n)}}}return e}function Pm(r,e){r.hidden=!1,r.innerHTML=`
    <div class="modal-dialog">
      <div class="modal-header">
        <div style="font-weight: 600; font-size: 17px;">Molekülbibliothek (33 Modelle)</div>
        <button id="modal-close-btn" class="icon-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div style="padding: 12px 16px; border-bottom: 1px solid var(--line); display: flex; gap: 12px; align-items: center;">
        <input id="lib-search" type="text" placeholder="Molekül suchen (z.B. Wasser, Ethan, CO₂)..." style="flex: 1; height: 32px; padding: 0 10px; border-radius: var(--radius-sm); border: 1px solid var(--line); background: var(--bg-surface-2); color: inherit; font-family: inherit; font-size: 13px; outline: none;" />
        <div class="segmented-control">
          <button class="segmented-btn is-active" data-group="all">Alle</button>
          <button class="segmented-btn" data-group="Anorganisch">Anorganisch</button>
          <button class="segmented-btn" data-group="Ionen">Ionen</button>
          <button class="segmented-btn" data-group="Organisch">Organisch</button>
        </div>
      </div>

      <div class="modal-body">
        <div class="recipe-grid" id="recipe-cards-container"></div>
      </div>
    </div>
  `;const t=r.querySelector("#recipe-cards-container"),i=r.querySelector("#lib-search"),n=r.querySelectorAll(".segmented-btn[data-group]");let a="all",s="";const o=()=>{t.innerHTML="";const c=Ul.filter(u=>{const h=a==="all"||u.group===a,p=s===""||u.name.toLowerCase().includes(s.toLowerCase())||u.atoms.join("").toLowerCase().includes(s.toLowerCase());return h&&p});if(c.length===0){t.innerHTML='<div style="grid-column: 1/-1; text-align: center; color: var(--text-3); padding: 30px;">Keine Moleküle gefunden</div>';return}c.forEach(u=>{const h=document.createElement("div");h.className="recipe-card",h.innerHTML=`
        <div style="font-weight: 600; font-size: 14px; color: var(--text-1);">${u.name}</div>
        <div style="font-size: 12px; color: var(--text-2); margin-top: 3px;">${u.group} · ${u.atoms.length} Atome</div>
      `,h.addEventListener("click",()=>{r.hidden=!0,r.innerHTML="",e.onSelectRecipe(u)}),t.appendChild(h)})};i.addEventListener("input",()=>{s=i.value.trim(),o()}),n.forEach(c=>{c.addEventListener("click",()=>{n.forEach(u=>u.classList.remove("is-active")),c.classList.add("is-active"),a=c.getAttribute("data-group"),o()})});const l=()=>{r.hidden=!0,r.innerHTML=""};r.querySelector("#modal-close-btn").addEventListener("click",l),r.addEventListener("click",c=>{c.target===r&&l()}),o(),i.focus()}function Lm(r,e){r.hidden=!1,r.innerHTML=`
    <div class="modal-dialog">
      <div class="modal-header">
        <div style="font-weight: 600; font-size: 17px;">Über das Kugelwolkenmodell</div>
        <button id="about-close-btn" class="icon-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="modal-body" style="display: flex; flex-direction: column; gap: 16px; font-size: 14px; line-height: 1.6;">
        <div style="padding: 12px 14px; background: var(--bg-surface-2); border: 1px solid var(--line); border-radius: var(--radius-md);">
          <strong>Didaktischer Ursprung:</strong><br/>
          Diese Anwendung basiert auf den didaktischen Konzepten des ursprünglichen Programms <em>3D-Kugelwolkenmodell (v1.3)</em>, entwickelt von <strong>André Reinke</strong>. Neu überarbeitet mit moderner 3D-Web-Grafik, Touch-Bedienung und ruhiger Designsprache.
        </div>

        <div>
          <h4 style="font-size: 15px; margin-bottom: 6px;">Grundlagen des Modells:</h4>
          <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>Atomrumpf (Graphit):</strong> Atomkern und nicht-reaktive innerste Schalen.</li>
            <li><strong>Innere Schale (Dunkelrot):</strong> Vollbesetzte untere Energiestufe (ab Periode 2).</li>
            <li><strong>Blaue Kugelwolken:</strong> Einfach besetzt (1 Elektron) – bindungsfähig.</li>
            <li><strong>Rote Kugelwolken:</strong> Doppelt besetzt (2 Elektronen) – freies Elektronenpaar oder kovalente Bindungswolke.</li>
            <li><strong>Proton (H⁺):</strong> Kann an rote, freie Kugelwolken angelagert werden (Säure-Base-Reaktion nach Brønsted).</li>
          </ul>
        </div>

        <div>
          <h4 style="font-size: 15px; margin-bottom: 6px;">Tastatur-Kurzbefehle:</h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <tr><td style="padding: 4px 0;"><strong>V</strong></td><td>Werkzeug Auswählen</td></tr>
            <tr><td style="padding: 4px 0;"><strong>B</strong></td><td>Werkzeug Verbinden</td></tr>
            <tr><td style="padding: 4px 0;"><strong>P</strong></td><td>Werkzeug Proton (Anlagern/Abspalten)</td></tr>
            <tr><td style="padding: 4px 0;"><strong>X / Entf</strong></td><td>Löschen</td></tr>
            <tr><td style="padding: 4px 0;"><strong>R</strong></td><td>Automatisch ausrichten (Geometrie entspannen)</td></tr>
            <tr><td style="padding: 4px 0;"><strong>L</strong></td><td>Kugelwolken ↔ Lewis-Formel</td></tr>
            <tr><td style="padding: 4px 0;"><strong>Shift + P</strong></td><td>Polarität an/aus</td></tr>
            <tr><td style="padding: 4px 0;"><strong>W A S D</strong></td><td>Kamera drehen</td></tr>
            <tr><td style="padding: 4px 0;"><strong>+ / −</strong></td><td>Zoom</td></tr>
            <tr><td style="padding: 4px 0;"><strong>Leertaste</strong></td><td>Auto-Rotation an/aus</td></tr>
            <tr><td style="padding: 4px 0;"><strong>Strg + Z / Y</strong></td><td>Rückgängig / Wiederholen</td></tr>
          </table>
        </div>
      </div>
    </div>
  `;const t=()=>{r.hidden=!0,r.innerHTML=""};r.querySelector("#about-close-btn").addEventListener("click",t),r.addEventListener("click",i=>{i.target===r&&t()})}function rt(r,e="info",t=4e3){const i=document.getElementById("toast-container");if(!i)return;const n=document.createElement("div");n.className="toast-item",n.setAttribute("data-level",e);const a=document.createElement("span");a.className="toast-dot";const s=document.createElement("span");s.textContent=r,n.appendChild(a),n.appendChild(s),i.appendChild(n),setTimeout(()=>{n.style.transition="opacity 200ms ease, transform 200ms ease",n.style.opacity="0",n.style.transform="translateY(10px) scale(0.95)",setTimeout(()=>n.remove(),220)},t)}function Dm(r){window.addEventListener("keydown",e=>{var t;const i=(((t=document.activeElement)==null?void 0:t.tagName)||"").toLowerCase();if(!(i==="input"||i==="textarea")){if(e.key==="z"&&(e.ctrlKey||e.metaKey)){e.preventDefault(),e.shiftKey?r.onRedo():r.onUndo();return}if(e.key==="y"&&(e.ctrlKey||e.metaKey)){e.preventDefault(),r.onRedo();return}if(e.key==="P"&&e.shiftKey){e.preventDefault(),r.onTogglePolarity();return}switch(e.key.toLowerCase()){case"v":r.onToolSelect();break;case"b":r.onToolConnect();break;case"p":r.onToolProton();break;case"x":case"delete":case"backspace":r.onToolDelete();break;case"r":r.onAutoAlign();break;case"l":r.onToggleMode();break;case"w":case"arrowup":r.onRotateCamera(0,-.08);break;case"s":case"arrowdown":r.onRotateCamera(0,.08);break;case"a":case"arrowleft":r.onRotateCamera(.08,0);break;case"d":case"arrowright":r.onRotateCamera(-.08,0);break;case"+":case"=":r.onZoomCamera(.9);break;case"-":case"_":r.onZoomCamera(1.1);break;case" ":e.preventDefault(),r.onToggleAutoRotate();break;case"0":r.onResetCamera();break;case"f":r.onFullscreen();break}}})}const Nl="kwm_autosave_v2";function Ol(r){const e={version:2,atoms:Array.from(r.atoms.values()),clouds:Array.from(r.clouds.values())};return JSON.stringify(e,null,2)}function Im(r){try{const e=JSON.parse(r),t=ls();for(const i of e.atoms)t.atoms.set(i.id,i);for(const i of e.clouds)t.clouds.set(i.id,i);return t}catch(e){return console.error("Fehler beim Deserialisieren:",e),null}}function Wo(r){try{localStorage.setItem(Nl,Ol(r))}catch{}}function Um(){try{const r=localStorage.getItem(Nl);return r?Im(r):null}catch{return null}}function Xo(r,e,t){const i=new Blob([r],{type:t}),n=URL.createObjectURL(i),a=document.createElement("a");a.href=n,a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(n)}function Nm(r,e){const t=document.createElement("a");t.href=r,t.download=e,document.body.appendChild(t),t.click(),document.body.removeChild(t)}class Om{constructor(){ne(this,"mol"),ne(this,"cmdMgr",new Zl),ne(this,"scene"),ne(this,"activeTool","select"),ne(this,"selectedAtomId",null),ne(this,"connectFirstAtomId",null),ne(this,"currentTheme","light"),ne(this,"camControlsApi",null);const e=Um();if(e&&e.atoms.size>0)this.mol=e;else{const t=Ul.find(i=>i.id==="h2o");this.mol=Vo(t),Er(this.mol,50)}this.initUI(),this.initScene(),this.initShortcuts(),this.updateAll()}initUI(){const e=document.getElementById("header"),t=document.getElementById("sidebar"),i=document.getElementById("camera-controls"),n=document.getElementById("modal-container");Em(e,{onModeChange:a=>{this.scene.mode=a,a==="lewis"&&(this.scene.alignTo2D(),rt("Lewis-Modus: Flach zur Kamera ausgerichtet.","info")),this.updateAll()},onPolarityToggle:a=>{this.scene.showPolarity=a,this.scene.updateMolecule(this.mol),this.updateInspector(),rt(a?"Polaritäts-Analyse aktiv.":"Polarität ausgeblendet.","info")},onUndo:()=>this.handleUndo(),onRedo:()=>this.handleRedo(),onOpenLibrary:()=>{Pm(n,{onSelectRecipe:a=>{this.mol=Vo(a),Er(this.mol,60),this.cmdMgr.clear(),this.selectedAtomId=null,this.scene.selectedAtomId=null,this.updateAll(),rt(`${a.name} geladen.`,"info")},onClose:()=>{}})},onExport:()=>this.handleExport(),onToggleTheme:()=>this.toggleTheme(),onAbout:()=>Lm(n)}),wm(t,{onToolChange:a=>{this.activeTool=a,this.scene.activeTool=a,this.connectFirstAtomId=null,rt(a==="connect"?"Tippe das 1. Atom an, das du verbinden möchtest.":a==="proton"?"Tippe ein H-Atom an (Abspalten) oder ein freies Elektronenpaar (Anlagern).":a==="delete"?"Tippe Atome an, um sie direkt zu entfernen.":"Klicke Atome an, um sie auszuwählen oder zu verschieben.","info")},onAutoAlign:()=>{Er(this.mol,100),this.scene.updateMolecule(this.mol),this.updateInspector(),rt("Geometrie entspannt und ausgerichtet.","info")},onClear:()=>{confirm("Möchtest du die Szene wirklich leeren?")&&(this.mol=ls(),this.cmdMgr.clear(),this.selectedAtomId=null,this.scene.selectedAtomId=null,this.updateAll(),rt("Szene geleert.","info"))}}),Am(t,{onSelectElement:a=>{const s=new $l(a),o=this.cmdMgr.execute(s,this.mol);o.success?(Er(this.mol,20),this.updateAll(),rt(o.message||`${a} hinzugefügt.`,"info")):rt(o.message||"Fehler beim Hinzufügen.",o.level||"blocked")}}),this.camControlsApi=Cm(i,{onZoomIn:()=>this.scene.zoomCamera(.85),onZoomOut:()=>this.scene.zoomCamera(1.18),onToggleAutoRotate:()=>{this.scene.autoRotate=!this.scene.autoRotate,rt(this.scene.autoRotate?"Auto-Rotation aktiv.":"Auto-Rotation pausiert.","info")},onToggleLockCamera:()=>{var a;this.scene.isCameraLocked=!this.scene.isCameraLocked,(a=this.camControlsApi)==null||a.setCameraLocked(this.scene.isCameraLocked),rt(this.scene.isCameraLocked?"Kameradrehung gesperrt (Fixiert für ruhiges Auswählen).":"Kameradrehung entsperrt.","info")},onReset:()=>{this.scene.resetCamera(),rt("Kamera zurückgesetzt.","info")},onFullscreen:()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})}})}initScene(){const e=document.getElementById("stage-canvas");this.scene=new Sm(e,this.currentTheme==="dark"),this.scene.activeTool=this.activeTool,this.scene.onPick=t=>{t.type==="atom"&&t.atomId?this.handleAtomClicked(t.atomId):t.type==="cloud"&&t.atomId?this.activeTool==="proton"&&t.cloudId?this.handleCloudClicked(t.cloudId,t.atomId):this.handleAtomClicked(t.atomId):(this.selectedAtomId&&(this.selectedAtomId=null,this.scene.selectedAtomId=null,this.scene.updateMolecule(this.mol),this.updateInspector()),this.connectFirstAtomId=null)},this.scene.onAtomMoved=(t,i)=>{const n=this.mol.atoms.get(t);n&&(n.position={...i},this.scene.updateMolecule(this.mol))},this.scene.onAtomMoveEnd=()=>{Wo(this.mol),this.updateInspector()},window.addEventListener("resize",()=>this.scene.resize())}handleAtomClicked(e){var t;if(this.activeTool==="delete"){this.deleteAtomById(e);return}if(this.activeTool==="proton"){const n=this.mol.atoms.get(e);if((n==null?void 0:n.element)==="H"){const a=new Ql(e),s=this.cmdMgr.execute(a,this.mol);this.updateAll(),rt(s.message||"",s.level||"info")}else{const a=new Ls(e),s=this.cmdMgr.execute(a,this.mol);this.updateAll(),rt(s.message||"",s.level||"info")}return}if(this.activeTool==="connect"){if(this.connectFirstAtomId)if(this.connectFirstAtomId===e)rt("Du hast dasselbe Atom gewählt. Wähle ein anderes Atom zum Verbinden.","warning");else{const n=this.connectFirstAtomId,a=e;this.connectFirstAtomId=null;const s=new Jl(n,a),o=this.cmdMgr.execute(s,this.mol);o.success&&Er(this.mol,40),this.updateAll(),rt(o.message||"",o.level||"info")}else{this.connectFirstAtomId=e;const n=(t=this.mol.atoms.get(e))==null?void 0:t.element;rt(`1. Atom (${n}) gewählt. Klicke jetzt das zweite Atom an.`,"info")}return}const i=this.mol.atoms.get(e);i&&(this.selectedAtomId=e,this.scene.selectedAtomId=e,this.scene.updateMolecule(this.mol),this.updateInspector(),rt(`Atom ${i.element} ausgewählt.`,"info"))}deleteAtomById(e){var t;const i=((t=this.mol.atoms.get(e))==null?void 0:t.element)||"",n=new ec([e]),a=this.cmdMgr.execute(n,this.mol);this.selectedAtomId===e&&(this.selectedAtomId=null,this.scene.selectedAtomId=null),this.updateAll(),rt(a.message||`${i} entfernt.`,"info")}handleCloudClicked(e,t){if(this.activeTool==="proton"){const i=new Ls(t,e),n=this.cmdMgr.execute(i,this.mol);this.updateAll(),rt(n.message||"",n.level||"info")}}handleUndo(){const e=this.cmdMgr.undo(this.mol);this.selectedAtomId=null,this.scene.selectedAtomId=null,this.updateAll(),rt(e.message||"","info")}handleRedo(){const e=this.cmdMgr.redo(this.mol);this.selectedAtomId=null,this.scene.selectedAtomId=null,this.updateAll(),rt(e.message||"","info")}handleExport(){const e=Yo(this.mol),t=e.replace(/[^\w]/g,"")||"Molekuel",i=this.scene.captureScreenshotPNG();Nm(i,`${t}_kugelwolken.png`);const n=Dl(this.mol);Xo(n,`${t}_lewis.svg`,"image/svg+xml");const a=Ol(this.mol);Xo(a,`${t}.kwm.json`,"application/json"),rt(`Export für ${e} abgeschlossen (PNG, SVG, JSON).`,"info")}toggleTheme(){this.currentTheme==="light"?this.currentTheme="dark":this.currentTheme==="dark"?this.currentTheme="beamer":this.currentTheme="light",document.documentElement.setAttribute("data-theme",this.currentTheme),this.scene.setTheme(this.currentTheme==="dark"),this.updateAll(),rt(`Design: ${this.currentTheme.toUpperCase()}`,"info")}initShortcuts(){Dm({onToolSelect:()=>{var e;return(e=document.getElementById("tool-select"))==null?void 0:e.click()},onToolConnect:()=>{var e;return(e=document.getElementById("tool-connect"))==null?void 0:e.click()},onToolProton:()=>{var e;return(e=document.getElementById("tool-proton"))==null?void 0:e.click()},onToolDelete:()=>{var e;this.selectedAtomId?this.deleteAtomById(this.selectedAtomId):(e=document.getElementById("tool-delete"))==null||e.click()},onAutoAlign:()=>{var e;return(e=document.getElementById("btn-align"))==null?void 0:e.click()},onToggleMode:()=>{var e,t;(this.scene.mode==="kwm"?"lewis":"kwm")=="kwm"?(e=document.getElementById("btn-mode-kwm"))==null||e.click():(t=document.getElementById("btn-mode-lewis"))==null||t.click()},onTogglePolarity:()=>{var e;return(e=document.getElementById("btn-toggle-polarity"))==null?void 0:e.click()},onRotateCamera:(e,t)=>this.scene.rotateCamera(e,t),onZoomCamera:e=>this.scene.zoomCamera(e),onToggleAutoRotate:()=>{var e;return(e=document.getElementById("cam-rotate"))==null?void 0:e.click()},onResetCamera:()=>{var e;return(e=document.getElementById("cam-reset"))==null?void 0:e.click()},onFullscreen:()=>{var e;return(e=document.getElementById("cam-fullscreen"))==null?void 0:e.click()},onUndo:()=>this.handleUndo(),onRedo:()=>this.handleRedo()})}updateInspector(){const e=document.getElementById("inspector");e&&Rm(e,this.mol,this.selectedAtomId,{onDeleteAtom:t=>this.deleteAtomById(t),onDeselectAtom:()=>{this.selectedAtomId=null,this.scene.selectedAtomId=null,this.scene.updateMolecule(this.mol),this.updateInspector()}})}updateAll(){this.scene.updateMolecule(this.mol),this.updateInspector(),Tm(this.cmdMgr.canUndo(),this.cmdMgr.canRedo()),Wo(this.mol)}}window.addEventListener("DOMContentLoaded",()=>{new Om});
//# sourceMappingURL=index-DjNwfyjN.js.map
