"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[608],{310:function(e,n,t){t.d(n,{A:function(){return a}});var r,o=t(168),a=t(444).ZP.div(r||(r=(0,o.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 20px;\n  padding-top: 20px;\n"])))},139:function(e,n,t){t.d(n,{H:function(){return a}});var r,o=t(168),a=t(444).ZP.li(r||(r=(0,o.Z)(["\n&:hover { \nfont-weight: 700;}\n"])))},608:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,o,a,i=t(861),c=t(439),s=t(757),u=t.n(s),l=t(87),p=t(791),d=t(243),f=t(689),h=t(139),m=t(310),x=t(134),v=t(168),b=t(444),g=b.ZP.form(r||(r=(0,v.Z)(["\ndisplay: flex;\nalign-items: center;\ngap: 5px;\n"]))),Z=b.ZP.input(o||(o=(0,v.Z)(["\nwidth: 250px;\npadding: 5px 18px;\nborder-radius: 50px;\nborder: 1px solid #575756;\nfont-size: 14px;\n"]))),k=b.ZP.button(a||(a=(0,v.Z)(["\nborder-radius: 50%;\npadding: 4px 6px;\nborder: 1px solid #575756;\nbackground-color: #4a4d4b;\ncolor: white;\ncursor: pointer;\n\n&:hover {\n    background-color: #374151;\n}\n"]))),y=t(14),w=t(184),j=function(){var e,n=(0,p.useState)([]),t=(0,c.Z)(n,2),r=t[0],o=t[1],a=(0,l.lr)(),s=(0,c.Z)(a,2),v=s[0],b=s[1],j=null!==(e=v.get("query"))&&void 0!==e?e:"",P=(0,f.TH)();(0,p.useEffect)((function(){function e(){return e=(0,i.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.themoviedb.org/3/search/movie?","6bf6ef2ab5ece9f25b4bdae1dc149130",e.next=5,d.Z.get("".concat("https://api.themoviedb.org/3/search/movie?","api_key=").concat("6bf6ef2ab5ece9f25b4bdae1dc149130","&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 5:t=e.sent,o(t.data.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),e.apply(this,arguments)}""!==j&&function(n){e.apply(this,arguments)}(j)}),[j]),console.log(r);var _=r.filter((function(e){return e.title.toLowerCase().includes(j.toLowerCase())}));return(0,w.jsxs)(m.A,{children:[(0,w.jsxs)(g,{onSubmit:function(e){e.preventDefault();var n=e.currentTarget;if(""===n.elements.movieName.value)return y.ZP.error("Sorry, the search field is empty \ud83d\ude12");b({query:n.elements.movieName.value}),n.reset()},children:[(0,w.jsx)(Z,{type:"text",name:"movieName",placeholder:"Search movie..."}),(0,w.jsx)(k,{type:"submit",children:(0,w.jsx)(x.RB5,{size:"17"})})]}),(0,w.jsx)("ul",{children:_.map((function(e){return(0,w.jsx)(h.H,{children:(0,w.jsx)(l.rU,{to:"".concat(e.id),state:{from:P},style:{color:"black",textDecoration:"none"},children:e.title})},e.id)}))}),(0,w.jsx)(y.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=608.21d695a6.chunk.js.map