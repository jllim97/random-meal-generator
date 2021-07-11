import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetIsMobile } from './store/global/global.action';
import { tap, distinctUntilChanged} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'random-meal-generator';
  constructor(private bpObserver: BreakpointObserver, private store: Store) {}


  ngOnInit(): void {
    this.bpObserver.observe('(max-width: 920px)').pipe(
      distinctUntilChanged(),
      tap(result => {
        this.store.dispatch(new SetIsMobile(result?.matches));

      })
    ).subscribe();
  }


}
