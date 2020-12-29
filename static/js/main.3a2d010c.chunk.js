(this["webpackJsonpdeep-breating"]=this["webpackJsonpdeep-breating"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),i=a(7),r=a.n(i),o=(a(27),a(3)),b=a(2),l=a.p+"static/media/breath_icon.9f23d969.svg",j=a(6),d=a.p+"static/media/zapsplat_human_male_deep_breathing_19843_2.2s.f91a10f9.mp3",u=a.p+"static/media/lungs.e926ca5b.svg",h=a(20),O=(a(28),function(e){var t=e.text,a=e.onClick,n=e.className,s=Object(h.a)(e,["text","onClick","className"]);return Object(c.jsx)("button",Object(o.a)(Object(o.a)({className:"normal-button ".concat(n),onClick:a},s),{},{children:t}))}),m=(a(29),function(){var e=Object(n.useContext)(w).maxBreath,t=Object(n.useState)(!1),a=Object(b.a)(t,2),s=a[0],i=a[1],r=Object(n.useState)(!1),o=Object(b.a)(r,2),l=o[0],h=o[1],m=Object(n.useState)(0),x=Object(b.a)(m,2),p=x[0],f=x[1],g=Object(j.a)(d,{loop:!0}),v=Object(b.a)(g,2),N=v[0],C=v[1].stop;return Object(n.useEffect)((function(){if(s){var e=p>0&&setInterval((function(){return f(p+1)}),2200);return function(){return clearInterval(e)}}}),[p]),p===e&&i(!1),Object(c.jsxs)("div",{className:"guided-breathing",children:[Object(c.jsx)("h1",{className:"guided-breathing-title",children:"Guided Breathing"}),Object(c.jsxs)("h2",{children:[p," / ",e]}),Object(c.jsx)("p",{children:Object(c.jsx)("img",{className:["lung-icon",s&&"lung-icon-animated"].join(" "),src:u,alt:"logo"})}),Object(c.jsx)(O,{className:"".concat(s?"active-button":""),text:"".concat(s?"Started":"Start"),disabled:s,onClick:function(){s||(i(!0),f(l?p+1:1),h(!1),N())}}),Object(c.jsx)(O,{className:"".concat(l?"active-button":""),text:"".concat(l?"Paused":"Pause"),disabled:l||!s,onClick:function(){s&&(i(!1),h(!0),C())}}),Object(c.jsx)(O,{text:"Reset",disabled:!s&&!l,onClick:function(){C(),i(!1),h(!1),f(0)}})]})}),x=a(15),p=a.p+"static/media/heart.8e99651c.svg",f=a.p+"static/media/bell_sound.c679b23d.mp3",g=a.p+"static/media/audio_fe4d3bcac9.a379b9b0.mp3",v=(a(30),function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],s=t[1],i=Object(j.a)(f),r=Object(b.a)(i,1)[0],o=Object(j.a)(g,{loop:!0}),l=Object(b.a)(o,2),d=l[0],u=l[1],h=u.stop,m=u.pause,v=Object(x.useStopwatch)({autoStart:!1}),N=v.seconds,C=v.minutes,S=v.hours,B=v.isRunning,k=v.start,w=v.pause,_=v.reset;return B&&0!==N&&N%30===0&&r(),Object(c.jsxs)("div",{className:"guided-breath-hold",children:[Object(c.jsx)("h1",{className:"guided-breath-hold-title",children:"Guided Breath-hold"}),Object(c.jsx)("div",{className:"stop-watch",children:Object(c.jsxs)("div",{className:"watch-time-text",children:[Object(c.jsx)("span",{children:S}),":",Object(c.jsx)("span",{children:C}),":",Object(c.jsx)("span",{children:N})]})}),Object(c.jsx)("p",{children:Object(c.jsx)("img",{className:["heart-icon",B&&"heart-icon-animated"].join(" "),src:p,alt:"logo"})}),Object(c.jsx)(O,{className:"".concat(B?"active-button":""),text:"".concat(B?"Started":"Start"),disabled:B,onClick:function(){B||(k(),a&&s(!1),r(),d())}}),Object(c.jsx)(O,{className:"".concat(a?"active-button":""),text:"".concat(a?"Paused":"Pause"),disabled:a||!B,onClick:function(){B&&(w(),m(),s(!0))}}),Object(c.jsx)(O,{text:"Reset",disabled:!B&&!a,onClick:function(){(B||a)&&(_(),h(),s(!1))}})]})}),N=(a(31),a(16)),C=a(19),S=(a(33),function(e){var t=e.number,a=e.setNumber,n=e.minVal,s=void 0===n?10:n,i=e.maxVal,r=void 0===i?20:i,o=e.step,b=void 0===o?1:o;return Object(c.jsx)(C.a,{className:"number-chooser",min:s,max:r,step:b,value:t,onChange:a,enableMobileNumericKeyboard:!0})}),B=(a(40),function(e){var t=e.open,a=e.onCloseModal,s=Object(n.useContext)(w),i=s.maxBreath,r=s.setMaxBreath;return Object(c.jsx)("div",{className:"breath-config-modal-wrapper",children:Object(c.jsxs)(N.a,{open:t,onClose:a,center:!0,children:[Object(c.jsx)("h2",{children:"Configuration"}),Object(c.jsx)("div",{className:"breath-modal-divider"}),Object(c.jsx)("h3",{children:"Guided Breathing"}),Object(c.jsx)("div",{className:"breath-modal-max-breath",children:Object(c.jsxs)("p",{children:["Max breath:",Object(c.jsx)(S,{number:i,minVal:10,maxVal:1e3,setNumber:r})]})}),Object(c.jsx)("h3",{children:"Guided Breath-hold"})]})})}),k=(a(41),{breathing:{maxBreath:40},breathHold:{}}),w=s.a.createContext(k);var _=function(){var e=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(c){return console.log(c),t}})),c=Object(b.a)(a,2),s=c[0],i=c[1];return[s,function(t){try{var a=t instanceof Function?t(s):t;i(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(c){console.log(c)}}]}("breathConfig",k),t=Object(b.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(!1),r=Object(b.a)(i,2),j=r[0],d=r[1];return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("header",{className:"app-header",children:Object(c.jsx)("img",{className:"header-icon",src:l,onClick:function(){d(!0)},alt:"logo"})}),Object(c.jsxs)(w.Provider,{value:{maxBreath:a.breathing.maxBreath,setMaxBreath:function(e){return s(Object(o.a)(Object(o.a)({},a),{},{breathing:Object(o.a)(Object(o.a)({},a.breathing),{},{maxBreath:e})}))}},children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{className:"separator"}),Object(c.jsx)(v,{}),Object(c.jsx)(B,{open:j,onCloseModal:function(){return d(!1)}})]})]})},M=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,44)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),M()}},[[42,1,2]]]);
//# sourceMappingURL=main.3a2d010c.chunk.js.map