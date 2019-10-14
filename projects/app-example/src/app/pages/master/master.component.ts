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
    /* ------------------------------------------------- */
    /* Listen for changes in the route, then highlight   */
    /* the selected item in the list...                  */
    /* ------------------------------------------------- */
    if (this.route.firstChild) {
      this.routeChangeSub$ = this.route.firstChild.paramMap
        .subscribe(map => {
          const characterId = map.get('id');
          if (characterId) {
            this.character$ = this.store.pipe(
              select(selectCharacterById, { id: characterId })
            );
          }
        });
    }
  }

  ngOnDestroy() {
    this.routeChangeSub$.unsubscribe();
  }

}
