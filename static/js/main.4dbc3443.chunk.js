(this["webpackJsonpdeep-breating"]=this["webpackJsonpdeep-breating"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),r=a(9),i=a.n(r),o=(a(30),a(3)),l=a.p+"static/media/breath_icon.9f23d969.svg",b=a(6),d=a(18),j=a(2),u=a(5),h=(a(31),function(e){var t=e.text,a=e.onClick,n=e.className,s=Object(u.a)(e,["text","onClick","className"]);return Object(c.jsx)("button",Object(j.a)(Object(j.a)({className:"normal-button ".concat(n),onClick:a},s),{},{children:t}))}),O=a.p+"static/media/heart.8e99651c.svg",m=a.p+"static/media/bell_sound.c679b23d.mp3",x=a.p+"static/media/audio_fe4d3bcac9.a379b9b0.mp3",f={breathing:{maxBreath:40,shouldStartBreathHold:!1},breathHold:{pingEveryNthSecond:30}},g=s.a.createContext(f),p=function(e){var t=e.children,a=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(c){return console.log(c),t}})),c=Object(o.a)(a,2),s=c[0],r=c[1];return[s,function(t){try{var a=t instanceof Function?t(s):t;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(c){console.log(c)}}]}("breathConfig",f),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(c.jsx)(g.Provider,{value:{maxBreath:r.breathing.maxBreath,setMaxBreath:function(e){return i(Object(j.a)(Object(j.a)({},r),{},{breathing:Object(j.a)(Object(j.a)({},r.breathing),{},{maxBreath:e})}))},shouldStartBreathHold:r.breathing.shouldStartBreathHold,setShouldStartBreathHold:function(e){return i(Object(j.a)(Object(j.a)({},r),{},{breathing:Object(j.a)(Object(j.a)({},r.breathing),{},{shouldStartBreathHold:e})}))},pingEveryNthSecond:r.breathHold.pingEveryNthSecond,setPingEveryNthSecond:function(e){return i(Object(j.a)(Object(j.a)({},r),{},{breathHold:Object(j.a)(Object(j.a)({},r.breathHold),{},{pingEveryNthSecond:e})}))}},children:t})},v=(a(32),function(e){var t=e.runBreathing,a=Object(n.useContext)(g).pingEveryNthSecond,s=Object(n.useState)(!1),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(b.a)(m),u=Object(o.a)(j,1)[0],f=Object(b.a)(x,{loop:!0}),p=Object(o.a)(f,2),v=p[0],N=p[1],S=N.stop,B=N.pause,C=Object(d.useStopwatch)({autoStart:!1}),k=C.seconds,y=C.minutes,E=C.hours,H=C.isRunning,w=C.start,_=C.pause,P=C.reset,V=function(){H||(w(),i&&l(!1),u(),v())};return Object(n.useEffect)((function(){t&&!H&&V()}),[t]),Object(n.useEffect)((function(){H&&0!==k&&k%a===0&&u()}),[k]),Object(c.jsxs)("div",{className:"guided-breath-hold",children:[Object(c.jsx)("h1",{className:"guided-breath-hold-title",children:"Guided Breath-hold"}),Object(c.jsx)("div",{className:"stop-watch",children:Object(c.jsxs)("div",{className:"watch-time-text",children:[Object(c.jsx)("span",{children:E}),":",Object(c.jsx)("span",{children:y}),":",Object(c.jsx)("span",{children:k})]})}),Object(c.jsx)("p",{children:Object(c.jsx)("img",{className:["heart-icon",H&&"heart-icon-animated"].join(" "),src:O,alt:"logo"})}),Object(c.jsx)(h,{className:"".concat(H?"active-button":""),text:"".concat(H?"Started":"Start"),disabled:H,onClick:function(){return V()}}),Object(c.jsx)(h,{className:"".concat(i?"active-button":""),text:"".concat(i?"Paused":"Pause"),disabled:i||!H,onClick:function(){H&&(_(),B(),l(!0))}}),Object(c.jsx)(h,{text:"Reset",disabled:!H&&!i,onClick:function(){(H||i)&&(P(),S(),l(!1))}})]})}),N=a.p+"static/media/zapsplat_human_male_deep_breathing_19843_2.2s.f91a10f9.mp3",S=a.p+"static/media/breathing_session_over.3e8fa907.mp3",B=a.p+"static/media/lungs.e926ca5b.svg",C=(a(33),function(e){var t=e.setRunBreathing,a=Object(n.useContext)(g),s=a.maxBreath,r=a.shouldStartBreathHold,i=Object(n.useState)(!1),l=Object(o.a)(i,2),d=l[0],j=l[1],u=Object(n.useState)(!1),O=Object(o.a)(u,2),m=O[0],x=O[1],f=Object(n.useState)(!1),p=Object(o.a)(f,2),v=p[0],C=p[1],k=Object(n.useState)(0),y=Object(o.a)(k,2),E=y[0],H=y[1],w=Object(b.a)(N,{loop:!0}),_=Object(o.a)(w,2),P=_[0],V=_[1],M=V.stop,F=V.pause,I=Object(b.a)(S,{volume:1}),R=Object(o.a)(I,1)[0];return Object(n.useEffect)((function(){if(d){var e=E>0&&setInterval((function(){return H(E+1)}),2200);return function(){return clearInterval(e)}}}),[E]),Object(n.useEffect)((function(){v&&(R(),setTimeout((function(){return M()}),1e3),r&&(document.querySelector('a[href$="section-breath-hold"]').click(),setTimeout((function(){return t(!0)}),8e3)))}),[v]),d&&E>=s&&(C(!0),j(!1)),Object(c.jsxs)("div",{className:"guided-breathing",children:[Object(c.jsx)("h1",{className:"guided-breathing-title",children:"Guided Breathing"}),Object(c.jsxs)("h2",{className:"guided-breathing-counter",children:[E," / ",s]}),Object(c.jsx)("p",{children:Object(c.jsx)("img",{className:["lung-icon",d&&"lung-icon-animated"].join(" "),src:B,alt:"logo"})}),Object(c.jsx)(h,{className:"".concat(d?"active-button":""),text:"".concat(d?"Started":"Start"),disabled:d,onClick:function(){d||(C(!1),j(!0),H(m?E+1:1),x(!1),t(!1),P())}}),Object(c.jsx)(h,{className:"".concat(m?"active-button":""),text:"".concat(m?"Paused":"Pause"),disabled:m||!d,onClick:function(){d&&(j(!1),x(!0),F())}}),Object(c.jsx)(h,{text:"Reset",onClick:function(){M(),j(!1),x(!1),C(!1),H(0)}})]})}),k=a(19),y=a.n(k),E=(a(52),function(e){var t=e.sectionData;return Object(c.jsx)(y.a,{className:"scroll-spy-thief",items:t.map((function(e){return e.item})),currentClassName:"isCurrent",children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("a",{href:e.href,children:[Object(c.jsx)("div",{className:"dot"}),Object(c.jsx)("div",{className:"dot-text",children:e.title})]})},e.href)}))})}),H=(a(53),[{title:"Breathing",href:"#section-breathing",item:"section-breation"},{title:"Breath-Hold",href:"#section-breath-hold",item:"section-breath-hold"}]),w=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(E,{sectionData:H}),Object(c.jsxs)("div",{className:"breathing-controller",children:[Object(c.jsx)("section",{id:"section-breathing",children:Object(c.jsx)(C,{setRunBreathing:s})}),Object(c.jsx)("div",{className:"separator"}),Object(c.jsx)("section",{id:"section-breath-hold",children:Object(c.jsx)(v,{runBreathing:a})})]})]})},_=(a(54),a(20)),P=a(23),V=(a(56),function(e){var t=e.number,a=e.setNumber,n=e.minVal,s=void 0===n?10:n,r=e.maxVal,i=void 0===r?20:r,o=e.step,l=void 0===o?1:o,b=e.className,d=Object(u.a)(e,["number","setNumber","minVal","maxVal","step","className"]);return Object(c.jsx)(P.a,Object(j.a)({className:"number-chooser ".concat(b),min:s,max:i,step:l,value:t,onChange:a,enableMobileNumericKeyboard:!0},d))}),M=(a(63),function(e){var t=e.round,a=e.checked,n=e.className,s=Object(u.a)(e,["round","checked","className"]);return Object(c.jsx)("div",{className:"normal-toggle-button",children:Object(c.jsxs)("label",{className:"switch ".concat(n),children:[Object(c.jsx)("input",Object(j.a)(Object(j.a)({type:"checkbox",checked:a},s),{},{readOnly:!0})),Object(c.jsx)("span",{className:"slider ".concat(t?"round":"")})]})})}),F=(a(64),function(e){var t=e.open,a=e.onCloseModal,s=Object(n.useContext)(g),r=s.maxBreath,i=s.setMaxBreath,o=s.shouldStartBreathHold,l=s.setShouldStartBreathHold,b=s.pingEveryNthSecond,d=s.setPingEveryNthSecond;return Object(c.jsx)("div",{className:"breath-config-modal-wrapper",children:Object(c.jsxs)(_.a,{open:t,onClose:a,center:!0,children:[Object(c.jsx)("h2",{children:"Configuration"}),Object(c.jsx)("div",{className:"breath-modal-divider"}),Object(c.jsx)("h3",{children:"Guided Breathing"}),Object(c.jsxs)("div",{className:"breath-modal-max-breath",children:[Object(c.jsx)("label",{children:"Max breath"}),Object(c.jsx)(V,{className:"max-breath-counter",number:r,minVal:10,maxVal:1e3,setNumber:i})]}),Object(c.jsxs)("div",{className:"breath-modal-auto-start-breath-hold",children:[Object(c.jsx)("label",{children:"Auto start breathhold"}),Object(c.jsx)(M,{className:"auto-start-check",checked:o,onClick:function(){return l(!o)}})]}),Object(c.jsx)("h3",{children:"Guided Breath-hold"}),Object(c.jsxs)("div",{className:"breath-modal-ping-every-nth",children:[Object(c.jsx)("label",{children:"Ping every nth second"}),Object(c.jsx)(V,{className:"ping-breath-counter",number:b,minVal:1,maxVal:59,setNumber:d})]})]})})}),I=(a(65),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("header",{className:"app-header",children:Object(c.jsx)("img",{className:"header-icon",src:l,onClick:function(){return s(!0)},alt:"logo"})}),Object(c.jsxs)(p,{children:[Object(c.jsx)(w,{}),Object(c.jsx)(F,{open:a,onCloseModal:function(){return s(!1)}})]})]})}),R=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,68)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),R()}},[[66,1,2]]]);
//# sourceMappingURL=main.4dbc3443.chunk.js.map