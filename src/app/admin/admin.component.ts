import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  users = {};

  constructor(private auth: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem("token");
    this.auth.getUsers(token).subscribe(res => {
      this.users = res;
    });
  }
}
