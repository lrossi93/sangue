import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { environment, User } from 'src/environments/environment';
import { LoginService } from '../login.service';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-add-forecast',
  templateUrl: './add-forecast.component.html',
  styleUrls: ['./add-forecast.component.css']
})
@Injectable({providedIn: 'root'})
export class AddForecastComponent{

  url = environment.basePath + 'anag.php';
  anno!: FormControl;
  username!: FormControl;   //dropdown
  id_prd!: FormControl;     //dropdown
  qta!: FormControl;
  note!: FormControl;
  qta_approvata!: FormControl;
  costo_unitario!: FormControl;
  isSubmitted: boolean = false;
  loginService!: LoginService;
  selectedUsername: string = "ciao";

  users: any = [];


  constructor(
    private dialogRef: MatDialogRef<AddForecastComponent>,
    private _builder: FormBuilder,
    loginService: LoginService,
    private usersService: UsersService,
    private http: HttpClient
  ) {
    this.loginService = loginService;
    this.anno = _builder.control(new Date().getFullYear(), Validators.required);
    this.username = _builder.control(loginService.getProfile(), Validators.required);
    this.id_prd = _builder.control('', Validators.required);
    this.qta = _builder.control('');
    this.note = _builder.control('');
    if(loginService.getUserCode() == "210"){
      this.qta_approvata = _builder.control("in attesa", Validators.required);
      this.costo_unitario = _builder.control("in attesa", Validators.required);
    }
    else if(loginService.getUserCode() == "220"){
      this.qta_approvata = _builder.control(0, Validators.required);
      this.costo_unitario = _builder.control(0, Validators.required);
      //inoltre, se sono sangueaslno, devo popolare il dropdown con la lista di utenti, 
      //quindi devo chiamare la lista utenti
      this.listUsers("210");
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    this.dialogRef.close(
      {
        anno: this.anno.value,
        username: this.selectedUsername,
        id_prd: this.id_prd.value,
        qta: this.qta.value,
        note: this.note.value,
        qta_approvata: this.qta_approvata.value,
        costo_unitario: this.costo_unitario.value,
        isSubmitted: this.isSubmitted
      }
    );
  }

  getData(): void {
    console.log(
      "anno: " + this.anno.value +
      "username: " + this.username.value +
      "id_prd"
    );
    
  }

  listUsers(userlevel: string | null): void {
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
        return;
      }
      else{
        this.users = res[1];
        console.log('users: ' + this.users);
      }
    });
  }

  appendUsers(userlevel: string | null): void {
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
        return;
      }
      else{
        this.users.push(res[1]);
      }
    });
  }
}
