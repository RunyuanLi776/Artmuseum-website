import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsearchComponent } from './collectionsearch/collectionsearch.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionService } from './collection.service';
import { EventsComponent } from './events/events.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthModule } from './auth/auth.module';
import { RegisterComponent } from './register/register.component';
import { EventBookComponent } from './event-book/event-book.component';
import { EventDetailsModule } from './event-details/event-details.module';
import { SupportComponent } from './support/support.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { HomeComponent } from './home/home.component';
import { CollectionsPlaceComponent } from './collections-place/collections-place.component';


@NgModule({
  declarations: [
    AppComponent,
    CollectionsearchComponent,
    NavigatorComponent,
    CollectionComponent,
    EventsComponent,
    EventsCalendarComponent,
    EventDetailsComponent,
    RegisterComponent,
    SupportComponent,
    CollectionDetailComponent,
    HomeComponent,
    CollectionsPlaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    EventDetailsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
