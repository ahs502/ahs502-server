(this.webpackJsonpvalidation=this.webpackJsonpvalidation||[]).push([[0],{177:function(n,e,t){"use strict";t.r(e);var a=t(0),c=t.n(a),o=t(9),r=t.n(o),i=t(207),l=t(208),d=t(30),u=t.n(d),s=t(41),b=t(75),f=t(74),m=t(42),p=t(67),v="app-data/".concat(config.app),h=localStorage.getItem(v),g=h&&JSON.parse(h);function E(n){localStorage.setItem(v,JSON.stringify(n)),g=n}g||E({});var k=new Proxy(g,{get:function(n,e,t){return g[e]},set:function(n,e,t,a){return E(Object(p.a)({},g,Object(m.a)({},e,t))),!0},deleteProperty:function(n,e){var t=g;t[e];return E(Object(b.a)(t,[e].map(f.a))),!0}});function y(){delete k["auth-code"],window.location.reload()}function w(n,e,t,a){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(u.a.mark((function n(e,t,a,c){var o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/".concat(t),{method:e,headers:{"auth-code":k["auth-code"],"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:if(401!==(o=n.sent).status){n.next=6;break}return y(),n.abrupt("return",null);case 6:if(o.ok){n.next=14;break}return n.t0=Error,n.t1="".concat(o.statusText," (").concat(o.status,"): "),n.next=11,o.text();case 11:throw n.t2=n.sent,n.t3=n.t1.concat.call(n.t1,n.t2),new n.t0(n.t3);case 14:return n.next=16,c?o.text():o.json();case 16:return n.abrupt("return",n.sent);case 17:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(){return(j=Object(s.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w("POST","validation/visit-up");case 3:e=n.sent,console.log(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Unable to visit up:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}var O=t(73),S=Object(O.a)({palette:{primary:{main:"#5e35b1"},secondary:{main:"#aa00ff"}}}),T=t(46),C=t(209),N=t(212),B=t(211),M=t(206),_=t(76),L=t(40),D=t(198),I=t(200),J=t(201),P=t(202),A=t(203),W=t(210),R=t(213),U=Object(W.a)((function(n){return{menu:{marginRight:n.spacing(2)},icon:{width:n.spacing(4),height:n.spacing(4),marginRight:n.spacing(3),flexShrink:0},npmLink:{textTransform:"none",flexShrink:0},npmLogo:{height:n.spacing(2)}}}));function V(n){var e=n.onSideMenuClick,t=U();return c.a.createElement(D.a,{position:"sticky"},c.a.createElement(I.a,null,c.a.createElement(N.a,{lgUp:!0,implementation:"css"},c.a.createElement(J.a,{className:t.menu,color:"inherit",onClick:e},c.a.createElement(R.a,null))),c.a.createElement(N.a,{xsDown:!0,implementation:"css"},c.a.createElement("img",{className:t.icon,src:"/favicon.png",alt:"Validation"})),c.a.createElement(P.a,{variant:"h6",noWrap:!0},"Validation Documentation"),c.a.createElement(C.a,{flexGrow:1,marginRight:2}),c.a.createElement(A.a,{className:t.npmLink,variant:"contained",color:"secondary",size:"small",href:"https://www.npmjs.com/package/@ahs502/validation",target:"_blank",title:"Visit the package in the NPM website"},"\xa0",c.a.createElement("img",{className:t.npmLogo,src:"/npm-logo.png",alt:"NPM"}),"\xa0",c.a.createElement(N.a,{smDown:!0,implementation:"css"},"\xa0\xa0@ahs502/validation"))))}var F=t(36),q=t(178),z=t(204),G=t(214),H=t(205),K=t(26),Q=[X("introduction","Introduction",t(90).default),X("tutorial","Tutorial",t(91).default,X("basics","Basics",t(92).default,X("aaa","A a a",t(93).default),X("bbb","B b b",t(94).default)),X("advances","Advances",t(95).default))];function X(n,e,t){if(!n||!e)throw new Error("Invalid side menu item data.");for(var a={code:n,label:e,markdown:t},c=arguments.length,o=new Array(c>3?c-3:0),r=3;r<c;r++)o[r-3]=arguments[r];return o.length&&(a.content=o),a}function Y(n){var e="/".concat(config.app);return"development"!==config.env?"".concat(e,"/").concat(n):n}function Z(){var n=Object(K.e)(),e=Object(K.d)(),t=function(n){var e="/".concat(config.app);return"development"!==config.env&&n.startsWith(e)?n.replace(e,""):n}(n.pathname).split("/").slice(1).filter(Boolean);if(0===t.length){var a=Q[0];return e.push(Y("/".concat(a.code))),[a]}for(var c=[],o=Q,r="",i=function(){var n=t.shift(),a=o.find((function(e){return e.code===n}));if(!a)return e.push(Y(r)),{v:c};r="".concat(r,"/").concat(a.code),o=a.content||[],c.push(a)};t.length;){var l=i();if("object"===typeof l)return l.v}return c}function $(n){var e=n.onClick,t=Object(_.a)(),a=(Object(K.e)(),Object(K.d)()),o=Z(),r=Object(T.a)(o,3),i=r[0],l=r[1],d=r[2];return c.a.createElement(C.a,{minWidth:t.spacing(30)},c.a.createElement(q.a,{square:!0,variant:"outlined"},c.a.createElement(z.a,null,Q.flatMap((function(n){var t;return[c.a.createElement(G.a,{key:n.code,button:!0,onClick:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(){a.push(Y("/".concat(n.code))),null===e||void 0===e||e()}))},c.a.createElement(P.a,{variant:"h5",color:n.code!==(null===i||void 0===i?void 0:i.code)?"initial":(null===(t=n.content)||void 0===t?void 0:t.some((function(n){return n.code===(null===l||void 0===l?void 0:l.code)})))?"primary":"secondary"},n.label))].concat(Object(F.a)((n.content||[]).flatMap((function(t){var o;return[c.a.createElement(G.a,{key:"".concat(n.code,"/").concat(t.code),button:!0,dense:!0,onClick:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(){a.push(Y("/".concat(n.code,"/").concat(t.code))),null===e||void 0===e||e()}))},c.a.createElement(C.a,{paddingLeft:4},c.a.createElement(P.a,{variant:"h6",color:n.code!==(null===i||void 0===i?void 0:i.code)||t.code!==(null===l||void 0===l?void 0:l.code)?"initial":(null===(o=t.content)||void 0===o?void 0:o.some((function(n){return n.code===(null===d||void 0===d?void 0:d.code)})))?"primary":"secondary"},t.label)))].concat(Object(F.a)((t.content||[]).map((function(o){return c.a.createElement(G.a,{key:"".concat(n.code,"/").concat(t.code,"/").concat(o.code),button:!0,dense:!0,onClick:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(){a.push(Y("/".concat(n.code,"/").concat(t.code,"/").concat(o.code))),null===e||void 0===e||e()}))},c.a.createElement(C.a,{paddingLeft:8},c.a.createElement(P.a,{variant:"subtitle1",color:n.code!==(null===i||void 0===i?void 0:i.code)||t.code!==(null===l||void 0===l?void 0:l.code)||o.code!==(null===d||void 0===d?void 0:d.code)?"initial":"secondary"},o.label)))}))))}))),[n!==Q[Q.length-1]&&c.a.createElement(H.a,{key:"".concat(n.code," separator")})])})))))}var nn=t(72),en=t.n(nn);function tn(){var n=function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return[{key:"".concat(t,"/").concat(e.code),markdown:e.markdown}].concat(Object(F.a)((e.content||[]).flatMap((function(a){return n(a,"".concat(t,"/").concat(e.code))}))))}(Z()[0]);return c.a.createElement(c.a.Fragment,null,n.map((function(n){var e=n.key,t=n.markdown;return c.a.createElement(en.a,{key:e,source:t})})))}!function(){j.apply(this,arguments)}(),r.a.render(c.a.createElement(i.a,{theme:S},c.a.createElement(l.a,null),c.a.createElement((function(){var n=Object(a.useState)(!1),e=Object(T.a)(n,2),t=e[0],o=e[1],r=Object(_.a)();return c.a.createElement(L.a,null,c.a.createElement(C.a,null,c.a.createElement(V,{onSideMenuClick:function(){return o(!0)}}),c.a.createElement(N.a,{mdDown:!0},c.a.createElement(C.a,{position:"fixed",top:r.spacing(8),bottom:0,left:0,overflow:"auto"},c.a.createElement($,null))),c.a.createElement(N.a,{lgUp:!0},c.a.createElement(B.a,{anchor:"left",open:t,onClose:function(){return o(!1)}},c.a.createElement($,{onClick:function(){return o(!1)}}))),c.a.createElement(C.a,{display:"flex"},c.a.createElement(N.a,{mdDown:!0},c.a.createElement(C.a,{flex:"0 0 ".concat(r.spacing(30),"px")})),c.a.createElement(M.a,{maxWidth:"lg"},c.a.createElement(tn,null)))))}),null)),document.getElementById("root"))},81:function(n,e,t){n.exports=t(177)},90:function(n,e,t){"use strict";t.r(e),e.default="## Title\n\n- First item\n- Second item\n\n**Bold** _italic_\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd"},91:function(n,e,t){"use strict";t.r(e),e.default="**TT**\n\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd"},92:function(n,e,t){"use strict";t.r(e),e.default="**TT** Basics\n\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd"},93:function(n,e,t){"use strict";t.r(e),e.default="**TT** Basics _aaa_\n\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd"},94:function(n,e,t){"use strict";t.r(e),e.default="**TT** Basics _bbb_\n\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd"},95:function(n,e,t){"use strict";t.r(e),e.default="**TT** Advances\n\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd\n\n# a\n\nb\n\nc\n\nd"}},[[81,1,2]]]);
//# sourceMappingURL=main.a1ac5f87.chunk.js.map