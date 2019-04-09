import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "webclient";
  loggedInUser = "";

  ngOnInit() {
    const tokenExpiration: Number = Number.parseInt(
      localStorage.getItem("tokenExpiration")
    );
    const elapsedTime: Number = Math.round(new Date().getTime() / 1000);

    if (tokenExpiration <= elapsedTime) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      localStorage.removeItem("user");
    }
  }
}
