(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"2937da39","chunk-0206bfa0":"bb2d0230","chunk-04b93936":"93030525","chunk-13a6037e":"5e871bc2","chunk-16015154":"bb4a707b","chunk-17977988":"05d00f50","chunk-2c06842c":"238d2d1c","chunk-2d208d90":"5fa9bae5","chunk-2d21d0e2":"6102d729","chunk-2d22c123":"9aa1b15d","chunk-2e80bb9a":"c2d0afc2","chunk-3145fe0f":"19fe2557","chunk-328f70dd":"0d2c653f","chunk-3807499c":"fdd205ed","chunk-3c94cd2f":"03239d38","chunk-3dc647fd":"dc62f705","chunk-4cdd78c0":"20be79fe","chunk-515a8379":"7a4646cd","chunk-53ccb27e":"593c59ad","chunk-59974754":"f5d8b644","chunk-766a929b":"ca29b47c","chunk-839300a6":"135246d2","chunk-c796899c":"4c9d9c31",comple:"b51e6cd5",creditos:"631e9989",glosario:"ec22f820",intro:"6da1c55d",referencias:"b8ece7cd",tema1:"24ad42f8",tema2:"a095ce2b",tema3:"33c540da"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3c94cd2f":1,"chunk-3dc647fd":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3c94cd2f":"1dbe8d4a","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"20a453ed","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"84ecd21c","chunk-766a929b":"92cde18b","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"2bc2b5b5",creditos:"7adaa2b3",glosario:"d45e4664",intro:"0e433876",referencias:"e463d78c",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),l=Object(s["a"])(c,i,r,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var g=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=g,b=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Direccionamiento estratégico",descripcionCurso:"A través de este componente formativo el aprendiz debe apropiar los elementos de entrada requeridos para la elaboración del direccionamiento estratégico y las variables de la mezcla de mercadeo para su idea de negocio o proyecto productivo. ",imagenBannerPrincipal:n("ae0a")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Plataforma estratégica",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Organización",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Direccionamiento estratégico",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Entorno organizacional",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Mezcla de mercadeo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Producto",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Precio",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Plaza y distribución",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Promoción y publicidad",hash:"t_2_4"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Armstrong, G. & Kotler, P. (2013). Fundamentos de Marketing. Ed. 11. México. Person Educación."},{referencia:"Chiavenato, I. (2017). Planeación estratégica. Fundamentos y aplicaciones. 3 ed. México. McGraw Hill."},{referencia:"Forero, S. (2017) Fundamentos de mercadeo. Bogotá. Ecoe Ediciones."},{referencia:"Kotler, P. & Amstrong, G. (2017) Fundamentos de marketing. 13 Ed. México. Pearson Education."},{referencia:"Kotler, P; Keller, K. (2016). Dirección de marketing. Ed. 15. México. Pearson."},{referencia:"Prettel, G. (2016). Marketing, una herramienta para el crecimiento. Bogotá. Ediciones de la U"},{referencia:"Rodríguez, J. (2017) Cómo aplicarla planeación estratégica a la pequeña y mediana empresas. Ed. 6. México D.F. Cengage Learning"},{referencia:"Stanton, W & Etzel, M. & Walker, B. (2007) Fundamentos de marketing. 14 Ed. México. McGraw Hill"}],glosario:[{termino:"Análisis DOFA (debilidades, amenazas, fortalezas, oportunidades)",significado:"su objetivo consiste en ayudar a una empresa a encontrar sus factores estratégicos críticos, para usarlos, una vez identificados, y apoyar en ellos los cambios organizacionales: consolidando las fortalezas, minimizando las debilidades, aprovechando las ventajas de las oportunidades y eliminando o reduciendo las amenazas."},{termino:"Análisis externo",significado:"la organización no existe ni puede existir fuera de un ambiente, fuera de ese en-torno que le rodea; así que el análisis externo permite fijar las oportunidades y amenazas que el contexto puede presentarle a una organización."},{termino:"Análisis interno",significado:"el análisis interno permite fijar las fortalezas y debilidades de la organización, realizando un estudio que permite conocer la cantidad y calidad de los recursos y procesos con que cuenta el ente."},{termino:"Empresa",significado:"actividad económica organizada para la producción, transformación, comercialización, administración o custodia de bienes o para la prestación de servicios. Tiene como propósito crear un cliente, en ese sentido la empresa comercial tiene dos funciones cruciales: la comercialización y la innovación."},{termino:"Estrategia de mercadeo",significado:"plan general para usar los elementos de la mezcla de mercadeo con el fin de desarrollar el programa correspondiente."},{termino:"Estructura organizacional",significado:"es la forma en que se dividen, agrupan y coordinan las actividades de la organización en cuanto a las relaciones entre los gerentes y los empleados, entre gerentes y gerentes y entre empleados y empleados."},{termino:"Mezcla de mercadotecnia",significado:"forma parte de un nivel táctico de la mercadotecnia, en el cual, las estrategias se transforman en programas concretos para que una empresa pueda llegar al mercado con un producto satisfactor de necesidades y/o deseos, a un precio conveniente, con un mensaje apropiado y un sistema de distribución que coloque el producto en el lugar correcto y en el momento más oportuno."},{termino:"Norma ISO",significado:"son generadas por la INTERNATIONAL ORGANIZATION FOR STANDARIZATION, cuya sigla es ISO, esta organización está formada por los organismos de normalización de casi todos los países del mundo."},{termino:"Norma ISO 9000",significado:"describe los fundamentos de los sistemas de gestión de la calidad y especifica la terminología para los sistemas de gestión de la calidad"},{termino:"Planeación estratégica",significado:"se realiza a nivel de la organización, es decir, considera un enfoque global de la empresa, por lo que se basa en objetivos y estrategias generales, así como en planes estratégicos, que afectan una gran variedad de actividades."}],complementario:[{texto:"Academia Play",tipo:"Video",link:"https://www.youtube.com/watch?v=IZd1CCER98s"},{texto:"Chiavenato, 2017, Planeación estratégica. Fundamentos y aplicaciones.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5345&pg=1"},{texto:"Forero, S. 2017 Fundamentos de mercadeo",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5045&pg=5"},{texto:"Kotler,2016, Dirección de marketing",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4273&pg=1"},{texto:"Kotler & Amstrong, 2017 Fundamentos de marketing",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4393&pg=1"},{texto:"Prettel,2016, Marketing, una herramienta para el crecimiento.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5684&pg=1"},{texto:"Rodriguez,2017, Cómo aplicarla planeación estratégica a la pequeña y mediana empresas.",tipo:"Libro",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3233&pg=1"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Nelftalí Lizcano Reyes",cargo:"Asesor pedagógico",centro:"CENTRO INDUSTRIAL DEL DISEÑO Y LA MANUFACTURA Regional Santander"},{nombre:"Gloria Matilde Lee Mejía",cargo:"Responsable del equipo",centro:"CENTRO DE COMERCIO Y SERVICIOS Regional Tolima"},{nombre:"Claudia Juliana León Pinto",cargo:"Experta temática",centro:"CENTRO DE SERVICIO EMPRESARIALES Y TURÍSTICOS Regional Santander"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Diseñador instruccional",centro:"CENTRO DE GESTIÓN INDUSTRIAL Regional Distrito Capital"},{nombre:"Jesús Libardo Acero cruz",cargo:"Evaluador instruccional",centro:"CENTRO DE DISEÑO Y METROLOGÍA Regional Distrito Capital"},{nombre:"Julieth Paola Vital López",cargo:"Corrección de estilo",centro:"CENTRO PARA LA INDUSTRIA DE LA COMUNICACIÓN GRÁFICA Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:["Daniel Ricardo Mutis Gómez"],cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Camilo Andres Bolaño Rey",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:b["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ae0a:function(e,a,n){e.exports=n.p+"img/banner-princiapal.26ff8759.svg"}});
//# sourceMappingURL=app.42ac3887.js.map