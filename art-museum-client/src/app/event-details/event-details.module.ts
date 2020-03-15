import { EventBookComponent } from './../event-book/event-book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDetailsRoutingModule } from './event-details-routing.module';


@NgModule({
  declarations: [
    EventBookComponent,
  ],
  imports: [
    CommonModule,
    EventDetailsRoutingModule
  ]
})
export class EventDetailsModule { }
