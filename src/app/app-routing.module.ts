import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './form/create/create.component'; 
import { ViewComponent } from './form/view/view.component';
import { EditComponent } from './form/edit/edit.component';


const routes: Routes = [
  // { path: 'create', component: CreateComponent },
  // { path: 'view/:id', component: ViewComponent },
  // { path: 'edit/:id', component: EditComponent },

  { path: 'create', component: CreateComponent },
  { path: 'view', component: ViewComponent },
  { path: 'view/view/:id', component: ViewComponent },
  { path: 'view/edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
