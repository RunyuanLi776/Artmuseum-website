import { Component, OnInit } from '@angular/core';
import { Collection } from '../collection';
import { CollectionService } from '../collection.service';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collections : Collection[] = [];
  cols: Collection[];
  collection: Collection;
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    // this.cols = this.ifSelectedPlace();
    this.getCollections();
  }
  getCollections(){
    this.collectionService.getCollections()
    .subscribe(collections => this.collections = collections);
  }

  ifSelectedPlace(): Collection[] {
    if (this.collectionService.placeCols !== undefined){
      return this.collectionService.placeCols;
    }
    return [];
  }

}
