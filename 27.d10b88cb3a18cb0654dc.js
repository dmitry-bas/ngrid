(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"4hZz":function(t,e,c){"use strict";c.r(e);var i=c("D57K"),o=c("2kYt"),r=c("F1o0"),s=c("XApm"),n=c("WNo/"),l=c("cc5W"),a=c("D0EO"),u=c("JRn2"),b=c("EM62"),d=c("Ht9o"),p=c("R3BP"),h=c("CWpx");function g(t,e){if(1&t&&b.Vb(0,"pbl-ngrid",11),2&t){const t=b.mc(2);b.tc("dataSource",t.ds)("columns",t.columns)}}function m(t,e){if(1&t&&b.Vb(0,"pbl-ngrid",12),2&t){const t=b.mc(2);b.tc("dataSource",t.ds)("columns",t.columns)}}function f(t,e){if(1&t&&b.Vb(0,"pbl-ngrid",13),2&t){const t=b.mc(2);b.tc("dataSource",t.ds)("columns",t.columns)}}function k(t,e){if(1&t&&(b.Yb(0,7),b.Ic(1,g,1,2,"pbl-ngrid",8),b.Ic(2,m,1,2,"pbl-ngrid",9),b.Ic(3,f,1,2,"pbl-ngrid",10),b.Xb()),2&t){b.mc();const t=b.yc(1);b.tc("ngSwitch",t.value),b.Hb(1),b.tc("ngSwitchCase","auto"),b.Hb(1),b.tc("ngSwitchCase","fixed"),b.Hb(1),b.tc("ngSwitchCase","none")}}let S=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(s.p)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=this.createDatasource()}removeDatasource(){this.ds&&(this.ds.dispose(),this.ds=void 0)}createDatasource(){return Object(s.q)().onTrigger(()=>this.datasource.getPeople(0,1500)).create()}};return t.\u0275fac=function(e){return new(e||t)(b.Ub(u.a))},t.\u0275cmp=b.Ob({type:t,selectors:[["pbl-virtual-scroll-example"]],decls:11,vars:2,consts:[["value","auto",3,"change"],["rdGroup","matRadioGroup"],["value","auto"],["value","fixed"],["value","none"],[3,"ngSwitch",4,"ngIf"],["mat-button","",3,"disabled","click"],[3,"ngSwitch"],["blockUi","","vScrollAuto","",3,"dataSource","columns",4,"ngSwitchCase"],["blockUi","","vScrollFixed","48",3,"dataSource","columns",4,"ngSwitchCase"],["blockUi","","vScrollNone","",3,"dataSource","columns",4,"ngSwitchCase"],["blockUi","","vScrollAuto","",3,"dataSource","columns"],["blockUi","","vScrollFixed","48",3,"dataSource","columns"],["blockUi","","vScrollNone","",3,"dataSource","columns"]],template:function(t,e){1&t&&(b.ac(0,"mat-radio-group",0,1),b.ic("change",(function(t){return e.removeDatasource()})),b.ac(2,"mat-radio-button",2),b.Kc(3,"Auto Size"),b.Zb(),b.ac(4,"mat-radio-button",3),b.Kc(5,"Fixed Size"),b.Zb(),b.ac(6,"mat-radio-button",4),b.Kc(7,"No Virtual Scroll"),b.Zb(),b.Zb(),b.Ic(8,k,4,4,"ng-container",5),b.ac(9,"button",6),b.ic("click",(function(t){return e.ds=e.createDatasource()})),b.Kc(10,"Load Data"),b.Zb()),2&t&&(b.Hb(8),b.tc("ngIf",e.ds),b.Hb(1),b.tc("disabled",e.ds))},directives:[r.b,r.a,o.t,o.x,o.y,d.a,p.b,h.b],styles:[""],encapsulation:2,changeDetection:0}),t=Object(i.a)([Object(l.e)("pbl-virtual-scroll-example",{title:"Virtual Scroll"})],t),t})();var v=c("16RR");let w=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(s.p)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=this.createDatasource(),this.isScrolling=0}createDatasource(){return Object(s.q)().onTrigger(()=>this.datasource.getPeople(0,1500)).create()}};return t.\u0275fac=function(e){return new(e||t)(b.Ub(u.a))},t.\u0275cmp=b.Ob({type:t,selectors:[["pbl-scrolling-state-example"]],decls:12,vars:4,consts:[[3,"dataSource","columns","scrolling"],[1,"virtual-scroll-css-scrolling-demo-on"],[1,"virtual-scroll-css-scrolling-demo-off"]],template:function(t,e){1&t&&(b.ac(0,"pbl-ngrid",0),b.ic("scrolling",(function(t){return e.isScrolling=t})),b.Zb(),b.ac(1,"h1"),b.Kc(2,"Scrolling is "),b.ac(3,"span",1),b.Kc(4,"ON"),b.Zb(),b.ac(5,"span",2),b.Kc(6,"OFF"),b.Zb(),b.Kc(7," - (CSS)"),b.Zb(),b.ac(8,"h1"),b.Kc(9),b.Zb(),b.ac(10,"h1"),b.Kc(11),b.Zb()),2&t&&(b.tc("dataSource",e.ds)("columns",e.columns),b.Hb(9),b.Mc("Scrolling is ",e.isScrolling?"ON":"OFF"," - (scrolling) event"),b.Hb(2),b.Mc("Last Scrolling Direction: ",1===e.isScrolling?"END":"START",""))},directives:[d.a,v.a],styles:["pbl-ngrid+h1 .virtual-scroll-css-scrolling-demo-on{display:none}.pbl-ngrid.pbl-ngrid-scrolling+h1 .virtual-scroll-css-scrolling-demo-on{display:inline}.pbl-ngrid.pbl-ngrid-scrolling+h1 .virtual-scroll-css-scrolling-demo-off{display:none}"],encapsulation:2,changeDetection:0}),t=Object(i.a)([Object(l.e)("pbl-scrolling-state-example",{title:"Scrolling State"})],t),t})();c.d(e,"VirtualScrollExampleModule",(function(){return U}));let U=(()=>{let t=class{};return t.\u0275mod=b.Sb({type:t}),t.\u0275inj=b.Rb({factory:function(e){return new(e||t)},imports:[[o.c,r.c,a.a,s.i,n.a]]}),t=Object(i.a)([Object(l.a)(S,w)],t),t})()},D0EO:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var i=c("qFEQ"),o=c("GAih"),r=c("cc5W"),s=c("EM62");let n=(()=>{class t{}return t.\u0275mod=s.Sb({type:t}),t.\u0275inj=s.Rb({factory:function(e){return new(e||t)},imports:[[i.i,o.e,r.l],i.i,o.e,r.l]}),t})()},R3BP:function(t,e,c){"use strict";c.d(e,"a",(function(){return n})),c.d(e,"b",(function(){return l}));var i=c("9bRT"),o=c("5XID"),r=c("XApm"),s=c("EM62");const n="blockUi";let l=(()=>{class t{constructor(t,e){this.grid=t,this._blockInProgress=!1,this._removePlugin=e.setPlugin(n,this),t.registry.changes.subscribe(t=>{for(const e of t)switch(e.type){case"blocker":this.setupBlocker()}}),e.events.subscribe(t=>{if("onDataSource"===t.kind){const{prev:e,curr:c}=t;e&&r.u.unrx.kill(this,e),c.onSourceChanging.pipe(r.u.unrx(this,c)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),c.onSourceChanged.pipe(r.u.unrx(this,c)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(t){let e=Object(o.c)(t);!e||"auto"!==t&&""!==t||(e="auto"),Object(i.a)(t)&&this._blockUi!==t?(Object(i.a)(this._blockUi)&&r.u.unrx.kill(this,this._blockUi),this._blockUi=t,t.pipe(r.u.unrx(this,this._blockUi)).subscribe(t=>{this._blockInProgress=t,this.setupBlocker()})):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){r.u.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.grid.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",t.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return t.\u0275fac=function(e){return new(e||t)(s.Ub(r.e),s.Ub(r.l))},t.\u0275dir=s.Pb({type:t,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),t})()},"WNo/":function(t,e,c){"use strict";var i=c("2kYt"),o=c("fL1z"),r=c("XApm"),s=c("R3BP"),n=c("EM62");let l=(()=>{class t{}return t.NGRID_PLUGIN=Object(r.s)({id:s.a},s.b),t.\u0275mod=n.Sb({type:t}),t.\u0275inj=n.Rb({factory:function(e){return new(e||t)},imports:[[i.c,o.q,r.i]]}),t})();c.d(e,"a",(function(){return l}))}}]);