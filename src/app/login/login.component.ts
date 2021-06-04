import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login:FormGroup;

  constructor(private fb:FormBuilder, private auth:AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onLogin(){
    const {email, password} = this.login.value;
this.auth
.signInWithEmailAndPassword(email, password)
.then(()=> this.router.navigate(['dashboard']));
  }
}
