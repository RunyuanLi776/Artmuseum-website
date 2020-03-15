import { CollectionsPlaceComponent } from './collections-place/collections-place.component';
import { HomeComponent } from './home/home.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsearchComponent } from './collectionsearch/collectionsearch.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { CollectionComponent } from './collection/collection.component';
import { from } from 'rxjs';
import { EventsComponent } from '../app/events/events.component';
import { RegisterComponent } from './register/register.component';
import { SupportComponent } from './support/support.component';



const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'eventDetail/:id', component: EventDetailsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'support', component: SupportComponent},
  // {path: '', redirectTo: '/collection', pathMatch: 'full' },
  {path: 'collection/:place', component: CollectionsPlaceComponent},
  {path: 'collection', component: CollectionComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
