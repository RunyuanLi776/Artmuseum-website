import { Collection } from './collection';
import { Event } from './eventDate';
export class User {
  firstName: string;

  lastName: string;

  email: string;

  password: string;

  collections: Array<Collection>;

  events: Array<Event>;

  id: string;
}
