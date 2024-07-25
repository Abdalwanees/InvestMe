"use strict";(self.webpackChunkInvestMe=self.webpackChunkInvestMe||[]).push([[288],{9288:(P,f,d)=>{d.r(f),d.d(f,{RegisterComponent:()=>w});var c=d(6814),t=d(95),e=d(4946);function p(r,s){1&r&&(e.TgZ(0,"div",21),e._uU(1," Name is required "),e.qZA())}function _(r,s){1&r&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function v(r,s){1&r&&(e.TgZ(0,"div"),e._uU(1,"Email is invalid"),e.qZA())}function Z(r,s){if(1&r&&(e.TgZ(0,"div",21),e.YNc(1,_,2,0,"div",22),e.YNc(2,v,2,0,"div",22),e.qZA()),2&r){const n=e.oxw();let i,o;e.xp6(1),e.Q6J("ngIf",null==(i=n.registerForm.get("email"))||null==i.errors?null:i.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("email"))||null==o.errors?null:o.errors.email)}}function b(r,s){1&r&&(e.TgZ(0,"div",21),e._uU(1," Password is required "),e.qZA())}function h(r,s){1&r&&(e.TgZ(0,"div",21),e._uU(1," Confirm Password is required "),e.qZA())}function C(r,s){1&r&&(e.TgZ(0,"div",21),e._uU(1," Passwords must match "),e.qZA())}function T(r,s){if(1&r&&(e.TgZ(0,"option",23),e._uU(1),e.qZA()),2&r){const n=s.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(n)}}function q(r,s){1&r&&(e.TgZ(0,"div",21),e._uU(1," Role is required "),e.qZA())}let w=(()=>{class r{constructor(n){this.fb=n,this.roles=["Investor","Innovator"]}ngOnInit(){this.registerForm=this.fb.group({name:["",t.kI.required],email:["",[t.kI.required,t.kI.email]],password:["",[t.kI.required,t.kI.minLength(6)]],confirmPassword:["",t.kI.required],role:["",t.kI.required]},{validators:this.mustMatch("password","confirmPassword")})}mustMatch(n,i){return o=>{const l=o.controls[i];l.errors&&!l.errors.mustMatch||l.setErrors(o.controls[n].value!==l.value?{mustMatch:!0}:null)}}onSubmit(){this.registerForm.invalid||console.log(this.registerForm.value)}static#e=this.\u0275fac=function(i){return new(i||r)(e.Y36(t.qu))};static#r=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:36,vars:9,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card","mt-5"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group","mb-3"],["for","name"],["type","text","id","name","formControlName","name","placeholder","Enter your name",1,"form-control"],["class","text-danger",4,"ngIf"],["for","email"],["type","email","id","email","formControlName","email","placeholder","Enter your email",1,"form-control"],["for","password"],["type","password","id","password","formControlName","password","placeholder","Enter your password",1,"form-control"],["for","confirmPassword"],["type","password","id","confirmPassword","formControlName","confirmPassword","placeholder","Confirm your password",1,"form-control"],["for","role"],["id","role","formControlName","role",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[1,"d-grid","gap-2"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger"],[4,"ngIf"],[3,"value"]],template:function(i,o){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"form",5),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(6,"div",6)(7,"label",7),e._uU(8,"Name"),e.qZA(),e._UZ(9,"input",8),e.YNc(10,p,2,0,"div",9),e.qZA(),e.TgZ(11,"div",6)(12,"label",10),e._uU(13,"Email"),e.qZA(),e._UZ(14,"input",11),e.YNc(15,Z,3,2,"div",9),e.qZA(),e.TgZ(16,"div",6)(17,"label",12),e._uU(18,"Password"),e.qZA(),e._UZ(19,"input",13),e.YNc(20,b,2,0,"div",9),e.qZA(),e.TgZ(21,"div",6)(22,"label",14),e._uU(23,"Confirm Password"),e.qZA(),e._UZ(24,"input",15),e.YNc(25,h,2,0,"div",9),e.YNc(26,C,2,0,"div",9),e.qZA(),e.TgZ(27,"div",6)(28,"label",16),e._uU(29,"Role"),e.qZA(),e.TgZ(30,"select",17),e.YNc(31,T,2,2,"option",18),e.qZA(),e.YNc(32,q,2,0,"div",9),e.qZA(),e.TgZ(33,"div",19)(34,"button",20),e._uU(35,"Register"),e.qZA()()()()()()()()),2&i){let a,l,m,u,g;e.xp6(5),e.Q6J("formGroup",o.registerForm),e.xp6(5),e.Q6J("ngIf",(null==(a=o.registerForm.get("name"))?null:a.touched)&&(null==(a=o.registerForm.get("name"))?null:a.invalid)),e.xp6(5),e.Q6J("ngIf",(null==(l=o.registerForm.get("email"))?null:l.touched)&&(null==(l=o.registerForm.get("email"))?null:l.invalid)),e.xp6(5),e.Q6J("ngIf",(null==(m=o.registerForm.get("password"))?null:m.touched)&&(null==(m=o.registerForm.get("password"))?null:m.invalid)),e.xp6(5),e.Q6J("ngIf",(null==(u=o.registerForm.get("confirmPassword"))?null:u.touched)&&(null==(u=o.registerForm.get("confirmPassword"))?null:u.invalid)),e.xp6(1),e.Q6J("ngIf",null==o.registerForm.errors?null:o.registerForm.errors.mustMatch),e.xp6(5),e.Q6J("ngForOf",o.roles),e.xp6(1),e.Q6J("ngIf",(null==(g=o.registerForm.get("role"))?null:g.touched)&&(null==(g=o.registerForm.get("role"))?null:g.invalid)),e.xp6(2),e.Q6J("disabled",o.registerForm.invalid)}},dependencies:[c.ez,c.sg,c.O5,t.UX,t._Y,t.YN,t.Kr,t.Fj,t.EJ,t.JJ,t.JL,t.sg,t.u],styles:[".container[_ngcontent-%COMP%]{margin-top:50px}.card[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:5px}.card-header[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;font-size:1.5rem}.card-body[_ngcontent-%COMP%]{padding:20px}.form-group[_ngcontent-%COMP%]{margin-bottom:1.5rem}.form-control[_ngcontent-%COMP%]{height:calc(2.25rem + 2px);padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control[_ngcontent-%COMP%]:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem #007bff40}.text-danger[_ngcontent-%COMP%]{font-size:.875rem}"]})}return r})()}}]);