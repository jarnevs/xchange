(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,a){e.exports=a(50)},46:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),s=a(5),i=a(4),o=a(1),u=a.n(o),m=a(3),d=a(2),p=(a(36),a(14)),f=a.n(p),v={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/jarnevs/xchange",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/jarnevs/xchange",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/jarnevs/xchange",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/jarnevs/xchange",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/jarnevs/xchange",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/jarnevs/xchange",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/jarnevs/xchange",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_APP_ID},E=r.a.createContext(null),g=function(){return Object(n.useContext)(E)},N=function(e){var t=e.children,a=Object(n.useState)(f.a.apps.length?f.a.app():f.a.initializeApp(v)),c=Object(d.a)(a,1)[0];return r.a.createElement(E.Provider,{value:{app:c}},t)},b=r.a.createContext(null),O=function(e){var t=e.children,a=Object(n.useState)(JSON.parse(localStorage.getItem("react-firebase:currentUser"))),c=Object(d.a)(a,2),l=c[0],s=c[1],i=g().app.auth();Object(n.useEffect)((function(){var e=i.onAuthStateChanged((function(e){localStorage.setItem("react-firebase:currentUser",JSON.stringify(e)),s(e)}));return function(){e()}}),[]);var o=function(){var e=Object(m.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.signInWithEmailAndPassword(t,a);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("react-firebase:currentUser",null),e.next=3,i.signOut();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(b.Provider,{value:{currentUser:l,signInWithEmailAndPassword:o,signOut:p}},t)},h=(a(38),r.a.createContext(null)),_=function(){return Object(n.useContext)(h)},j=function(e){var t=e.children,a=g().app.firestore(),n=function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.collection("products"),e.next=3,t.get();case 3:return n=e.sent,r=n.docs.map((function(e){return e.data()})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.collection("products").orderBy("name","asc"),e.next=3,t.get();case 3:return n=e.sent,r=n.docs.map((function(e){return e.data()})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.collection("regions"),e.next=3,t.get();case 3:return n=e.sent,r=n.docs.map((function(e){return e.data()})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.collection("regions").doc(t),e.next=3,n.get();case 3:return r=e.sent,e.abrupt("return",r.data());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.collection("products").doc(t),e.next=3,n.get();case 3:return r=e.sent,e.abrupt("return",r.data());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(h.Provider,{value:{getProducts:n,getProduct:i,getRegion:s,getProductsWithOrder:c,getRegions:l}},t)},S=(Object(n.createContext)(),a(28)),w=function(e){var t=e.component,a=e.layout,n=Object(S.a)(e,["component","layout"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return function(e,t,a){return t?r.a.createElement(t,a,r.a.createElement(e,a)):r.a.createElement(e,a)}(t,a,e)}}))},x=function(e){e.children;return r.a.createElement("footer",{className:"app-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-12 d-flex align-items-center justify-content-center"},r.a.createElement("p",{className:"text-center padding-none p-0 m-0"},"\xa9 Jarne Van Steendam - Arteveldehogeschool")))))},y=function(e){e.children;var t=Object(n.useState)(!0),a=Object(d.a)(t,2),c=a[0],l=a[1];return r.a.createElement("header",{className:"app-header"},r.a.createElement("nav",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-6 col-md-6"},r.a.createElement("h1",{className:"logo"},r.a.createElement(s.b,{to:"/",className:"logo__link"},"XCHANGE"))),r.a.createElement("div",{className:"col-6 col-md-6 main-nav d-flex justify-content-end align-items-center"},r.a.createElement("ul",{className:c?"main-nav__list hide":"main-nav__list"},r.a.createElement("li",{className:"main-nav__item"},r.a.createElement(s.c,{to:"/producten",className:"main-nav__link",activeClassName:"active"},"Zoeken")),r.a.createElement("li",{className:"main-nav__item"},r.a.createElement(s.c,{to:"/rewards",className:"main-nav__link",activeClassName:"active"},"Rewards")),r.a.createElement("li",{className:"main-nav__item"},r.a.createElement(s.c,{to:"/contact",className:"main-nav__link",activeClassName:"active"},"Contact")),r.a.createElement("li",{className:"main-nav__item"},r.a.createElement(s.c,{to:"/profiel",className:"main-nav__link cta-nav",activeClassName:"active"},"Profiel"))),r.a.createElement("i",{onClick:function(e){l(!c)},className:c?"fas fa-bars":"fas fa-times"})))))},C=function(e){var t=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(y,null),r.a.createElement("main",{className:"app-main"},t),r.a.createElement(x,null))},T=function(e){var t=e.products;return r.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},t&&t.length>0?t.map((function(e){return r.a.createElement(s.b,{to:"/producten/:id".replace(":id",e.id),key:e.id,className:"card"},r.a.createElement("div",{className:"card__image"},r.a.createElement("img",{src:e.thumbnail})),r.a.createElement("div",{className:"card__text"},r.a.createElement("h2",null,e.name)))})):r.a.createElement("p",null,"Geen producten "))},k=function(e){var t=e.product,a=e.otherProducts,n=e.user,c=e.reservered,l=e.addProductToAccount,i=function(e){for(var t=e.toString();t.length<2;)t="0".concat(t);return t};return r.a.createElement("div",{className:"container detail"},t?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-12"},r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap"},r.a.createElement("div",{className:"detail__thumb detail__top-part d-flex align-items-center justify-content-center"},r.a.createElement("img",{src:t.thumbnail})),r.a.createElement("div",{className:"detail__content detail__top-part"},r.a.createElement("h1",{className:"title-page"},t.name),r.a.createElement("p",null,t.description),r.a.createElement("p",{className:"title-text"},"Regio"),r.a.createElement("p",null,t.regionName),r.a.createElement("p",{className:"title-text"},"Te lenen tot"),r.a.createElement("p",null,function(e){var t=new Date(e),a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return"".concat(i(a),"/").concat(i(n),"/").concat(r)}(t.rentTill)),n?c?r.a.createElement("button",{className:"cta cta--detail",disabled:!0},"Je hebt dit al gereserveerd"):r.a.createElement("button",{onClick:function(e){return l(e)},className:"cta cta--detail"},"Reserveer"):r.a.createElement(s.b,{to:"/profiel",className:"cta cta--detail"},"Log je in")))),t.images.length>0?r.a.createElement("div",{className:"col-12 col-md-12"},r.a.createElement("h2",{className:"detail"},"Meer afbeeldingen"),r.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},t.images.map((function(e,t){return r.a.createElement("div",{key:t,className:"detail__image d-flex align-items-center justify-content-center"},r.a.createElement("img",{src:e}))})))):""):r.a.createElement("p",null,"Not a product"),r.a.createElement("div",{className:"detail__more-products"},r.a.createElement("h2",{className:"detail"},"Andere bekeken ook"),r.a.createElement(T,{products:a})))},P=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(d.a)(l,2),i=s[0],o=s[1],p=Object(n.useState)("all"),f=Object(d.a)(p,2),v=f[0],E=f[1],g=Object(n.useState)(null),N=Object(d.a)(g,2),b=N[0],O=N[1],h=Object(n.useState)(null),j=Object(d.a)(h,2),S=j[0],w=j[1],x=_(),y=x.getProductsWithOrder,C=x.getRegions;Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,w(t),O(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),e()}),[y]);return r.a.createElement("div",{className:"page page--products"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 title-page"},r.a.createElement("h1",null,"Producten")),r.a.createElement("div",{className:"col-12 title-page"},r.a.createElement("select",{onChange:function(e){return function(e){e.preventDefault();var t=e.target.value;if("all"===t)O(S);else{var a=S.filter((function(e){return e.region==t}));O(a)}E(t),o("")}(e)}},r.a.createElement("option",{value:"all"},"Alle regio's"),!!a&&a.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),r.a.createElement("input",{className:"products",name:"search",id:"search",placeholder:"Zoeken",value:i,onChange:function(e){return function(e){e.preventDefault(),o(e.target.value);var t=b.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));if(O(t),""===e.target.value&&"all"!==v){var a=S.filter((function(e){return e.region==v}));O(a)}else""===e.target.value&&"all"===v&&O(S)}(e)}})),r.a.createElement("div",{className:"col-12 col-md-12"},r.a.createElement(T,{products:b})))))},D=a(27),A=function(e){Object(D.a)(e);var t=Object(i.g)().id,a=Object(n.useState)(null),c=Object(d.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(null),p=Object(d.a)(o,2),f=p[0],v=p[1],E=Object(n.useState)(null),g=Object(d.a)(E,2),N=g[0],b=g[1],O=Object(n.useState)(""),h=Object(d.a)(O,2),j=h[0],S=h[1],w=Object(n.useState)(!1),x=Object(d.a)(w,2),y=x[0],C=x[1],T=_(),P=T.getProduct,A=T.getProducts,I=T.getRegion;Object(n.useEffect)((function(){C(!1);var e=function(){var e=Object(m.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=sessionStorage.getItem("currentUser"),null!==(n=JSON.parse(localStorage.getItem(a)))&&(console.log(l),n.products.includes(t)&&C(!0));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,a=n(t),v(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(e){for(var a=e.filter((function(e){return e.id!==t})),n=a.length,r=[],c=null;r.length<2;){var l=Math.floor(Math.random()*n);null!==c&&l===c&&(l+=1)>=n&&(l=0),r.push(a[l]),c=l}return r};(function(){var e=Object(m.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:return a=e.sent,e.next=5,I(a.region.toString());case 5:n=e.sent,a.regionName=n.name,s(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),a(),function(){var e=sessionStorage.getItem("currentUser"),t=JSON.parse(localStorage.getItem(e));S(e),b(t)}(),e(),window.scrollTo(0,0)}),[t]);return r.a.createElement("div",{className:"page"},r.a.createElement(k,{product:l,otherProducts:f,user:N,reservered:y,addProductToAccount:function(e){N.products.push(l.id),localStorage.setItem(j,JSON.stringify(N)),C(!0)}}))},I=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1],l=_().getProducts;return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:t=(t=e.sent).slice(0,4),c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement("div",{className:"page page--home"},r.a.createElement("div",{className:"head-image d-flex align-items-center"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement("h2",{className:"home"},"Heb je iets nodig? Geen zin om het te kopen? Leen het nu bij ons!"),r.a.createElement(s.b,{to:"/producten",className:"cta cta--detail"},"Bekijk ons assortiment"))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-12"},r.a.createElement("h2",{className:"detail"},"Recent toegevoegd"),r.a.createElement(T,{products:a})))))},R=a(20),U=function(e){var t=e.rewards,a=e.user,n=e.saveRewardToAccount;return r.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},t?t.map((function(e){return r.a.createElement("div",{key:e.id,className:"card"},r.a.createElement("div",{className:"card__image card__image--reward"},r.a.createElement("img",{src:e.image})),r.a.createElement("div",{className:"card__text"},r.a.createElement("div",null,r.a.createElement("h2",null,e.company),r.a.createElement("p",{className:"special"},e.discount,"% korting")),null!==a&&e.coins<=a.coins?r.a.createElement("button",{onClick:function(){return n(e)},className:"cta little-x"},e.coins," ",r.a.createElement("i",{className:"fas fa-coins"})):r.a.createElement("button",{className:"cta little-x",disabled:!0},e.coins," ",r.a.createElement("i",{className:"fas fa-coins"}))))})):r.a.createElement("p",null,"No rewards"))},W=a(52),K=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),s=Object(d.a)(l,2),i=s[0],o=s[1],p=Object(n.useState)(""),f=Object(d.a)(p,2),v=f[0],E=f[1],g=Object(n.useState)(null),N=Object(d.a)(g,2),b=N[0],O=N[1];Object(n.useEffect)((function(){o(!1);var e=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pgmgent-jarnvans.github.io/coupons/index.json");case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).sort((function(e,t){return e.coins>t.coins?1:e.coins<t.coins?-1:0})),c(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(){var e=sessionStorage.getItem("currentUser"),t=JSON.parse(localStorage.getItem(e));E(e),O(t)}(),a||e()}),[i]);return r.a.createElement("div",{className:"page page--bookmarks"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 title-page"},r.a.createElement("h1",null,"Rewards ",b?r.a.createElement("small",null,"(Coins: ",b.coins,")"):"")),r.a.createElement("div",{className:"col-12 col-md-12"},r.a.createElement(U,{rewards:a,user:b,saveRewardToAccount:function(e){var t=Object(R.a)(Object(R.a)({},e),{},{code:Object(W.a)()});b.rewards.push(t),b.coins-=t.coins,localStorage.setItem(v,JSON.stringify(b)),o(!0)}})))))},L=function(){return r.a.createElement("div",{className:"page page--contact"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 title-page"},r.a.createElement("h1",null,"Contact")),r.a.createElement("div",{className:"col-12 col-md-12"},r.a.createElement("h2",{className:"detail"},"Heeft u een vraag voor ons? Contacteer ons via dit formulier!"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Naam",required:!0}),r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"E-mail",required:!0}),r.a.createElement("input",{type:"text",name:"subject",id:"subject",placeholder:"Onderwerp",required:!0}),r.a.createElement("textarea",{name:"message",id:"message",placeholder:"Bericht",required:!0}),r.a.createElement("input",{type:"submit",className:"cta cta--detail",value:"Verzenden"}))))))},H=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(d.a)(l,2),o=i[0],p=i[1],f=Object(n.useState)(!1),v=Object(d.a)(f,2),E=v[0],g=v[1],N=Object(n.useState)(null),b=Object(d.a)(N,2),O=b[0],h=b[1],j=_().getProducts;Object(n.useEffect)((function(){g(!1);var e=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],a=sessionStorage.getItem("currentUser"),null===(n=JSON.parse(localStorage.getItem(a)))){e.next=9;break}return e.next=6,j();case 6:e.sent.forEach((function(e){n.products.includes(e.id)&&t.push(e)})),c(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(){var e=sessionStorage.getItem("currentUser"),t=JSON.parse(localStorage.getItem(e));p(e),h(t)}(),e()}),[E]);return r.a.createElement("div",{className:"page page--profile"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},O?r.a.createElement("div",{className:"col-12 col-md-12"},r.a.createElement("div",{className:"d-flex align-items-center justify-content-between flex-wrap"},r.a.createElement("h1",null,o," ",r.a.createElement("small",null,"(Coins: ",O.coins,")")),r.a.createElement("button",{className:"cta",onClick:function(e){return h(null),void sessionStorage.removeItem("currentUser")}},"Log uit")),r.a.createElement("h2",{className:"detail"},"Producten"),r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap"},a&&a.length>0?a.map((function(e){return r.a.createElement("div",{key:e.id,className:"card"},r.a.createElement("div",{className:"card__image"},r.a.createElement("img",{src:e.thumbnail})),r.a.createElement("div",{className:"card__text"},r.a.createElement("div",null,r.a.createElement("h2",null,e.name)),r.a.createElement("button",{onClick:function(t){return function(e,t){e.preventDefault();var a=O.products.indexOf(t);O.products.splice(a,1),O.coins+=5,localStorage.setItem(o,JSON.stringify(O)),g(!0)}(t,e.id)},className:"cta little-x"},r.a.createElement("i",{className:"fas fa-times"}))))})):r.a.createElement("p",null,"Nog geen producten gereserveerd")),r.a.createElement("h2",{className:"detail"},"Rewards"),r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap"},O.rewards.length>0?O.rewards.map((function(e,t){return r.a.createElement("div",{key:t,className:"card"},r.a.createElement("div",{className:"card__image card__image--reward"},r.a.createElement("img",{src:e.image})),r.a.createElement("div",{className:"card__text"},r.a.createElement("div",null,r.a.createElement("h2",null,e.company),r.a.createElement("p",{className:"no-margin"},r.a.createElement("strong",null,e.discount,"% korting")),r.a.createElement("p",{className:"no-margin special"},e.code))))})):r.a.createElement("p",null,"Nog geen rewards gekocht"))):r.a.createElement("div",{className:"col-12 offset-md-2 col-md-8 profile"},r.a.createElement("h2",{className:"detail"},"Meld je aan of log in"),r.a.createElement("div",{className:""},r.a.createElement(s.b,{to:"/profiel/aanmelden",className:"cta cta--detail"},"Aanmelden"),r.a.createElement(s.b,{to:"/profiel/inloggen",className:"cta cta--detail"},"Inloggen"))))))},J=function(e){e.children;var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(null),o=Object(d.a)(s,2),p=o[0],f=o[1],v=Object(n.useState)(""),E=Object(d.a)(v,2),g=E[0],N=E[1],b=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),null!==(a=localStorage.getItem(c))?(f(a),sessionStorage.setItem("currentUser",c)):N("Deze gebruiker bestaat niet.");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(t.target.value);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page page--profile"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center profile"},r.a.createElement("div",{className:"col-12 offset-md-2 col-md-8"},r.a.createElement("h2",{className:"detail"},"Geef je gebruikers-id in"),r.a.createElement("form",{onSubmit:function(e){return b(e)}},r.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Voer jouw gebruikers-id in",value:c,onChange:function(e){return O(e)},required:!0}),""!==g?r.a.createElement("small",null,"Deze gebruiker bestaat niet."):"",r.a.createElement("input",{type:"submit",className:"cta cta--detail",value:"Verzenden"})),p?r.a.createElement(i.a,{to:"/profiel"}):""))))},B=function(e){e.children;var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),o=Object(d.a)(i,2),p=o[0],f=o[1],v=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=Object(W.a)(),n=a.substring(0,a.indexOf("-")),r="".concat(c,"-").concat(n),l={id:a,name:c,products:[],rewards:[],coins:5},f("".concat(c,"-").concat(n)),localStorage.setItem(r,JSON.stringify(l)),sessionStorage.setItem("currentUser",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(t.target.value);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page page--profile"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center profile"},r.a.createElement("div",{className:"col-12 offset-md-2 col-md-8"},""===p?r.a.createElement("div",null,r.a.createElement("h2",{className:"detail"},"Geef je naam in"),r.a.createElement("form",{onSubmit:function(e){return v(e)}},r.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Voer jouw naam in",value:c,onChange:function(e){return E(e)},required:!0}),r.a.createElement("input",{type:"submit",className:"cta cta--detail",value:"Verzenden"}))):r.a.createElement("div",null,r.a.createElement("h2",null,"Uw gebruikersId is: ",r.a.createElement("strong",{className:"accent"},p),".",r.a.createElement("br",null),"Deze gebruikt u om in te loggen."),r.a.createElement(s.b,{to:"/profiel",className:"cta cta--detail"},"Ga terug naar profiel"))))))};a(46);var V=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(N,null,r.a.createElement(O,null,r.a.createElement(j,null,r.a.createElement(s.a,{basename:"/xchange/"},r.a.createElement(i.d,null,r.a.createElement(w,{exact:!0,path:"/",layout:C,component:I}),r.a.createElement(w,{exact:!0,path:"/producten",layout:C,component:P}),r.a.createElement(w,{exact:!0,path:"/producten/:id",layout:C,component:A}),r.a.createElement(w,{exact:!0,path:"/rewards",layout:C,component:K}),r.a.createElement(w,{exact:!0,path:"/contact",layout:C,component:L}),r.a.createElement(w,{exact:!0,path:"/profiel",layout:C,component:H}),r.a.createElement(w,{exact:!0,path:"/profiel/aanmelden",layout:C,component:B}),r.a.createElement(w,{exact:!0,path:"/profiel/inloggen",layout:C,component:J})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47),a(48);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.293e9a59.chunk.js.map