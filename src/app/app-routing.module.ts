import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContractMonitorComponent } from './contract-monitor/contract-monitor.component';

const routes: Routes = [
  {path: '', component: DashboardComponent,
  children: [
    {path: 'acompanhamento', component: ContractMonitorComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
