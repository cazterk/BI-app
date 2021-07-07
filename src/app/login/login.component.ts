import { Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import "firebase/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  showSpinner: boolean = false;

  @Input()
  error: string;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    this.login = this.fb.group(
      {
        email: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
      },

      { updateOn: "submit" }
    );
    this.showSpinner = true;
  }

  onLogin() {
    const { email, password } = this.login.value;
    this.auth
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        this.error = err.message;
        this.showSpinner = true;
      })
      .then(() => this.router.navigate(["dashboard"]));
    this.showSpinner = false;

    // this.error = null;
  }
}
