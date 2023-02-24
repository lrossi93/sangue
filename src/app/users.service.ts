import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, User } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.basePath + 'anag.php';
  users: any = [];
  constructor(
    private http: HttpClient,
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
        console.error("Error retrieving products!");
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
        //console.log("Returning " + users[i].client);
        return users[i].client;
      }
    }
  }

  getUsersGlobally() {
    this.listUsersPromise("210").subscribe(
      res => {
        if(res[0] == "OK") {
          this.users = res[1];
          environment.globalUsers = res[1];
          //console.log(environment.globalUsers);
        }
        else{
          console.error("Error retrieving users!");
        }
      }
    );
  }
  
  getCurrentUser(users: User[]) {
    for(var i = 0; i < users.length; ++i) {
      
      if(users[i].id == localStorage.getItem("sangue_username")) {
        console.log(users[i].client);
        environment.currentUser.id = users[i].id;
        environment.currentUser.username = users[i].username;
        environment.currentUser.client = users[i].client;   
        return;
      }
    }
    environment.currentUser.id = localStorage.getItem("sangue_username")!;
  }
}
