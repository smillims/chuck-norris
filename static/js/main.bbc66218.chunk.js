(this.webpackJsonpcitation=this.webpackJsonpcitation||[]).push([[0],[,,,,function(e,t,c){e.exports={advice:"ShowAdvice_advice__3DTJ6"}},,function(e,t,c){e.exports={categories:"Categories_categories__2UvFT",status:"Categories_status__3H3Wk"}},,function(e,t,c){e.exports={header:"Header_header__1Jvrl",headerH2:"Header_headerH2__-sf1H"}},,function(e,t,c){e.exports={categoriesLists:"CategoriesLists_categoriesLists__4TcTN"}},,,,,,,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),s=c(9),n=c.n(s),i=c(2),o=c(11),j=c(10),u=c.n(j),d=c(0);var l=function(e){var t=e.categories,c=e.clickedCategories,a=e.setClickedCategories;return Object(d.jsxs)("ul",{className:u.a.categoriesLists,onClick:function(e){"UL"!==e.target.tagName&&a([].concat(Object(o.a)(c),[e.target.textContent]))},children:[t.map((function(e){return Object(d.jsx)("li",{children:e},e)})),Object(d.jsx)("li",{children:"random"})]})};var h=function(e){return"random"===e?"https://api.chucknorris.io/jokes/random":"https://api.chucknorris.io/jokes/random?category=".concat(e)},b=c(4),g=c.n(b);var O=function(e){var t=e.clickedCategories,c=Object(a.useState)(""),r=Object(i.a)(c,2),s=r[0],n=r[1],o=Object(a.useState)(null),j=Object(i.a)(o,2),u=j[0],l=j[1],b=Object(a.useState)(!1),O=Object(i.a)(b,2),f=O[0],x=O[1],v=t[t.length-1];return Object(a.useEffect)((function(){x(!0),0!==t.length&&fetch(h(v)).then((function(e){return e.json()})).then((function(e){var t=e.status,c=e.message;if("200"!==t&&c)throw Error(c);l(null),n(e.value)})).catch(l).finally((function(){return x(!1)}))}),[t]),s?u?Object(d.jsx)("p",{className:g.a.advice,children:"object"===typeof u?u.toString():u}):f?Object(d.jsx)("p",{className:g.a.advice,children:"Loading..."}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("p",{className:g.a.advice,children:s})}):Object(d.jsx)("p",{className:g.a.advice,children:"Please choose your advice from Mr. Chuck's!"})},f=c(6),x=c.n(f);var v=function(e){var t=e.categories,c=e.clickedCategories,a=e.setClickedCategories,r=e.dataLoading,s=e.error;return s?Object(d.jsx)("p",{className:x.a.status,children:"object"===typeof s?s.toString():s}):r?Object(d.jsx)("p",{className:x.a.status,children:"Loading..."}):Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:x.a.categories,children:[Object(d.jsx)("h2",{children:"Categories"}),Object(d.jsx)(l,{categories:t,clickedCategories:c,setClickedCategories:a}),Object(d.jsx)(O,{clickedCategories:c})]})})},m=c(8),p=c.n(m);var k=function(){return Object(d.jsx)("header",{className:p.a.header,children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("h2",{className:p.a.headerH2,children:"Chuck Norris"})})})};c(17);var C=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(null),n=Object(i.a)(s,2),o=n[0],j=n[1],u=Object(a.useState)(!1),l=Object(i.a)(u,2),h=l[0],b=l[1],g=Object(a.useState)([]),O=Object(i.a)(g,2),f=O[0],x=O[1];return Object(a.useEffect)((function(){b(!0),fetch("https://api.chucknorris.io/jokes/categories").then((function(e){return e.json()})).then((function(e){var t=e.status,c=e.message,a=e.error;if("200"!==t&&c)throw Error(a);j(null),r(e)})).catch(j).finally((function(){return b(!1)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,{}),Object(d.jsx)(v,{categories:c,clickedCategories:f,setClickedCategories:x,dataLoading:h,error:o})]})};n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.bbc66218.chunk.js.map