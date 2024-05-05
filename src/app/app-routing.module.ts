import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseDetailViewComponent } from './components/case-detail-view/case-detail-view.component';
import { CasesComponent } from './components/cases/cases.component';

const routes: Routes = [
  { path: '', component: CasesComponent },
  { path: 'view/:id', component: CaseDetailViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
