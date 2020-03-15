import { CollectionService } from './../collection.service';
import { Component, OnInit } from '@angular/core';
import { Collection } from '../collection';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collections-place',
  templateUrl: './collections-place.component.html',
  styleUrls: ['./collections-place.component.scss']
})
export class CollectionsPlaceComponent implements OnInit {

  collections: Collection[];
  name: string;
  constructor(
    private collectionService: CollectionService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('place');
    this.getCollections();
  }

  getColsByPlace() {
    const place = this.route.snapshot.paramMap.get('place');
    this.collectionService.getPlaces(place)
    .subscribe(cols => {
      this.collections = cols;
    });

  }

  getCollections() {
    this.collectionService.getCollections()
    .subscribe(collections => this.collections = collections);
  }

}
