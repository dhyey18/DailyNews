(this.webpackJsonpnewsy=this.webpackJsonpnewsy||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(19),r=c.n(s),i=(c(27),c(28),c(9)),l=c(10),o=c(12),j=c(11),h=c(7),d=(c(29),c(1)),b=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"",children:Object(d.jsxs)("nav",{className:"navBar",children:[Object(d.jsxs)("div",{className:"left-nav",children:[Object(d.jsx)("div",{className:"nav__item",children:Object(d.jsx)(h.b,{className:"linkTag",to:"/",children:"Newsy"})}),Object(d.jsx)("div",{className:"nav__item",children:Object(d.jsx)(h.b,{className:"linkTag",to:"/",children:"Top Headlines"})})]}),Object(d.jsxs)("div",{className:"right-nav",children:[Object(d.jsx)("div",{className:"nav__item",children:Object(d.jsx)(h.b,{className:"linkTag",to:"/Sports",children:"Sports"})}),Object(d.jsx)("div",{className:"nav__item",children:Object(d.jsx)(h.b,{className:"linkTag",to:"/science",children:"Science"})}),Object(d.jsx)("div",{className:"nav__item",children:Object(d.jsx)(h.b,{className:"linkTag",to:"/technology",children:"Technology"})}),Object(d.jsx)("div",{className:"nav__item",children:Object(d.jsx)(h.b,{className:"linkTag",to:"/entertainment",children:"Entertainment"})})]})]})})})}}]),c}(n.Component),u=c(14),p=c.n(u),O=c(18),x=(c(40),function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props,t=e.imageUrl,c=e.description,n=e.title,a=e.newsUrl;return Object(d.jsx)("div",{className:"newsItems",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:t}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h4",{children:n}),Object(d.jsx)("p",{children:c})]}),Object(d.jsx)("a",{href:a,target:"blank",className:"cardBtn",children:"See More"})]})})}}]),c}(n.Component)),g=c(22),m=(c(41),function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(i.a)(this,c),(e=t.call(this)).fetchMoreData=Object(O.a)(p.a.mark((function t(){var c,n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="https://newsapi.org/v2/top-headlines?country=in&category=".concat(e.props.category,"&apiKey=048b39e82bc04c2dbdb0e87d7785e71f&page=").concat(e.state.page,"&pagesize=9"),t.next=3,fetch(c);case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,e.setState({article:e.state.article.concat(a.articles),page:e.state.page+1,totalResult:e.state.totalResult+a.totalResults});case 8:case"end":return t.stop()}}),t)}))),e.state={article:[],totalResult:0,page:1},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=Object(O.a)(p.a.mark((function e(){var t,c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=in&category=".concat(this.props.category,"&apiKey=048b39e82bc04c2dbdb0e87d7785e71f&page=").concat(this.state.page,"&pagesize=9"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,console.log(n),this.setState({article:n.articles,page:this.state.page+1,totalResult:n.totalResults});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g.a,{dataLength:this.state.article.length,next:this.fetchMoreData,hasMore:this.state.article.length!==this.state.totalResult}),Object(d.jsx)("div",{className:"newsContainer",children:this.state.article.map((function(e){return Object(d.jsx)(x,{newsUrl:e.url?e.url:"",imageUrl:e.urlToImage,title:e.title?e.title:"",description:e.description?e.description:""})}))})]})}}]),c}(n.Component)),v=c(2);var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(v.c,{children:[Object(d.jsx)(v.a,{exact:!0,path:"/",children:Object(d.jsx)(m,{category:"general"},"general")}),Object(d.jsx)(v.a,{exact:!0,path:"/Sports",children:Object(d.jsx)(m,{category:"sports"},"sports")}),Object(d.jsx)(v.a,{exact:!0,path:"/Technology",children:Object(d.jsx)(m,{category:"technology"},"technology")}),Object(d.jsx)(v.a,{exact:!0,path:"/Science",children:Object(d.jsx)(m,{category:"science"},"science")}),Object(d.jsx)(v.a,{exact:!0,path:"/Entertainment",children:Object(d.jsx)(m,{category:"entertainment"},"entertainment")})]})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),y()}},[[42,1,2]]]);
//# sourceMappingURL=main.090a6acf.chunk.js.map