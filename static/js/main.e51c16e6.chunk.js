(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,n){t.exports=n.p+"static/media/bg.2810fe6b.png"},22:function(t,e,n){t.exports=n(34)},31:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(12),c=n(19),u=n(1),i=n(2),l=n(3),f=n(13),s={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},p=function(){var t="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return s[t]},d=function(){return Array.from(Array(20),function(){return new Array(12).fill([0,"clear"])})},b=function(t,e,n){for(var r=n.x,o=n.y,a=0;a<t.shape.length;a+=1)for(var c=0;c<t.shape[a].length;c+=1)if(0!==t.shape[a][c]&&(!e[a+t.pos.y+o]||!e[a+t.pos.y+o][c+t.pos.x+r]||"clear"!==e[a+t.pos.y+o][c+t.pos.x+r][1]))return!0};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var h=function(){var t=Object(r.useState)({pos:{x:0,y:0},shape:s[0].shape,collided:!1}),e=Object(u.a)(t,2),n=e[0],o=e[1],a=function(t,e){var n=t.map(function(e,n){return t.map(function(t){return t[n]})});return e>0?n.map(function(t){return t.reverse()}):n.reverse()},c=Object(r.useCallback)(function(){console.log("reset player"),o({pos:{x:4,y:0},shape:p().shape,collided:!1})},[]);return[n,function(t){var e=t.x,n=t.y,r=t.collided;o(function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach(function(e){Object(f.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t,{pos:{x:t.pos.x+=e,y:t.pos.y+=n},collided:r})})},c,function(t,e){var r=JSON.parse(JSON.stringify(n));r.shape=a(r.shape,e);for(var c=r.pos.x,u=1;b(r,t,{x:0,y:0});)if(r.pos.x+=u,(u=-(u+(u>0?1:-1)))>r.shape[0].length)return a(r.shape,-e),void(r.pos.x=c);o(r)}]},g=function(t,e){var n=Object(r.useState)(d()),o=Object(u.a)(n,2),a=o[0],c=o[1],i=Object(r.useState)(0),l=Object(u.a)(i,2),f=l[0],s=l[1];return Object(r.useEffect)(function(){s(0);var n=function(n){var r=n.map(function(t){return t.map(function(t){return"clear"===t[1]?[0,"clear"]:t})});return t.shape.forEach(function(e,n){e.forEach(function(e,o){0!==e&&(r[n+t.pos.y][o+t.pos.x]=[e,"".concat(t.collided?"merged":"clear")])})}),t.collided?(e(),function(t){return t.reduce(function(e,n){return-1===n.findIndex(function(t){return 0===t[0]})?(s(function(t){return t+1}),e.unshift(new Array(t[0].length).fill([0,"clear"])),e):(e.push(n),e)},[])}(r)):r};c(function(t){return n(t)})},[t,e]),[a,c,f]};function m(){var t=Object(i.a)(["\n\twidth: auto;\n\tbackground: rgba(",", 0.8);\n\tborder: ",";\n\tborder-bottom-color: rgba(",", 0.1);\n\tborder-right-color: rgba(",", 1);\n\tborder-top-color: rgba(",", 1);\n\tborder-left-color: rgba(",", 0.3);\n"]);return m=function(){return t},t}var O=l.a.div(m(),function(t){return t.color},function(t){return 0===t.type?"0px solid":"4px solid"},function(t){return t.color},function(t){return t.color},function(t){return t.color},function(t){return t.color}),x=o.a.memo(function(t){var e=t.type;t.color;return o.a.createElement(O,{type:e,color:s[e].color,"data-cy":"cell"})});function y(){var t=Object(i.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: repeat(",", calc(25vw / ","));\n\tgrid-template-columns: repeat(",", 1fr);\n\tgrid-gap: 1px;\n\tborder: 2px solid #333;\n\twidth: 100%;\n\tmax-width: 25vw;\n\tbackground: #111;\n"]);return y=function(){return t},t}var j=l.a.div(y(),function(t){return t.height},function(t){return t.width},function(t){return t.width}),w=function(t){var e=t.stage;return o.a.createElement(j,{width:e[0].length,height:e.length,id:"stage","data-cy":"stage"},e.map(function(t){return t.map(function(t,e){return o.a.createElement(x,{key:e,type:t[0]})})}))};function E(){var t=Object(i.a)(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 0 0 20px 0;\n\tpadding: 20px;\n\tborder: 4px solid #333;\n\tmin-height: 30px;\n\twidth: 100%;\n\tborder-radius: 20px;\n\tcolor: ",";\n\tbackground: #000;\n\tfont-family: Pixel, Arial, Helvetica, sans-serif;\n\tfont-size: 0.8rem;\n"]);return E=function(){return t},t}var S=l.a.div(E(),function(t){return t.gameOver?"red":"#999"}),k=function(t){t.gameOver;var e=t.text;return o.a.createElement(S,null,e)};function I(){var t=Object(i.a)(["\n\tbox-sizing: border-box;\n\tmargin: 0 0 20px 0;\n\tpadding: 20px;\n\tmin-height: 30px;\n\twidth: 100%;\n\tborder-radius: 20px;\n\tborder: none;\n\tcolor: white;\n\tbackground: #333;\n\tfont-family: Pixel, Arial, Helvetica, sans-serif;\n\tfont-size: 1rem;\n\toutline: none;\n\tcursor: pointer;\n"]);return I=function(){return t},t}var J=l.a.button(I()),P=function(t){var e=t.callback;return o.a.createElement(J,{onClick:e,"data-cy":"btn-start"},"Start Game")},L=n(16),A=n.n(L);function T(){var t=Object(i.a)(["\n\tdisplay: flex;\n\talign-items: flex-start;\n\tpadding: 40px;\n\tmargin: 0 auto;\n\tmax-width: 900px;\n\taside {\n\t\twidth: 100%;\n\t\tmax-width: 200px;\n\t\tdisplay: block;\n\t\tpadding: 0 20px;\n\t}\n"]);return T=function(){return t},t}function Z(){var t=Object(i.a)(["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: url(",") #000;\n\tbackground-size: cover;\n\toverflow: hidden;\n"]);return Z=function(){return t},t}var z=l.a.div(Z(),A.a),C=l.a.div(T()),D=function(){var t=Object(r.useState)(null),e=Object(u.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(!1),i=Object(u.a)(c,2),l=i[0],f=i[1],s=h(),p=Object(u.a)(s,4),v=p[0],m=p[1],O=p[2],x=p[3],y=g(v,O),j=Object(u.a)(y,3),E=j[0],S=j[1],I=function(t){var e=Object(r.useState)(0),n=Object(u.a)(e,2),o=n[0],a=n[1],c=Object(r.useState)(0),i=Object(u.a)(c,2),l=i[0],f=i[1],s=Object(r.useState)(0),p=Object(u.a)(s,2),d=p[0],b=p[1],v=[40,100,300,1200],h=Object(r.useCallback)(function(){t>0&&(a(function(e){return e+v[t-1]*(d+1)}),f(function(e){return e+t}))},[d,v,t]);return Object(r.useEffect)(function(){h()},[h,t,o]),[o,a,l,f,d,b]}(j[2]),J=Object(u.a)(I,6),L=J[0],A=J[1],T=J[2],Z=J[3],D=J[4],G=J[5];console.log("re-render");var N=function(t){b(v,E,{x:t,y:0})||m({x:t,y:0})},H=function(){T>5*(D+1)&&(G(function(t){return t+1}),a(1e3/(D+1)+200)),b(v,E,{x:0,y:1})?(v.pos.y<1&&(console.log("Game over!"),f(!0),a(null)),m({x:0,y:0,collided:!0})):m({x:0,y:1,collided:!1})},K=function(t){var e=t.keyCode;l||(37===e?N(-1):39===e?N(1):40===e?(a(null),H()):38===e&&x(E,1))};return function(t,e){var n=Object(r.useRef)();Object(r.useEffect)(function(){n.current=t},[t]),Object(r.useEffect)(function(){if(null!==e){var t=setInterval(function(){n.current()},e);return function(){clearInterval(t)}}},[e])}(function(){H()},n),o.a.createElement(z,{role:"button",tabIndex:"0",onKeyDown:function(t){return K(t)},onKeyUp:function(t){var e=t.keyCode;l||40===e&&a(1e3/(D+1)+200)}},o.a.createElement(C,null,o.a.createElement(w,{stage:E}),o.a.createElement("aside",null,l?o.a.createElement(k,{gameOver:l,text:"Game Over"}):o.a.createElement("div",null,o.a.createElement(k,{text:"Score: ".concat(L),"data-cy":"score"}),o.a.createElement(k,{text:"Rows: ".concat(T),"data-cy":"rows"}),o.a.createElement(k,{text:"Level: ".concat(D),"data-cy":"level"})),o.a.createElement(P,{callback:function(){S(d()),a(1e3),O(),f(!1),A(0),Z(0),G(0)}}))))},G=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(D,null))};n(31);Object(a.render)(o.a.createElement(c.a,null,o.a.createElement(G,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e51c16e6.chunk.js.map