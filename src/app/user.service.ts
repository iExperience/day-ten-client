import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(auth: any, cb: Function) {
    this.http
      .post("http://localhost:3000/api/auth", auth)
      .subscribe(
        (response: any) => {
          // return response; 
          cb(null, response);
        },
        err => {
          cb(err, null);
        }
      );
  }
}


// var userService: UserService;

// userService.login({
//   email: "", 
//   password: ""
// }, (err, result) => {
//   if (err) {

//   }

//   console.log(result.name, result.id);
//   this.user = result;
// });