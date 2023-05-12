import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Proyecto } from "../model/proyecto";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class ProyectoService {

  URL = environment.URL + 'proyecto/'; 

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.URL + "list");
  }

  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.URL + `detail/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.URL + "new", proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
