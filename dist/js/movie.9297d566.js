(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["movie"],{"04d1":function(t,e,a){var i=a("342f"),s=i.match(/firefox\/(\d+)/i);t.exports=!!s&&+s[1]},1660:function(t,e,a){},"4e82":function(t,e,a){"use strict";var i=a("23e7"),s=a("1c0b"),r=a("7b0b"),o=a("50c4"),n=a("d039"),c=a("addb"),l=a("a640"),u=a("04d1"),d=a("d998"),v=a("2d00"),f=a("512c"),h=[],p=h.sort,m=n((function(){h.sort(void 0)})),g=n((function(){h.sort(null)})),b=l("sort"),w=!n((function(){if(v)return v<70;if(!(u&&u>3)){if(d)return!0;if(f)return f<603;var t,e,a,i,s="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(i=0;i<47;i++)h.push({k:e+i,v:a})}for(h.sort((function(t,e){return e.v-t.v})),i=0;i<h.length;i++)e=h[i].k.charAt(0),s.charAt(s.length-1)!==e&&(s+=e);return"DGBEFHACIJK"!==s}})),_=m||!g||!b||!w,k=function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:String(e)>String(a)?1:-1}};i({target:"Array",proto:!0,forced:_},{sort:function(t){void 0!==t&&s(t);var e=r(this);if(w)return void 0===t?p.call(e):p.call(e,t);var a,i,n=[],l=o(e.length);for(i=0;i<l;i++)i in e&&n.push(e[i]);n=c(n,k(t)),a=n.length,i=0;while(i<a)e[i]=n[i++];while(i<l)delete e[i++];return e}})},"512c":function(t,e,a){var i=a("342f"),s=i.match(/AppleWebKit\/(\d+)\./);t.exports=!!s&&+s[1]},5968:function(t,e,a){"use strict";a("c1d7")},addb:function(t,e){var a=Math.floor,i=function(t,e){var o=t.length,n=a(o/2);return o<8?s(t,e):r(i(t.slice(0,n),e),i(t.slice(n),e),e)},s=function(t,e){var a,i,s=t.length,r=1;while(r<s){i=r,a=t[r];while(i&&e(t[i-1],a)>0)t[i]=t[--i];i!==r++&&(t[i]=a)}return t},r=function(t,e,a){var i=t.length,s=e.length,r=0,o=0,n=[];while(r<i||o<s)r<i&&o<s?n.push(a(t[r],e[o])<=0?t[r++]:e[o++]):n.push(r<i?t[r++]:e[o++]);return n};t.exports=i},c1d7:function(t,e,a){},d7b5:function(t,e,a){"use strict";a("1660")},d998:function(t,e,a){var i=a("342f");t.exports=/MSIE|Trident/.test(i)},def6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.movieDetails?a("div",{staticClass:"movie"},[a("div",{staticClass:"backdrop",style:{backgroundImage:"url(https://www.themoviedb.org/t/p/original"+t.movieDetails.backdrop_path+") "}}),a("router-link",{staticClass:"homeIcon",attrs:{to:"/"}},[a("span")]),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.movieDetails.title)+" ")]),a("div",{staticClass:"rate"},[a("Rate",{attrs:{"allow-half":"",disabled:""},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}}),a("span",[t._v(" "+t._s(t.rate)+" ")])],1),a("a",{staticClass:"button",attrs:{href:t.movieDetails.homepage,target:"_blank",rel:"noopener noreferrer"}},[t._v(" 立即觀賞 ")]),a("div",{staticClass:"photos"},t._l(t.images,(function(t){return a("img",{key:t.file_path,attrs:{src:"https://www.themoviedb.org/t/p/w533_and_h300_bestv2"+t.file_path}})})),0)]),a("div",{staticClass:"introduction"},[a("div",{staticClass:"pic"},[a("div",{staticClass:"img",style:{backgroundImage:"url("+t.posterImage+") "}})]),a("div",{staticClass:"rate"},[a("Rate",{attrs:{"allow-half":"",disabled:""},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}}),a("span",[t._v(" "+t._s(t.rate)+" ")])],1),a("hr"),a("div",{staticClass:"overview"},[a("span",[t._v(" "+t._s(t.movieDetails.overview)+" ")])]),a("div",{staticClass:"casts"},t._l(t.casts,(function(e){return a("div",{key:e.id,staticClass:"cast"},[a("div",{staticClass:"avatar",on:{click:function(a){return t.toActor(e.id)}}},[e.profile_path?a("Avatar",{attrs:{src:"https://www.themoviedb.org/t/p/w138_and_h175_face"+e.profile_path}}):a("Avatar")],1),a("span",[t._v(" "+t._s(e.name)+" ")])])})),0)])],1):t._e()},s=[],r=(a("4e82"),a("a434"),a("284b")),o={props:["id"],data:function(){return{movieDetails:{},casts:[],value1:0,images:[]}},components:{},created:function(){var t=this;r["e"](this.id).then((function(e){t.movieDetails=e,console.log(e)})),r["d"](this.id).then((function(e){var a=e.cast.sort((function(t,e){return t.order-e.order}));t.casts=a.splice(0,6),console.log(a)})),r["f"](this.id).then((function(e){t.images=e.backdrops.splice(0,3),console.log(e.backdrops)}))},computed:{rate:function(){return this.movieDetails.vote_average/2},bgImage:function(){return"https://www.themoviedb.org/t/p/original".concat(this.movieDetails.backdrop_path)},posterImage:function(){return"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/".concat(this.movieDetails.poster_path)}},methods:{toActor:function(t){this.$router.push({path:"/actor/".concat(t)})},test:function(){console.log("s")}},mounted:function(){}},n=o,c=(a("5968"),a("d7b5"),a("2877")),l=Object(c["a"])(n,i,s,!1,null,"61c87e44",null);e["default"]=l.exports}}]);
//# sourceMappingURL=movie.9297d566.js.map