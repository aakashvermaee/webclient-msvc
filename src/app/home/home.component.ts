import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  loggedInUser = "";

  constructor() {}

  ngOnInit() {
    if (localStorage.getItem("user")) {
      this.loggedInUser = JSON.parse(localStorage.getItem("user")).userName;
    }
  }
}
