import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private http: HttpClient) { }

  getVersionPromise(): Observable<any>  {
    let path = environment.basePath + 'anag.php?request=getVersion&id_session=' + localStorage.getItem("id_session");
    console.log(path);
    return this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    )
  }

  checkVersion() {
    this.getVersionPromise().subscribe(
      res => {
        console.log("Checking version...");
        console.log("Local version: " + localStorage.getItem("version"));
        console.log("Local env version: " + environment.version);
        if(res[0] == "OK") {
          let localVersion = localStorage.getItem("version");
          if(localVersion == null || localVersion! < res[1]) {
            console.log("Remote version: " + res[1]);
            localStorage.setItem("version", res[1]);
            console.log("New local version: " + localStorage.getItem("version"));
            environment.version = res[1];
            console.log("New local env version: " + environment.version);
            window.location.reload();
          }
          if(localVersion! > res[1]) {
            console.log("Local version higher than server saved one!");
            this.setVersionPromise(localVersion!).subscribe(
              res => {
                if(res[0] == "OK") {
                  console.log("Version " + environment.version + " saved on server!");
                }
                else {
                  console.error("Error setting version!");
                }
              }
            );
          }
        }
        else {
          console.error("Error checking version!");
        }
      }
    );
  }

  setVersionPromise(version: string): Observable<any> {
    return this.http.post<String[]>(
      environment.basePath + 'anag.php', 
      {
        request: 'setVersion',
        id_session: localStorage.getItem("id_session"),
        version: version, 
      }
    )
  }
}
