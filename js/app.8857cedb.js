(function(e){function n(n){for(var r,i,o=n[0],l=n[1],u=n[2],d=0,c=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&c.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);h&&h(n);while(c.length)c.shift()();return s.push.apply(s,u||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],r=!0,i=1;i<t.length;i++){var o=t[i];0!==a[o]&&(r=!1)}r&&(s.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},i={app:0},a={app:0},s=[];function o(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"314905a2"}[e]+".js"}function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={about:1};i[e]?n.push(i[e]):0!==i[e]&&t[e]&&n.push(i[e]=new Promise((function(n,t){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"296d78ea"}[e]+".css",a=l.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===a))return n()}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){u=c[o],d=u.getAttribute("data-href");if(d===r||d===a)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete i[e],h.parentNode.removeChild(h),t(s)},h.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(h)})).then((function(){i[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=o(e);var c=new Error;u=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,t[1](c)}a[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(n)},l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var h=d;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"01f7":function(e,n,t){},"21bb":function(e,n,t){"use strict";var r=t("2dad"),i=t.n(r);i.a},"2dad":function(e,n,t){},"384a":function(e,n,t){"use strict";var r=t("c1e5"),i=t.n(r);i.a},"53d7":function(e,n,t){"use strict";var r=t("01f7"),i=t.n(r);i.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-container",[t("el-header",[t("NavBar")],1),t("el-main",[t("router-view")],1),t("el-footer",[t("Footer")],1)],1)},a=[],s=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("nav",{staticClass:"main-nav",class:{open:e.navStateOpen}},[r("router-link",{staticClass:"nav-item nav-item--logo",attrs:{to:"/","exact-active-class":"active"}},[r("img",{staticClass:"logo",attrs:{alt:"einfachIOTA",src:t("cf05")}})]),r("div",{staticClass:"menu-btn-container",class:{open:e.navStateOpen},on:{click:e.toggleNav}},[e._m(0)]),r("div",{staticClass:"lang",on:{click:function(n){return e.switchLanguage()}}},["de"!=this.$i18n.locale?r("img",{staticClass:"logo",attrs:{alt:"lang",src:t("a320"),contain:"",height:"20rm"}}):r("img",{staticClass:"logo",attrs:{alt:"lang",src:t("f079"),contain:"",height:"20rm"}})]),r("div",{staticClass:"nav-menu",class:{open:e.navStateOpen}},[r("router-link",{staticClass:"nav-item",attrs:{to:"/","active-class":"active"},nativeOn:{click:function(n){e.navStateOpen=!1}}},[r("span",[e._v("Home")])]),r("router-link",{staticClass:"nav-item",attrs:{to:"/manage","active-class":"active"},nativeOn:{click:function(n){e.navStateOpen=!1}}},[r("span",[r("i18n",{attrs:{path:"nav_register"}})],1)])],1)],1)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"menu-btn"},[t("span",{staticClass:"top"}),t("span",{staticClass:"center"}),t("span",{staticClass:"bottom"})])}],l=(t("fb6a"),{data:function(){return{navStateOpen:!1}},methods:{toggleNav:function(){this.navStateOpen=!this.navStateOpen},switchLanguage:function(){"de"==this.$i18n.locale?this.$i18n.locale="en":this.$i18n.locale="de"}},mounted:function(){console.log("mounted");var e=navigator.language||navigator.userLanguage;"de"==e.slice(0,2)&&(this.$i18n.locale="de")}}),u=l,d=(t("ed6b"),t("2877")),c=Object(d["a"])(u,s,o,!1,null,null,null),h=c.exports,g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"footer"},[t("div",{staticClass:"row footer-bottom"},[e._m(0),e._m(1),t("div",{staticClass:"footer-bottom-col footer-bottom-col__right"},[t("a",{staticClass:"footer-main-link",attrs:{href:"https://tanglebay.org/legal-notice/"}},[t("i18n",{attrs:{path:"imprint"}})],1),t("a",{staticClass:"footer-main-link",attrs:{href:"https://tanglebay.org/privacy-policy/"}},[t("i18n",{attrs:{path:"privacy"}})],1)])])])},b=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"footer-bottom-col footer-bottom-col__left"},[t("a",{staticClass:"footer-main-link",attrs:{target:"_blank",href:"https://status.tanglebay.org"}},[e._v("Status")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"footer-bottom-col"},[e._v("Made with "),t("span",{staticClass:"heart"},[e._v("❤")]),e._v(" by "),t("a",{staticClass:"footer-main-link footer-main-link__inline",attrs:{target:"_blank",href:"https://www.einfachIOTA.de"}},[e._v("einfachIOTA")]),e._v("&"),t("a",{staticClass:"footer-main-link footer-main-link__inline",attrs:{target:"_blank",href:"https://tanglebay.org"}},[e._v("Tangle Bay")])])}],m=(t("53d7"),{}),f=Object(d["a"])(m,g,b,!1,null,null,null),v=f.exports,p={components:{NavBar:h,Footer:v}},w=p,k=(t("5c0b"),Object(d["a"])(w,i,a,!1,null,null,null)),D=k.exports,z=t("a925");r["default"].use(z["a"]);var A=new z["a"]({locale:"en",fallbackLocale:"de",messages:{en:{register:"Register your IOTA node and be part of the Community Dock. We support IRI and Hornet nodes.",register2:"Register your node",nav_register:"Register",join:"Join the Dock!",nodedock:"The node dock for the community",points:"Points",rank:"Rank",imprint:"Legal Notice",privacy:"Privacy Policy"},de:{register:"Registrieren Sie Ihren IOTA-Node und werden Sie Teil des Community Docks. Wir unterstützen IRI- und Hornet-Nodes.",register2:"Registriere deinen Node",nav_register:"Registrieren",join:"Join the Dock!",nodedock:"Der Nodehafen für die Community",points:"Punkte",rank:"Rang",imprint:"Impressum",privacy:"Datenschutz"}}}),S=t("5c96"),I=t.n(S),_=(t("0fae"),t("d3b7"),t("8c4f")),y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("vue-particles",{staticClass:"particles",attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#000000",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),t("div",{staticClass:"hero"},[t("h1",{staticClass:"heading"},[e._v("Tangle Bay Dock")]),t("p",{staticClass:"sub-heading"},[t("i18n",{attrs:{path:"nodedock"}})],1)]),t("div",{staticClass:"section"},[t("div",{staticClass:"container"},[t("NodeList")],1)]),t("div",{staticClass:"section section-background"},[t("div",{staticClass:"container"},[t("h2",[t("i18n",{attrs:{path:"join"}})],1),t("p",[t("i18n",{attrs:{path:"register"}})],1),t("router-link",{staticClass:"nav-item",attrs:{to:"/manage","exact-active-class":"active"}},[t("i18n",{attrs:{path:"register2"}})],1),t("br")],1)])],1)},E=[],C=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.nodes,"default-sort":{prop:"score",order:"ascending"}},on:{"row-click":e.rowClicked}},[t("el-table-column",{staticClass:"el-table__header-row",attrs:{prop:"",label:e.$t("rank"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return[e._v("#"+e._s(n.$index+1))]}}])}),t("el-table-column",{attrs:{prop:"name",label:"Name",align:"center"}}),t("el-table-column",{attrs:{label:"Version",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return[e._v(e._s(n.row.appVersion?n.row.appName+" "+n.row.appVersion:"-"))]}}])}),t("el-table-column",{attrs:{prop:"points",label:e.$t("points"),align:"center"}})],1)},B=[],R={name:"NodeList",data:function(){return{loading:!1,url:"https://score.tanglebay.org/nodes",nodes:[],intervalid1:null}},methods:{fetchData:function(){var e=this;fetch(this.url).then((function(e){return e.json()})).then((function(n){console.log("nodes",n),n&&(e.nodes=n,e.loading=!1)}))},tableRowClassName:function(e){var n=e.row;return n.available?"success-row":"danger-row"},rowClicked:function(e){console.log("row",e),this.$router.push({name:"details",params:{nodeKey:e.key,details:e}}),console.log("row2")}},mounted:function(){this.loading=!0,this.fetchData(),this.intervalid1=setInterval(function(){this.fetchData()}.bind(this),1e4)},beforeDestroy:function(){clearInterval(this.intervalid1)}},V=R,j=(t("d258"),Object(d["a"])(V,C,B,!1,null,null,null)),O=j.exports,W={name:"Home",components:{NodeList:O},data:function(){return{copied:!1,url:"https://nodes.tanglebay.org"}},methods:{onCopy:function(){this.copied=!0,console.log("copy success!"),setTimeout(function(){console.log("what?"),this.copied=!1}.bind(this),1e3)},onError:function(){console.log("copy error!")}}},M=W,N=(t("21bb"),Object(d["a"])(M,y,E,!1,null,null,null)),T=N.exports,G=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("div",{staticClass:"hero"},[t("h1",{staticClass:"heading"},[e._v("Be part of the Community Dock")]),t("p",{staticClass:"sub-heading"},[e._v("Register your IOTA Node")])]),t("div",{staticClass:"section section-background"},[t("div",{staticClass:"container"},[t("h2",[e._v("Register!")]),t("p",[e._v("You can add your IRI or Hornet with extra software. Just enter your details and you're in!")])])])])}],H={name:"Home",components:{},data:function(){return{data:null}},methods:{}},L=H,F=Object(d["a"])(L,G,Z,!1,null,null,null),x=F.exports,P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"details"},[t("NodeDetails",{attrs:{nodeKey:e.$route.params.nodeKey}})],1)},K=[],U=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"node"},[t("h2",{staticClass:"headline"},[e._v("Node Details")]),t("el-card",{staticClass:"node-box"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("div",{staticClass:"left"},[t("h2",[e._v(e._s(e.details.name))]),t("p",[t("strong",[e._v("ID:")]),e._v(" "+e._s(e.details.key)+" ")]),t("p",[t("strong",[e._v("Version:")]),e._v(" "+e._s(e.details.appName)+" "+e._s(e.details.appVersion)+" ")])]),t("div",{staticClass:"right"},[t("el-tag",{attrs:{type:e.details.available?"success":"danger"}},[e._v(e._s(e.details.available?"online":"offline"))])],1)]),t("table",{staticClass:"el-table"},[t("thead",{staticClass:"el-table__head"},[t("td",[e._v("Command")]),t("td",[e._v("Value")])]),t("tbody",e._l(e.sortedCommands,(function(n,r){return t("tr",{key:r,staticClass:"el-table__row"},[t("td",[e._v(e._s(n.name))]),t("td",[e._v(e._s(n.points))])])})),0)])])],1)},J=[],Q=(t("b0c0"),{name:"NodeDetails",props:["nodeKey"],data:function(){return{loading:!1,url:"https://score.tanglebay.org/nodes/",details:{commands:[]},intervalid1:null}},methods:{fetchData:function(){var e=this;fetch(this.url+this.nodeKey).then((function(e){return e.json()})).then((function(n){console.log("what",n),e.details=n}))}},mounted:function(){console.log("details"),this.loading=!0,this.fetchData(),this.intervalid1=setInterval(function(){this.fetchData()}.bind(this),5e3)},beforeDestroy:function(){clearInterval(this.intervalid1)},computed:{sortedCommands:function(){function e(e,n){return e.name<n.name?-1:e.name>n.name?1:0}return this.details.commands.slice().sort(e)}}}),Y=Q,$=(t("384a"),Object(d["a"])(Y,U,J,!1,null,"23685b72",null)),X=$.exports,q={name:"Details",components:{NodeDetails:X},data:function(){return{url:"https://nodes.tanglebay.org"}}},ee=q,ne=(t("bb32"),Object(d["a"])(ee,P,K,!1,null,"53be9207",null)),te=ne.exports,re=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},ie=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{staticClass:"heading"},[e._v("Impressum")]),t("div",{staticClass:"divider"}),t("h2",[e._v("Angaben gemäß § 5 TMG")]),t("p",[e._v("Sebastian Heußer")]),t("p",[e._v("Collingstraße 104")]),t("p",[e._v("66424 Homburg")]),t("h3",[e._v("Kontakt")]),t("p",[e._v("E-Mail: huhn@einfachiota.de")]),t("h3",[e._v("Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV")]),t("p",[e._v("Sebastian Heußer")]),t("p",[e._v("Collingstraße 104")]),t("p",[e._v("66424 Homburg")]),t("h3",[e._v("Haftung für Inhalte")]),t("p",[e._v(" Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. Haftung für Links ")]),t("p",[e._v(" Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. Urheberrecht ")]),t("p",[e._v(" Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen. ")])])}],ae=(t("8174"),{}),se=Object(d["a"])(ae,re,ie,!1,null,null,null),oe=se.exports,le=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},ue=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{staticClass:"heading"},[e._v("Datenschutzerklärung")]),t("div",{staticClass:"divider"}),t("h2",[e._v("1. Datenschutz auf einen Blick")]),t("h3",[e._v("Allgemeine Hinweise")]),t("p",[e._v(" Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf unserer Website Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Wie erfassen wir Ihre Daten? Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten. Wofür nutzen wir Ihre Daten? Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Welche Rechte haben Sie bezüglich Ihrer Daten? Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“. Analyse-Tools und Tools von Drittanbietern Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerklärung. Sie können dieser Analyse widersprechen. Über die Widerspruchsmöglichkeiten werden wir Sie in dieser Datenschutzerklärung informieren. ")]),t("h2",[e._v("2. Allgemeine Hinweise und Pflichtinformationen")]),t("h3",[e._v("Datenschutz")]),t("p",[e._v(" Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Hinweis zur verantwortlichen Stelle ")]),t("p",[e._v("Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:")]),t("p",[e._v("Sebastian Heußer")]),t("p",[e._v("Collingstraße 104")]),t("p",[e._v("66424 Homburg")]),t("p",[e._v("E-Mail: huhn@einfachiota.de")]),t("p",[e._v("Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.")]),t("h3",[e._v("Widerruf Ihrer Einwilligung zur Datenverarbeitung")]),t("p",[e._v(" Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt. Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO) Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO). Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO). Beschwerderecht bei der zuständigen Aufsichtsbehörde Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe. Recht auf Datenübertragbarkeit Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist. ")]),t("h3",[e._v("SSL- bzw. TLS-Verschlüsselung")]),t("p",[e._v(" Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden. ")]),t("h3",[e._v("Verschlüsselter Zahlungsverkehr auf dieser Website")]),t("p",[e._v(' Besteht nach dem Abschluss eines kostenpflichtigen Vertrags eine Verpflichtung, uns Ihre Zahlungsdaten (z.B. Kontonummer bei Einzugsermächtigung) zu übermitteln, werden diese Daten zur Zahlungsabwicklung benötigt. Der Zahlungsverkehr über die gängigen Zahlungsmittel (Visa/MasterCard, Lastschriftverfahren) erfolgt ausschließlich über eine verschlüsselte SSL- bzw. TLS-Verbindung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Bei verschlüsselter Kommunikation können Ihre Zahlungsdaten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden. ')]),t("h3",[e._v("Auskunft, Sperrung, Löschung und Berichtigung")]),t("p",[e._v("Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.")]),t("h3",[e._v("Recht auf Einschränkung der Verarbeitung")]),t("p",[e._v(" Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen: Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen. Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Browsertyp und Browserversion verwendetes Betriebssystem Referrer URL Hostname des zugreifenden Rechners Uhrzeit der Serveranfrage IP-Adresse Facebook-Name Facebook-Profil- und Titelbild Facebook-Titelbild bei Facebook hinterlegte E-Mail-Adresse Facebook-ID Facebook-Freundeslisten Facebook Likes (“Gefällt-mir”-Angaben) Geburtstag Geschlecht Land Sprache Diese Daten werden zur Einrichtung, Bereitstellung und Personalisierung Ihres Accounts genutzt. Die Registrierung mit Facebook-Connect und die damit verbundenen Datenverarbeitungsvorgänge erfolgen auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Weitere Informationen finden Sie in den Facebook-Nutzungsbedingungen und den Facebook-Datenschutzbestimmungen. Diese finden Sie unter: https://de-de.facebook.com/about/privacy/ und https://de-de.facebook.com/legal/terms/. Kommentarfunktion auf dieser Website Für die Kommentarfunktion auf dieser Seite werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars, Ihre E-Mail-Adresse und, wenn Sie nicht anonym posten, der von Ihnen gewählte Nutzername gespeichert. Speicherung der IP-Adresse Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die Kommentare verfassen. Da wir Kommentare auf unserer Seite nicht vor der Freischaltung prüfen, benötigen wir diese Daten, um im Falle von Rechtsverletzungen wie Beleidigungen oder Propaganda gegen den Verfasser vorgehen zu können. Abonnieren von Kommentaren Als Nutzer der Seite können Sie nach einer Anmeldung Kommentare abonnieren. Sie erhalten eine Bestätigungsemail, um zu prüfen, ob Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie können diese Funktion jederzeit über einen Link in den Info-Mails abbestellen. Die im Rahmen des Abonnierens von Kommentaren eingegebenen Daten werden in diesem Fall gelöscht; wenn Sie diese Daten für andere Zwecke und an anderer Stelle (z.B. Newsletterbestellung) an uns übermittelt haben, verbleiben die jedoch bei uns. Speicherdauer der Kommentare Die Kommentare und die damit verbundenen Daten (z.B. IP-Adresse) werden gespeichert und verbleiben auf unserer Website, bis der kommentierte Inhalt vollständig gelöscht wurde oder die Kommentare aus rechtlichen Gründen gelöscht werden müssen (z.B. beleidigende Kommentare). Rechtsgrundlage Die Speicherung der Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Verarbeiten von Daten (Kunden- und Vertragsdaten) Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen. Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt. Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitale Inhalte Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut. Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Webanalysedienst Matomo ")])])}],de=(t("d3e0"),{}),ce=Object(d["a"])(de,le,ue,!1,null,null,null),he=ce.exports;r["default"].use(_["a"]);var ge=new _["a"]({mode:"history",routes:[{path:"/",name:"home",component:T},{path:"/nodes/:nodeKey",name:"details",component:te,props:!0},{path:"/manage",name:"manage",component:x},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/imprint",name:"imprint",component:oe},{path:"/privacy",name:"privacy",component:he}]}),be=t("4eb5"),me=t.n(be),fe=t("98c9");r["default"].use(fe["a"]),r["default"].config.productionTip=!1,r["default"].use(I.a),r["default"].use(me.a),new r["default"]({i18n:A,router:ge,render:function(e){return e(D)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),i=t.n(r);i.a},8174:function(e,n,t){"use strict";var r=t("bbdc"),i=t.n(r);i.a},"9c0c":function(e,n,t){},a320:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACWCAIAAAB4uAJLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZDOTY3QjZCMEM3MjExRTZBRDEyQUE4OTQ3MEU2RTM1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZDOTY3QjZDMEM3MjExRTZBRDEyQUE4OTQ3MEU2RTM1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkM5NjdCNjkwQzcyMTFFNkFEMTJBQTg5NDcwRTZFMzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkM5NjdCNkEwQzcyMTFFNkFEMTJBQTg5NDcwRTZFMzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz488mEiAAABJElEQVR42uzYwQ2AMAwEQSfkDxL03woV0FEQtIG4mRJOKz9cBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn9c2G5CT+2UDYozDBuTkPm1AjG4C5A5yB7mD3EHuIHeQO8gd5A5yB7kjd5A7yB3kDnIHuYPcQe4gd5A7yB25g9xB7iB3kDvIHeQOcge5g9xB7sgd5A5yB7mD3EHuIHeQO8gd5A5yJ9t4bEBO7stqBFK0+zQCMde970YgJveaRiCFzwxyB7mD3EHuIHeQO8gd5A5yB7mD3JE7yB3kDnIHuYPcQe4gd5A7yB3kjtxB7iB3kDvIHeQOcge5g9xB7iB35A5yB7mD3EHuIHeQO8gd5A5yB7kjd5A7/M4rwACmKgaf+g3wJgAAAABJRU5ErkJggjEyMDQ="},af1c:function(e,n,t){},bb32:function(e,n,t){"use strict";var r=t("f4b6"),i=t.n(r);i.a},bbdc:function(e,n,t){},c1e5:function(e,n,t){},c829:function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.6a4eaac4.png"},d258:function(e,n,t){"use strict";var r=t("c829"),i=t.n(r);i.a},d3e0:function(e,n,t){"use strict";var r=t("af1c"),i=t.n(r);i.a},d5a8:function(e,n,t){},ed6b:function(e,n,t){"use strict";var r=t("d5a8"),i=t.n(r);i.a},f079:function(e,n,t){e.exports=t.p+"img/us-flag.4d460eba.png"},f4b6:function(e,n,t){}});
//# sourceMappingURL=app.8857cedb.js.map