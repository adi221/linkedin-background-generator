(this["webpackJsonplinkedin-background-generate"]=this["webpackJsonplinkedin-background-generate"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(16),a=n.n(r),o=n(6),s=(n(101),n(5)),i=(n(102),n(10)),l=(n(103),n(56)),d=n.n(l),u=n(84),j="GET_ALL_ICONS_REQUEST",b="GET_ALL_ICONS_SUCCESS",O="GET_ALL_ICONS_FAIL",p="ADD_ICON_TO_PRODUCT",h="UPDATE_BG_COLOR",f="SET_ICONS",v="LIST_UPLOADED_ICONS",g="UPDATE_FILTERED_ICONS",m="SET_ALERT",x="PRODUCT_SETTINGS_UPDATE",y="PRODUCT_SETTINGS_IS_COLOR",_="PRODUCT_SETTINGS_SEARCH",N=function(e){return{type:f,payload:e}},I=function(e){return{type:m,payload:e}},S=n(2),C=function(e){var t=e.downloadRef,n=Object(c.useState)(!1),r=Object(i.a)(n,2),a=r[0],l=r[1],d=Object(c.useState)(null),u=Object(i.a)(d,2),j=u[0],b=u[1],O=Object(c.useState)(!1),p=Object(i.a)(O,2),h=p[0],f=p[1],v=Object(c.useState)(!1),g=Object(i.a)(v,2),m=g[0],x=g[1],y=Object(c.useState)(!1),_=Object(i.a)(y,2),I=_[0],C=_[1],w=Object(o.b)(),D=Object(o.c)((function(e){return e.product})).productIcons,k=Object(o.c)((function(e){return e.productSettings})).bgColor,T=function(e){f(!0),b(e.currentTarget.id)},E=function(e){if(f(!1),"trash"!==e.currentTarget.id){var t=D.find((function(e){return e.id===+j})),n=D.find((function(t){return t.id===+e.currentTarget.id})),c=t.order,r=n.order,a=D.map((function(t){return t.id===+j&&(t.order=r),t.id===+e.currentTarget.id&&(t.order=c),t}));w(N(a))}else{var o=D.filter((function(e){return e.id!==+j}));w(N(o))}},L=function(e){e.preventDefault(),l(!0)},U=function(e){e.preventDefault(),f(!1)},V=function(e){l(!0),I||x(!0)};return Object(c.useEffect)((function(){var e;return m&&(C(!0),e=setTimeout((function(){return x(!1)}),1500)),function(){return clearTimeout(e)}}),[m]),Object(S.jsxs)(S.Fragment,{children:[m?Object(S.jsx)(M,{type:"info",children:"Use Drap and Drop to Delete and Reorder Icons"}):null,Object(S.jsxs)("div",{className:"product",children:[h&&Object(S.jsx)("button",{className:"product__delete",id:"trash",draggable:!0,onDrop:E,onDragOver:function(e){return e.preventDefault()},onDragEnter:function(e){l(!0)},onDragLeave:function(e){setTimeout((function(){return l(!1)}),1e3)},children:Object(S.jsxs)("div",{className:"trash-box ".concat(a?"hovered":""),children:[Object(S.jsx)("div",{className:"trash-top"}),Object(S.jsx)("div",{className:"trash-btm",children:Object(S.jsxs)("div",{className:"trash-lines",children:[Object(S.jsx)("div",{className:"trash-line"}),Object(S.jsx)("div",{className:"trash-line"})]})})]})}),Object(S.jsx)("div",{className:"product__banner",ref:t,id:"banner",style:{background:"radial-gradient(".concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return"#"+e.replace(/^#/,"").replace(/../g,(function(e){return("0"+Math.min(255,Math.max(0,parseInt(e,16)+t)).toString(16)).substr(-2)}))}(k)," 5%, ").concat(k," 100%)")},children:D.length>0?D.sort((function(e,t){return e.order-t.order})).map((function(e){return Object(S.jsx)(R,Object(s.a)(Object(s.a)({},e),{},{handleDrag:T,handleDrop:E,handleDragOver:L,handleDragEnd:U,handleMouseEnter:V,isHovered:h||a}),e.id)})):Object(S.jsx)("h3",{children:"Add Icons From The List :)"})})]})]})},w=(n(106),function(){var e=Object(o.c)((function(e){return e.product})),t=e.filteredIcons,n=e.loading,r=e.error,a=Object(o.c)((function(e){return e.productSettings})).searchQuery,i=Object(o.b)();return Object(c.useEffect)((function(){var e;i((e="https://raw.githubusercontent.com/devicons/devicon/master/icomoon.json",function(){var t=Object(u.a)(d.a.mark((function t(n){var c,r,a,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:j}),t.next=4,fetch(e);case 4:return c=t.sent,t.next=7,c.json();case 7:r=t.sent,a=r.icons,console.log(a),o=a.map((function(e){var t=e.properties;return{id:t.id,name:t.name}})),n({type:b,payload:o}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),n({type:O,payload:t.t0.message});case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()))}),[i]),Object(S.jsxs)("div",{className:"icons-container",children:[n&&Object(S.jsx)(J,{}),r&&Object(S.jsx)(M,{type:"danger",children:"Unexpected error, please try again"}),0===t.length&&a&&Object(S.jsxs)(M,{type:"info",children:["No search results for ",a]}),t.map((function(e){return Object(S.jsx)(D,Object(s.a)({},e),e.id)}))]})}),D=(n(107),function(e){var t=e.id,n=e.name,c=Object(o.b)(),r=Object(o.c)((function(e){return e.productSettings})).showColoredIcons;return Object(S.jsxs)("div",{className:"single-icon",onClick:function(){return c((e={id:t,name:n},function(t,n){var c=e.id,r=e.name,a=n().product.productIcons;if(5!==a.length)if(a.find((function(e){return e.id===c})))t(I({show:!0,msg:"Icon was already selected"}));else{var o={id:c,name:r};o.order=a.length,t({type:p,payload:o})}else t(I({show:!0,msg:"Until 5 Icons. You can delete and reorder icons with Drag & Drop."}))}));var e},children:[Object(S.jsx)("i",{className:"single-icon devicon-".concat(n," ").concat(r&&"colored"," ")}),Object(S.jsx)("p",{children:n.split("-")[0]})]})}),k=(n(108),n(93)),T=function(e){return{type:h,payload:e}},E=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(o.b)(),s=Object(o.c)((function(e){return e.productSettings})).bgColor;return Object(S.jsxs)("div",{className:"color-picker",children:[Object(S.jsx)(H,{text:"Background color"}),Object(S.jsxs)("div",{className:"color-picker__control",children:[Object(S.jsx)("div",{className:"color-picker__control-btn",style:{backgroundColor:s},onClick:function(){return r(!n)}}),Object(S.jsx)("input",{type:"text",value:s,onChange:function(e){return a(T(e.target.value))}})]}),n&&Object(S.jsx)("div",{className:"color-picker__container",children:Object(S.jsx)(k.a,{color:s,onChangeComplete:function(e){return a(T(e.hex))}})})]})},R=(n(215),function(e){var t=e.name,n=e.id,c=e.handleDrag,r=e.handleDrop,a=e.handleDragOver,s=e.handleDragEnd,i=e.handleMouseEnter,l=e.isHovered,d=Object(o.c)((function(e){return e.productSettings})),u=d.size,j=d.space,b=d.showColoredIcons,O={fontSize:"".concat(u.currentVal,"px"),marginLeft:"".concat(j.currentVal,"px"),marginRight:"".concat(j.currentVal,"px")};return Object(S.jsx)("div",{className:"single-product-icon ".concat(l&&"shake"),draggable:!0,id:n,onDragOver:a,onDragStart:c,onDrop:r,onDragEnd:s,onMouseEnter:i,style:O,children:Object(S.jsx)("i",{className:"single-product-icon devicon-".concat(t," ").concat(b&&"colored"," ")})})}),L=n(89),U=n.n(L),V=(n(216),n(21)),A=n(90),G=function(e){var t=e.downloadRef,n=Object(c.useState)(".png"),r=Object(i.a)(n,2),o=r[0],l=r[1],d={scale:4},u={fileName:"linkedinbanner.png",type:"image/png",html2CanvasOptions:Object(s.a)({},d)},j={fileName:"linkedinbanner.jpg",type:"image/jpeg",html2CanvasOptions:Object(s.a)({},d)},b=function(e,t){var n=t.fileName,c=t.type,r=t.html2CanvasOptions,o=a.a.findDOMNode(e.current);return U()(o,Object(s.a)({scrollY:-window.scrollY,useCORS:!0},r)).then((function(e){!function(e,t){var n=document.createElement("a");"string"===typeof n.download?(n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)):window.open(e)}(e.toDataURL(c,1),n)}))};return Object(S.jsxs)("div",{className:"download",id:"banner2",children:[Object(S.jsxs)("button",{className:"download__button",onClick:function(){b(t,".png"===o?Object(s.a)({},u):Object(s.a)({},j))},children:["Download",Object(S.jsx)(V.a,{})]}),Object(S.jsxs)("button",{className:"download__type",onClick:function(){l((function(e){return".png"===e?".jpg":".png"}))},children:[o," ",Object(S.jsx)(A.a,{})]})]})},P=(n(217),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.alert})).alert,n=t.show,r=t.msg;return Object(c.useEffect)((function(){var t=setTimeout((function(){return e({type:m,payload:{show:!1,msg:""}})}),2e3);return function(){return clearTimeout(t)}})),n?Object(S.jsx)("div",{className:"alerts",children:Object(S.jsx)("div",{className:"alerts__alert",children:r})}):null}),z=(n(218),function(e){var t=e.type,n=e.children;return Object(S.jsx)("p",{className:"message ".concat(t),children:n})});z.defaultProps={type:"info"};var M=z,F=(n(219),function(e){var t=e.minVal,n=e.maxVal,c=e.currentVal,r=e.name,a=e.title,s=Object(o.b)();return Object(S.jsxs)("div",{className:"range-slider",children:[Object(S.jsx)(H,{text:a}),Object(S.jsx)("div",{className:"range-slider__container",children:Object(S.jsx)("input",{type:"range",name:r,min:t,max:n,value:c,onChange:function(e){var t=+e.target.value;s({type:x,payload:{value:t,name:r}})}})})]})}),Q=(n(220),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.productSettings})).showColoredIcons;return Object(S.jsxs)("div",{className:"checkbox",children:[Object(S.jsx)(H,{text:"Icon color"}),Object(S.jsxs)("div",{className:"checkbox__container",children:[Object(S.jsx)("input",{type:"checkbox",id:"coloredIcons",className:"checkbox__input",checked:t,onChange:function(t){e({type:y,payload:t.target.checked})}}),Object(S.jsx)("label",{htmlFor:"coloredIcons",children:"Colored Icons"})]})]})}),B=(n(221),function(){var e=Object(o.c)((function(e){return e.productSettings})).searchQuery,t=Object(o.b)();return Object(S.jsxs)("div",{className:"searchbar",children:[Object(S.jsx)(H,{text:"Search icon"}),Object(S.jsx)("input",{type:"text",className:"searchbar__input",value:e,onChange:function(e){return t((n=e.target.value,function(e,t){e({type:_,payload:n});var c=t().product.allIcons;if(""===n)return e({type:g,payload:c});var r=c.filter((function(e){return e.name.startsWith(n)}));e({type:g,payload:r})}));var n},placeholder:"Search.."})]})}),H=(n(222),function(e){var t=e.text;return Object(S.jsx)("h5",{className:"settings-title ",children:t})}),J=(n(223),function(){return Object(S.jsx)("div",{className:"loader",children:Object(S.jsx)("div",{className:"loadingio-spinner-atom-c0scezfuou7",children:Object(S.jsx)("div",{className:"ldio-1a8zae19lw6",children:Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:Object(S.jsx)("div",{})}),Object(S.jsx)("div",{children:Object(S.jsx)("div",{})}),Object(S.jsx)("div",{children:Object(S.jsx)("div",{})})]})]})})})})});var Y=function(){var e=Object(c.useRef)(),t=Object(o.c)((function(e){return e.productSettings})),n=t.size,r=t.space;return Object(S.jsxs)("div",{className:"app",children:[Object(S.jsxs)("div",{className:"app__left",children:[Object(S.jsxs)("h1",{children:["LinkedIn Background Generator ",Object(S.jsx)(V.c,{})]}),Object(S.jsxs)("div",{className:"app__left-container",children:[Object(S.jsx)(C,{downloadRef:e}),Object(S.jsxs)("div",{className:"app__left-container-settings",children:[Object(S.jsx)(E,{}),Object(S.jsx)(Q,{}),Object(S.jsx)(F,Object(s.a)({},n)),Object(S.jsx)(F,Object(s.a)({},r)),Object(S.jsx)(B,{})]}),Object(S.jsx)(G,{downloadRef:e})]}),Object(S.jsxs)("a",{href:"https://github.com/adi221/linkedin-background-generator",target:"_blank",rel:"noopener noreferrer",children:[Object(S.jsx)(V.b,{})," View on GitHub"]})]}),Object(S.jsx)("div",{className:"app__right",children:Object(S.jsx)(w,{})}),Object(S.jsx)(P,{})]})},W=n(22),q=n(91),K=n(92),X=n(17),Z=localStorage.getItem("uploadedIcons")?JSON.parse(localStorage.getItem("uploadedIcons")):[],$=n(32),ee={size:{name:"size",title:"Icon size",currentVal:45,minVal:35,maxVal:55},space:{name:"space",title:"Space between icons",currentVal:10,minVal:7,maxVal:13},showColoredIcons:!0,searchQuery:"",bgColor:"#434255"},te=[q.a],ne=Object(W.combineReducers)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{productIcons:[],allIcons:Object(X.a)(Z),filteredIcons:Object(X.a)(Z),loading:!1,error:!1,uploadedIcons:Z},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(s.a)(Object(s.a)({},e),{},{loading:!0});case b:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:!1,allIcons:t.payload,filteredIcons:t.payload});case O:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:t.payload});case p:return Object(s.a)(Object(s.a)({},e),{},{productIcons:[].concat(Object(X.a)(e.productIcons),[t.payload])});case f:return Object(s.a)(Object(s.a)({},e),{},{productIcons:t.payload});case v:return Object(s.a)(Object(s.a)({},e),{},{uploadedIcons:[].concat(Object(X.a)(e.uploadedIcons),[t.payload]),allIcons:[].concat(Object(X.a)(e.allIcons),[t.payload])});case g:return Object(s.a)(Object(s.a)({},e),{},{filteredIcons:t.payload});default:return Object(s.a)({},e)}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alert:{show:!1,msg:""}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n=t.payload,c=n.show,r=n.msg;return{alert:{show:c,msg:r}};default:return e}},productSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var n=t.payload,c=n.name,r=n.value;return Object(s.a)(Object(s.a)({},e),{},Object($.a)({},c,Object(s.a)(Object(s.a)({},e[c]),{},{currentVal:r})));case y:return Object(s.a)(Object(s.a)({},e),{},{showColoredIcons:t.payload});case _:return Object(s.a)(Object(s.a)({},e),{},{searchQuery:t.payload});case h:return Object(s.a)(Object(s.a)({},e),{},{bgColor:t.payload});default:return Object(s.a)({},e)}}}),ce=Object(W.createStore)(ne,Object(K.composeWithDevTools)(W.applyMiddleware.apply(void 0,te)));console.log(ce.getState());var re=ce;a.a.render(Object(S.jsx)(o.a,{store:re,children:Object(S.jsx)(Y,{})}),document.getElementById("root"))}},[[224,1,2]]]);
//# sourceMappingURL=main.ebb10af4.chunk.js.map