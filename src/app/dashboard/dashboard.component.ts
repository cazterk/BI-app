import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private auth:AngularFireAuth,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.auth.signOut()
  }

  onLogout(){
this.auth.signOut().then(() => this.router.navigate(['login']));
  }
}
