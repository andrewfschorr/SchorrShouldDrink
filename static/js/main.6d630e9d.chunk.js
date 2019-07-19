(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),i=(n(22),n(23),n(2)),l=n(3),s=n(4),u=n(0),m=n(13),d=n(5);function f(){var e=Object(l.a)(["\n    display: block;\n    margin-bottom: 1rem;\n"]);return f=function(){return e},e}var b=s.a.div(f()),p="",h=function(e){var t=e.setSelectedCb,n=Object(a.useState)([]),c=Object(i.a)(n,2),o=c[0],l=c[1],s=Object(a.useState)([""]),u=Object(i.a)(s,2),m=u[0],f=u[1];return Object(a.useEffect)(function(){fetch("https://www.thecocktaildb.com/api/json/v2/8673533/list.php?i=list").then(function(e){return e.json()}).then(function(e){return e.drinks.map(function(e){return e.strIngredient1}).sort(function(e,t){return e.localeCompare(t)})}).then(function(e){l([p].concat(Object(d.a)(e)))})},[]),Object(a.useEffect)(function(){t(m)},[m]),r.a.createElement(a.Fragment,null,r.a.createElement("h1",{className:"mb-6 text-2xl border-b-2 border-gray-600 "},"Ingredients"),o.length>0&&m.map(function(e,t){return r.a.createElement(k,{options:o,key:t,index:t,deleteCb:function(e){f([].concat(Object(d.a)(m.slice(0,e)),Object(d.a)(m.slice(e+1))))},selected:e,updatedrinkCb:function(e,t){var n=m.slice();n[t]=e,f(n)}})}),r.a.createElement("button",{className:"mt-6 block mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",onClick:function(){f(m.concat(""))}},"Add another ingredient!"))},k=function(e){var t=e.options,n=e.index,a=e.deleteCb,c=e.updatedrinkCb,o=e.selected;return r.a.createElement(b,null,r.a.createElement("select",{onChange:function(e){return c(e.target.value,n)},value:o},t.map(function(e,t){return r.a.createElement("option",{className:"bg-gray-600",value:e,key:t},e)})),r.a.createElement("button",{className:"mt-6 bg-red-500 text-white px-2 ml-6 border border-red-600 rounded",onClick:function(){return a(n)}},"Delete"))},v=function(e){var t=e.name,n=e.img,a=e.id,c=e.selectDrink;return r.a.createElement("div",{className:"w-1/6 mb-4 p-6 cursor-pointer",onClick:function(){window.scrollTo(0,0),c(a)}},r.a.createElement("img",{className:"rounded",src:n}),r.a.createElement("p",{className:"mt-3"},t))},g=function(e){var t=e.matchingDrinks,n=e.selectDrink,c=Object(a.useState)(),o=Object(i.a)(c,2),l=o[0],s=o[1];return Object(a.useEffect)(function(){s(t)},[t]),"undefined"===typeof l?r.a.createElement("p",{className:"mt-6"},"loading... \ud83c\udf78"):"None Found"===l.drinks?r.a.createElement("p",{className:"mt-6"},"none found \u2639\ufe0f"):r.a.createElement("div",{className:"flex flex-wrap -mb-4"},t.length>0&&t.map(function(e,t){return r.a.createElement(v,{name:e.name,img:e.img,id:e.id,key:t,selectDrink:n})}))},E=function(e){var t=e.selectedDrink;return null===t?null:r.a.createElement("div",{className:"flex"},r.a.createElement("img",{className:"mb-6 mr-6 rounded",style:{width:"20%"},src:t.strDrinkThumb,alt:""}),r.a.createElement("div",{className:"flex-grow"},r.a.createElement("h2",{className:"text-4xl font-semibold"},t.strDrink),function(e){for(var t=[],n=1;n<=15&&""!==e["".concat("strIngredient").concat(n)];n++){var a=e["".concat("strMeasure").concat(n)],c=e["".concat("strIngredient").concat(n)];t.push("".concat(a," \u2014 ").concat(c))}return r.a.createElement("ul",{className:"my-6"},t.map(function(e,t){return r.a.createElement("li",{key:t},e)}))}(t),r.a.createElement("p",{className:"text-2xl"},t.strInstructions)))};n(29);function x(){var e=Object(l.a)(["\n  // text-align: center;\n  // background-color: red;\n"]);return x=function(){return e},e}var w="https://www.thecocktaildb.com/api/json/v2/8673533",j=s.a.div(x());var N=function(){var e=Object(a.useState)([""]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),l=Object(i.a)(o,2),s=l[0],d=l[1],f=Object(a.useState)([]),b=Object(i.a)(f,2),p=b[0],k=b[1];return Object(a.useEffect)(function(){var e,t,a;t=n,a=function(e){k(e)},fetch("".concat(w,"/filter.php?i=").concat((e=t,1===e.length&&""===e[0]?"":e.filter(function(t,n){return e.indexOf(t)===n&&""!==t}).map(function(e){return e.replace(/ /g,"_")}).join(",")))).then(function(e){return e.json()}).then(function(e){Array.isArray(e.drinks)?a(e.drinks.map(function(e){return{name:e.strDrink,img:e.strDrinkThumb,id:e.idDrink}})):a(e)})},[n]),r.a.createElement(a.Fragment,null,r.a.createElement("nav",{className:"flex items-center justify-between flex-wrap color-bg-blue p-2"},r.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},r.a.createElement("div",{className:"pr-2"},r.a.createElement(u.b.Provider,{value:{className:"pr-3 text-4xl"}},r.a.createElement("div",null,r.a.createElement(m.a,null)))),r.a.createElement("span",{className:"font-semibold text-xl tracking-tight inline-block align-baseline"},"Schorr Should Drink")),r.a.createElement("div",null,r.a.createElement("button",{className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",onClick:function(){return e=function(e){var t=e.drinks[0];d(t)},void fetch("".concat(w,"/random.php")).then(function(e){return e.json()}).then(e);var e}},"Surprise me ",r.a.createElement("span",{"aria-label":"sparkles, yo",role:"img"},"\u2728")))),r.a.createElement(j,{className:"container mx-auto pt-6"},r.a.createElement(E,{selectedDrink:s}),r.a.createElement(h,{setSelectedCb:function(e){c(e)}}),r.a.createElement(g,{matchingDrinks:p,selectDrink:function(e){return function(e,t){fetch("".concat(w,"/lookup.php?i=").concat(e)).then(function(e){return e.json()}).then(function(e){var n=e.drinks[0];t(n)})}(e,d)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),console.log("lets drink \ud83c\udf78\ud83c\udf79\ud83d\udc4b\ud83d\ude0e")}},[[16,1,2]]]);
//# sourceMappingURL=main.6d630e9d.chunk.js.map