(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),i=a.n(l),c=(a(30),a(9)),o=a(10),u=a(12),m=a(11),s=a(13),p=(a(31),a(2)),d=a(6),E=(a(32),a(14)),h=a.n(E),f=a(21),g=a.n(f),v=a(22),b=a.n(v),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.e,null,r.a.createElement(d.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}}),r.a.createElement(d.c,{path:"/products",render:function(){return r.a.createElement("img",{src:g.a,alt:"city"})}}),r.a.createElement(d.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:b.a,alt:"city"})}}),r.a.createElement(d.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}}),r.a.createElement(d.c,{render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}})))},x=(a(38),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),j=function(){var e=x.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(p.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},k=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:16}},n))},w=[{id:1,title:"Czym jest teoria strun",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:2,title:"Czym jest paradoks Fermiego",author:"Elo elo",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:3,title:"Ciemna Materia i ciemna energia",author:"Ania Kwiatkowska",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:4,title:"Oraz nie wiem, co to za tytu\u0142",author:"Jan Kowalski",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}],q=function(){var e=w.map(function(e){return r.a.createElement(k,Object.assign({key:e.id},e))});return r.a.createElement("div",{className:"home"},e)},z=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id)))},O=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(z,{id:t.params.id}),r.a.createElement(p.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},J=(a(39),["car","bike","motorcycle"]),N=function(){var e=J.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(p.b,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("div",null,r.a.createElement("h2",null,"Lista produtk\xf3w"),r.a.createElement("ul",null,e)))},S=(a(40),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isEmpty:!0},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a.handleChange=function(e){var t=e.target.value;t.length>0?a.setState({value:t,isEmpty:!1}):a.setState({isEmpty:!0})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas!"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107..."}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(d.a,{when:!this.state.isEmpty,message:"Masz nie wype\u0142niony formularz. Czy napewno chcesz opu\u015bci\u0107 t\u0119 stron\u0119?"}))}}]),t}(n.Component)),C=function(){return r.a.createElement(d.c,{render:function(){return r.a.createElement("h3",null,"Panel Admina - dzie\u0144 dobry")}})},F=function(){return r.a.createElement("div",null,"Nie ma takiej strony")},P=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj login:",r.a.createElement("input",{type:"text"})),r.a.createElement("label",null,"Podaj has\u0142o:",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj"))},D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.e,null,r.a.createElement(d.c,{path:"/",exact:!0,component:q}),r.a.createElement(d.c,{path:"/products",component:N}),r.a.createElement(d.c,{path:"/product/:id",component:O}),r.a.createElement(d.c,{path:"/contact",component:S}),r.a.createElement(d.c,{path:"/admin",component:C}),r.a.createElement(d.c,{path:"/login",component:P}),r.a.createElement(d.c,{component:F})))},L=(a(41),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("h2",null,"Stopka"),r.a.createElement(d.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(d.c,{path:"/:page",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}),r.a.createElement(d.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.idProduct)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}))}),U=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(y,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(j,null)),r.a.createElement("section",{className:"page"},r.a.createElement(D,null))),r.a.createElement("footer",null,r.a.createElement(L,null))))}}]),t}(n.Component);i.a.render(r.a.createElement(U,null),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.e4666a14.chunk.js.map