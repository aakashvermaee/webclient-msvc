import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  getUser(userInfo) {
    // Get user details from API [POST getUser]
    // if user has token then, send TOKEN along with the request or,
    // send user credentials to verify user and, obtain new TOKEN

    this.http
      .post("/api/user", {
        userName: userInfo.userName,
        email: userInfo.email,
        password: userInfo.password,
        token: userInfo.token
      })
      .subscribe(response => {
        if (localStorage.getItem("token") === null) {
          localStorage.setItem("token", response["token"]);
          localStorage.setItem("tokenExpiration", response["tokenExpiration"]);

          this.router.navigateByUrl('');
        }
      });
  }

  getUsers(token) {
    // send token to Node Micorservice to check
    // user isAdmin if yes then, fetch data else, STOP!!!
    return this.http.post("/admin/users", { token })
  }
}
