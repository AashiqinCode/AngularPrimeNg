import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Emp } from "../domain/emp";

@Injectable()
export class EmpService {
  constructor(private http: HttpClient) {}

  getCarsSmall() {
    return this.http
      .get<any>("assets/data/emp_details.json")
      .toPromise()
      .then((res) => <Emp[]>res.data)
      .then((data) => data);
  }
}
