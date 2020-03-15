import { EventsServiceService } from './../services/events-service.service';
import { Event } from './../eventDate';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: Event;
  ifLogin: boolean;

  constructor(
    private route: ActivatedRoute,
    private eventsServiceService: EventsServiceService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getEvent();
    this.ifLogin = this.authService.isLoggedIn;
  }

  getEvent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventsServiceService.getOneEvent(id)
    .subscribe(e => {
      this.event = e;
    });
  }

  setCurrentEvent(e: Event) {
    this.authService.currentEvent = e;
    this.bookEvents();
  }

  bookEvents(): void {
    this.authService.bookEvent().subscribe(res => {
      alert('get feedback successfully');
    });
  }


}
