import { EventDetailsComponent } from './event-details.component';
import { EventBookComponent } from './../event-book/event-book.component';
import { AuthGuard } from './../auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'eventDetail/:id',
    // component: EventDetailsComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'book', component: EventBookComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDetailsRoutingModule { }
