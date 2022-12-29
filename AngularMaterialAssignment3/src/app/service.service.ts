import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) 
  { }
  postEmployee(data:any)
  {
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=> {
      return res
    }))
  }
}
