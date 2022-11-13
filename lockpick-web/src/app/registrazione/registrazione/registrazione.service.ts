import { Injectable } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { User } from "src/app/model/User";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegistrazioneService {
  constructor(private userService: UserService, private http: HttpClient) {}

  url = "http://localhost:8080/api/user";

  registra(user: User) {
    return this.userService.addUser(user);
  }

  checkEmail(email: string): Observable<boolean> {
    return this.http.get<boolean>(this.url + "/checkEmail?email=" + email);
  }

  checkUsername(username: string) {
    return this.http.get<boolean>(
      this.url + "/checkUsername?username=" + username
    );
  }
}
