(this.webpackJsonpcronometer=this.webpackJsonpcronometer||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(7),a=n.n(c),i=n(5),l=n(2),o=n(0),j=function(e){var t=e.seconds,n=new Date(0,0,0,0,0,t),r=Object(i.a)(n.toLocaleTimeString("pt-BR")).filter((function(e){return":"!==e}));return Object(o.jsx)("section",{className:"cronometer__watcher",children:Object(o.jsx)("div",{className:"pointers",children:r.map((function(e,t){return Object(o.jsx)("div",{className:"pointers__pointer",children:e},t)}))})})},b=function(e){var t=e.timer,n=e.setTimer,r=e.seconds,s=e.setSeconds,c=e.appendSave;return Object(o.jsx)("div",{className:"cronometer__controllers",children:Object(o.jsxs)("ul",{className:"controllers",children:[Object(o.jsx)("li",{className:"controllers__list",children:Object(o.jsx)("button",{className:"controllers__button",onClick:function(){t?(clearInterval(t),n(null)):n(setInterval((function(){s((function(e){return e+1}))}),1e3))},children:t?"||":"\u25b6"})}),Object(o.jsx)("li",{className:"controllers__list",children:Object(o.jsx)("button",{className:"controllers__button",onClick:function(){return clearInterval(t),s(0),void n(null)},disabled:r<1,children:"\u25a0"})}),Object(o.jsx)("li",{className:"controllers__list",children:Object(o.jsx)("button",{className:"controllers__button",onClick:function(){return c()},children:"\ud83d\udce5"})})]})})},m=function(e){var t=e.history,n=e.setHistory,r=s.a.useState({animationPlayState:"running, paused"}),c=Object(l.a)(r,2),a=c[0],i=c[1];if(!t.length)return null;return Object(o.jsxs)("section",{className:"history",style:a,children:[Object(o.jsx)("button",{onClick:function(){i({animationPlayState:"running, running"}),setTimeout((function(){localStorage.removeItem("history"),n([]),i({animationPlayState:"running, paused"})}),1200)},className:"history__clean",children:"Clear"}),Object(o.jsx)("ul",{className:"history__list",children:t.map((function(e,t){return Object(o.jsxs)("li",{className:"history__item",children:[Object(o.jsxs)("header",{className:"history__datetime",children:[Object(o.jsx)("h1",{className:"history__date",children:e[1].date}),Object(o.jsx)("h2",{className:"history__time",children:e[1].time})]}),Object(o.jsx)("section",{children:Object(o.jsx)("p",{className:"history__elapsed",children:e[0]})})]},t)}))})]})},u=function(){return Object(o.jsxs)("ul",{className:"footer",children:[Object(o.jsx)("li",{className:"footer__item",children:Object(o.jsx)("a",{className:"footer__link",href:"https://github.com/alvarogfn/",target:"_blank",rel:"noreferrer",children:"Developed by alvarogfn"})}),Object(o.jsx)("li",{className:"footer__item",children:Object(o.jsx)("a",{className:"footer__link",href:"https://pages.github.com/",target:"_blank",rel:"noreferrer",children:"Hosted by GitHub Pages"})}),Object(o.jsx)("li",{className:"footer__item",children:Object(o.jsx)("a",{className:"footer__link",href:"https://pt-br.reactjs.org/",target:"_blank",rel:"noreferrer",children:"Powered by React"})})]})},d=(n(13),function(){var e=s.a.useState(0),t=Object(l.a)(e,2),n=t[0],r=t[1],c=s.a.useState(null),a=Object(l.a)(c,2),d=a[0],h=a[1],_=s.a.useState((function(){var e=localStorage.getItem("history");return e?JSON.parse(e):[]})),O=Object(l.a)(_,2),f=O[0],x=O[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("main",{children:[Object(o.jsxs)("section",{className:"cronometer",children:[Object(o.jsx)(j,{seconds:n}),Object(o.jsx)(b,{timer:d,setTimer:h,seconds:n,setSeconds:r,appendSave:function(){var e=new Date(0,0,0,0,0,n);e=e.toLocaleTimeString("pt-BR");var t=new Date,r=t.toLocaleDateString("pt-BR"),s=t.toLocaleTimeString("pt-BR");x([[e,{date:r,time:s}]].concat(Object(i.a)(f))),localStorage.setItem("history",JSON.stringify(f))}})]}),Object(o.jsx)("section",{children:Object(o.jsx)(m,{history:f,setHistory:x})})]}),Object(o.jsx)("footer",{children:Object(o.jsx)(u,{})})]})});a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.83aa7831.chunk.js.map