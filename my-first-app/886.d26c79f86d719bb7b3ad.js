(self.webpackChunkmy_first_app=self.webpackChunkmy_first_app||[]).push([[886],{5886:function(t,e,n){"use strict";n.r(e),n.d(e,{ShoppingListModule:function(){return m}});var i=n(1116),o=n(1462),r=n(6959),s=n(5474),c=n(3820),u=n(2955),d=n(6190),p=["f"];function a(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"button",14),c.NdJ("click",function(){return c.CHM(n),c.oxw().onDelete()}),c._uU(1,"Delete"),c.qZA()}}var l=function(){function t(t){this.slService=t,this.editMode=!1}return t.prototype.ngOnInit=function(){var t=this;this.subscription=this.slService.startedEditing.subscribe(function(e){t.editItemIndex=e,t.editMode=!0,t.editedItem=t.slService.getIngredient(e),t.slForm.setValue({name:t.editedItem.name,amount:t.editedItem.amount})})},t.prototype.onSubmit=function(t){var e=t.value,n=new d.o(e.name,e.amount);this.editMode?this.slService.updateIngredient(this.editItemIndex,n):this.slService.addIngredient(n),this.editMode=!1,t.reset()},t.prototype.onClear=function(){this.slForm.reset(),this.editMode=!1},t.prototype.onDelete=function(){this.slService.deleteIngredient(this.editItemIndex),this.onClear()},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t.\u0275fac=function(e){return new(e||t)(c.Y36(u._))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){var n;1&t&&c.Gf(p,5),2&t&&c.iGM(n=c.CRH())&&(e.slForm=n.first)},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],[1,"col-xs-10"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"form",2,3),c.NdJ("ngSubmit",function(){c.CHM(n);var t=c.MAs(3);return e.onSubmit(t)}),c.TgZ(4,"div",0),c.TgZ(5,"div",4),c.TgZ(6,"label",5),c._uU(7,"Name"),c.qZA(),c._UZ(8,"input",6),c.qZA(),c.TgZ(9,"div",7),c.TgZ(10,"label",8),c._uU(11,"Amount"),c.qZA(),c._UZ(12,"input",9),c.qZA(),c.qZA(),c.TgZ(13,"div",0),c.TgZ(14,"div",10),c.TgZ(15,"button",11),c._uU(16),c.qZA(),c.YNc(17,a,2,0,"button",12),c.TgZ(18,"button",13),c.NdJ("click",function(){return e.onClear()}),c._uU(19,"Clear"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&t){var i=c.MAs(3);c.xp6(15),c.Q6J("disabled",!i.valid),c.xp6(1),c.Oqu(e.editMode?"Update":"Add"),c.xp6(1),c.Q6J("ngIf",e.editMode)}},directives:[o._Y,o.JL,o.F,o.Fj,o.JJ,o.On,o.Q7,o.wV,o.c5,i.O5],styles:[""]}),t}();function g(t,e){if(1&t){var n=c.EpF();c.TgZ(0,"a",4),c.NdJ("click",function(){var t=c.CHM(n).index;return c.oxw().onEditItem(t)}),c._uU(1),c.qZA()}if(2&t){var i=e.$implicit;c.xp6(1),c.AsE(" ",i.name," (",i.amount,") ")}}var f=function(){function t(t){this.slService=t}return t.prototype.ngOnInit=function(){var t=this;this.ingredients=this.slService.getIngredients(),this.igChangeSub=this.slService.ingredientChanged.subscribe(function(e){t.ingredients=e})},t.prototype.onEditItem=function(t){this.slService.startedEditing.next(t)},t.prototype.ngOnDestroy=function(){this.igChangeSub.unsubscribe()},t.\u0275fac=function(e){return new(e||t)(c.Y36(u._))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group","list"],["class","list-group-item","style","cursor: pointer ;background-color:firebrick;\n    color:white;",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer","background-color","firebrick","color","white",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c._UZ(2,"app-shopping-edit"),c._UZ(3,"hr"),c.TgZ(4,"ul",2),c.YNc(5,g,2,2,"a",3),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(5),c.Q6J("ngForOf",e.ingredients))},directives:[l,i.sg],styles:[""]}),t}(),m=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.ez,o.u5,r.Bz.forChild([{path:"",component:f,canActivate:[s.a]}])]]}),t}()}}]);