import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageEventsComponent } from './manage-events/manage-events.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ManageEventsComponent,
    ManageCrisesComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
