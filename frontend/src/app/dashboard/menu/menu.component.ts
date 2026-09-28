import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { AuthService } from '../../Service/auth.service';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from 'src/app/Service/drawer.service';
declare var google: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('routeFade', [
      transition('* <=> *', [
        query(':leave', style({ display: 'none' }), { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(12px)' }),
          animate('380ms cubic-bezier(0.22, 1, 0.36, 1)', style({ opacity: 1, transform: 'none' })),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class MenuComponent implements OnInit,  AfterViewInit {
  @ViewChild(MatDrawer) drawer!: MatDrawer;
  map: any;
  directionsService: any;
  directionsRenderer: any;
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  constructor(
    private authService: AuthService, 
    private _drawerService: DrawerService,
    ){}

  ngOnInit(): void {
    this.authService.startInactivityTimer();
  }

  ngAfterViewInit() {
    this._drawerService.setDrawer(this.drawer);
  }

  routeKey(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute.routeConfig?.path : '';
  }
}
