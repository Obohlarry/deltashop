(this.webpackJsonpeccomerce=this.webpackJsonpeccomerce||[]).push([[0],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=a(6),l=a.n(o),u=a(10),s=a(9),m=a(197),p=a(20),d=a(14),f=a(84),b=a(178),h=a(179),E=a(180),g=a(182),v=a(183),y=a(56),j=a(181),x=a(76),k=a.n(x),O=a(13),w=a(173),C=a(17),S=Object(w.a)((function(e){return{appBar:Object(O.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(O.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(O.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(C.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(C.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(O.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),_=function(e){var t=e.totalItems,a=Object(n.useState)(null),c=Object(s.a)(a,2),i=c[0],o=c[1],l=S(),u=Object(d.g)(),m=Boolean(i),x=r.a.createElement(f.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:function(){return o(null)}},r.a.createElement(b.a,null,r.a.createElement(h.a,{component:p.b,to:"/cart","aria-label":"Show cart items",color:"inherit"},r.a.createElement(E.a,{badgeContent:t,color:"secondary"},r.a.createElement(j.a,null))),r.a.createElement("p",null,"Cart")));return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{position:"fixed",className:l.appBar,color:"inherit"},r.a.createElement(v.a,null,r.a.createElement(y.a,{component:p.b,to:"/",variant:"h5",className:l.title,color:"blue"},r.a.createElement("img",{src:k.a,alt:"commerce.js",height:"25px",className:l.image})," Delta Bay"),r.a.createElement("div",{className:l.grow}),"/"===u.pathname&&r.a.createElement("div",{className:l.button},r.a.createElement(h.a,{component:p.b,to:"/cart","aria-label":"Show cart items",color:"inherit"},r.a.createElement(E.a,{badgeContent:t,color:"secondary"},r.a.createElement(j.a,null)))))),x)},N=a(189),B=a(184),T=a(185),q=a(186),R=a(187),F=a(188),L=Object(w.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),A=function(e){var t=e.product,a=e.onAddToCart,n=L();return r.a.createElement(B.a,{className:n.root},r.a.createElement(T.a,{className:n.media,image:t.media.source,title:t.name}),r.a.createElement(q.a,null,r.a.createElement("div",{className:n.cardContent},r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},"$ ",t.price.formatted)),r.a.createElement(y.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary",component:"p"})),r.a.createElement(R.a,{disableSpacing:!0,className:n.cardActions},r.a.createElement(h.a,{"aria-label":"Add to Cart",onClick:function(){return a(t.id,1)}},r.a.createElement(F.a,null))))},D=Object(w.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),I=function(e){var t=e.products,a=e.onAddToCart,n=D();return t.length?r.a.createElement("main",{className:n.content},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(N.a,{container:!0,justify:"center",spacing:4},t.map((function(e){return r.a.createElement(N.a,{key:e.id,item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(A,{product:e,onAddToCart:a}))})))):r.a.createElement("p",null,"Loading...")},W=a(190),z=a(191),P=Object(w.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),G=function(e){var t=e.item,a=e.onUpdateCartQty,n=e.onRemoveFromCart,c=P(),i=function(e,t){return a(e,t)};return r.a.createElement(B.a,{className:"cart-item"},r.a.createElement(T.a,{image:t.media.source,alt:t.name,className:c.media}),r.a.createElement(q.a,{className:c.cardContent},r.a.createElement(y.a,{variant:"h4"},t.name),r.a.createElement(y.a,{variant:"h5"},t.line_total.formatted_with_symbol)),r.a.createElement(R.a,{className:c.cardActions},r.a.createElement("div",{className:c.buttons},r.a.createElement(W.a,{type:"button",size:"small",onClick:function(){return i(t.id,t.quantity-1)}},"-"),r.a.createElement(y.a,null,"\xa0",t.quantity,"\xa0"),r.a.createElement(W.a,{type:"button",size:"small",onClick:function(){return i(t.id,t.quantity+1)}},"+")),r.a.createElement(W.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return e=t.id,n(e);var e}},"Remove")))},M=Object(w.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(t={minWidth:"150px"},Object(O.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(O.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),Q=function(e){var t=e.cart,a=e.onUpdateCartQty,n=e.onRemoveFromCart,c=e.onEmptyCart,i=M(),o=function(){return c()};if(!t.line_items)return"Loading";return r.a.createElement(z.a,null,r.a.createElement("div",{className:i.toolbar}),r.a.createElement(y.a,{className:i.title,variant:"h3",gutterBottom:!0},"Your Shopping Cart"),t.line_items.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{container:!0,spacing:3},t.line_items.map((function(e){return r.a.createElement(N.a,{item:!0,xs:12,sm:4,key:e.id},r.a.createElement(G,{item:e,onUpdateCartQty:a,onRemoveFromCart:n}))}))),r.a.createElement("div",{className:i.cardDetails},r.a.createElement(y.a,{variant:"h4"},"Subtotal: ",t.subtotal.formatted_with_symbol),r.a.createElement("div",null,r.a.createElement(W.a,{className:i.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:o},"Empty cart"),r.a.createElement(W.a,{className:i.checkoutButton,component:p.b,to:"/checkout",size:"large",type:"button",variant:"contained",color:"primary"},"Checkout")))):r.a.createElement(y.a,{variant:"subtitle1"},"You have no items in your shopping cart,",r.a.createElement(p.b,{className:i.link,to:"/"},"start adding some"),"!"))},U=a(195),Y=a(196),Z=a(86),J=a(204),H=a(198),X=a(200),V=a(82),$=new(a.n(V).a)("pk_test_19661763baf3194382812193e2e539617b1870f41d8b9",!0),K=a(60),ee=a(203),te=a(199),ae=a(45),ne=a(201);var re=function(e){var t=e.name,a=e.label,n=e.required,c=Object(ae.d)().control;return r.a.createElement(N.a,{item:!0,xs:12,sm:6},r.a.createElement(ae.a,{as:ne.a,name:t,control:c,label:a,fullWidth:!0,required:n,error:!1}))},ce=function(e){var t=e.checkoutToken,a=e.test,c=Object(n.useState)([]),i=Object(s.a)(c,2),o=i[0],m=i[1],d=Object(n.useState)(""),f=Object(s.a)(d,2),h=f[0],E=f[1],g=Object(n.useState)([]),v=Object(s.a)(g,2),j=v[0],x=v[1],k=Object(n.useState)(""),O=Object(s.a)(k,2),w=O[0],C=O[1],S=Object(n.useState)([]),_=Object(s.a)(S,2),B=_[0],T=_[1],q=Object(n.useState)(""),R=Object(s.a)(q,2),F=R[0],L=R[1],A=Object(ae.c)(),D=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.services.localeListShippingCountries(t);case 2:a=e.sent,n=a.countries,m(n),E(Object.keys(n)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.services.localeListSubdivisions(t);case 2:a=e.sent,n=a.subdivisions,x(n),C(Object.keys(n)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n,r,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,$.checkout.getShippingOptions(t,{country:a,region:n});case 3:r=e.sent,T(r),L(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){D(t.id)}),[]),Object(n.useEffect)((function(){h&&I(h)}),[h]),Object(n.useEffect)((function(){w&&z(t.id,h,w)}),[w]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h6",gutterBottom:!0},"Shipping address"),r.a.createElement(ae.b,A,r.a.createElement("form",{onSubmit:A.handleSubmit((function(e){return a(Object(K.a)(Object(K.a)({},e),{},{shippingCountry:h,shippingSubdivision:w,shippingOption:F}))}))},r.a.createElement(N.a,{container:!0,spacing:3},r.a.createElement(re,{required:!0,name:"firstName",label:"First name"}),r.a.createElement(re,{required:!0,name:"lastName",label:"Last name"}),r.a.createElement(re,{required:!0,name:"address1",label:"Address line 1"}),r.a.createElement(re,{required:!0,name:"email",label:"Email"}),r.a.createElement(re,{required:!0,name:"city",label:"City"}),r.a.createElement(re,{required:!0,name:"zip",label:"Zip / Postal code"}),r.a.createElement(N.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,null,"Shipping Country"),r.a.createElement(te.a,{value:h,fullWidth:!0,onChange:function(e){return E(e.target.value)}},Object.entries(o).map((function(e){var t=Object(s.a)(e,2);return{id:t[0],label:t[1]}})).map((function(e){return r.a.createElement(b.a,{key:e.id,value:e.id},e.label)})))),r.a.createElement(N.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,null,"Shipping Subdivision"),r.a.createElement(te.a,{value:w,fullWidth:!0,onChange:function(e){return C(e.target.value)}},Object.entries(j).map((function(e){var t=Object(s.a)(e,2);return{id:t[0],label:t[1]}})).map((function(e){return r.a.createElement(b.a,{key:e.id,value:e.id},e.label)})))),r.a.createElement(N.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,null,"Shipping Options"),r.a.createElement(te.a,{value:F,fullWidth:!0,onChange:function(e){return L(e.target.value)}},B.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})).map((function(e){return r.a.createElement(b.a,{key:e.id,value:e.id},e.label)}))))),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(W.a,{component:p.b,variant:"outlined",to:"/cart"},"Back to Cart"),r.a.createElement(W.a,{type:"submit",variant:"contained",color:"primary"},"Next")))))},ie=a(50),oe=a(83),le=a(177),ue=a(142),se=a(194),me=function(e){var t=e.checkoutToken;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h6",gutterBottom:!0},"Order summary"),r.a.createElement(le.a,{disablePadding:!0},t.live.line_items.map((function(e){return r.a.createElement(ue.a,{style:{padding:"10px 0"},key:e.name},r.a.createElement(se.a,{primary:e.name,secondary:"Quantity: \u20a6{product.quantity}"}),r.a.createElement(y.a,{variant:"body2"},e.line_total.formatted_with_symbol))})),r.a.createElement(ue.a,{style:{padding:"10px 0"}},r.a.createElement(se.a,{primary:"Total"}),r.a.createElement(y.a,{variant:"subtitle1",style:{fontWeight:700}},t.live.subtotal.formatted_with_symbol))))},pe=Object(oe.a)("pk_test_51Hqmw9EnylLNWUqjZhGaG1ipWYADqMvDACswXeMX1ZYEe5PwGEh1xmtmJgYZkZMigJaROV3k5ZYPl22gBaWgJReS00xo3zab3y"),de=function(e){var t=e.checkoutToken,a=e.nextStep,n=e.backStep,c=e.shippingData,i=e.onCaptureCheckout,o=function(){var e=Object(u.a)(l.a.mark((function e(n,r,o){var u,s,m,p,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o&&r){e.next=3;break}return e.abrupt("return");case 3:return u=r.getElement(ie.CardElement),e.next=6,o.createPaymentMethod({type:"card",card:u});case 6:s=e.sent,m=s.error,p=s.paymentMethod,m?console.log("[error]",m):(d={line_items:t.live.line_items,customer:{firstname:c.firstName,lastname:c.lastName,email:c.email},shipping:{name:"International",street:c.address1,town_city:c.city,county_state:c.shippingSubdivision,postal_zip_code:c.zip,country:c.shippingCountry},fulfillment:{shipping_method:c.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:p.id}}},i(t.id,d),a());case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{checkoutToken:t}),r.a.createElement(U.a,null),r.a.createElement(y.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"}},"Payment method"),r.a.createElement(ie.Elements,{stripe:pe},r.a.createElement(ie.ElementsConsumer,null,(function(e){var a=e.elements,c=e.stripe;return r.a.createElement("form",{onSubmit:function(e){return o(e,a,c)}},r.a.createElement(ie.CardElement,null),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(W.a,{variant:"outlined",onClick:n},"Back"),r.a.createElement(W.a,{type:"submit",variant:"contained",disabled:!c,color:"primary"},"Pay ",t.live.subtotal.formatted_with_symbol)))}))))},fe=Object(w.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(O.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(O.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(O.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),be=["Shipping address","Payment details"],he=function(e){var t=e.cart,a=e.onCaptureCheckout,c=e.order,i=e.error,o=Object(n.useState)(null),f=Object(s.a)(o,2),b=f[0],h=f[1],E=Object(n.useState)(0),g=Object(s.a)(E,2),v=g[0],j=g[1],x=Object(n.useState)({}),k=Object(s.a)(x,2),O=k[0],w=k[1],C=fe(),S=Object(d.f)(),_=function(){return j((function(e){return e+1}))},N=function(){return j((function(e){return e-1}))};Object(n.useEffect)((function(){t.id&&function(){var e=Object(u.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.checkout.generateToken(t.id,{type:"cart"});case 3:a=e.sent,h(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v!==be.length&&S.push("/");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[t]);var B=function(e){w(e),_()},T=function(){return c.customer?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(y.a,{variant:"h5"},"Thank you for your purchase, ",c.customer.firstname," ",c.customer.lastname,"!"),r.a.createElement(U.a,{className:C.divider}),r.a.createElement(y.a,{variant:"subtitle2"},"Order ref: ",c.customer_reference)),r.a.createElement("br",null),r.a.createElement(W.a,{component:p.b,variant:"outlined",type:"button",to:"/"},"Back to home")):r.a.createElement("div",{className:C.spinner},r.a.createElement(Y.a,null))};i&&(T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h5"},"Error: ",i),r.a.createElement("br",null),r.a.createElement(W.a,{component:p.b,variant:"outlined",type:"button",to:"/"},"Back to home"))});var q=function(){return 0===v?r.a.createElement(ce,{checkoutToken:b,nextStep:_,setShippingData:w,test:B}):r.a.createElement(de,{checkoutToken:b,nextStep:_,backStep:N,shippingData:O,onCaptureCheckout:a})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null),r.a.createElement("div",{className:C.toolbar}),r.a.createElement("main",{className:C.layout},r.a.createElement(Z.a,{className:C.paper},r.a.createElement(y.a,{variant:"h4",align:"center"},"Checkout"),r.a.createElement(J.a,{activeStep:v,className:C.stepper},be.map((function(e){return r.a.createElement(H.a,{key:e},r.a.createElement(X.a,null,e))}))),v===be.length?r.a.createElement(T,null):b&&r.a.createElement(q,null))))},Ee=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),f=o[0],b=o[1],h=Object(n.useState)({}),E=Object(s.a)(h,2),g=E[0],v=E[1],y=Object(n.useState)({}),j=Object(s.a)(y,2),x=j[0],k=j[1],O=Object(n.useState)(""),w=Object(s.a)(O,2),C=w[0],S=w[1],N=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.products.list();case 2:t=e.sent,a=t.data,b(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,$.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.cart.add(t,a);case 2:n=e.sent,v(n.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.cart.update(t,{quantity:a});case 2:n=e.sent,v(n.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.cart.remove(t);case 2:a=e.sent,v(a.cart);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.cart.empty();case 2:t=e.sent,v(t.cart);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.cart.refresh();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.checkout.capture(t,a);case 3:n=e.sent,k(n),L(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),S(e.t0.data.error.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N(),B()}),[]);return r.a.createElement(p.a,null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(m.a,null),r.a.createElement(_,{totalItems:g.total_items,handleDrawerToggle:function(){return c(!a)}}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement(I,{products:f,onAddToCart:T,handleUpdateCartQty:!0})),r.a.createElement(d.a,{exact:!0,path:"/cart"},r.a.createElement(Q,{cart:g,onUpdateCartQty:q,onRemoveFromCart:R,onEmptyCart:F})),r.a.createElement(d.a,{path:"/checkout",exact:!0},r.a.createElement(he,{cart:g,order:x,onCaptureCheckout:A,error:C})))))};i.a.render(r.a.createElement(Ee,null),document.getElementById("root"))},76:function(e,t,a){e.exports=a.p+"static/media/commerce.d74b1274.png"},97:function(e,t,a){e.exports=a(141)}},[[97,1,2]]]);
//# sourceMappingURL=main.0577e4c1.chunk.js.map