(this.webpackJsonpvalidation=this.webpackJsonpvalidation||[]).push([[0],{175:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),r=n.n(o),i=n(205),l=n(206),u=n(30),s=n.n(u),d=n(41),m=n(75),f=n(74),p=n(42),v=n(67),h="app-data/".concat(config.app),g=localStorage.getItem(h),E=g&&JSON.parse(g);function b(e){localStorage.setItem(h,JSON.stringify(e)),E=e}E||b({});var k=new Proxy(E,{get:function(e,t,n){return E[t]},set:function(e,t,n,a){return b(Object(v.a)({},E,Object(p.a)({},t,n))),!0},deleteProperty:function(e,t){var n=E;n[t];return b(Object(m.a)(n,[t].map(f.a))),!0}});function y(){delete k["auth-code"],window.location.reload()}function w(e,t,n,a){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(s.a.mark((function e(t,n,a,c){var o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(n),{method:t,headers:{"auth-code":k["auth-code"],"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:if(401!==(o=e.sent).status){e.next=6;break}return y(),e.abrupt("return",null);case 6:if(o.ok){e.next=14;break}return e.t0=Error,e.t1="".concat(o.statusText," (").concat(o.status,"): "),e.next=11,o.text();case 11:throw e.t2=e.sent,e.t3=e.t1.concat.call(e.t1,e.t2),new e.t0(e.t3);case 14:return e.next=16,c?o.text():o.json();case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w("POST","validation/visit-up");case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Unable to visit up:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var O=n(73),S=Object(O.a)({palette:{primary:{main:"#5e35b1"},secondary:{main:"#aa00ff"}}}),T=n(46),C=n(207),N=n(210),M=n(209),L=n(204),D=n(76),I=n(40),J=n(196),P=n(198),B=n(199),A=n(200),R=n(201),U=n(208),V=n(211),W=Object(U.a)((function(e){return{menu:{marginRight:e.spacing(2)},icon:{width:e.spacing(4),height:e.spacing(4),marginRight:e.spacing(3),flexShrink:0},npmLink:{textTransform:"none",flexShrink:0},npmLogo:{height:e.spacing(2)}}}));function _(e){var t=e.onSideMenuClick,n=W();return c.a.createElement(J.a,{position:"sticky"},c.a.createElement(P.a,null,c.a.createElement(N.a,{lgUp:!0,implementation:"css"},c.a.createElement(B.a,{className:n.menu,color:"inherit",onClick:t},c.a.createElement(V.a,null))),c.a.createElement(N.a,{xsDown:!0,implementation:"css"},c.a.createElement("img",{className:n.icon,src:"/favicon.png",alt:"Validation"})),c.a.createElement(A.a,{variant:"h6",noWrap:!0},"Validation Documentation"),c.a.createElement(C.a,{flexGrow:1,marginRight:2}),c.a.createElement(R.a,{className:n.npmLink,variant:"contained",color:"secondary",size:"small",href:"https://www.npmjs.com/package/@ahs502/validation",target:"_blank",title:"Visit the package in the NPM website"},"\xa0",c.a.createElement("img",{className:n.npmLogo,src:"/npm-logo.png",alt:"NPM"}),"\xa0",c.a.createElement(N.a,{smDown:!0,implementation:"css"},"\xa0\xa0@ahs502/validation"))))}var F=n(36),q=n(176),z=n(202),G=n(212),H=n(203),K=n(26),Q=[Y("introduction","Introduction",n(90).default),Y("tutorial","Tutorial",n(91).default,Y("basics","Basics",n(92).default),Y("advances","Advances",n(93).default))];console.log(Q);var X=Q;function Y(e,t,n){if(!e||!t)throw new Error("Invalid side menu item data.");for(var a={code:e,label:t,markdown:n},c=arguments.length,o=new Array(c>3?c-3:0),r=3;r<c;r++)o[r-3]=arguments[r];return o.length&&(a.content=o),a}function Z(){console.log("content",X);var e=Object(K.e)(),t=Object(K.d)(),n=e.pathname.split("/").slice(1),a=n[0]===config.app?"/".concat(n.shift()):"";if(0===n.length){var c=X[0];return t.push("".concat(a,"/").concat(c.code)),[c]}for(var o=[],r=X,i=function(){var e=n.shift(),c=r.find((function(t){return t.code===e}));if(!c)return t.push(a),{v:o};a="".concat(a,"/").concat(c.code),r=c.content||[],o.push(c)};n.length;){var l=i();if("object"===typeof l)return l.v}return o}function $(e){var t=e.onClick,n=Object(D.a)(),a=Object(K.d)(),o=Z(),r=Object(T.a)(o,3),i=r[0],l=r[1],u=r[2];return c.a.createElement(C.a,{minWidth:n.spacing(30)},c.a.createElement(q.a,{square:!0,variant:"outlined"},c.a.createElement(z.a,null,X.flatMap((function(e){var n;return[c.a.createElement(G.a,{key:e.code,button:!0,onClick:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){a.push("/".concat(e.code)),null===t||void 0===t||t()}))},c.a.createElement(A.a,{variant:"h5",color:e.code!==(null===i||void 0===i?void 0:i.code)?"initial":(null===(n=e.content)||void 0===n?void 0:n.some((function(e){return e.code===(null===l||void 0===l?void 0:l.code)})))?"primary":"secondary"},e.label))].concat(Object(F.a)((e.content||[]).flatMap((function(n){var o;return[c.a.createElement(G.a,{key:"".concat(e.code,"/").concat(n.code),button:!0,dense:!0,onClick:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){a.push("/".concat(e.code,"/").concat(n.code)),null===t||void 0===t||t()}))},c.a.createElement(C.a,{paddingLeft:4},c.a.createElement(A.a,{variant:"h6",color:e.code!==(null===i||void 0===i?void 0:i.code)||n.code!==(null===l||void 0===l?void 0:l.code)?"initial":(null===(o=n.content)||void 0===o?void 0:o.some((function(e){return e.code===(null===u||void 0===u?void 0:u.code)})))?"primary":"secondary"},n.label)))].concat(Object(F.a)((n.content||[]).map((function(o){return c.a.createElement(G.a,{key:"".concat(e.code,"/").concat(n.code,"/").concat(o.code),button:!0,dense:!0,onClick:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){a.push("/".concat(e.code,"/").concat(n.code,"/").concat(o.code)),null===t||void 0===t||t()}))},c.a.createElement(C.a,{paddingLeft:8},c.a.createElement(A.a,{variant:"subtitle1",color:e.code!==(null===i||void 0===i?void 0:i.code)||n.code!==(null===l||void 0===l?void 0:l.code)||o.code!==(null===u||void 0===u?void 0:u.code)?"initial":"secondary"},o.label)))}))))}))),[e!==X[X.length-1]&&c.a.createElement(H.a,{key:"".concat(e.code," separator")})])})))))}var ee=n(72),te=n.n(ee);function ne(){var e=Z();console.log("sections",e);var t=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return[{key:"".concat(n,"/").concat(t.code),markdown:t.markdown}].concat(Object(F.a)((t.content||[]).flatMap((function(a){return e(a,"".concat(n,"/").concat(t.code))}))))}(e[0]);return c.a.createElement(c.a.Fragment,null,t.map((function(e){var t=e.key,n=e.markdown;return c.a.createElement(te.a,{key:t,source:n})})))}!function(){j.apply(this,arguments)}(),r.a.render(c.a.createElement(i.a,{theme:S},c.a.createElement(l.a,null),c.a.createElement((function(){var e=Object(a.useState)(!1),t=Object(T.a)(e,2),n=t[0],o=t[1],r=Object(D.a)();return c.a.createElement(I.a,null,c.a.createElement(C.a,null,c.a.createElement(_,{onSideMenuClick:function(){return o(!0)}}),c.a.createElement(N.a,{mdDown:!0},c.a.createElement(C.a,{position:"fixed",top:r.spacing(8),bottom:0,left:0,overflow:"auto"},c.a.createElement($,null))),c.a.createElement(N.a,{lgUp:!0},c.a.createElement(M.a,{anchor:"left",open:n,onClose:function(){return o(!1)}},c.a.createElement($,{onClick:function(){return o(!1)}}))),c.a.createElement(C.a,{display:"flex"},c.a.createElement(N.a,{mdDown:!0},c.a.createElement(C.a,{flex:"0 0 ".concat(r.spacing(30),"px")})),c.a.createElement(L.a,{maxWidth:"lg"},c.a.createElement(ne,null)))))}),null)),document.getElementById("root"))},81:function(e,t,n){e.exports=n(175)},90:function(e,t,n){"use strict";n.r(t),t.default="## Title\n\n- First item\n- Second item\n\n**Bold** _italic_\n\n"},91:function(e,t,n){"use strict";n.r(t),t.default="**TT**"},92:function(e,t,n){"use strict";n.r(t),t.default="**TT** B"},93:function(e,t,n){"use strict";n.r(t),t.default="**TT** A"}},[[81,1,2]]]);
//# sourceMappingURL=main.2ce0db73.chunk.js.map