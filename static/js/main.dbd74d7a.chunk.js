(this.webpackJsonpwho_wants_to_be_a_millionaire=this.webpackJsonpwho_wants_to_be_a_millionaire||[]).push([[0],{14:function(e,t,n){e.exports={btn:"MainBtn_btn__2iIvj"}},39:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(16),r=n.n(c),s=(n(39),n(5)),i=n(12),o=n(33),u=n(4),l="DATA/FETCH_DATA",j="COUNTER",d="GAME/FINISH_GAME",b="STATUS/SET_STATUS",p="MENU/TOGGLE_MENU",m="SPINNER/SHOW_SPINNER",O="FETCH/FETCH_ERROR",h={counter:0,gameEnd:!1,menu:!1,spinner:!1};var f={questions:null,dataError:!1};var x=Object(i.c)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{counter:t.payload});case p:return Object(u.a)(Object(u.a)({},e),{},{menu:!e.menu});case d:return Object(u.a)(Object(u.a)({},e),{},{gameEnd:t.payload});case m:return Object(u.a)(Object(u.a)({},e),{},{spinner:!e.spinner});default:return e}},dataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(u.a)(Object(u.a)({},e),{},{dataError:!0});case l:return Object(u.a)(Object(u.a)({},e),{},{questions:t.payload});case b:return Object(u.a)(Object(u.a)({},e),{},{questions:e.questions&&e.questions.map((function(e){return e.title===t.payload[0]?{title:e.title,answers:t.payload[1],rate:e.rate}:e}))});default:return e}}}),v=n(11),y=n(3),_=n.p+"static/media/hand.dbb74bc4.svg",g=n(34),N=n.n(g);function E(){return{type:p}}function w(e,t,n){return e.map((function(e,a){return a===t?{title:e.title,status:n,correct:e.correct}:{title:e.title,status:"disabled",correct:e.correct}}))}var q=n(14),R=n.n(q),T=n(1);var S={finish:function(e){return{type:d,payload:e}}},I=Object(s.b)((function(e){return{counter:e.appReducer.counter,questions:e.dataReducer.questions}}),S)((function(e){var t=e.counter,n=e.questions,c=e.finish;Object(a.useEffect)((function(){c(!1)}),[]);var r=n&&t>0?n.slice(0,t).map((function(e){return parseInt(e.rate,10)})).reduce((function(e,t){return e+t})):0;return Object(T.jsx)("section",{id:"end-page",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("img",{src:_,alt:"hand"}),Object(T.jsxs)("div",{className:"content",children:[Object(T.jsx)("p",{className:"score",children:"Total score:"}),Object(T.jsxs)("h2",{children:["$",r," ","earned"]}),Object(T.jsx)(v.b,{className:R.a.btn,to:"/",children:"Try again"})]})]})})}));var k={check:function(e,t){return function(n,a){var c=a(),r=c.appReducer,s=c.dataReducer.questions,i=r.counter;s&&s.forEach((function(a){a.title===e&&(n({type:b,payload:[a.title,w(a.answers,t,"selected")]}),n({type:m}),setTimeout((function(){a.answers[t].correct?(n({type:b,payload:[a.title,w(a.answers,t,"correct")]}),n({type:m}),i+1!==s.length?setTimeout((function(){n({type:j,payload:i+1})}),1500):setTimeout((function(){n({type:d,payload:!0})}),1500)):(n({type:b,payload:[a.title,w(a.answers,t,"wrong")]}),n({type:m}),setTimeout((function(){n({type:d,payload:!0})}),1500))}),1500))}))}}},A=Object(s.b)(null,k)((function(e){var t=e.status,n=e.question,a=e.index,c=e.delay,r=e.marker,s=e.content,i=e.check,o=function(){return"disabled"===t?void 0:void i(n,a)};return Object(T.jsxs)("div",{className:"answer-item animate__animated animate__fadeIn ".concat(t),style:{animationDelay:c},onKeyDown:o,onClick:o,role:"presentation",children:[Object(T.jsx)("div",{className:"triangle-left"}),Object(T.jsxs)("p",{children:[Object(T.jsx)("span",{children:r})," ",s]}),Object(T.jsx)("div",{className:"triangle-right"})]})})),C=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];var M=function(e){var t=e.questions,n=e.counter;return Object(T.jsx)("section",{id:"quiz",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t&&t[n].title},t&&t[n].title),Object(T.jsx)("div",{className:"answers",children:t&&t[n].answers.map((function(e,a){return Object(T.jsx)(A,{content:e.title,status:e.status,index:a,marker:C[a].toUpperCase(),question:t[n].title,delay:"".concat(100*a,"ms")},e.title)}))})]})})};var U=function(e){var t=e.questions,n=e.counter;return Object(T.jsx)("section",{id:"status-bar",children:Object(T.jsx)("div",{className:"rates",children:t&&t.map((function(e,t){return Object(T.jsxs)("div",{className:"rate ".concat(n<t?"":n===t?"active":"passed"),children:[Object(T.jsx)("div",{className:"triangle-left"}),Object(T.jsx)("p",{children:e.rate}),Object(T.jsx)("div",{className:"triangle-right"})]},e.title+e.rate)}))})})};n(68);var D=Object(s.b)((function(e){return{spinner:e.appReducer.spinner}}),{})((function(e){return e.spinner?Object(T.jsx)("div",{id:"spinner",children:Object(T.jsx)("i",{className:"fas fa-circle-notch fa-spin"})}):null}));var F={toggleMenu:E},H=Object(s.b)((function(e){return{menu:e.appReducer.menu}}),F)((function(e){var t=e.menu;function n(){E()}return Object(T.jsx)("div",{id:"menu-control",role:"presentation",onClick:n,onKeyDown:n,children:t?Object(T.jsx)("i",{className:"fas fa-times"}):Object(T.jsx)("i",{className:"fas fa-bars"})})}));var G=Object(s.b)((function(e){return{dataError:e.dataReducer.dataError}}),{})((function(e){return e.dataError?Object(T.jsxs)("h2",{className:"fetch-status-title",children:["OOPS! Some server error.",Object(T.jsx)("br",{}),Object(T.jsx)(v.b,{className:R.a.btn,to:"/",children:"Return to Main"})]}):Object(T.jsx)("h2",{className:"fetch-status-title",children:Object(T.jsx)("i",{className:"fas fa-circle-notch fa-spin"})})}));var z={fetch:function(){return function(e){N.a.get("https://eugenere95.github.io/who_wants_to_be_a_millionaire/data.json").then((function(t){e({type:l,payload:t.data})})).catch((function(){e({type:O})}))}},nextQuestion:function(e){return{type:j,payload:e}}},P=Object(s.b)((function(e){return{questions:e.dataReducer.questions,counter:e.appReducer.counter,menu:e.appReducer.menu,gameEnd:e.appReducer.gameEnd}}),z)((function(e){var t=e.questions,n=e.counter,c=e.gameEnd,r=e.menu,s=e.fetch,i=e.nextQuestion;return Object(a.useEffect)((function(){s(),i(0)}),[]),c?Object(T.jsx)(y.a,{to:"/result"}):Object(T.jsx)("section",{id:"game",className:r?"active":"",children:t?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(D,{}),Object(T.jsx)(M,{questions:t,counter:n}),Object(T.jsx)(U,{questions:t,counter:n}),Object(T.jsx)(H,{})]}):Object(T.jsx)(G,{})})}));var B=function(){return Object(T.jsx)("section",{id:"start-page",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("img",{className:"animate__animated animate__zoomIn",src:_,alt:"hand"}),Object(T.jsxs)("div",{className:"content",children:[Object(T.jsx)("h2",{children:"Who wants to be a millionaire?"}),Object(T.jsx)(v.b,{className:R.a.btn,to:"/game",children:"Start"})]})]})})};n(69);var J=function(){return Object(T.jsxs)(v.a,{children:[Object(T.jsx)(y.b,{exact:!0,path:"/",component:B}),Object(T.jsx)(y.b,{path:"/result",component:I}),Object(T.jsx)(y.b,{path:"/game",component:P})]})},K=Object(i.d)(x,Object(i.a)(o.a));r.a.render(Object(T.jsx)(s.a,{store:K,children:Object(T.jsx)(J,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.dbd74d7a.chunk.js.map