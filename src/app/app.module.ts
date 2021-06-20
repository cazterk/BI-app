import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
// import { Observable } from "rxjs";
// Components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./dashboard/navbar/navbar.component";
import { SidebarComponent } from "./dashboard/sidebar/sidebar.component";
import { SectionSalesComponent } from "./dashboard/sections/section-sales/section-sales.component";
import { SectionOrdersComponent } from "./dashboard/sections/section-orders/section-orders.component";
import { SectionHealthComponent } from "./dashboard/sections/section-health/section-health.component";
import { BarChartComponent } from "./charts/bar-chart/bar-chart.component";
import { LineChartComponent } from "./charts/line-chart/line-chart.component";
import { PieChartComponent } from "./charts/pie-chart/pie-chart.component";
import { ServerComponent } from "./dashboard/server/server.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PaginationComponent } from "./dashboard/pagination/pagination.component";

// Services
import { SalesDataService } from "./services/sales-data.service";
import { ServerService } from "./services/server.service";

import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { LoadingSpinnerComponent } from "./dashboard/loading-spinner/loading-spinner.component";

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
    PaginationComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    ReactiveFormsModule,

    // FormGroup,
    AngularFireModule.initializeApp(environment.firebase)
  ],

  providers: [SalesDataService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
