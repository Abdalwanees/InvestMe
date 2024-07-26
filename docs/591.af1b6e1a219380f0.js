"use strict";(self.webpackChunkInvestMe=self.webpackChunkInvestMe||[]).push([[591],{9591:(b,c,a)=>{a.r(c),a.d(c,{UserProfileComponent:()=>d});var m=a(6814),g=a(72),n=a(95),e=a(4946);function u(t,l){if(1&t&&(e.TgZ(0,"li",41),e._uU(1),e.TgZ(2,"small"),e._uU(3),e.ALo(4,"date"),e.qZA()()),2&t){const o=l.$implicit;e.xp6(1),e.hij(" ",o.description," - "),e.xp6(2),e.Oqu(e.xi3(4,2,o.date,"short"))}}function f(t,l){if(1&t&&(e.TgZ(0,"div")(1,"ul",39),e.YNc(2,u,5,5,"li",40),e.qZA()()),2&t){const o=e.oxw();e.xp6(2),e.Q6J("ngForOf",o.user.activities)}}function p(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1,"No activity yet."),e.qZA())}function _(t,l){if(1&t&&(e.TgZ(0,"option",42),e._uU(1),e.qZA()),2&t){const o=l.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(o)}}function v(t,l){if(1&t&&e._UZ(0,"img",43),2&t){const o=e.oxw();e.Q6J("src",o.avatarPreview,e.LSH)}}let d=(()=>{class t{constructor(o){this.fb=o,this.user={name:"John Doe",role:"Investor",bio:"Innovative investor with a passion for startups.",activities:[{description:"Invested in XYZ project",date:new Date}]},this.roles=["Investor","Innovator","Admin"],this.avatarPreview=null,this.userSettingsForm=this.fb.group({name:[this.user.name],email:["john.doe@example.com"],role:[this.user.role],avatar:[""],bio:[this.user.bio],theme:["light"],notifications:[!0],storage:[!1]})}ngOnInit(){}onFileSelected(o){const r=o.target.files[0];if(r){const i=new FileReader;i.onload=s=>{this.avatarPreview=s.target.result,this.userSettingsForm.patchValue({avatar:r})},i.readAsDataURL(r)}}onSubmit(){console.log(this.userSettingsForm.value)}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(n.qu))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-profile"]],standalone:!0,features:[e.jDz],decls:64,vars:9,consts:[[1,"container","profile-container"],[1,"profile-header","text-center"],["alt","User Avatar",1,"avatar",3,"src"],[1,"mt-3"],[1,"bio"],[1,"profile-content"],["id","profileTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","activity-tab","data-bs-toggle","tab","href","#activity","role","tab","aria-controls","activity","aria-selected","true",1,"nav-link","active"],["id","settings-tab","data-bs-toggle","tab","href","#settings","role","tab","aria-controls","settings","aria-selected","false",1,"nav-link"],["id","profileTabsContent",1,"tab-content"],["id","activity","role","tabpanel","aria-labelledby","activity-tab",1,"tab-pane","fade","show","active"],[4,"ngIf","ngIfElse"],["noActivity",""],["id","settings","role","tabpanel","aria-labelledby","settings-tab",1,"tab-pane","fade"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","email"],["type","email","id","email","formControlName","email",1,"form-control"],["for","role"],["id","role","formControlName","role",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["for","avatar"],["type","file","id","avatar",1,"form-control",3,"change"],["alt","Avatar Preview","class","img-thumbnail mt-2",3,"src",4,"ngIf"],["for","bio"],["id","bio","rows","3","formControlName","bio",1,"form-control"],["for","theme"],["id","theme","formControlName","theme",1,"form-control"],["value","light"],["value","dark"],[1,"form-group","form-check"],["type","checkbox","id","notifications","formControlName","notifications",1,"form-check-input"],["for","notifications",1,"form-check-label"],["type","checkbox","id","storage","formControlName","storage",1,"form-check-input"],["for","storage",1,"form-check-label"],["type","submit",1,"btn","btn-primary"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[3,"value"],["alt","Avatar Preview",1,"img-thumbnail","mt-2",3,"src"]],template:function(r,i){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"h2",3),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA(),e.TgZ(7,"p",4),e._uU(8),e.qZA()(),e.TgZ(9,"div",5)(10,"ul",6)(11,"li",7)(12,"a",8),e._uU(13,"Activity"),e.qZA()(),e.TgZ(14,"li",7)(15,"a",9),e._uU(16,"Settings"),e.qZA()()(),e.TgZ(17,"div",10)(18,"div",11),e.YNc(19,f,3,1,"div",12),e.YNc(20,p,2,0,"ng-template",null,13,e.W1O),e.qZA(),e.TgZ(22,"div",14)(23,"form",15),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(24,"div",16)(25,"label",17),e._uU(26,"Name"),e.qZA(),e._UZ(27,"input",18),e.qZA(),e.TgZ(28,"div",16)(29,"label",19),e._uU(30,"Email"),e.qZA(),e._UZ(31,"input",20),e.qZA(),e.TgZ(32,"div",16)(33,"label",21),e._uU(34,"Role"),e.qZA(),e.TgZ(35,"select",22),e.YNc(36,_,2,2,"option",23),e.qZA()(),e.TgZ(37,"div",16)(38,"label",24),e._uU(39,"Avatar"),e.qZA(),e.TgZ(40,"input",25),e.NdJ("change",function(Z){return i.onFileSelected(Z)}),e.qZA()(),e.YNc(41,v,1,1,"img",26),e.TgZ(42,"div",16)(43,"label",27),e._uU(44,"Bio"),e.qZA(),e._UZ(45,"textarea",28),e.qZA(),e.TgZ(46,"div",16)(47,"label",29),e._uU(48,"Theme"),e.qZA(),e.TgZ(49,"select",30)(50,"option",31),e._uU(51,"Light"),e.qZA(),e.TgZ(52,"option",32),e._uU(53,"Dark"),e.qZA()()(),e.TgZ(54,"div",33),e._UZ(55,"input",34),e.TgZ(56,"label",35),e._uU(57,"Enable Notifications"),e.qZA()(),e.TgZ(58,"div",33),e._UZ(59,"input",36),e.TgZ(60,"label",37),e._uU(61,"Enable Storage Permission"),e.qZA()(),e.TgZ(62,"button",38),e._uU(63,"Save Settings"),e.qZA()()()()()()),2&r){const s=e.MAs(21);e.xp6(2),e.Q6J("src",i.avatarPreview||"assets/images/hero.jpg",e.LSH),e.xp6(2),e.Oqu(i.user.name),e.xp6(2),e.Oqu(i.user.role),e.xp6(2),e.Oqu(i.user.bio),e.xp6(11),e.Q6J("ngIf",i.user.activities.length)("ngIfElse",s),e.xp6(4),e.Q6J("formGroup",i.userSettingsForm),e.xp6(13),e.Q6J("ngForOf",i.roles),e.xp6(5),e.Q6J("ngIf",i.avatarPreview)}},dependencies:[m.ez,m.sg,m.O5,m.uU,g.Bz,n.UX,n._Y,n.YN,n.Kr,n.Fj,n.Wl,n.EJ,n.JJ,n.JL,n.sg,n.u],styles:[".profile-container[_ngcontent-%COMP%]{max-width:800px;margin:auto;padding:2rem 1rem}.profile-header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;border:5px solid #007bff}.profile-header[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]{font-size:1rem;color:#666}.profile-content[_ngcontent-%COMP%]{margin-top:2rem}.profile-content[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{justify-content:center}.profile-content[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{margin-top:2rem}"]})}return t})()}}]);