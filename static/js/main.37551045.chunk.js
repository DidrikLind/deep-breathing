(this["webpackJsonpdeep-breating"]=this["webpackJsonpdeep-breating"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),i=a(9),s=a.n(i),o=(a(30),a(3)),l=a.p+"static/media/breath_icon.9f23d969.svg",d=a(6),b=a(18),h=a(2),u=a(5),j=(a(31),function(e){var t=e.text,a=e.onClick,c=e.className,r=Object(u.a)(e,["text","onClick","className"]);return Object(n.jsx)("button",Object(h.a)(Object(h.a)({className:"normal-button ".concat(c),onClick:a},r),{},{children:t}))}),m=a.p+"static/media/heart.8e99651c.svg",O=a.p+"static/media/bell_sound.c679b23d.mp3",f=a.p+"static/media/audio_fe4d3bcac9.a379b9b0.mp3",x={breathing:{maxBreath:40,shouldStartBreathHold:!1,startBreathHoldTime:8},breathHold:{pingEveryNthSecond:30}},g=r.a.createContext(x),v=function(e){var t=e.children,a=function(e,t){var a=Object(c.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),n=Object(o.a)(a,2),r=n[0],i=n[1];return[r,function(t){try{var a=t instanceof Function?t(r):t;i(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("breathConfig",x),r=Object(o.a)(a,2),i=r[0],s=r[1];return Object(n.jsx)(g.Provider,{value:{maxBreath:i.breathing.maxBreath,setMaxBreath:function(e){return s(Object(h.a)(Object(h.a)({},i),{},{breathing:Object(h.a)(Object(h.a)({},i.breathing),{},{maxBreath:e})}))},shouldStartBreathHold:i.breathing.shouldStartBreathHold,setShouldStartBreathHold:function(e){return s(Object(h.a)(Object(h.a)({},i),{},{breathing:Object(h.a)(Object(h.a)({},i.breathing),{},{shouldStartBreathHold:e})}))},pingEveryNthSecond:i.breathHold.pingEveryNthSecond,setPingEveryNthSecond:function(e){return s(Object(h.a)(Object(h.a)({},i),{},{breathHold:Object(h.a)(Object(h.a)({},i.breathHold),{},{pingEveryNthSecond:e})}))},startBreathHoldTime:i.breathing.startBreathHoldTime,setStartBreathHoldTime:function(e){return s(Object(h.a)(Object(h.a)({},i),{},{breathing:Object(h.a)(Object(h.a)({},i.breathing),{},{startBreathHoldTime:e})}))}},children:t})},p=(a(32),function(e){var t=e.runBreathing,a=Object(c.useContext)(g).pingEveryNthSecond,r=Object(c.useState)(!1),i=Object(o.a)(r,2),s=i[0],l=i[1],h=Object(d.a)(O),u=Object(o.a)(h,1)[0],x=Object(d.a)(f,{loop:!0}),v=Object(o.a)(x,2),p=v[0],N=v[1],S=N.stop,B=N.pause,w=Object(b.useStopwatch)({autoStart:!1}),k=w.seconds,C=w.minutes,y=w.hours,H=w.isRunning,E=w.start,T=w.pause,P=w.reset,_=function(){H||(E(),s&&l(!1),u(),p())};return Object(c.useEffect)((function(){t&&!H&&(P(),_())}),[t]),Object(c.useEffect)((function(){H&&0!==k&&k%a===0&&u()}),[k]),Object(n.jsxs)("div",{className:"guided-breath-hold",children:[Object(n.jsx)("h1",{className:"guided-breath-hold-title",children:"Guided Breath-hold"}),Object(n.jsx)("div",{className:"stop-watch",children:Object(n.jsxs)("div",{className:"watch-time-text",children:[Object(n.jsx)("span",{children:y}),":",Object(n.jsx)("span",{children:C}),":",Object(n.jsx)("span",{children:k})]})}),Object(n.jsx)("p",{children:Object(n.jsx)("img",{className:["heart-icon",H&&"heart-icon-animated"].join(" "),src:m,alt:"logo"})}),Object(n.jsx)(j,{className:"".concat(H?"active-button":""),text:"".concat(H?"Started":"Start"),disabled:H,onClick:function(){return _()}}),Object(n.jsx)(j,{className:"".concat(s?"active-button":""),text:"".concat(s?"Paused":"Pause"),disabled:s||!H,onClick:function(){H&&(T(),B(),l(!0))}}),Object(n.jsx)(j,{text:"Reset",disabled:!H&&!s,onClick:function(){(H||s)&&(P(),S(),l(!1))}})]})}),N=a.p+"static/media/zapsplat_human_male_deep_breathing_19843_2.2s.f91a10f9.mp3",S=a.p+"static/media/breathing_session_over.3e8fa907.mp3",B=a.p+"static/media/lungs.e926ca5b.svg",w=(a(33),function(e){var t=e.setRunBreathing,a=Object(c.useContext)(g),r=a.maxBreath,i=a.shouldStartBreathHold,s=a.startBreathHoldTime,l=Object(c.useState)(!1),b=Object(o.a)(l,2),h=b[0],u=b[1],m=Object(c.useState)(!1),O=Object(o.a)(m,2),f=O[0],x=O[1],v=Object(c.useState)(!1),p=Object(o.a)(v,2),w=p[0],k=p[1],C=Object(c.useState)(0),y=Object(o.a)(C,2),H=y[0],E=y[1],T=Object(d.a)(N,{loop:!0}),P=Object(o.a)(T,2),_=P[0],V=P[1],W=V.stop,F=V.pause,M=Object(d.a)(S,{volume:1}),I=Object(o.a)(M,1)[0];return Object(c.useEffect)((function(){if(h){var e=H>0&&setInterval((function(){return E(H+1)}),2200);return function(){return clearInterval(e)}}}),[H]),Object(c.useEffect)((function(){w&&(I(),setTimeout((function(){return W()}),1e3),i&&(document.querySelector('a[href$="section-breath-hold"]').click(),setTimeout((function(){return t(!0)}),1e3*s)))}),[w]),h&&H>=r&&(k(!0),u(!1)),Object(n.jsxs)("div",{className:"guided-breathing",children:[Object(n.jsx)("h1",{className:"guided-breathing-title",children:"Guided Breathing"}),Object(n.jsxs)("h2",{className:"guided-breathing-counter",children:[H," / ",r]}),Object(n.jsx)("p",{children:Object(n.jsx)("img",{className:["lung-icon",h&&"lung-icon-animated"].join(" "),src:B,alt:"logo"})}),Object(n.jsx)(j,{className:"".concat(h?"active-button":""),text:"".concat(h?"Started":"Start"),disabled:h,onClick:function(){h||(k(!1),u(!0),E(f?H+1:1),x(!1),t(!1),_())}}),Object(n.jsx)(j,{className:"".concat(f?"active-button":""),text:"".concat(f?"Paused":"Pause"),disabled:f||!h,onClick:function(){h&&(u(!1),x(!0),F())}}),Object(n.jsx)(j,{text:"Reset",onClick:function(){W(),u(!1),x(!1),k(!1),E(0)}})]})}),k=a(19),C=a.n(k),y=(a(52),function(e){var t=e.sectionData;return Object(n.jsx)(C.a,{className:"scroll-spy-thief",items:t.map((function(e){return e.item})),currentClassName:"isCurrent",children:t.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:e.href,children:[Object(n.jsx)("div",{className:"dot"}),Object(n.jsx)("div",{className:"dot-text",children:e.title})]})},e.href)}))})}),H=(a(53),[{title:"Breathing",href:"#section-breathing",item:"section-breation"},{title:"Breath-Hold",href:"#section-breath-hold",item:"section-breath-hold"}]),E=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(y,{sectionData:H}),Object(n.jsxs)("div",{className:"breathing-controller",children:[Object(n.jsx)("section",{id:"section-breathing",children:Object(n.jsx)(w,{setRunBreathing:r})}),Object(n.jsx)("div",{className:"separator"}),Object(n.jsx)("section",{id:"section-breath-hold",children:Object(n.jsx)(p,{runBreathing:a})})]})]})},T=(a(54),a(20)),P=a(23),_=(a(56),function(e){var t=e.number,a=e.setNumber,c=e.minVal,r=void 0===c?10:c,i=e.maxVal,s=void 0===i?20:i,o=e.step,l=void 0===o?1:o,d=e.className,b=Object(u.a)(e,["number","setNumber","minVal","maxVal","step","className"]);return Object(n.jsx)(P.a,Object(h.a)({className:"number-chooser ".concat(d),min:r,max:s,step:l,value:t,onChange:a,enableMobileNumericKeyboard:!0},b))}),V=(a(63),function(e){var t=e.round,a=e.checked,c=e.className,r=Object(u.a)(e,["round","checked","className"]);return Object(n.jsx)("div",{className:"normal-toggle-button",children:Object(n.jsxs)("label",{className:"switch ".concat(c),children:[Object(n.jsx)("input",Object(h.a)(Object(h.a)({type:"checkbox",checked:a},r),{},{readOnly:!0})),Object(n.jsx)("span",{className:"slider ".concat(t?"round":"")})]})})}),W=(a(64),function(e){var t=e.open,a=e.onCloseModal,r=Object(c.useContext)(g),i=r.maxBreath,s=r.setMaxBreath,o=r.shouldStartBreathHold,l=r.setShouldStartBreathHold,d=r.pingEveryNthSecond,b=r.setPingEveryNthSecond,h=r.startBreathHoldTime,u=r.setStartBreathHoldTime;return Object(n.jsx)("div",{className:"breath-config-modal-wrapper",children:Object(n.jsxs)(T.a,{open:t,onClose:a,center:!0,children:[Object(n.jsx)("h2",{children:"Configuration"}),Object(n.jsx)("div",{className:"breath-modal-divider"}),Object(n.jsx)("h3",{children:"Guided Breathing"}),Object(n.jsxs)("div",{className:"breath-modal-max-breath",children:[Object(n.jsx)("label",{children:"Max breath"}),Object(n.jsx)(_,{className:"max-breath-counter",number:i,minVal:10,maxVal:1e3,setNumber:s})]}),Object(n.jsxs)("div",{className:"breath-modal-auto-start-breath-hold",children:[Object(n.jsx)("label",{children:"Auto start breathhold"}),Object(n.jsx)(V,{className:"auto-start-check",checked:o,onClick:function(){return l(!o)}}),o&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{children:"Auto start time"}),Object(n.jsx)(_,{className:"max-breath-counter",number:h,minVal:0,maxVal:100,setNumber:u}),"s"]})]}),Object(n.jsx)("h3",{children:"Guided Breath-hold"}),Object(n.jsxs)("div",{className:"breath-modal-ping-every-nth",children:[Object(n.jsx)("label",{children:"Ping every nth second"}),Object(n.jsx)(_,{className:"ping-breath-counter",number:d,minVal:1,maxVal:59,setNumber:b})]})]})})}),F=(a(65),function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("header",{className:"app-header",children:Object(n.jsx)("img",{className:"header-icon",src:l,onClick:function(){return r(!0)},alt:"logo"})}),Object(n.jsxs)(v,{children:[Object(n.jsx)(E,{}),Object(n.jsx)(W,{open:a,onCloseModal:function(){return r(!1)}})]})]})}),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/deep-breathing",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/deep-breathing","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):I(t,e)}))}}(),R()}},[[66,1,2]]]);
//# sourceMappingURL=main.37551045.chunk.js.map