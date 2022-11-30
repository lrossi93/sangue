import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.basePath + 'anag.php';
  users: any = [];
  constructor(
    private http: HttpClient
  ) { }

  listUsers(userlevel: string | null): any[] {
    let path = this.url + '?request=listUsers&id_session='+localStorage.getItem('id_session')+'&userlevel='+userlevel;
    
    console.log(path);

    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      console.log(res);
      if(res[0] == "KO"){
        alert("Error retrieving products!");
        return null;
      }
      else{
        //console.log('>>>>>users: ' + res[1]);
        this.users = res[1];
        console.log(this.users);
        return res[1]; 
      }
    });
    return [];
  }

  listUsersPromise(userlevel: string | null): Observable<any> {
    let path = this.url + '?request=listUsers&id_session='+localStorage.getItem('id_session')+'&userlevel='+userlevel;

    return this.http.get<String[]>(
      path,
      { responseType: "json" }
    )
  }

  getUserById(id: string, users: any) {
    for(var i = 0; i < users.length; ++i) {
      if(id == users[i].client) {
        console.log("Returning " + users[i].client);
        return users[i].client;
      }
    }
  }
}
