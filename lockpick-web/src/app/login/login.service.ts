import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/User";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private homepage: boolean;
  private loginUrl = "http://localhost:8080/api/login";

  /**Login: verifica se lo user/mail e password esistono nel DB*/
  loginUser(user: User) {
    return this.http.post<User>(this.loginUrl, user);
  }

  setHomepage(homepage: boolean) {
    this.homepage = homepage;
  }

  getHomepage() {
    return this.homepage;
  }
}
