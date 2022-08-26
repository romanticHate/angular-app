import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = 'https://localhost:44350/api';  

  constructor(private http: HttpClient) { }

  getAllCommand(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/command');
  }
  getCommandListByPlatform(platformName:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl+'/command/GetByPlatform?platformName='}${platformName}`);
  } 
  
  addCommand(val: any) {
    return this.http.post(this.APIUrl + '/command/Insert', val);
  }
 
  updateCommand(val: any) {
    return this.http.put(this.APIUrl + '/command/Update', val);
  }

  deleteCommand(id: number) {
    return this.http.delete(`${this.APIUrl+'/command'}/${id}`);
  }
  getByIdCommand(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.APIUrl+'/command'}/${id}`);
  }  
}
