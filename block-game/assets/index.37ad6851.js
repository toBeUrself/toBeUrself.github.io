var t=Object.assign;import{r as e,o as l,c as o,w as a,p as n,a as r,b as s,u,d as c,e as p,f as i,t as y,F as f,g as d,h as k}from"./vendor.d4b701f9.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(l){const o=new URL(t,location),a=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((l,n)=>{const r=new URL(t,o);if(self[e].moduleMap[r])return l(self[e].moduleMap[r]);const s=new Blob([`import * as m from '${r}';`,`${e}.moduleMap['${r}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){n(new Error(`Failed to import: ${t}`)),a(u)},onload(){l(self[e].moduleMap[r]),a(u)}});document.head.appendChild(u)})),self[e].moduleMap={}}}("/assets/");const b=a("data-v-e0e20a30"),g={expose:[],props:{bgColor:String},setup:t=>(e({count:0}),b(((e,a)=>(l(),o("div",{class:["block-temp",t.bgColor]},null,2))))),__scopeId:"data-v-e0e20a30"};const v=a("data-v-41ddce9c");n("data-v-41ddce9c");const x=s("div",{class:"blank"},null,-1);r();const m={expose:[],props:{left:Number,top:Number,rotate:Number},setup:t=>v(((e,a)=>(l(),o("section",{class:"line-block",style:{left:t.left+"px",top:t.top+"px",transform:"rotate("+t.rotate+"deg)"}},[x,s(g,{bgColor:"green"}),s(g,{bgColor:"green"}),s(g,{bgColor:"green"}),s(g,{bgColor:"green"})],4)))),__scopeId:"data-v-41ddce9c"};const h=a("data-v-3e2fa8fb"),B={expose:[],props:{bgColor:String,left:Number,top:String,value:Number},setup:t=>h(((e,a)=>t.value?(l(),o("div",{key:0,class:["block-temp",t.bgColor?t.bgColor:"pink"],style:{left:Number(t.left)*u(30)+"px",top:Number(t.top)*u(30)+"px"}},null,6)):c("",!0))),__scopeId:"data-v-3e2fa8fb"};const L=a("data-v-4f96fa04");n("data-v-4f96fa04");const w={class:"block-wrap"},C={class:"block-wrap"};r();const _={expose:[],props:{left:Number,top:Number,rotate:Number},setup(t){const e=p("blue"),a=p(120);return L(((n,r)=>(l(),o("section",{class:"square-block",style:{width:a.value+"px",height:a.value+"px",left:t.left+"px",top:t.top+"px",transform:"rotate("+t.rotate+"deg)"}},[s("div",w,[s(g,{bgColor:e.value},null,8,["bgColor"]),s(g,{bgColor:e.value},null,8,["bgColor"])]),s("div",C,[s(g,{bgColor:e.value},null,8,["bgColor"]),s(g,{bgColor:e.value},null,8,["bgColor"])])],4))))},__scopeId:"data-v-4f96fa04"};const N=a("data-v-590a6512");n("data-v-590a6512");const q=s("div",{class:"blank"},null,-1),A={class:"div-block"},S={class:"div-block"},I={class:"div-block"};r();const R={expose:[],props:{left:Number,top:Number,rotate:Number},setup:t=>N(((e,a)=>(l(),o("section",{class:"mountain-block",style:{left:t.left+"px",top:t.top+"px",transform:"rotate("+t.rotate+"deg)"}},[q,s("div",A,[s(g,{bgColor:"cadetblue"}),s(g,{bgColor:"cadetblue"})]),s("div",S,[s(g,{bgColor:"cadetblue"})]),s("div",I,[s(g,{bgColor:"cadetblue"})])],4)))),__scopeId:"data-v-590a6512"};const M=a("data-v-8f34d016");n("data-v-8f34d016");const P=s("div",{class:"blank"},null,-1),j={class:"container"},U={class:"div-block"};r();const O={expose:[],props:{left:Number,top:Number,rotate:Number},setup:t=>M(((e,a)=>(l(),o("section",{class:"point-block",style:{left:t.left+"px",top:t.top+"px",transform:"rotate("+t.rotate+"deg)"}},[P,s("div",j,[s(g,{bgColor:"black"}),s(g,{bgColor:"black"}),s(g,{bgColor:"black"})]),s("div",U,[s(g,{bgColor:"black"})])],4)))),__scopeId:"data-v-8f34d016"};const $=a("data-v-2282b1d7");n("data-v-2282b1d7");const D=s("div",{class:"blank"},null,-1),F={class:"div-block"},E={class:"div-block-2"};r();const W={expose:[],props:{left:Number,top:Number,rotate:Number},setup:t=>$(((e,a)=>(l(),o("section",{class:"word-block",style:{left:t.left+"px",top:t.top+"px",transform:"rotate("+t.rotate+"deg)"}},[D,s("div",F,[s(g,{bgColor:"aquamarine"}),s(g,{bgColor:"aquamarine"})]),s("div",E,[s(g,{bgColor:"aquamarine"}),s(g,{bgColor:"aquamarine"})])],4)))),__scopeId:"data-v-2282b1d7"};const z={word:{left:120,top:0,rotate:0,type:"word",getBlocksPostion:function(){const t=this.left/30,e=this.top/30;let l=this.rotate%360;switch(l>0||(l+=360),l%=360,l){case 0:return[{x:t,y:e+1},{x:t+1,y:e+1},{x:t+1,y:e+2},{x:t+2,y:e+2}];case 90:return[{x:t+2,y:e},{x:t+1,y:e+1},{x:t+2,y:e+1},{x:t+1,y:e+2}];case 180:return[{x:t+1,y:e+1},{x:t+2,y:e+1},{x:t+2,y:e+2},{x:t+3,y:e+2}];case 270:return[{x:t+2,y:e+1},{x:t+1,y:e+2},{x:t+2,y:e+2},{x:t+1,y:e+3}]}}},point:{left:120,top:0,rotate:0,type:"point",getBlocksPostion:function(){const t=this.left/30,e=this.top/30;let l=this.rotate%360;switch(l>0||(l+=360),l%=360,l){case 0:return[{x:t,y:e+1},{x:t+1,y:e+1},{x:t+2,y:e+1},{x:t+1,y:e+2}];case 90:return[{x:t+1,y:e+1},{x:t+2,y:e},{x:t+2,y:e+1},{x:t+2,y:e+2}];case 180:return[{x:t+1,y:e+2},{x:t+2,y:e+1},{x:t+2,y:e+2},{x:t+3,y:e+2}];case 270:return[{x:t+1,y:e+1},{x:t+1,y:e+2},{x:t+1,y:e+3},{x:t+2,y:e+2}]}}},mountain:{left:120,top:30,rotate:0,type:"mountain",getBlocksPostion:function(){const t=this.left/30,e=this.top/30;let l=this.rotate%360;switch(l>0||(l+=360),l%=360,l){case 0:return[{x:t+1,y:e+1},{x:t+2,y:e+1},{x:t+1,y:e+2},{x:t+1,y:e+3}];case 90:return[{x:t,y:e+1},{x:t+1,y:e+1},{x:t+2,y:e+1},{x:t+2,y:e+2}];case 180:return[{x:t+2,y:e},{x:t+2,y:e+1},{x:t+2,y:e+2},{x:t+1,y:e+2}];case 270:return[{x:t+1,y:e+1},{x:t+1,y:e+2},{x:t+2,y:e+2},{x:t+3,y:e+2}]}}},line:{left:120,top:0,rotate:0,type:"line",getBlocksPostion:function(){const t=this.left/30,e=this.top/30;let l=this.rotate%360;switch(l>0||(l+=360),l%=360,l){case 0:return[{x:t,y:e+1},{x:t+1,y:e+1},{x:t+2,y:e+1},{x:t+3,y:e+1}];case 90:return[{x:t+2,y:e},{x:t+2,y:e+1},{x:t+2,y:e+2},{x:t+2,y:e+3}];case 270:return[{x:t,y:e},{x:t,y:e+1},{x:t,y:e+2},{x:t,y:e+3}]}}},square:{left:120,top:0,rotate:0,type:"square",getBlocksPostion:function(){const t=this.left/30,e=this.top/30;return[{x:t+1,y:e+1},{x:t+1,y:e+2},{x:t+2,y:e+1},{x:t+2,y:e+2}]}}},G={components:{Line:m,Square:_,BaseBlock:B,Mountain:R,Point:O,WordBlock:W},setup(){const l=e({playground:Array.from(new Array(22),((t,e)=>0===e||21===e?Array.from(new Array(12),(()=>1)):Array.from(new Array(12),((t,e)=>0===e||11===e?1:0)))),lineBlockList:[],squareBlockList:[],mountainBlockList:[],pointBlockList:[],wordBlockList:[],scount:0,historyScount:0});let o,a,n=!1;const r=()=>{o&&clearInterval(o),a=i(),o=setInterval((()=>{var e;n||(y({left:(e=t({},a)).left,top:e.top+30,rotate:e.rotate,type:e.type})?a.top+=30:l.playground[2].filter(((t,e)=>0!==e&&11!==e&&t)).length>0?(clearInterval(o),l.scount>Number(l.historyScount)&&localStorage.setItem("historyScount",l.scount)):(l.squareBlockList.pop(),l.lineBlockList.pop(),l.mountainBlockList.pop(),l.pointBlockList.pop(),l.wordBlockList.pop(),y(t({},a),!0),a=i()))}),500)};r();document.onkeyup=t=>{switch(t.keyCode){case 37:s();break;case 38:c();break;case 39:u();break;case 40:p()}},l.historyScount=localStorage.getItem("historyScount");const s=()=>{const{left:e}=a;y(t(t({},a),{left:e-30}))&&(a.left-=30)},u=()=>{const{left:e}=a;y(t(t({},a),{left:e+30}))&&(a.left+=30)},c=()=>{if("line"===a.type){let e=a.rotate%360;if(e>0||(e+=360),e%=360,e=0===e?90:0,!y(t(t({},a),{rotate:e})))return;a.rotate=e}else{if(!y(t(t({},a),{rotate:a.rotate+90})))return;a.rotate+=90}},p=()=>{if(n)return;n=!0;const{top:e}=a;y(t(t({},a),{top:e+30}))&&(a.top+=30),n=!1};function i(){const e={0:"square",1:"line",2:"mountain",3:"point",4:"word",length:5},o=Math.floor(Math.random()*e.length),a=t({},z[e[o]]);switch(e[o]){case"square":return l.squareBlockList.push(a),l.squareBlockList[l.squareBlockList.length-1];case"line":return l.lineBlockList.push(a),l.lineBlockList[l.lineBlockList.length-1];case"mountain":return l.mountainBlockList.push(a),l.mountainBlockList[l.mountainBlockList.length-1];case"point":return l.pointBlockList.push(a),l.pointBlockList[l.pointBlockList.length-1];case"word":return l.wordBlockList.push(a),l.wordBlockList[l.wordBlockList.length-1]}}function y(t,e){const{left:o,top:a,type:n}=t,r=z[n].getBlocksPostion.call(t);for(let s=0,u=r.length;s<u;s++){const{x:t,y:o}=r[s];if(e)l.playground[o][t]=1;else if(l.playground[o][t])return!1}if(e){let t=0;const e=l.playground.length;l.playground[0].length;for(let o=e-2;o>0;){if(0===l.playground[o].filter((t=>!t)).length){t++;for(let t=o;t>1;t--)l.playground[t]=l.playground[t-1];l.playground[1]=Array.from(new Array(12),((t,e)=>0===e||11===e?1:0))}else o--}switch(t){case 1:l.scount+=1;break;case 2:l.scount+=3;break;case 3:l.scount+=6;break;case 4:l.scount+=10}}return!0}return{state:l,turnLeft:s,turnRight:u,turnRotate:c,turnDown:p,restart:()=>{l.scount=0,l.squareBlockList.pop(),l.lineBlockList.pop(),l.mountainBlockList.pop(),l.pointBlockList.pop(),l.wordBlockList.pop(),l.playground=Array.from(new Array(22),((t,e)=>0===e||21===e?Array.from(new Array(12),(()=>1)):Array.from(new Array(12),((t,e)=>0===e||11===e?1:0)))),r()}}}},H={class:"footer"},J={class:"play-content"};G.render=function(t,e,a,n,r,u){const c=i("WordBlock"),p=i("Point"),k=i("Mountain"),b=i("Line"),g=i("Square"),v=i("BaseBlock");return l(),o("main",null,[s("footer",H,[s("button",{type:"button",onClick:e[1]||(e[1]=(...t)=>n.turnLeft&&n.turnLeft(...t))},"👈"),s("button",{type:"button",onClick:e[2]||(e[2]=(...t)=>n.turnRotate&&n.turnRotate(...t))},"👆"),s("button",{type:"button",onClick:e[3]||(e[3]=(...t)=>n.turnRight&&n.turnRight(...t))},"👉"),s("button",{type:"button",onClick:e[4]||(e[4]=(...t)=>n.turnDown&&n.turnDown(...t))},"👇"),s("button",{type:"button",onClick:e[5]||(e[5]=(...t)=>n.restart&&n.restart(...t))},"重新开始"),s("p",null,"历史最高成绩："+y(n.state.historyScount)+"分____________目前成绩："+y(n.state.scount)+"分 ",1)]),s("div",J,[(l(!0),o(f,null,d(n.state.wordBlockList,((t,e)=>(l(),o(c,{key:e,left:t.left,top:t.top,rotate:t.rotate},null,8,["left","top","rotate"])))),128)),(l(!0),o(f,null,d(n.state.pointBlockList,((t,e)=>(l(),o(p,{key:e,left:t.left,top:t.top,rotate:t.rotate},null,8,["left","top","rotate"])))),128)),(l(!0),o(f,null,d(n.state.mountainBlockList,((t,e)=>(l(),o(k,{key:e,left:t.left,top:t.top,rotate:t.rotate},null,8,["left","top","rotate"])))),128)),(l(!0),o(f,null,d(n.state.lineBlockList,((t,e)=>(l(),o(b,{key:e,left:t.left,top:t.top,rotate:t.rotate},null,8,["left","top","rotate"])))),128)),(l(!0),o(f,null,d(n.state.squareBlockList,((t,e)=>(l(),o(g,{key:e,left:t.left,top:t.top,rotate:t.rotate},null,8,["left","top","rotate"])))),128)),(l(!0),o(f,null,d(n.state.playground[0],((t,e)=>(l(),o(v,{key:"0"+e,value:t,left:e,top:"0"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[1],((t,e)=>(l(),o(v,{key:"1"+e,value:t,left:e,top:"1"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[2],((t,e)=>(l(),o(v,{key:"2"+e,value:t,left:e,top:"2"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[3],((t,e)=>(l(),o(v,{key:"3"+e,value:t,left:e,top:"3"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[4],((t,e)=>(l(),o(v,{key:"4"+e,value:t,left:e,top:"4"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[5],((t,e)=>(l(),o(v,{key:"5"+e,value:t,left:e,top:"5"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[6],((t,e)=>(l(),o(v,{key:"6"+e,value:t,left:e,top:"6"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[7],((t,e)=>(l(),o(v,{key:"7"+e,value:t,left:e,top:"7"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[8],((t,e)=>(l(),o(v,{key:"8"+e,value:t,left:e,top:"8"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[9],((t,e)=>(l(),o(v,{key:"9"+e,value:t,left:e,top:"9"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[10],((t,e)=>(l(),o(v,{key:"10"+e,value:t,left:e,top:"10"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[11],((t,e)=>(l(),o(v,{key:"11"+e,value:t,left:e,top:"11"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[12],((t,e)=>(l(),o(v,{key:"12"+e,value:t,left:e,top:"12"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[13],((t,e)=>(l(),o(v,{key:"13"+e,value:t,left:e,top:"13"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[14],((t,e)=>(l(),o(v,{key:"14"+e,value:t,left:e,top:"14"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[15],((t,e)=>(l(),o(v,{key:"15"+e,value:t,left:e,top:"15"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[16],((t,e)=>(l(),o(v,{key:"16"+e,value:t,left:e,top:"16"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[17],((t,e)=>(l(),o(v,{key:"17"+e,value:t,left:e,top:"17"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[18],((t,e)=>(l(),o(v,{key:"18"+e,value:t,left:e,top:"18"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[19],((t,e)=>(l(),o(v,{key:"19"+e,value:t,left:e,top:"19"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[20],((t,e)=>(l(),o(v,{key:"20"+e,value:t,left:e,top:"20"},null,8,["value","left"])))),128)),(l(!0),o(f,null,d(n.state.playground[21],((t,e)=>(l(),o(v,{bgColor:"black",key:"21"+e,value:t,left:e,top:"21"},null,8,["value","left"])))),128))])])},k(G).mount("#app");
