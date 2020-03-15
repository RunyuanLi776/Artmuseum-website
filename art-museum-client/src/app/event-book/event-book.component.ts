import { Collection } from './../collection';
import { AuthService } from './../auth/auth.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Event } from '../eventDate';

@Component({
  selector: 'app-event-book',
  templateUrl: './event-book.component.html',
  styleUrls: ['./event-book.component.scss']
})
export class EventBookComponent implements OnInit {

  user: User;
  collection: Collection;
  event: Event;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.user = this.authService.currentUser;
  }

}
