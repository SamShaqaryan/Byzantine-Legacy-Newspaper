import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay,filter,takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
  @ViewChild(MatSidenav)
 sidenav!: MatSidenav;
 private unsubscribe$:Subject<Boolean> = new Subject();

 constructor(private observer: BreakpointObserver, private router: Router) {}
 ngOnInit(): void {
   
 }
  
 ngAfterViewInit() {
  this.subscribeToRouteChange();
  this.sideNavVisible();
 
 }

 sideNavVisible(){
  this.observer
  .observe(['(max-width: 800px)'])
  .pipe(delay(1), takeUntil(this.unsubscribe$))
  .subscribe((res) => {
    if (res.matches) {
      this.sidenav.mode = 'over';
      this.sidenav.close();
    } else {
      this.sidenav.mode = 'side';
      this.sidenav.open();
    }
  });

 }

 subscribeToRouteChange(){
  this.router.events
  .pipe(
    filter((e) => e instanceof NavigationEnd),
    takeUntil(this.unsubscribe$)
  )
  .subscribe(() => {
    if (this.sidenav.mode === 'over') {
      this.sidenav.close();
    }
  });
 }
 ngOnDestroy(): void {
   this.unsubscribe$.next(true);
   this.unsubscribe$.unsubscribe();
 }
}
