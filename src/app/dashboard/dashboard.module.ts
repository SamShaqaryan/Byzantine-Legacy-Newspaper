//angular
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { CommonModule } from '@angular/common';


//components
import { SideNavComponent } from './pages/side-nav/side-nav.component';
import { DashboardComponent } from './dashboard.component';

// angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'

//cdk
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent
  ],
  imports: [ReactiveFormsModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    LayoutModule,
    CommonModule
  ],
  providers: [],
})
export class DashboardModule { }
