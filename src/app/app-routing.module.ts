import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SectionSalesComponent } from "../app/dashboard/sections/section-sales/section-sales.component";
import { SectionOrdersComponent } from "../app/dashboard/sections/section-orders/section-orders.component";
import { SectionHealthComponent } from "../app/dashboard/sections/section-health/section-health.component";
import { SectionSoonComponent } from "./dashboard/sections/section-soon/section-soon.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo
} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "sales", component: SectionSalesComponent },
      { path: "orders", component: SectionOrdersComponent },
      { path: "health", component: SectionHealthComponent },
      { path: "soon", component: SectionSoonComponent }
    ],
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  SectionSalesComponent,
  SectionOrdersComponent,
  SectionHealthComponent
];
