import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { Proyecto } from "../model/proyecto";
import { environment } from "src/environments/environment.prod";
//import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: "root",
})
export class ProyectoService {

  URL = environment.URL + 'proyecto/'; /*
  URL = "http://localhost:8080/proyecto/";
*/
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
/*  uploadImage(file: any, path: string, name: string): Promise<string> {
    return new Promise((resolve) => {
      const filePath = path + "/" + name;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            ref.getDownloadURL().subscribe((res) => {
              const downloadURL = res;
              resolve(downloadURL);
              return;
            });
          })
        )
        .subscribe();
    });
  }*/
}
