(window["webpackJsonppokedex-last"]=window["webpackJsonppokedex-last"]||[]).push([[0],{147:function(e,t,n){e.exports=n(254)},170:function(e,t,n){},226:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(7),r=n.n(s),i=n(19),c=(n(152),n(23)),l=n.n(c),m=n(43),k=n(136),p=n(137),u=n(11),h=n(56),d=n.n(h),f=function(){function e(){Object(k.a)(this,e),this.pagePokemons=[],this.countPokemons=null,this.isPokemonsLoading=null==this.countPokemons,this.countShowedPokemons=10,this.clickedPage=1,this.allPokemons=[],this.pokemons=null,this.types=[],this.clickedPokemonInfo=null,this.visibilityOn="visible",this.filtredPokemons=[]}return Object(p.a)(e,[{key:"getPokemons",value:function(){var e=Object(m.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.countPokemons=null,e.next=3,d.a.get("https://pokeapi.co/api/v2/pokemon/?offset=".concat((this.clickedPage-1)*this.countShowedPokemons,"&limit=").concat(this.countShowedPokemons,"/"));case 3:t=e.sent,this.pagePokemons=t.data.results,this.countPokemons=807,this.isPokemonsLoading=!1;case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPokemonsNamesandTypes",value:function(){var e=Object(m.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.countPokemons=null,this.isPokemonsLoading=!0,e.next=4,d.a.get("https://pokeapi.co/api/v2/pokemon/?limit=807/");case 4:return t=e.sent,this.allPokemons=t.data.results,e.next=8,d.a.get("https://pokeapi.co/api/v2/type/");case 8:n=e.sent,this.types=n.data.results,this.countPokemons=807,this.isPokemonsLoading=!1;case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"changePokemons",value:function(){this.countPokemons=null;var e=(this.clickedPage-1)*this.countShowedPokemons;this.pagePokemons=this.pokemons.slice(e,e+this.countShowedPokemons),this.countPokemons=this.pokemons.length,this.isPokemonsLoading=!1}},{key:"getPokemonByID",value:function(){var e=Object(m.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.isPokemonsLoading=!0,e.next=3,d.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 3:n=e.sent,this.clickedPokemonInfo=n.data,this.isPokemonsLoading=!1;case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getMyChose",value:function(){var e=Object(m.a)(l.a.mark(function e(t){var n,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.isPokemonsLoading=!0,n=0;case 2:if(!(n<t.length)){e.next=11;break}return e.next=5,d.a.get("https://pokeapi.co/api/v2/type/".concat(t[n].toLowerCase(),"/"));case 5:o=e.sent,console.log(o),0===n?(this.pokemons=null,this.pokemons=o.data.pokemon):this.pokemons.concat(o.data.pokemon);case 8:n++,e.next=2;break;case 11:console.log(this.pokemons),this.pokemons=this.pokemons.map(function(e){return{name:e.pokemon.name,url:e.pokemon.url}}),this.filtredPokemons=this.pokemons,console.log(this.pokemons),this.pagePokemons=this.pokemons.slice(0,this.countShowedPokemons),this.countPokemons=this.pokemons.length,this.isPokemonsLoading=!1;case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}();Object(u.h)(f,{pagePokemons:u.m,isPokemonsLoading:u.m,clickedPage:u.m,countPokemons:u.m,countShowedPokemons:u.m,allPokemons:u.m,types:u.m,clickedPokemonInfo:u.m,visibilityOn:u.m,filtredPokemons:u.m,getPokemons:u.d,getPokemonsNamesandTypes:u.d});var g=new f;g.getPokemons(),g.getPokemonsNamesandTypes();var P=g,S=n(263),y=n(255),b=n(264),E=n(40),v=n(42),w=n(100),I=n(108),O=n(258),x=n(261),j=n(57),C=n(83),L=n(260),z=n(262),_=(n(170),S.a.Header),F=O.a.Title,D=x.a.Search,N=Object(i.b)("Store")(Object(i.c)(function(e){var t,n=Object(o.useState)(!1),s=Object(I.a)(n,2),r=s[0],i=s[1],c=Object(o.useState)([]),k=Object(I.a)(c,2),p=k[0],u=k[1];function h(){return(h=Object(m.a)(l.a.mark(function t(){var n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.Store.allPokemons),t.next=3,e.Store.allPokemons;case 3:return n=t.sent,t.next=6,n.sort(function(e,t){return e.name>t.name?1:e.name===t.name?0:-1});case 6:e.Store.pokemons=t.sent,e.Store.pagePokemons=e.Store.pokemons.slice(0,e.Store.countShowedPokemons);case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}function d(){return(d=Object(m.a)(l.a.mark(function t(){var n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.Store.allPokemons;case 2:n=t.sent,e.Store.pokemons=n,e.Store.pagePokemons=e.Store.pokemons.slice(0,e.Store.countShowedPokemons);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}return a.a.createElement(_,{key:"header"},a.a.createElement(j.a,{type:"flex",justify:"space-between",align:"middle"},a.a.createElement(F,null,a.a.createElement(E.b,{to:"/pokedex-last/",onClick:function(){return e.Store.visibilityOn="visible"}}," Pokemonchiki ")),a.a.createElement("div",{className:"searchField",style:{visibility:e.Store.visibilityOn}},a.a.createElement(D,{placeholder:"Input name of pokemon",onChange:function(t){0!==t.target.value.length?(e.Store.pokemons=(null===e.pokemons?e.Store.allPokemons:e.Store.filtredPokemons).filter(function(e){return e.name.indexOf(t.target.value)>=0}),e.Store.pagePokemons=e.Store.pokemons.slice(0,e.Store.countShowedPokemons),e.Store.countPokemons=e.Store.pokemons.length,console.log(t.target.value)):e.Store.pagePokemons=null===e.pokemons?e.Store.allPokemons.slice(0,e.Store.countShowedPokemons):e.Store.filtredPokemons.slice(0,e.Store.countShowedPokemons)}})),a.a.createElement("div",{style:{visibility:e.Store.visibilityOn}},a.a.createElement(C.a,{type:"primary",shape:"circle",icon:"filter",size:"large",onClick:function(){return i(!0)}}),a.a.createElement(C.a,{type:"primary",shape:"circle",icon:"sort-ascending",size:"large",onClick:function(){return h.apply(this,arguments)}}),a.a.createElement(C.a,{type:"primary",shape:"circle",icon:"rollback",size:"large",onClick:function(){return d.apply(this,arguments)}}))),a.a.createElement(L.a,(t={height:"50vh",key:"drawer",title:"Filter",placement:"right",closable:!1,onClose:function(){return i(!1)},visible:r},Object(w.a)(t,"closable",!1),Object(w.a)(t,"style",{position:"absolute"}),t),a.a.createElement("p",null,"Chose types of pokemons: "),a.a.createElement("div",{className:"types"},a.a.createElement(z.a.Group,{options:["Normal","Fire","Water","Grass","Electric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dark","Dragon","Steel","Fairy"],onChange:function(e){return u(e)},value:p})),a.a.createElement(C.a,{type:"primary",size:"large",style:{marginRight:30},onClick:function(){e.Store.getMyChose(p),i(!1)}},"Search"),a.a.createElement(C.a,{type:"primary",size:"large",onClick:function(){return i(!1)}},"Cancel")))})),B=n(257),A=(n(226),S.a.Footer),G=Object(i.b)("Store")(Object(i.c)(function(e){return a.a.createElement(A,{key:"pagination"},a.a.createElement(B.a,{showSizeChanger:!0,onShowSizeChange:function(t,n){e.Store.countShowedPokemons=n,null===e.Store.pokemons?e.Store.getPokemons():e.Store.changePokemons()},pageSizeOptions:["10","20","50"],defaultCurrent:e.Store.clickedPage,total:e.Store.countPokemons,onChange:function(t){e.Store.clickedPage=t,null===e.Store.pokemons?e.Store.getPokemons():e.Store.changePokemons()},style:{visibility:e.Store.visibilityOn}}))})),H=n(30),T=n(256),M=n(80),R=n.n(M),J=Object(i.b)("Store")(Object(i.c)(function(e){var t=e.pokemon.url.slice(34,-1);return a.a.createElement("div",null,t?a.a.createElement(E.b,{to:"/pokemon"},a.a.createElement(T.a,{onClick:function(){e.Store.getPokemonByID(t),e.Store.visibilityOn="hidden"},key:e.pokemon.name,title:"#"+t+" "+(e.pokemon.name.charAt(0).toUpperCase()+e.pokemon.name.slice(1)),style:{width:250,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},a.a.createElement(R.a,{alt:"",key:e.pokemon.name,src:"https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(t,".png?raw=true"),loader:a.a.createElement(y.a,{size:"large",style:{width:180,height:180}}),unloader:a.a.createElement("img",{src:"../images/noimageavailable.png",alt:"",style:{width:180,height:180}}),style:{width:180,height:180}}))):"")})),U=Object(i.b)("Store")(Object(i.c)(function(e){return a.a.createElement(j.a,{type:"flex",justify:"center",align:"middle"},e.Store.pagePokemons.map(function(e){return a.a.createElement(H.a,{key:e.name},a.a.createElement(J,{pokemon:e}))}))})),W=n(259),q=Object(i.b)("Store")(Object(i.c)(function(e){console.log(e.Store.clickedPokemonInfo);return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},a.a.createElement(E.b,{to:"/"},a.a.createElement(C.a,{type:"primary",size:"large",style:{margin:"auto",marginBottom:20},onClick:function(){return e.Store.visibilityOn="visible"}},"<<-- Back")),e.Store.clickedPokemonInfo?a.a.createElement("div",{style:{width:"90%"}},a.a.createElement(T.a,{key:e.Store.clickedPokemonInfo.forms[0].name,title:e.Store.clickedPokemonInfo.forms[0].name.charAt(0).toUpperCase()+e.Store.clickedPokemonInfo.forms[0].name.slice(1),style:{marginRight:"10vw",marginLeft:"10vw",fontFamily:"Comic Sans MS"}},a.a.createElement(R.a,{alt:"",src:"https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(e.Store.clickedPokemonInfo.id,".png?raw=true"),loader:a.a.createElement(y.a,{size:"large",style:{width:180,height:180}}),unloader:a.a.createElement(y.a,{size:"large",style:{width:180,height:180}}),style:{width:"30%",marginLeft:"35%"}}),a.a.createElement("div",null,a.a.createElement("p",null,"Height: ",e.Store.clickedPokemonInfo.height),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.height/55*100,showInfo:!1}),a.a.createElement("p",null,"Base experience: ",e.Store.clickedPokemonInfo.base_experience),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.base_experience/281*100,showInfo:!1}),a.a.createElement("p",null,"Speed: ",e.Store.clickedPokemonInfo.stats[0].base_stat),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.stats[0].base_stat/180*100,showInfo:!1}),a.a.createElement("p",null,"Special deffence: ",e.Store.clickedPokemonInfo.stats[1].base_stat),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.stats[1].base_stat/230*100,showInfo:!1}),a.a.createElement("p",null,"Special attack: ",e.Store.clickedPokemonInfo.stats[2].base_stat),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.stats[2].base_stat/180*100,showInfo:!1}),a.a.createElement("p",null,"Deffence: ",e.Store.clickedPokemonInfo.stats[3].base_stat),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.stats[3].base_stat/230*100,showInfo:!1}),a.a.createElement("p",null,"Attack: ",e.Store.clickedPokemonInfo.stats[4].base_stat),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.stats[4].base_stat/181*100,showInfo:!1}),a.a.createElement("p",null,"HP: ",e.Store.clickedPokemonInfo.stats[5].base_stat),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.stats[5].base_stat/255*100,showInfo:!1}),a.a.createElement("p",null,"Weight: ",e.Store.clickedPokemonInfo.weight),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.weight/9999*100,showInfo:!1})))):a.a.createElement(y.a,{size:"large",style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}))})),K=(n(253),Object(i.b)("Store")(Object(i.c)(function(e){return a.a.createElement(E.a,null,a.a.createElement(S.a,null,a.a.createElement(S.a.Header,{className:"headerElement"},a.a.createElement(N,null)),a.a.createElement(S.a.Content,null,e.Store.isPokemonsLoading?a.a.createElement(y.a,{tip:"Loading...",size:"large",key:"spinner"},a.a.createElement(b.a,{message:"Pokemons are loading",type:"info"})):a.a.createElement("div",null,a.a.createElement(v.a,{exact:!0,path:"/pokedex-last/",component:U}),a.a.createElement(v.a,{exact:!0,path:"/pokemon/",component:q}))),a.a.createElement(S.a.Footer,{className:"pagination"},a.a.createElement(G,null))))}))),Q={Store:P};r.a.render(a.a.createElement(i.a,Q,a.a.createElement(K,null)),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.a475b618.chunk.js.map