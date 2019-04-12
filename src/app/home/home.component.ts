import { Component, OnInit } from "@angular/core";
import jwtDecode from 'jwt-decode';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  loggedInUser = "";

  constructor() {}

  ngOnInit() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem('token');
      const tokenPayload = jwtDecode(token);
      this.loggedInUser = tokenPayload['userName'];
    }
  }
}
