(this.webpackJsonpwtsclone=this.webpackJsonpwtsclone||[]).push([[0],{63:function(e,c,s){},64:function(e,c,s){},90:function(e,c,s){"use strict";s.r(c);var t=s(2),a=s(0),n=s.n(a),j=s(15),i=s.n(j),r=(s(63),s(55)),b=s(30),d=(s(64),s.p+"static/media/hug.6441d4e7.jpg"),h=s(108),l=function(){return Object(t.jsxs)("div",{className:"sidebarChat",children:[Object(t.jsx)(h.a,{}),Object(t.jsxs)("div",{className:"sidebarChat-info",children:[Object(t.jsx)("h2",{children:"Room name"}),Object(t.jsx)("p",{children:"This is the last message"})]})]})},O=s(46),x=s.n(O),o=s(47),u=s.n(o),m=s(29),p=s.n(m),f=s(107),v=s(106),g=function(){return Object(t.jsxs)("div",{className:"sidebar",children:[Object(t.jsxs)("div",{className:"sidebar-header",children:[Object(t.jsx)(h.a,{src:d}),Object(t.jsxs)("div",{className:"sidebar-headerRight",children:[Object(t.jsx)(f.a,{children:Object(t.jsx)(x.a,{})}),Object(t.jsx)(f.a,{children:Object(t.jsx)(u.a,{})}),Object(t.jsx)(f.a,{children:Object(t.jsx)(p.a,{})})]})]}),Object(t.jsx)("div",{className:"sidebar-search",children:Object(t.jsxs)("div",{className:"sidebar-search-container",children:[Object(t.jsx)(v.a,{}),Object(t.jsx)("input",{placeholder:"Search",type:"text"})]})}),Object(t.jsxs)("div",{className:"sidebar-chats",children:[Object(t.jsx)(l,{}),Object(t.jsx)(l,{}),Object(t.jsx)(l,{}),Object(t.jsx)(l,{}),Object(t.jsx)(l,{}),Object(t.jsx)(l,{})]})]})},N=s(32),w=s.n(N),y=s(48),S=s(50),C=s.n(S),k=s(51),F=s.n(k),L=s(52),R=s.n(L),T=s(53),E=s.n(T),B=s(49),D=s.n(B).a.create({baseURL:"http://localhost:9000"}),I=function(e){var c=e.messages,s=Object(a.useState)(""),n=Object(b.a)(s,2),j=n[0],i=n[1],r=function(){var e=Object(y.a)(w.a.mark((function e(c){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,D.post("/message/new",{message:j,name:"faker",recieved:!0,timeStamp:"just now"});case 3:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();return Object(t.jsxs)("div",{className:"chat",children:[Object(t.jsxs)("div",{className:"chat-header",children:[Object(t.jsx)(h.a,{src:d}),Object(t.jsxs)("div",{className:"chat-header-info",children:[Object(t.jsx)("h3",{children:"Room Name"}),Object(t.jsx)("p",{children:"Last seen at..."})]}),Object(t.jsxs)("div",{className:"chat-header-right",children:[Object(t.jsx)(f.a,{children:Object(t.jsx)(C.a,{})}),Object(t.jsx)(f.a,{children:Object(t.jsx)(F.a,{})}),Object(t.jsx)(f.a,{children:Object(t.jsx)(p.a,{})})]})]}),Object(t.jsx)("div",{className:"chat-body",children:c.map((function(e){return Object(t.jsxs)("p",{className:"chat-message ".concat(e.recieved?"chat-reciever ":""),children:[Object(t.jsx)("span",{className:"chat-name",children:e.name}),e.message,Object(t.jsx)("span",{className:"chat-timestamp",children:e.timeStamp})]})}))}),Object(t.jsxs)("div",{className:"chat-footer",children:[Object(t.jsx)(f.a,{children:Object(t.jsx)(R.a,{})}),Object(t.jsxs)("form",{children:[Object(t.jsx)("input",{value:j,onChange:function(e){return i(e.target.value)},placeholder:"Type a message",type:"text"}),Object(t.jsx)("button",{type:"submit",onClick:r,children:"Send a message"})]}),Object(t.jsx)(f.a,{children:Object(t.jsx)(E.a,{})})]})]})},J=s(54),P=s.n(J);var M=function(){var e=Object(a.useState)([]),c=Object(b.a)(e,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){D.get("/message/sync").then((function(e){n(e.data)}))}),[]),Object(a.useEffect)((function(){var e=new P.a("ca6e88f9b5c52c3da7b2",{cluster:"ap1"}).subscribe("message");return e.bind("inserted",(function(e){n([].concat(Object(r.a)(s),[e]))})),function(){e.unbind_all(),e.unsubscribe()}}),[s]),console.log(s),Object(t.jsx)("div",{className:"app",children:Object(t.jsxs)("div",{className:"appbody",children:[Object(t.jsx)(g,{}),Object(t.jsx)(I,{messages:s})]})})},U=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,109)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,n=c.getLCP,j=c.getTTFB;s(e),t(e),a(e),n(e),j(e)}))};i.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(M,{})}),document.getElementById("root")),U()}},[[90,1,2]]]);
//# sourceMappingURL=main.d21b7e7f.chunk.js.map