(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,t,a){},63:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),r=a.n(s),l=(a(63),a(13)),i=a(10),o=a(14),j=a(1),d=function(){var e=Object(n.useContext)(A),t=e.state;e.dispatch;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(j.jsxs)(o.b,{className:"navbar-brand",to:"/",children:["MD IH ",Object(j.jsx)("span",{style:{color:"#5C7AEA"},children:"Alif"})," "]}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(j.jsx)("li",{className:"nav-item active",children:Object(j.jsxs)(o.b,{className:"nav-link",to:"/",children:["Home ",Object(j.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link",to:"/about",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link",to:"/contact",children:"Contact"})}),t?null:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link",to:"/login",children:"SignIn"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link",to:"/signup",children:"SignUp"})})]}),t?Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link",to:"/signout",children:"SignOut"})}):null]})})]})})},b=a(12),m=a.n(b),u=a(16),h=(a(48),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/getdata",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,c(a.name),200===t.status){e.next=10;break}throw new Error(t.error);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),c("");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("p",{children:" WELCOME "}),Object(j.jsxs)("h1",{children:[" ",a||"We Are The MERN Stack Developer"," "]}),""===a?"":Object(j.jsx)("h3",{children:" See You Again "})]})})}),p=a(116),O=a(109),x=(a(74),function(){var e=Object(i.f)(),t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],s=a[1],r=function(){var t=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/about",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"});case 3:return a=t.sent,t.next=6,a.json();case 6:if(n=t.sent,s(n),200===a.status){t.next=10;break}throw new Error(a.error);case 10:t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),e.push("/login");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container mt-5",children:Object(j.jsx)("form",{method:"GET",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-12 col-md-10 col-lg-9 m-auto about_box",children:Object(j.jsxs)("div",{className:"row row-eq-height",children:[Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsxs)("h5",{className:"mt-2",children:[" ",c.name," "]}),Object(j.jsxs)("h6",{style:{color:"#0877F3"},children:[" ",c.work," "]})]}),Object(j.jsxs)("div",{className:"col-md-6",children:[Object(j.jsxs)("p",{className:"use_info",children:[" Name: ",c.name," "]}),Object(j.jsxs)("p",{className:"use_info",children:[" Email: ",c.email," "]}),Object(j.jsxs)("p",{className:"use_info",children:[" Phone: ",c.phone," "]}),Object(j.jsxs)("p",{className:"use_info",children:[" Work: ",c.work," "]})]}),Object(j.jsx)("div",{className:"col-md-2",children:Object(j.jsxs)(p.a,{className:"edit_pro_btn",name:"btnAddmore",children:[Object(j.jsx)(O.a,{})," Edit Profile"]})})]})})})})})})}),v=a(17),g=a(26),f=a(115),N=a(110),w=a(111),y=a(112),S=a(113),C=(a(75),function(){var e=Object(n.useState)({name:"",email:"",phone:"",message:""}),t=Object(l.a)(e,2),a=t[0],c=t[1],s=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/getdata",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,c({name:a.name,email:a.email,phone:a.phone}),200===t.status){e.next=10;break}throw new Error(t.error);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),c({name:"",email:"",phone:""});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){s()}),[]);var r=function(e){var t=e.target,n=t.name,s=t.value;c(Object(g.a)(Object(g.a)({},a),{},Object(v.a)({},n,s)))},i=function(){var e=Object(u.a)(m.a.mark((function e(t){var n,s,r,l,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.name,s=a.email,r=a.phone,l=a.message,e.next=4,fetch("/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:s,phone:r,message:l})});case 4:return i=e.sent,e.next=7,i.json();case 7:e.sent?(alert("Message sended"),c(Object(g.a)(Object(g.a)({},a),{},{message:""}))):alert("Message Not Send");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container mt-5",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12 col-md-8 col-lg-4",children:Object(j.jsxs)("div",{className:"contact_box",children:[Object(j.jsxs)("h1",{children:[" ",Object(j.jsx)(N.a,{})," Phone: "]}),Object(j.jsx)("h3",{children:" +8801789708582 "})]})}),Object(j.jsx)("div",{className:"col-12 col-md-8 col-lg-4",children:Object(j.jsxs)("div",{className:"contact_box",children:[Object(j.jsxs)("h1",{children:[" ",Object(j.jsx)(w.a,{})," Email: "]}),Object(j.jsx)("h3",{children:" mdihalif@yahoo.com "})]})}),Object(j.jsx)("div",{className:"col-12 col-md-8 col-lg-4",children:Object(j.jsxs)("div",{className:"contact_box",children:[Object(j.jsxs)("h1",{children:[" ",Object(j.jsx)(y.a,{})," Address: "]}),Object(j.jsx)("h3",{children:" Sadhupara, Pabna, Bangladesh "})]})})]}),Object(j.jsx)("div",{className:"row mt-5",children:Object(j.jsx)("div",{className:"col-12 col-md-10 col-lg-9 m-auto",children:Object(j.jsxs)("div",{className:"contact_form_box",children:[Object(j.jsx)("h1",{children:" Get In Touch "}),Object(j.jsx)("form",{method:"POST",onSubmit:i,children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12 col-md-10 col-lg-4",children:Object(j.jsx)(f.a,{className:"contact_input",type:"text",label:"Name",variant:"standard",name:"name",value:a.name,required:!0,onChange:r})}),Object(j.jsx)("div",{className:"col-12 col-md-10 col-lg-4",children:Object(j.jsx)(f.a,{className:"contact_input",type:"email",label:"Email",variant:"standard",name:"email",value:a.email,required:!0,onChange:r})}),Object(j.jsx)("div",{className:"col-12 col-md-10 col-lg-4",children:Object(j.jsx)(f.a,{className:"contact_input",type:"number",label:"Phone Number",variant:"standard",name:"phone",value:a.phone,required:!0,onChange:r})}),Object(j.jsx)("div",{className:"col-12 col-md-12 col-lg-12",children:Object(j.jsx)(f.a,{className:"contact_msg",type:"text",label:"Message",variant:"standard",name:"message",value:a.message,required:!0,onChange:r})}),Object(j.jsxs)(p.a,{type:"submit",className:"msg_btn",children:[Object(j.jsx)(S.a,{})," Send Message"]})]})})]})})})]})})}),k=a(114),E=a(31),_=(a(49),function(){var e=Object(n.useContext)(A),t=(e.state,e.dispatch),a=Object(i.f)(),c=Object(n.useState)(""),s=Object(l.a)(c,2),r=s[0],d=s[1],b=Object(n.useState)(""),h=Object(l.a)(b,2),O=h[0],x=h[1],v=function(){var e=Object(u.a)(m.a.mark((function e(n){var c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:O})});case 3:return c=e.sent,e.next=6,c.json();case 6:(s=e.sent).error||!s?E.b.error("sorry ".concat(r,", SignUp failed!, ").concat(s.error),{position:"top-center",autoClose:5e3}):(t({type:"USER",payload:!0}),alert("Welcome ".concat(r,", Login Succefully")),a.push("/about"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"container mt-5",children:Object(j.jsxs)("div",{className:"signup_form",children:[Object(j.jsx)("h1",{className:"form_title",style:{textAlign:"left"},children:" Sign In "}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12 col-lg-6 col-md-8 order-2 order-lg-1",children:Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{src:"image/lock-4441691_1280.png",alt:"Login Image",className:"img-fluid"}),Object(j.jsx)(o.b,{to:"/signup",children:" I Have No Account "})]})}),Object(j.jsx)("div",{className:"col-12 col-lg-6 col-md-8 order-2 order-lg-1",children:Object(j.jsxs)("form",{method:"POST",onSubmit:v,children:[Object(j.jsx)(f.a,{className:"input",type:"email",label:"Email",variant:"standard",name:"email",required:!0,value:r,onChange:function(e){return d(e.target.value)}}),Object(j.jsx)(f.a,{className:"input",type:"password",label:"Password",variant:"standard",name:"password",required:!0,value:O,onChange:function(e){return x(e.target.value)}}),Object(j.jsxs)(p.a,{variant:"contained",title:"Click Me For Sign In",className:"signin_btn",type:"submit",name:"signin",children:[Object(j.jsx)(k.a,{})," Sign In"]})]})})]})]})}),Object(j.jsx)(E.a,{})]})}),T=function(){var e,t,a=Object(i.f)(),c=Object(n.useState)({name:"",email:"",phone:"",work:"",password:"",cpassword:""}),s=Object(l.a)(c,2),r=s[0],d=s[1],b=function(a){e=a.target.name,t=a.target.value,d(Object(g.a)(Object(g.a)({},r),{},Object(v.a)({},e,t)))},h=function(){var e=Object(u.a)(m.a.mark((function e(t){var n,c,s,l,i,o,j,d;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.name,c=r.email,s=r.phone,l=r.work,i=r.password,o=r.cpassword,e.next=4,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:c,phone:s,work:l,password:i,cpassword:o})});case 4:return j=e.sent,e.next=7,j.json();case 7:d=e.sent,console.log(d),d.error||!d?E.b.error("sorry ".concat(r.name,", SignUp failed!, ").concat(d.error),{position:"top-center",autoClose:5e3}):(alert("welcome ".concat(r.name,", SignUp Successful")),a.push("/login"));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"container mt-5",children:Object(j.jsxs)("div",{className:"signup_form",children:[Object(j.jsx)("h1",{className:"form_title",style:{textAlign:"left"},children:" Sign Up "}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12 col-lg-6 col-md-8 order-2 order-lg-1",children:Object(j.jsxs)("form",{method:"POST",onSubmit:h,children:[Object(j.jsx)(f.a,{className:"input",type:"text",label:"Name",variant:"standard",name:"name",value:r.name,onChange:b,required:!0}),Object(j.jsx)(f.a,{className:"input",type:"email",label:"Email",variant:"standard",name:"email",value:r.email,onChange:b,required:!0}),Object(j.jsx)(f.a,{className:"input",type:"number",label:"Phone",variant:"standard",name:"phone",value:r.phone,onChange:b,required:!0}),Object(j.jsx)(f.a,{className:"input",type:"text",label:"Profession Name",variant:"standard",name:"work",value:r.work,onChange:b,required:!0}),Object(j.jsx)(f.a,{className:"input",type:"password",label:"Password",variant:"standard",name:"password",value:r.password,onChange:b,required:!0}),Object(j.jsx)(f.a,{className:"input",type:"password",label:"Confirm Password",variant:"standard",name:"cpassword",value:r.cpassword,onChange:b,required:!0}),Object(j.jsxs)(p.a,{variant:"contained",title:"Click Me For Sign Up",className:"signup_btn",type:"submit",name:"signup",children:[Object(j.jsx)(S.a,{})," Sign Up"]})]})}),Object(j.jsx)("div",{className:"col-12 col-lg-6 col-md-8 order-1 order-lg-2",children:Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{src:"image/neonbrand-4kjcmPhsGkc-unsplash.jpg",alt:"Image",className:"img-fluid"}),Object(j.jsx)(o.b,{to:"/login",children:" I Have Account "})]})})]})]})}),Object(j.jsx)(E.a,{})]})},P=function(){var e=Object(n.useContext)(A),t=(e.state,e.dispatch),a=Object(i.f)(),c=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:t({type:"USER",payload:!1}),a.push("/login"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),alert("LogOut Failed");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),Object(j.jsx)(j.Fragment,{})},F=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("p",{style:{fontSize:"50px"},children:" 404 "}),Object(j.jsx)("h1",{children:" 404! Error Page. Page Not Found "})]})})},q=(a(77),a(78),function(e,t){return"USER"===t.type?t.payload:e}),A=Object(n.createContext)(),I=function(){var e=Object(n.useReducer)(q,null),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(A.Provider,{value:{state:a,dispatch:c},children:[Object(j.jsx)(d,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsx)(h,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/about",children:Object(j.jsx)(x,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/contact",children:Object(j.jsx)(C,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/login",children:Object(j.jsx)(_,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/signup",children:Object(j.jsx)(T,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/signout",children:Object(j.jsx)(P,{})}),Object(j.jsx)(i.a,{path:"*",children:Object(j.jsx)(F,{})})]})]})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,118)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(I,{})})}),document.getElementById("root")),M()}},[[79,1,2]]]);
//# sourceMappingURL=main.15de7ae9.chunk.js.map