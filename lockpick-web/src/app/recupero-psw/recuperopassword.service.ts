import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/User";
import { UserService } from "../service/user.service";

@Injectable({
  providedIn: "root",
})
export class RecuperoPasswordService {
  /**invioMail(recuperoPwdData: string): any {
    throw new Error("Method not implemented.");
  }*/

  constructor(private http: HttpClient, private userService: UserService) {}

  private recuperUrl = "http://localhost:8080/api/recuperoPwd";
  private resetUrl = "http://localhost:8080/api/resetPassword";

  /** invio mail per recupero pwd */
  recuperoPwd(user: User) {
    return this.http.post<any>(this.recuperUrl, user);
  }

  resetPwd(userUpdated: User) {
    return this.http.post<any>(this.resetUrl, userUpdated);
  }
}
