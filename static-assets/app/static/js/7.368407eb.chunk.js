(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[7,11],{184:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return u})),t.d(a,"a",(function(){return d}));var l=t(9),n=t(0),r=t.n(n),c=t(5),s=t(185),m=t(70),o=t(20),i="landscape",u="landscapeCompressed",d="imageBackground";a.d=function(e){var a,t,n=Object(s.a)().formatDate,E=Object(o.b)(),p=Object(l.a)(E,1)[0].isAuthoring,f=e.classes,v=e.parentModelId,b=e.format,g=void 0===b?"portrait":b,N=e.showBlurb,h=void 0!==N&&N,y=e.tags,O=void 0===y?"":y,j=e.numOfComments,k=e.model,_=e.model,w=Object(l.a)(_.authorBio_o,1)[0],x=w.name_s,F=w.profilePic_s,M=_.blurb_t,C=_.headline_s,P=_.mainImage_s,T=_.mainImageAlt_s,B=void 0===T?"":T,A=_.craftercms.dateModified,L=k.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace("post/","articles/"),I=Object(m.b)({model:k,parentModelId:v,isAuthoring:p}).props;switch(g){case"portrait":return r.a.createElement(c.b,Object.assign({to:L,className:"blog-entry ".concat(null!==(a=null===f||void 0===f?void 0:f.root)&&void 0!==a?a:"")},I),r.a.createElement("img",{src:P,alt:B}),r.a.createElement("div",{className:"blog-content-body"},r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",{className:"author mr-2"},r.a.createElement("img",{src:F,alt:""})," ",x)," \u2022 ",r.a.createElement("span",{className:"mr-2"},n(A)),j&&r.a.createElement(r.a.Fragment,null," \u2022 ",r.a.createElement("span",{className:"ml-2"},r.a.createElement("span",{className:"fa fa-comments"})," ",j))),r.a.createElement("h2",null,C)));case i:return r.a.createElement("div",Object.assign({className:"post-entry-horizontal"},I),r.a.createElement(c.b,{to:L,className:null===f||void 0===f?void 0:f.root},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(P,")")}}),r.a.createElement("span",{className:"text"},r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",{className:"author mr-2"},r.a.createElement("img",{src:F,alt:""})," ",x),"\u2022 ",r.a.createElement("span",{className:"mr-2"},n(A)),j&&r.a.createElement(r.a.Fragment,null,"\u2022 ",r.a.createElement("span",{className:"ml-2"},r.a.createElement("span",{className:"fa fa-comments"})," $",j))),r.a.createElement("h2",null,C))));case u:return r.a.createElement(c.b,Object.assign({to:L,className:null===f||void 0===f?void 0:f.root},I),r.a.createElement("img",{src:P,alt:B,className:"mr-4"}),r.a.createElement("div",{className:"text"},r.a.createElement("h4",null,C),r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",{className:"mr-2"},n(A)))));case d:return r.a.createElement(c.b,{to:L,className:"a-block d-flex align-items-center ".concat(null!==(t=null===f||void 0===f?void 0:f.root)&&void 0!==t?t:""),style:{backgroundImage:"url(".concat(P,")")}},r.a.createElement("div",Object.assign({className:"text ".concat(null===f||void 0===f?void 0:f.innerWrapper)},I),r.a.createElement("div",{className:"post-meta"},O&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"category"},O)," \u2022 "),r.a.createElement("span",{className:"mr-2"},n(A)),j&&r.a.createElement(r.a.Fragment,null," \u2022 ",r.a.createElement("span",{className:"ml-2"},r.a.createElement("span",{className:"fa fa-comments"})," ",j))),r.a.createElement("h3",null,C),h&&r.a.createElement("p",null,M)));default:return console.error('Unknown PostCard format "'.concat(g,'" on post "').concat(C,'"')),r.a.createElement(c.b,Object.assign({to:L,className:null===f||void 0===f?void 0:f.root},I),r.a.createElement("h2",null,C))}}},185:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t(0),n=t(84),r=t(4);function c(){var e=Object(l.useContext)(n.a);return Object(r.f)(e),e}},186:function(e,a,t){"use strict";var l=t(88),n=t(55),r=t(86),c=t(57),s=t(56),m=t(0),o=t(84),i=t(87),u=t(4),d=t(71),E=function(e,a){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)a.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(t[l[n]]=e[l[n]])}return t},p=t.n(d).a||d;function f(e,a){return Object(i.a)(Object.assign(Object.assign({},u.a),{locale:"en"}),Object(u.b)(),e,a)}var v=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"shouldComponentUpdate",value:function(e){var a=this.props,t=a.values,l=E(a,["values"]),n=e.values,r=E(e,["values"]);return!p(n,t)||!p(l,r)}},{key:"render",value:function(){var e=this;return m.createElement(o.a.Consumer,null,(function(a){e.props.defaultMessage||Object(u.f)(a);var t=a||{},n=t.formatMessage,r=void 0===n?f:n,c=t.textComponent,s=void 0===c?m.Fragment:c,o=e.props,i=o.id,d=o.description,E=o.defaultMessage,p=o.values,v=o.children,b=o.tagName,g=void 0===b?s:b,N=r({id:i,description:d,defaultMessage:E},p);return Array.isArray(N)||(N=[N]),"function"===typeof v?v.apply(void 0,Object(l.a)(N)):g?m.createElement.apply(m,[g,null].concat(Object(l.a)(N))):N}))}}]),t}(m.Component);v.displayName="FormattedMessage",v.defaultProps={values:{}},a.a=v},187:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(186),c=t(184);a.a=function(e){var a=e.posts;return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(r.a,{id:"common.popularPostsTitle",defaultMessage:"Popular Posts"})),n.a.createElement("div",{className:"post-entry-sidebar"},n.a.createElement("ul",null,null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement("li",{key:e.craftercms.id},n.a.createElement(c.d,{model:e,format:c.c}))})))))}},188:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(186);a.a=function(){return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(r.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"})),n.a.createElement("ul",{className:"categories"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Food ",n.a.createElement("span",null,"(12)"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Travel ",n.a.createElement("span",null,"(22)"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Lifestyle ",n.a.createElement("span",null,"(37)"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Business ",n.a.createElement("span",null,"(42)"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Adventure ",n.a.createElement("span",null,"(14)")))))}},189:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(186);a.a=function(){return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(r.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"})),n.a.createElement("ul",{className:"tags"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Travel")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Adventure")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Food")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Lifestyle")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Business")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Freelancing")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Travel")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Adventure")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Food")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Lifestyle")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Business")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Freelancing"))))}},190:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l);a.default=function(e){var a=e.ice,t=e.model,l=t.bio_t,r=t.name_s,c=t.profilePic_s,s=t.linkButtonText_s,m=t.linkButtonUrl_s,o=t.showLinkButton_b,i=t.facebookLink_s,u=t.twitterLink_s,d=t.instagramLink_s,E=t.youTubeLink_s;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",Object.assign({className:"bio text-center"},a),n.a.createElement("img",{src:c,alt:"",className:"img-fluid"}),n.a.createElement("div",{className:"bio-body"},n.a.createElement("h2",null,r),n.a.createElement("p",null,l),o&&n.a.createElement("p",null,n.a.createElement("a",{href:m,className:"btn btn-primary btn-sm rounded"},s)),n.a.createElement("p",{className:"social"},i&&n.a.createElement("a",{href:i,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-facebook"})),u&&n.a.createElement("a",{href:u,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-twitter"})),d&&n.a.createElement("a",{href:d,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-instagram"})),E&&n.a.createElement("a",{href:E,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-youtube-play"}))))))}},193:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(190),c=t(23);function s(e){var a=e.model,t=Object(c.c)(e);return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement(r.default,{ice:t,model:a}))}a.a=function(e){var a=e.bios;return n.a.createElement(n.a.Fragment,null,null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement(s,{key:e.craftercms.id,model:e})})))}},199:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(85),c=t(187),s=t(193),m=t(188),o=t(189);a.default=function(e){var a=e.bios_o,t=e.posts;return n.a.createElement(r.a,null,n.a.createElement("section",{className:"site-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mb-4"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h1",null,"Contact Me"))),n.a.createElement("div",{className:"row blog-entries"},n.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},n.a.createElement("form",{action:"#",method:"post"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 form-group"},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement("input",{type:"text",id:"name",className:"form-control "})),n.a.createElement("div",{className:"col-md-12 form-group"},n.a.createElement("label",{htmlFor:"phone"},"Phone"),n.a.createElement("input",{type:"text",id:"phone",className:"form-control "})),n.a.createElement("div",{className:"col-md-12 form-group"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",id:"email",className:"form-control "}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 form-group"},n.a.createElement("label",{htmlFor:"message"},"Write Message"),n.a.createElement("textarea",{name:"message",id:"message",className:"form-control ",cols:"30",rows:"8"}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 form-group"},n.a.createElement("input",{type:"submit",value:"Send Message",className:"btn btn-primary"}))))),n.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},n.a.createElement("div",{className:"sidebar-box search-form-wrap"},n.a.createElement("form",{action:"#",className:"search-form"},n.a.createElement("div",{className:"form-group"},n.a.createElement("span",{className:"icon fa fa-search"}),n.a.createElement("input",{type:"text",className:"form-control",id:"s",placeholder:"Type a keyword and hit enter"})))),n.a.createElement(s.a,{bios:a}),n.a.createElement(c.a,{posts:t}),n.a.createElement(m.a,null),n.a.createElement(o.a,null))))))}}}]);
//# sourceMappingURL=7.368407eb.chunk.js.map