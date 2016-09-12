import {Component} from "@angular/core";
import {User} from "./shared/user/user";

@Component({
  selector: "my-app",
  template: "pages/login/login.html",
  styleUrls: [ "pages/login/login-common.css", "pages/login/login.css" ]
})
export class AppComponent {
  private user: User;
  private isLoggingIn: boolean = true;

  constructor() {
    this.user = new User();
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    alert("Login");
  }

  signUp() {
    alert("signup");
    //this._userService.register(this.user);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}