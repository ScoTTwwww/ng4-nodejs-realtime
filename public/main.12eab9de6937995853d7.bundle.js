webpackJsonp([1],{0:function(n,t,l){n.exports=l("cDNt")},1:function(n,t){},cDNt:function(n,t,l){"use strict";function e(n){return _._34(0,[(n()(),_._16(0,0,null,null,3,"button",[["style","width: 200px; height: 50px; font-size: 30px"],["type","button"]],null,[[null,"click"]],function(n,t,l){var e=!0;if("click"===t){e=!1!==_._28(n,1).onClick()&&e}return e},null,null)),_._14(1,16384,null,0,b.l,[b.k,b.a,[8,null],_.N,_.n],{routerLink:[0,"routerLink"]},null),_._29(2,1),(n()(),_._33(-1,null,["emit"])),(n()(),_._33(-1,null,[" "])),(n()(),_._16(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),_._33(-1,null,["\n"])),(n()(),_._16(7,0,null,null,3,"button",[["style","width: 200px; height: 50px; font-size: 30px; margin-top: 10px"],["type","button"]],null,[[null,"click"]],function(n,t,l){var e=!0;if("click"===t){e=!1!==_._28(n,8).onClick()&&e}return e},null,null)),_._14(8,16384,null,0,b.l,[b.k,b.a,[8,null],_.N,_.n],{routerLink:[0,"routerLink"]},null),_._29(9,1),(n()(),_._33(-1,null,["view"]))],function(n,t){n(t,1,0,n(t,2,0,"./emit")),n(t,8,0,n(t,9,0,"./view"))},null)}function u(n){return _._34(0,[(n()(),_._16(0,0,null,null,1,"app-menu",[],null,null,null,e,E)),_._14(1,114688,null,0,w,[],null,null)],function(n,t){n(t,1,0)},null)}function i(n){return _._34(0,[_._31(402653184,1,{videoElement:0}),_._31(402653184,2,{canvasElement:0}),(n()(),_._33(-1,null,["\n"])),(n()(),_._16(3,0,[[1,0],["videoElement",1]],null,0,"video",[["autoplay",""],["playsinline",""],["playsinlinestyle","width:100px;height:50px;"]],null,null,null,null,null)),(n()(),_._33(-1,null,["\n"])),(n()(),_._16(5,0,[[2,0],["canvasElement",1]],null,0,"canvas",[["style","width: 10px;height: 10px;"]],null,null,null,null,null)),(n()(),_._33(-1,null,["\n"])),(n()(),_._16(7,0,null,null,0,"div",[["id","logger"]],null,null,null,null,null)),(n()(),_._33(-1,null,["\n\n"])),(n()(),_._16(9,0,null,null,3,"button",[["style","width: 200px; height: 50px; font-size: 30px"],["type","button"]],null,[[null,"click"]],function(n,t,l){var e=!0;if("click"===t){e=!1!==_._28(n,10).onClick()&&e}return e},null,null)),_._14(10,16384,null,0,b.l,[b.k,b.a,[8,null],_.N,_.n],{routerLink:[0,"routerLink"]},null),_._29(11,1),(n()(),_._33(-1,null,["Back"]))],function(n,t){n(t,10,0,n(t,11,0,"/"))},null)}function o(n){return _._34(0,[(n()(),_._16(0,0,null,null,1,"app-emit",[],null,null,null,i,D)),_._14(1,114688,null,0,M,[],null,null)],function(n,t){n(t,1,0)},null)}function r(n){return _._34(0,[_._31(402653184,1,{canvasElement:0}),(n()(),_._33(-1,null,["\n"])),(n()(),_._16(2,0,[[1,0],["canvasElement",1]],null,0,"img",[],null,null,null,null,null)),(n()(),_._33(-1,null,["\n \n"])),(n()(),_._16(4,0,null,null,3,"button",[["style","width: 200px; height: 50px; font-size: 30px"],["type","button"]],null,[[null,"click"]],function(n,t,l){var e=!0;if("click"===t){e=!1!==_._28(n,5).onClick()&&e}return e},null,null)),_._14(5,16384,null,0,b.l,[b.k,b.a,[8,null],_.N,_.n],{routerLink:[0,"routerLink"]},null),_._29(6,1),(n()(),_._33(-1,null,["Back"]))],function(n,t){n(t,5,0,n(t,6,0,"/"))},null)}function c(n){return _._34(0,[(n()(),_._16(0,0,null,null,1,"app-view",[],null,null,null,r,z)),_._14(1,4308992,null,0,P,[],null,null)],function(n,t){n(t,1,0)},null)}function s(n){return _._34(0,[_._31(402653184,1,{videoElement:0}),(n()(),_._33(-1,null,["\n \n"])),(n()(),_._16(2,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),_._14(3,212992,null,0,b.n,[b.b,_.Z,_.k,[8,null],_.i],null,null),(n()(),_._33(-1,null,["\n"]))],function(n,t){n(t,3,0)},null)}function a(n){return _._34(0,[(n()(),_._16(0,0,null,null,3,"app-root",[],null,null,null,s,U)),_._30(512,null,d,d,[]),_._30(512,null,v,v,[d]),_._14(3,114688,null,0,k,[v,d],null,null)],function(n,t){n(t,3,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var _=l("/oeL"),f={production:!0},p=function(){function n(){}return n}(),h=l("MjLF"),g=l("bKpL"),m=l("Dqrr"),d=function(){function n(){this.message=new m.BehaviorSubject(""),this.videostream=new m.BehaviorSubject(null)}return n.prototype.connect=function(){var n=this;this.socket=h("http://localhost:5000");var t=new g.Observable(function(t){return n.socket.on("message",function(l){t.next(n.stream),n.message.next(l)}),function(){n.socket.disconnect()}}),l={next:function(t){console.log(t,JSON.stringify(t)),n.socket.emit("message",t)}};return m.Subject.create(l,t)},n.prototype.getMessage=function(){return this.message.asObservable()},n.ctorParameters=function(){return[]},n}(),v=function(){function n(n){this.wsService=n,this.message=new m.BehaviorSubject(""),this.messages=n.connect().map(function(n){return n})}return n.prototype.sendMsg=function(n){this.messages.next(n),this.message.next(n)},n.prototype.getMessage=function(){return this.message.asObservable()},n.ctorParameters=function(){return[{type:d}]},n}(),k=function(){function n(n,t){this.chat=n,this.ws=t,this.title="app",this.xxx="",this.message=this.ws.getMessage()}return n.prototype.ngOnInit=function(){this.chat.messages.subscribe(function(n){})},n.prototype.sendMessage=function(){this.chat.sendMsg(this.xxx)},n.prototype.video=function(){console.log("\u7b2c\u4e00\u6b21\u53d6\u5f97\u8996\u8a0astream");var n={audio:!0,video:{facingMode:"user"}},t=this;navigator.mediaDevices.getUserMedia(n).then(function(n){t.ws.stream=n})},n.ctorParameters=function(){return[{type:v},{type:d}]},n}(),x=[""],b=l("BkNc"),w=function(){function n(){}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}(),y=[x],E=_._13({encapsulation:0,styles:y,data:{}}),j=_._11("app-menu",w,u,{},{},[]),L=[""],M=function(){function n(){this.socket=h("http://localhost:5000")}return n.prototype.ngOnInit=function(){this.video()},n.prototype.viewVideo=function(n,t){var l=this.canvasElement.nativeElement;t.drawImage(n,0,0,t.width,t.height),this.socket.emit("message",l.toDataURL("image/webp"))},n.prototype.video=function(){var n=this.canvasElement.nativeElement,t=n.getContext("2d");n.width=800,n.height=600,t.width=n.width,t.height=n.height;var l=this.videoElement.nativeElement,e={audio:!0,video:{facingMode:"user"}},u=this;navigator.mediaDevices.getUserMedia(e).then(function(n){l.src=window.URL.createObjectURL(n)}),setInterval(function(){u.viewVideo(l,t)},30)},n.ctorParameters=function(){return[]},n}(),O=[L],D=_._13({encapsulation:0,styles:O,data:{}}),I=_._11("app-emit",M,o,{},{},[]),N=[""],P=function(){function n(){this.xxxx="",this.socket=h("http://localhost:5000")}return n.prototype.ngOnInit=function(){var n=this,t=this.canvasElement.nativeElement;this.socket.on("message",function(l){t.src=l.text,n.xxxx="66666"})},n.prototype.ngAfterViewInit=function(){},n.ctorParameters=function(){return[]},n}(),B=[N],z=_._13({encapsulation:0,styles:B,data:{}}),C=_._11("app-view",P,c,{},{},[]),F=[""],S=[F],U=_._13({encapsulation:0,styles:S,data:{}}),q=_._11("app-root",k,a,{},{},[]),A=l("qbdv"),V=l("fc+i"),G=l("bm2B"),R=function(){function n(){}return n}(),J=function(){function n(){}return n}(),X=function(){function n(){}return n}(),Y=function(){function n(){}return n}(),K=function(){function n(){}return n}(),Q=function(){function n(){}return n}(),Z=function(){function n(){}return n}(),H=_._12(p,[k],function(n){return _._26([_._27(512,_.k,_._9,[[8,[j,I,C,q]],[3,_.k],_.E]),_._27(5120,_.A,_._25,[[3,_.A]]),_._27(4608,A.i,A.h,[_.A]),_._27(5120,_.c,_._17,[]),_._27(5120,_.y,_._22,[]),_._27(5120,_.z,_._23,[]),_._27(4608,V.b,V.s,[A.c]),_._27(6144,_.Q,null,[V.b]),_._27(4608,V.e,V.f,[]),_._27(5120,V.c,function(n,t,l,e){return[new V.k(n),new V.o(t),new V.n(l,e)]},[A.c,A.c,A.c,V.e]),_._27(4608,V.d,V.d,[V.c,_.G]),_._27(135680,V.m,V.m,[A.c]),_._27(4608,V.l,V.l,[V.d,V.m]),_._27(6144,_.O,null,[V.l]),_._27(6144,V.p,null,[V.m]),_._27(4608,_.X,_.X,[_.G]),_._27(4608,V.g,V.g,[A.c]),_._27(4608,V.i,V.i,[A.c]),_._27(5120,b.a,b.w,[b.k]),_._27(4608,b.d,b.d,[]),_._27(6144,b.f,null,[b.d]),_._27(135680,b.o,b.o,[b.k,_.D,_.j,_.w,b.f]),_._27(4608,b.e,b.e,[]),_._27(5120,b.h,b.z,[b.x]),_._27(5120,_.b,function(n){return[n]},[b.h]),_._27(4608,G.c,G.c,[]),_._27(512,A.b,A.b,[]),_._27(1024,_.o,V.q,[]),_._27(1024,_.F,function(){return[b.s()]},[]),_._27(512,b.x,b.x,[_.w]),_._27(1024,_.d,function(n,t,l){return[V.r(n,t),b.y(l)]},[[2,V.h],[2,_.F],b.x]),_._27(512,_.e,_.e,[[2,_.d]]),_._27(131584,_._15,_._15,[_.G,_._10,_.w,_.o,_.k,_.e]),_._27(2048,_.g,null,[_._15]),_._27(512,_.f,_.f,[_.g]),_._27(512,V.a,V.a,[[3,V.a]]),_._27(1024,b.r,b.u,[[3,b.k]]),_._27(512,b.q,b.c,[]),_._27(512,b.b,b.b,[]),_._27(256,b.g,{},[]),_._27(1024,A.g,b.t,[A.k,[2,A.a],b.g]),_._27(512,A.f,A.f,[A.g]),_._27(512,_.j,_.j,[]),_._27(512,_.D,_.U,[_.j,[2,_.V]]),_._27(1024,b.i,function(){return[[{path:"",component:w},{path:"emit",component:M},{path:"view",component:P}],[],[],[]]},[]),_._27(1024,b.k,b.v,[_.g,b.q,b.b,A.f,_.w,_.D,_.j,b.i,b.g,[2,b.p],[2,b.j]]),_._27(512,b.m,b.m,[[2,b.r],[2,b.k]]),_._27(512,R,R,[]),_._27(512,G.b,G.b,[]),_._27(512,G.a,G.a,[]),_._27(512,J,J,[]),_._27(512,X,X,[]),_._27(512,Y,Y,[]),_._27(512,K,K,[]),_._27(512,Q,Q,[]),_._27(512,Z,Z,[]),_._27(512,p,p,[])])});f.production&&Object(_._3)(),Object(V.j)().bootstrapModuleFactory(H).catch(function(n){return console.log(n)})},gFIY:function(n,t){function l(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id="gFIY"}},[0]);