import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Character, selectAllCharacters, selectCharacterById } from '../../state';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit, OnDestroy {

  public routeChangeSub$: Subscription;
  public character$: Observable<Character>;
  public characters$: Observable<Character[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<any>) {
      this.characters$ = this.store.select(selectAllCharacters);
  }

  ngOnInit() {
    this.routeChangeSub$ = this.route.firstChild.paramMap
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

  select(data) {
    this.router.navigate(['detail', data.id], { relativeTo: this.route, state: data });
  }

}
