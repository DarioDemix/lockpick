import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from "../model/User";
import { catchError, map, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  private userUrl = "http://localhost:8080/api/user";

  /**GET users from the server */
  //torna un Observable di array di User
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl).pipe(
      tap((_) => console.log("trovati users")),
      catchError(this.handleError("getUsers", []))
    );
  }

  /**
   * Error handler generico, accetta come parametri il nome dell'operazione fallita e
   * il valore da far tornare come risultato, cioè il tipo di ritorno che l'app si aspetta.
   * Restituisce
   *
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    //da commentare bene
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user).pipe(
      tap((newUser: User) => console.log("added user")),
      catchError(this.handleError<User>("addHero"))
    );
  }
}
