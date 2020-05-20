import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterpriseComponent } from './pages/enterprise/enterprise.component';


const routes: Routes = [
  { path: '', component: EnterpriseComponent }
];

@NgModule({
  declarations: [EnterpriseComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
