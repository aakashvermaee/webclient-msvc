import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  loginUser(e) {
    e.preventDefault();
    const userInfo = this.buildUserInfo(e);

    this.auth.getUser(userInfo);
  }

  private buildUserInfo(event) {
    const { target } = event;
    const userNameOrEmail = target.querySelector("#userNameOrEmail").value;
    const password = target.querySelector("#password").value;
    const token = localStorage.getItem("token");

    let userInfo = {};

    if (userNameOrEmail.includes("@")) {
      userInfo = {
        email: userNameOrEmail,
        password,
        token
      };
    } else {
      userInfo = {
        userName: userNameOrEmail,
        password,
        token
      };
    }

    return userInfo;
  }
}
