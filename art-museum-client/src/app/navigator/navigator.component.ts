import { Component, OnInit, Input } from '@angular/core';
import { Collection} from '../collection';
import { CollectionService} from '../collection.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
   collections: Collection[];
   collection: Collection;
   collections$: Observable<Collection>;

  constructor(private collectionService: CollectionService,
    private route: ActivatedRoute, private router: Router,) {
   }

  ngOnInit() {
    // this.getPlace1();
    // this.collections$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap)=>
    //   this.collectionService.getPlace(params.get('place')))
    // );
  }

  // gotoPlaces(collection: Collection){
  //   let collectionPlace = collection ? collection.Place : null;
  //   this.router.navigate(['/place', {place: collectionPlace}]);
  // }

  //  getPlace1(): void{
  //   const Place = this.route.snapshot.paramMap.get('place');
  //   this.collectionService.getPlace(Place)
  //   .subscribe(c => this.collection = c);
  // }

  onClick(place: string){
    this.collectionService.getPlace(place);
    // // this.router.navigate(['./collection']);
    // this.location.reload();
  }
}
