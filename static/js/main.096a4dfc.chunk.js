(window["webpackJsonppokedex-last"]=window["webpackJsonppokedex-last"]||[]).push([[0],{147:function(e,t,o){e.exports=o(254)},170:function(e,t,o){},226:function(e,t,o){},253:function(e,t,o){},254:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),s=o(7),i=o.n(s),r=o(19),c=(o(152),o(26)),l=o.n(c),m=o(47),k=o(136),p=o(137),u=o(11),h=o(56),d=o.n(h),f=function(){function e(){Object(k.a)(this,e),this.pagePokemons=[],this.countPokemons=null,this.isPokemonsLoading=null==this.countPokemons,this.countShowedPokemons=10,this.clickedPage=1,this.allPokemons=[],this.pokemons=null,this.types=[],this.clickedPokemonInfo=null,this.visibilityOn=-1!==window.location.href.indexOf("pokedex-last")?"visible":"hiden",this.filtredPokemons=[]}return Object(p.a)(e,[{key:"getPokemons",value:function(){var e=Object(m.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.countPokemons=null,e.next=3,d.a.get("https://pokeapi.co/api/v2/pokemon/?offset=".concat((this.clickedPage-1)*this.countShowedPokemons,"&limit=").concat(this.countShowedPokemons,"/"));case 3:t=e.sent,this.pagePokemons=t.data.results,this.countPokemons=807,this.isPokemonsLoading=!1;case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPokemonsNamesandTypes",value:function(){var e=Object(m.a)(l.a.mark(function e(){var t,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.countPokemons=null,this.isPokemonsLoading=!0,e.next=4,d.a.get("https://pokeapi.co/api/v2/pokemon/?limit=807/");case 4:return t=e.sent,this.allPokemons=t.data.results,this.filtredPokemons=this.allPokemons,e.next=9,d.a.get("https://pokeapi.co/api/v2/type/");case 9:o=e.sent,this.types=o.data.results,this.countPokemons=807,this.isPokemonsLoading=!1;case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"changePokemons",value:function(){this.countPokemons=null;var e=(this.clickedPage-1)*this.countShowedPokemons;this.pagePokemons=this.pokemons.slice(e,e+this.countShowedPokemons),this.countPokemons=this.pokemons.length,this.visibilityOn=-1!==window.location.href.indexOf("pokedex-last")?"visible":"hiden",this.isPokemonsLoading=!1}},{key:"getPokemonByID",value:function(){var e=Object(m.a)(l.a.mark(function e(t){var o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.isPokemonsLoading=!0,e.next=3,d.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 3:o=e.sent,this.clickedPokemonInfo=o.data,this.isPokemonsLoading=!1;case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getMyChose",value:function(){var e=Object(m.a)(l.a.mark(function e(t){var o,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isPokemonsLoading=!0,0!==t.length){e.next=6;break}this.pokemons=this.allPokemons,this.filtredPokemons=this.pokemons,e.next=18;break;case 6:o=0;case 7:if(!(o<t.length)){e.next=16;break}return e.next=10,d.a.get("https://pokeapi.co/api/v2/type/".concat(t[o].toLowerCase(),"/"));case 10:n=e.sent,console.log(n),0===o?(this.pokemons=null,this.pokemons=n.data.pokemon):this.pokemons.concat(n.data.pokemon);case 13:o++,e.next=7;break;case 16:this.pokemons=this.pokemons.map(function(e){return{name:e.pokemon.name,url:e.pokemon.url}}),this.filtredPokemons=this.pokemons;case 18:this.pagePokemons=this.pokemons.slice(0,this.countShowedPokemons),this.countPokemons=this.pokemons.length,this.isPokemonsLoading=!1;case 21:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}();Object(u.h)(f,{pagePokemons:u.m,isPokemonsLoading:u.m,clickedPage:u.m,countPokemons:u.m,countShowedPokemons:u.m,allPokemons:u.m,types:u.m,clickedPokemonInfo:u.m,visibilityOn:u.m,filtredPokemons:u.m,getPokemons:u.d,getPokemonsNamesandTypes:u.d});var g=new f;g.getPokemons(),g.getPokemonsNamesandTypes();var P=g,S=o(263),y=o(255),b=o(264),E=o(40),w=o(42),v=o(100),I=o(108),x=o(258),O=o(261),j=o(57),C=o(83),L=o(260),z=o(262),_=(o(170),S.a.Header),F=x.a.Title,D=O.a.Search,N=Object(r.b)("Store")(Object(r.c)(function(e){var t,o=Object(n.useState)(!1),s=Object(I.a)(o,2),i=s[0],r=s[1],c=Object(n.useState)([]),k=Object(I.a)(c,2),p=k[0],u=k[1];function h(){return(h=Object(m.a)(l.a.mark(function t(){var o;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.Store.allPokemons),t.next=3,e.Store.allPokemons;case 3:return o=t.sent,t.next=6,o.sort(function(e,t){return e.name>t.name?1:e.name===t.name?0:-1});case 6:e.Store.pokemons=t.sent,e.Store.pagePokemons=e.Store.pokemons.slice(0,e.Store.countShowedPokemons);case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}function d(){var t=e.Store.allPokemons;e.Store.pokemons=t,e.Store.filtredPokemons=t,e.Store.pagePokemons=e.Store.pokemons.slice(0,e.Store.countShowedPokemons)}return a.a.createElement(_,{key:"header"},a.a.createElement(j.a,{type:"flex",justify:"space-between",align:"middle"},a.a.createElement(F,null,a.a.createElement(E.b,{to:"/pokedex-last/",onClick:d}," Pokemonchiki ")),a.a.createElement("div",{className:"searchField",style:{display:e.Store.visibilityOn}},a.a.createElement(D,{placeholder:"Input name of pokemon",onChange:function(t){0!==t.target.value.length?(e.Store.pokemons=(null===e.pokemons?e.Store.allPokemons:e.Store.filtredPokemons).filter(function(e){return e.name.indexOf(t.target.value)>=0}),e.Store.pagePokemons=e.Store.pokemons.slice(0,e.Store.countShowedPokemons),e.Store.countPokemons=e.Store.pokemons.length,console.log(t.target.value)):e.Store.pagePokemons=null===e.pokemons?e.Store.allPokemons.slice(0,e.Store.countShowedPokemons):e.Store.filtredPokemons.slice(0,e.Store.countShowedPokemons)}})),a.a.createElement("div",{style:{display:e.Store.visibilityOn}},a.a.createElement(C.a,{type:"primary",shape:"circle",icon:"filter",size:"large",onClick:function(){return r(!0)}}),a.a.createElement(C.a,{type:"primary",shape:"circle",icon:"sort-ascending",size:"large",onClick:function(){return h.apply(this,arguments)}}),a.a.createElement(C.a,{type:"primary",shape:"circle",icon:"rollback",size:"large",onClick:d}))),a.a.createElement(L.a,(t={height:"50vh",key:"drawer",title:"Filter",placement:"right",closable:!1,onClose:function(){return r(!1)},visible:i},Object(v.a)(t,"closable",!1),Object(v.a)(t,"style",{position:"absolute"}),t),a.a.createElement("p",null,"Chose types of pokemons: "),a.a.createElement("div",{className:"types"},a.a.createElement(z.a.Group,{options:["Normal","Fire","Water","Grass","Electric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dark","Dragon","Steel","Fairy"],onChange:function(e){return u(e)},value:p})),a.a.createElement(C.a,{type:"primary",size:"large",style:{marginRight:30},onClick:function(){e.Store.getMyChose(p),r(!1)}},"Search"),a.a.createElement(C.a,{type:"primary",size:"large",onClick:function(){return r(!1)}},"Cancel")))})),B=o(257),A=(o(226),S.a.Footer),G=Object(r.b)("Store")(Object(r.c)(function(e){return a.a.createElement(A,{key:"pagination"},a.a.createElement(B.a,{showSizeChanger:!0,onShowSizeChange:function(t,o){e.Store.countShowedPokemons=o,null===e.Store.pokemons?e.Store.getPokemons():e.Store.changePokemons()},pageSizeOptions:["10","20","50"],defaultCurrent:e.Store.clickedPage,total:e.Store.countPokemons,onChange:function(t){e.Store.clickedPage=t,null===e.Store.pokemons?e.Store.getPokemons():e.Store.changePokemons()},style:{visibility:e.Store.visibilityOn}}))})),H=o(30),T=o(256),M=o(80),R=o.n(M),J=Object(r.b)("Store")(Object(r.c)(function(e){var t=e.pokemon.url.slice(34,-1);return a.a.createElement("div",null,t?a.a.createElement(E.b,{to:"/pokemon"},a.a.createElement(T.a,{onClick:function(){e.Store.getPokemonByID(t),e.Store.visibilityOn="hidden"},key:e.pokemon.name,title:"#"+t+" "+(e.pokemon.name.charAt(0).toUpperCase()+e.pokemon.name.slice(1)),style:{width:250,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},a.a.createElement(R.a,{alt:"",key:e.pokemon.name,src:"https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(t,".png?raw=true"),loader:a.a.createElement(y.a,{size:"large",style:{width:180,height:180}}),unloader:a.a.createElement("img",{src:"../images/noimageavailable.png",alt:"",style:{width:180,height:180}}),style:{width:180,height:180}}))):"")})),U=Object(r.b)("Store")(Object(r.c)(function(e){return e.Store.visibilityOn=-1!==window.location.href.indexOf("pokedex-last")?"block":"none",a.a.createElement(j.a,{type:"flex",justify:"center",align:"middle"},e.Store.pagePokemons.map(function(e){return a.a.createElement(H.a,{key:e.name},a.a.createElement(J,{pokemon:e}))}))})),W=o(259),q=Object(r.b)("Store")(Object(r.c)(function(e){console.log(e.Store.clickedPokemonInfo);return e.Store.visibilityOn=-1!==window.location.href.indexOf("pokedex-last")?"block":"none",a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},a.a.createElement(E.b,{to:"/pokedex-last/"},a.a.createElement(C.a,{type:"primary",size:"large",style:{margin:"auto",marginBottom:20},onClick:function(){return e.Store.visibilityOn="visible"}},"<<-- Back")),e.Store.clickedPokemonInfo?a.a.createElement("div",{style:{width:"90%"}},a.a.createElement(T.a,{key:e.Store.clickedPokemonInfo.forms[0].name,title:e.Store.clickedPokemonInfo.forms[0].name.charAt(0).toUpperCase()+e.Store.clickedPokemonInfo.forms[0].name.slice(1),style:{marginRight:"10vw",marginLeft:"10vw",fontFamily:"Comic Sans MS"}},a.a.createElement(R.a,{alt:"",src:"https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(e.Store.clickedPokemonInfo.id,".png?raw=true"),loader:a.a.createElement(y.a,{size:"large",style:{width:180,height:180}}),unloader:a.a.createElement(y.a,{size:"large",style:{width:180,height:180}}),style:{width:"30%",marginLeft:"35%"}}),a.a.createElement("div",null,a.a.createElement("p",null,"Height: ",e.Store.clickedPokemonInfo.height),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.height/55*100,showInfo:!1}),a.a.createElement("p",null,"Base experience: ",e.Store.clickedPokemonInfo.base_experience),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.base_experience/281*100,showInfo:!1}),a.a.createElement("p",null,"Speed: ",e.Store.clickedPokemonInfo.stats[0].base_stat),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.stats[0].base_stat/180*100,showInfo:!1}),a.a.createElement("p",null,"Special deffence: ",e.Store.clickedPokemonInfo.stats[1].base_stat),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.stats[1].base_stat/230*100,showInfo:!1}),a.a.createElement("p",null,"Special attack: ",e.Store.clickedPokemonInfo.stats[2].base_stat),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.stats[2].base_stat/180*100,showInfo:!1}),a.a.createElement("p",null,"Deffence: ",e.Store.clickedPokemonInfo.stats[3].base_stat),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.stats[3].base_stat/230*100,showInfo:!1}),a.a.createElement("p",null,"Attack: ",e.Store.clickedPokemonInfo.stats[4].base_stat),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.stats[4].base_stat/181*100,showInfo:!1}),a.a.createElement("p",null,"HP: ",e.Store.clickedPokemonInfo.stats[5].base_stat),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.stats[5].base_stat/255*100,showInfo:!1}),a.a.createElement("p",null,"Weight: ",e.Store.clickedPokemonInfo.weight),a.a.createElement(W.a,{percent:e.Store.clickedPokemonInfo.weight/9999*100,showInfo:!1})))):a.a.createElement(y.a,{size:"large",style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}))})),K=(o(253),Object(r.b)("Store")(Object(r.c)(function(e){return a.a.createElement(E.a,null,a.a.createElement(S.a,null,a.a.createElement(S.a.Header,{className:"headerElement"},a.a.createElement(N,null)),a.a.createElement(S.a.Content,null,e.Store.isPokemonsLoading?a.a.createElement(y.a,{tip:"Loading...",size:"large",key:"spinner"},a.a.createElement(b.a,{message:"Pokemons are loading",type:"info"})):a.a.createElement("div",null,a.a.createElement(w.a,{exact:!0,path:"/pokedex-last/",component:U}),a.a.createElement(w.a,{exact:!0,path:"/pokemon/",component:q}))),a.a.createElement(S.a.Footer,{className:"pagination"},a.a.createElement(G,null))))}))),Q={Store:P};i.a.render(a.a.createElement(r.a,Q,a.a.createElement(K,null)),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.096a4dfc.chunk.js.map