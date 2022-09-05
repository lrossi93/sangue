//app.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export interface UsersData {
  name: string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Artificial Intelligence'},
  {id: 1560608796014, name: 'Machine Learning'},
  {id: 1560608787815, name: 'Robotic Process Automation'},
  {id: 1560608805101, name: 'Blockchain'}
];
@Component({
  selector: 'app-root',
  templateUrl: './sample-p-registry.component.html',
  styleUrls: ['./sample-p-registry.component.css']
})
export class SamplePRegistryComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = ELEMENT_DATA;
  url = environment.basePath + 'anag.php'
  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;

  constructor(
    public dialog: MatDialog,
    private http: HttpClient
  ) {}

  ngOnInit(){
    this.listProducts();
  }

  listProducts(): void{
    let path = this.url + '?request=listProducts&id_session='+localStorage.getItem('id_session');
    
    this.http.get<String[]>(
      path,
      {
        responseType: "json"
      }
    ).subscribe(res => {
      console.log(res);
      if(res[0] == "KO"){
        alert("Error retrieving products!");
      }
      else{
        console.log(res[1]); 
        //this.dataSource = res[1];
      }
    });
  }

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      //width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add') {
        this.addRowData(result.data);
      }
      else if(result.event == 'Update') {
        this.updateRowData(result.data);
      }
      else if(result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: any){
    var d = new Date();
    this.dataSource.push({
      id: d.getTime(),
      name: row_obj.name
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj: any){
    this.dataSource = this.dataSource.filter((value, key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj: any){
    this.dataSource = this.dataSource.filter((value, key)=>{
      return value.id != row_obj.id;
    });
  }
}
