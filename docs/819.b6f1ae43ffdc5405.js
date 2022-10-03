"use strict";(self.webpackChunktask_management_system=self.webpackChunktask_management_system||[]).push([[819],{7819:(F,p,a)=>{a.r(p),a.d(p,{TaskListModule:()=>A});var r=a(9808),u=a(459),t=a(1223),o=a(2382),T=a(8408),m=a(7579),k=a(520);let g=(()=>{class s{constructor(e){this.httpClient=e,this.passTaskDataChannel=new m.x}getCompletedTaskDataFn(){return this.httpClient.get("./assets/completedTask.json")}getPendingTaskDataFn(){return this.httpClient.get("./assets/pendingTask.json")}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(k.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function h(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"select",4),t.NdJ("change",function(){const d=t.CHM(e),l=d.$implicit,c=d.index;return t.oxw().changePendingStatusFn(l,c)}),t.TgZ(9,"option",5),t._uU(10,"Pending"),t.qZA(),t.TgZ(11,"option",6),t._uU(12,"Completed"),t.qZA()()()()}if(2&s){const e=n.$implicit;t.xp6(2),t.hij(" ",e.id," "),t.xp6(2),t.Oqu(e.taskAssignedTo),t.xp6(2),t.Oqu(e.description)}}let Z=(()=>{class s{constructor(e){this.taskListService=e}ngOnChanges(e){this.addTask&&this.addPendingTaskFn()}ngOnInit(){this.taskListService.getPendingTaskDataFn().subscribe(e=>{this.pendingTasks=e},e=>{console.log(e)}),this.taskListService.passTaskDataChannel.subscribe(e=>{console.log(e),"pending"==e.status&&this.pendingTasks.push(e)})}addPendingTaskFn(){console.log(this.addTask),this.pendingTasks.push(this.addTask)}changePendingStatusFn(e,i){e.status="completed",this.taskListService.passTaskDataChannel.next(e),this.pendingTasks.splice(i,1)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(g))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-pending-task"]],inputs:{addTask:"addTask"},features:[t.TTD],decls:16,vars:1,consts:[["mb-4",""],[2,"color","rgb(166, 53, 121)"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"change"],["value","pending"],["value","completed"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Pending Tasks!"),t.qZA()(),t.TgZ(3,"table",2)(4,"thead")(5,"tr")(6,"th"),t._uU(7,"Id"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Task Assigned To"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Description"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Status"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,h,13,3,"tr",3),t.qZA()()),2&e&&(t.xp6(15),t.Q6J("ngForOf",i.pendingTasks))},directives:[r.sg,o.YN,o.Kr],styles:[""]}),s})();function f(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"select",4),t.NdJ("change",function(){const d=t.CHM(e),l=d.$implicit,c=d.index;return t.oxw().changeCompletedStatusFn(l,c)}),t.TgZ(9,"option",5),t._uU(10,"Completed"),t.qZA(),t.TgZ(11,"option",6),t._uU(12,"Pending"),t.qZA()()()()}if(2&s){const e=n.$implicit;t.xp6(2),t.hij(" ",e.id," "),t.xp6(2),t.Oqu(e.taskAssignedTo),t.xp6(2),t.Oqu(e.description)}}let C=(()=>{class s{constructor(e){this.taskListService=e}ngOnInit(){this.taskListService.getCompletedTaskDataFn().subscribe(e=>{console.log(e),this.completedTasks=e},e=>{console.log(e)}),this.taskListService.passTaskDataChannel.subscribe(e=>{console.log(e),"completed"==e.status&&this.completedTasks.push(e)})}changeCompletedStatusFn(e,i){e.status="pending",this.taskListService.passTaskDataChannel.next(e),this.completedTasks.splice(i,1)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(g))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-completed-task"]],decls:16,vars:1,consts:[["mb-4",""],[2,"color","rgb(166, 53, 121)"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"change"],["value","completed"],["value","pending"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Completed Tasks!"),t.qZA()(),t.TgZ(3,"table",2)(4,"thead")(5,"tr")(6,"th"),t._uU(7,"Id"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Task Assigned To"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Description"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Status"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,f,13,3,"tr",3),t.qZA()()),2&e&&(t.xp6(15),t.Q6J("ngForOf",i.completedTasks))},directives:[r.sg,o.YN,o.Kr],styles:[""]}),s})();const _=[{path:"",component:(()=>{class s{constructor(e){this.fb=e,this.display=!1,this.addTaskForm=this.fb.group({id:this.fb.control(""),taskAssignedTo:this.fb.control(""),description:this.fb.control(""),status:this.fb.control("")})}ngOnInit(){}openPopupFn(){this.display=!0}addTaskFn(){this.addTask=this.addTaskForm.value,console.log(this.addTaskForm.value),this.display=!1}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(o.qu))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-task-list"]],decls:32,vars:4,consts:[[1,"text-center","mb-4"],[1,"btn","btn-outline-info",3,"click"],["header","Title",3,"visible","modal","visibleChange"],[3,"formGroup"],["for",""],["type","number","formControlName","id",1,"form-control"],["type","text","formControlName","taskAssignedTo",1,"form-control"],["type","text","formControlName","description",1,"form-control"],["name","","id","","formControlName","status",1,"form-select"],["value","pending"],[1,"text-center","mt-2"],[1,"btn","btn-outline-success",3,"click"],[1,"row"],[1,"col-md-6"],[3,"addTask"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return i.openPopupFn()}),t._uU(2,"Add Task"),t.qZA()(),t.TgZ(3,"p-dialog",2),t.NdJ("visibleChange",function(l){return i.display=l}),t.TgZ(4,"div")(5,"form",3)(6,"div")(7,"label",4),t._uU(8,"Id"),t.qZA(),t._UZ(9,"input",5),t.qZA(),t.TgZ(10,"div")(11,"label",4),t._uU(12,"Task Assigned To"),t.qZA(),t._UZ(13,"input",6),t.qZA(),t.TgZ(14,"div")(15,"label",4),t._uU(16,"Description"),t.qZA(),t._UZ(17,"input",7),t.qZA(),t.TgZ(18,"div")(19,"label",4),t._uU(20,"Status"),t.qZA(),t.TgZ(21,"select",8)(22,"option",9),t._uU(23,"Pending"),t.qZA()()(),t.TgZ(24,"div",10)(25,"button",11),t.NdJ("click",function(){return i.addTaskFn()}),t._uU(26,"Add Task"),t.qZA()()()()(),t.TgZ(27,"div",12)(28,"div",13),t._UZ(29,"app-pending-task",14),t.qZA(),t.TgZ(30,"div",13),t._UZ(31,"app-completed-task"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("visible",i.display)("modal",!0),t.xp6(2),t.Q6J("formGroup",i.addTaskForm),t.xp6(24),t.Q6J("addTask",i.addTask))},directives:[T.V,o._Y,o.JL,o.sg,o.wV,o.Fj,o.JJ,o.u,o.EJ,o.YN,o.Kr,Z,C],styles:[""]}),s})()}];let v=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[u.Bz.forChild(_)],u.Bz]}),s})(),A=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[r.ez,v,T.S,o.UX]]}),s})()}}]);