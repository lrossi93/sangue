import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.basePath + 'anag.php';
  constructor(
    private http: HttpClient
  ) { }

  listUsers(): any[] {
    let path = this.url + '?request=listUsers&id_session='+localStorage.getItem('id_session')+'&userlevel='+localStorage.getItem('id_profile');
    
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
        console.log('>>>>>users: ' + res[1]);
        return res[1]; 
      }
    });
    return [];
  }
}
