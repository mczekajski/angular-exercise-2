(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{xzpJ:function(t,s,i){"use strict";i.r(s),i.d(s,"ViewsModule",function(){return m});var e=i("ofXK"),c=i("tyNb"),n=i("fXoL"),a=i("JmOq");function r(t,s){if(1&t&&(n.Hb(0,"div",2),n.Hb(1,"div",3),n.ac(2),n.Gb(),n.Hb(3,"div",4),n.ac(4),n.Gb(),n.Gb()),2&t){const t=s.$implicit;n.tb(2),n.cc(" ",t.value," "),n.tb(2),n.cc(" ",t.label," ")}}let o=(()=>{class t{constructor(){this.data=[]}ngOnInit(){}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=n.wb({type:t,selectors:[["app-statistics"]],inputs:{data:"data"},decls:2,vars:1,consts:[[1,"ui","statistics"],["class","statistic",4,"ngFor","ngForOf"],[1,"statistic"],[1,"value"],[1,"label"]],template:function(t,s){1&t&&(n.Hb(0,"div",0),n.Zb(1,r,5,2,"div",1),n.Gb()),2&t&&(n.tb(1),n.Sb("ngForOf",s.data))},directives:[e.i],styles:[""]}),t})();function b(t,s){if(1&t&&(n.Hb(0,"div",2),n.Hb(1,"div",3),n.Db(2,"img",4),n.Gb(),n.Hb(3,"div",5),n.Hb(4,"div",6),n.ac(5),n.Gb(),n.Hb(6,"div",7),n.Hb(7,"p"),n.ac(8),n.Gb(),n.Gb(),n.Gb(),n.Gb()),2&t){const t=s.$implicit;n.tb(2),n.Sb("src",t.image,n.Xb),n.tb(3),n.bc(t.title),n.tb(3),n.cc(" ",t.description," ")}}let p=(()=>{class t{constructor(){this.items=[]}ngOnInit(){}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=n.wb({type:t,selectors:[["app-item-list"]],inputs:{items:"items"},decls:2,vars:1,consts:[[1,"ui","items"],["class","item",4,"ngFor","ngForOf"],[1,"item"],[1,"image"],[3,"src"],[1,"content"],[1,"header"],[1,"description"]],template:function(t,s){1&t&&(n.Hb(0,"div",0),n.Zb(1,b,9,3,"div",1),n.Gb()),2&t&&(n.tb(1),n.Sb("ngForOf",s.items))},directives:[e.i],styles:[""]}),t})();const l=[{path:"",component:(()=>{class t{constructor(){this.stats=[{value:22,label:"# of Users"},{value:900,label:"Revenue"},{value:50,label:"Reviews"}],this.items=[{image:"/assets/images/couch.jpeg",title:"Couch",description:"This is a fantastic couch to sit on"},{image:"/assets/images/dresser.jpeg",title:"Dresser",description:"This is a great dresser to put stuff in"}]}ngOnInit(){}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=n.wb({type:t,selectors:[["app-views-home"]],decls:6,vars:2,consts:[[3,"data"],[3,"items"]],template:function(t,s){1&t&&(n.Hb(0,"app-divider"),n.ac(1,"Statistics"),n.Gb(),n.Db(2,"app-statistics",0),n.Hb(3,"app-divider"),n.ac(4,"Item List Component"),n.Gb(),n.Db(5,"app-item-list",1)),2&t&&(n.tb(2),n.Sb("data",s.stats),n.tb(3),n.Sb("items",s.items))},directives:[a.a,o,p],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=n.Ab({type:t}),t.\u0275inj=n.zb({factory:function(s){return new(s||t)},imports:[[c.c.forChild(l)],c.c]}),t})();var d=i("PCNd");let m=(()=>{class t{}return t.\u0275mod=n.Ab({type:t}),t.\u0275inj=n.zb({factory:function(s){return new(s||t)},imports:[[e.b,u,d.a]]}),t})()}}]);