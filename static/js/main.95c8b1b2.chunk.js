(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=(n(22),n(23),n(2)),l=n(3),s=n(4),u=n(0),m=n(13),d=n(5);function f(){var e=Object(l.a)(["\n    display: block;\n    margin-bottom: 1rem;\n"]);return f=function(){return e},e}var b=s.a.div(f()),p="",h=function(e){var t=e.setSelectedCb,n=Object(a.useState)([]),c=Object(o.a)(n,2),i=c[0],l=c[1],s=Object(a.useState)([""]),u=Object(o.a)(s,2),m=u[0],f=u[1];return Object(a.useEffect)(function(){fetch("https://www.thecocktaildb.com/api/json/v2/8673533/list.php?i=list").then(function(e){return e.json()}).then(function(e){return e.drinks.map(function(e){return e.strIngredient1}).sort(function(e,t){return e.localeCompare(t)})}).then(function(e){l([p].concat(Object(d.a)(e)))})},[]),Object(a.useEffect)(function(){t(m)},[m]),r.a.createElement(a.Fragment,null,r.a.createElement("h1",{className:"mb-6 text-2xl border-b-2 border-gray-600 "},"Ingredients"),i.length>0&&m.map(function(e,t){return r.a.createElement(g,{options:i,key:t,index:t,deleteCb:function(e){f([].concat(Object(d.a)(m.slice(0,e)),Object(d.a)(m.slice(e+1))))},selected:e,updatedrinkCb:function(e,t){var n=m.slice();n[t]=e,f(n)}})}),r.a.createElement("button",{className:"mt-6 block mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",onClick:function(){f(m.concat(""))}},"Add another ingredient!"))},g=function(e){var t=e.options,n=e.index,a=e.deleteCb,c=e.updatedrinkCb,i=e.selected;return r.a.createElement(b,null,r.a.createElement("select",{onChange:function(e){return c(e.target.value,n)},value:i,className:"border border-blue-800"},t.map(function(e,t){return r.a.createElement("option",{className:"bg-gray-600",value:e,key:t},e)})),r.a.createElement("button",{className:"mt-6 bg-red-500 text-white px-2 ml-6 border border-red-600 rounded",onClick:function(){return a(n)}},"Delete"))},v=function(e){var t=e.name,n=e.img,a=e.id,c=e.selectDrink;return r.a.createElement("div",{className:"w-1/6 mb-4 p-2 lg:p-6 cursor-pointer",onClick:function(){window.scrollTo(0,0),c(a)}},r.a.createElement("img",{className:"rounded",src:n,alt:"some drink!"}),r.a.createElement("p",{className:"mt-3 text-xs md:text-lg"},t))},k=function(e){var t=e.matchingDrinks,n=e.selectDrink,c=Object(a.useState)(),i=Object(o.a)(c,2),l=i[0],s=i[1];return Object(a.useEffect)(function(){s(t)},[t]),"undefined"===typeof l?r.a.createElement("p",{className:"mt-6"},"loading... ",r.a.createElement("span",{role:"img","aria-label":"hawt drink"},"\ud83c\udf78")):"None Found"===l.drinks?r.a.createElement("p",{className:"mt-6"},"none found ",r.a.createElement("span",{role:"img","aria-label":"sad face"},"\ufe0f\ud83d\ude26")):r.a.createElement("div",{className:"flex flex-wrap -mb-4"},t.length>0&&t.map(function(e,t){return r.a.createElement(v,{name:e.name,img:e.img,id:e.id,key:t,selectDrink:n})}))};function E(){var e=Object(l.a)(["\n    width: 60%;\n    @media (min-width: 768px) {\n      width: 30%;\n    }\n"]);return E=function(){return e},e}var x=s.a.div(E()),w=function(e){var t=e.selectedDrink;return null===t?null:r.a.createElement("div",{className:"flex"},r.a.createElement(x,{className:"mr-6"},r.a.createElement("img",{className:"mb-6 rounded",style:{maxWidth:"100%"},src:t.strDrinkThumb,alt:""})),r.a.createElement("div",{className:"flex-grow"},r.a.createElement("h2",{className:"text-xl md:text-4xl font-semibold"},t.strDrink),function(e){for(var t=[],n=1;n<=15&&""!==e["".concat("strIngredient").concat(n)];n++){var a=e["".concat("strMeasure").concat(n)],c=e["".concat("strIngredient").concat(n)];t.push("".concat(a," \u2014 ").concat(c))}return r.a.createElement("ul",{className:"my-6"},t.map(function(e,t){return r.a.createElement("li",{key:t},e)}))}(t),r.a.createElement("p",{className:"text-base md:text-2xl"},t.strInstructions)))};n(29);function j(){var e=Object(l.a)(["\n  // text-align: center;\n  // background-color: red;\n"]);return j=function(){return e},e}var N="https://www.thecocktaildb.com/api/json/v2/8673533",O=s.a.div(j());var y=function(){var e=Object(a.useState)([""]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(null),l=Object(o.a)(i,2),s=l[0],d=l[1],f=Object(a.useState)([]),b=Object(o.a)(f,2),p=b[0],g=b[1];return Object(a.useEffect)(function(){var e,t,a;t=n,a=function(e){g(e)},fetch("".concat(N,"/filter.php?i=").concat((e=t,1===e.length&&""===e[0]?"":e.filter(function(t,n){return e.indexOf(t)===n&&""!==t}).map(function(e){return e.replace(/ /g,"_")}).join(",")))).then(function(e){return e.json()}).then(function(e){Array.isArray(e.drinks)?a(e.drinks.map(function(e){return{name:e.strDrink,img:e.strDrinkThumb,id:e.idDrink}})):a(e)})},[n]),r.a.createElement(a.Fragment,null,r.a.createElement("nav",{className:"flex items-center justify-between flex-wrap color-bg-blue p-2"},r.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},r.a.createElement("div",{className:"pr-2"},r.a.createElement(u.b.Provider,{value:{className:"pr-3 text-4xl"}},r.a.createElement("div",null,r.a.createElement(m.a,null)))),r.a.createElement("span",{className:"font-semibold text-xl tracking-tight inline-block align-baseline"},"Schorr Should Drink")),r.a.createElement("div",null,r.a.createElement("button",{className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",onClick:function(){return e=function(e){var t=e.drinks[0];d(t)},void fetch("".concat(N,"/random.php")).then(function(e){return e.json()}).then(e);var e}},"Surprise me ",r.a.createElement("span",{"aria-label":"sparkles, yo",role:"img"},"\u2728")))),r.a.createElement(O,{className:"container mx-auto pt-6 px-2"},r.a.createElement(w,{selectedDrink:s}),r.a.createElement(h,{setSelectedCb:function(e){c(e)}}),r.a.createElement(k,{matchingDrinks:p,selectDrink:function(e){return function(e,t){fetch("".concat(N,"/lookup.php?i=").concat(e)).then(function(e){return e.json()}).then(function(e){var n=e.drinks[0];t(n)})}(e,d)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),console.log("lets drink \ud83c\udf78\ud83c\udf79\ud83d\udc4b\ud83d\ude0e")}},[[16,1,2]]]);
//# sourceMappingURL=main.95c8b1b2.chunk.js.map