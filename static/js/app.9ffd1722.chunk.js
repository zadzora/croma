(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var a=n(14),r=n.n(a),o=n(5),c=n.n(o),i=n(6),l=n.n(i),s=n(9),u=n.n(s),f=n(2),m=n.n(f),p=n(7),d=n.n(p),h=n(0),g=n(4),v=n(8),y=n(10),b=n(41),E=n(43);function w(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var P=function(e){d()(a,e);var t,n=(t=a,function(){var e,n=m()(t);if(w()){var a=m()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return u()(this,e)});function a(){return c()(this,a),n.apply(this,arguments)}return l()(a,[{key:"render",value:function(){return h.createElement(E.a,r()({},"web"===y.a.OS?{onClick:this.props.onPress}:{onPress:this.props.onPress},{style:[x.inner]}),h.createElement(v.a.View,this.props,this.props.children))}}]),a}(h.Component),x=g.a.create({inner:{backgroundColor:b.a.white,marginVertical:8,elevation:1}})},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(4),o=n(3);function c(e){var t=r.a.create({palette:{alignItems:"stretch",flexDirection:"row",height:112},color:{flex:1}});return a.createElement(o.a,{style:t.palette},e.colors&&e.colors.map((function(e){return a.createElement(o.a,{style:[t.color,{backgroundColor:e.color}],key:e.color})})))}},188:function(e,t,n){"use strict";var a=n(0),r=n(3);t.a=function(){return a.createElement(r.a,{style:{height:100}})}},290:function(e,t,n){"use strict";(function(e){var a=n(22),r=n.n(a),o=n(11),c=n.n(o),i=n(32),l=n.n(i),s=n(0),u=n.n(s),f=n(28),m=n(4),p=n(103),d=n(3),h=n(21),g=n(10),v=n(62),y=n(54),b=n(291),E=n(83),w=n(63),P=n(41),x=n(299),C=n(75),k=n(154),S=n(94),O=n(292),D=n(128),I=n.n(D),R=n(70),A=n(188),T=n(85),B=n(194),j=n(477),N=n(95),L=n.n(N),_=function(t){var n=h.a.get("window"),a=n.height,o=(n.width,u.a.useContext(w.a)),i=o.isLoading,m=o.allPalettes,D=o.deletedPalettes,N=o.undoDeletionByName,_=o.isPro,H=o.setPurchase,U=Object(s.useState)(!1),V=l()(U,2),z=V[0],G=V[1];return Object(s.useEffect)((function(){!function(){var e;c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!k.a.platform.ios){t.next=6;break}return t.next=3,c.a.awrap(S.c(S.b));case 3:e=t.sent,"granted"!==e.status&&alert("Sorry, we need camera roll permissions to make this work!");case 6:case"end":return t.stop()}}),null,null,null,Promise)}(),"android"===g.a.OS&&v.a.getInitialURL().then((function(e){if(e){var n={};e.split("?")[1].split("&").forEach((function(e){var t=e.split("=");n[t[0]]=decodeURIComponent(t[1])})),t.navigation.navigate("SavePalette",{colors:r()(new Set(JSON.parse(n.colors)||[])),name:n.name})}}))}),[]),i?u.a.createElement(p.a,null):u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{style:[F.container,{minHeight:a-R.Header.HEIGHT-16}]},z?u.a.createElement(p.a,null):u.a.createElement(d.a,null),u.a.createElement(f.a,{showsVerticalScrollIndicator:!1},Object.keys(m).map((function(e){return u.a.createElement(b.a,{key:e,colors:m[e].colors.slice(0,_?m[e].colors.length:4),name:e,navigation:t.navigation})})),u.a.createElement(A.a,null))),u.a.createElement(E.a,null,Object.keys(D).map((function(e){return u.a.createElement(E.c,{key:e,name:e,undoDeletionByName:N})}))),u.a.createElement(T.a,{bgColor:"rgba(68, 68, 68, 0.6)",hideShadow:"web"===g.a.OS,buttonColor:P.a.accent,offsetY:60,className:"testitman",key:"action-button-home",style:"web"===g.a.OS?F.actionButtonWeb:{}},u.a.createElement(T.a.Item,{buttonColor:"#9b59b6",title:"Get palette from image",onPress:function(){G(!0),function(){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(x.a({mediaTypes:C.a.All,quality:1,base64:!0}));case 2:if(void 0===(t=n.sent).base64){n.next=9;break}return n.next=6,c.a.awrap(I.a.read(new e(t.base64,"base64")));case 6:return n.abrupt("return",n.sent);case 9:return n.next=11,c.a.awrap(I.a.read(t.uri));case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}),null,null,null,Promise)}().then((function(e,n){G(!1),t.navigation.navigate("ColorList",{colors:O.a.getProminentColors(e)})})).catch((function(e){"android"==g.a.OS&&y.a.show("Error while processing image: "+e,y.a.LONG),G(!1)}))}},u.a.createElement(B.a,{name:"md-camera",style:F.actionButtonIcon})),u.a.createElement(T.a.Item,{buttonColor:"#3498db",title:"Get palette from color",onPress:function(){t.navigation.navigate("ColorPicker",{onDone:function(e){t.navigation.navigate("Palettes",{color:e.color})}})}},u.a.createElement(B.a,{name:"md-color-palette",style:F.actionButtonIcon})),u.a.createElement(T.a.Item,{buttonColor:"#1abc9c",title:"Add colors manually",onPress:function(){return t.navigation.navigate("AddPaletteManually")}},u.a.createElement(B.a,{name:"md-color-filter",style:F.actionButtonIcon})),"web"===g.a.OS&&u.a.createElement(T.a.Item,{buttonColor:P.a.primary,title:"Get croma on playstore",onPress:function(){return v.a.openURL("https://play.google.com/store/apps/details?id=app.croma")}},u.a.createElement(j.a,{name:"google-play",style:F.actionButtonIcon})),"android"===g.a.OS&&!_&&u.a.createElement(T.a.Item,{buttonColor:P.a.primary,title:"Unlock pro",onPress:function(){!function(){var e;c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.awrap(L.a.open());case 3:return t.next=5,c.a.awrap(L.a.purchase("croma_pro"));case 5:e=t.sent,y.a.show("Congrats, You are now a pro user!",y.a.LONG),H(e),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),y.a.show("Purchase unsucceessful "+t.t0,y.a.LONG);case 13:return t.prev=13,t.next=16,c.a.awrap(L.a.close());case 16:return t.finish(13);case 17:case"end":return t.stop()}}),null,null,[[0,10,13,17]],Promise)}()}},u.a.createElement(B.a,{name:"md-unlock",style:F.actionButtonIcon}))))};t.a=_,_.navigationOptions={title:"Croma"};var F=m.a.create({container:{margin:8,justifyContent:"center"},actionButtonIcon:{fontSize:20,height:22,color:"white"},actionButtonWeb:{position:"fixed",transform:"scale(1) rotate(0deg) !important",right:Math.max((h.a.get("window").width-600)/2,0),left:Math.max((h.a.get("window").width-600)/2,0)}})}).call(this,n(466).Buffer)},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var a=n(14),r=n.n(a),o=n(11),c=n.n(o),i=n(32),l=n.n(i),s=n(0),u=n(4),f=n(3),m=n(18),p=n(10),d=n(115),h=n(122),g=n(41),v=n(123),y=n(187),b=n(237),E=n(43),w=n(63),P=function(e){var t=s.useState(!1),n=l()(t,2),a=n[0],o=n[1],i=s.useContext(w.a).deletePaletteByName;return s.createElement(h.a,r()({},e,{onPress:function(){e.navigation.navigate("Palette",e)}}),s.createElement(y.a,e),s.createElement(f.a,{style:x.bottom},s.createElement(m.a,{style:x.label},e.name),s.createElement(f.a,{style:x.actionButtonsView},a&&s.createElement(m.a,{style:{position:"absolute",backgroundColor:"rgb(64, 64, 58)",top:"-35px",right:"-10px",width:"148px",color:"#fff",padding:"5px ",textAlign:"center",borderRadius:"6px"}},"Copied to Clipboard!"),"web"===p.a.OS?s.createElement(E.a,{onClick:function(t){t.preventDefault(),t.stopPropagation(),d.a.setString("Croma - Palette Manager\nColors:\n"+e.colors.map((function(e){return e.color})).join("\n")+"\n      \n      https://croma.app/#/Main/SavePalette?name="+encodeURIComponent(e.name)+"&colors="+encodeURIComponent(JSON.stringify(e.colors))),o(!0),setTimeout((function(){o(!1)}),3e3)},style:x.actionButton},s.createElement(b.a,{size:20,name:"share"})):s.createElement(E.a,{onPress:function(){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.a.awrap(v.a.share({message:"Croma - Palette Manager\nColors:\n"+e.colors.map((function(e){return e.color})).join("\n")+"\n      \n          https://croma.app/#/Main/SavePalette?name="+encodeURIComponent(e.name)+"&colors="+encodeURIComponent(JSON.stringify(e.colors))}));case 3:(t=n.sent).action===v.a.sharedAction?t.activityType:(t.action,v.a.dismissedAction),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),alert(n.t0.message);case 10:case"end":return n.stop()}}),null,null,[[0,7]],Promise)},style:x.actionButton},s.createElement(b.a,{size:20,name:"share"})),s.createElement(E.a,{onPress:function(t){t.preventDefault(),t.stopPropagation(),i(e.name)},style:x.actionButton},s.createElement(b.a,{size:20,name:"trash"})))))},x=u.a.create({bottom:{flexDirection:"row",alignItems:"center",padding:16,height:54},actionButtonsView:{flexDirection:"row",alignItems:"flex-end"},actionButton:{padding:8},label:{flex:1,marginHorizontal:16,color:g.a.darkGrey}})},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(5),r=n.n(a),o=n(6),c=n.n(o),i=n(298),l=n(128),s=n.n(l),u=n(64),f=n.n(u),m=function(){function e(){r()(this,e)}return c()(e,null,[{key:"getProminentColors",value:function(t){var n=this;t.resize(s.a.AUTO,100);var a=e._prepareDataForKmeans(t),r=(Date.now(),Object(i.a)(a,24,{initialization:"random",maxIterations:20}));r.centroids=r.centroids.sort((function(e,t){return t.size-e.size}));var o=r.centroids.map((function(e){return new f.a(n._labToHex(e.centroid))}));return this._getFinalColors(o).map((function(e){return{color:e.tohex()}}))}},{key:"_getFinalColors",value:function(e){var t=this;e.sort((function(e,n){return t._toArray(e.tohsv())[0]<t._toArray(n.tohsv())[0]}));for(var n=[],a=0;a<e.length;a+=4){for(var r=[],o=0;o<4;o++)r.push(e[a+o]);r.sort((function(e,n){return t._toArray(e.tohsv())[1]<t._toArray(n.tohsv())[1]})),n.push(r[r.length-1]),n.push(r[r.length-2])}for(var c=[],i=0;i<n.length;i+=2)this._toArray(n[i].tohsv())[2]>this._toArray(n[i+1].tohsv())[2]?c.push(n[i]):c.push(n[i+1]);return c}},{key:"_labToHex",value:function(e){return new f.a("lab("+e[0]+", "+e[1]+", "+e[2]+")").tohex()}},{key:"_prepareDataForKmeans",value:function(e){for(var t=[],n=0;n<e.bitmap.width;n++)for(var a=0;a<e.bitmap.height;a++){var r=e.getPixelColor(n,a),o=this._toHexColor(r),c=new f.a(o).tolab();c=c.substr(4,c.length-5).split(", ").map((function(e){return parseFloat(e)})),t.push(c)}return t}},{key:"_toHexColor",value:function(e){var t=s.a.intToRGBA(e);return new f.a("rgb("+t.r+", "+t.g+", "+t.b+")").tohex()}},{key:"_toArray",value:function(e){var t=e.indexOf("(");return(e=e.substr(t+1,e.length-t)).split(", ").map((function(e){return parseFloat(e)}))}}]),e}()},297:function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=n(32),c=n.n(o),i=n(0),l=n.n(i),s=n(10),u=n(71),f=n(4),m=n(3),p=n(41),d=n(279),h=n(70),g=n(62),v=n(28),y=n(18),b=n(115),E=n(54),w=n(237),P=n(43),x=n(64),C=n.n(x);function k(e){var t=Object(i.useState)(-1),n=c()(t,2),a=n[0],r=n[1],o=f.a.create({backgroundColor:{backgroundColor:e.color,height:112,alignSelf:"stretch"},info:{flexDirection:"row",justifyContent:"space-between",padding:10},colorNameText:{fontSize:16,fontWeight:"500"}}),u=new C.a(e.color),p=[{key:"HEX",value:u.tohex()},{key:"RGB",value:u.torgb()},{key:"HSL",value:u.tohsl()},{key:"HSV",value:u.tohsv()},{key:"HWB",value:u.tohwb()},{key:"CMYK",value:u.tocmyk()},{key:"CIELAB",value:u.tolab()},{key:"Luminance",value:(100*u.luminance()).toFixed(2)+"%"},{key:"Darkness",value:(100*u.darkness()).toFixed(2)+"%"}],d=function(e,t){var n;return function(){var a=this,r=arguments;clearTimeout(n),n=setTimeout((function(){return e.apply(a,r)}),t)}}((function(){return r(-1)}),2e3);return l.a.createElement(m.a,{style:{flex:1,flexDirection:"column",padding:8,backgroundColor:"#fff"}},l.a.createElement(m.a,{style:[o.backgroundColor]}),l.a.createElement(m.a,{style:{marginTop:20}},p.map((function(e,t){return l.a.createElement(P.a,{key:e.key,onPress:function(){return function(e,t){"android"===s.a.OS&&E.a.show("Text copied to clipboard!",E.a.LONG),b.a.setString(e),r(t),d()}(e.value,t)}},l.a.createElement(m.a,{style:o.info},l.a.createElement(y.a,{style:o.colorNameText},e.key," : "),l.a.createElement(y.a,null,e.value),t===a&&"web"===s.a.OS&&l.a.createElement(y.a,{style:{position:"absolute",backgroundColor:"rgb(64, 64, 58)",top:"-25px",right:"-10px",color:"#fff",padding:"5px",textAlign:"center",borderRadius:"6px"}},"Copied!"),l.a.createElement(w.a,{name:"copy"})))}))))}var S=n(5),O=n.n(S),D=n(6),I=n.n(D),R=n(9),A=n.n(R),T=n(2),B=n.n(T),j=n(7),N=n.n(j);function L(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var _=function(e){N()(a,e);var t,n=(t=a,function(){var e,n=B()(t);if(L()){var a=B()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return A()(this,e)});function a(){return O()(this,a),n.apply(this,arguments)}return I()(a,[{key:"render",value:function(){var e=this.props,t=e.style,n=e.onPress,a=e.children;return i.createElement(P.a,{style:[F.button,t],onPress:n},i.createElement(y.a,{style:F.text}," ",a," "))}}]),a}(i.Component),F=f.a.create({button:{shadowColor:"rgba(0,0,0, .4)",shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1,backgroundColor:"#fff",elevation:2,height:50,marginTop:10,marginBottom:10,justifyContent:"center",alignItems:"center"},text:{textTransform:"uppercase",fontWeight:"700",color:"#484a4c"}});function H(e){var t=e.navigation.getParam("color");return l.a.createElement(v.a,{style:U.container,showsVerticalScrollIndicator:!1},l.a.createElement(k,{navigation:e.navigation,color:t},t),l.a.createElement(_,{onPress:function(){return e.navigation.navigate("Palettes",{color:t})}},"See color palettes"))}H.navigationOptions=function(e){return{title:e.navigation.getParam("color")}};var U=f.a.create({container:{flex:1,paddingLeft:12,paddingRight:12}}),V=n(288);var z=f.a.create({container:{flexDirection:"column",margin:8}}),G=n(122),W=n(187);function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var J=function(e){N()(a,e);var t,n=(t=a,function(){var e,n=B()(t);if(M()){var a=B()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return A()(this,e)});function a(){return O()(this,a),n.apply(this,arguments)}return I()(a,[{key:"render",value:function(){return i.createElement(G.a,this.props,i.createElement(m.a,null,i.createElement(W.a,this.props),i.createElement(m.a,{style:Y.bottom},i.createElement(y.a,{style:Y.label},this.props.name))))}}]),a}(i.Component),Y=f.a.create({bottom:{flexDirection:"row",alignItems:"center",height:48},label:{flex:1,fontWeight:"500",marginHorizontal:16,color:p.a.darkGrey}});function $(e){var t=new C.a(e.navigation.getParam("color")),n=[];for(var a in t)/.*scheme$/i.test(a)&&"function"===typeof t[a]&&function(){var r,o=[];t[a]().forEach((function(e){return o.push({color:e.tohex()})})),n.push(l.a.createElement(J,{onPress:function(){return e.navigation.navigate("ColorList",{colors:o})},key:a.toString(),colors:o,name:(r=a.toString(),"string"!==typeof r?"":r.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/,"$1 $2$3").replace(/^./,(function(e){return e.toUpperCase()})))}))}();return l.a.createElement(v.a,{style:K.container,showsVerticalScrollIndicator:!1},n)}$.navigationOptions=function(e){return{title:e.navigation.getParam("color")}};var K=f.a.create({container:{paddingLeft:12,paddingRight:12}}),X=n(22),Z=n.n(X),q=n(51),Q=n(76),ee=n(63),te=n(83),ne=function(e){var t=Object(i.useState)(e.navigation.getParam("name")?e.navigation.getParam("name"):""),n=c()(t,2),a=n[0],o=n[1],s=Object(i.useState)([]),u=c()(s,2),f=u[0],p=u[1],d=Object(i.useState)(!1),h=c()(d,2),g=h[0],v=h[1],b=l.a.useState(!1),E=c()(b,2),w=E[0],P=E[1],x=l.a.useContext(ee.a),C=x.addPalette,k=x.allPalettes,S=x.isPro;Object(i.useEffect)((function(){var t=e.navigation.getParam("colors");"string"===typeof t&&(t=JSON.parse(t));var n=Z()(new Set(t||[]));v(!S&&n.length>4),p(n),setTimeout((function(){v(!1)}),5e3)}),[]);var O=e.title,D=e.navigationPath;return l.a.createElement(Q.c,{style:{margin:8},showsVerticalScrollIndicator:!1},l.a.createElement(J,{colors:f.slice(0,S?f.length:4),name:a}),l.a.createElement(m.a,{style:ae.card},l.a.createElement(y.a,{style:[ae.label,ae.title]},O),l.a.createElement(q.a,{style:ae.input,value:a,placeholder:"Enter a name for the palette",onChangeText:function(e){return o(e)}})),l.a.createElement(_,{onPress:function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!k[a]){n.next=4;break}return P(!0),setTimeout((function(){P(!1)}),3e3),n.abrupt("return",null);case 4:C(t={name:a,colors:f}),"Palette"===D?e.navigation.navigate(D,t):e.navigation.navigate(D);case 7:case"end":return n.stop()}}),null,null,null,Promise)}},"Save palette"),w&&l.a.createElement(te.b,{text:"A palette with same name already exists."}),g&&l.a.createElement(te.b,{text:"Unlock pro to save more than 4 colors!"}))},ae=f.a.create({card:{flex:1,flexDirection:"column",justifyContent:"center",shadowColor:"rgba(0,0,0, .4)",shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1,backgroundColor:"#fff",elevation:2,height:92,marginVertical:10,padding:10},title:{fontWeight:"700"},input:{flex:1,borderBottomColor:"black",borderBottomWidth:1},bottom:{flexDirection:"row",alignItems:"center",padding:16,height:54},label:{flex:1,color:p.a.darkGrey}});function re(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var oe=function(e){N()(a,e);var t,n=(t=a,function(){var e,n=B()(t);if(re()){var a=B()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return A()(this,e)});function a(){return O()(this,a),n.apply(this,arguments)}return I()(a,[{key:"render",value:function(){return i.createElement(m.a,{style:[ce.container,{backgroundColor:this.props.color}]},i.createElement(y.a,{style:ce.colorText},this.props.color))}}]),a}(i.Component),ce=f.a.create({container:{height:56,justifyContent:"center",alignItems:"center"},colorText:{fontWeight:"700",backgroundColor:"rgba(255, 255, 255, .3)",paddingLeft:8,paddingRight:8}});function ie(e){var t=function(e){var t=new Set,n=[];return e.forEach((function(e){t.has(e.color)||n.push(e),t.add(e.color)})),n}(e.navigation.getParam("colors"));return l.a.createElement(v.a,{style:le.listview,showsVerticalScrollIndicator:!1},t.map((function(e){return l.a.createElement(oe,{key:e.color,color:e.color})})),l.a.createElement(_,{onPress:function(){return e.navigation.navigate("SavePalette",{colors:t})}},"SAVE AS NEW PALETTE"))}ie.navigationOptions={title:"Colors"};var le=f.a.create({listview:{margin:8}});function se(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ue=function(e){N()(a,e);var t,n=(t=a,function(){var e,n=B()(t);if(se()){var a=B()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return A()(this,e)});function a(){return O()(this,a),n.apply(this,arguments)}return I()(a,[{key:"render",value:function(){var e=this;return i.createElement(G.a,this.props,i.createElement(m.a,null,i.createElement(m.a,{style:{backgroundColor:this.props.color,height:100}}),i.createElement(m.a,{style:fe.bottom},i.createElement(y.a,{style:fe.label},this.props.color),i.createElement(m.a,{style:fe.actionButtonsView},i.createElement(P.a,{onPress:function(t){t.preventDefault(),t.stopPropagation(),e.props.colorDeleteFromPalette()},style:fe.actionButton},i.createElement(w.a,{size:20,name:"trash"}))))))}}]),a}(i.Component),fe=f.a.create({bottom:{flexDirection:"row",alignItems:"center",padding:16,height:54},actionButtonsView:{flexDirection:"row",alignItems:"flex-end"},actionButton:{paddingRight:16},label:{flex:1,marginHorizontal:16,fontWeight:"500",color:p.a.darkGrey}}),me=n(21),pe=n(85),de=n(188);function he(e){var t=me.a.get("window"),n=t.height,a=(t.width,e.navigation.getParam("name")),r=l.a.useContext(ee.a),o=r.isPro,c=r.allPalettes,i=r.colorDeleteFromPalette,u=r.undoColorDeletion,f=r.addColorToPalette,d=c[a].colors,g=c[a].deletedColors?c[a].deletedColors:[],y=function(t){i(e.navigation.getParam("name"),t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{style:(ge.container,{minHeight:n-h.Header.HEIGHT-16})},l.a.createElement(v.a,{style:ge.listview,showsVerticalScrollIndicator:!1},d.slice(0,o?d.length:4).map((function(t,n){return l.a.createElement(ue,{key:t.color,onPress:function(){return e.navigation.navigate("ColorDetails",{color:t.color})},color:t.color,colorDeleteFromPalette:function(){y(n)}})})),l.a.createElement(de.a,null)),l.a.createElement(pe.a,{offsetY:60,bgColor:"rgba(68, 68, 68, 0.6)",hideShadow:"web"===s.a.OS,buttonColor:p.a.accent,onPress:function(){"android"===s.a.OS&&d.length>=4&&!1===o?E.a.show("Unlock pro to add more than 4 colors!",E.a.LONG):e.navigation.navigate("ColorPicker",{onDone:function(e){f(a,e)}})},style:"web"===s.a.OS?ge.actionButtonWeb:{}})),l.a.createElement(te.a,null,g.map((function(e){return l.a.createElement(te.c,{name:e.color,undoDeletionByName:function(e){u(a,e)}})}))))}he.navigationOptions=function(e){return{title:e.navigation.getParam("name")}};var ge=f.a.create({container:{flex:1},listview:{margin:8},actionButtonWeb:{position:"fixed",transform:"scale(1) rotate(0deg) !important",right:Math.max((me.a.get("window").width-600)/2,0),left:Math.max((me.a.get("window").width-600)/2,0)}}),ve=n(290),ye=n(477),be=(s.a.select({web:{headerMode:"screen"},default:{}}),Object(h.createStackNavigator)({ColorDetails:H,ColorPicker:function(e){var t=Object(i.useState)("#db0a5b"),n=c()(t,2),a=n[0],r=n[1];return l.a.createElement(v.a,{showsVerticalScrollIndicator:!1},l.a.createElement(m.a,{style:z.container},l.a.createElement(V.a,{onChangeColor:function(e){r(e)},style:[{height:350,flex:1}]}),l.a.createElement(_,{onPress:function(){e.navigation.goBack(),e.navigation.getParam("onDone")({color:a})}},"Done")))},Palettes:$,SavePalette:function(e){return l.a.createElement(v.a,{showsVerticalScrollIndicator:!1},l.a.createElement(ne,{title:"ADD NEW PALETTE",navigationPath:"Home",navigation:e.navigation}))},ColorList:ie,Palette:he,Home:ve.a,AddPaletteManually:function(e){return l.a.createElement(v.a,{showsVerticalScrollIndicator:!1},l.a.createElement(ne,{title:"ADD PALETTE NAME",navigationPath:"Palette",navigation:e.navigation}))}},{initialRouteName:"Home",transparentCard:!0,defaultNavigationOptions:{headerStyle:{backgroundColor:p.a.primary},headerRight:"web"===s.a.OS?l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{style:{padding:"5px"},onPress:function(){g.a.openURL("https://play.google.com/store/apps/details?id=app.croma")}},l.a.createElement(ye.a,{name:"google-play",style:{fontSize:25,height:25,color:"white"}})),l.a.createElement(P.a,{style:{padding:"5px",marginRight:"10px"},onPress:function(){g.a.openURL("https://github.com/croma-app/croma-react")}},l.a.createElement(ye.a,{name:"github",style:{fontSize:25,height:25,color:"white"}}))):"",headerTintColor:"#fff"}})),Ee=(Object(h.createAppContainer)(be),be),we=Object(h.createSwitchNavigator)({Main:Ee});we.path="";var Pe=Object(d.createBrowserApp)(we,{history:"hash"}),xe=n(103);function Ce(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ke=function(e){N()(a,e);var t,n=(t=a,function(){var e,n=B()(t);if(Ce()){var a=B()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return A()(this,e)});function a(e){var t;return O()(this,a),(t=n.call(this,e)).state={hasError:!1},t}return I()(a,[{key:"componentDidCatch",value:function(e,t){"web"===s.a.OS&&(window.location="/"),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?l.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),a}(l.a.Component);function Se(e){var t=Object(i.useState)(!1),n=c()(t,2),a=n[0],o=n[1],f=Object(ee.b)(ee.c);return Object(i.useEffect)((function(){r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(f.loadInitPaletteFromStore());case 2:o(!0);case 3:case"end":return e.stop()}}),null,null,null,Promise),"web"===s.a.OS&&f.setPurchase({platfrom:"web"})}),[]),a?l.a.createElement(ee.a.Provider,{value:f},l.a.createElement(ke,null,l.a.createElement(m.a,{style:[Oe.container]},l.a.createElement(u.a,{barStyle:"light-content",hidden:!1,backgroundColor:p.a.primaryDark,translucent:!1,networkActivityIndicatorVisible:!0}),l.a.createElement(m.a,{style:[{flex:1,backgroundColor:"transparent",maxWidth:600}]},"ios"===s.a.OS&&l.a.createElement(u.a,{barStyle:"default"}),l.a.createElement(Pe,null))))):l.a.createElement(m.a,{style:{flex:1,marginTop:"20%"}},l.a.createElement(xe.a,{size:"large",color:"#ef635f",animating:!0}))}n.d(t,"a",(function(){return Se}));var Oe=f.a.create({container:{flex:1,justifyContent:"center",backgroundColor:p.a.backgroundColor,flexDirection:"row"}})},300:function(e,t,n){n(301),e.exports=n(471)},301:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},41:function(e,t,n){"use strict";t.a={tintColor:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc",tabBar:"#fefefe",errorBackground:"red",errorText:"#fff",warningBackground:"#EAEB5E",warningText:"#666804",noticeBackground:"#2f95dc",noticeText:"#fff",primary:"#f1544d",primaryDark:"#c94740",text:"#fff",accent:"#f0d04c",grey:"#888",darkGrey:"#333",lightGrey:"#eee",white:"#fff",black:"#000",fadedBlack:"rgba(0, 0, 0, .5)",backgroundColor:"#f2f2f2"}},63:function(e,t,n){"use strict";var a=n(32),r=n.n(a),o=n(22),c=n.n(o),i=n(11),l=n.n(i),s=n(12),u=n.n(s),f=n(0),m=n.n(f),p=n(5),d=n.n(p),h=n(105),g=function e(){d()(this,e)};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}g.getApplicationState=function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(h.a.getItem("APLICATION_STATE"));case 2:if(!(e=t.sent)){t.next=7;break}return t.abrupt("return",JSON.parse(e));case 7:return t.abrupt("return",{});case 8:case"end":return t.stop()}}),null,null,null,Promise)},g.setApplicationState=function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(h.a.setItem("APLICATION_STATE",JSON.stringify(e)));case 2:case"end":return t.stop()}}),null,null,null,Promise)},g.setUserAlreadyExists=function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(h.a.setItem("IS_USER_ALREADY_EXIST","true"));case 2:case"end":return e.stop()}}),null,null,null,Promise)},g.checkUserAlreadyExists=function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(h.a.getItem("IS_USER_ALREADY_EXIST"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,null,null,Promise)},n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return P}));var b={allPalettes:{},deletedPalettes:{},isLoading:!1,isPro:!1},E=function(e){return e.colors.sort((function(e,t){return e.color>t.color?1:-1}))};function w(e){var t=function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:u((function(t){var n=t.allPalettes;return E(e),n[e.name]=e,y({},t,{allPalettes:n})}));case 1:case"end":return t.stop()}}),null,null,null,Promise)},n=function(e){u((function(t){var n=t.deletedPalettes;return delete n[e],y({},t,{deletedPalettes:n})}))},a=function(e,t){u((function(n){var a=n.allPalettes;return a[e].deletedColors.forEach((function(n,r){n.color===t&&a[e].deletedColors.splice(r,1)})),y({},n,{allPalettes:a})}))},o=Object(f.useState)(y({},e,{loadInitPaletteFromStore:function(){var e;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(g.getApplicationState());case 2:return e=n.sent,u((function(t){return y({},t,{},e)})),{},n.next=7,l.a.awrap(g.checkUserAlreadyExists());case 7:"true"!=n.sent&&(g.setUserAlreadyExists(),t({name:"Croma example palette",colors:[{color:"#F0675F"},{color:"#F3D163"},{color:"#EBEF5C"},{color:"#C9EF5B"}]}));case 9:case"end":return n.stop()}}),null,null,null,Promise)},undoDeletionByName:function(e){u((function(a){var r=a.deletedPalettes;return r[e]&&(t(y({},r[e])),n(e)),y({},a)}))},deletePaletteByName:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:u((function(t){var a=t.allPalettes,r=t.deletedPalettes;return a[e]?(r[e]=y({},a[e]),delete a[e],setTimeout((function(){n(e)}),3e3),y({},t,{allPalettes:a,deletedPalettes:r})):y({},t)}));case 1:case"end":return t.stop()}}),null,null,null,Promise)},addPalette:t,colorDeleteFromPalette:function(e,t){u((function(n){var r=n.allPalettes,o=r[e].colors.splice(t,1);return r[e].deletedColors?r[e].deletedColors.push(y({},o[0])):r[e].deletedColors=c()(o),setTimeout((function(){a(e,o[0].color)}),3e3),y({},n,{allPalettes:r})}))},undoColorDeletion:function(e,t){u((function(n){var a=n.allPalettes;return a[e].colors.push({color:t}),a[e].deletedColors.forEach((function(n,r){n.color===t&&a[e].deletedColors.splice(r,1)})),E(a[e]),y({},n,{allPalettes:a})}))},addColorToPalette:function(e,t){u((function(n){var a=n.allPalettes;return a[e].colors=a[e].colors.concat(t),E(a[e]),y({},n,{allPalettes:a})}))},setPurchase:function(e){u((function(t){return y({},t,{isPro:!0,purchaseDetails:e})}))}})),i=r()(o,2),s=i[0],u=i[1];return 0===Object.keys(s.allPalettes).length&&0===Object.keys(s.deletedPalettes).length&&s.isPro===e.isPro||function(e){g.setApplicationState(e)}(s),s}var P=m.a.createContext()},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a),o=n(3),c=n(18),i=n(4),l=n(43),s=function(e){return r.a.createElement(o.a,{style:{position:"absolute",bottom:0,width:"100%"}},e.children)},u=function(e){var t=e.name,n=e.undoDeletionByName;return r.a.createElement(o.a,{style:m.undoCard},r.a.createElement(o.a,{style:{width:"80%"}},r.a.createElement(c.a,{style:m.undoText},"Deleted ",t,". ")),r.a.createElement(l.a,{onPress:function(e){e.stopPropagation(),e.preventDefault(),n(t)}},r.a.createElement(c.a,{style:m.undoButton}," UNDO ")))},f=function(e){return r.a.createElement(o.a,{style:m.undoCard},r.a.createElement(o.a,{style:{width:"80%"}},r.a.createElement(c.a,{style:m.undoText},e.text)))},m=i.a.create({undoCard:{backgroundColor:"#303036",flexDirection:"row",padding:15,marginTop:1},undoText:{color:"#fff"},undoButton:{fontWeight:"bold",color:"#e6be0b"}})}},[[300,1,2]]]);
//# sourceMappingURL=../../107914fba384c5468194.map