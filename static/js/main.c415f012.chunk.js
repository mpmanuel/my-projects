(this["webpackJsonpmy-projects"]=this["webpackJsonpmy-projects"]||[]).push([[0],{142:function(e,t,c){},143:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(38),s=c.n(r),i=c(27),j=c.n(i),o=c(39),l=c(8),b=c(17),d=c(0),u=Object(n.createContext)(),h=function(){return Object(n.useContext)(u)};function O(e){var t=e.children,c=Object(n.useState)(!1),a=Object(l.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(null),h=Object(l.a)(i,2),O=h[0],x=h[1],v=Object(n.useState)(null),p=Object(l.a)(v,2),f=p[0],m=p[1],g=Object(n.useState)(!0),w=Object(l.a)(g,2),N=w[0],k=w[1];return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)({domain:"dev-6gpit8rv.us.auth0.com",client_id:"xFS8zilWgRXc6K7GNerqYVtyrlpr3kRW",redirect_uri:"".concat(window.location.origin,"/authentication/dashboard")});case 2:if(t=e.sent,m(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=14;break}return e.prev=5,e.next=8,t.handleRedirectCallback();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),alert(e.t0);case 13:window.location.replace(window.location.pathname);case 14:return e.next=16,t.isAuthenticated();case 16:if(c=e.sent,s(c),!c){e.next=23;break}return e.next=21,t.getUser();case 21:n=e.sent,x(n);case 23:k(!1);case 24:case"end":return e.stop()}}),e,null,[[5,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),N?Object(d.jsx)("div",{children:"Loading..."}):Object(d.jsx)(u.Provider,{value:{isAuthenticated:r,user:O,isLoading:N,login:function(){return f.loginWithRedirect.apply(f,arguments)},logout:function(){return f.logout.apply(f,arguments)},getToken:function(){return f.getTokenSilently.apply(f,arguments)}},children:t})}c.p,c(55);function x(){return Object(d.jsx)("div",{children:"Home"})}c(56);function v(e){return e.toString().padStart(2,"0")}function p(){var e=Object(n.useState)("Lets go"),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(1500),s=Object(l.a)(r,2),i=s[0],j=s[1],o=Object(n.useRef)(null);function b(){clearInterval(o.current),a("Continue?"),j(1500)}var u=v(Math.floor(i/60)),h=v(i-60*u);return Object(d.jsx)("div",{className:"pomodoro",children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("h2",{children:c}),Object(d.jsxs)("div",{className:"timer",children:[Object(d.jsx)("span",{children:u}),Object(d.jsx)("span",{children:":"}),Object(d.jsx)("span",{children:h})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:function(){null===o.current&&(a("Good job"),o.current=setInterval((function(){j((function(e){return e>=1?e-1:(b(),0)}))}),1e3))},children:"Start"}),Object(d.jsx)("button",{onClick:function(){null!==o.current&&(clearInterval(o.current),o.current=null,a("Keep Going"))},children:"Stop"}),Object(d.jsx)("button",{onClick:b,children:"Reset"})]})]})})}var f=c(4),m=c(2);function g(){var e=Object(n.useContext)(u),t=e.isAuthenticated,c=e.login,a=e.logout,r=e.user;return Object(d.jsxs)("div",{className:"site-header",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(f.b,{to:"/authentication",children:"Home"}),Object(d.jsx)(f.b,{to:"/authentication/dashboard",children:"Dashboard"})]}),Object(d.jsxs)("div",{children:[!t&&Object(d.jsx)("button",{onClick:c,children:"Login"}),t&&r&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{children:r.name}),Object(d.jsx)("button",{onClick:a,children:"Logout"})]})]})]})}var w=c.p+"static/media/frodo.5d08a455.png";function N(){return Object(d.jsx)("div",{className:"page dashboard",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:w,alt:"Frodo"}),Object(d.jsx)("h2",{children:"Welcome Person"})]})})}var k=c.p+"static/media/gandalf.ea106f4e.png";function S(){return Object(d.jsx)("div",{className:"page home",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:k,alt:"Gandalf"}),Object(d.jsx)("h2",{children:"You Shall Not Pass!!!"})]})})}var y=c(30),C=c(42);function A(e){var t=e.children,c=Object(C.a)(e,["children"]),n=h(),a=n.isAuthenticated,r=n.user,s=n.login;return a||r?Object(d.jsx)(m.a,Object(y.a)(Object(y.a)({},c),{},{children:t})):s()}c(61);function P(){h();return Object(d.jsx)("div",{className:"auth",children:Object(d.jsx)(f.a,{children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(g,{}),Object(d.jsxs)(m.c,{children:[Object(d.jsx)(A,{path:"/authentication/dashboard",children:Object(d.jsx)(N,{})}),Object(d.jsx)(m.a,{path:"/authentication",exact:!0,children:Object(d.jsx)(S,{})})]})]})})})}c(62);var I=c(41),M=c.n(I);function R(){var e=Object(n.useState)("# hello"),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(d.jsx)("div",{className:"markdown",children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("textarea",{onChange:function(e){a(e.target.value)},value:c}),Object(d.jsx)(M.a,{className:"preview",source:c})]})})}function F(e){var t=e.children,c=Object(n.useState)({left:0,opacity:0}),a=Object(l.a)(c,2),r=a[0],s=a[1];return Object(d.jsx)("div",{className:"browsertab",children:Object(d.jsxs)("div",{className:"tab",onMouseOut:function(e){s({opacity:0,left:e.nativeEvent.layerX-150})},onMouseMove:function(e){s({left:e.nativeEvent.layerX-150})},children:[Object(d.jsx)("div",{className:"highlight",style:r}),t]})})}function H(){return Object(d.jsx)("div",{children:"I am the Home Page"})}function L(){return Object(d.jsx)("div",{children:"I am the About Page"})}function E(){return Object(d.jsx)("div",{children:"I am the Features Page"})}c(142);var G=function(){return Object(d.jsx)("div",{className:"broswertab",children:Object(d.jsx)(f.a,{children:Object(d.jsx)("div",{className:"app",children:Object(d.jsxs)("div",{className:"browser",children:[Object(d.jsxs)("div",{className:"tabs",children:[Object(d.jsx)(F,{children:Object(d.jsx)(f.c,{to:"/browsertab",activeClassName:"is-active",exact:!0,children:"Home"})}),Object(d.jsx)(F,{children:Object(d.jsx)(f.c,{to:"/browsertab/about",activeClassName:"is-active",children:"About"})}),Object(d.jsx)(F,{children:Object(d.jsx)(f.c,{to:"/browsertabfeatures",activeClassName:"is-active",children:"Features"})})]}),Object(d.jsx)("div",{className:"viewport",children:Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/browsertab/about",children:Object(d.jsx)(L,{})}),Object(d.jsx)(m.a,{path:"/browsertab/features",children:Object(d.jsx)(E,{})}),Object(d.jsx)(m.a,{path:"/browsertab",exact:!0,children:Object(d.jsx)(H,{})})]})})]})})})})};var T=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(f.a,{children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(f.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(f.b,{to:"/Pomodoro",children:"Pomodoro"})}),Object(d.jsx)("li",{children:Object(d.jsx)(f.b,{to:"/Markdown",children:"Markdown"})}),Object(d.jsx)("li",{children:Object(d.jsx)(f.b,{to:"/BrowserTab",children:"broswerTab"})}),Object(d.jsx)("li",{children:Object(d.jsx)(f.b,{to:"/Authentication",children:"Authentication"})})]}),Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/pomodoro",children:Object(d.jsx)(p,{})}),Object(d.jsx)(m.a,{path:"/markdown",children:Object(d.jsx)(R,{})}),Object(d.jsx)(m.a,{path:"/browsertab",children:Object(d.jsx)(G,{})}),Object(d.jsx)(m.a,{path:"/authentication",children:Object(d.jsx)(P,{})}),Object(d.jsx)(m.a,{path:"/",exact:!0,children:Object(d.jsx)(x,{})})]})]})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{children:Object(d.jsx)(T,{})})}),document.getElementById("root"))},55:function(e,t,c){},56:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){}},[[143,1,2]]]);
//# sourceMappingURL=main.c415f012.chunk.js.map