import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Character, selectCharacterById } from '../../state';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  public routeChangeSub$: Subscription;
  public character$: Observable<Character>;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private store: Store<any>) {

  }

  ngOnInit() {
    this.routeChangeSub$ = this.route.paramMap
      .subscribe(map =>
        this.character$ =
          this.store.pipe(
            select(selectCharacterById, { id: map.get('id') })
          )
      );
  }

  ngOnDestroy() {
    this.routeChangeSub$.unsubscribe();
  }

}
