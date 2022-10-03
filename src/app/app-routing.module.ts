import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'taskList',
    loadChildren: () => import('./features/modules/task-list/task-list.module').then(m => m.TaskListModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
