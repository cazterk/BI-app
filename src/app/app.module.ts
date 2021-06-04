import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { appRoutes } from './dashboard/routes';

import { NgModule } from '@angular/core';
import{ChartsModule} from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { SectionSalesComponent } from './dashboard/sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './dashboard/sections/section-orders/section-orders.component';
import { SectionHealthComponent } from './dashboard/sections/section-health/section-health.component';
import { from } from 'rxjs';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ServerComponent } from './server/server.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ServerComponent,
    LoginComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    ReactiveFormsModule,
    // FormGroup,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
