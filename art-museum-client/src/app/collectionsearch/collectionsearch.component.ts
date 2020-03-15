import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Collection } from '../collection';
import { CollectionService } from '../collection.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { id } from 'date-fns/locale';

@Component({
  selector: 'app-collectionsearch',
  templateUrl: './collectionsearch.component.html',
  styleUrls: ['./collectionsearch.component.scss']
})
export class CollectionsearchComponent implements OnInit {

  //  collection$: Observable<Collection[]>;
  //  private searchTerms = new Subject<string>();
  collection: Collection;
  

  constructor(private collectionService: CollectionService,
    ) { }


  ngOnInit() {
     this.getCollections();
  }

  getCollections(): void{
    // const id = this.route.snapshot.paramMap.get('id');
    // this.collection = this.collectionService.getCollection(id);
  }

}
