(this["webpackJsonpgallery-srch"]=this["webpackJsonpgallery-srch"]||[]).push([[0],{120:function(e,t,n){},414:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(12),s=n.n(r),i=(n(120),n(118)),o=n.n(i),l=n(194),j=n(45),u=n(195),h=n.n(u),b=n(196),m=n(119),d=n(24),g=n.n(d),O=n(197),p=n.n(O),x=n(30),f=n.n(x),v=n(44),y=n.n(v),C=n(11);var k=function(e){var t;e=e.images;var n=Object(c.useState)(!1),a=Object(j.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),o=Object(j.a)(i,2),l=o[0],u=o[1],h=4;document.documentElement.clientWidth<=700&&(h=3),document.documentElement.clientWidth<=550&&(h=2);var d=function(e){s(!0),u(e)},O=function(){s(!1)};t=e?Object(C.jsx)(m.a,{cols:h,cellHeight:250,style:{margin:"0.7rem"},children:e.map((function(e){return Object(C.jsx)(m.b,{className:"tiles",title:e.tags,actionIcon:Object(C.jsx)(g.a,{onClick:function(){return d(e.largeImageURL)},children:Object(C.jsx)(p.a,{color:"white"})}),style:{margin:"0.2rem"},onClick:function(){return d(e.largeImageURL)},children:Object(C.jsx)("img",{src:e.largeImageURL,alt:""})},e.id)}))}):null;var x=[Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(f.a,{label:"Download",primary:!0,onClick:function(){Object(b.saveAs)(l,"image.jpg")}}),Object(C.jsx)(f.a,{label:"Close",primary:!0,onClick:O})]})];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[t,Object(C.jsx)(y.a,{actions:x,modal:!1,open:r,onRequestClose:O,children:Object(C.jsx)("img",{src:l,style:{width:"100%"}})})]}),Object(C.jsx)("div",{className:"footer",children:"--- By- Zoheb---"})]})};var S=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r="23724243-936dd0473b3ef969f2edd5ac7",s=Object(c.useState)([]),i=Object(j.a)(s,2),u=i[0],b=i[1],m=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t.target.value);case 2:h.a.get("https://pixabay.com/api/?key=".concat(r,"&q=").concat(t.target.value,"&image_type=photo")).then((function(e){b(e.data.hits)})).catch((function(e){return console.log(e)})),"https://pixabay.com/api/?key=".concat(r,"&q=").concat(t.target.value,"&image_type=photo");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"cntr",children:[Object(C.jsx)("h1",{className:"heading",children:"Image Search App"}),Object(C.jsx)("input",{className:"searchbox",type:"text",placeholder:"Search for images",name:"searchText",value:n,onChange:m})]}),u.length>0?Object(C.jsx)(k,{images:u}):null]})},w=n(67),F=n.n(w);var I=function(){return Object(C.jsx)(F.a,{children:Object(C.jsx)(S,{})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,415)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(I,{})}),document.getElementById("root")),L()}},[[414,1,2]]]);
//# sourceMappingURL=main.8599167f.chunk.js.map